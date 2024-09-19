<template>
    <div class="control-pane">
      <div class="control-section">
        <div class="description-container e-card">
          <div class="e-card-header-title" style="font-weight: 600">AI Driven NL Querying in Query Builder</div>
          <div class="e-card-content">
            <p>
              The Natural Language Querying feature enables users to input queries in plain language, which the system then
              interprets to automatically generate the appropriate database queries. This simplifies the process of data
              retrieval, allowing users to obtain insights without needing to understand complex query syntax.
            </p>
          </div>
        </div>
        <div id="wrapper">
          <ejs-tab id="tab">
            <e-tab-items>
              <e-tab-item :header="headerText[0]" content="#prompt-ui"></e-tab-item>
              <e-tab-item :header="headerText[1]" content="#querybuilder-ui"></e-tab-item>
            </e-tab-items>
          </ejs-tab>
          <div id="prompt-ui">
            <div id="customTbarDialog">
              <span class="e-text">Instruct AI</span>
              <textarea id="text-area" aria-label="ai assistant query box" placeholder="find all users who lives in los angeles and have over 1000 credits"></textarea>
            </div>
          </div>
          <div style="display: none">
            <div id="querybuilder-ui">
              <ejs-querybuilder id="querybuilder" class="row" ref="qryBldrObj" :dataSource="users" :columns="columnData"></ejs-querybuilder>
            </div>
          </div>
          <div class="e-custom-elem">
            <ejs-button id="submit" iconCss="e-icons e-reset" @click="clicked" :isPrimary="true">Generate Query</ejs-button>
          </div>
          <div class="e-custom-elem">
            <span class="e-text">Results from your AI generated Query</span>
            <ejs-grid id="grid" ref="gridInstance" :dataSource="users" :allowPaging="true" :pageSettings="{ pageSize: 10 }" style="margin-top: 10px">
              <e-columns>
                <e-column field="id" headerText="ID" textAlign="Right" width="120"></e-column>
                <e-column field="name" headerText="Name" width="120"></e-column>
                <e-column field="email" headerText="Email" width="150"></e-column>
                <e-column field="address" headerText="Address" width="120"></e-column>
                <e-column field="city" headerText="City" width="120"></e-column>
                <e-column field="state" headerText="State" width="120"></e-column>
                <e-column field="credits" headerText="Credits" width="120"></e-column>
              </e-columns>
            </ejs-grid>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { enableRipple, isNullOrUndefined } from '@syncfusion/ej2-base';
import { QueryBuilderComponent } from '@syncfusion/ej2-vue-querybuilder';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-vue-grids';
import { Query, Predicate } from '@syncfusion/ej2-data';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { getAzureTextAIRequest } from '../common/openai';

enableRipple(true);

export default {
    name: 'NLQuerying',
    components: {
      'ejs-querybuilder': QueryBuilderComponent,
      'ejs-button': ButtonComponent,
      'ejs-tab': TabComponent,
      'e-tab-items': TabItemsDirective,
      'e-tab-item': TabItemDirective,
      'ejs-grid': GridComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective,
    },
    data() {
      return {
        headerText: [{ text: 'Natural Language Query' }, { text: 'Query Builder UI' }],
        columnData: [
          { field: 'id', label: 'ID', type: 'number' },
          { field: 'name', label: 'Name', type: 'string' },
          { field: 'email', label: 'Email', type: 'string' },
          { field: 'address', label: 'Address', type: 'string' },
          { field: 'city', label: 'City', type: 'string' },
          { field: 'state', label: 'State', type: 'string' },
          { field: 'credits', label: 'Credits', type: 'number' }
        ],
        users: []
      };
    },
    mounted() {
      createSpinner({
        target: document.getElementById('grid')
      });
      document.getElementById('text-area').value = 'find all users who lives in los angeles and have over 1000 credits';
      this.users = this.generateRandomUsers(20);
    },
    methods: {
      generateRandomUsers(count) {
        const names = ["John", "Jane", "Bob", "Alice", "Tom", "Sally", "Jim", "Mary", "Peter", "Nancy"];
        const cities = ["Los Angeles", "San Diego", "New York", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "Dallas", "San Jose"];
        const states = ["California", "New York", "Illinois", "Texas", "Arizona", "Pennsylvania"];
        const streets = ["Elm St", "Oak St", "Maple Ave", "Pine St", "Cedar St", "Birch St"];
        const emails = ["example.com", "test.com", "demo.com"];
        const users = [];

        for (let i = 0; i < count; i++) {
          const id = i + 1;
          const name = names[Math.floor(Math.random() * names.length)];
          const email = `${name.toLowerCase()}${id}@${emails[Math.floor(Math.random() * emails.length)]}`;
          const address = `${Math.floor(Math.random() * 10000)} ${streets[Math.floor(Math.random() * streets.length)]}`;
          const city = cities[Math.floor(Math.random() * cities.length)];
          const state = states[Math.floor(Math.random() * states.length)];
          const zipcode = `${Math.floor(10000 + Math.random() * 90000)}`;
          const credits = Math.floor(Math.random() * 2001);
          users.push({ id, name, email, address, city, state, zipcode, credits });
        }

        return users;
      },
      clicked() {
        showSpinner(document.getElementById('grid'));
        let textArea = "write SQL query to " + document.querySelector('#text-area').value + " from the single table without changing the given values";
        let aiOutput = getAzureTextAIRequest(textArea);
        aiOutput.then((result) => {
          let val = result.split("```sql")[1].split("WHERE ")[1].split(";\n")[0];
          val = val.replace("\n", "");
          this.$refs.qryBldrObj.setRulesFromSql(val);
          let predicate = this.$refs.qryBldrObj.getPredicate(this.$refs.qryBldrObj.getValidRules());
          let query;
          if (isNullOrUndefined(predicate)) {
            query = new Query();
          } else {
            query = new Query().where(predicate);
          }
          this.$refs.gridInstance.query = query;
          this.$refs.gridInstance.refresh();
          hideSpinner(document.getElementById('grid'));
        });
      }
    }
};
</script>

<style>
#wrapper {
    margin: 10px;
    border: 1px solid lightgray;
    border-radius: 4px;
}

#text-area{
    width: calc(100% - 22px);
    height: 100px;
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
}

.e-tab .e-content {
    padding: 16px;
}

.e-text {
    font-weight: bold;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
    font-size: 14px;
}

.e-custom-elem {
    margin-bottom: 16px;
    margin-left: 16px;
    width: calc(100% - 32px);
}
</style>