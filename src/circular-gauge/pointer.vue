<template>
<div>
    <div class="control-section">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' style='display:block;height:250px' align='center' id='container2'>
                            <e-axes>
                                <e-axis :radius='gauge2Radius' :startAngle='gauge2startAngle' minimum=0 maximum=100 :endAngle='gauge2endAngle' :majorTicks='gauge2majorTicks' :lineStyle='gauge2lineStyle' :minorTicks='gauge2minorTicks' :labelStyle='gauge2labelStyle' :annotations='gauge2annotations'>
                                    <e-pointers>
                                        <e-pointer :type='type2' :value='value2' :radius='pointerRadius2' :color='color2' :markerShape='markerShape2' :markerWidth='markerWidth2' :markerHeight='markerHeight2'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' style='display:block;height:250px' align='center' id='container1'>
                            <e-axes>
                                <e-axis :radius='gauge1Radius' :startAngle='gauge1startAngle' minimum=0 maximum=100 :endAngle='gauge1endAngle' :majorTicks='gauge1majorTicks' :lineStyle='gauge1lineStyle' :minorTicks='gauge1minorTicks' :labelStyle='gauge1labelStyle' :annotations='gauge1annotations'>
                                    <e-pointers>
                                        <e-pointer :type='type1' :value='value1' :radius='pointerRadius1' :color='color1' :pointerWidth='pointerWidth1' :animation='animation1'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' style='display:block;height:250px' align='center' id='container3'>
                            <e-axes>
                                <e-axis :radius='gauge3Radius' :startAngle='gauge3startAngle' minimum=0 maximum=100 :endAngle='gauge3endAngle' :majorTicks='gauge3majorTicks' :lineStyle='gauge3lineStyle' :minorTicks='gauge3minorTicks' :labelStyle='gauge3labelStyle' :annotations='gauge3annotations'>
                                    <e-pointers>
                                        <e-pointer :type='type3' :value='value3' :radius='pointerRadius3' :color='color3' :markerWidth='markerWidth3' :markerHeight='markerHeight3' :animation='animation3' :markerShape='markerShape3' :border='border3'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-4">
                        <ejs-circulargauge ref="circulargauge1" :load='load' style='display:block;height:250px' align='center' id='container4' :centerY='centerY4'>
                            <e-axes>
                                <e-axis :radius='gauge4Radius' :startAngle='gauge4startAngle' minimum=0 maximum=100 :endAngle='gauge4endAngle' :majorTicks='gauge4majorTicks' :lineStyle='gauge4lineStyle' :minorTicks='gauge4minorTicks' :labelStyle='gauge4labelStyle' :annotations='gauge4annotations'>
                                    <e-pointers>
                                        <e-pointer :value='value4' :radius='pointerRadius4' :color='color4' :pointerWidth='pointerWidth4' :animation='animation4' :cap='cap4' :needleTail='needleTail4'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' style='display:block;height:250px' align='center' id='container5' :centerY='centerY6'>
                            <e-axes>
                                <e-axis :radius='gauge6Radius' :startAngle='gauge6startAngle' minimum=0 maximum=100 :endAngle='gauge6endAngle' :majorTicks='gauge6majorTicks' :lineStyle='gauge6lineStyle' :minorTicks='gauge6minorTicks' :labelStyle='gauge6labelStyle' :annotations='gauge6annotations'>
                                    <e-pointers>
                                        <e-pointer :value='value7' :radius='pointerRadius7' :markerWidth='markerWidth7' :markerHeight='markerHeight7' :color='color7' :pointerWidth='pointerWidth7' :cap='cap7' :needleTail='needleTail7' :animation='animation7'></e-pointer>
                                        <e-pointer :value='value8' :radius='pointerRadius8' :markerWidth='markerWidth8' :markerHeight='markerHeight8' :color='color8' :pointerWidth='pointerWidth8' :cap='cap8' :needleTail='needleTail8' :animation='animation8'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge ref="circulargauge2" :load='load' style='display:block;height:250px' align='center' id='container6' :centerY='centerY5'>
                            <e-axes>
                                <e-axis :radius='gauge5Radius' :startAngle='gauge5startAngle' minimum=0 maximum=100 :endAngle='gauge5endAngle' :majorTicks='gauge5majorTicks' :lineStyle='gauge5lineStyle' :minorTicks='gauge5minorTicks' :labelStyle='gauge5labelStyle' :annotations='gauge5annotations'>
                                    <e-pointers>
                                        <e-pointer :value='value5' :radius='pointerRadius5' :color='color5' :pointerWidth='pointerWidth5' :cap='cap5' :needleTail='needleTail5' :animation='animation5'></e-pointer>
                                        <e-pointer :type='type6' :value='value6' :radius='pointerRadius6' :color='color6' :pointerWidth='pointerWidth6' :animation='animation6'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample visualizes the different types of pointers which are available in the gauge.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to customize the pointer for an axis in the circular gauge. Gauge supports different types of pointers like <code>marker</code>, <code>image</code>, <code>needle</code>, <code>rangeBar</code>.
        </p>
        <br>
        <p>
            Gauge with all type of pointer is used in this sample.
        </p>
        <p>
            More information on the pointers can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
        </p>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
    data: function () {
        return {
            gauge1startAngle: 270,
            gauge1endAngle: 90,
            gauge1lineStyle: {
                width: 3,
                color: '#ff5985'
            },
            gauge1labelStyle: {
                position: 'Outside',
                font: {
                    size: '0px',
                    color: '#ff5985'
                }
            },
            gauge1majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            },
            gauge1minorTicks: {
                height: 0,
                width: 0,
            },
            gauge1Radius: '90%',
            type1: 'RangeBar',
            value1: 66,
            pointerRadius1: '90%',
            color1: '#ff5985',
            pointerWidth1: 10,
            animation1: {
                enable: true,
                duration: 1000
            },
            gauge1annotations: [{
                angle: 180,
                zIndex: '1',
                radius: '20%',
                content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Range Bar</div>'
            }],
            gauge2startAngle: 270,
            gauge2endAngle: 90,
            gauge2lineStyle: {
                width: 3,
                color: '#01aebe'
            },
            gauge2labelStyle: {
                position: 'Outside',
                font: {
                    size: '0px',
                    color: '#01aebe'
                }
            },
            gauge2majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            },
            gauge2minorTicks: {
                height: 0,
                width: 0,
            },
            gauge2Radius: '90%',
            pointerRadius2: '100%',
            value2: 80,
            type2: 'Marker',
            markerShape2: 'InvertedTriangle',
            markerWidth2: 15,
            markerHeight2: 15,
            color2: 'rgb(0,171,169)',
            gauge2annotations: [{
                angle: 180,
                zIndex: '1',
                radius: '20%',
                content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Inverted Triangle</div>'
            }],
            gauge3startAngle: 270,
            gauge3endAngle: 90,
            gauge3lineStyle: {
                width: 3,
                color: '#1E7145'
            },
            gauge3labelStyle: {
                position: 'Outside',
                font: {
                    size: '0px',
                    color: '#1E7145'
                }
            },
            gauge3majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            },
            gauge3minorTicks: {
                height: 0,
                width: 0,
            },
            gauge3Radius: '90%',
            type3: 'Marker',
            markerShape3: 'Triangle',
            pointerRadius3: '100%',
            animation3: {
                enable: true,
                duration: 1000
            },
            value3: 70,
            markerWidth3: 15,
            markerHeight3: 15,
            color3: '#1E7145',
            border3: {
                width: 1,
                color: ' #1E7145'
            },
            gauge3annotations: [{
                angle: 180,
                zIndex: '1',
                radius: '20%',
                content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Triangle</div>'
            }],
            centerY4: '40%',
            gauge4startAngle: 270,
            gauge4endAngle: 90,
            gauge4lineStyle: {
                width: 3,
                color: '#9250e6'
            },
            gauge4labelStyle: {
                position: 'Outside',
                font: {
                    size: '0px',
                    color: '#9250e6'
                }
            },
            gauge4majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            },
            gauge4minorTicks: {
                height: 0,
                width: 0,
            },
            gauge4Radius: '90%',
            pointerRadius4: '100%',
            animation4: {
                enable: true,
                duration: 900
            },
            value4: 70,
            color4: '#923C99',
            pointerWidth4: 6,
            cap4: {
                radius: 0
            },
            needleTail4: {
                length: '4%',
                color: '#923C99'
            },
            gauge4annotations: [{
                angle: 180,
                zIndex: '1',
                radius: '20%',
                content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Needle</div>'
            }],
            centerY5: '40%',
            gauge5startAngle: 270,
            gauge5endAngle: 90,
            gauge5lineStyle: {
                width: 0
            },
            gauge5labelStyle: {
                position: 'Outside',
                font: {
                    size: '0px',
                    color: '#067bc2'
                }
            },
            gauge5majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            },
            gauge5minorTicks: {
                height: 0,
                width: 0,
            },
            gauge5Radius: '90%',
            pointerRadius5: '100%',
            animation5: {
                enable: true,
                duration: 900
            },
            value5: 40,
            color5: '#067bc2',
            pointerWidth5: 6,
            cap5: {
                radius: 0
            },
            needleTail5: {
                length: '4%',
                color: '#067bc2'
            },
            pointerRadius6: '100%',
            type6: 'RangeBar',
            animation6: {
                enable: true,
                duration: 900
            },
            value6: 40,
            color6: '#067bc2',
            pointerWidth6: 5,
            gauge5annotations: [{
                angle: 180,
                zIndex: '1',
                radius: '20%',
                content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Live Update</div>'
            }],
            gauge6startAngle: 270,
            gauge6endAngle: 90,
            gauge6lineStyle: {
                width: 3,
                color: '#e3a21a'
            },
            gauge6labelStyle: {
                position: 'Outside',
                font: {
                    size: '0px',
                    color: '#e3a21a'
                }
            },
            gauge6majorTicks: {
                width: 1,
                height: 0,
                interval: 100
            },
            gauge6minorTicks: {
                height: 0,
                width: 0,
            },
            centerY6: '40%',
            gauge6Radius: '90%',
            pointerRadius7: '80%',
            value7: 80,
            markerWidth7: 5,
            markerHeight7: 5,
            animation7: {
                enable: true,
                duration: 1000
            },
            color7: '#e3a21a',
            pointerWidth7: 10,
            cap7: {
                radius: 8,
                color: 'white',
                border: {
                    color: '#e3a21a',
                    width: 1
                }
            },
            needleTail7: {
                length: '20%',
                color: '#e3a21a'
            },
            gauge6annotations: [{
                angle: 180,
                zIndex: '1',
                radius: '25%',
                content: '<div style="color:#757575; font-family:Roboto; font-size:14px;">Multiple Needle</div>'
            }],
            pointerRadius8: '60%',
            value8: 40,
            markerWidth8: 5,
            markerHeight8: 5,
            animation8: {
                duration: 1000
            },
            color8: '#ffb133',
            pointerWidth8: 10,
            cap8: {
                radius: 8,
                color: 'white',
                border: {
                    color: '#ffb133',
                    width: 1
                }
            },
            needleTail8: {
                length: '20%',
                color: '#e3a21a'
            }
        }
    },
    provide: {
        circulargauge: [Annotations]
    },
    mounted() {
        this.setIntervalStart();
    },
    methods: {        
        setIntervalStart : function(){
            let gauge1 = this.$refs.circulargauge1.ej2Instances;
            let gauge2 = this.$refs.circulargauge2.ej2Instances;
            this.gauge5Interval1 = setInterval(function () {
                let newVal = Math.random() * (90 - 20) + 20;
                if (document.getElementById('container4')) {
                    gauge1.setPointerValue(0, 0, newVal);
                } else {
                    clearInterval(this.gauge5Interval1);
                }
            }, 2000)
            this.gauge6Interval1 = setInterval(function () {
                let newVal = Math.random() * (80 - 30) + 30;
                if (document.getElementById('container6')) {
                    gauge2.setPointerValue(0, 0, newVal);
                    gauge2.setPointerValue(0, 1, newVal);
                } else {
                    clearInterval(this.gauge6Interval1);
                }
            }, 2000)
        },
        /* custom code start */
        load: function (args) {
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        }
        /* custom code end */
    }
})
</script>
