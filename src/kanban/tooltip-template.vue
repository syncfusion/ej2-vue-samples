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
        <template v-slot:tooltipTemplate="{data}">
        <div class="e-kanbantooltiptemp"><table><tr><td class="e-kanban-card-details"><table>
        <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
        <tbody><tr><td class="CardHeader">Assignee:</td><td>{{data.Assignee}}</td></tr>
        <tr><td class="CardHeader">Type:</td><td>{{data.Type}}</td></tr><tr>
        <td class="CardHeader">Estimate:</td><td>{{data.Estimate}}</td></tr>                           
        <tr><td class="CardHeader">Summary:</td><td>{{data.Summary}}</td></tr></tbody></table>
        </td></tr></table></div>
        </template>
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
        This sample demonstrates tooltip customization in the Kanban component, enabling additional card information to be presented through rich and interactive tooltip content.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the tooltip functionality of the Kanban component using the
        <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#enabletooltip" target="_blank">enableTooltip</a>
        and
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/tooltip#tooltip-template" target="_blank">tooltipTemplate</a>
        properties. Tooltips provide additional contextual information about cards when users hover over them.
    </p>
    <ul>
        <li><code>enableTooltip</code>: If you set this property to <code>true</code>, the cards show a
            tooltip with the default format.</li>
        <li><code>tooltipTemplate</code>: If you set <code>enableTooltip</code> to <code>true</code> and
            configure the <code>tooltipTemplate</code>, the cards show a tooltip with templated content
            (the <code>Assignee</code>, <code>Type</code>, <code>Estimate</code> and <code>Summary</code>
            fields in this demo).</li>
    </ul>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/tooltip" target="_blank">tooltip</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
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
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-checkbox': CheckBoxComponent
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      enableTooltip: true,
      tooltipTemplate: 'tooltipTemplate',
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
}
</script>