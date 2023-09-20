<template>
  <div id="TabContainer">
    <div class="col-lg-4" style="margin-top: 10px;">
        <div class='property-panel-header'>List of Components</div>
          <ejs-treeview id="ListView" ref="treeObj" :fields="fields" :allowDragAndDrop="true" dragArea="#TabContainer" cssClass="treeview-external-drag-tab" :nodeDragStop="onNodeDragStop" :nodeDragging="onNodeDrag">
          </ejs-treeview>
    </div>
    <div class="col-lg-8 control-section">
        <ejs-tab ref="tabObj" id="draggableTab" dragArea="#TabContainer" :allowDragAndDrop="true" :created="onTabCreate" :onDragStart="onTabDragStart" :dragged="onDraggedTab">
          <e-tabitems>
            <e-tabitem :header="headerText0" :content="'GridComponent'"></e-tabitem>
            <template v-slot:GridComponent>
              <ejs-grid :dataSource='gridData'>
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 type='number'></e-column>
                  <e-column field='CustomerID' headerText='Customer ID'  type='string' width= 140></e-column>
                  <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format='C'></e-column >
                  <e-column field='OrderDate' headerText='Order Date' width=140 format='yMd'></e-column >
                </e-columns>
              </ejs-grid>
            </template>
            <e-tabitem :header="headerText1" :content="'RichTextEditor'"></e-tabitem>
            <template v-slot:RichTextEditor>
              <ejs-richtexteditor height='340'>
              <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href='https://ej2.syncfusion.com/home/' target='_blank'>HTML markup</a> or <a href='https://ej2.syncfusion.com/home/' target='_blank'>markdown</a> of the content</p>
              <p><b>Toolbar</b></p><ol><li><p>Toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operations, HTML view, etc.</p></li><li><p>Toolbar is fully customizable</p></li></ol><p><b>Links</b></p><ol><li><p>You can insert a hyperlink with its corresponding dialog</p></li>
              <li><p>Attach a hyperlink to the displayed text.</p></li><li><p>Customize the quick toolbar based on the hyperlink</p></li></ol><p><b>Image.</b></p><ol><li><p>Allows you to insert images from an online source as well as the local computer</p></li><li><p>You can upload an image</p></li>
              <li><p>Provides an option to customize quick toolbar for an image</p></li></ol><img alt="Logo" src="https://ej2.syncfusion.com/vue/demos/src/rich-text-editor/images/RTEImage-Feather.png" style="width: 300px;">
            </ejs-richtexteditor>
            </template> 
            <e-tabitem :header="headerText2" :content="'ScheduleComponent'"></e-tabitem>
            <template v-slot:ScheduleComponent>
              <ejs-schedule :height="height" :selectedDate='selectedDate' :eventSettings='eventSettings' :readonly="readonly">
              </ejs-schedule>
            </template> 
            <template v-slot:CalendarComponent>
              <ejs-calendar></ejs-calendar>
            </template> 
            <template v-slot:DropDownComponent>
              <ejs-dropdownlist width="200px" popupHeight="200px" popupWidth="250px" :dataSource='sportsData' placeholder='Select a game'></ejs-dropdownlist>
            </template>
            <template v-slot:UploaderComponent>
              <ejs-uploader></ejs-uploader>        
            </template>
            <template v-slot:DatePickerComponent>
              <ejs-datepicker width="200px" placeholder="Enter date"></ejs-datepicker>       
            </template>
          </e-tabitems>
        </ejs-tab>
    </div>
    <div id="action-description">
        <p>
            This example illustrates how to reorder tabs and add tabs from an external source(list of components) by drag and drop. 
            Here, you can drag and drop the items from TreeView into Tab.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, the <code>allowDragAndDrop</code> property is used to enable drag and drop and the <code>dragArea</code> property is used to define the draggable area.
        </p>
        <p>
          In this example, the list of components is rendered using the <code>treeview</code> component. 
          We can drag the item from the treeview component to the tab component by using the <code>nodeDragStop</code> event of the treeview component and 
          add the same item with the help of the <code>addTab</code> public method of Tab and remove this item from the treeview by using the <code>removeNodes</code> method. 
        </p>
        <p>
          In the same way, we can drag the tab item within the tab component and also add the tab item to the treeview component. 
          Here, we can drop the tab item in the treeview component by using the <code>dragged</code> event of the tab component. 
          In this case, we can remove the dropped item from tab with the help of the <code>removeTab</code> public method and add the item to the treeview in its <code>addNodes</code> public method.
        </p>
    </div>
  </div>
