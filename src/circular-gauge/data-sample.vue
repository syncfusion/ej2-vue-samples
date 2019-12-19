<template>
<div>
    <div class="control-section">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' style='display:block:height:250px' align='center' id='gauge1'>
                            <e-axes>
                                <e-axis :startAngle='gauge1startAngle' :endAngle='gauge1endAngle' :majorTicks='gauge1majorTicks' :lineStyle='gauge1lineStyle' :minorTicks='gauge1minorTicks' :labelStyle='gauge1labelStyle' :annotations='gauge1annotations' :ranges='gauge1ranges'>
                                    <e-pointers>
                                        <e-pointer :value='value1' :radius='pointerRadius1' :color='color1' :pointerWidth='pointerWidth1' :cap='cap1' :needleTail='needleTail1' :animation='animation1'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' style='display:blaaock:height:250px' align='center' id='gauge2'>
                            <e-axes>
                                <e-axis :startAngle='gauge2startAngle' :endAngle='gauge2endAngle' :majorTicks='gauge2majorTicks' :lineStyle='gauge2lineStyle' :minorTicks='gauge2minorTicks' :labelStyle='gauge2labelStyle' :annotations='gauge2annotations' :ranges='gauge2ranges'>
                                    <e-pointers>
                                        <e-pointer :value='value2' :radius='pointerRadius2' :color='color2' :pointerWidth='pointerWidth2' :cap='cap2' :needleTail='needleTail2' :animation='animation2'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' style='display:block:height:250px' align='center' id='gauge3'>
                            <e-axes>
                                <e-axis :startAngle='gauge3startAngle' :endAngle='gauge3endAngle' :majorTicks='gauge3majorTicks' :lineStyle='gauge3lineStyle' :minorTicks='gauge3minorTicks' :labelStyle='gauge3labelStyle' :annotations='gauge3annotations' :ranges='gauge3ranges'>
                                    <e-pointers>
                                        <e-pointer :value='value3' :radius='pointerRadius3' :color='color3' :pointerWidth='pointerWidth3' :cap='cap3' :needleTail='needleTail3' :animation='animation3'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-12">
                        <ejs-grid id='grid' :dataSource='data' :load='toolTipInterval1'>
                            <e-columns>
                                <e-column field="Country" headerText="Country" width=80 />
                                <e-column field="Sales" headerText="Sales $" width=80 />
                                <e-column field="Target" headerText="Target $" width=80 />
                                <e-column field="vsTarget" headerText="vs Target" width=80 />
                            </e-columns>
                        </ejs-grid>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the live data sample in circular gauge.
        </p>
    </div>
    <div id="description">
        <p>
            Pointer values in the gauge can be updated dynamically by using <code>setPointerValue</code> method. In this example, a stock price changes over the countries, are showed by using a gauge.
        </p>
        <p>
            More information on the gauge and its methods can be found in can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation"> documentation section</a>.
        </p>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { CircularGaugePlugin, Annotations} from "@syncfusion/ej2-vue-circulargauge";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { Query, DataManager } from '@syncfusion/ej2-data';
