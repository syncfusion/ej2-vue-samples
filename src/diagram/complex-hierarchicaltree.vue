<template>
<div class="control-section">
  <div class="col-lg-8 control-section">
      <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :snapSettings='snapSettings' :tool='tool' :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings'></ejs-diagram>
  </div>
  <div class="col-lg-4 property-section">
      <div class="property-panel-header">
          Layout Settings
      </div>
      <div class="row" id="appearance" style="padding-top: 10px">
          <div class="row row-header">
              Orientation
          </div>
          <div class="row" style="padding-top: 8px">
              <div class="image-pattern-style  e-selected-style" id="topToBottom" style="background-image: url(./src/diagram/Images/common-orientation/toptobottom.png); margin-right: 3px">
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
              <div style="display: table;height: 35px; padding-left: 0px" class="col-xs-5">
                  <div style="display: table-cell; vertical-align: middle">Margin X</div>
              </div>
              <div class="col-xs-7">
                  <!-- used NumericTextBox for left margin of the layout. -->
                  <ejs-numerictextbox id='marginLeft'       
                                      :value='marginLeftvalue'
                                      :step='marginLeftstep'
                                      :format='marginLeftformat'
                                      :change='marginLeftchange'/>
              </div>
          </div>
          <div class="row" style="padding-top: 8px">
              <div style="display: table;height: 35px; padding-left: 0px" class="col-xs-5">
                  <div style="display: table-cell; vertical-align: middle">Margin Y</div>
              </div>
              <div class="col-xs-7">
                  <!-- used NumericTextBox for top margin of the layout. -->
                  <ejs-numerictextbox id='marginTop' 
                                      :value='marginTopvalue'
                                      :step='marginTopstep'
                                      :format='marginTopformat'
                                      :change='marginTopchange'/>
              </div>
          </div>
          <div class="row" style="padding-top: 8px">
              <div style="display: table;height: 35px; padding-left: 0px" class="col-xs-5">
                  <div style="display: table-cell; vertical-align: middle">Horizontal Spacing</div>
              </div>
              <div class="col-xs-7">
                  <!-- used NumericTextBox for horizontalspacing of the layout. -->
                  <ejs-numerictextbox id='horiontal' 
                                      :value='horiontalvalue'
                                      :step='horiontalstep'
                                      :format='horiontalformat'
                                      :change='horiontalchange'/>
              </div>
          </div>
          <div class="row" style="padding-top: 8px">
              <div style="display: table;height: 35px; padding-left: 0px" class="col-xs-5">
                  <div style="display: table-cell; vertical-align: middle">Vertical Spacing</div>
              </div>
              <div class="col-xs-7">
                  <!-- used NumericTextBox for verticalspacing of the layout. -->
                  <ejs-numerictextbox id='vertical' 
                                      :value='verticalvalue'
                                      :step='verticalstep'
                                      :format='verticalformat'
                                      :change='verticalchange'/>
              </div>
          </div>
      </div>
  </div>

  <div id="action-description">
      <p>
          This sample demonstrates a complex hierarchical template that is built from an external data source using complex hierarchical tree algorithm.
      </p>
  </div>
  <div id="description">
      <p>
          In this example, you can see how to generate a complex hierarchical tree from external data sources. You can also customize spacing between the objects in the tree. You can use the
          <code>horizontalSpacing</code> and <code>verticalSpacing</code> properties of <code>layout</code> to customize the space between the objects in the tree. You can use the <code>layoutOrientation</code> property of
          <code>layout</code> to change the orientation of the tree.
      </p>
      <p>
          To change the orientation of the tree, click the templates in the property panel.
      </p>

      <p style="font-weight: 500">Injecting Module</p>
      <p>
          Diagram component's features are segregated into individual feature-wise modules. To generate diagrams from an external data source,
          we need to Inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method. To automatically arrange the objects in a hierarchical structure, we need to Inject <code>ComplexHierarchicalTree</code> module using
          <code>provide: { diagram: [ComplexHierarchicalTree] }</code> method.  
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
  height: 50px;
  width: calc((100% - 18px) / 2);
  cursor: pointer;
  border: 1px solid #d5d5d5;
  background-position: center;
  float: left;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.row-header {
  font-size: 15px;
  font-weight: 500;
}

