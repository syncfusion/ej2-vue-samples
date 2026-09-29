<template>
<div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban cssClass="kanban-card-default" id="kanban" keyField="Status" :dataSource="kanbanData" :allowColumnDragAndDrop="allowColumnDragAndDrop"
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
<<div id="action-description">
    <p>
        This sample demonstrates column reordering through drag-and-drop interactions in the Kanban component.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates how to reorder columns in the Kanban component using the <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#allowcolumndraganddrop" target="_blank">allowColumnDragAndDrop</a> 
        property. When enabled, columns can be dragged and dropped to different positions within the board, allowing the workflow layout to be customized while preserving the cards within each column.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/columns#drag-and-drop" target="_blank">column reordering</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
</div>

</div>
</template>
<style>
    .e-kanban.kanban-card-default .e-card-footer-css {
	    align-self: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 16px;
        width: 16px;
    }
    .e-kanban.kanban-card-default .e-improvement {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15507&avatarType=issuetype);
    }
    .e-kanban.kanban-card-default .e-story {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15515&avatarType=issuetype);
    }
    .e-kanban.kanban-card-default .e-epic {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15507&avatarType=issuetype);
    }
    .e-kanban.kanban-card-default .e-bug {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15503&avatarType=issuetype);
    }
    .e-kanban.kanban-card-default .e-others {
        background-image: url(https://syncfusion.atlassian.net/images/icons/issuetypes/documentation.png);
    }
    .e-kanban.kanban-card-default .e-low {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/trivial.svg);
    }
    .e-kanban.kanban-card-default .e-high {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/major.svg);
    }
    .e-kanban.kanban-card-default .e-critical {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/critical.svg);
    }
    .e-kanban.kanban-card-default .e-release {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/critical.svg);
    }
    .e-kanban.kanban-card-default .e-normal {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/minor.svg);
    }
    .e-kanban.kanban-card-default .e-nancy-davloio {
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/kanban/images/Nancy%20Davloio.png);
    }
    .e-kanban.kanban-card-default .e-andrew-fuller {
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/kanban/images/Andrew%20Fuller.png);
    }
    .e-kanban.kanban-card-default .e-janet-leverling {
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/kanban/images/Janet%20Leverling.png);
    }
    .e-kanban.kanban-card-default .e-steven-walker {
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/kanban/images/Steven%20walker.png);
    }
    .e-kanban.kanban-card-default .e-michael-suyama {
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/kanban/images/Michael%20Suyama.png);
    }
    .e-kanban.kanban-card-default .e-robert-king {
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/kanban/images/Robert%20King.png);
    }
    .e-kanban.kanban-card-default .e-margaret-hamilt {
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/kanban/images/Margaret%20hamilt.png);
    }
  
    .e-kanban.kanban-card-default .e-nancy-davloio, .e-kanban.kanban-card-default .e-andrew-fuller, .e-kanban.kanban-card-default .e-janet-leverling,
    .e-kanban.kanban-card-default .e-steven-walker, .e-kanban.kanban-card-default .e-michael-suyama, .e-kanban.kanban-card-default .e-robert-king, .e-kanban.kanban-card-default .e-margaret-hamilt  {
        border-radius: 72px;
        height: 24px;
        width: 24px;
    }
</style>
<script>
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },  
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
        tagsField: 'Tags',
        grabberField: 'Color',
        footerCssField: 'ClassName'
      },
      allowColumnDragAndDrop: true,
    };
  },
  provide: {
    kanban: []
  }
}
</script>