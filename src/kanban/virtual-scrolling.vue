<template>
    <div>
        <div class="col-md-12 control-section">
                <div class="content-wrapper">
                    <ejs-kanban id="KanbanVirtualScrolling" :enableVirtualization="true" keyField="Status" :dataSource="kanbanData"
                        :enableTooltip="enableTooltip" :cardSettings="cardSettings" :dialogSettings="dialogSettings" :cardRendered='cardRendered'>
                        <e-columns>
                            <e-column headerText="To Do" keyField="Open" ></e-column>
                            <e-column headerText="In Progress" keyField="InProgress" ></e-column>
                            <e-column headerText="In Review" keyField="Review" ></e-column>
                            <e-column headerText="Done" keyField="Close" ></e-column>
                        </e-columns>
                    </ejs-kanban>
                </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the Kanban board with the virtual scrolling feature. It configures a large
                dataset as the data source, allowing smooth navigation and rendering of a significant amount of data
                while scrolling through Kanban columns.
            </p>
        </div>
        <div id="description">
            <p>
                The Kanban board UI virtualization feature allows for rendering the column cards that are visible within
                the viewport, without buffering the entire data source. To enable virtualization, you can set
                the <code>enableVirtualization</code> property to true.
            </p>
            <p>
                In this demo, a dataset of 100K items has been configured for the <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/#datasource"><code>dataSource</code></a> property. Despite the large
                dataset, the Kanban board efficiently handles the rendering and interaction, ensuring a smooth user
                experience. Users can seamlessly navigate and interact with the Kanban board, even with such a significant amount of data.
            </p>
        </div>
    </div>
  </template>
  
<script>
  import { createApp } from "vue";
  import { extend, addClass } from "@syncfusion/ej2-base";
  import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
  import { generateKanbanDataVirtualScrollData } from "./datasource";
  import virtualCardTemplete from "./virtual-card-templete.vue";
  
  export default {
    components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
    },
    data: function() {
      return {
        kanbanData: extend([], generateKanbanDataVirtualScrollData(), null, true),
        enableTooltip: true,
        cardSettings: {
            headerField: "Id",
            template: function () {
                    return { template: createApp({}).component('sortCardTemplate', virtualCardTemplete) };
                },
            selectionType: "Multiple"
        },
        dialogSettings: {
            fields: [
                {key: 'Id', text: 'ID', type: 'TextBox'},
                {key: 'Status', text: 'Status', type: 'DropDown'},
                {key: 'StoryPoints', text: 'Story Points', type: 'Numeric' },
                {key: 'Summary', text: 'Summary', type: 'TextArea'}
            ]
        }
      };
    },
    provide: {
        kanban: []
    },
    methods: {
            cardRendered: function (args) {
                let val = args.data.Priority.toLowerCase();
                addClass([args.element], val);
            }
        }
    }
</script>

