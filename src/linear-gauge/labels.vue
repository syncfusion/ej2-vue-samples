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
        <ejs-lineargauge ref="lineargauge1" :animationDuration=1500 :background='background' :load='load' :width='widthData' :title='title1' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer1' :orientation='orientation'>
            <e-axes>
                <e-axis :minimum='min' :maximum='max' :majorTicks='majorTicks1' :line='line1' :minorTicks='minorTicks1' :labelStyle='labelStyle1' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container2' class="col-xs-5 col-sm-5 col-lg-3 col-md-3"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge2" :background='background'  :axisLabelRender='labelRender' :title='title2' :titleStyle='titleStyle' :load='load' style='display:block' :width='widthData' :height='heightData' align='center' id='defaultContainer2' :orientation='orientation'>
            <e-axes>
                <e-axis :minimum=5 :maximum=20 :majorTicks='majorTicks2' :pointers='pointers2'  :ranges='ranges' :minorTicks='minorTicks2' :line='line2' :labelStyle='labelStyle2' :opposedPosition='opposedPosition' >
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container3' class="col-xs-5 col-sm-5 col-lg-3 col-md-3"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge3" :animationDuration=1500 :background='background' :load='load' :width='widthData' :title='title3' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer3' :orientation='orientation' >
            <e-axes>
                <e-axis :minimum=0 :maximum=100  :majorTicks='majorTicks3' :minorTicks='minorTicks3' :line='line3' :labelStyle='labelStyle3' :opposedPosition='opposedPosition' >
                    <e-pointers>
                        <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container4' class="col-xs-5 col-sm-5 col-lg-3 col-md-3"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge4" :animationDuration=1500 :background='background' :load='load' :width='widthData' :title='title4' :titleStyle='titleStyle' :height='heightData' style='display:block'  align='center' id='defaultContainer4' :orientation='orientation'>
            <e-axes>
                <e-axis :minimum=0 :maximum=100  :majorTicks='majorTicks4' :minorTicks='minorTicks4' :line='line4'  :labelStyle='labelStyle4' :opposedPosition='opposedPosition' >
                    <e-pointers>
                    <e-pointer :width='width' ></e-pointer>
                    </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates the various options for customizing the axis labels, such as styling, formatting,
        replacing text, and setting offset in the linear gauge.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure axis labels in the linear gauge. The properties in the
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/labelModel/">labelStyle</a> can be
        used to style, format, and offset the label, while the label's text can be changed
        dynamically via the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#axislabelrender">
            axisLabelRender</a> event.
    </p>
    <p>
        More information on the axis labels can be found in this
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/axis/#labels-customization">documentation
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
        title1:'Custom labels',
        title2:'Text labels',
        title3:'Label offset',
        title4:'Label customization',
        titleStyle: {
         fontFamily: 'inherit', fontWeight: '499'
        },
        width:0,
        widthData:'150px',
        heightData:'350px',
        min:5,
        max:20,
        majorTicks1: { 
           interval: 5, height: 7, width: 1
        },
        minorTicks1:{
           interval: 2.5, height: 3
        },
        labelStyle1:{ format: '${value}', font: { fontFamily: 'inherit' } 
        },
        line1: {
         width:5
        },
        majorTicks2: { 
            interval: 5, height: 0
        },
        minorTicks2:{
            interval: 2.5, height: 3, position: 'Cross'
        },
        labelStyle2: { offset:10, font: { fontFamily: 'inherit' } },
        line2: {
         width:5
        },
        ranges: [{
            start: 10,
            end: 15,
            startWidth: 5,
            endWidth: 5,
            color: '#0DC9AB'
        },
        {
            start: 15,
            end: 20,
            startWidth: 5,
            endWidth: 5,
            color: '#0DC9AB'
        }
        ],
        pointers2: [{
            width: 15,
            height: 15,
            value: 20,
            color: '#0DC9AB',
            placement: 'Near',
            markerType: 'Circle',
            offset: 7
        }, {
            width: 15,
            height: 15,
            value: 15,
            color: '#0DC9AB',
            placement: 'Near',
            markerType: 'Circle',
            offset: 7
        },
        {
            width: 15,
            height: 15,
            value: 10,
            color: '#0DC9AB',
            placement: 'Near',
            markerType: 'Circle',
            offset: 7
        },
        {
            width: 15,
            height: 15,
            value: 5,
            color: '#E5E7EB',
            placement: 'Near',
            markerType: 'Circle',
            offset: 7
        }
        ],
        majorTicks3: { 
             interval: 20, height: 7, width: 1
        },
        minorTicks3:{
              interval: 10, height: 3
        },
        labelStyle3:{
            offset: 5,
            font: { fontFamily: 'inherit' }
        },
        line3: {
         width:5
        },
        majorTicks4: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks4:{
            interval: 10, height: 3
        },
        labelStyle4:{
            font:  { fontFamily: 'inherit', color: '#F93106' }
        },
        line4: {
         width:5
        }
    }
},
methods: {
    labelRender : function(args) {
        if (args.text == "20")
            args.text = "Ordered";
        else if (args.text == "15")
            args.text = "Packed";
        else if (args.text == "10")
            args.text = "Shipped";
        else if (args.text == "5")
            args.text = "Delivered";
        else
            args.text = " ";
    },
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