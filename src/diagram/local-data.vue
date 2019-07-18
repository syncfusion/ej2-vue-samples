<template>

<div class="control-section">
    <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings' :layout='layout' :dataSourceSettings='dataSourceSettings' :tool='tool'></ejs-diagram>
<div id="action-description">
    <p>
        This sample visualizes the classifications of species using hierarchical tree layout algorithm. Data Manager support is used to bind data with the diagram.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to generate a diagram from the saved data. The <code>dataSourceSettings</code> property can be used to map an external data source with the diagram control. The
        <code>id</code> property of <code>dataSourceSettings</code> can be used to define a unique field of an external data. The
        <code>parentId</code> property can be used to define the relationship between the objects.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external
        data source, inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method. To automatically arrange the objects in a hierarchical structure, inject
        <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method.
    </p>
    <br>
</div>
</div>


</template>
<style>
</style>
<script>
import Vue from "vue";
import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  ConnectorModel,
  Node,
  DataBinding,
  HierarchicalTree,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { species } from "./diagram-data";

Vue.use(DiagramPlugin);

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: 490,
      //Configures data source
      dataSourceSettings: {
        id: "Name",
        parentId: "Category",
        dataSource: new DataManager(species),
        //binds the external data with node
        doBinding: (nodeModel, data, diagram) => {
          nodeModel.annotations = [
            {
              /* tslint:disable:no-string-literal */
              content: data["Name"],
              style: { color: "black" }
            }
          ];
          /* tslint:disable:no-string-literal */
          nodeModel.style = {
            fill: "#ffeec7",
            strokeColor: "#f5d897",
            strokeWidth: 1
          };
        }
      },
      //Configrues organizational chart layout
      layout: {
        type: "HierarchicalTree",
        horizontalSpacing: 15,
        verticalSpacing: 50,
        margin: { top: 10, left: 10, right: 10, bottom: 0 }
      },
      //Sets the default values of nodes
      getNodeDefaults: (obj, diagram) => {
        //Initialize shape
        obj.shape = { type: "Basic", shape: "Rectangle" };
        obj.style = { strokeWidth: 1 };
        obj.width = 95;
        obj.height = 30;
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector, diagram) => {
        connector.type = "Orthogonal";
        if (connector.style) connector.style.strokeColor = "#4d4d4d";
        if (connector.targetDecorator) connector.targetDecorator.shape = "None";
      },
      //Disables all interactions except zoom/pan
      tool: DiagramTools.ZoomPan,
      snapSettings: { constraints: 0 }
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  }
});

</script>