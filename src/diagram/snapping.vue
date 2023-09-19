<template>
<div>
<div class="control-section">
    <div class="db-diagram-container">
    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults' :selectionChange="selectionChange" :snapSettings='snapSettings' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults' :rulerSettings='rulerSettings' :getCustomTool='getCustomTool' :selectedItems='selectedItems' :drawingObject = 'drawingObject'
        ></ejs-diagram>
    </div>
    <div id="properties_Container">
        <span class="property-panel-header">
            Properties
        </span>
        <div class="db-prop-row">
            <div class="db-prop-text-style">
                <span class="db-prop-text-style text-content">Snapping Interval </span>
                <div style="float: right;margin-right: 10px;">
                   <ejs-numerictextbox id = "snappingInterval" :value="20" format="n0" :min="1" :step="1" :width="150" :change="snappingInterval" ></ejs-numerictextbox>
                </div>
            </div>
            <div class="db-prop-text-style">
                <span class="db-prop-text-style text-content">Snapping Angle</span>
                <div style="float: right;margin-right: 10px;">
                   <ejs-numerictextbox :value="5" format="n0" :min="1" :step="1" :width="150" :change="snappingAngle"></ejs-numerictextbox>
                </div>
            </div>
            <div class="db-prop-text-style">
                <span class="db-prop-text-style text-content">Snapping Line Color</span>
                <div class="db-text-input" style="float: right;margin-right: 10px;width:50%">
                 <ejs-colorpicker id="color-picker" value="#07EDE1" width="100%" type = "color" mode="Palette" :change="colorChange"></ejs-colorpicker>
                </div>
            </div>
            <div class="db-prop-text-style">
                 <ejs-checkbox id="showgridline" label= 'Show Gridline' :checked="true" :change="showGridline"></ejs-checkbox>
            </div>
            <div class="db-prop-text-style" style="margin-top: 7px!important;">
                   <ejs-checkbox id="snaptoobject" label= 'Snapping to Objects' :checked="true" :change="snappingToobjects"></ejs-checkbox>
            </div>
            <div class="db-prop-text-style">
                <span class="db-prop-text-style text-content" style="font-weight: bold;">Snapping To Lines</span>
            </div>
            <div class="row radio-text-style" style="margin-left: 7px;">
                <ejs-radiobutton label="Snap To Gridlines" name="snapping" :checked="true" value="Snap To Gridlines" :change="snapToLines"></ejs-radiobutton>
            </div>
            <div class="row radio-text-style" style="margin-left: 7px;">
                <ejs-radiobutton label="Snap To Horizontal Gridlines" name="snapping" :checked="false" value="Snap To Horizontal Gridlines" :change="snapToLines"></ejs-radiobutton>
            </div>
            <div class="row radio-text-style" style="margin-left: 7px;">
                <ejs-radiobutton label="Snap To Vertical Gridlines" name="snapping" :checked="false" value="Snap To Vertical Gridlines"  :change="snapToLines"></ejs-radiobutton>
            </div>
            <div class="row radio-text-style" style="margin-left: 7px;">
                <ejs-radiobutton label="None" name="snapping" :checked="false" value="None" :change="snapToLines"></ejs-radiobutton>
            </div>

        </div>
    </div>
</div>
<div id="action-description">
 <p>
    This sample shows how diagram objects snap to the nearest intersection of gridlines or objects while being dragged or resized.
    </p>
</div>
<div id="description">
   <p>The <code>SnapInterval</code> property in snapSettings allows you to specify the interval at which objects should snap to a grid or other objects in the control.</p>
    <p>The <code>snapAngle</code> property in snapSettings allows you to define the snap angle by which the object needs to be rotated.</p>
    <p>The <code>snapLineColor</code> property is used to set the color of the snap lines that appear when objects snap to a grid or other objects in the control.</p>
    <p>The <code>constraints</code> property controls the visibility of gridlines and enables or disables snapping.</p>
