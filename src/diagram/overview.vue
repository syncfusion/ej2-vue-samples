<template>
<div class="control-section">
    <div class="col-lg-12 control-section">
    <div class="content-wrapper">
        <ejs-diagram style='display:block' id="diagram" :width='width' :height='height' :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings' :setNodeTemplate='setNodeTemplate' :snapSettings='snapSettings' :tool='tool'></ejs-diagram>
    </div>
</div>
<div class="col-lg-4"  style=" width:50%; padding:0px;right:30px;bottom:20px;border: #eeeeee;border-style: solid;box-shadow: 0px 2px 2px rgba(0,0,0,0.3); background:#f7f7f7;position:absolute">
 <ejs-overview id="overview" style="top:30px"       
               :sourceID='overviewsourceID'
               :width='overviewwidth'
               :height='overviewheight'/>
</div>
<div id="action-description">
    <p>
        This sample visualizes an organizational structure along with an overview for easily navigating the large organizational
        structure using Overview Panel.
    </p>
</div>
<div id="description">
    <p>
        This example shows how to render the Overview Panel and how to display a preview (overall view) of the entire content of
        a diagram. This helps you look at the overall picture of a large diagram and also to navigate (pan or zoom) to a
        particular position of the page. The <code>sourceID</code> property can be used to map the diagram control with overview.
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
  OverviewPlugin,
  Diagram,
  DiagramPlugin,
  ConnectorModel,
  Node,
  Overview,
  SnapConstraints,
  Container,
  TextElement,
  StackPanel,
  ImageElement,
  DataBinding,
  HierarchicalTree,
  TreeInfo,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { data } from "./diagram-data";

Vue.use(DiagramPlugin);
Vue.use(OverviewPlugin);
let diagramInstance: Diagram;

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "590px",
      scrollSettings: { scrollLimit: "Infinity" },
      //Sets the constraints of the SnapSettings
      snapSettings: { constraints: SnapConstraints.None },
      //Configrues organizational chart layout
      layout: {
        type: "OrganizationalChart",
        margin: { top: 20 },
        getLayoutInfo: (node: Node, tree: TreeInfo) => {
          if (!tree.hasSubTree) {
            tree.orientation = "Vertical";
            tree.type = "Right";
          }
        }
      },
      //Sets the parent and child relationship of DataSource.
      dataSourceSettings: {
        id: "Id",
        parentId: "ReportingPerson",
        dataManager: new DataManager(data)
      },
      //Sets the default values of Node
      getNodeDefaults: (obj: Node, diagram: Diagram) => {
        obj.height = 50;
        obj.style = { fill: "transparent", strokeWidth: 2 };
        return obj;
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        if (connector.targetDecorator) connector.targetDecorator.shape = "None";
        connector.type = "Orthogonal";
        if (connector.style) connector.style.strokeColor = "gray";
        return connector;
      },
      //customization of the node.
      setNodeTemplate: (obj: Node, diagram: Diagram): Container => {
        return setNodeTemplate(obj, diagram);
      },
      tool: DiagramTools.ZoomPan,
      overviewsourceID: "diagram",
      overviewwidth: "100%",
      overviewheight: "150px"
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  },
  mounted: function() {
    let diagramObj: any = document.getElementById("diagram");
    diagramInstance = diagramObj.ej2_instances[0];
  },
  methods: {}
});

//Funtion to add the Template of the Node.
function setNodeTemplate(obj: Node, diagram: Diagram): Container {
  let content: StackPanel = new StackPanel();
  content.id = obj.id + "_outerstack";
  content.orientation = "Horizontal";
  content.style.strokeColor = "gray";
  content.padding = { left: 5, right: 10, top: 5, bottom: 5 };
  let image: ImageElement = new ImageElement();
  image.width = 50;
  image.height = 50;
  image.style.strokeColor = "none";
  image.source = (obj.data as EmployeeInfo).ImageUrl;
  image.id = obj.id + "_pic";
  let innerStack: StackPanel = new StackPanel();
  innerStack.style.strokeColor = "none";
  innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
  innerStack.id = obj.id + "_innerstack";

  let text: TextElement = new TextElement();
  text.content = (obj.data as EmployeeInfo).Name;
  text.style.color = "black";
  text.style.bold = true;
  text.style.strokeColor = "none";
  text.style.fill = "none";
  text.id = obj.id + "_text1";

  let desigText: TextElement = new TextElement();
  desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
  desigText.content = (obj.data as EmployeeInfo).Designation;
  desigText.style.color = "black";
  desigText.style.strokeColor = "none";
  desigText.style.fill = "none";
  desigText.style.textWrapping = "Wrap";
  desigText.id = obj.id + "_desig";
  innerStack.children = [text, desigText];

  content.children = [image, innerStack];

  return content;
}

export interface EmployeeInfo {
  Name: string;
  Designation: string;
  ImageUrl: string;
}
</script>