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
             <ejs-lineargauge ref="lineargauge1" :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title1' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer1' :orientation='orientation'>
                <e-axes>
                    <e-axis :majorTicks='majorTicks1' :line='line1' :minorTicks='minorTicks1' :labelStyle='labelStyle1' :opposedPosition='opposedPosition' >
                        <e-pointers>
                            <e-pointer :width='width' ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
             </ejs-lineargauge>
    </div>
    <div id='container2' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge2" :background='background' :minimum=0 :maximum=100 :container= 'container2' :title='title2' :titleStyle='titleStyle' :load='load' style='display:block' :width='widthData' :height='heightData' align='center' id='defaultContainer2' :orientation='orientation'>
        <e-axes>
            <e-axis :majorTicks='majorTicks2' :minorTicks='minorTicks2' :line='line2' :labelStyle='labelStyle2' :opposedPosition='opposedPosition' >
                <e-pointers>
                    <e-pointer :width='width' ></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container3' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge3" :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title3' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer3' :orientation='orientation' >
        <e-axes>
            <e-axis :majorTicks='majorTicks3' :minorTicks='minorTicks3' :line='line3' :ranges='range'  :labelStyle='labelStyle3' :opposedPosition='opposedPosition' >
                <e-pointers>
                    <e-pointer :width='width' ></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container4' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge4" :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title4' :titleStyle='titleStyle' :height='heightData' style='display:block'  align='center' id='defaultContainer4' :orientation='orientation'>
        <e-axes>
            <e-axis :majorTicks='majorTicks4' :minorTicks='minorTicks4' :line='line4' :isInversed='isInversed4' :labelStyle='labelStyle4' :opposedPosition='opposedPosition' >
                <e-pointers>
                  <e-pointer :width='width' ></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container5' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge5" :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title5' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer5' :orientation='orientation'>
        <e-axes>
            <e-axis :majorTicks='majorTicks5' :minorTicks='minorTicks5' :line='line5' :labelStyle='labelStyle5' :opposedPosition='opposedPosition' >
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
        This sample demonstrates the basic axis, its edge style, range color for axis, inversed and opposed axis.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure axis in the linear gauge. The <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/containerModel/#roundedcornerradius">
            roundedCornerRadius</a>, <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/labelModel/#userangecolor">
            useRangeColor</a>, <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/axisModel/#isinversed">
            isInversed</a>, and <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/axisModel/#opposedposition">
            opposedPosition</a> properties can be used to set the edge style, range color for axis, inversed and opposed
        axis respectively.
    </p>
    <p>
        More information on the axis can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/axis/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, AxesDirective, PointersDirective, PointerDirective } from "@syncfusion/ej2-vue-lineargauge";

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
        background:'transparent',
        opposedPosition:true,
        title1:'Default axis',
        title2:'Edge style',
        title3:'Range color for axis',
        title4:'Inversed axis',
        title5:'Opposed axis',
        range: [{
            start: 0,
            end: 30,
            color: '#F45656',
            startWidth: 5, endWidth: 5,
            offset: -5
        }, {
            start: 30,
            end: 60,
            color: '#FFC93E',
            startWidth: 5, endWidth: 5,
            offset: -5
        }, {
            start: 60,
            end: 100,
            color: '#0DC9AB',
            startWidth: 5, endWidth: 5,
            offset: -5
        }
        ],
        titleStyle: {
         fontFamily: 'inherit', fontWeight: '499'
        },
        width:0,
        widthData:'150px',
        heightData:'350px',
        majorTicks1: { 
          interval: 20, height: 7, width: 1
        },
        minorTicks1:{
            interval: 10, height: 3
        },
        labelStyle1:{
            font: { fontFamily: 'inherit' }
        },
        line1: {
         width:5
        },
        majorTicks2: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks2:{
            interval: 10, height: 3
        },
        labelStyle2: { font: { fontFamily: 'inherit' }, useRangeColor: true },
        line2: {
         width:0
        },
        container2:{
        width: 20, roundedCornerRadius: 10, type: 'RoundedRectangle', border: { width: 1 }
        },
        majorTicks3: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks3:{
            interval: 10, height: 3
        },
        labelStyle3:{
            useRangeColor: true, font: { fontFamily: 'inherit' }
        },
        line3: {
         width:0
        },
        majorTicks4: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks4:{
            interval: 10,height: 3
        },
        labelStyle4:{
            font: { fontFamily: 'inherit' }
        },
        line4: {
         width:5
        },
        isInversed4:true,
        majorTicks5: { 
            interval: 20, height: 7, width: 1, position: 'Outside'
        },
        minorTicks5:{
            interval: 10, height: 3, position: 'Outside'
        },
        labelStyle5:{
            position: 'Outside',
            font: { fontFamily: 'inherit' }
        },
        line5: {
         width:5
        }
    }
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