<style>
    @media (max-width: 1470px) {
        #KanbanVirtualScrolling .e-project {
            display: none;
        }
    }
    @media (max-width: 1300px) {
        #KanbanVirtualScrolling .e-priority {
            display: none;
        }
    }
    @media (max-width: 1200px) {
        #KanbanVirtualScrolling .e-story-points  {
            display: none;
        }
    }
    #KanbanVirtualScrolling .e-text {
        font-size: 13px;
        font-weight: 400 !important;
    }
    #KanbanVirtualScrolling .e-custom-wrapper {
        display: flex;
        justify-content: space-evenly;
    }
    #KanbanVirtualScrolling .e-priority {
        margin: auto;
        width: 16px;
        height: 16px;
    }
    #KanbanVirtualScrolling .e-story-points {
        font-weight: 600 !important;
    }
    #KanbanVirtualScrolling .e-card-avatar, #KanbanVirtualScrolling .e-story-points, #KanbanVirtualScrolling .e-priority {
        margin-left: 5px;
    }
    #KanbanVirtualScrolling .e-card-footer {
        justify-content: space-between;
    }
    #KanbanVirtualScrolling .e-card .e-card-tag-field {
        background: #ececec;
        color: #6b6b6b;
        margin-right: 5px;
        line-height: 1.1;
        font-size: 13px;
        border-radius: 3px;
        padding: 4px;
    }
    #KanbanVirtualScrolling .e-card-avatar, .e-story-points {
        width: 23px;
        height: 23px;
        text-align: center;
        background: gainsboro;
        color: #6b6b6b;
        border-radius: 50%;
        font-size: 11px;
        font-weight: 400;
        padding: 3px;
    }
    #KanbanVirtualScrolling .e-link-wrapper {
        display: flex;
        align-items: center;
    }
    #KanbanVirtualScrolling .e-custom-link {
        margin-left: 10px;
        font-weight: 500;
        font-size: 14px;
    }
    #KanbanVirtualScrolling .custom-header-wrapper .e-bug, #KanbanVirtualScrolling .custom-header-wrapper .e-story, #KanbanVirtualScrolling .custom-header-wrapper .e-epic {
        display: inline-block;
        width: 16px;
        height: 16px;
    }
    #KanbanVirtualScrolling .custom-header-wrapper .e-bug {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15503&avatarType=issuetype);
    }
    #KanbanVirtualScrolling .custom-header-wrapper .e-story {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15503&avatarType=issuetype);
    }
    #KanbanVirtualScrolling .custom-header-wrapper .e-epic {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15503&avatarType=issuetype);
    }
    #KanbanVirtualScrolling .e-card.low, #KanbanVirtualScrolling .e-card.normal, #KanbanVirtualScrolling .e-card.high, #KanbanVirtualScrolling .e-card.critical, #KanbanVirtualScrolling .e-card.ultra-critical{
        border-left-width: 4px;
    }
    #KanbanVirtualScrolling .e-low-icon {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/trivial.svg);
    }
    #KanbanVirtualScrolling .e-high-icon {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/major.svg);
    }
    #KanbanVirtualScrolling .e-critical-icon {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/critical.svg);
    }
    #KanbanVirtualScrolling .e-ultra-critical-icon {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/critical.svg);
    }
    #KanbanVirtualScrolling .e-normal-icon {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/minor.svg);
    }
    #KanbanVirtualScrolling .e-story, #KanbanVirtualScrolling .e-epic, #KanbanVirtualScrolling .e-bug {
        background-repeat: no-repeat;
        background-position: center;
        width: 16px;
        height: 16px;
    }
    #KanbanVirtualScrolling .e-story {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15515&avatarType=issuetype);
    }
    #KanbanVirtualScrolling .e-epic {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15507&avatarType=issuetype);
    }
    #KanbanVirtualScrolling .e-bug {
        background-image: url(https://syncfusion.atlassian.net/secure/viewavatar?size=medium&avatarId=15503&avatarType=issuetype);
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Andrew Fuller'] {
        background-color: #03045E;
        color: #FFFFFF;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Janet Leverling'] {
        background-color: #0077B6;
        color: #FFFFFF;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Steven walker'] {
        background-color: #00B4D8;
        color: #FFFFFF;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Robert King'] {
        background-color: #90E0EF;
        color: #000000;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Margaret hamilt'] {
        background-color: #CAF0F8;
        color: #000000;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Nancy Davloio'] {
        background-color: #004E64;
        color: #FFFFFF;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Margaret Buchanan'] {
        background-color: #00A5CF;
        color: #FFFFFF;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Laura Bergs'] {
        background-color: #9FFFCB;
        color: #000000;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Anton Fleet'] {
        background-color: #25A18E;
        color: #FFFFFF;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Jack Kathryn'] {
        background-color: #7AE582;
        color: snow;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Martin Davolio'] {
        background-color: #780000;
        color: #FFFFFF;
    }
    #KanbanVirtualScrolling .e-card-avatar[title = 'Fleet Jack'] {
        background-color: #C1121F;
        color: #FFFFFF;
    }
    .material3 #KanbanVirtualScrolling .e-card-avatar, .material3 #KanbanVirtualScrolling .e-story-points,
    .material3-dark #KanbanVirtualScrolling .e-card-avatar, .material3-dark #KanbanVirtualScrolling .e-story-points {
        padding: 5.5px 2.4px !important;
    }
    .material #KanbanVirtualScrolling .e-card-avatar, .material #KanbanVirtualScrolling .e-story-points,
    .material-dark #KanbanVirtualScrolling .e-card-avatar, .material-dark #KanbanVirtualScrolling .e-story-points {
        padding: 4.5px 2.4px !important;
    }
    .tailwind #KanbanVirtualScrolling .e-card-avatar, .tailwind #KanbanVirtualScrolling .e-story-points,
    .tailwind-dark #KanbanVirtualScrolling .e-card-avatar, .tailwind-dark #KanbanVirtualScrolling .e-story-points,
    .tailwind3 #KanbanVirtualScrolling .e-card-avatar, .tailwind3 #KanbanVirtualScrolling .e-story-points,
    .tailwind3-dark #KanbanVirtualScrolling .e-card-avatar, .tailwind3-dark #KanbanVirtualScrolling .e-story-points {
        padding: 4.75px 3.5px !important;    
    }
    .bootstrap4 #KanbanVirtualScrolling .e-card-avatar, .bootstrap4 #KanbanVirtualScrolling .e-story-points {
        padding: 4.75px 3.5px !important;    
    }
    .bootstrap #KanbanVirtualScrolling .e-card-avatar, .bootstrap #KanbanVirtualScrolling .e-story-points,
    .bootstrap-dark #KanbanVirtualScrolling .e-card-avatar, .bootstrap-dark #KanbanVirtualScrolling .e-story-points {
        padding: 5px 4px !important;
    }
</style>
  