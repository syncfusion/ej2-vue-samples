<template>
<div class="control-section">
    <div class="content-wrapper" style="width: 100%;">
      <!-- Configures the diagram with dynamic properties and settings -->
      <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :mode='mode' :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :snapSettings='snapSettings' :layout='layout' :dataSourceSettings='dataSourceSettings' :tool='tool'></ejs-diagram>
    </div>
  <div id="action-description">
  <p>
     This sample illustrates the structure of an Electricity Sector using complex hierarchical layout with multiple roots.
  </p>
</div>
<div id="description">
  <p>This example shows how to create a complex hierarchical layout with multiple root nodes.</p>
  <br />
</div>
</div>
</template>
<style scoped>

</style>
<script>
import {
  DiagramComponent,
  Diagram,
  NodeModel,
  ConnectorModel,
  NodeConstraints,
  TextModel,
  LayoutOrientation
} from "@syncfusion/ej2-vue-diagrams";
import { DiagramTools } from "@syncfusion/ej2-vue-diagrams";
import {
  DataBinding,
  HierarchicalTree,
  SnapConstraints
} from "@syncfusion/ej2-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { hierarchicalTreewithmultipleroots } from "./diagram-data";

let diagramInstance;

export default {
  components: {
    // Defines components for the diagram
    'ejs-diagram': DiagramComponent
  },
  data: function() {
    return {
    // Initialize component data
      width: "100%",
      height: "499px",
      mode: "SVG",
      snapSettings: { constraints: SnapConstraints.None },
      //configures data source settings
      dataSourceSettings: {
        //sets the fields to bind
        id: "id",
        parentId: "parentId",
        dataSource: new DataManager(hierarchicalTreewithmultipleroots),
        //binds the data to the nodess
        doBinding: (nodeModel, data, diagram) => {
          nodeModel.shape = {
            type: "Text",
            content: (data).Label
          };
        }
      },
      //Disables all interactions except zoom and pan
      tool: DiagramTools.ZoomPan,
      //Configures automatic layout
      layout: {
        type: "HierarchicalTree",
        verticalSpacing: 30,
        horizontalSpacing: 40
      },
      //Defines the default node properties
      getNodeDefaults: (obj) => {
        (obj.style).fill = (obj.data).color;
        obj.backgroundColor = (obj.data).color;
        (obj.style).color = 'white';
        (obj.style).strokeWidth = 2;  
        obj.width = 75;
        obj.height = 35;
        (obj.shape).margin = { left: 5, right: 5, bottom: 5, top: 5 };
        return obj;
      },
      //Define the default connector properties
      getConnectorDefaults: (obj) => {
        obj.type = 'Orthogonal';
        obj.style = { strokeColor: 'CornflowerBlue' };
        obj.targetDecorator = { shape: 'Arrow', height: 10, width: 10, style: { fill: 'CornflowerBlue', strokeColor: 'white' } };
        return obj;
      },
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
  }
}

</script>