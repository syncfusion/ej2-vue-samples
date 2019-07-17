<template>
<div class="control-section">
  <div class="col-lg-8 control-section">
    <div class="content-wrapper">
      <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :mode='mode' :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings' :layout='layout' :dataSourceSettings='dataSourceSettings' :tool='tool'></ejs-diagram>
    </div>
  </div>
  <div class="col-lg-4 property-section">
    <div class="property-panel-header">
      Properties
    </div>
    <div class="row" id="appearance">
      <div class="row row-header">
        Appearance
      </div>
      <div class="row" style="padding-top: 8px">
        <div class="image-pattern-style e-selected-style" id="topToBottom" style="background-image: url(./src/diagram/Images/common-orientation/toptobottom.png); margin-right: 3px">
        </div>
        <div class="image-pattern-style" id="bottomToTop" style="background-image: url(./src/diagram/Images/common-orientation/bottomtotop.png); margin: 0px 3px">
        </div>
      </div>
      <div class="row" style="padding-top: 8px">
        <div class="image-pattern-style" id="leftToRight" style="background-image: url(./src/diagram/Images/common-orientation/lefttoright.png); margin-right: 3px">
        </div>
        <div class="image-pattern-style" id="rightToLeft" style="background-image: url(./src/diagram/Images/common-orientation/righttoleft.png); margin: 0px 3px">
        </div>
      </div>
    </div>
    <div class="row" style="padding-top: 10px">
      <div class="row row-header">
        Behavior
      </div>
      <div class="row" style="padding-top: 8px">
        <div style="display: table;height: 35px;" class="col-xs-6">
          <div style="display: table-cell; vertical-align: middle">Horizontal Spacing</div>
        </div>
        <div class="col-xs-6">
          <ejs-numerictextbox ref="hSpacingObj" id="hSpacing" style="width: 90px"
                :min='hSpacingmin'
                :max='hSpacingmax'
                :step='hSpacingstep'
                :value='hSpacingvalue'
                :change='hSpacingchange'/>
        </div>
      </div>
    <div class="row" style="padding-top: 8px">
      <div style="display: table;height: 35px;" class="col-xs-6">
        <div style="display: table-cell; vertical-align: middle">Vertical Spacing</div>
      </div>
      <div class="col-xs-6">
        <ejs-numerictextbox ref="vSpacingObj" id="vSpacing" style="width: 90px" 
                    :min='vSpacingmin'
                    :max='vSpacingmax'
                    :step='vSpacingstep'
                    :value='vSpacingvalue'
                    :change='vSpacingchange' />
      </div>
    </div>
    <div class="row" style="padding-top: 8px">
      <!-- enable or disable the expandable option for Node. -->
      <ejs-checkbox ref="checkedObj" id="checked" style="width: 90px" 
                    :label='checkedlabel'
                    :checked='checkedchecked'
                    :change='checkedchange'/>
    </div>
  </div>
</div>
<div id="action-description">
    <p>
        This sample illustrates a generating hierarchical tree from right to left orientation with external data source.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to generate a hierarchical tree from external data sources. You can also customize the
        spacing between the objects in the tree. You can use the
        <code>horizontalSpacing</code> and
        <code>verticalSpacing</code> properties of
        <code>layout</code> to customize the space between the objects in the tree. You can use the
        <code>layoutOrientation</code> property of
        <code>layout</code> to change the orientation of the tree.
    </p>
    <p>
        To change the orientation of the tree, click the templates that are added to the property panel.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Diagram component's features are segregated into individual feature-wise modules. To generate diagrams from external data source,
        we need to Inject
        <code>DataBinding</code> module using
        <code>provide: { diagram: [DataBinding] }</code> method. To automatically arrange the objects in a hierarchical structure, we need to Inject
        <code>HierarchicalTree</code> module using
        <code>provide: { diagram: [HierarchicalTree] }</code> method.
    </p>
    <br>
</div>
</div>
</template>
<style>
.image-pattern-style {
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  height: 75px;
  width: calc((100% - 12px) / 3);
  cursor: pointer;
  border: 1px solid #d5d5d5;
  background-position: center;
  float: left;
}

.image-pattern-style:hover {
  border-color: gray;
  border-width: 2px;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 13px;
  font-weight: 500;
}

.e-checkbox-wrapper .e-label {
  font-size: 12px;
}

.e-selected-style {
  border-color: #006ce6;
  border-width: 2px;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
<script>
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  ConnectorModel,
  LayoutAnimation,
  TextModel,
  LayoutOrientation
} from "@syncfusion/ej2-vue-diagrams";
import { CheckBox } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBox } from "@syncfusion/ej2-vue-inputs";
import { DiagramTools } from "@syncfusion/ej2-vue-diagrams";
import {
  Node,
  DataBinding,
  HierarchicalTree,
  SnapConstraints
} from "@syncfusion/ej2-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { hierarchicalTree } from "./diagram-data";

