<template>

<div class="control-section">
    <div style="width:100%">
        <ejs-diagram style='display:block' id="diagram" :mode='mode' :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings' :layout='layout' :dataSourceSettings='dataSourceSettings' :tool='tool' :setNodeTemplate='setNodeTemplate'></ejs-diagram>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the generations of a family.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to build a hierarchical tree from an external data source. The <code>dataSourceSettings</code> property can be used to map an external data source with diagram control. 
        The <code>layout</code> property can be used to automatically arrange the nodes.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external data source, inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method. 
        
        To automatically arrange the objects in a hierarchical structure, inject <code>HierarchicalTree</code> module using <code>provide: { diagram: [HierarchicalTree] }</code> method.
    </p>
    <br>
</div>
</div>

</template>
<style>
</style>
<script lang="ts">
import Vue from "vue";
import {
  Node,
  TextElement,
  DataBinding,
  HierarchicalTree,
  HorizontalAlignment,
  SnapConstraints
} from "@syncfusion/ej2-vue-diagrams";
import {
  Diagram,
  DiagramPlugin,
  NodeModel,
  Canvas,
  PathElement,
  ConnectorModel,
  PortVisibility,
  DiagramElement,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";

import { DataManager } from "@syncfusion/ej2-data";
import { familyData } from "./diagram-data";

Vue.use(DiagramPlugin);

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "499px",
      mode: "SVG",
      snapSettings: { constraints: SnapConstraints.None },
      //Configures data source
      dataSourceSettings: {
        id: "Name",
        parentId: "Category",
        dataManager: new DataManager(familyData as JSON[]),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
          let key: string = "shape";
          let name: string = "Name";
          /* tslint:disable:no-string-literal */
          nodeModel.shape = { type: "Text", content: data[name] };
        }
      },
      //Configrues hierarchical tree layout
      layout: {
        type: "HierarchicalTree",
        verticalSpacing: 45,
        horizontalSpacing: 15
      },
      //Sets the default values of nodes
      getNodeDefaults: (obj: Node, diagram: Diagram) => {
        obj.backgroundColor = "#e8ebef";
        obj.ports = [
          {
            id: "port1",
            shape: "Circle",
            offset: { x: 0.5, y: 0.51 },
            height: 4,
            width: 4,
            visibility: PortVisibility.Visible,
            style: {
              fill: "black"
            }
          }
        ];
        return obj;
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        connector.type = "Orthogonal";
        connector.sourcePortID = "port1";
        connector.targetDecorator = { shape: "None" };
        return connector;
      },
      //Customizes the content of the node
      setNodeTemplate: (node: NodeModel) => {
        return getNodeTemplate(node);
      },
      tool: DiagramTools.ZoomPan
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  }
});

//Creation of TextElement
function getTextElement(
  text: string,
  color: string,
  alignment: HorizontalAlignment
): DiagramElement {
  let textElement: TextElement = new TextElement();
  textElement.width = 60;
  textElement.height = 35;
  textElement.content = text;
  textElement.style.fill = color;
  textElement.horizontalAlignment = alignment;
  textElement.style.strokeColor = "none";
  textElement.relativeMode = "Object";
  return textElement;
}

//Creation of PathElement
function getPathElement(data: string): PathElement {
  let pathElement: PathElement = new PathElement();
  pathElement.data = data;
  pathElement.style.strokeColor = " black";
  pathElement.style.strokeWidth = 1;
  pathElement.verticalAlignment = "Center";
  pathElement.relativeMode = "Object";
  return pathElement;
}

//Customizes the content of the node
function getNodeTemplate(node: NodeModel): Canvas {
  let canvas: Canvas = new Canvas();
  canvas.children = [];
  canvas.width = 140;
  canvas.style.strokeWidth = 0;
  canvas.style.fill = "transparent";
  canvas.margin = { left: 5, right: 5, top: 5, bottom: 5 };
  canvas.children.push(getPathElement("M 0 100 L 140 100 "));
  let nameKey: string = "Name";
  let spouseNameKey: string = "spouse";
  /* tslint:disable:no-string-literal */
  canvas.children.push(
    getTextElement((node.data as DataInfo)[nameKey], "#c8c8f5", "Left")
  );
  /* tslint:disable:no-string-literal */
  canvas.children.push(
    getTextElement((node.data as DataInfo)[spouseNameKey], "#f3bcd7", "Right")
  );
  return canvas;
}

export interface DataInfo {
  [key: string]: string;
}
</script>