.e-selected-style {
  border-color: #6c6c6c;
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
  Node,
  Connector,
  DataBinding,
  DiagramTools,
  ComplexHierarchicalTree,
  LayoutOrientation
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import {
  NumericTextBox,
  ChangeEventArgs as NumericChangeEventArgs
} from "@syncfusion/ej2-vue-inputs";

Vue.use(DiagramPlugin);

let diagramInstance: any;
let marginTopObj: NumericTextBox;
let marginLeftObj: NumericTextBox;
let horizontalSpacingObj: NumericTextBox;
let verticalSpacingObj: NumericTextBox;

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: 580,
      //Configrues hierarchical tree layout
      layout: {
        type: "ComplexHierarchicalTree",
        horizontalSpacing: 40,
        verticalSpacing: 40,
        orientation: "TopToBottom",
        margin: { left: 10, right: 0, top: 50, bottom: 0 }
      },
      //Sets the default values of nodes
      getNodeDefaults: (obj: Node) => {
        obj.width = 40;
        obj.height = 40;
        //Initialize shape
        obj.shape = { type: "Basic", shape: "Rectangle", cornerRadius: 7 };
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector: Connector) => {
        connector.type = "Orthogonal";
        connector.cornerRadius = 7;
        connector.targetDecorator.height = 7;
        connector.targetDecorator.width = 7;
        connector.style.strokeColor = "#6d6d6d";
      },
      //Configures data source
      dataSourceSettings: {
        id: "Name",
        parentId: "ReportingPerson",
        dataManager: new DataManager(multiParentData as JSON[]),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
          /* tslint:disable:no-string-literal */
          nodeModel.style = {
            fill: data["fillColor"],
            strokeWidth: 1,
            strokeColor: data["border"]
          };
        }
      },
      //Disables all interactions except zoom/pan
      tool: DiagramTools.ZoomPan,
      snapSettings: { constraints: 0 },

      marginLeftvalue: 10,
      marginLeftstep: 1,
      marginLeftformat: "##.##",
      marginLeftchange: (args: NumericChangeEventArgs) => {
        update("left");
      },

      marginTopvalue: 10,
      marginTopstep: 1,
      marginTopformat: "##.##",
      marginTopchange: (args: NumericChangeEventArgs) => {
        update("top");
      },

      horiontalvalue: 50,
      horiontalstep: 1,
      horiontalformat: "##.##",
      horiontalchange: (args: NumericChangeEventArgs) => {
        update("hspacing");
      },

      verticalvalue: 40,
      verticalstep: 1,
      verticalformat: "##.##",
      verticalchange: (args: NumericChangeEventArgs) => {
        update("vspacing");
      }
    };
  },
  provide: {
    diagram: [DataBinding, ComplexHierarchicalTree]
  },
  mounted: function() {
    let diagramObj: any = document.getElementById("diagram");
    diagramInstance = diagramObj.ej2_instances[0];
    let marginLeftObject: any = document.getElementById("marginLeft");
    marginLeftObj = marginLeftObject.ej2_instances[0];
    let marginTopObject: any = document.getElementById("marginTop");
    marginTopObj = marginTopObject.ej2_instances[0];
    let horiontalObj: any = document.getElementById("horiontal");
    horizontalSpacingObj = horiontalObj.ej2_instances[0];
    let verticalObj: any = document.getElementById("vertical");
    verticalSpacingObj = verticalObj.ej2_instances[0];
    let obj: any = document.getElementById("appearance") as HTMLElement;
    //Click Event for Appearance of the layout.
    obj.onclick = (args: MouseEvent) => {
      let target: HTMLElement = args.target as HTMLElement;
      let selectedElement: HTMLCollection = document.getElementsByClassName(
        "e-selected-style"
      );
      if (selectedElement.length) {
        selectedElement[0].classList.remove("e-selected-style");
      }
      if (target.className === "image-pattern-style") {
        let id: string = target.id;
        let orientation1: string = id.substring(0, 1).toUpperCase()+id.substring(1,id.length);
        diagramInstance.layout.orientation = orientation1 as LayoutOrientation;
        diagramInstance.dataBind();
        diagramInstance.doLayout();
        target.classList.add('e-selected-style');
      }
    };
  }
});