</div>
</div>
</template>
<style scoped>
   .header_text{
        color: rgb(9, 9, 9);
        font-weight: bold;
        font-size: 20px;
        font-family: 'Calibri';
        margin-left: 5px;
        margin-top: 5px;
    }
    .db-diagram-container {
    width:calc(100% - 300px);
    height: 100%;
    float: left;
    }
    .db-prop-row {
    margin-top: 6px;
    }
    .db-col-left {
    padding-left: 10px;
    padding-right: 3px;
    }

    .db-prop-text-style {
    font-size: 13px;
    font-weight: normal;
    font-family: 'Calibri';
    margin-top: 25px;
    }
    .radio-text-style{
    font-size: 13px;
    font-weight: normal;
    font-family: 'Calibri';
    margin-top: 10px;
    }
    .text-content{
        margin-left: 10px;
    }
    .db-check-input{
        float: right;
    }
    .db-text-input{
        height: 25px!important;
    }
    .e-checkbox-wrapper .e-label{
        font-size: 12px!important;
    }
    .e-radio+label .e-label{
        font-size: 12px!important;
    }
    #properties_Container{
    /* background: #e3e3e3; */
    width: 300px;
    float: right;
    /* margin-left: 20px; */
    }
    .e-colorpicker-wrapper .e-split-btn-wrapper .e-split-colorpicker.e-split-btn .e-selected-color .e-split-preview{
        width: 100px!important;
        margin-left: -40px!important;
    }
    .e-colorpicker-wrapper .e-split-btn-wrapper .e-split-colorpicker.e-split-btn{
        width: 110px!important;
    }
