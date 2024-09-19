<!-- Sample for Zoom and Pan. -->

<!-- Template for Zoom and Pan -->
<template>
  <div class="control-section">
    <div class="col-lg-12 control-section">

      <!-- Toolbar Buttons with Icons and Tooltips -->
      <ejs-toolbar id="toolbar_default" ref="toolbar_default":clicked='onItemClick'>
        <e-items>
          <e-item id='ZoomIn' prefixIcon='e-icons e-zoom-in' tooltipText='Zoom In' type='Button'></e-item>
          <e-item id='ZoomOut' prefixIcon='e-icons e-zoom-out' tooltipText='Zoom Out' type='Button'></e-item>
          <e-item id='Separator' type="Separator"></e-item>
          <e-item id='Select' prefixIcon='e-icons e-mouse-pointer' tooltipText='Select' type='Button'></e-item>
          <e-item id='PanTool' prefixIcon='e-icons e-pan' tooltipText='Pan Tool' type='Button'></e-item>
          <e-item id='Reset' prefixIcon='e-icons e-reset' tooltipText='Reset' type='Button'></e-item>
          <e-item id='FitToPage' prefixIcon='e-icons e-zoom-to-fit' tooltipText='Fit To Page' type='Button'></e-item>
          <e-item id='BringIntoView' prefixIcon='e-icons e-bring-to-view' tooltipText='Bring Into View' type='Button'
            disabled=true></e-item>
          <e-item id='BringIntoCenter' prefixIcon='e-icons e-bring-to-center' tooltipText='Bring Into Center' type='Button'
            disabled=true></e-item>
        </e-items>
      </ejs-toolbar>
      <div class="content-wrapper">
        <!-- Diagram Component -->
        <ejs-diagram style='display:block' ref="diagramObject" id="diagram" :width='width' :height='height'
          :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
          :dataSourceSettings='dataSourceSettings' :setNodeTemplate='setNodeTemplate' :snapSettings='snapSettings'
          :selectionChange='selectionChange'></ejs-diagram>
      </div>
    </div>
    <!-- Descriptions for the Action and the Diagram -->
    <div id="action-description">
      <p>
        This sample illustrates how to zoom and pan in the diagram.
      </p>
    </div>
    <div id="description">
      <p>
      <p>This example explains zooming, panning, reset, fit to page, bring into view, and bring to center.</p>

      <p>The <code>fitToPage</code> method adjusts the zoom level of a diagram so that all its content is visible within
        the viewport.</p>

      <p>The <code>bringIntoView</code> method brings the specified rectangular or bounds region into the diagram
        viewport.</p>

      <p>The <code>bringToCenter</code> method brings the specified rectangular region of the diagram content to the
        center of the viewport. You can zoom in and out using the zoom method, and reset the zoom and scroller offsets
        to default values using the reset zoom method.</p>

      <p> In this sample, use <code>pan</code>, <code>reset</code>,<code>zoomIn</code> , and <code>ZoomOut</code>
        options to pan, reset the zoom and zoomin/out the diagram.</p>
      </p>
      <br>
    </div>
  </div>
</template>

<style scoped></style>

<script>

