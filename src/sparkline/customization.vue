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
                        <ejs-sparkline id='percentage' :load='load' style="width:200px; height:200px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :axisSettings='axisSettings' :markerSettings='markerSettings' xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr>
                  <td align="center" style="width: 30%;">Sales Count</td>
                    <td style="width: 30%;">
                        <ejs-sparkline id='sales' :load='load' style="width:200px; height:200px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :dataSource='dataSource2' :tooltipSettings='tooltipSettings2' :axisSettings='axisSettings2' :markerSettings='markerSettings2' xName='xval' yName='yval'></ejs-sparkline>                        
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
                    <ejs-dropdownlist id='spark' style="width: 100%;" :dataSource='sparkdata' :fields='sparkfields' value='salespercentage' index=0  :change='changeSpark'></ejs-dropdownlist>        
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
                                <ejs-checkbox checked="true" id="all" :change='changeAll'></ejs-checkbox>
                            </td>
                            <td style="padding: 5px;">Negative</td>
                            <td>
                                <ejs-checkbox :disabled='disabled' id="negative" :change='changeNegative'></ejs-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 5px;">First</td>
                            <td>
                                <ejs-checkbox :disabled='disabled' id="first" :change='changeNegative'></ejs-checkbox>
                            </td>
                            <td style="padding: 5px;">Last</td>
                            <td>
                                 <ejs-checkbox :disabled='disabled' id="last" :change='changeNegative'></ejs-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 5px;">High</td>
                            <td>
                                 <ejs-checkbox :disabled='disabled' id="high" :change='changeNegative'></ejs-checkbox>
                            </td>
                           <td style="padding: 5px;">Low</td>
                            <td>
                                 <ejs-checkbox :disabled='disabled' id="low" :change='changeNegative'></ejs-checkbox>
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
                    <ejs-checkbox id="marker" name="marker" :change='changeMarker'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Data Label
                </td>
                <td style="width: 50%">
                    <ejs-checkbox  id="datalabel" name="datalabel" :change='changeDatalabel'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Tooltip
                </td>
                <td style="width: 50%">
                    <ejs-checkbox id="tooltip" name="tooltip" :change='changeTooltip'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Track Line
                </td>
                <td style="width: 50%">
                    <ejs-checkbox name="trackline" id="trackline" :change='changeTrackline'></ejs-checkbox>
                </td>
            </tr>
            <tr style="height: 30px">
                <td style="width: 50%">
                    Axis Line
                </td>
                <td style="width: 50%">
                    <ejs-checkbox id="axis1" name="axis" :change='changeAxis'></ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td id='axisval'>
                    Axis Value<span>&nbsp;&nbsp;&nbsp;0</span>
                </td>
                <td>
                    <div>
                        <ejs-slider id='axis' :value='value' :type='rangetype' :change='changeAxisrange' max=100 min=0 ></ejs-slider>
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
        dataSource: [
            { x: 0, xval: 'AUDI', yval: 1 },
            { x: 1, xval: 'BMW', yval: 5 },
            { x: 2, xval: 'BUICK', yval: -1 },
            { x: 3, xval: 'CETROEN', yval: -6 },
            { x: 4, xval: 'CHEVROLET', yval: 0 },
            { x: 5, xval: 'FIAT', yval: 1 },
            { x: 6, xval: 'FORD', yval: -2 },
            { x: 7, xval: 'HONDA', yval: 7 },
            { x: 8, xval: 'HYUNDAI', yval: -9 },
            { x: 9, xval: 'JEEP', yval: 0 },
            { x: 10, xval: 'KIA', yval: -10 },
            { x: 11, xval: 'MAZDA', yval: 3 },
            { x: 12, xval: 'MERCEDES', yval: 13 },
            { x: 13, xval: 'NISSAN', yval: 5 },
            { x: 14, xval: 'OPEL/VHALL', yval: -6 },
            { x: 15, xval: 'PEUGEOT', yval: 0 },
            { x: 16, xval: 'RENAULT', yval: 7 },
            { x: 17, xval: 'SKODA', yval: 5 },
            { x: 18, xval: 'SUBARU', yval: 5 },
            { x: 19, xval: 'SUZUKI', yval: 11 },
            { x: 20, xval: 'TOYOTA', yval: 5 },
            { x: 21, xval: 'VOLKSWAGEN', yval: 3 }
        ],
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
        dataSource2: [
            { x: 0, xval: 'AUDI', yval: 1847613 },
            { x: 1, xval: 'BMW', yval: 2030331 },
            { x: 2, xval: 'BUICK', yval: 1465823 },
            { x: 3, xval: 'CETROEN', yval: 999888 },
            { x: 4, xval: 'CHEVROLET', yval: 3857388 },
            { x: 5, xval: 'FIAT', yval: 1503806 },
            { x: 6, xval: 'FORD', yval: 5953122 },
            { x: 7, xval: 'HONDA', yval: 4967689 },
            { x: 8, xval: 'HYUNDAI', yval: 3951176 },
            { x: 9, xval: 'JEEP', yval: 1390130 },
            { x: 10, xval: 'KIA', yval: 2511293 },
            { x: 11, xval: 'MAZDA', yval: 1495557 },
            { x: 12, xval: 'MERCEDES', yval: 2834181 },
            { x: 13, xval: 'NISSAN', yval: 4834694 },
            { x: 14, xval: 'OPEL/VHALL', yval: 996559 },
            { x: 15, xval: 'PEUGEOT', yval: 1590300 },
            { x: 16, xval: 'RENAULT', yval: 2275227 },
            { x: 17, xval: 'SKODA', yval: 1180672 },
            { x: 18, xval: 'SUBARU', yval: 1050390 },
            { x: 19, xval: 'SUZUKI', yval: 2891415 },
            { x: 20, xval: 'TOYOTA', yval: 7843423 },
            { x: 21, xval: 'VOLKSWAGEN', yval: 6639250 }
        ],
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
    let element = (document.getElementById('spark'));
    let slider = document.getElementById('axis');
    if (element.ej2_instances[0].value === 'salespercentage') {
        slider.ej2_instances[0].min = 0;
        slider.ej2_instances[0].max = 10;
    } else {
        slider.ej2_instances[0].min = 0;
        slider.ej2_instances[0].max = 5000000;
    }
},
methods:{
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    changeSpark:function(args){
        let percentage = document.getElementById('percentage');
        let slider = document.getElementById('axis');
        let sales = document.getElementById('sales');
         let element1 = (document.getElementById('spark'));
        if (element1.ej2_instances[0].value === 'salespercentage') {
            slider.ej2_instances[0].min = 0;
            slider.ej2_instances[0].max = 10;
        } else {
            slider.ej2_instances[0].min = 0;
            slider.ej2_instances[0].max = 5000000;
        }
        if ((element1.ej2_instances[0].value === 'salespercentage' && percentage.ej2_instances[0].markerSettings.visible.length) ||
            (element1.ej2_instances[0].value === 'salescount' && sales.ej2_instances[0].markerSettings.visible.length)) {
            (document.getElementById('marker')).ej2_instances[0].checked = true;
        } else {
            (document.getElementById('marker')).ej2_instances[0].checked = false;
        }
        document.getElementById('marker').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.ej2_instances[0].markerSettings.visible = this.getVisible();
            } else {
                spark.ej2_instances[0].markerSettings.visible = [];
            }
            spark.ej2_instances[0].refresh();
        };
        if ((element1.ej2_instances[0].value === 'salespercentage' && percentage.ej2_instances[0].dataLabelSettings.visible.length) ||
            (element1.ej2_instances[0].value === 'salescount' && sales.ej2_instances[0].dataLabelSettings.visible.length)) {
            (document.getElementById('datalabel')).ej2_instances[0].checked = true;
        } else {
            (document.getElementById('datalabel')).ej2_instances[0].checked = false;
        }
        let all = document.getElementById('all');
        let negative = document.getElementById('negative');
        let first = document.getElementById('first');
        let last = document.getElementById('last');
        let high = document.getElementById('high');
        let low = document.getElementById('low');
        let label = document.getElementById('datalabel');
        let marker = document.getElementById('marker');
        let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        if (!marker.ej2_instances[0].checked && !label.ej2_instances[0].checked) {
            all.ej2_instances[0].checked = false;
            negative.ej2_instances[0].checked = false;
            first.ej2_instances[0].checked = false;
            last.ej2_instances[0].checked = false;
            high.ej2_instances[0].checked = false;
            low.ej2_instances[0].checked = false;
        }
        if (marker.ej2_instances[0].checked) {
            let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            all.ej2_instances[0].checked = spark.ej2_instances[0].markerSettings.visible.indexOf('All') > -1;
            negative.ej2_instances[0].checked = spark.ej2_instances[0].markerSettings.visible.indexOf('Negative') > -1;
            first.ej2_instances[0].checked = spark.ej2_instances[0].markerSettings.visible.indexOf('Start') > -1;
            last.ej2_instances[0].checked = spark.ej2_instances[0].markerSettings.visible.indexOf('End') > -1;
            high.ej2_instances[0].checked = spark.ej2_instances[0].markerSettings.visible.indexOf('High') > -1;
            low.ej2_instances[0].checked = spark.ej2_instances[0].markerSettings.visible.indexOf('Low') > -1;
        }
        if (label.ej2_instances[0].checked) {
            let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            all.ej2_instances[0].checked = spark.ej2_instances[0].dataLabelSettings.visible.indexOf('All') > -1;
            negative.ej2_instances[0].checked = spark.ej2_instances[0].dataLabelSettings.visible.indexOf('Negative') > -1;
            first.ej2_instances[0].checked = spark.ej2_instances[0].dataLabelSettings.visible.indexOf('Start') > -1;
            last.ej2_instances[0].checked = spark.ej2_instances[0].dataLabelSettings.visible.indexOf('End') > -1;
            high.ej2_instances[0].checked = spark.ej2_instances[0].dataLabelSettings.visible.indexOf('High') > -1;
            low.ej2_instances[0].checked = spark.ej2_instances[0].dataLabelSettings.visible.indexOf('Low') > -1;
        }
        document.getElementById('datalabel').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.ej2_instances[0].dataLabelSettings.visible = this.getVisible();
            } else {
                spark.ej2_instances[0].dataLabelSettings.visible = [];
            }
            spark.ej2_instances[0].refresh();
        };
        if ((element1.ej2_instances[0].value === 'salespercentage' && percentage.ej2_instances[0].tooltipSettings.visible === true) ||
            (element1.ej2_instances[0].value === 'salescount' && sales.ej2_instances[0].tooltipSettings.visible === true)) {
            (document.getElementById('tooltip')).ej2_instances[0].checked = true;
        } else {
            (document.getElementById('tooltip')).ej2_instances[0].checked = false;
        }
        document.getElementById('tooltip').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.ej2_instances[0].tooltipSettings.visible = true;
            } else {
                spark.ej2_instances[0].tooltipSettings.visible = false;
            }
            spark.ej2_instances[0].refresh();
        };
        if ((element1.ej2_instances[0].value === 'salespercentage' && percentage.ej2_instances[0].tooltipSettings.trackLineSettings.visible === true) ||
            (element1.ej2_instances[0].value === 'salescount' && sales.ej2_instances[0].tooltipSettings.trackLineSettings.visible === true)) {
            (document.getElementById('trackline')).ej2_instances[0].checked = true;
        } else {
            (document.getElementById('trackline')).ej2_instances[0].checked = false;
        }
        document.getElementById('trackline').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.ej2_instances[0].tooltipSettings.trackLineSettings.visible = true;
            } else {
                spark.ej2_instances[0].tooltipSettings.trackLineSettings.visible = false;
            }
            spark.ej2_instances[0].refresh();
        };
        if ((element1.ej2_instances[0].value === 'salespercentage' && percentage.ej2_instances[0].axisSettings.lineSettings.visible === true) ||
            (element1.ej2_instances[0].value === 'salescount' && sales.ej2_instances[0].axisSettings.lineSettings.visible === true)) {
            (document.getElementById('axis1')).ej2_instances[0].checked = true;
        } else {
            (document.getElementById('axis1')).ej2_instances[0].checked = false;
        }
        document.getElementById('axis1').onchange = (e) => {
            let boolean = (event.target).checked;
            let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.ej2_instances[0].axisSettings.lineSettings.visible = true;
            } else {
                spark.ej2_instances[0].axisSettings.lineSettings.visible = false;
            }
            spark.ej2_instances[0].refresh();
        };
        if (element1.ej2_instances[0].value === 'salespercentage' && percentage.ej2_instances[0].axisSettings.value !== 0) {
            (document.getElementById('axis')).ej2_instances[0].value =  percentage.ej2_instances[0].axisSettings.value;
            slider.ej2_instances[0].min = 0;
            slider.ej2_instances[0].max = 10;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + percentage.ej2_instances[0].axisSettings.value;
        }
        if (element1.ej2_instances[0].value === 'salescount' && sales.ej2_instances[0].axisSettings.value !== 0) {
            slider.ej2_instances[0].value =  sales.ej2_instances[0].axisSettings.value;
            slider.ej2_instances[0].min = 0;
            slider.ej2_instances[0].max = 5000000;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + sales.ej2_instances[0].axisSettings.value;
        }
        function changeAxisrange(e){
                let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
                spark.ej2_instances[0].axisSettings.value = e.value;
                document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;
                spark.ej2_instances[0].refresh();
        }
        all.ej2_instances[0].checked = !(negative.ej2_instances[0].checked || high.ej2_instances[0].checked || low.ej2_instances[0].checked || first.ej2_instances[0].checked || last.ej2_instances[0].checked);
        negative.ej2_instances[0].disabled = high.ej2_instances[0].disabled = low.ej2_instances[0].disabled = first.ej2_instances[0].disabled = last.ej2_instances[0].disabled = all.ej2_instances[0].checked;
    },
    changeAll:function(e){
        let negative = document.getElementById('negative');
        let first = document.getElementById('first');
        let last = document.getElementById('last');
        let high = document.getElementById('high');
        let low = document.getElementById('low');
        let checked = (event.target).checked;
        negative.ej2_instances[0].disabled = checked;
        first.ej2_instances[0].disabled = checked;
        last.ej2_instances[0].disabled = checked;
        high.ej2_instances[0].disabled = checked;
        low.ej2_instances[0].disabled = checked;
        let marker = document.getElementById('marker');
        let label = document.getElementById('datalabel');
        let element1 = (document.getElementById('spark'));
        let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        spark.ej2_instances[0].markerSettings.visible = (checked && marker.ej2_instances[0].checked) ? ['All'] : (marker.ej2_instances[0].checked) ? this.getVisible() : [];
        spark.ej2_instances[0].dataLabelSettings.visible = (checked && label.ej2_instances[0].checked) ? ['All'] : (label.ej2_instances[0].checked) ? this.getVisible() : [];
        spark.ej2_instances[0].refresh();
    },
    changeNegative:function(e){
        this.processMarkerLabel(e);
    },
    processMarkerLabel:function(e) {
        let checked = (event.target).checked;
        let marker = document.getElementById('marker');
        let label = document.getElementById('datalabel');
        let element1 = (document.getElementById('spark'));
        let spark = element1.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        if (marker.ej2_instances[0].checked) {
            spark.ej2_instances[0].markerSettings.visible = this.getVisible();
            spark.ej2_instances[0].refresh();
        }
        if (label.ej2_instances[0].checked) {
            spark.ej2_instances[0].dataLabelSettings.visible = this.getVisible();
            spark.ej2_instances[0].refresh();
        } 
    },
    getVisible:function(){
        let all = document.getElementById('all');
        let negative = document.getElementById('negative');
        let first = document.getElementById('first');
        let last = document.getElementById('last');
        let high = document.getElementById('high');
        let low = document.getElementById('low');
        let visible = [];
        if (all.ej2_instances[0].checked) { return ['All']; }
        if (negative.ej2_instances[0].checked) { visible.push('Negative'); }
        if (first.ej2_instances[0].checked) { visible.push('Start'); }
        if (last.ej2_instances[0].checked) { visible.push('End'); }
        if (high.ej2_instances[0].checked) { visible.push('High'); }
        if (low.ej2_instances[0].checked) { visible.push('Low'); }
        return visible;
    },
    changeMarker:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = element.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.ej2_instances[0].markerSettings.visible = this.getVisible();
        } else {
            spark.ej2_instances[0].markerSettings.visible = [];
        }
        spark.ej2_instances[0].refresh();
    },
    changeDatalabel:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = element.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.ej2_instances[0].dataLabelSettings.visible = this.getVisible();
        } else {
            spark.ej2_instances[0].dataLabelSettings.visible = [];
        }
        spark.ej2_instances[0].refresh();
    },
    changeTooltip:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = element.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.ej2_instances[0].tooltipSettings.visible = true;
            spark.ej2_instances[0].tooltipSettings.format = '${xval}: ${yval}';
        } else {
            spark.ej2_instances[0].tooltipSettings.visible = false;
        }
        spark.ej2_instances[0].refresh();
    },
    changeTrackline:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = element.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.ej2_instances[0].tooltipSettings.trackLineSettings.visible = true;
            spark.ej2_instances[0].tooltipSettings.trackLineSettings.color = 'red';
            spark.ej2_instances[0].tooltipSettings.trackLineSettings.width = 1;
        } else {
            spark.ej2_instances[0].tooltipSettings.trackLineSettings.visible = false;
        }
        spark.ej2_instances[0].refresh();
    },
    changeAxis:function(e){
        let element = (document.getElementById('spark'));
        let boolean = (event.target).checked;
        let spark = element.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.ej2_instances[0].axisSettings.lineSettings.visible = true;
            spark.ej2_instances[0].axisSettings.lineSettings.color = 'red';
            spark.ej2_instances[0].axisSettings.lineSettings.width = 2;
        } else {
            spark.ej2_instances[0].axisSettings.lineSettings.visible = false;
        }
        spark.ej2_instances[0].refresh();
    },
    changeAxisrange:function(e){
        let element = (document.getElementById('spark'));
            let spark = element.ej2_instances[0].value === 'salespercentage' ? percentage : sales;
            spark.ej2_instances[0].axisSettings.value = e.value;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;
            spark.ej2_instances[0].refresh();
    }
},
provide:{
    sparkline:[SparklineTooltip]
}
})
</script>