Vue.use(DiagramPlugin);

let diagramInstance;
let hSpacing;
let vSpacing;
let checkBoxObj;

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "499px",
      mode: "SVG",
      snapSettings: { constraints: SnapConstraints.None },
      //configures data source settings
      dataSourceSettings: {
        //sets the fields to bind
        id: "Name",
        parentId: "Category",
        dataSource: new DataManager(hierarchicalTree),
        //binds the data with the nodess
        doBinding: (nodeModel, data, diagram) => {
          nodeModel.shape = {
            type: "Text",
            content: (data).Name
          };
        }
      },
      //Disables all interactions except zoom/pan
      tool: DiagramTools.ZoomPan,
      //Configures automatic layout
      layout: {
        type: "HierarchicalTree",
        verticalSpacing: 30,
        horizontalSpacing: 40,
        enableAnimation: true
      },
      //Defines the default node and connector properties
      getNodeDefaults: (obj, diagram) => {
        return nodeDefaults(obj, diagram);
      },
      getConnectorDefaults: (connector, diagram) => {
        return connectorDefaults(connector, diagram);
      },
      hSpacingmin: 20,
      hSpacingmax: 60,
      hSpacingstep: 2,
      hSpacingvalue: 40,
      hSpacingchange: () => {
        diagramInstance.layout.horizontalSpacing = Number(hSpacing.value);
        diagramInstance.dataBind();
      },

      vSpacingmin: 20,
      vSpacingmax: 60,
      vSpacingstep: 2,
      vSpacingvalue: 30,
      vSpacingchange: () => {
        diagramInstance.layout.verticalSpacing = Number(vSpacing.value);
        diagramInstance.dataBind();
      },

      checkedlabel: "Expandable",
      checkedchecked: false,
      checkedchange: () => {
        for (let node of diagramInstance.nodes) {
          if (checkBoxObj.checked) {
            node.expandIcon.shape = "Minus";
            node.collapseIcon.shape = "Plus";
          } else {
            node.expandIcon.shape = "None";
            node.collapseIcon.shape = "None";
          }
        }
        diagramInstance.dataBind();
        diagramInstance.doLayout();
      }
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree, LayoutAnimation]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    hSpacing = this.$refs.hSpacingObj.ej2Instances;
    vSpacing = this.$refs.vSpacingObj.ej2Instances;
    checkBoxObj = this.$refs.checkedObj.ej2Instances;
    //Click event for Appearance of the Property Panel.
    let obj= document.getElementById("appearance") ;
    obj.onclick = (args) => {
      let target = args.target;
      let selectedElement = document.getElementsByClassName(
        "e-selected-style"
      );
      if (selectedElement.length) {
        selectedElement[0].classList.remove("e-selected-style");
      }
      if (target.className === "image-pattern-style") {
        let id = target.id;
        let orientation1 = id.substring(0, 1).toUpperCase()+id.substring(1,id.length);
        diagramInstance.layout.orientation = orientation1;
        diagramInstance.dataBind();
        diagramInstance.doLayout();
        target.classList.add('e-selected-style');
      }
    };
  }
});

//update the orientation of the Layout.
function updatelayout(target, orientation) {
  diagramInstance.layout.orientation = orientation;
  diagramInstance.dataBind();
  diagramInstance.doLayout();
  target.classList.add("e-selected-style");
}

//sets node default value
function nodeDefaults(obj, diagram) {
  obj.style = {
    fill: "#659be5",
    strokeColor: "none",
    color: "white",
    strokeWidth: 2
  };
  obj.borderColor = "#3a6eb5";
  obj.backgroundColor = "#659be5";
  (obj.shape).margin = { left: 5, right: 5, bottom: 5, top: 5 };
  obj.expandIcon = {
    height: 10,
    width: 10,
    shape: "None",
    fill: "lightgray",
    offset: { x: 0.5, y: 1 }
  };
  obj.expandIcon.verticalAlignment = "Auto";
  obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
  obj.collapseIcon.offset = { x: 0.5, y: 1 };
  obj.collapseIcon.verticalAlignment = "Auto";
  obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
  obj.collapseIcon.height = 10;
  obj.collapseIcon.width = 10;
  if (obj.collapseIcon.padding) obj.collapseIcon.padding.top = 5;
  obj.collapseIcon.shape = "None";
  obj.collapseIcon.fill = "lightgray";
  return obj;
}

//sets connector default value
function connectorDefaults(connector,diagram) {
  if (connector.targetDecorator) connector.targetDecorator.shape = "None";
  connector.type = "Orthogonal";
  if (connector.style) connector.style.strokeColor = "#6d6d6d";
  connector.constraints = 0;
  connector.cornerRadius = 5;
  return connector;
}

</script>