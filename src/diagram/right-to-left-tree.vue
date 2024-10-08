<template>
<div class="control-section">
    <div style="width:100%">
        <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings' :layout='layout' :dataSourceSettings='dataSourceSettings' :tool='tool'></ejs-diagram>
    </div>

<div id="action-description">
    <p>
        This sample visualizes the concept of artificial intelligence using hierarchical tree layout algorithm.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to generate a RTL (right to left) tree from an external data source. The
        <code>orientation</code> property of the layout can be used to generate RTL tree.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external
        data source, inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method. To automatically arrange the objects in a hierarchical structure, inject
        <code>HierarchicalTree</code> module using <code>provide: { diagram: [HierarchicalTree] }</code> method.
    </p>
    <br>
</div>
</div>

</template>
<style scoped>
</style>
<script>
import {
  Diagram,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import {
  DiagramComponent,
  DataBinding,
  HierarchicalTree,
  SnapConstraints
} from "@syncfusion/ej2-vue-diagrams";

import { DataManager } from "@syncfusion/ej2-data";
import { artificialIntelligence } from "./diagram-data";

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "600px",
      snapSettings: { constraints: SnapConstraints.None },
      //Configure the data source
      dataSourceSettings: {
        id: "Name",
        parentId: "Category",
        dataSource: new DataManager(artificialIntelligence),
        doBinding: (nodeModel, data) => {
          let nameKey = "Name";
          nodeModel.annotations = [{ content: data[nameKey] }];
        }
      },
      //Configures the layout
      layout: {
        type: "HierarchicalTree",
        orientation: "RightToLeft",
        verticalAlignment: "Center",
        horizontalAlignment: "Center",
        verticalSpacing: 100,
        horizontalSpacing: -10
      },
      //Enables zoom pan tool
      tool: DiagramTools.ZoomPan,
      //Sets the default values of a node
      getNodeDefaults: (obj) => {
        obj.width = 120;
        obj.style = { fill: "#034d6d", strokeWidth: 1 };
        let key = "branch";
        //Initialize shape
        if ((obj.data)[key] === "root") {
          obj.shape = { type: "Basic", shape: "Ellipse" };
          obj.height = 120;
        } else {
          obj.shape = {
            type: "Native",
            content:
              '<svg width="120" height="61"><g><line x1="0" x2="120" y1="60" y2="60" stroke-width="1" stroke= "black"></line>' +
              '<rect x="0" y="0" width="120" height="60" fill="transparent" stroke="none"></rect></g></svg>'
          };
          obj.style.strokeWidth = 0;
          obj.height = 60;
        }
        //Set ports and annotations
        obj.ports = getPorts((obj.data)[key] === "root");
        let annotation = obj.annotations[0];
        if ((obj.data )[key] !== "root") {
          annotation.offset = { y: 1 };
          annotation.verticalAlignment = "Bottom";
          annotation.margin = { bottom: 10 };
        } else {
          annotation.style = { color: "white" };
        }
        return obj;
      },
      //Sets the default values of a Connector
      getConnectorDefaults: (connector, diagram) => {
        connector.type = "Bezier";
        connector.sourcePortID = "port1";
        connector.targetPortID = "port2";
        connector.targetDecorator = { shape: "None" };
        return connector;
      }
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  }
}

//Create and add ports for Node.
function getPorts(root) {
  let ports = [
    {
      id: "port1",
      shape: "Circle",
      offset: { x: 0, y: 0.5 },
      horizontalAlignment: "Left",
      verticalAlignment: "Bottom",
      margin: { right: -2, bottom: -5.5 }
    },
    {
      id: "port2",
      shape: "Circle",
      offset: { x: 1, y: 0.99 },
      horizontalAlignment: "Right",
      verticalAlignment: "Bottom",
      margin: { right: -2, bottom: -5.5 }
    }
  ];
  if (!root) {
    (ports[0]).offset.y = 1;
  } else {
    ports[0].verticalAlignment = "Center";
    ports[0].horizontalAlignment = "Center";
  }
  return ports;
}

</script>