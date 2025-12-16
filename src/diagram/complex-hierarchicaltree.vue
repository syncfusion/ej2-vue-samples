<template>
<div class="control-section diagram-complex-hierarchical">
  <div class="col-lg-8 control-section">
      <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :snapSettings='snapSettings' :tool='tool' :layout='layout' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :dataSourceSettings='dataSourceSettings'></ejs-diagram>
  </div>
  <div class="col-lg-4 property-section">
      <div class="property-panel-header">
          Layout Settings
      </div>
      <div class="row" id="appearance" style="padding-top: 10px" ref="appearance">
          <div class="row row-header">
            Orientation
          </div>
          <div class="row" style="padding-top: 8px">
          <div v-for="(pattern, index) in patterns" :key="index" :style="{ paddingTop: '8px' }">
          <div
            v-for="image in pattern"
            :key="image.id"
            class="image-pattern-style"
            :class="{ 'e-selected-style': image.selected }"
            :id="image.id"
            :style="{ backgroundImage: `url(${image.url})`, margin: image.margin }"
            @click="handlePatternClick(image.id)">
          </div>
        </div>
        </div> 
      </div>
      <div class="row" style="padding-top: 10px">
          <div class="row row-header">
            Behavior 
          </div>
          <div class="row" style="padding-top: 8px">
            <div v-for="(item, index) in behaviourItems" :key="index" class="row" :style="{ paddingTop: '8px' }">
                <div class="col-xs-5" :style="{ display: 'table', height: '35px', paddingLeft: '0px' }">
                  <div :style="{ display: 'table-cell', verticalAlign: 'middle' }">{{ item.label }}</div>
                </div>
                <div class="col-xs-7">
                  <ejs-numerictextbox
                    :id="item.id"
                    :value="item.value"
                    :step="1"
                    :min="item.min"
                    :max="item.max"
                    format="##.##"
                    @change="updateLayoutProperty(item.id, $event.value)"
                  ></ejs-numerictextbox>
                </div>
          </div>  
          </div>
          <div class="row" style="padding-top: 10px">
        <div class="row" style="padding-top: 8px">
          <ejs-checkbox id="checked" :checked=true :label='label' :change='change'></ejs-checkbox>
        </div>
    </div>
      </div>
  </div>

  <div id="action-description">
      <p>
          This sample demonstrates a complex hierarchical template that is built from an external data source using complex hierarchical tree algorithm.
      </p>
  </div>
  <div id="description">
      <p>
          In this example, you can see how to generate a complex hierarchical tree from external data sources. You can also customize spacing between the objects in the tree. You can use the
          <code>horizontalSpacing</code> and <code>verticalSpacing</code> properties of <code>layout</code> to customize the space between the objects in the tree. You can use the <code>layoutOrientation</code> property of
          <code>layout</code> to change the orientation of the tree.
      </p>
      <p>
          To change the orientation of the tree, click the templates in the property panel.
      </p>

      <p style="font-weight: 500">Injecting Module</p>
      <p>
          Diagram component's features are segregated into individual feature-wise modules. To generate diagrams from an external data source,
          we need to Inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method. To automatically arrange the objects in a hierarchical structure, we need to Inject <code>ComplexHierarchicalTree</code> module using
          <code>provide: { diagram: [ComplexHierarchicalTree] }</code> method.  
      </p>
      <br>
  </div>
</div>
</template>
<style scoped>
/* Css for images in property panel  */
.diagram-complex-hierarchical .image-pattern-style {
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: calc((100% - 18px) / 2);
  cursor: pointer;
  border: 1px solid #d5d5d5;
  background-position: center;
  float: left;
}

.diagram-complex-hierarchical .row {
  margin-left: 0px;
  margin-right: 0px;
}

.diagram-complex-hierarchical .row-header {
  font-size: 15px;
  font-weight: 500;
}

/* Selection indicator */
.diagram-complex-hierarchical .e-selected-style {
  border-color: #6c6c6c;
  border-width: 2px;
}

.diagram-complex-hierarchical .col-xs-6 {
  padding-left: 0px;
  padding-right: 0px;
}
</style>

<script>
import {
  DiagramComponent,
  Diagram,
  DataBinding,
  DiagramTools,ConnectionPointOrigin,
  ComplexHierarchicalTree,LineDistribution,
  LayoutOrientation
} from "@syncfusion/ej2-vue-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import { ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import {
  NumericTextBoxComponent,
  ChangeEventArgs as NumericChangeEventArgs
} from "@syncfusion/ej2-vue-inputs";
import { multiParentData } from "./diagram-data";

