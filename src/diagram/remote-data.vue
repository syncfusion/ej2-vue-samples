<template>

<div class="control-section">
  <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings' :layout='layout' :dataSourceSettings='dataSourceSettings' :tool='tool'></ejs-diagram>
<div id="action-description">
    <p>
        This sample demonstrates binding remote data with the diagram using the Data Manager support.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to generate a diagram from remote data such as REST APIs. The
        <code>dataSourceSettings</code> property can be used to map an external data source with the diagram control. The
        <code>id</code> property of
        <code>dataSourceSettings</code> can be used to define a unique field of an external data. The
        <code>parentId</code> property can be used to define the relationship between objects. The
        <code>dataManager</code> property can be used to fetch data from web services.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external
        data source, inject
        <code>DataBinding</code> module using
        <code>provide: { diagram: [LineSeries] }</code> method. To automatically arrange the objects in a hierarchical structure, inject
        <code>HierarchicalTree</code> module using
        <code>provide: { diagram: [HierarchicalTree] }</code> method.
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
  Node,
  Connector,
  DataBinding,
  HierarchicalTree,
  TreeInfo,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

Vue.use(DiagramPlugin);

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: 490,
      //Configrues hierarchical tree layout
      layout: {
        type: "HierarchicalTree",
        margin: { left: 0, right: 0, top: 100, bottom: 0 },
        verticalSpacing: 40,
        getLayoutInfo: (node, options) => {
          if (options.level === 3) {
            node.style.fill = "#3c418d";
          }
          if (options.level === 2) {
            node.style.fill = "#108d8d";
            options.type = "Center";
            options.orientation = "Horizontal";
          }
          if (options.level === 1) {
            node.style.fill = "#822b86";
          }
        }
      },
      //Sets the default values of nodes
      getNodeDefaults: (obj) => {
        obj.width = 80;
        obj.height = 40;
        //Initialize shape
        obj.shape = { type: "Basic", shape: "Rectangle" };
        obj.style = { fill: "#048785", strokeColor: "Transparent" };
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector) => {
        connector.type = "Orthogonal";
        connector.style.strokeColor = "#048785";
        connector.targetDecorator.shape = "None";
      },
      //Configures data source
      dataSourceSettings: {
        id: "EmployeeID",
        parentId: "ReportsTo",
        dataSource: new DataManager(
          {
            url: "https://mvc.syncfusion.com/Services/Northwnd.svc/",
            crossDomain: true
          },
          new Query()
            .from("Employees")
            .select("EmployeeID,ReportsTo,FirstName")
            .take(9)
        ),
        //binds the external data with node
        doBinding: (nodeModel, data, diagram) => {
          nodeModel.annotations = [
            {
              /* tslint:disable:no-string-literal */
              content: data["FirstName"],
              style: { color: "white" }
            }
          ];
        }
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