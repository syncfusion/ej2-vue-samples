<template>
<div>
      <div class="col-md-9 control-section">
        <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="Selection" 
                :dataSource= "data"        
                :height = "height"       
                :highlightWeekends= 'true'  
                :allowSelection = 'true'
                :taskFields= "taskFields"
                :labelSettings= "labelSettings"
                :treeColumnIndex= "1"
                :selectionSettings= "selectionSettings"
                :splitterSettings= "splitterSettings"
                :projectStartDate= "projectStartDate"
                :projectEndDate= "projectEndDate">
                </ejs-gantt>
      </div>
    </div>
        <div class="col-md-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 30%">
                <div>Selection Mode</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div>
                     <ejs-dropdownlist ref='selectionmode' id='selectionmode' width='110px' :dataSource='selectionModeData' value='Row' :fields='selectionModeFields'></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>Selection Type</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div>
                    <ejs-dropdownlist ref='selectiontype' width='110px' id='selectiontype' :dataSource='selectionTypeData' value='Single' :fields='selectionTypeFields'></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>Toggle Selection</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div>
                    <ejs-dropdownlist ref='toggle' width='110px' id='toggle' :dataSource='selectionToggleData' :value='toggleValue' :fields='selectionToggleFields'></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>
                    <ejs-button ref='perform' v-on:click.native="perform">Update</ejs-button>
                </div>

            </td>
        </tr>
    </table>
        </div>
    <div id="action-description">
    <p> The selection feature enables you to highlight row or cell. It can be enabled by setting
        <code>allowSelection</code> to <code>true</code>.</p>
</div>

<div id="description">
    <p>
        The Gantt component supports two types of selection that can be set by using the <code>selectionSettings.type</code> property.
        They are:
    </p>
    <ul>
            <li><code>Single</code> - Sets a single value by default and allows only selection of a single row or a cell.</li>
            <li><code>Multiple</code> - Allows you to select multiple rows or cells. To perform the multi-selection, press and hold the CTRL key and click the desired rows or cells.</li>
    </ul>
    <p>
        The Gantt component supports three types of selection modes that can be set by using the <code>selectionSettings.mode</code> property.
        They are:
    </p>
    <ul>
            <li><code>Row</code> - Allows you to select only rows, and the row value is set by default.</li>
            <li><code>Cell</code> - Allows you to select only cells.</li>
            <li><code>Both</code> - Allows you to select rows and cells at the same time..</li>
    </ul>
    <p>
        The Gantt component supports toggle selection that can be set by using the <code>selectionSettings.enableToggle</code> property.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { DropDownListPlugin, DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin, ClickEventArgs} from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: projectNewData,
            height: '450px',             
            taskFields: {
               id: 'TaskID',
               name: 'TaskName',
               startDate: 'StartDate',
               endDate: 'EndDate',
               duration: 'Duration',
               progress: 'Progress',
               dependency: 'Predecessor',
               child: 'subtasks'
            },
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            selectionSettings: {
                mode: 'Row',
                type: 'Single',
                enableToggle: false
            },
            projectStartDate: new Date('03/27/2019'),
            projectEndDate: new Date('07/06/2019'),
            selectionModeData: [
                { id: 'Row', type: 'Row' },
                { id: 'Cell', type: 'Cell' }
            ],
            selectionModeFields: {
                text: 'type', value: 'id'
            },
            selectionTypeData: [
                { id: 'Single', type: 'Single' },
                { id: 'Multiple', type: 'Multiple' }
            ],
            selectionTypeFields: {
                text: 'type', value: 'id'
            },
            selectionToggleData: [
                { id: true, type: 'Enable' },
                { id: false, type: 'Disable' }
            ],
            selectionToggleFields: {
                text: 'type', value: 'id'
            },
            toggleValue: false
      };
  },
  provide: {
      gantt: [Selection]
  },
  methods: {
    perform: function(ClickEventArgs) {
        let mode = this.$refs.selectionmode.ej2Instances.value;
        let type = this.$refs.selectiontype.ej2Instances.value;
        let toggle = this.$refs.toggle.ej2Instances.value;
        this.$refs.gantt.ej2Instances.selectionSettings.mode = mode;
        this.$refs.gantt.ej2Instances.selectionSettings.type = type;
        this.$refs.gantt.ej2Instances.selectionSettings.enableToggle = toggle;
    },
  }
});
</script>