<template>
<main><div>
    <div class="control-section">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' :background='background' style='display:block; height:230px' align='center' id='gauge1'>
                            <template v-slot:firstImageTemplate="{}">
                                <div class='templateWrap'><img src='./images/positive.png' alt='Positive value for Germany'/>&nbsp;&nbsp;<p class="gauge_text">{{value1}}%</p></div>
                            </template>
                            <template v-slot:firstTextTemplate="{}">
                                <div style="color:#9E9E9E;font-size:16px;font-family:Segoe UI">Germany</div>
                            </template>
                            <e-axes>
                                <e-axis :startAngle='gauge1startAngle' :endAngle='gauge1endAngle' :majorTicks='gauge1majorTicks' :lineStyle='gauge1lineStyle' :minorTicks='gauge1minorTicks' :labelStyle='gauge1labelStyle' :ranges='gauge1ranges'>
                                    <e-annotations>
                                        <e-annotation description='Positive arrow' angle='180' zIndex='1' radius='30%' :content="'firstImageTemplate'"></e-annotation>
                                        <e-annotation description='Germany' angle='180' zIndex='1' radius='65%' :content="'firstTextTemplate'"></e-annotation>
                                    </e-annotations>
                                    <e-pointers>
                                        <e-pointer :value='value1' :radius='pointerRadius1' :pointerWidth='pointerWidth1' :cap='cap1' :needleTail='needleTail1' :animation='animation1'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' :background='background' style='display:block; height:230px' align='center' id='gauge2'>
                            <template v-slot:twoImageTemplate="{}">
                                <div class='templateWrap'><img src='./images/positive.png' alt='Positive value for USA'/>&nbsp;&nbsp;<p class="gauge_text">{{value2}}%</p></div>
                            </template>
                            <template v-slot:twoTextTemplate="{}">
                                <div style="color:#9E9E9E;font-size:16px;font-family:Segoe UI">USA</div>
                            </template>
                            <e-axes>
                                <e-axis :startAngle='gauge2startAngle' :endAngle='gauge2endAngle' :majorTicks='gauge2majorTicks' :lineStyle='gauge2lineStyle' :minorTicks='gauge2minorTicks' :labelStyle='gauge2labelStyle' :ranges='gauge2ranges'>
                                    <e-annotations>
                                        <e-annotation description='Positive arrow ' angle='180' zIndex='1' radius='30%' :content="'twoImageTemplate'"></e-annotation>
                                        <e-annotation description='USA' angle='180' zIndex='1' radius='65%' :content="'twoTextTemplate'"></e-annotation>
                                    </e-annotations>
                                    <e-pointers>
                                        <e-pointer :value='value2' :radius='pointerRadius2' :pointerWidth='pointerWidth2' :cap='cap2' :needleTail='needleTail2' :animation='animation2'></e-pointer>
                                    </e-pointers>
                                </e-axis>
                            </e-axes>
                        </ejs-circulargauge>
                    </div>
                    <div class="col-sm-4">
                        <ejs-circulargauge :load='load' :background='background' style='display:block; height:230px' align='center' id='gauge3'>
                            <template v-slot:threeImageTemplate="{}">
                                <div class='templateWrap'><img src='./images/negative.png' alt='Negative value for UK'/>&nbsp;&nbsp;<p class="gauge_text">{{value3}}%</p></div>
                            </template>
                            <template v-slot:threeTextTemplate="{}">
                                <div style="color:#9E9E9E;font-size:16px;font-family:Segoe UI">UK</div>
                            </template>
                            <e-axes>
                                <e-axis :startAngle='gauge3startAngle' :endAngle='gauge3endAngle' :majorTicks='gauge3majorTicks' :lineStyle='gauge3lineStyle' :minorTicks='gauge3minorTicks' :labelStyle='gauge3labelStyle' :ranges='gauge3ranges'>
                                    <e-annotations>
                                        <e-annotation  description='Negative arrow' angle='180' zIndex='1' radius='30%' :content="'threeImageTemplate'"></e-annotation>
                                        <e-annotation description='UK' angle='180' zIndex='1' radius='65%' :content="'threeTextTemplate'"></e-annotation>
                                    </e-annotations>
                                    <e-pointers>
                                        <e-pointer :value='value3' :radius='pointerRadius3' :pointerWidth='pointerWidth3' :cap='cap3' :needleTail='needleTail3' :animation='animation3'></e-pointer>
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
</div>
    <section id="action-description" aria-label="Description of Circular Gauge sample">
        <p>
            This sample shows live stock price data displayed in multiple circular gauges.
        </p>
    </section>
    <section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
        <p>
            The pointer value in the circular gauge can be dynamically updated using the <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#setpointervalue">setPointerValue</a>
            method. In this example, the stock price changes across countries are displayed in multiple circular gauges.
        </p>
        <p>
            More information on the circular gauge can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/"> documentation
                section</a>.
        </p>
    </section>
