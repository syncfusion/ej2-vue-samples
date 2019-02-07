<template>
<div class="control-section">
 <div class="col-lg-8 control-section" style="width: 70%; float:left;">
    <div class="content-wrapper">
        <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :snapSettings='snapSettings' :tool='tool' :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</div>
<div class="col-lg-4 property-section" style="width: 30%; float: right; height: 80%">
    <div class="property-panel-header">
        Properties
    </div>
    <div class="row" id="appearance">
        <div class="row" style="padding-top: 10px">
            <div class="row row-header">
                Orientation
            </div>
            <div id="orientation">
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style e-selected-orientation-style" id="topToBottom" style="background-image: url(./src/diagram/Images/common-orientation/toptobottom.png); margin-right: 3px">
                    </div>
                    <div class="image-pattern-style" id="bottomToTop" style="background-image: url(./src/diagram/Images/common-orientation/bottomtotop.png); margin: 0px 3px">
                    </div>
                    <div class="image-pattern-style" id="leftToRight" style="background-image: url(./src/diagram/Images/common-orientation/lefttoright.png); margin: 0px 3px">
                    </div>
                </div>
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style" id="rightToLeft" style="background-image: url(./src/diagram/Images/common-orientation/righttoleft.png); margin: 0px 3px">
                    </div>
                </div>
            </div>
            <div class="row row-header" style="padding-top: 10px">
                Subtree Alignment
            </div>
            <div id="pattern">
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style" id="pattern1" style="background-image: url(./src/diagram/patternimages/Pattern_1.png); margin-right: 3px">
                    </div>
                    <div class="image-pattern-style e-selected-pattern-style" id="pattern2" style="background-image: url(./src/diagram/patternimages/Pattern_2.png); margin: 0px 3px">
                    </div>
                    <div class="image-pattern-style" id="pattern3" style="background-image: url(./src/diagram/patternimages/Pattern_3.png); margin: 0px 3px">
                    </div>
                </div>
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style" id="pattern4" style="background-image: url(./src/diagram/patternimages/Pattern_4.png); margin-right: 3px">
                    </div>
                    <div class="image-pattern-style" id="pattern5" style="background-image: url(./src/diagram/patternimages/Pattern_5.png); margin: 0px 3px">
                    </div>
                    <div class="image-pattern-style" id="pattern6" style="background-image: url(./src/diagram/patternimages/Pattern_6.png); margin: 0px 3px">
                    </div>
                </div>
                <div class="row" style="padding-top: 8px">
                    <div class="image-pattern-style" id="pattern7" style="background-image: url(./src/diagram/patternimages/Pattern_7.png); margin-right: 3px">
                    </div>
                    <div class="image-pattern-style" id="pattern8" style="background-image: url(./src/diagram/patternimages/Pattern_8.png); margin: 0px 3px">
                    </div>
                    <div class="image-pattern-style" id="pattern9" style="background-image: url(./src/diagram/patternimages/Pattern_9.png); margin: 0px 3px">
                    </div>
                </div>
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
                <ejs-numerictextbox  id="hSpacing" 
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
                <ejs-numerictextbox id="vSpacing" 
                      :min='vSpacingmin'
                      :max='vSpacingmax'
                      :step='vSpacingstep'
                      :value='vSpacingvalue'
                      :change='vSpacingchange' />
            </div>
        </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample illustrates a simple business management structure that is built from an external data source. Hierarchical tree 
        layout algorithm is used to build organizational charts. Customizing the orientation 
        and structure of the organizational 
        chart is illustrated in this example.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to generate an organizational chart from an external data source. The spacing between the objects
        can also be customized in the chart. The 
        <code>horizontalSpacing</code> and <code>verticalSpacing</code> properties of
        <code>layout</code> can be used to customize the space between objects in a tree. The <code>layoutOrientation</code> property of
        <code>layout</code> can be used to change the orientation of the chart. The <code>getLayoutInfo</code> property of
        <code>layout</code> can be used to customize the tree structure. To change the tree structure, choose any template in the palette.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external
        data source, inject
        <code>DataBinding</code> module using
        <code>provide: { diagram: [DataBinding] }</code> method. To automatically arrange the objects in an organizational chart, inject
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
  width: calc((100% - 18px) / 3);
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
  font-size: 15px;
  font-weight: 500;
}

