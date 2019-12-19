<template>
<div>
<div class="col-md-8 control-section">
        <div class="content-wrapper">
             <ejs-circulargauge id='customizationgauge1' ref='customizationgauge1' style="display:block" :load='load' :centerY='centerY'>
                        <e-axes>
                            <e-axis :ranges='ranges' :radius='radius' startAngle=300 endAngle=60 :annotations='annotations' :majorTicks='majorTicks' :minorTicks='minorTicks' :lineStyle='lineStyle' :labelStyle='labelStyle' minimum=999 maximum=2000 :pointers='pointers'></e-axis>
                    </e-axes>
            </ejs-circulargauge>
             <ejs-circulargauge id='customizationgauge2' style="display:none" ref='customizationgauge2' :load='load'>
                        <e-axes>
                            <e-axis :ranges='ranges2' :radius='radius2' startAngle=180 endAngle=180 :annotations='annotations2' :majorTicks='majorTicks2' :minorTicks='minorTicks2' :lineStyle='lineStyle2' :labelStyle='labelStyle2' minimum=0 maximum=100 :pointers='pointers2'></e-axis>
                    </e-axes>
            </ejs-circulargauge>
        </div>
    </div>

    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tr style="height: 50px">
                <td>
                    <img id='random' src="src/circular-gauge/images/gauge-one.png" alt="Customized gauge 1" style="margin-left:25px;margin-top:10px;" v-on:click="randomClick"/>
                    <div id="random_line" style="display:block;left: 0px;background: #ff4081;padding-top: 0px;height: 2px !important;width: 85px;margin: 2px 2px 2px 17px;"></div>
                </td>
                <td>
                    <img id='usage' src="src/circular-gauge/images/gauge-two.png" alt="Customized gauge 2" style="margin-left:25px;margin-top:10px;" v-on:click="usageClick" />
                    <div id="usage_line" style="display:none;left: 0px;background: #ff4081;padding-top: 0px;height: 2px !important;width: 85px;margin: 2px 2px 2px 17px;"></div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='currentPointerValue'>Current Value <span> &nbsp;&nbsp;&nbsp;1800</span> </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="curVal" id="currentValue" min="1000" max="2000" value="1800" v-on:pointermove="changeCurrentval" v-on:touchmove="changeCurrentval" v-on:change="changeCurrentval" />
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='rangebarColor'>RangeBar Color</div>
                </td>
                <td>
                    <div>
                    <ejs-dropdownlist id='barColor' ref="rangeBar" :dataSource='barColordata' index=0  :width=120 :change='changeBarcolor'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='range'>Range Color</div>
                </td>
                <td>
                    <div>
                    <ejs-dropdownlist id='rangeColor' ref="range" :dataSource='rangeColordata' index=0  :width=120 :change='changeRangecolor'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div id='pointColor'>Pointer Color</div>
                </td>
                <td>
                    <div>
                    <ejs-dropdownlist id='pointerColor' ref="pointer" :dataSource='pointerColordata' index=0  :width=120 :change='changePointercolor'></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample illustrates how to customize the gauge with pointers. 
        Options to change the color and type of the pointer are available in the property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to customize the gauge elements such as <code>pointers</code> and <code>range</code>.
        Here a needle and range bar are added to show the current value and its appearance
        can be customized by using options in property panel.
    </p>
    <p>
        More information on the range and pointer customization can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation"> documentation section</a>.
    </p>
</div>
</div>
</template>

<style>
    #control-container {
        padding: 0px !important;
    }
