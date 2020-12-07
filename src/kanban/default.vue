<template>
    <div class="kanban-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings">
                    <e-columns>
                        <e-column headerText="To Do" keyField="Open"></e-column>
                        <e-column headerText="In Progress" keyField="InProgress"></e-column>
                        <e-column headerText="Testing" keyField="Testing"></e-column>
                        <e-column headerText="Done" keyField="Close"></e-column>
                    </e-columns>
                </ejs-kanban>
            </div>
        </div>
        <div id="action-description">
            <p>This example demonstrates the default functionalities of the Kanban component. You can drag and drop the cards
                across multiple states of the Kanban board by default.</p>
        </div>
        <div id="description">
            <p>The sample is configured with a minimal setting that is mandatory to render Kanban layout and cards. The
                dataSource, columns, and cardSettings are essential fields to render the Kanban component. By default, you can
                drag and drop the cards across all stages of Kanban.</p>
        </div>
    </div>
</template>
<style>
    .kanban-vue-sample .e-kanban .e-card-footer-css {
	    align-self: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 16px;
        width: 16px;
    }
    .kanban-vue-sample .e-kanban .e-improvement {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15507&avatarType=issuetype);
    }
    .kanban-vue-sample .e-kanban .e-story {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15515&avatarType=issuetype);
    }
    .kanban-vue-sample .e-kanban .e-epic {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15507&avatarType=issuetype);
    }
    .kanban-vue-sample .e-kanban .e-bug {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15503&avatarType=issuetype);
    }
    .kanban-vue-sample .e-kanban .e-others {
        background-image: url(https://syncfusion.atlassian.net/images/icons/issuetypes/documentation.png);
    }
    .kanban-vue-sample .e-kanban .e-low {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/trivial.svg);
    }
    .kanban-vue-sample .e-kanban .e-high {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/major.svg);
    }
    .kanban-vue-sample .e-kanban .e-critical {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/critical.svg);
    }
    .kanban-vue-sample .e-kanban .e-release {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/critical.svg);
    }
    .kanban-vue-sample .e-kanban .e-normal {
        margin-right: auto;
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/minor.svg);
    }
    .kanban-vue-sample .e-kanban .e-nancy-davloio {
        background-image: url(https://ej2.syncfusion.com/demos/src/kanban/images/Nancy%20Davloio.png);
    }
    .kanban-vue-sample .e-kanban .e-andrew-fuller {
        background-image: url(https://ej2.syncfusion.com/demos/src/kanban/images/Andrew%20Fuller.png);
    }
    .kanban-vue-sample .e-kanban .e-janet-leverling {
        background-image: url(https://ej2.syncfusion.com/demos/src/kanban/images/Janet%20Leverling.png);
    }
    .kanban-vue-sample .e-kanban .e-steven-walker {
        background-image: url(https://ej2.syncfusion.com/demos/src/kanban/images/Steven%20walker.png);
    }
    .kanban-vue-sample .e-kanban .e-michael-suyama {
        background-image: url(https://ej2.syncfusion.com/demos/src/kanban/images/Michael%20Suyama.png);
    }
    .kanban-vue-sample .e-kanban .e-robert-king {
        background-image: url(https://ej2.syncfusion.com/demos/src/kanban/images/Robert%20King.png);
    }
    .kanban-vue-sample .e-kanban .e-margaret-hamilt {
        background-image: url(https://ej2.syncfusion.com/demos/src/kanban/images/Margaret%20hamilt.png);
    }
  
    .kanban-vue-sample .e-kanban .e-nancy-davloio, .e-kanban .e-andrew-fuller, .e-kanban .e-janet-leverling,
    .kanban-vue-sample .e-kanban .e-steven-walker, .e-kanban .e-michael-suyama, .e-kanban .e-robert-king, .e-kanban .e-margaret-hamilt  {
        border-radius: 72px;
        height: 24px;
        width: 24px;
    }
</style>
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "./datasource";

Vue.use(KanbanPlugin);

export default Vue.extend({
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
        tagsField: 'Tags',
        grabberField: 'Color',
        footerCssField: 'ClassName'
      }
    };
  },
  provide: {
    kanban: []
  }
});
</script>