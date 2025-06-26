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

<style>
</style>

<script lang='ts'>
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { DialogComponent, Dialog } from '@syncfusion/ej2-vue-popups';
import {
  ToolbarComponent,
  Toolbar,
  ClickEventArgs
} from '@syncfusion/ej2-vue-navigations';
import {
  DiagramComponent,
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
  DropDownListComponent,
  DropDownList,
  ChangeEventArgs
} from '@syncfusion/ej2-vue-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Ajax } from '@syncfusion/ej2-base';
import CrudTemplate from './crud-template.vue';

import { isNullOrUndefined } from '@syncfusion/ej2-base';

let diagram: Diagram;
let dialog: Dialog;
let toolbarObj: Toolbar;
let sourceDropdown: DropDownList;
let targetDropdown: DropDownList;
let sourceID: string;
let targetID: string;

let nodeData: { [key: string]: Object }[] = [];

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-toolbar': ToolbarComponent,
    'ejs-dialog': DialogComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
  },
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
}

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