//Importing needed dependencies for diagram
import {
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
import {
  Toolbar,
  ItemDirective,
  ItemsDirective,
  ToolbarComponent,
} from "@syncfusion/ej2-vue-navigations";

let diagramInstance;
let toolbarInstance;
// Exporting the default object for Vue component
export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective
  },
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
        getLayoutInfo: (node, tree) => {
          if (!tree.hasSubTree) {
            tree.orientation = "Vertical";
            tree.type = "Right";
          }
        }
      },
      //Sets the parent and child relationship of DataSource.
      dataSourceSettings: {
        id: "Id", parentId: "ReportingPerson", dataSource: new DataManager(data)
      },
      //function selection change to hide and visible the bring into view and center whenever select any nodes
      selectionChange :(args)=>{
          if (args.state === 'Changed') {
          let selectedItems = diagramInstance.selectedItems.nodes;
            if (selectedItems.length === 0) {
              toolbarInstance.items.find(item=>item.id==='BringIntoView').disabled = true;
              toolbarInstance.items.find(item=>item.id==='BringIntoCenter').disabled = true;
            }
            if (selectedItems.length >0) {
              toolbarInstance.items.find(item=>item.id==='BringIntoView').disabled = false;
              toolbarInstance.items.find(item=>item.id==='BringIntoCenter').disabled = false;
            }
        }
      },
      //Sets the default values of Node
      getNodeDefaults: (node) => {
        node.height = 50;
        node.style = { fill: "transparent", strokeWidth: 2 };
        return node;
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector) => {
        if (connector.targetDecorator) connector.targetDecorator.shape = "None";
        connector.type = "Orthogonal";
        if (connector.style) connector.style.strokeColor = "gray";
        return connector;
      },
      //customization of the node.
      setNodeTemplate: (node) => {
        return setNodeTemplate(node);
      },
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObject.ej2Instances;
    toolbarInstance = this.$refs.toolbar_default.ej2Instances;
  },
   methods: {
    //click event to perform printing the diagraming objects.
     onItemClick: function (args) {
       // Switch statement based on the tooltip text of the clicked toolbar item
       if (args) {
         switch (args.item.tooltipText) {
           // Zoom in action
           case 'Zoom In':
             var zoomin = { type: 'ZoomIn', zoomFactor: 0.2 };
             diagramInstance.zoomTo(zoomin);
             break;
           // Zoom Out action
           case 'Zoom Out':
             var zoomout = { type: 'ZoomOut', zoomFactor: 0.2 };
             diagramInstance.zoomTo(zoomout);
             break;
           // Reset action
           case 'Reset':
           diagramInstance.reset();
             break;
           // Pan tool action
           case 'Pan Tool':
           diagramInstance.tool = DiagramTools.ZoomPan;
             break;
           // Select action
           case 'Select':
           diagramInstance.clearSelection();
           diagramInstance.drawingObject = {};
           diagramInstance.tool = DiagramTools.SingleSelect | DiagramTools.MultipleSelect;
             break;
           // Fit to page action
           case 'Fit To Page':
           diagramInstance.fitToPage();
             break;
           // Bring selected node into view action
           case 'Bring Into View':
             if (diagramInstance.selectedItems.nodes.length > 0) {
               var bound = diagramInstance.selectedItems.nodes[0].wrapper.bounds;
               diagramInstance.bringIntoView(bound);
             }
             break;
           // Bring selected node into center action
           case 'Bring Into Center':
             if (diagramInstance.selectedItems.nodes.length > 0) {
               var bounds = diagramInstance.selectedItems.nodes[0].wrapper.bounds;
               diagramInstance.bringToCenter(bounds);
             }
             break;
         }
       }
     }
  },
}

//Funtion to add the Template of the Node.
function setNodeTemplate(node) {
  // Create an outer StackPanel as content to contain image and text elements
  let content = new StackPanel();
  content.id = node.id + "_outerstack";
  content.orientation = "Horizontal";
  content.style.strokeColor = "gray";
  content.padding = { left: 5, right: 10, top: 5, bottom: 5 };

  // Create an image element to display employee image
  let image = new ImageElement();
  image.width = 50;
  image.height = 50;
  image.style.strokeColor = "none";
  image.source = (node.data).ImageUrl;
  image.id = node.id + "_pic";

  // Create an inner stack panel to organize text elements
  let innerStack = new StackPanel();
  innerStack.style.strokeColor = "none";
  innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
  innerStack.id = node.id + "_innerstack";

  // Create a text element for displaying employee name
  let text = new TextElement();
  text.content = (node.data).Name;
  text.style.color = "black";
  text.style.bold = true;
  text.style.strokeColor = "none";
  text.style.fill = "none";
  text.id = node.id + "_text1";

  // Create a TextElement for the node's designation
  let desigText = new TextElement();
  desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
  desigText.content = (node.data).Designation;
  desigText.style.color = "black";
  desigText.style.strokeColor = "none";
  desigText.style.fill = "none";
  desigText.style.textWrapping = "Wrap";
  desigText.id = node.id + "_desig";

  // Add text elements to the inner StackPanel
  innerStack.children = [text, desigText];

  // Add image element and inner StackPanel to the outer content
  content.children = [image, innerStack];

  return content;
}
</script>