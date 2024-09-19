<template>
<div class="control-section">
    <div class="col-lg-12 control-section">
    <div class="content-wrapper">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings' :setNodeTemplate='setNodeTemplate' :snapSettings='snapSettings' :tool='tool'></ejs-diagram>
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

<style scoped>
</style>

<script>
import {
  OverviewComponent,
  Diagram,
  DiagramComponent,
  SnapConstraints,
  TextElement,
  StackPanel,
  ImageElement,
  DataBinding,
  HierarchicalTree,
  DiagramTools
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { data } from "./diagram-data";

let diagramInstance;

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-overview': OverviewComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "590px",
      scrollSettings: { scrollLimit: "Infinity" },
      snapSettings: { constraints: SnapConstraints.None }, //Sets the constraints of the SnapSettings
      //Configrues organizational chart layout
      layout: {
        type: "OrganizationalChart",
        margin: { top: 20 },
        getLayoutInfo: getLayoutInfo
      },
      //Sets the parent and child relationship of DataSource.
      dataSourceSettings: {
        id: "Id",
        parentId: "ReportingPerson",
        dataSource: new DataManager(data)
      },
      getNodeDefaults: getNodeDefaults,
      getConnectorDefaults: getConnectorDefaults,
      //customization of the node.
      setNodeTemplate: (obj, diagram) => {
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
    diagramInstance = this.$refs.diagramObj.ej2Instances;
  },
  methods: {}
}

// Function to define default node properties
function getNodeDefaults(node, diagram) {
  node.height = 150;
  node.width = 100;
  node.style = { fill: "transparent", strokeWidth: 2 };
  return node;
}

// Function to define default connector properties
function getConnectorDefaults(connector, diagram) {
  if (connector.targetDecorator) connector.targetDecorator.shape = "None";
  connector.type = "Orthogonal";
  if (connector.style) connector.style.strokeColor = "grey";
  return connector;
}

// Function to define layout information
function getLayoutInfo(node, tree) {
  if (!tree.hasSubTree) {
    tree.orientation = "Vertical";
    tree.type = "Right";
  }
}

//Funtion to add the Template of the Node.
function setNodeTemplate(obj, diagram) {
  
  // Create the outer container for the node content.
  let content = new StackPanel();
  content.id = obj.id + "_outerstack";
  content.orientation = "Horizontal";
  content.style.strokeColor = "gray";
  content.padding = { left: 5, right: 10, top: 5, bottom: 5 };

  // Create an image element for the employee image.
  let image = new ImageElement();
  image.width = 50;
  image.height = 50;
  image.style.strokeColor = "none";
  image.source = (obj.data).ImageUrl;
  image.id = obj.id + "_pic";

  // Create an inner stack panel for text elements (name and designation).
  let innerStack = new StackPanel();
  innerStack.style.strokeColor = "none";
  innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
  innerStack.id = obj.id + "_innerstack";

  // Create a text element for the employee name.
  let text = new TextElement();
  text.content = (obj.data).Name;
  text.style.color = "black";
  text.style.bold = true;
  text.style.strokeColor = "none";
  text.style.fill = "none";
  text.id = obj.id + "_text1";

  // Create a text element for the employee designation.
  let desigText = new TextElement();
  desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
  desigText.content = (obj.data).Designation;
  desigText.style.color = "black";
  desigText.style.strokeColor = "none";
  desigText.style.fill = "none";
  desigText.style.textWrapping = "Wrap";
  desigText.id = obj.id + "_desig";
  innerStack.children = [text, desigText];

  content.children = [image, innerStack];

  return content;
}


</script>