//Apply the Alignment for the layout.
function update(value: string): void {
  if (value === "left") {
    diagramInstance.layout.margin.left = marginLeftObj.value;
  } else if (value === "top") {
    diagramInstance.layout.margin.top = marginTopObj.value;
  } else if (value === "hspacing") {
    diagramInstance.layout.horizontalSpacing = horizontalSpacingObj.value;
  } else if (value === "vspacing") {
    diagramInstance.layout.verticalSpacing = verticalSpacingObj.value;
  }
  diagramInstance.dataBind();
}

export let multiParentData: object[] = [
  { Name: "node11", fillColor: "#ff6329" },
  { Name: "node12", ReportingPerson: ["node114"], fillColor: "#669be5" },
  { Name: "node13", ReportingPerson: ["node12"], fillColor: "#30ab5c" },
  { Name: "node14", ReportingPerson: ["node12"], fillColor: "#30ab5c" },
  { Name: "node15", ReportingPerson: ["node12"], fillColor: "#30ab5c" },
  { Name: "node16", ReportingPerson: [], fillColor: "#14ad85" },
  {
    Name: "node17",
    ReportingPerson: ["node13", "node14", "node15"],
    fillColor: "#ff9400"
  },
  { Name: "node18", ReportingPerson: [], fillColor: "#14ad85" },
  {
    Name: "node19",
    ReportingPerson: ["node16", "node17", "node18"],
    fillColor: "#99bb55"
  },
  {
    Name: "node110",
    ReportingPerson: ["node16", "node17", "node18"],
    fillColor: "#99bb55"
  },
  {
    Name: "node111",
    ReportingPerson: ["node16", "node17", "node18", "node116"],
    fillColor: "#99bb55"
  },
  { Name: "node21", fillColor: "#ff6329" },
  { Name: "node22", ReportingPerson: ["node114"], fillColor: "#669be5" },
  { Name: "node23", ReportingPerson: ["node22"], fillColor: "#30ab5c" },
  { Name: "node24", ReportingPerson: ["node22"], fillColor: "#30ab5c" },
  { Name: "node25", ReportingPerson: ["node22"], fillColor: "#30ab5c" },
  { Name: "node26", ReportingPerson: [], fillColor: "#14ad85" },
  {
    Name: "node27",
    ReportingPerson: ["node23", "node24", "node25"],
    fillColor: "#ff9400"
  },
  { Name: "node28", ReportingPerson: [], fillColor: "#14ad85" },
  {
    Name: "node29",
    ReportingPerson: ["node26", "node27", "node28", "node116"],
    fillColor: "#99bb55"
  },
  {
    Name: "node210",
    ReportingPerson: ["node26", "node27", "node28"],
    fillColor: "#99bb55"
  },
  {
    Name: "node211",
    ReportingPerson: ["node26", "node27", "node28"],
    fillColor: "#99bb55"
  },
  { Name: "node31", fillColor: "#ff6329" },
  {
    Name: "node114",
    ReportingPerson: ["node11", "node21", "node31"],
    fillColor: "#941100"
  },
  {
    Name: "node116",
    ReportingPerson: ["node12", "node22"],
    fillColor: "#30ab5c"
  }
];

export interface DataInfo {
  [key: string]: string;
}
</script>