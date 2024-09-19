<template>
    <div>
      <ejs-treegrid
        ref="treegrid"
        :dataSource="projectData"
        idMapping="CategoryId"
        parentIdMapping="ParentId"
        :treeColumnIndex="1"
        :width="600"
        :toolbar="toolbar"
        @created="created"
      >
        <e-columns>
          <e-column field="CategoryId" headerText="Category Id" :isPrimaryKey="true" textAlign="Right" :width="60"></e-column>
          <e-column field="CategoryName" headerText="Category Name" :width="100"></e-column>
          <e-column field="Status" headerText="Status" :width="70"></e-column>
          <e-column field="OrderDate" headerText="Last Order Date" format="yMd" :width="90"></e-column>
        </e-columns>
      </ejs-treegrid>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from '@syncfusion/ej2-vue-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { getAzureChatAIRequest } from '../common/openai';
import { projectData } from './data-source';

export default defineComponent({
    name: 'App',
    components: {
      'ejs-treegrid': TreeGridComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective,
      'ejs-button': ButtonComponent
    },
    provide: {
      treegrid: [Toolbar, Edit]
    },
    data() {
      return {
        projectData: projectData,
        toolbar: [{ template: `<button id='smartdata'>Smart Data Restructure</button>` }]
      };
    },
    methods: {
      created() {
        let button = document.getElementById('smartdata') as HTMLButtonElement;
        button.onclick = this.restructureData;
      },
      restructureData() {
        const treegrid = (this.$refs.treegrid as any).ej2Instances;
        treegrid.showSpinner();
        let input = `I want you to act as a TreeGrid Data Organizer.
                Your task is to organize a dataset based on a hierarchical structure using 'CategoryId' and 'ParentId'.
                Each item in the dataset has a 'CategoryName' representing categories, and some categories have a null 'ParentId', indicating they are top-level categories. 
                Your role will be to meticulously scan the entire dataset to identify related items based on their 'CategoryName' values and nest them under the appropriate top-level categories by updating their 'ParentId' to match the 'CategoryId' of the corresponding top-level category.
                For example, if a category like 'Furniture' exists, you should scan the dataset for items such as 'Chair' and 'Table' and update their 'ParentId' to the 'CategoryId' of 'Furniture'.
                The output should be the newly prepared TreeGridData with correctly assigned 'ParentId' values. Please ensure that all subcategories are correctly nested under their respective top-level categories .
                Return the newly prepared TreeGridData alone and don't share any other information with the response:` + JSON.stringify(treegrid.dataSource);
        let aioutput: any = getAzureChatAIRequest({ messages: [{ role: 'user', content: input }] });
        aioutput.then((result: any) => {
          let cleanedJsonData = result.replace(/^\n|\n?$/g, '');
          treegrid.dataSource = JSON.parse(cleanedJsonData);
          treegrid.hideSpinner();
        });
      }
    }
});
</script>