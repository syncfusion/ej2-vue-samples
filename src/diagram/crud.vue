<template>
  <div>
    <div class='control-section'>
      <div style='width: 100%;height: 10%'>
        <ejs-toolbar id='toolbar' :clicked='toolbarClick' :created='toolbarCreate'>
          <e-items>
            <e-item id='Add' tooltipText='Add' prefixIcon='e-ddb-icons e-add' text='Add'></e-item>
            <e-item type='Separator'></e-item>
            <e-item id='Edit' tooltipText='Edit' prefixIcon='e-ddb-icons e-update' text='Edit'></e-item>
            <e-item type='Separator'></e-item>
            <e-item id='Delete' tooltipText='Delete' prefixIcon='e-ddb-icons e-delete' text='Delete'></e-item>
            <e-item type='Separator'></e-item>
            <e-item id='Reset' tooltipText='Reset' prefixIcon='e-ddc-icons e-reset' text='Reset'></e-item>
          </e-items>
        </ejs-toolbar>
      </div>
      <div style='width: 100%;height: 80%;border-width: 0 1px 1px 1px; border-style: solid; border-color:#D7D7D7'>
        <div id='diagram-space' class='sb-mobile-diagram'>
          <ejs-diagram id='diagram' :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
            :snapSettings='snapSettings' :selectionChange='selectionChange' :sourcePointChange='connectionChange' :targetPointChange='connectionChange'
            :setNodeTemplate='setNodeTemplate' :layout='layout' :dataSourceSettings='dataSourceSettings'>
          </ejs-diagram>
        </div>
      </div>
    </div>
    <ejs-dialog id='editDialog' :buttons='dlgButtons' :width='dialogWidth' v-bind:visible='false' :isModal='isModal' :showCloseIcon='showCloseIcon'>

      <div>
        <div class='showLabel'>
          <ejs-textbox id='Description' placeholder='Enter Description'></ejs-textbox>
        </div>
        <div class='showLabel' style='padding-top: 14px'>
          <ejs-textbox id='Color' placeholder='Enter Color'></ejs-textbox>
        </div>
        <div class='showDropdown'>
          <ejs-dropdownlist id='SourceId' :created='sourceDropdownCreate' :popupHeight='popupHeight' :change='sourceDropdownChange'
            :fields='fields'>
          </ejs-dropdownlist>
        </div>
        <div class='showDropdown' style='padding-top: 14px'>
          <ejs-dropdownlist id='TargetId' :created='targetDropdownCreate' :popupHeight='popupHeight' :change='targetDropdownChange'
            :fields='fields'>
          </ejs-dropdownlist>
        </div>
      </div>
    </ejs-dialog>
    <div id='action-description'>
      <p>
        This sample demonstrates generating a diagram by reading data from the database, and updating it with newly inserted/updated/deleted
        nodes and connectors through web services.
      </p>
    </div>
    <div id='description'>
      <p>
        This example shows how the user reads the data source and performs add, edit, delete of data in the data source at runtime.
        The <code>crudAction</code> property of the <code>dataSourceSettings</code> and <code>crudAction</code> property
        of the
        <code>connectionDataSource</code> allow you to define the server-side method name for <code>create</code>, <code>read</code>,
        <code>update</code>, and
        <code>delete</code> operations.
      </p>
      <p>
        The <code>insertData</code> method is used to send the newly added/inserted data from client to server side. Likewise,
        <code>updateData</code> and <code>removeData</code> are used to send the updated and deleted diagram elements to
        the server.
      </p>
      <p style='font-weight: 500'>Injecting Module</p>
      <p>
        The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external
        data source, inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code>        method. To automatically arrange the objects in an Hierarchical chart, inject <code>HierarchicalTree</code> module
        using <code>provide: { diagram: [HierarchicalTree] }</code> method.
      </p>
      <br>
    </div>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: 'e-ddb-icons';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  .e-ddb-icons {
    font-family: 'e-ddb-icons';
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .e-add::before {
    content: '\e705';
  }
  
  .e-update::before {
    content: '\e703';
  }
  
  .e-delete::before {
    content: '\e701';
  }
  
  .material .e-add::before {
    content: '\e704';
  }
  
  .material .e-update::before {
    content: '\e702';
  }
  
  .material .e-delete::before {
    content: '\e707';
  }
  
  .bootstrap .e-add::before {
    content: '\e706';
  }
  
  .bootstrap .e-update::before {
    content: '\e708';
  }
  
  .bootstrap .e-delete::before {
    content: '\e700';
  }
  
  .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn.e-tbtn-txt .e-icons.e-btn-icon {
    padding: 3px;
  }
  
  .showDropdown {
    display: none;
  }
</style>

<style>
@font-face {
  font-family: "e-ddc-icons";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

.e-ddc-icons {
  font-family: "e-ddc-icons";
  speak: none;
  font-size: 55px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.e-reset::before {
  content: "\e715";
  font-size: 18px;
}

.material .e-reset::before {
  content: "\e70a";
}

.bootstrap .e-reset::before {
  content: "\e722";
}
</style>

<script lang='ts'>
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { DialogPlugin, Dialog } from '@syncfusion/ej2-vue-popups';
import {
  ToolbarPlugin,
  Toolbar,
  ClickEventArgs
} from '@syncfusion/ej2-vue-navigations';
import {
  DiagramPlugin,
  ConnectorModel,
  NodeModel,
  Node,
  NodeConstraints,
  ISelectionChangeEventArgs,
  IEndChangeEventArgs,
  randomId,
  Connector,
  HierarchicalTree,
  SnapConstraints,
  DataBinding,
  Diagram
} from '@syncfusion/ej2-vue-diagrams';
import {
  DropDownListPlugin,
  DropDownList,
  ChangeEventArgs
} from '@syncfusion/ej2-vue-dropdowns';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Ajax } from '@syncfusion/ej2-base';
import CrudTemplate from './crud-template.vue';

import { isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(DiagramPlugin);
Vue.use(ToolbarPlugin);
Vue.use(DialogPlugin);
Vue.use(TextBoxPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);

let diagram: Diagram;
let dialog: Dialog;
let toolbarObj: Toolbar;
let sourceDropdown: DropDownList;
let targetDropdown: DropDownList;
let sourceID: string;
let targetID: string;

let nodeData: { [key: string]: Object }[] = [];

export default Vue.extend({
  data: function() {
    return {
      width: '100%',
      height: '600px',
      snapSettings: { constraints: SnapConstraints.None },
      dataSourceSettings: {
      id: 'Name',
      //set an URL to perform CRUD operations with node in database
      crudAction: {
        read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetNodes',
        create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddNodes',
        update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateNodes',
        destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteNodes',
        customFields: ['Id', 'Description', 'Color']
      },
      connectionDataSource: {
        id: 'Name',
        sourceID: 'SourceNode',
        targetID: 'TargetNode',
        //set an URL to perform CRUD operations with connector in database
        crudAction: {
          read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetConnectors',
          create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddConnectors',
          update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateConnectors',
          destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteConnectors',
          customFields: ['Id']
        }
       }
     },
      layout: {
        type: 'HierarchicalTree',
        verticalSpacing: 40
      },
      getNodeDefaults: (obj: Node, diagram: Diagram) => {
        obj.width = 100;
        obj.height = 50;
        obj.shape = { type: 'Basic', shape: 'Rectangle' };
        obj.style = { strokeWidth: 1, strokeColor: '#DDDDDD' };
        return obj;
      },
      getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        connector.type = 'Orthogonal';
        if(connector.style) connector.style.fill = '#707070';
        if(connector.style) connector.style.strokeColor = '#707070';
        connector.targetDecorator = {
          style: {
            strokeColor: '#707070',
            fill: '#707070'
          }
        };
        return connector;
      },
        //set an label style for nodes
       setNodeTemplate: (obj: NodeModel) => {
          obj.annotations = [{ style: { color: 'black' } }];
          obj.annotations[0].content = (obj as any).Description;
          obj.style = { fill: (obj as any).Color };
          if ((obj as any).Id === 1) {
            //delete constraints for an root node
             obj.constraints = NodeConstraints.Default & ~NodeConstraints.Delete;
          }
       },
      crudTemplate: function() {
        return { template: CrudTemplate };
      },
      dlgButtons: [{ click: dlgButtonClick, buttonModel: { isPrimary:'true', content: 'Update' } }],
      fields: { text: 'Label', value: 'Name' },
      popupHeight: '220px',
      showCloseIcon: true,
      isModal: true,
      dialogWidth: '300px',
      toolbarClick: toolbarClickEvent,
      toolbarCreate: toolbarCreate,
      sourceDropdownCreate: sourceDropdownCreate,
      targetDropdownCreate: targetDropdownCreate,
      sourceDropdownChange: sourceDropdownChange,
      targetDropdownChange: targetDropdownChange,
      selectionChange: selectionChange,
      connectionChange: connectionChange
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  },
  mounted: function() {
    let diagramObj: any = document.getElementById('diagram');
    diagram = diagramObj.ej2_instances[0];
    let dialogObj: any = document.getElementById('editDialog');
    dialog = dialogObj.ej2_instances[0];
    let sourceDropdownObj: any = document.getElementById('SourceId');
    sourceDropdown = sourceDropdownObj.ej2_instances[0];
    let targetDropdownObj: any = document.getElementById('TargetId');
    targetDropdown = targetDropdownObj.ej2_instances[0];
  }
});

function dlgButtonClick(evt: Event) {
  let selectedItem: NodeModel | ConnectorModel | any = {};
  let dialogHeader: string = dialog.header as string;
  let description: string = (document.getElementById('Description') as HTMLInputElement).value;
  let color: string = (document.getElementById('Color') as HTMLInputElement).value;
  if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length > 0) {
     selectedItem = diagram.selectedItems.nodes[0];
  }
  if (diagram.selectedItems && diagram.selectedItems.connectors && diagram.selectedItems.connectors.length > 0) {
     selectedItem = diagram.selectedItems.connectors[0];
  }
  if (dialogHeader === 'Add') {
    let node: NodeModel | any = {
      id: 'node' + randomId(),
      style: { fill: color },
      Description: description,
      Color: color,
      Id: Math.floor(Math.random() * 1000 + 100)
    };
    let connector: ConnectorModel | any = {
      id: 'connector' + randomId(),
      sourceID: selectedItem.id,
      targetID: (node as Node).id,
      Id: Math.floor(Math.random() * 1000 + 100)
    };
    diagram.add(node as NodeModel);
    diagram.add(connector as ConnectorModel);
    diagram.doLayout();
    diagram.insertData();
    nodeData.push({ Name: (node as Node).id, Label: description });
    sourceDropdown.dataSource = getDataSource();
    sourceDropdown.dataBind();
    targetDropdown.dataSource = getDataSource();
    targetDropdown.dataBind();
  } else {
    if (selectedItem instanceof Connector) {
      //set an sourceNode and targetNode updated at runtime
      selectedItem.sourceID = sourceID ? sourceID : selectedItem.sourceID;
      selectedItem.targetID = targetID ? targetID : selectedItem.targetID;
      diagram.dataBind();
      diagram.doLayout();
    } else {
      //update an node text and background color.
      (selectedItem as any).Description = description;
      (selectedItem as any).Color = color;
      selectedItem.annotations[0].content = description;
      selectedItem.style.fill = color;
      diagram.dataBind();
    }
    diagram.updateData();
  }
  dialog.hide();
}
function toolbarCreate(args: Event) {
  enableToolbarItems(false);
}

//set an sourceNode name in dropdown
function sourceDropdownCreate(args: Event) {
  let obj: any = document.getElementById('SourceId');
  sourceDropdown = obj.ej2_instances[0];
  sourceDropdown.dataSource = getDataSource();
  sourceDropdown.dataBind();
}

//set an targetNode name in dropdown
function targetDropdownCreate(args: Event) {
  let obj: any = document.getElementById('TargetId');
  targetDropdown = obj.ej2_instances[0];
  targetDropdown.dataSource = getDataSource();
  targetDropdown.dataBind();
}

//set an sourceNode Id of an selected Connector
function sourceDropdownChange(args: ChangeEventArgs) {
  sourceID = args.value as string;
}

//set an targetNode Id of an selected Connector
function targetDropdownChange(args: ChangeEventArgs) {
  targetID = args.value as string;
}

//In this event, we disable/enable the toolbar items based on selected elements
function selectionChange(args: ISelectionChangeEventArgs) {
  let obj: any = document.getElementById('toolbar');
  toolbarObj = obj.ej2_instances[0] as any;
  if (args.state === 'Changing') {
    if (args.newValue.length > 0) {
      if (args.newValue[0] instanceof Node) {
        enableToolbarItems(true);
      } else {
        toolbarObj.enableItems((document.getElementById(toolbarObj.items[0].id as string) as any).parentElement,false);
        toolbarObj.enableItems((document.getElementById(toolbarObj.items[2].id as string) as any).parentElement,true);
        toolbarObj.enableItems((document.getElementById(toolbarObj.items[4].id as string) as any).parentElement,false);
      }
    } else {
      enableToolbarItems(false);
    }
  }
}

//enable/disable the toolbar items
function enableToolbarItems(isEnableItem: boolean) {
  let obj: any = document.getElementById('toolbar');
  toolbarObj = obj.ej2_instances[0];
  toolbarObj.enableItems((document.getElementById(toolbarObj.items[0].id as string) as any).parentElement,isEnableItem);
  toolbarObj.enableItems((document.getElementById(toolbarObj.items[2].id as string) as any).parentElement,isEnableItem);
  toolbarObj.enableItems((document.getElementById(toolbarObj.items[4].id as string) as any).parentElement,isEnableItem);
}

function connectionChange(args: IEndChangeEventArgs) {
  if (args.state === 'Completed') {
    if (!args.connector.targetID || !args.connector.sourceID) {
      args.cancel = true;
    }
  }
}

function toolbarClickEvent(args: ClickEventArgs) {
  let selectedItem: NodeModel | ConnectorModel | any = {};
  if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length > 0) {
    selectedItem = diagram.selectedItems.nodes[0];
  }
  if (diagram.selectedItems && diagram.selectedItems.connectors && diagram.selectedItems.connectors.length > 0) {
    selectedItem = diagram.selectedItems.connectors[0];
  }
  if (selectedItem) {
    switch (args.item.tooltipText) {
      case 'Add':
        openDialog('Add', '', '', true);
        break;
      case 'Edit':
        if (selectedItem instanceof Connector) {
          let sourceNode: NodeModel = diagram.getObject(selectedItem.sourceID);
          let targetNode: NodeModel = diagram.getObject(selectedItem.targetID);
          openDialog( 'Edit', sourceNode.id as string, targetNode.id as string, false);
        } else {
          openDialog('Edit', (selectedItem as any).Description, (selectedItem as any).Color, true);
        }
        break;
      case 'Delete':
        diagram.remove(selectedItem);
        diagram.doLayout();
        diagram.removeData();
        let element: object = { Name: selectedItem.id, Label: (selectedItem as any).Description };
        let index: number = nodeData.indexOf(element as { [key: string]: Object;});
        nodeData.splice(index, 1);
        sourceDropdown.dataSource = getDataSource();
        sourceDropdown.dataBind();
        targetDropdown.dataSource = getDataSource();
        targetDropdown.dataBind();
    }
  }
    switch (args.item.tooltipText) {
          case 'Reset':
              let callback = new Ajax("https://js.syncfusion.com/demos/ejServices/api/Diagram/ResetData", 'POST');
              callback.send().then();            
              diagram.refreshDiagram();
              diagram.refresh();
      }
}
//open a dialog control on clicking the toolbar items
function openDialog(title: string, description: string, color: string, isNode: boolean): void {
  dialog.header = title as string;
  if (isNode) {
    hideClassElement('.showDropdown', 'none');
    hideClassElement('.showLabel', 'block');
    (document.getElementById('Description') as HTMLInputElement).value = description;
    (document.getElementById('Color') as HTMLInputElement).value = color;
  } else {
    hideClassElement('.showDropdown', 'block');
    hideClassElement('.showLabel', 'none');
    (document.getElementById( 'SourceId') as HTMLInputElement).value = description;
    (document.getElementById('TargetId') as HTMLInputElement).value = color;
  }
  //open a dialog
  dialog.show();
}

//method to show/hide the textbox/dropdown in dialog control
function hideClassElement(className: string, display: string) {
  let i;
  let showDropdown: NodeListOf<HTMLElement> = document.querySelectorAll(className);
  for (i = 0; i < showDropdown.length; i++) {
    showDropdown[i].style.display = display;
  }
}

//Iterate an node text in diagram element to set it in dropdown datasource
function getDataSource() {
   let diagramObj: any = document.getElementById('diagram');
    let diagram:any = diagramObj.ej2_instances[0];
  let i: number;
  nodeData = [];
  for (i = 0; i < diagram.nodes.length; i++) {
    let node: NodeModel = diagram.nodes[i];
    let element: object = { Name: node.id, Label: (node as any).Description };
    nodeData.push(element as { [key: string]: Object });
  }
  return nodeData;
}
</script>