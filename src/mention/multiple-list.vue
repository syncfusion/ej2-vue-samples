<template>
<div>
    <div class="col-lg-12 control-section">
        <div id="mention-multiplelist">
            <table>
                <tr>
                    <td>
                        <label id="label">Start typing <code>@</code>, <code>#</code>, <code>$</code> or <code>%</code> to select the respective values</label>
                        <div id="multipleList" placeHolder="Type here..!"></div>

                        <ejs-mention id='employees' mentionChar='@' :target='target' :dataSource='data' :fields='remoteFields' 
                        :query='query' popupWidth='250px' popupHeight='215px' allowSpaces='true' suggestionCount='15'></ejs-mention>

                        <ejs-mention id='project' mentionChar='#' :target='target' :dataSource='projectsData' :fields='projectfields' allowSpaces='true' :displayTemplate="'dTemplate'">
                            <template v-slot:dTemplate="{data}"><span class="e-success">{{data.Value}}</span></template>
                        </ejs-mention>

                        <ejs-mention id='cost' mentionChar='$' :target='target' :dataSource='costData' :fields='costfields' allowSpaces='true' :displayTemplate="'dTemplate'">
                            <template v-slot:dTemplate="{data}"><span class="e-error">{{data.Value}}</span></template>
                        </ejs-mention>

                        <ejs-mention id='status' mentionChar='%' :target='target' :dataSource='statusData' :fields='statusfields' allowSpaces='true' :displayTemplate="'dTemplate'">
                            <template v-slot:dTemplate="{data}"><span class="e-warning">{{data.Value}}</span></template>
                        </ejs-mention>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the Mention component. Type the <code>@</code> character in the editable element and select or tag the user from the suggestion list.</p>
    </div>
    <div id="description">
        <p>The <code>Mention</code> is a component used to display a list of items that the users can select or tag from the list suggested. You can use the <code>@</code> mention support with the <code>input</code>, <code>textarea</code>, and <code>contenteditable</code> div elements.</p>
        <p>In the above sample, the input and div elements are configured with <code>@</code> mentions listing the <code>emails</code> and <code>comments</code> contents.</p>
    </div>
</div>
</template>

<script>
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import data from './dataSource.json';

var remoteData = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/Employees',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

export default {
        components: {
            'ejs-mention': MentionComponent
        },
        data: function() {
        return {
          target: "#multipleList",
          data: remoteData,
          projectfields : {text: 'Value'},
          costfields : {text: 'Value'},
          statusfields : {text: 'Value'},
          remoteFields: { text: 'FirstName', value: 'EmployeeID' },
          query: new Query().select(['FirstName', 'EmployeeID']).requiresCount(),
          projectsData : data['projects'],
          costData : data['useCosts'],
          statusData : data['status'],
        };
    }
}
</script>

<style scoped>
    #mention-multiplelist #multipleList {
        min-height: 100px;
        border: 1px solid #D7D7D7;
        width: 600px;
        font-size: 14px;
        padding: 8px;
        border-radius: 4px;
    }
    #mention-multiplelist {
        margin: 0 auto;
        width: 600px;
    }
    #mention-multiplelist #label {
        font-size: 15px;
        font-weight: 600;
    }
    div#multipleList[placeholder]:empty:before {
        content: attr(placeholder);
        color: #555;
    }
    @media screen and (max-width: 1010px) {
        #mention-multiplelist #multipleList,
        #mention-multiplelist, #mention-multiplelist table{
            width: 100%;
        }
    }
</style>
