<template>
<div>
<div class="col-lg-8 control-section">
    <div id="spark-container" class="row">
        <div class="cols-sample-area" align="center">
            <p>
                <font size=4px> Worldwide car sales by brand - 2017</font>
            </p>
            <table style="width:100%;">
                <tr>
                <td align="center" style="width: 30%;">Sales Percentage</td>
                    <td style="width: 30%;">
                        <ejs-sparkline ref="percentage" id='percentage' :load='load' style="width:200px; height:200px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :axisSettings='axisSettings' :markerSettings='markerSettings' xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr>
                  <td align="center" style="width: 30%;">Sales Count</td>
                    <td style="width: 30%;">
                        <ejs-sparkline ref="sales" id='sales' :load='load' style="width:200px; height:200px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :dataSource='dataSource2' :tooltipSettings='tooltipSettings2' :axisSettings='axisSettings2' :markerSettings='markerSettings2' xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div style="float: right; margin-right: 10px;">Source:
    <a href=" http://carsalesbase.com/global-car-sales-2017" target="_blank">carsalesbase.com</a>
</div>
</div>

<div class="col-lg-4 property-section">
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>
    <table id="property" style="width:100%" title="Properties">
        <tbody>
            <tr style="height: 30px">
                <td class="property-text" style="width: 50%">
                    Sparkline
                </td>
                <td style="width: 50%">
                    <ejs-dropdownlist ref="spark" id='spark' style="width: 100%;" :dataSource='sparkdata' :fields='sparkfields' value='salespercentage' index=0  :change='changeSpark'></ejs-dropdownlist>        
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Special Points
                </td>
                <td style="width: 50%">
                    <table>
                        <tr>
                            <td>All</td>
                            <td>
                                <ejs-checkbox ref="all" checked="true" id="all" :change='changeAll'></ejs-checkbox>
                            </td>
                            <td style="padding: 5px;">Negative</td>
                            <td>
                                <ejs-checkbox ref="negative" :disabled='disabled' id="negative" :change='changeNegative'></ejs-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 5px;">First</td>
                            <td>
                                <ejs-checkbox ref="first" :disabled='disabled' id="first" :change='changeNegative'></ejs-checkbox>
                            </td>
                            <td style="padding: 5px;">Last</td>
                            <td>
                                 <ejs-checkbox ref="last" :disabled='disabled' id="last" :change='changeNegative'></ejs-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 5px;">High</td>
                            <td>
                                 <ejs-checkbox ref="high" :disabled='disabled' id="high" :change='changeNegative'></ejs-checkbox>
                            </td>
                           <td style="padding: 5px;">Low</td>
                            <td>
                                 <ejs-checkbox ref="low" :disabled='disabled' id="low" :change='changeNegative'></ejs-checkbox>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Marker
                </td>
                <td style="width: 50%">
                    <ejs-checkbox id="marker" ref="marker" name="marker" :change='changeMarker'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Data Label
                </td>
                <td style="width: 50%">
                    <ejs-checkbox  id="datalabel" ref="datalabel" name="datalabel" :change='changeDatalabel'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Enable RTL
                </td>
                <td style="width: 50%">
                    <ejs-checkbox id="enableRTL" name="enableRTL" ref="rtl" :change='changeEnableRtl'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Tooltip
                </td>
                <td style="width: 50%">
                    <ejs-checkbox id="tooltip" name="tooltip" ref="tooltip" :change='changeTooltip'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Track Line
                </td>
                <td style="width: 50%">
                    <ejs-checkbox name="trackline" id="trackline" ref="trackline" :change='changeTrackline'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Axis Line
                </td>
                <td style="width: 50%">
                    <ejs-checkbox id="axis1" name="axis" ref="axisline" :change='changeAxis'></ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td id='axisval'>
                    Axis Value<span>&nbsp;&nbsp;&nbsp;0</span>
                </td>
                <td>
                    <div>
                        <ejs-slider id='axis' ref="axisval" :value='value' :type='rangetype' :change='changeAxisrange' max=100 min=0 ></ejs-slider>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div id="action-description">
    <p>
        This sample depicts the various customization options available in sparklines.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see various customization options available in sparklines. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over the data points or tap on a data point in touch enabled devices.
    </p>
