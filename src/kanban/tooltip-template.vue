<template>
  <div>
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <ejs-kanban ref= "KanbanObj" id="kanban" keyField="Status" :dataSource="kanbanData" :enableTooltip="enableTooltip"  :tooltipTemplate= "tooltipTemplate" 
           :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
    </div>
   <div class="col-lg-3 property-section">
    <table id="property" title="Properties">
        <tbody>
            <tr>
                <td>
                    <div>
                    <ejs-checkbox id="enableTooltip" label='Enable Tooltip' :checked="true" :change="onChange">
                    </ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                    <ejs-checkbox id="enableTooltipTemplate" label='Enable Tooltip Template' :checked="true" :change="onTemplateChange">
                    </ejs-checkbox>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
   <div id="action-description">
    <p>
        This sample demonstrates how to customize the tooltip messages in Kanban cards. You can enable or disable the
        tooltip
        and its template.
    </p>
</div>
<div id="description">
    <p>
        The Kanban provides an option to show default tooltip and templated tooltip using the <code>enableTooltip</code>
        and <code>tooltipTemplate</code> properties.
    </p>
    <ul>
        <li><code>enableTooltip:</code> If you set this property to true, the cards show a tooltip with default format.
        </li>
        <li><code>tooltipTemplate:</code> If you set <code>enableTooltip</code> property to true and configured the
            tooltipTemplate, the cards show a
            tooltip with templated content.</li>
    </ul>
</div>
</div>
</template>
<style>
    .e-kanbantooltiptemp {
        width: 250px;
        padding: 3px;
    }

    .e-kanbantooltiptemp>table {
        width: 100%;
    }

    .e-kanbantooltiptemp td {
        vertical-align: top;
    }
</style>
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
import { kanbanData } from "./datasource";

Vue.use(KanbanPlugin);
Vue.use(CheckBoxPlugin);

var tooltipVue = Vue.component("tooltipTemplate", {
        template:'<div class="e-kanbantooltiptemp"><table><tr><td class="e-kanban-card-details"><table>'+
        '<colgroup><col style="width:30%"><col style="width:70%"></colgroup>'+
        '<tbody><tr><td class="CardHeader">Assignee:</td><td>{{data.Assignee}}</td></tr>'+
        '<tr><td class="CardHeader">Type:</td><td>{{data.Type}}</td></tr><tr>'+
        '<td class="CardHeader">Estimate:</td><td>{{data.Estimate}}</td></tr>'+                              
        '<tr><td class="CardHeader">Summary:</td><td>{{data.Summary}}</td></tr></tbody></table>'+
        '</td></tr></table></div>',
        data() {
            return {
                data: {}
            };
        },
    });

export default Vue.extend({
  data: function() {
    let tooltipTemplate = function () {
        return { template: tooltipVue }
    };
    return {
      kanbanData: extend([], kanbanData, null, true),
      enableTooltip: true,
      tooltipTemplate: tooltipTemplate,
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      }
    };
  },
  provide: {
    kanban: []
  },
  mounted: function(){
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
  },
  methods: {
    onChange: function (args) {
            this.kanbanObj.enableTooltip = args.checked;
    },
    onTemplateChange: function (args) {
        if (args.checked) {
            this.kanbanObj.tooltipTemplate = this.tooltipTemplate;
        } else {
            this.kanbanObj.tooltipTemplate = null;
        }
    }
    }
});
</script>