let diagramInstance;

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-checkbox': CheckBoxComponent
  },
  data: function() {
    return {
      width: "100%",
      height: 580,
      //Configrues hierarchical tree layout
      layout: {
        type: "ComplexHierarchicalTree",
        connectionPointOrigin: ConnectionPointOrigin.DifferentPoint,
        horizontalSpacing: 40,
        verticalSpacing: 40,
        orientation: "TopToBottom",
        margin: { left: 10, right: 0, top: 50, bottom: 0 }
      },
      getNodeDefaults: this.getNodeDefaults,
      getConnectorDefaults: this.getConnectorDefaults,
      change: this.onCheckBoxChange,
      label: "Prevent Connector Overlapping",
      //Configures data source
      dataSourceSettings: {
        id: "Name",
        parentId: "ReportingPerson",
        dataSource: new DataManager(multiParentData),
        //binds the external data with node
        doBinding: this.doBinding,
      },
      //Disables all interactions except zoom/pan
      tool: DiagramTools.ZoomPan,
      snapSettings: { constraints: 0 },

      behaviourItems: [
        { id: 'marginLeft', label: 'Margin X', value: 10, min: 10, max: 120 },
        { id: 'marginTop', label: 'Margin Y', value: 50, min: 10, max: 120 },
        { id: 'horizontalSpacing', label: 'Horizontal Spacing', value: 40, min: 20, max: 60 },
        { id: 'verticalSpacing', label: 'Vertical Spacing', value: 40, min: 20, max: 60 },
      ],
      patterns: [
        [
          { id: "topToBottom", url: "./src/diagram/Images/common-orientation/toptobottom.png", margin: "0 3px 0 0", selected: true },
          { id: "bottomToTop", url: "./src/diagram/Images/common-orientation/bottomtotop.png", margin: "0 3px" }
        ],
        [
        { id: "leftToRight", url: "./src/diagram/Images/common-orientation/lefttoright.png", margin: "0 3px 0 0" },
        { id: "rightToLeft", url: "./src/diagram/Images/common-orientation/righttoleft.png", margin: "0 3px" }
        ]
      ]
    };
  },
  provide: {
    diagram: [DataBinding, ComplexHierarchicalTree, LineDistribution]
  },

  methods: {
    getNodeDefaults(node) {
      node.width = 40;
      node.height = 40;
      node.shape = { type: "Basic", shape: "Rectangle", cornerRadius: 7 };
    },
    getConnectorDefaults(connector) {
      connector.type = "Orthogonal";
      connector.cornerRadius = 7;
      connector.targetDecorator.height = 7;
      connector.targetDecorator.width = 7;
      connector.style.strokeColor = "#6d6d6d";
    },
    doBinding(nodeModel, data, diagram) {
      nodeModel.style = {
        fill: data.fillColor,
        strokeWidth: 1,
        strokeColor: data.border,
      };
    },
    onCheckBoxChange(args) {
      diagramInstance.layout.connectionPointOrigin = args.checked? ConnectionPointOrigin.DifferentPoint : ConnectionPointOrigin.SamePoint;
    },
      updateLayoutProperty(property, value) {
      switch (property) {
        case "marginLeft":
            diagramInstance.layout.margin.left = value;
            break;
        case "marginTop":
            diagramInstance.layout.verticalAlignment = 'Top';
            diagramInstance.layout.margin.top = value;
            break;
        case "horizontalSpacing":
            diagramInstance.layout.horizontalSpacing = value;
            break;
        case "verticalSpacing":
            diagramInstance.layout.verticalSpacing = value;
            break;
    }
    diagramInstance.dataBind();  
    },
    handlePatternClick(id) {
      // Deselect any currently selected element
      const selectedElement = document.getElementsByClassName("e-selected-style");
      if (selectedElement.length) {
        selectedElement[0].classList.remove("e-selected-style");
      }
      // Update the diagram layout orientation
      const orientation = id.charAt(0).toUpperCase() + id.slice(1);
      diagramInstance.layout.orientation = orientation;
      diagramInstance.dataBind();
      diagramInstance.doLayout();
      // Add the selected style to the clicked element
      document.getElementById(id).classList.add("e-selected-style");
    }
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage();
  }
}



</script>