<template>
<div>
<div class="col-md-8 control-section">
    <div class="content-wrapper">
        <ejs-lineargauge :load='load' ref="lineargauge" style='display:block' align='center' id='rangeContainer' :orientation='orientation' :annotations='annotations'>
            <e-axes>
                <e-axis :labelStyle='labelStyle' :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :ranges='ranges'>
                    <e-pointers>
                        <e-pointer value=35 :height='height' :width='width' :markerType='markerType' :placement='placement' :offset='offset'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    </div>

<div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%;">
            <tbody>
            <tr>
                <td>
                    <div> Select Range</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist ref="selectRange" id='rangeIndex' :dataSource='rangedata' :fields='rangefields' value='0' index=0 :width='rangewidth' :change='changeRange'></ejs-dropdownlist>
                    </div>
                </td>
            </tr><br/>
            <tr>
                <td>
                    <div>Range Color</div>
                </td>
                <td>
                    <div>
                        <div class="e-float-input" style='margin-top: 0px;'>
                            <input type="text" ref="rangeColor" value="#F03E3E" id='color' v-on:change="changeRangecolor" style="width:100%;margin-left:-10px;">
                        </div>

                    </div>
                </td>
            </tr><br/>
            <tr>
                <td>
                    <div>Range Font Color</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist ref="rangeFontColor" id='useRangeColor' :dataSource='rangecolordata' value='font' :fields='rangecolorfields' index=0 :width='rangecolorwidth' :change='changeFontcolor'></ejs-dropdownlist>
                    </div>
                </td>
            </tr><br/>
            <tr>
                <td>
                    <div id='startRangeValue'>Range Start
                        <span>&nbsp;&nbsp;&nbsp;0</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="rangeStart" id="start" v-on:pointermove="rangeStart" v-on:touchmove="rangeStart" v-on:change="rangeStart" value="0" min="0" max="100" style="width:90%;" />
                    </div>
                </td>
            </tr><br/>
            <tr>
                <td>
                    <div id='endRangeValue'>Range End
                        <span>&nbsp;&nbsp;&nbsp;32</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="rangeEnd" id="end" v-on:pointermove="rangeEnd" v-on:touchmove="rangeEnd" v-on:change="rangeEnd" value="32" min="0" max="100" style="width:90%;" />
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div id='startWidthValue'> Range Start Width
                        <span>&nbsp;&nbsp;&nbsp;15</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="startWidth" id="startWidth" v-on:pointermove="rangeStartwidth" v-on:touchmove="rangeStartwidth" v-on:change="rangeStartwidth" value="15" min="0" max="30" style="width:90%;" />
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <div id='endWidthValue'>Range End Width
                        <span>&nbsp;&nbsp;&nbsp;15</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="range" ref="endWidth" id="endWidth" v-on:pointermove="rangeEndwidth" v-on:touchmove="rangeEndwidth" v-on:change="rangeEndwidth" value="15" min="0" max="30" style="width:90%;" />
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
        <p>
            This sample illustrates how to highlight a region in an axis by using ranges in gauge. Start, end, color, and width of the range can be changed by using the options provided in the property panel.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to render and configure the ranges in linear gauge. You can use
            <code>start</code>,
            <code>end</code>,
            <code>startWidth</code>,
            <code>endWidth</code> and
            <code>position</code> properties to customize the ranges. You can also specify various colors for the ranges in the axis. If you enable the
            <code>useRangeColor</code> property, then the axis labels will be displayed based on its range color.
            <br>
            <p>
                More information about ranges can be found in this
                <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
            </p>
    </div>
</div>
</template>
<style>
    #control-container {
        padding: 0px !important;
    }

    .property-panel-section {
        height: 380px;
    }