</main>
</template>

<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, AnnotationsDirective, AnnotationDirective, Annotations} from "@syncfusion/ej2-vue-circulargauge";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { Query, DataManager } from '@syncfusion/ej2-data';

export default {
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
            gauge1startAngle: 230,
            background:'transparent',
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
			    format:'positive {value}',
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
            pointerWidth1: 5,
            cap1: {
                radius: 6,
                border: {
                    width: 0
                }
            },
            needleTail1: {
                length: '25%'
            },
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
			    format:'positive {value} ',
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
            pointerWidth2: 5,
            cap2: {
                radius: 6,
                border: {
                    width: 0
                }
            },
            needleTail2: {
                length: '25%'
            },
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
			    format:'negative {value}',
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
            pointerWidth3: 5,
            cap3: {
                radius: 6,
                border: {
                    width: 0
                }
            },
            needleTail3: {
                length: '25%'
            },
            data: new DataManager(orderData).executeLocal(new Query().take(15))
        }
    },
    provide: {
        circulargauge: [Annotations]
    },
    components: {
    'ejs-circulargauge': CircularGaugeComponent,
    'e-axes': AxesDirective,
    'e-axis': AxisDirective,
    'e-pointers': PointersDirective,
    'e-pointer': PointerDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective,
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
   },
    methods: {
        load: function (args) {
            /* custom code start */
            let selectedTheme = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.gauge.theme =
                (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
            /* custom code end */
        },
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
                    germany.ej2_instances[0].setAnnotationValue(0, 0, "<div style='display: inline;margin-left: -10px;'><img style='width: 16px; height: 16px; display: inline-block; vertical-align: middle;' src='src/circular-gauge/images/positive.png' alt='Positive value for Germany'/>&nbsp;&nbsp;<p style='display: inline-block; vertical-align: sub; font-size:20px; font-family:Roboto;'>${pointers[0].value}%</p></div>");
                    usa.ej2_instances[0].setAnnotationValue(0, 0, "<div style='display: inline;margin-left: -10px;'><img style='width: 16px; height: 16px;display: inline-block; vertical-align: middle;' src='src/circular-gauge/images/positive.png' alt='Positive value for USA'/>&nbsp;&nbsp;<p style='display: inline-block; vertical-align: sub; font-size:20px; font-family:Roboto;'>${pointers[0].value}%</p></div>");
                    uk.ej2_instances[0].setAnnotationValue(0, 0, "<div style='display: inline;margin-left: -10px;'><img style='width: 16px; height: 16px; display: inline-block; vertical-align: middle;' src='src/circular-gauge/images/negative.png' alt='Negative value for UK'/>&nbsp;&nbsp;<p style='display: inline-block; vertical-align: sub; font-size:20px; font-family:Roboto;'>-${pointers[0].value}%</p></div>");
                } else {
                    clearInterval(this.toolTipInterval1);
                }
            }, 2000)
        }
    }
}
</script>
<style scoped>
.templateWrap {
    display: inline;
    margin-left: -10px;
}
.templateWrap img {
    width: 16px;
    height: 16px; 
    margin-top: 4px; 
    display: inline-block; 
    vertical-align: middle;
}
.gauge_text {
    display: inline-block; 
    vertical-align: sub; 
    color:#424242; 
    font-size:20px; 
    font-family:inherit;
}
</style>