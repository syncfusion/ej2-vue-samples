<template>
<div class="control-section">
    <div class="content-wrapper" style="width: 100%;">
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
  LayoutAnimation,
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
import { hierarchicalTreewithmultipleroots } from "./diagram-data";

let diagramInstance;
let hSpacing;
let vSpacing;
let checkBoxObj;

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },
  data: function() {
    return {
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
        //binds the data with the nodess
        doBinding: (nodeModel, data, diagram) => {
          nodeModel.shape = {
            type: "Text",
            content: (data).Label
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
        debugger
        if((obj.data).id == 1 || (obj.data).id == 10 || (obj.data).id == 17){
       obj.style = { fill: '#1c5b9b', strokeColor: 'none', color: 'white', strokeWidth: 2 };
       obj.borderColor = '#1c5b9b';
       obj.backgroundColor = '#1c5b9b';
    }
    else if((obj.data).id == 2 ||(obj.data).id == 3 ||(obj.data).id == 11 ||(obj.data).id ==12 ||(obj.data).id == 13||(obj.data).id == 18||(obj.data).id == 19) {
       obj.style = { fill: '#18c1be', strokeColor: '#18c1be', color: 'white', strokeWidth: 2 };
       obj.borderColor = '#18c1be';
       obj.backgroundColor = '#18c1be';
    }
    else if((obj.data).id == 4||(obj.data).id == 5 ||(obj.data).id == 14 ||(obj.data).id == 15||(obj.data).id ==16||(obj.data).id ==20||(obj.data).id ==21) {
       obj.style = { fill: '#17a573', strokeColor: 'none', color: 'white', strokeWidth: 2 };
       obj.borderColor = '#17a573';
       obj.backgroundColor = '#17a573';
    }
    else {
       obj.style = { fill: '#73bb34', strokeColor: 'none', color: 'white', strokeWidth: 2 };
       obj.borderColor = '#73bb34';
       obj.backgroundColor = '#73bb34';
    }
   obj.width = 75;
   obj.height =35;
   (obj.shape).margin = { left: 5, right: 5, bottom: 5, top: 5 };
   return obj;
      },
      getConnectorDefaults: (obj, diagram) => {
          obj.type = 'Orthogonal';
        obj.style = { strokeColor: 'CornflowerBlue' };
        obj.targetDecorator = { shape: 'Arrow', height: 10, width: 10, style: { fill: 'CornflowerBlue', strokeColor: 'white' } };
        return obj;
      },
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree, LayoutAnimation]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
  }
}

</script>