</style>
<script>
import Vue from 'vue';
import { CircularGaugePlugin,Annotations,CircularGauge } from "@syncfusion/ej2-vue-circulargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(CircularGaugePlugin);
Vue.use(DropDownListPlugin);
let isUsage = false;
export default Vue.extend({
data:function(){
return{
            centerY: '70%',
            annotations: [{
                content: '<div style="color:#666666;font-size:35px;">1800</div>',
                angle: 0,
                zIndex: '1',
                radius: '110%'
            }],
            lineStyle: { width: 0 },
            radius: '80%',
            labelStyle: { font: { size: '0px' } },
            majorTicks: { width: 0 },
            minorTicks: { height: 0 },
            ranges: [{
                start: 1000, end: 2000,
                radius: '90%',
                startWidth: 30, endWidth: 30,
                color: '#E0E0E0'
            }],
            pointers: [{
                type: 'RangeBar',
                value: 1800, radius: '90%',
                color: '#FFDD00', animation: { duration: 0 },
                pointerWidth: 30
            }, {
                radius: '90%', value: 1800,
                color: '#424242',
                animation: { duration: 0 },
                pointerWidth: 9,
                cap: { radius: 10, color: '#424242', border: { width: 0 } }
            }],
            annotations2: [{
                content: '<div style="color:#666666;font-size:35px;">50.5GB</div>',
                angle: 180, radius: '0%', zIndex: '1',
            }, {
                content: '<div style="color:#757575;font-size:15px;">Used</div>',
                angle: 180, radius: '25%', zIndex: '1',
                textStyle: {
                    fontFamily: 'Roboto',
                    color: '#9E9E9E',
                    fontStyle: 'Bold',
                    fontWeight: 'Regular',
                    size: '14px'
                }
            }],
            lineStyle2: { width: 0 },
            radius2: '80%',
            labelStyle2: { font: { size: '0px' } },
            majorTicks2: { width: 0 },
            minorTicks2: { height: 0 },
            ranges2: [{
                start: 0, end: 100,
                radius: '80%', startWidth: 30,
                endWidth: 30, color: '#E0E0E0'
            }],
            pointers2: [{
                type: 'RangeBar',
                value: 50.5, radius: '80%',
                color: '#FF2680', animation: { duration: 0 },
                pointerWidth: 30
            }],
            barColordata:['#FFDD00','#00bdae','#FF2680'],
            rangeColordata:['#E0E0E0','#7bb4eb','#ea7a57'],
            pointerColordata:['#424242','#6f6fe2','#9e480e']
}
},
provide:{
    circulargauge: [Annotations]
},
mounted:function(){
    let selectedTheme = location.hash.split('/')[1]; 
    let color;
    if (selectedTheme === 'bootstrap') {
        color = '#a16ee5';
    } else if (selectedTheme === 'fabric') {
        color = '#1783FF';
    } else {
        color = '#ff4081';
    }
    let exisLine = document.getElementById('usage_line');
    let currentLine = document.getElementById('random_line');
    exisLine.style.background = color; 
    currentLine.style.background = color;
},
methods:{
    /* custom code start */
     load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /* custom code end */
    // Code for Property Panel
    usageClick:function(){
        let random = this.$refs.customizationgauge1;
        document.getElementById('customizationgauge1').style.display="none";
        let usage = this.$refs.customizationgauge2;
        let container2 = document.getElementById('customizationgauge2').style.display="block";
        let gauge = usage; 
        let isUsage = true;
        let element = document.getElementById('currentValue');
        element.min = '0.5'; element.max = '100';
        element.value = usage.ej2Instances.axes[0].pointers[0].value.toString();
        document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;'
            + usage.ej2Instances.axes[0].pointers[0].value + '</span>';
        barColor.value = usage.ej2Instances.axes[0].pointers[0].color; rangeColor.value = usage.ej2Instances.axes[0].ranges[0].color;
        // let pointerColor = document.getElementById('pointerColor');
        this.$refs.pointer.enabled = false;
        let pointElement = document.getElementById('pointColor');
        pointElement.className = 'e-disabled';
        let currentElement = document.getElementById('usage');
        let existElement = document.getElementById('random');
        let currentLine = document.getElementById('usage_line');
        let exisLine = document.getElementById('random_line');
        currentLine.style.display = 'block';
        exisLine.style.display = 'none';
    },
     randomClick:function(){
        let usage = this.$refs.customizationgauge2;
        document.getElementById('customizationgauge2').style.display="none";
        let random = this.$refs.customizationgauge1;
        let container1 = document.getElementById('customizationgauge1').style.display="block";
        let gauge = random; 
        let isUsage = false;
        let currentElement = document.getElementById('random');
        let existElement = document.getElementById('usage');
        let exisLine = document.getElementById('usage_line');
        let currentLine = document.getElementById('random_line');
        currentLine.style.display = 'block'; exisLine.style.display = 'none';
        let element = document.getElementById('currentValue');
        let pointElement = document.getElementById('pointColor');
        pointElement.className = 'e-enabled'; 
        // let pointerColor = document.getElementById('pointerColor');
        this.$refs.pointer.enabled = true;
        element.min = '1000'; element.max = '2000';
        element.value = random.ej2Instances.axes[0].pointers[0].value.toString();
        document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' +
            random.ej2Instances.axes[0].pointers[0].value + '</span>';
        barColor.value = random.ej2Instances.axes[0].pointers[0].color;
        rangeColor.value = random.ej2Instances.axes[0].ranges[0].color;
        pointerColor.value = random.ej2Instances.axes[0].pointers[1].color;
    },
    changeCurrentval:function(){
         if(document.getElementById('customizationgauge1').style.display=="block"){
        //    let gauge = document.getElementById('customizationgauge1');
              let value =  document.getElementById('currentValue').value;
            if (isUsage) {
                this.$refs.customizationgauge1.ej2Instances.setPointerValue(0, 0, value);
            } else {
                this.$refs.customizationgauge1.ej2Instances.setPointerValue(0, 0, value);
                this.$refs.customizationgauge1.ej2Instances.setPointerValue(0, 1, value);
            }
            this.$refs.customizationgauge1.ej2Instances.setAnnotationValue(0, 0, '<div style="color:#666666;font-size:35px;">' + value + (isUsage ? 'GB' : '') + '</div>');
            document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' + value + '</span>';
         }         
         else{
            //  let gauge = document.getElementById('customizationgauge2');
            let isUsage = true;
              let value = document.getElementById('currentValue').value;
            if (isUsage) {
                this.$refs.customizationgauge2.ej2Instances.setPointerValue(0, 0, value);
            } else {
                this.$refs.customizationgauge2.ej2Instances.setPointerValue(0, 0, value);
                this.$refs.customizationgauge2.ej2Instances.setPointerValue(0, 1, value);
            }
            this.$refs.customizationgauge2.ej2Instances.setAnnotationValue(0, 0, '<div style="color:#666666;font-size:35px;">' + value + (isUsage ? 'GB' : '') + '</div>');
            document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' + value + '</span>';
         }
         
    },
    changeBarcolor:function(args){
           if(document.getElementById('customizationgauge1').style.display=="block"){
            // let gauge = document.getElementById('customizationgauge1');          
            this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[0].color = barColor.value.toString();
            this.$refs.customizationgauge1.ej2Instances.refresh();
           }
           else{
        //    let gauge = document.getElementById('customizationgauge2');            
            this.$refs.customizationgauge2.ej2Instances.axes[0].pointers[0].color = barColor.value.toString();
            this.$refs.customizationgauge2.ej2Instances.refresh();
           }
    },
    changeRangecolor:function(args){
        if(document.getElementById('customizationgauge1').style.display=="block"){
        // let gauge = document.getElementById('customizationgauge1');  
        this.$refs.customizationgauge1.ej2Instances.axes[0].ranges[0].color = rangeColor.value.toString();
        this.$refs.customizationgauge1.ej2Instances.refresh();
        }else{
        // let gauge = document.getElementById('customizationgauge2');   
        this.$refs.customizationgauge2.ej2Instances.axes[0].ranges[0].color = rangeColor.value.toString();
        this.$refs.customizationgauge2.ej2Instances.refresh();
        }
    },
    changePointercolor:function(args){
        if(document.getElementById('customizationgauge1').style.display=="block"){
        // let gauge = document.getElementById('customizationgauge1');    
         let color = pointerColor.value.toString();
            if (!isUsage) {
                this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[1].color = color;
                this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[1].cap.border.color = color;
                this.$refs.customizationgauge1.ej2Instances.axes[0].pointers[1].cap.color = color;
            }
            this.$refs.customizationgauge1.ej2Instances.refresh();
        }
   }   
}
})
</script>
