<template>
   <div class="control-section">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12"
            style="display: flex;justify-content: center; align-items: center;">
            <div style="margin: auto;padding: 10px;">
                <table>
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
    <div id="containerBox"></div>
    <div id='container1' class="col-xs-5 col-sm-5 col-lg-3 col-md-3"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge1" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title1' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer1' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks1' :line='line1' :minorTicks='minorTicks1' :labelStyle='labelStyle1' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container2' class="col-xs-5 col-sm-5 col-lg-3 col-md-3"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge2" :animationDuration=2000 :background='background'  :minimum=0 :maximum=100  :title='title2' :titleStyle='titleStyle' :load='load' style='display:block' :width='widthData' :height='heightData' align='center' id='defaultContainer2' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks2' :minorTicks='minorTicks2' :line='line2' :labelStyle='labelStyle2'>
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container3' class="col-xs-5 col-sm-5 col-lg-3 col-md-3"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge3" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title3' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer3' :orientation='orientation' >
            <e-axes>
                <e-axis :majorTicks='majorTicks3' :minorTicks='minorTicks3' :line='line3' :isInversed='isInversed3'   :labelStyle='labelStyle3' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container4' class="col-xs-5 col-sm-5 col-lg-3 col-md-3"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge4" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title4' :titleStyle='titleStyle' :height='heightData' style='display:block'  align='center' id='defaultContainer4' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks4' :minorTicks='minorTicks4' :line='line4' :isInversed='isInversed4' :labelStyle='labelStyle4' :opposedPosition='opposedPosition' >
                    <e-pointers>
                    <e-pointer :width='width'></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
<div id="action-description">
    <p>
        This sample shows ticks in various positions such as inside, middle, and outside. Additionally, the position of
        the ticks can be customized using offset.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure ticks in the linear gauge. The <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tickModel/#position">position</a>
        and <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tickModel/#offset">offset</a>
        properties in <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tickModel/">majorTicks</a> and <a
            target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tickModel/">
            minorTicks</a> are used to position the ticks as well as provide offset.
    </p>
    <p>
        More information on the ticks can be found in this
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/axis/#ticks-customization">documentation
            section</a>.
    </p>
</div>
</div>
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
        opposedPosition:true,
        background:'transparent',
        title1:'Outside ticks',
        title2:'Cross ticks',
        title3:'Inside ticks',
        title4:'Ticks with offset',
        titleStyle: {
         fontFamily: 'inherit', fontWeight: '499'
        },
        width:0,
        widthData:'150px',
        heightData:'350px',
        majorTicks1: { 
           interval: 20, height: 7, width: 1, position: 'Outside'
        },
        minorTicks1:{
            interval: 10, height: 3, position: 'Outside'
        },
        labelStyle1:{
            position: 'Outside', font: { fontFamily: 'inherit' }
        },
        line1:
        {
         width:5
        },
        majorTicks2: { 
            interval: 20, height: 7, width: 1, position: 'Cross'
        },
        minorTicks2:{
            interval: 10, height: 3, position: 'Cross'
        },
        labelStyle2: { font: { fontFamily: 'inherit' } },
        line2: {
         width:5
        },
        majorTicks3: { 
             interval: 20, height: 7, width: 1, position: 'Inside'
        },
        minorTicks3: {
              interval: 10, height: 3, position: 'Inside'
        },
        labelStyle3: {
            font: { fontFamily: 'inherit' }
        },
        line3: {
         width:5
        },
        isInversed3:true,
        majorTicks4: { 
            interval: 20, height: 7, width: 1, position: 'Inside', offset: 10
        },
        minorTicks4:{
            interval: 10, height: 3, position: 'Inside', offset: 10
        },
        labelStyle4:{
            font: { fontFamily: 'inherit' }
        },
        line4: {
         width:5
        },
        isInversed4:true
    }
},
methods: {
    horizontal(event) {
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className = "col-xs-12 col-sm-12 col-lg-12 col-md-12";
        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge3.ej2Instances.width = this.$refs.lineargauge4.ej2Instances.width  = '450px';
        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = this.$refs.lineargauge4.ej2Instances.height  = '150px';
        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = this.$refs.lineargauge4.ej2Instances.orientation = "Horizontal";
        if (event.currentTarget != null) {
            event.currentTarget['style']['color'] = "white";
            event.currentTarget['style']['backgroundColor'] = "#0074E3";
            document.getElementById('vertical').style.color = "black";
            document.getElementById('vertical').style.backgroundColor = "white";
            
        }
    },
    vertical(event) {
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className = "col-xs-5 col-sm-5 col-lg-3 col-md-3"; 
        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge3.ej2Instances.width = this.$refs.lineargauge4.ej2Instances.width = '150px';
        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = this.$refs.lineargauge4.ej2Instances.height = '350px';
        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = this.$refs.lineargauge4.ej2Instances.orientation = "Vertical";
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
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    /* custom code end */
    }
}
};
</script>