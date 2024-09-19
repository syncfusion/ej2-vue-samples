<template>
   <main><div class="control-section">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12"
            style="display: flex;justify-content: center; align-items: center;">
            <div style="margin: auto;padding: 10px;">
                <table role="none">
                    <tbody>
                        <tr>
                            <td>
                                <div id='horizontal'
                                    style="padding:6px;cursor:pointer;width:86px;color:black;font-size:15px;border:1px solid #0074E3;background-color:white;text-align:center"
                                    @click="horizontal($event)" >Horizontal</div>
                            </td>
                            <td>
                                <div id='vertical'
                                    style="padding:6px;cursor:pointer;width:86px;color:white;font-size:15px;border:1px solid #0074E3;background-color: #0074E3;text-align:center"
                                  @click="vertical($event)"  >Vertical</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <pre style="background-color: inherit; border:hidden"></pre>
    <div id="containerBox" style="float: left;padding: 4%;"></div>
    <div id='container1' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge1" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title1' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer1' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks1' :line='line1' :minorTicks='minorTicks1' :ranges='range1'  :labelStyle='labelStyle1' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container2' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge2" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :title='title2' :titleStyle='titleStyle' :load='load' style='display:block' :width='widthData' :height='heightData' align='center' id='defaultContainer2' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks2' :minorTicks='minorTicks2' :line='line2' :ranges='range2'  :labelStyle='labelStyle2' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container3' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge3" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title3' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer3' :orientation='orientation' >
            <e-axes>
                <e-axis :majorTicks='majorTicks3' :minorTicks='minorTicks3' :line='line3' :ranges='range3'  :labelStyle='labelStyle3' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container4' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge4" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title4' :titleStyle='titleStyle' :height='heightData' style='display:block'  align='center' id='defaultContainer4' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks4' :minorTicks='minorTicks4' :ranges='range4' :line='line4' :labelStyle='labelStyle4' :opposedPosition='opposedPosition' >
                    <e-pointers>
                    <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container5' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge5" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title5' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer5' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks5' :minorTicks='minorTicks5' :line='line5' :ranges='range5' :labelStyle='labelStyle5' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample demonstrates the various customization options for the linear gauge's range. For example, an
        exponential appearance, a gradient color, and a multiple range.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure ranges in the linear gauge. The <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/rangeModel/">ranges</a> and <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/linearGradientModel/">
            linearGradient</a> are used to display multiple ranges, perform range customization, and apply gradient
        colors, respectively.
    </p>
    <p>
        More information on the ranges can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/ranges/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, Gradient, AxesDirective, PointersDirective, PointerDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective,
        'e-pointers': PointersDirective,
        'e-pointer': PointerDirective
    },
    data:function(){
    return{
        orientation:"Vertical",
        opposedPosition:true,
        title1:'Default',
        background:'transparent',
        title2:'Exponential',
        title3:'Concave',
        title4:'Gradient shader',
        title5:'Multiple ranges',
        range1: [{
            start: 0,
            end: 100,
            startWidth: 10,
            endWidth: 10,
            color: '#F45656',
            offset: 5
        }
        ],
        titleStyle: {
         fontFamily: 'inherit', fontWeight: '499'
        },
        width:0,
        widthData:'150px',
        heightData:'350px',
        majorTicks1: { 
          interval: 20, height: 7, width: 1, position:'Outside'
        },
        minorTicks1:{
            interval: 10, height: 3, position:'Outside'
        },
        labelStyle1:{
            font: {
                fontFamily: 'inherit'
            }, position:'Outside'
        },
        line1: {
         width:5
        },
        majorTicks2: { 
            interval: 20, height: 7, width: 1, position:'Outside'
        },
        minorTicks2:{
            interval: 10, height: 3, position:'Outside'
        },
        labelStyle2: { font: { fontFamily: 'inherit' }, position:'Outside' },
        line2: {
          width:5
        },
        range2:[{
            start: 0,
            end: 50,
            startWidth: 2,
            endWidth: 15,
            color: '#F45656',
            offset: 5
        }, {
            start: 50,
            end: 100,
            startWidth: 15,
            endWidth: 50,
            color: '#F45656',
            offset: 5
        }],
        majorTicks3: { 
            interval: 20, height: 7, width: 1, position:'Outside'
        },
        minorTicks3:{
            interval: 10, height: 3, position:'Outside'
        },
        labelStyle3:{
            position:'Outside', font: { fontFamily: 'inherit' }
        },
        line3: {
         width:5
        },
        range3: [{
            start: 0,
            end: 50,
            color: '#F45656',
            startWidth: 50, endWidth: 20,
            offset: 5
        }, {
            start: 50,
            end: 100,
            color: '#F45656',
            startWidth: 20, endWidth: 50,
            offset: 5
        }
        ],
        majorTicks4: { 
            interval: 20, height: 7, width: 1, position:'Outside'
        },
        minorTicks4:{
            interval: 10, height: 3, position:'Outside'
        },
        labelStyle4:{ font: { fontFamily: 'inherit' }, position:'Outside' },
        line4: { width:5 },
        range4:[
        {
            start: 0,
            end: 100,
            linearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: "#FB7D55", offset: "0%", opacity: 1 },
                    { color: "#ECC85B", offset: "50%", opacity: 1 },
                    { color: "#6FC78A", offset: "100%", opacity: 1 }]
            },
            startWidth: 50,
            endWidth: 50,
            offset: 5
        }
        ],
        majorTicks5: { 
            interval: 20, height: 7, width: 1, position: 'Outside'
        },
        minorTicks5:{
            interval: 10, height: 3, position: 'Outside'
        },
        labelStyle5:{ font: { fontFamily: 'inherit' }, position:'Outside' },
        line5: { width:5 },
        range5: [{
                start: 0,
                end: 30,
                color: '#FB7D55',
                startWidth: 50,
                endWidth: 50,
                offset: 5
            },
            {
                start: 30,
                end: 65,
                color: '#ECC85B',
                startWidth: 50,
                endWidth: 50,
                offset: 5
            },
            {
                start: 65,
                end: 100,
                color: '#6FC78A',
                startWidth: 50,
                endWidth: 50,
                offset: 5
            }
        ]
    }
},
provide: {
    lineargauge: [Gradient]
},
methods: {
    horizontal(event) {
        document.getElementById('containerBox').style.padding = "0%";
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className =
        document.getElementById('container5').className = "col-xs-12 col-sm-12 col-lg-12 col-md-12";
        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge3.ej2Instances.width = this.$refs.lineargauge4.ej2Instances.width = this.$refs.lineargauge5.ej2Instances.width = '450px';
        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = this.$refs.lineargauge4.ej2Instances.height = this.$refs.lineargauge5.ej2Instances.height = '150px';
        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = this.$refs.lineargauge4.ej2Instances.orientation = this.$refs.lineargauge5.ej2Instances.orientation = "Horizontal";
        if (event.currentTarget != null) {
            event.currentTarget['style']['color'] = "white";
            event.currentTarget['style']['backgroundColor'] = "#0074E3";
            document.getElementById('vertical').style.color = "black";
            document.getElementById('vertical').style.backgroundColor = "white";            
        }
    },
    vertical(event) {
        document.getElementById('containerBox').style.padding = "4%";
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className =
        document.getElementById('container5').className = "col-xs-4 col-sm-4 col-lg-2 col-md-2"; 
        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge3.ej2Instances.width = this.$refs.lineargauge4.ej2Instances.width = this.$refs.lineargauge5.ej2Instances.width = '150px';
        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = this.$refs.lineargauge4.ej2Instances.height = this.$refs.lineargauge5.ej2Instances.height = '350px';
        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = this.$refs.lineargauge4.ej2Instances.orientation = this.$refs.lineargauge5.ej2Instances.orientation = "Vertical";
        if (event.currentTarget != null) {
            event.currentTarget['style']['color'] = "white";
            event.currentTarget['style']['backgroundColor'] = "#0074E3";
            document.getElementById('horizontal')['style']['color'] = "black";
            document.getElementById('horizontal')['style']['backgroundColor'] = "white";                       
        }
    },
    load: function(args) {
    /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
    /* custom code end */
    }
}
};
</script>