.row-header1 {
  font-size: 12px;
  padding-left: 2px;
  font-weight: 400;
}

.e-selected-orientation-style {
  border-color: #006ce6;
  border-width: 2px;
}

.e-selected-pattern-style {
  border-color: #006ce6;
  border-width: 2px;
}

.e-checkbox-wrapper .e-label {
  font-size: 12px;
}

.col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
}
</style>

<script lang="ts">
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  ConnectorModel,
  LayoutOrientation,
  LayoutAnimation,
  TreeInfo,
  SubTreeOrientation,
  SubTreeAlignments
} from "@syncfusion/ej2-vue-diagrams";
import { CheckBox } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBox } from "@syncfusion/ej2-inputs";
import { DiagramTools } from "@syncfusion/ej2-vue-diagrams";
import {
  Node,
  DataBinding,
  HierarchicalTree,
  SnapConstraints
} from "@syncfusion/ej2-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { localBindData } from "./diagram-data";

Vue.use(DiagramPlugin);

let diagramInstance: any;
let orien: LayoutOrientation;
let typ: SubTreeAlignments;
let hSpacing: NumericTextBox;
let vSpacing: NumericTextBox;

export interface EmployeeInfo {
  Role: string;
  color: string;
}

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "700px",
      snapSettings: { constraints: SnapConstraints.None },
      //configures data source settings
      dataSourceSettings: {
        id: "Id",
        parentId: "Manager",
        dataManager: new DataManager(localBindData as JSON[]),
        doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
          nodeModel.shape = {
            type: "Text",
            content: (data as EmployeeInfo).Role,
            margin: { left: 10, right: 10, top: 10, bottom: 10 }
          };
        }
      },
      //Disables all interactions except zoom/pan
      tool: DiagramTools.ZoomPan,
      //Configures automatic layout
      layout: {
        type: "OrganizationalChart",
        getLayoutInfo: (node: Node, options: TreeInfo) => {
          /* tslint:disable:no-string-literal */
          if (
            (node.data as DataInfo)["Role"] === "General Manager" &&
            options.assistants &&
            options.children
          ) {
            options.assistants.push(options.children[0]);
            options.children.splice(0, 1);
          }
          if (!options.hasSubTree) {
            options.type = "Right";
          }
        }
      },
      //Defines the default node and connector properties
      getNodeDefaults: (obj: Node, diagram: Diagram) => {
        /* tslint:disable:no-string-literal */
        return nodeDefaults(obj, diagram);
      },
      getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        return connectorDefaults(connector, diagram);
      },

      hSpacingmin: 20,
      hSpacingmax: 60,
      hSpacingstep: 2,
      hSpacingvalue: 30,
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
      }
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree, LayoutAnimation]
  },
  mounted: function() {
    let diagramObj: any = document.getElementById("diagram");
    diagramInstance = diagramObj.ej2_instances[0];
    let hSpacingObj: any = document.getElementById("hSpacing");
    hSpacing = hSpacingObj.ej2_instances[0];
    let vSpacingObj: any = document.getElementById("vSpacing");
    vSpacing = vSpacingObj.ej2_instances[0];
    let orientationObj: any = document.getElementById(
      "orientation"
    ) as HTMLElement;
    let patternObj: any = document.getElementById("pattern") as HTMLElement;
    //Click Event for orientation of the PropertyPanel.
    orientationObj.onclick = (args: MouseEvent) => {
      let target: HTMLElement = args.target as HTMLElement;
      let selectedElement: HTMLCollection = document.getElementsByClassName(
        "e-selected-orientation-style"
      );
      if (selectedElement.length) {
        selectedElement[0].classList.remove("e-selected-orientation-style");
      }
      if (!target.classList.contains("e-selected-orientation-style")) {
        target.classList.add("e-selected-orientation-style");
      }
      if (
        target.className === "image-pattern-style e-selected-orientation-style"
      ) {
          let id: string = target.id;
          let orientation1: string = id.substring(0, 1).toUpperCase()+id.substring(1,id.length);
          diagramInstance.layout.orientation = orientation1 as LayoutOrientation;
          diagramInstance.dataBind();
          diagramInstance.doLayout();
          target.classList.add('e-selected-style');
      }
    };
    //Click Event for pattern of the PropertyPanel.
    patternObj.onclick = (args: MouseEvent) => {
      let target: HTMLElement = args.target as HTMLElement;
      let selectedpatternElement: HTMLCollection = document.getElementsByClassName(
        "e-selected-pattern-style"
      );
      if (selectedpatternElement.length) {
        selectedpatternElement[0].classList.remove("e-selected-pattern-style");
      }
      if (!target.classList.contains("e-selected-pattern-style")) {
        target.classList.add("e-selected-pattern-style");
      }
      if (target.className === "image-pattern-style e-selected-pattern-style") {
        switch (target.id) {
          case "pattern1":
            orien = "Vertical".toString() as LayoutOrientation;
            typ = "Alternate" as SubTreeAlignments;
            break;
          case "pattern2":
            orien = "Vertical".toString() as LayoutOrientation;
            typ = "Left" as SubTreeAlignments;
            break;
          case "pattern3":
            orien = "Vertical".toString() as LayoutOrientation;
            typ = "Left" as SubTreeAlignments;
            break;
          case "pattern4":
            orien = "Vertical".toString() as LayoutOrientation;
            typ = "Right" as SubTreeAlignments;
            break;
          case "pattern5":
            orien = "Vertical".toString() as LayoutOrientation;
            typ = "Right" as SubTreeAlignments;
            break;
          case "pattern6":
            orien = "Horizontal".toString() as LayoutOrientation;
            typ = "Balanced" as SubTreeAlignments;
            break;
          case "pattern7":
            orien = "Horizontal".toString() as LayoutOrientation;
            typ = "Center" as SubTreeAlignments;
            break;
          case "pattern8":
            orien = "Horizontal".toString() as LayoutOrientation;
            typ = "Left" as SubTreeAlignments;
            break;
          case "pattern9":
            orien = "Horizontal".toString() as LayoutOrientation;
            typ = "Right" as SubTreeAlignments;
            break;
          default:
            if (selectedpatternElement.length) {
              selectedpatternElement[0].classList.remove(
                "e-selected-pattern-style"
              );
            }
        }
        diagramInstance.layout.getLayoutInfo = (
          node: Node,
          options: TreeInfo
        ) => {
          if (target.id === "pattern4" || target.id === "pattern3") {
            options.offset = -50;
          }
          if (orien) {
            getLayoutInfo(node, options, orien, typ);
          }
        };

        diagramInstance.dataBind();
        diagramInstance.doLayout();
      }
    };
  }
});