</template>
<style>
    #draggableTab .e-content .e-item {
        font-size: 12px;
        padding: 10px;
        text-align: justify;
    }
    .treeview-external-drag-tab .e-list-item,
    .e-bigger .treeview-external-drag-tab .e-list-item {
        border: 0.5px solid #E1E7EC;
        line-height: 15px;
        padding: 0 5px;
    }
    .bootstrap5 .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text,
    .bootstrap4 .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text {
      color: #212529;
    }
    .bootstrap .treeview-external-drag-tab .e-list-item.e-active > .e-text-content .e-list-text {
      color: #333;
    }
    .treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,
    .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,
    .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow,
    .e-bigger .treeview-external-drag-tab .e-list-item.e-hover>.e-fullrow,
    .e-bigger .treeview-external-drag-tab .e-list-item.e-active>.e-fullrow,
    .e-bigger .treeview-external-drag-tab .e-list-item.e-active.e-hover>.e-fullrow {
        background-color: transparent;
        border-color: transparent;
        box-shadow: none !important;
    }
    #draggableTab .e-upload {
        width: 300px;
    }
    #TabContainer {
      display: flex;
    }
    @media (max-width: 550px) {
      #TabContainer {
        display: block;
      }
    }
</style>
<script>
import { createApp } from 'vue';
import { TabComponent, TabItemsDirective, TabItemDirective, TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DatePickerComponent, CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import { UploaderComponent } from "@syncfusion/ej2-vue-inputs";
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

var app = createApp();
export default {
  components: {
    'ejs-tab': TabComponent,
    'e-tabitems': TabItemsDirective,
    'e-tabitem': TabItemDirective,
    'ejs-treeview': TreeViewComponent,
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-richtexteditor': RichTextEditorComponent,
    'ejs-schedule': ScheduleComponent,
    'ejs-calendar': CalendarComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-uploader': UploaderComponent,
    'ejs-datepicker': DatePickerComponent
  },
  data: function () {
    return {
      draggedItemHeader: "",
      i: 0,
      fields: {
        dataSource: [
          { text: "DropDown List", id: "list-01", name: "DropDownList" },
          { text: "DatePicker", id: "list-02", name: "DatePicker" },
          { text: "Calendar", id: "list-03", name: "Calendar" },
          { text: "File Upload", id: "list-04", name: "FileUpload" },
        ],
        id: "id", text: "text",
      },
      headerText0: { text: "Grid" },
      headerText1: { text: "Rich Text Editor" },
      headerText2: { text: "Schedule" },
      gridData: [
        { OrderID: 10248, CustomerID: "VINET", OrderDate: new Date(8364186e5), Freight: 32.38 },
        { OrderID: 10249, CustomerID: "TOMSP", OrderDate: new Date(836505e6), Freight: 11.61 },
        { OrderID: 10250, CustomerID: "HANAR", OrderDate: new Date(8367642e5), Freight: 65.83 },
        { OrderID: 10251, CustomerID: "VICTE", OrderDate: new Date(8367642e5), Freight: 41.34 },
        { OrderID: 10252, CustomerID: "SUPRD", OrderDate: new Date(8368506e5), Freight: 51.3 }
      ],
      sportsData: ["Badminton", "Cricket", "Football", "Golf", "Tennis"],
      height: 350,
      selectedDate: new Date(1996, 6, 9),
      readonly: true,
      eventSettings: {
        dataSource: new DataManager({
         url: "https://services.odata.org/V4/Northwind/Northwind.svc/Orders",
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        }),
        fields: {
          id: 'Id',
          subject: { name: 'ShipName' },
          location: { name: 'ShipCountry' },
          description: { name: 'ShipAddress' },
          startTime: { name: 'OrderDate' },
          endTime: { name: 'RequiredDate' },
          recurrenceRule: { name: 'ShipRegion' }
        }
      },
    };
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar],
    schedule: [Day, Week, WorkWeek, Month, Agenda],
  },
  methods: {
    onTabCreate: function (args) {
      let tabElement = document.getElementById("draggableTab");
      if (!isNullOrUndefined(tabElement)) {
        tabElement.querySelector(".e-tab-header").classList.add("e-droppable");
        tabElement.querySelector(".e-content").classList.add("tab-content");
      }
    },
    onTabDragStart: function (args) {
      var tabObj = this.$refs.tabObj.ej2Instances;
      this.draggedItemHeader = tabObj.items[args.index].header.text;
    },
    onDraggedTab: function (args) {
      var tabObj = this.$refs.tabObj.ej2Instances;
      let dragTabIndex = Array.prototype.indexOf.call(tabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
      let dropNode = args.target.closest("#ListView .e-list-item");
      if (dropNode != null && !args.target.closest("#draggableTab .e-toolbar-item") && tabObj.items.length > 1) {
        var treeObj = this.$refs.treeObj.ej2Instances;
        args.cancel = true;
        let dropContainer = (document.querySelector('.treeview-external-drag-tab')).querySelectorAll('.e-list-item');
        let dropIndex = Array.prototype.indexOf.call(dropContainer, dropNode);
        let newNode = [{ id: "list" + this.i, text: this.draggedItemHeader }];
        tabObj.removeTab(dragTabIndex);
        treeObj.addNodes(newNode, "Treeview", dropIndex);
      }
    },
    onNodeDragStop: function (args) {
      let dropElement = args.target.closest("#draggableTab .e-toolbar-item");
      if (dropElement != null) {
        let tabElement = document.querySelector("#draggableTab");
        let itemPosition = (((args.event.type.indexOf('touch') > -1) ? args.event.changedTouches[0].clientX
          : args.event.clientX) < dropElement.getBoundingClientRect().left + dropElement.offsetWidth / 2) ? 0 : 1;
        let dropItemIndex = [].slice.call(tabElement.querySelectorAll(".e-toolbar-item")).indexOf(dropElement) + itemPosition;
        let tabContent;
        switch (args.draggedNodeData.text) {
          case "DropDown List":
            tabContent = 'DropDownComponent';
            break;
          case "DatePicker":
            tabContent = 'DatePickerComponent';
            break;
          case "Calendar":
            tabContent = 'CalendarComponent';
            break;
          case "File Upload":
            tabContent = 'UploaderComponent';
            break;
          case "Rich Text Editor":
            tabContent = this.RichTextEditor;
            break;
          case "Grid":
            tabContent = this.Grid;
            break;
          case "Schedule":
            tabContent = this.Schedule;
            break;
          default:
            break;
        }
        let newTabItem = [{ header: { text: args.draggedNodeData.text.toString() }, content: tabContent }];
        var tabObj = this.$refs.tabObj.ej2Instances;
        var treeObj = this.$refs.treeObj.ej2Instances;
        tabObj.addTab(newTabItem, dropItemIndex);
        treeObj.removeNodes([args.draggedNode]);
      }
      args.cancel = true;
    },
    onNodeDrag: function (args) {
      if (!isNullOrUndefined(args.target.closest(".tab-content"))) {
        args.dropIndicator = "e-no-drop";
      } else if (!isNullOrUndefined(args.target.closest("#draggableTab .e-tab-header"))) {
        args.dropIndicator = "e-drop-in";
      }
    },
  }
};
</script>
