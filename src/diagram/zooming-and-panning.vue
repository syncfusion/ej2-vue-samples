<template>
<div class="control-section">
    <div class="col-lg-12 control-section">
        <ejs-toolbar id="toolbar_default" :clicked='onItemClick'>
    <e-items>
    <e-item prefixIcon='e-icons e-zoom-in' tooltipText='Zoom In' type='Button'></e-item>
    <e-item prefixIcon='e-icons e-zoom-out' tooltipText='Zoom Out' type='Button'></e-item>
      <e-item type="Separator"></e-item>
      <e-item prefixIcon='e-icons e-mouse-pointer' tooltipText='Select' type='Button'></e-item>
      <e-item prefixIcon='e-icons e-pan' tooltipText='Pan Tool' type='Button'></e-item>
      <e-item prefixIcon='e-icons e-reset' tooltipText='Reset' type='Button'></e-item>
      <e-item prefixIcon='e-icons e-zoom-to-fit' tooltipText='Fit To Page' type='Button'></e-item>
      <e-item prefixIcon='e-icons e-bring-to-view' tooltipText='Bring Into View' type='Button' disabled=true></e-item>
      <e-item prefixIcon='e-icons e-bring-to-center' tooltipText='Bring Into Center' type='Button' disabled=true></e-item>
    </e-items>
    </ejs-toolbar>
    <div class="content-wrapper">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings' :setNodeTemplate='setNodeTemplate' :snapSettings='snapSettings' :selectionChange='selectionChange'></ejs-diagram>
    </div>
</div>
<div id="action-description">
    <p>
       This sample illustrates how to zoom and pan in the diagram.
    </p>
</div>
<div id="description">
    <p>
        <p>This example explains zooming, panning, reset, fit to page, bring into view, and bring to center.</p>
    
    <p>The <code>fitToPage</code> method adjusts the zoom level of a diagram so that all its content is visible within the viewport.</p>

    <p>The <code>bringIntoView</code> method brings the specified rectangular or bounds region into the diagram viewport.</p>

    <p>The <code>bringToCenter</code> method brings the specified rectangular region of the diagram content to the center of the viewport. You can zoom in and out using the zoom method, and reset the zoom and scroller offsets to default values using the reset zoom method.</p>

   <p> In this sample, use <code>pan</code>, <code>reset</code>,<code>zoomIn</code> , and <code>ZoomOut</code> options to pan, reset the zoom and zoomin/out the diagram.</p>
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
        id: "Id",
        parentId: "ReportingPerson",
        dataSource: new DataManager(data)
      },
      //function selection change to hide and visible the bring into view and center whenever select any nodes
      selectionChange :(args)=>{
        let toolbarEditor = document.getElementById("toolbar_default").ej2_instances[0];
        var diagram = document.getElementById("diagram").ej2_instances[0];
          if (args.state === 'Changed') {
          let selectedItems = diagram.selectedItems.nodes;
            if (selectedItems.length === 0) {
                toolbarEditor.items[7].disabled = true;
                toolbarEditor.items[8].disabled = true;
            }
            if (selectedItems.length === 1) {
                toolbarEditor.items[7].disabled = false;
                toolbarEditor.items[8].disabled = false;
            }
            if (selectedItems.length > 1) {
                toolbarEditor.items[7].disabled = false;
                toolbarEditor.items[8].disabled = false;
            }
        }
      },
      //Sets the default values of Node
      getNodeDefaults: (obj, diagram) => {
        obj.height = 50;
        obj.style = { fill: "transparent", strokeWidth: 2 };
        return obj;
      },
      //Sets the default values of connector
      getConnectorDefaults: (connector, diagram) => {
        if (connector.targetDecorator) connector.targetDecorator.shape = "None";
        connector.type = "Orthogonal";
        if (connector.style) connector.style.strokeColor = "gray";
        return connector;
      },
      //customization of the node.
      setNodeTemplate: (obj, diagram) => {
        return setNodeTemplate(obj, diagram);
      },
    };
  },
  provide: {
    diagram: [DataBinding, HierarchicalTree]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
  },
   methods: {
    //click event to perform printing the diagraming objects.
    onItemClick: function(args) {
      var diagram = document.getElementById("diagram").ej2_instances[0];
      if (args) {
        switch (args.item.tooltipText) {
        case 'Zoom In':
        var zoomin = { type: 'ZoomIn', zoomFactor: 0.2 };
        diagram.zoomTo(zoomin);
        break;
      case 'Zoom Out':
          var zoomout = { type: 'ZoomOut', zoomFactor: 0.2 };
          diagram.zoomTo(zoomout);
          break;
      case 'Reset':
          diagram.reset();
          break;
      case 'Pan Tool':
          diagram.tool =  DiagramTools.ZoomPan;
          break;
      case 'Select':
            diagram.clearSelection();
            diagram.drawingObject = {};
            diagram.tool =  DiagramTools.SingleSelect |  DiagramTools.MultipleSelect;
            break;
      case 'Fit To Page':
            diagram.fitToPage();
            break;
      case 'Bring Into View':
            if( diagram.selectedItems.nodes.length > 0){
            var bound =  diagram.selectedItems.nodes[0].wrapper.bounds;
            diagram.bringIntoView(bound);
            }
            break;
      case 'Bring Into Center':
            if( diagram.selectedItems.nodes.length>0){
            var bounds =  diagram.selectedItems.nodes[0].wrapper.bounds;
            diagram.bringToCenter(bounds);
            }
          break;
        }
      }
    }
  },
}

//Funtion to add the Template of the Node.
function setNodeTemplate(obj, diagram) {
  let content = new StackPanel();
  content.id = obj.id + "_outerstack";
  content.orientation = "Horizontal";
  content.style.strokeColor = "gray";
  content.padding = { left: 5, right: 10, top: 5, bottom: 5 };
  let image = new ImageElement();
  image.width = 50;
  image.height = 50;
  image.style.strokeColor = "none";
  image.source = (obj.data).ImageUrl;
  image.id = obj.id + "_pic";
  let innerStack = new StackPanel();
  innerStack.style.strokeColor = "none";
  innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
  innerStack.id = obj.id + "_innerstack";

  let text = new TextElement();
  text.content = (obj.data).Name;
  text.style.color = "black";
  text.style.bold = true;
  text.style.strokeColor = "none";
  text.style.fill = "none";
  text.id = obj.id + "_text1";

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