//set orientation and type of the Layout.
function getLayoutInfo(
  node: Node,
  options: TreeInfo,
  orientation: LayoutOrientation,
  type: SubTreeAlignments
): void {
  /* tslint:disable:no-string-literal */
  if (
    (node.data as DataInfo)["Role"] === "General Manager" &&
    options.assistants &&
    options.children
  ) {
    options.assistants.push(options.children[0]);
    options.children.splice(0, 1);
  }
  if (!options.hasSubTree) {
    options.orientation = orientation as SubTreeOrientation;
    options.type = type;
  }
}

//sets default value for Node.
function nodeDefaults(obj: Node, diagram: Diagram): Node {
  obj.backgroundColor = (obj.data as EmployeeInfo).color;
  obj.style = { fill: "none", strokeColor: "none", color: "white" };
  obj.expandIcon = {
    height: 10,
    width: 10,
    shape: "None",
    fill: "lightgray",
    offset: { x: 0.5, y: 1 }
  };
  obj.expandIcon.verticalAlignment = "Center";
  obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
  obj.collapseIcon.offset = { x: 0.5, y: 1 };
  obj.collapseIcon.verticalAlignment = "Center";
  obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
  obj.collapseIcon.height = 10;
  obj.collapseIcon.width = 10;
  obj.collapseIcon.shape = "None";
  obj.collapseIcon.fill = "lightgray";
  obj.width = 120;
  obj.height = 30;
  return obj;
}

//sets default value for Connector.
function connectorDefaults(
  connector: ConnectorModel,
  diagram: Diagram
): ConnectorModel {
  if (connector.targetDecorator) connector.targetDecorator.shape = "None";
  connector.type = "Orthogonal";
  connector.constraints = 0;
  connector.cornerRadius = 0;
  return connector;
}


export interface EmployeeInfo {
  Role: string;
  color: string;
}

export interface DataInfo {
  [key: string]: string;
}
</script>