</style>
<script>
import {
  Diagram,
  DiagramComponent,
  Node,
  ShapeAnnotationModel,
  NodeModel,
  ConnectorModel,
  PortVisibility,
  ConnectorConstraints,
  SnapConstraints,
  UserHandleModel,
  PortConstraints,
    SelectorConstraints,
    ConnectorEditing,
    DiagramContextMenu,
    Inject,
    Snapping,
    UndoRedo,
    IRotationEventArgs,
    UserHandleEventsArgs,
    ISelectionChangeEventArgs,
    Gridlines,
  UmlClassifierShapeModel
} from "@syncfusion/ej2-vue-diagrams";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { ColorPickerComponent, NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";

let diagramInstance;
let drawingNode;
let nodes = [
     {
            id:'node_1',width:100,height:100,offsetX:350,offsetY:250,
            ports:[
                {id:'port1',offset:{x:0.5,y:0.5},visibility: PortVisibility.Visible,
                style:{fill:'black'},
                constraints:PortConstraints.Default|PortConstraints.Draw
            }],
            annotations:[{id:'annot1',content:'Shape 1', offset:{x:0.5,y:1.2},style:{bold:true}}]
        },
        {
            id:'node_2',width:100,height:100,offsetX:600,offsetY:250,
            ports:[
                {id:'port11', offset:{x:0.5,y:0.5},visibility: PortVisibility.Visible,style:{fill:'black'},
                constraints:PortConstraints.Default|PortConstraints.Draw
            },{
                id:'port2',offset:{x:0,y:0.5},visibility:PortVisibility.Visible,
                style:{fill:'black'},
                constraints:PortConstraints.Default|PortConstraints.Draw,
                height:100,width:7
            }],
            annotations:[{id:'annot1',content:'Shape 2',offset:{x:0.5,y:1.2},style:{bold:true}}]
    
        },
        {
            id:'node_3',width:100,height:100,offsetX:500,offsetY:400,
            annotations:[{id:'annot1',content:'Shape 3', offset:{x:0.5,y:1.2}, style:{bold:true}}]
    
        },
  ];

let connectors = [
    {
        id:'connector_1',sourceID:'node_1',targetID:'node_3',type:'Orthogonal',
    }
  ];
   let handles = [
       {
           name: 'Clone', pathData: 'M0,2.4879999 L0.986,2.4879999 0.986,9.0139999 6.9950027,9.0139999 6.9950027,10 0.986,10 C0.70400238,10 0.47000122,9.9060001 0.28100207,9.7180004 0.09400177,9.5300007 0,9.2959995 0,9.0139999 z M3.0050011,0 L9.0140038,0 C9.2960014,0 9.5300026,0.093999863 9.7190018,0.28199956 9.906002,0.47000027 10,0.70399952 10,0.986 L10,6.9949989 C10,7.2770004 9.906002,7.5160007 9.7190018,7.7110004 9.5300026,7.9069996 9.2960014,8.0049992 9.0140038,8.0049992 L3.0050011,8.0049992 C2.7070007,8.0049992 2.4650002,7.9069996 2.2770004,7.7110004 2.0890007,7.5160007 1.9950027,7.2770004 1.9950027,6.9949989 L1.9950027,0.986 C1.9950027,0.70399952 2.0890007,0.47000027 2.2770004,0.28199956 2.4650002,0.093999863 2.7070007,0 3.0050011,0 z',tooltip:{content:'Clone'},
           visible: true, offset: 1, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
       },
       {
           name: 'Delete', pathData: 'M0.54700077,2.2130003 L7.2129992,2.2130003 7.2129992,8.8800011 C7.2129992,9.1920013 7.1049975,9.4570007 6.8879985,9.6739998 6.6709994,9.8910007 6.406,10 6.0939997,10 L1.6659999,10 C1.3539997,10 1.0890004,9.8910007 0.87200136,9.6739998 0.65500242,9.4570007 0.54700071,9.1920013 0.54700077,8.8800011 z M2.4999992,0 L5.2600006,0 5.8329986,0.54600048 7.7599996,0.54600048 7.7599996,1.6660004 0,1.6660004 0,0.54600048 1.9270014,0.54600048 z',tooltip:{content:'Delete'},
           visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
       },
       {
           name: 'Draw', pathData: 'M3.9730001,0 L8.9730001,5.0000007 3.9730001,10.000001 3.9730001,7.0090005 0,7.0090005 0,2.9910006 3.9730001,2.9910006 z',tooltip:{content:'Draw'},
           visible: true, offset: 0.5, side: 'Right', margin: { top: 0, bottom: 0, left: 0, right: 0 }
       },
    ];

export default {
  components: {
    'ejs-radiobutton': RadioButtonComponent,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-diagram': DiagramComponent,
    'ejs-numerictextbox': NumericTextBoxComponent
  },  
  data: function() {
    return {
      width: "95%",
      height: "645px",
      nodes: nodes,
      connectors: connectors,
      selectedItems : {
        userHandles : handles
      },
      drawingObject : { type : 'Orthogonal'},
      getCustomTool : getTool,
      snapSettings: {
               snapAngle : 5
            },
      getNodeDefaults: (obj) => {
        obj.style = {fill: "orange", strokeColor:'orange'};
        return obj;
      },
      getConnectorDefaults: (obj) => {
        obj.constraints = ConnectorConstraints.Default| ConnectorConstraints.DragSegmentThumb;
        return obj;
      },
      selectionChange :(args)=>{
         var diagram = document.getElementById("diagram").ej2_instances[0];
           if(args.state === 'Changed'){
            var selectedItems = diagram.selectedItems.nodes;
            selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
            if(selectedItems.length > 0){
                if(args.newValue.length > 0 && args.newValue[0].sourceID == undefined && args.newValue[0].targetID == undefined){
                    diagram.selectedItems = { constraints: SelectorConstraints.All|SelectorConstraints.UserHandle, userHandles: handles };
                    if(diagram.selectedItems.nodes.length>0){
                        drawingNode = diagram.selectedItems.nodes[diagram.selectedItems.nodes.length-1];
                    }
                }
                else
                {
                 diagram.selectedItems = { constraints: SelectorConstraints.All&~SelectorConstraints.UserHandle };
                }
            }
        }
    },
      snappingInterval : (args) =>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.snapSettings.horizontalGridlines.snapIntervals[0] = args.value;
        diagram.snapSettings.verticalGridlines.snapIntervals[0] = args.value;
        diagram.dataBind();
      },
      snappingAngle : (args) =>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.snapSettings.snapAngle = args.value;
        diagram.dataBind();
      },
      colorChange : (args)=>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.snapSettings.snapLineColor = args.value;
        diagram.dataBind();
      },
      showGridline : (args)=>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
        diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ SnapConstraints.ShowLines;
        diagram.dataBind();
        scale();
      },
      snappingToobjects : (args)=>{
        var diagram = document.getElementById("diagram").ej2_instances[0];
       diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ SnapConstraints.SnapToObject;
       diagram.dataBind();
      },
     snapToLines : (args) =>{
         var diagram = document.getElementById("diagram").ej2_instances[0];
         var showGridlines = document.getElementById("showgridline").ej2_instances[0];
         var snapToObject = document.getElementById("snaptoobject").ej2_instances[0];
        if(showGridlines.checked && snapToObject.checked){
            diagram.snapSettings.constraints = SnapConstraints.All;
        }
       else if(showGridlines.checked && !snapToObject.checked){
        diagram.snapSettings.constraints = SnapConstraints.All &~SnapConstraints.SnapToObject;
       }
       else if(!showGridlines.checked && snapToObject.checked){
        diagram.snapSettings.constraints = SnapConstraints.All &~SnapConstraints.ShowLines;
       }
       else if(!showGridlines.checked && !snapToObject.checked){
        diagram.snapSettings.constraints = SnapConstraints.All &~(SnapConstraints.ShowLines|SnapConstraints.SnapToObject);
       }
        switch(args.value){
            case 'Snap To Gridlines':
                diagram.snapSettings.constraints =  SnapConstraints.All| SnapConstraints.SnapToLines;
                if( !showGridlines.checked && !snapToObject.checked ) {
                   diagram.snapSettings.constraints = SnapConstraints.All &~ (SnapConstraints.ShowLines|SnapConstraints.SnapToObject);
                }
                else if( !snapToObject.checked && showGridlines.checked ){
                    diagram.snapSettings.constraints = SnapConstraints.All &~ (SnapConstraints.SnapToObject);
                }
                else if(snapToObject.checked && !showGridlines.checked) {
                    diagram.snapSettings.constraints = SnapConstraints.All &~ (SnapConstraints.ShowLines);
                }
            break;
            case 'Snap To Horizontal Gridlines':
                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ SnapConstraints.SnapToVerticalLines;
            break;
            case 'Snap To Vertical Gridlines':
                diagram.snapSettings.constraints =  diagram.snapSettings.constraints ^ SnapConstraints.SnapToHorizontalLines;
            break;
            case 'None':
                diagram.snapSettings.constraints = SnapConstraints.All &~ (SnapConstraints.SnapToHorizontalLines|SnapConstraints.SnapToVerticalLines|SnapConstraints.SnapToLines);
                if(!showGridlines.checked && !snapToObject.checked){
                    diagram.snapSettings.constraints = SnapConstraints.All &~ (SnapConstraints.ShowLines|SnapConstraints.SnapToObject|SnapConstraints.SnapToHorizontalLines|SnapConstraints.SnapToVerticalLines|SnapConstraints.SnapToLines);
                 }
                 else if(showGridlines.checked && !snapToObject.checked){
                     diagram.snapSettings.constraints =  SnapConstraints.All &~ (SnapConstraints.SnapToObject|SnapConstraints.SnapToHorizontalLines|SnapConstraints.SnapToVerticalLines|SnapConstraints.SnapToLines);
                 }
                 else if(!showGridlines.checked && snapToObject.checked){
                     diagram.snapSettings.constraints =  SnapConstraints.All &~ (SnapConstraints.ShowLines|SnapConstraints.SnapToHorizontalLines|SnapConstraints.SnapToVerticalLines|SnapConstraints.SnapToLines);
                 }
            break;
        }
        diagram.dataBind();
        scale();
    },
      rulerSettings : {
        showRulers : true
      }
    }
  },
  provide:{
    diagram: [DiagramContextMenu, UndoRedo, Snapping, ConnectorEditing]
  },
  mounted: function() {
       let diagram = this.$refs.diagramObj.ej2Instances;
       diagram.fitToPage();
    },
}

function scale(){
    var diagram = document.getElementById("diagram").ej2_instances[0];
     var getsnap = document.getElementById('snappingInterval');
    getsnap = (getsnap).ej2_instances[0];
     diagram.snapSettings.horizontalGridlines.snapIntervals[0] = (getsnap).value;
     diagram.snapSettings.verticalGridlines.snapIntervals[0] = (getsnap).value;
     diagram.dataBind();
}
function getTool(action){
     var diagram = document.getElementById("diagram").ej2_instances[0];
    if (action == "Delete") {
        diagram.remove();
    }
    else if (action == "Clone"){
        diagram.paste(diagram.selectedItems.selectedObjects);
    }
   else if (action == "Draw"){
     (diagram.drawingObject).type = (diagram.drawingObject).type?(diagram.drawingObject).type: 'Orthogonal';
     (diagram.drawingObject).sourceID = diagram.selectedItems.nodes[0].id;
     diagram.dataBind();
    }
}

</script>