Vue.use(CircularGaugePlugin, GridPlugin);
export default Vue.extend({
    data: () => {
        let value1 = Math.round(Math.random() * (90 - 55) + 55);
        let value2 = Math.round(Math.random() * (75 - 60) + 60);
        let value3 = Math.round(Math.random() * (40 - 10) + 10);
        let gridData1 = 4 * value1;
        let gridData2 = 6 * value2;
        let gridData3 = 7 * value3;
        let orderData = [{
            'Country': 'Germany',
            'Sales': 500,
            'Target': 400,
            'vsTarget': gridData1
        }, {
            'Country': 'USA',
            'Sales': 1000,
            'Target': 600,
            'vsTarget': gridData2
        }, {
            'Country': 'UK',
            'Sales': 600,
            'Target': 700,
            'vsTarget': -gridData3
        }];
        return {
            gauge1annotations: [{
                content: "<div id='templateWrap'><img src='src/circular-gauge/images/positive.png' alt='Positive value for Germany' /><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                zIndex: '1',
                radius: '30%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                zIndex: '1',
                radius: '65%'
            }],
            gauge1startAngle: 230,
            gauge1endAngle: 130,
            gauge1majorTicks: {
                width: 0
            },
            gauge1lineStyle: {
                width: 0
            },
            gauge1minorTicks: {
                width: 0
            },
            gauge1labelStyle: {
                font: {
                    size: '0'
                }
            },
            gauge1ranges: [{
                start: 0,
                end: 50,
                startWidth: 15,
                endWidth: 15,
                color: '#EC121C'
            }, {
                start: 50,
                end: 100,
                startWidth: 15,
                endWidth: 15,
                color: '#45EA0C'
            }],
            value1: 75,
            pointerRadius1: '60%',
            animation1: {
                enable: false
            },
            color1: '#777777',
            pointerWidth1: 5,
            cap1: {
                radius: 6,
                border: {
                    width: 0
                },
                color: '#777777'
            },
            needleTail1: {
                length: '25%',
                color: '#777777'
            },
            gauge2annotations: [{
                content: "<div id='templateWrap'><img src='src/circular-gauge/images/positive.png' alt='Positive value for USA' /><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                zIndex: '1',
                radius: '30%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">USA</div>',
                angle: 180,
                zIndex: '1',
                radius: '65%'
            }],
            gauge2startAngle: 230,
            gauge2endAngle: 130,
            gauge2majorTicks: {
                width: 0
            },
            gauge2lineStyle: {
                width: 0
            },
            gauge2minorTicks: {
                width: 0
            },
            gauge2labelStyle: {
                font: {
                    size: '0'
                }
            },
            gauge2ranges: [{
                start: 0,
                end: 50,
                startWidth: 15,
                endWidth: 15,
                color: '#EC121C'
            }, {
                start: 50,
                end: 100,
                startWidth: 15,
                endWidth: 15,
                color: '#45EA0C'
            }],
            value2: 60,
            pointerRadius2: '60%',
            animation2: {
                enable: false
            },
            color2: '#777777',
            pointerWidth2: 5,
            cap2: {
                radius: 6,
                border: {
                    width: 0
                },
                color: '#777777'
            },
            needleTail2: {
                length: '25%',
                color: '#777777'
            },
            gauge3annotations: [{
                content: "<div id='templateWrap'><img src='src/circular-gauge/images/negative.png' alt='Negative value for UK' /><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                zIndex: '1',
                radius: '30%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">UK</div>',
                angle: 180,
                zIndex: '1',
                radius: '65%'
            }],
            gauge3startAngle: 230,
            gauge3endAngle: 130,
            gauge3majorTicks: {
                width: 0
            },
            gauge3lineStyle: {
                width: 0
            },
            gauge3minorTicks: {
                width: 0
            },
            gauge3labelStyle: {
                font: {
                    size: '0'
                }
            },
            gauge3ranges: [{
                start: 0,
                end: 50,
                startWidth: 15,
                endWidth: 15,
                color: '#EC121C'
            }, {
                start: 50,
                end: 100,
                startWidth: 15,
                endWidth: 15,
                color: '#45EA0C'
            }],
            value3: 25,
            pointerRadius3: '60%',
            animation3: {
                enable: false
            },
            color3: '#777777',
            pointerWidth3: 5,
            cap3: {
                radius: 6,
                border: {
                    width: 0
                },
                color: '#777777'
            },
            needleTail3: {
                length: '25%',
                color: '#777777'
            },
            data: new DataManager(orderData).executeLocal(new Query().take(15))
        }
    },
    provide: {
        circulargauge: [Annotations]
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
        toolTipInterval1: function () {
            setInterval(function () {
                let germany = document.getElementById('gauge1');
                let usa = document.getElementById('gauge2');
                let uk = document.getElementById('gauge3');
                let grid = document.getElementById('grid');
                if (grid) {
                    let value1 = Math.round(Math.random() * (90 - 55) + 55);
                    let value2 = Math.round(Math.random() * (75 - 60) + 60);
                    let value3 = Math.round(Math.random() * (40 - 10) + 10);
                    let gridData1 = 4 * value1;
                    let gridData2 = 6 * value2;
                    let gridData3 = 7 * value3;
                    let orderData = [{
                        'Country': 'Germany',
                        'Sales': 500,
                        'Target': 400,
                        'vsTarget': gridData1
                    }, {
                        'Country': 'USA',
                        'Sales': 1000,
                        'Target': 600,
                        'vsTarget': gridData2
                    }, {
                        'Country': 'UK',
                        'Sales': 600,
                        'Target': 700,
                        'vsTarget': -gridData3
                    }];
                    let data = new DataManager(orderData).executeLocal(new Query().take(3));

                    grid.ej2_instances[0].dataSource = data;
                    grid.ej2_instances[0].refresh();

                    germany.ej2_instances[0].axes[0].pointers[0].animation.enable = true;
                    usa.ej2_instances[0].axes[0].pointers[0].animation.enable = true;
                    uk.ej2_instances[0].axes[0].pointers[0].animation.enable = true;
                    germany.ej2_instances[0].setPointerValue(0, 0, value1);
                    usa.ej2_instances[0].setPointerValue(0, 0, value2);
                    uk.ej2_instances[0].setPointerValue(0, 0, value3);
                    germany.ej2_instances[0].setAnnotationValue(0, 0, "<div id='templateWrap'><img src='src/circular-gauge/images/positive.png' alt='Positive value for Germany'/><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>");
                    usa.ej2_instances[0].setAnnotationValue(0, 0, "<div id='templateWrap'><img src='src/circular-gauge/images/positive.png' alt='Positive value for USA'/><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>");
                    uk.ej2_instances[0].setAnnotationValue(0, 0, "<div id='templateWrap'><img src='src/circular-gauge/images/negative.png' alt='Negative value for UK'/><div class='des'><div style='color:#424242;font-size:20px;font-family:Roboto'>${pointers[0].value}%</div></div></div>");


                } else {
                    clearInterval(this.toolTipInterval1);
                }
            }, 2000)
        }
    }
})
</script>
<style>
#templateWrap img {
    width: 16px;
    height: 16px;
    margin-top: 4px;
}

#templateWrap .des {
    float: right;
    padding-left: 5px;
}
</style>