</style>
<script>
import Vue from "vue";
import { LinearGaugePlugin, Annotations } from "@syncfusion/ej2-vue-lineargauge";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(LinearGaugePlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
    data: function () {
        return {
            orientation: 'Horizontal',
            labelStyle: {
                format: '{value}%',
                offset: 30
            },
            line: {
                width: 0
            },
            height: 10,
            width: 10,
            markerType: 'Triangle',
            placement: 'Near',
            offset: -40,
            majorTicks: {
                height: 0
            },
            minorTicks: {
                height: 0
            },
            ranges: [{
                    start: 0,
                    end: 32,
                    color: '#30B32D',
                    startWidth: 15,
                    endWidth: 15
                },
                {
                    start: 32,
                    end: 68,
                    startWidth: 15,
                    endWidth: 15,
                    color: '#FFDF00'
                },
                {
                    start: 68,
                    end: 100,
                    startWidth: 15,
                    endWidth: 15,
                    color: '#F03E3E'
                }
            ],
            annotations: [{
                content: '<div id="pointer" style="width:20px"><h1 style="font-size:18px;">35</h1></div>',
                axisIndex: 0,
                zIndex: '1',
                axisValue: 35,
                y: -50
            }],
            rangedata: [{
                    Id: '0',
                    level: 'Low'
                },
                {
                    Id: '1',
                    level: 'Moderate'
                },
                {
                    Id: '2',
                    level: 'High'
                }
            ],
            rangefields: {
                text: 'level',
                value: 'Id'
            },
            rangewidth: 120,
            rangecolordata: [{
                    Id: 'font',
                    type: 'Default Color'
                },
                {
                    Id: 'range',
                    type: 'Range Color'
                }
            ],
            rangecolorfields: {
                text: 'type',
                value: 'Id'
            },
            rangecolorwidth: 120
        }
    },
    provide: {
        lineargauge: [Annotations]
    },
    methods: {
        /* custom code start */
        load: function (args) {
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },
        /* custom code end */
        changeRange: function (args) {
            /* custom code start */
            // let cotainerObj = document.getElementById('rangeContainer');
            /* custom code end */
            // Code for Property Panel
            let start = document.getElementById('start');
            let end = document.getElementById('end');
            let rangeColor = document.getElementById('color');
            let startWidth = document.getElementById('startWidth');
            let endWidth = document.getElementById('endWidth');
            start.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].start.toString();
            end.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].end.toString();
            startWidth.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].startWidth.toString();
            endWidth.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].endWidth.toString();
            rangeColor.value = this.$refs.lineargauge.ej2Instances.axes[0].ranges[args.value].color.toString();
            document.getElementById('startWidthValue').innerHTML = 'Range Start Width<span>&nbsp;&nbsp;&nbsp;' + startWidth.value;
            document.getElementById('endWidthValue').innerHTML = 'Range End Width<span>&nbsp;&nbsp;&nbsp;' + endWidth.value;
            document.getElementById('startRangeValue').innerHTML = 'Range Start <span>&nbsp;&nbsp;&nbsp;' + start.value;
            document.getElementById('endRangeValue').innerHTML = 'Range End <span>&nbsp;&nbsp;&nbsp;' + end.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        changeFontcolor: function (args) {
            this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.useRangeColor = (args.value === 'range') ? true : false;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        changeRangecolor: function (args) {
            let ele = document.getElementById('color');
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].color = ele.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        rangeStart: function (args) {
            let start = document.getElementById('start');
            let end = document.getElementById('end');
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].start = parseInt(start.value, 10);
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].end = parseInt(end.value, 10);
            document.getElementById('startRangeValue').innerHTML = 'Range Start <span>&nbsp;&nbsp;&nbsp;' + start.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        rangeEnd: function (args) {
            let start = document.getElementById('start');
            let end = document.getElementById('end');
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].start = parseInt(start.value, 10);
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].end = parseInt(end.value, 10);
            document.getElementById('endRangeValue').innerHTML = 'Range End <span>&nbsp;&nbsp;&nbsp;' + end.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        rangeStartwidth: function (args) {
            let ele = document.getElementById('startWidth');
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].startWidth = parseInt(ele.value, 10);
            document.getElementById('startWidthValue').innerHTML = 'Range Start Width<span>&nbsp;&nbsp;&nbsp;' + ele.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        },
        rangeEndwidth: function (args) {
            let ele = document.getElementById('endWidth');
            this.$refs.lineargauge.ej2Instances.axes[0].ranges[this.$refs.selectRange.ej2Instances.value].endWidth = parseInt(ele.value, 10);
            document.getElementById('endWidthValue').innerHTML = 'Range End Width<span>&nbsp;&nbsp;&nbsp;' + ele.value;
            this.$refs.lineargauge.ej2Instances.refresh();
        }
    }
});
</script>