</div>
</div>
</template>
<style>
   .sparkinput {
        opacity: 1 !important;
        position: relative !important;
    }
    .property-text {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
        font-size: 13px !important;
        font-weight: 400 !important;
    }
    #axis > * {
        padding: 0px !important;
    }
    label{
        height: 32px !important;
    }
</style>
<script>
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { data, data2 } from "./customization";
Vue.use(SparklinePlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(SliderPlugin);
export default Vue.extend({
data:function(){
return{
        height: '200px',
        width: '180px',
        lineWidth: 1,
        type: 'Column',
        valueType: 'Category',
        dataSource: data,
        axisSettings: {
            lineSettings: {
                color: 'red',
                width: 2
            }
        },
        markerSettings: {
            fill: 'red',
            size: 5
        },
        tooltipSettings: {
            format: '${xval}: ${yval}',
            trackLineSettings: {
                color: 'red',
                width: 1
            }
        },
        dataSource2: data2,
        axisSettings2: {
            lineSettings: {
                color: 'red',
                width: 2
            }
        },
        markerSettings2: {
            fill: 'red',
            size: 5
        },
        tooltipSettings2: {
            format: '${xval}: ${yval}',
            trackLineSettings: {
                color: 'red',
                width: 1
            }
        },
    sparkdata:[
        { Id:'salespercentage', level:'Sales Percentage'},
        { Id:'salescount', level:'Sales Count'}],
    sparkfields: { text: 'level', value: 'Id' },
    value:0,
    rangetype: 'MinRange',
    disabled:true
}
},
mounted(){
    this.start();    
},
methods:{
    /* custom code start */
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    // Code for Property Panel
    start: function(){
        if (this.$refs.spark.ej2Instances.value === 'salespercentage') {
            this.$refs.axisval.ej2Instances.min = 0;
            this.$refs.axisval.ej2Instances.max = 10;
        } else {
            this.$refs.axisval.ej2Instances.min = 0;
            this.$refs.axisval.ej2Instances.max = 5000000;
        }
    },
    changeSpark:function(args){
         let element1 = (document.getElementById('spark'));
        if (this.$refs.spark.ej2Instances.value === 'salespercentage') {
            this.$refs.axisval.ej2Instances.min = 0;
            this.$refs.axisval.ej2Instances.max = 10;
        } else {
            this.$refs.axisval.ej2Instances.min = 0;
            this.$refs.axisval.ej2Instances.max = 5000000;
        }
        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.markerSettings.visible.length) ||
            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.markerSettings.visible.length)) {
            this.$refs.marker.ej2Instances.checked = true;
        } else {
            this.$refs.marker.ej2Instances.checked = false;
        }
        document.getElementById('marker').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            if (boolean) {
                spark.markerSettings.visible = this.getVisible();
            } else {
                spark.markerSettings.visible = [];
            }
            spark.refresh();
        };
        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.dataLabelSettings.visible.length) ||
            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.dataLabelSettings.visible.length)) {
            this.$refs.datalabel.ej2Instances.checked = true;
        } else {
            this.$refs.datalabel.ej2Instances.checked = false;
        }
        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.enableRtl) ||
            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.enableRtl)) {
            this.$refs.rtl.ej2Instances.checked = true;
        } else {
            this.$refs.rtl.ej2Instances.checked = false;
        }
        document.getElementById('enableRTL').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            if (boolean) {
                spark.enableRtl = true;
            } else {
                spark.enableRtl = false;
            }
            spark.refresh();
        };
        
        let all = this.$refs.all.ej2Instances;
        let negative = this.$refs.negative.ej2Instances;
        let first = this.$refs.first.ej2Instances;
        let last = this.$refs.last.ej2Instances;
        let high = this.$refs.high.ej2Instances;
        let low = this.$refs.low.ej2Instances;
        let label = document.getElementById('datalabel');
        let marker = document.getElementById('marker');
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        if (!this.$refs.marker.ej2Instances.checked && !this.$refs.datalabel.ej2Instances.checked) {
            this.$refs.all.ej2Instances.checked = false;
            this.$refs.negative.ej2Instances.checked = false;
            this.$refs.first.ej2Instances.checked = false;
            this.$refs.last.ej2Instances.checked = false;
            this.$refs.high.ej2Instances.checked = false;
            this.$refs.low.ej2Instances.checked = false;
        }
        if (this.$refs.marker.ej2Instances.checked) {
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            this.$refs.all.ej2Instances.checked = spark.markerSettings.visible.indexOf('All') > -1;
            this.$refs.negative.ej2Instances.checked = spark.markerSettings.visible.indexOf('Negative') > -1;
            this.$refs.first.ej2Instances.checked = spark.markerSettings.visible.indexOf('Start') > -1;
            this.$refs.last.ej2Instances.checked = spark.markerSettings.visible.indexOf('End') > -1;
            this.$refs.high.ej2Instances.checked = spark.markerSettings.visible.indexOf('High') > -1;
            this.$refs.low.ej2Instances.checked = spark.markerSettings.visible.indexOf('Low') > -1;
        }
        if (this.$refs.datalabel.ej2Instances.checked) {
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            this.$refs.all.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('All') > -1;
            this.$refs.negative.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('Negative') > -1;
            this.$refs.first.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('Start') > -1;
            this.$refs.last.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('End') > -1;
            this.$refs.high.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('High') > -1;
            this.$refs.low.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('Low') > -1;
        }
        document.getElementById('datalabel').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            if (boolean) {
                spark.dataLabelSettings.visible = this.getVisible();
            } else {
                spark.dataLabelSettings.visible = [];
            }
            spark.refresh();
        };
        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.tooltipSettings.visible === true) ||
            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.tooltipSettings.visible === true)) {
            this.$refs.tooltip.ej2Instances.checked = true;
        } else {
            this.$refs.tooltip.ej2Instances.checked = false;
        }
        document.getElementById('tooltip').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            if (boolean) {
                spark.tooltipSettings.visible = true;
            } else {
                spark.tooltipSettings.visible = false;
            }
            spark.refresh();
        };
        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.tooltipSettings.trackLineSettings.visible === true) ||
            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.tooltipSettings.trackLineSettings.visible === true)) {
            this.$refs.trackline.ej2Instances.checked = true;
        } else {
            this.$refs.trackline.ej2Instances.checked = false;
        }
        document.getElementById('trackline').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            if (boolean) {
                spark.tooltipSettings.trackLineSettings.visible = true;
            } else {
                spark.tooltipSettings.trackLineSettings.visible = false;
            }
            spark.refresh();
        };
        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.axisSettings.lineSettings.visible === true) ||
            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.axisSettings.lineSettings.visible === true)) {
            this.$refs.axisline.ej2Instances.checked = true;
        } else {
            this.$refs.axisline.ej2Instances.checked = false;
        }
        document.getElementById('axis1').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
            if (boolean) {
                spark.axisSettings.lineSettings.visible = true;
            } else {
                spark.axisSettings.lineSettings.visible = false;
            }
            spark.refresh();
        };
        if (this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.axisSettings.value !== 0) {
            this.$refs.axisval.ej2Instances.value =  this.$refs.percentage.ej2Instances.axisSettings.value;
            this.$refs.axisval.ej2Instances.min = 0;
            this.$refs.axisval.ej2Instances.max = 10;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + this.$refs.percentage.ej2Instances.axisSettings.value;
        }
        if (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.axisSettings.value !== 0) {
            this.$refs.axisval.ej2Instances.value =  this.$refs.sales.ej2Instances.axisSettings.value;
            this.$refs.axisval.ej2Instances.min = 0;
            this.$refs.axisval.ej2Instances.max = 5000000;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + this.$refs.sales.ej2Instances.axisSettings.value;
        }
        function changeAxisrange(e){
                let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
                spark.axisSettings.value = e.value;
                document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;
                spark.refresh();
        }
        all.checked = !(negative.checked || high.checked || low.checked || first.checked || last.checked);
        negative.disabled = high.disabled = low.disabled = first.disabled = last.disabled = all.checked;
    },
    changeAll:function(e){
        let negative = this.$refs.negative.ej2Instances;
        let first = this.$refs.first.ej2Instances;
        let last = this.$refs.last.ej2Instances;
        let high = this.$refs.high.ej2Instances;
        let low = this.$refs.low.ej2Instances;
        let checked = (event.target).checked;
        negative.disabled = checked;
        first.disabled = checked;
        last.disabled = checked;
        high.disabled = checked;
        low.disabled = checked;
        let marker = this.$refs.marker.ej2Instances;
        let label =this.$refs.datalabel.ej2Instances;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
        spark.markerSettings.visible = (checked && marker.checked) ? ['All'] : (marker.checked) ? this.getVisible() : [];
        spark.dataLabelSettings.visible = (checked && label.checked) ? ['All'] : (label.checked) ? this.getVisible() : [];
        spark.refresh();
    },
    changeNegative:function(e){
        this.processMarkerLabel(e);
    },
    processMarkerLabel:function(e) {
        let checked = (event.target).checked;
        let marker = this.$refs.marker.ej2Instances;
        let label =this.$refs.datalabel.ej2Instances;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;
        if (marker.checked) {
            spark.markerSettings.visible = this.getVisible();
            spark.refresh();
        }
        if (label.checked) {
            spark.dataLabelSettings.visible = this.getVisible();
            spark.refresh();
        } 
    },
    getVisible:function(){
        let all = this.$refs.all.ej2Instances;
        let negative = this.$refs.negative.ej2Instances;
        let first = this.$refs.first.ej2Instances;
        let last = this.$refs.last.ej2Instances;
        let high = this.$refs.high.ej2Instances;
        let low = this.$refs.low.ej2Instances;
        let visible = [];
        if (all.checked) { return ['All']; }
        if (negative.checked) { visible.push('Negative'); }
        if (first.checked) { visible.push('Start'); }
        if (last.checked) { visible.push('End'); }
        if (high.checked) { visible.push('High'); }
        if (low.checked) { visible.push('Low'); }
        return visible;
    },
    changeMarker:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        if (boolean) {
            spark.markerSettings.visible = this.getVisible();
        } else {
            spark.markerSettings.visible = [];
        }
        spark.refresh();
    },
    changeDatalabel:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        if (boolean) {
            spark.dataLabelSettings.visible = this.getVisible();
        } else {
            spark.dataLabelSettings.visible = [];
        }
        spark.refresh();
    },
    changeTooltip:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        if (boolean) {
            spark.tooltipSettings.visible = true;
            spark.tooltipSettings.format = '${xval}: ${yval}';
        } else {
            spark.tooltipSettings.visible = false;
        }
        spark.refresh();
    },
    changeTrackline:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        if (boolean) {
            spark.tooltipSettings.trackLineSettings.visible = true;
            spark.tooltipSettings.trackLineSettings.color = 'red';
            spark.tooltipSettings.trackLineSettings.width = 1;
        } else {
            spark.tooltipSettings.trackLineSettings.visible = false;
        }
        spark.refresh();
    },
    changeEnableRtl:function(e){
        let element = (document.getElementById('enableRTL'));
        let boolean = (event.target).checked;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        if (boolean) {
            spark.enableRtl = true;
        } else {
           spark.enableRtl = false; 
        }
        spark.refresh();
    },
    changeAxis:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        if (boolean) {
            spark.axisSettings.lineSettings.visible = true;
            spark.axisSettings.lineSettings.color = 'red';
            spark.axisSettings.lineSettings.width = 2;
        } else {
            spark.axisSettings.lineSettings.visible = false;
        }
        spark.refresh();
    },
    changeAxisrange:function(e){
        let element = (document.getElementById('spark'));
        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;
        spark.axisSettings.value = e.value;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;
        spark.refresh();
    }
},
provide:{
    sparkline:[SparklineTooltip]
}
})
</script>
