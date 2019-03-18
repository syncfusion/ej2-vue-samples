<template>
<div>
<div class="control-section">
<ejs-lineargauge ref="lineargauge" style='display:block' align='center' id='annotationContainer' :load='gaugeLoad' :rangePalettes='rangePalettes' :orientation='orientation'>
    <e-axes>
        <e-axis :maximum='maximum' :labelStyle='labelStyle' :line='line' :majorTicks='majorTicks' :minorTicks='minorTicks' :ranges='ranges'>
            <e-pointers>
                <e-pointer :value='value' :height='height' :width='width' :color='color' :placement='placement' :markerType='markerType' :offset='offset'></e-pointer>
            </e-pointers>
        </e-axis>
    </e-axes>
</ejs-lineargauge>
</div>
<div id="action-description">
    <p>
        This sample illustrates the CPU Utilization of a resource by using annotation feature.
    </p>
</div>
<div id="description">
    In this sample we have used annotations to indicate low, moderate and high ranges. Annotations are used to place the texts,
    shapes or images anywhere in the gauge. You can use
    <code>content</code>,
    <code>x</code>,
    <code>y</code>,
    <code>zIndex</code> properties to customize the annotations. And you can specify the id of the element that needs to be displayed, in the
    content property.
    <br>
    <p style="font-weight: 500 ">Injecting Module</p>
    Linear gauge component features are segregated into individual feature-wise modules. To render annotations, we need to inject
    <code>Annotations</code> module using
    <code>LinearGauge.Inject(LinearGauge)</code> method. More information about annotations can be found in this
    <a target="_blank " href="http://ej2.syncfusion.com/documentation ">documentation section</a>.
</div>
</div>
</template>
<style>
    #control-container {
        padding: 0px !important;
    }

    #templateWrap img {
        border-radius: 30px;
        width: 30px;
        height: 30px;
        margin: 0 auto;
    }
    #templateWrap .des {
        float: right;
        padding-left: 10px;
        line-height: 30px;
    }
    p {
        padding: 0.5em;
        font-size: 16px;
    }
    #targetContainer .text-center {
        color: rgba(0, 0, 0, 0.54);
    }
</style>
<script>
import Vue from "vue";
import { LinearGaugePlugin, Annotations } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default Vue.extend({
data:function(){
    return{
        rangePalettes: ['#30b32d', '#ffdd00', '#f03e3e'],
        orientation: 'Horizontal',
        maximum: 90,
        labelStyle: {
            font: {
            size: '0px'
                }   
        },
        line: {
        width: 0
        },
        value: 35,
        height: 15,
        width: 15,
        color: '#757575',
        placement: 'Near',
        markerType: 'Triangle',
        offset: -50,
        majorTicks: {
                interval: 10,
                height: 0
            },
            minorTicks: {
                height: 0
            },
            ranges: [{
                start: 0,
                end: 30,
                startWidth: 50,
                endWidth: 50
            },
            {
                start: 30,
                end: 60,
                startWidth: 50,
                endWidth: 50
            },
            {
                start: 60,
                end: 90,
                startWidth: 50,
                endWidth: 50
            }]
    }
},
provide: {
    lineargauge: [Annotations]
},
methods: {
    /* custom code start */
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    gaugeLoad: function(args){
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.gauge.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    /* custom code end */
    let count = 0;
    if (this.count === undefined) {
    this.$refs.lineargauge.ej2Instances.annotations = [
            {
                content: '<div id="title" style="width:200px;"><p style="font-size:18px;">CPU Utilization</p></div>',
                horizontalAlignment: 'Center',
                x: 35, zIndex: '1',
                y: 50
            },
            {
                content: '<div id="low"><img style="height:25px;width:25px;" src="src/linear-gauge/images/low.png"/></div>',
                axisIndex: 0,
                axisValue: 15,
                y: -25,
                zIndex: '1'
            },
            {
                content: '<div id="moderate"><img style="height:25px;width:25px;" src="src/linear-gauge/images/moderate.png"/></div>',
                axisIndex: 0,
                axisValue: 45,
                y: -25,
                zIndex: '1'
            },
            {
                content: '<div id="high"><img style="height:25px;width:25px;" src="src/linear-gauge/images/high.png"/></div>',
                axisIndex: 0,
                axisValue: 75,
                y: -25,
                zIndex: '1'
            },
            {
                content: '<div id="lowText"><p style="font-size:15px;color:#248622;">Low</p></div>',
                axisIndex: 0, zIndex: '1',
                axisValue: 15,
                y: 20
            },
            {
                content: '<div id="moderateText"><p style="font-size:15px;color:#ba9e2a;">Moderate</p></div>',
                axisIndex: 0, zIndex: '1',
                axisValue: 45,
                y: 20
            },
            {
                content: '<div id="highText"><p style="font-size:15px;color:#b42f2f;">High</p></div>',
                axisIndex: 0, zIndex: '1',
                axisValue: 75,
                y: 20
            }
        ];
        this.count = 0;
        this.$refs.lineargauge.ej2Instances.refresh();
    }
    }
}
})
</script>

