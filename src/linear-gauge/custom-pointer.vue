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
    <div id="containerBox" tyle="float: left;"></div>
    <div id='container1' class="col-xs-5 col-sm-5 col-lg-4 col-md-4"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge1" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData' :annotations='annotations1'  :title='title1' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer1' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks1' :pointers='pointer1' :line='line1' :minorTicks='minorTicks1' :labelStyle='labelStyle1' :opposedPosition='opposedPosition' >
                <e-pointers>
                    <e-pointer :width='width' ></e-pointer>
                </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container2' class="col-xs-5 col-sm-5 col-lg-4 col-md-4"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge2" :animationDuration=2000 :background='background' :minimum=0 :maximum=100  :title='title2' :titleStyle='titleStyle' :load='load' style='display:block' :width='widthData' :height='heightData' align='center' id='defaultContainer2' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks2' :pointers='pointer2' :minorTicks='minorTicks2' :line='line2' :labelStyle='labelStyle2' :opposedPosition='opposedPosition' >
                <e-pointers>
                    <e-pointer :width='width' ></e-pointer>
                </e-pointers>
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container3' class="col-xs-5 col-sm-5 col-lg-4 col-md-4"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge3" :animationDuration=2000 :background='background' :minimum=0 :maximum=100 :load='load' :width='widthData3' :annotations='annotations2'  :title='title3' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='defaultContainer3' :orientation='orientation' >
            <e-axes>
                <e-axis :majorTicks='majorTicks3' :pointers='pointer3' :minorTicks='minorTicks3' :line='line3' :labelStyle='labelStyle3' :opposedPosition='opposedPosition' >
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
        This sample demonstrates the inclusion of text and image pointers in the linear gauge. Additionally, multiple
        pointer support is enabled.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure text and image pointers in the linear gauge. The
        properties available in <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointerModel/">pointers</a> and <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/annotationModel/">annotations</a>
        help in the customization of the text and image pointers in the linear gauge.
    </p>
    <p>
        More information on the pointers can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/pointers/">documentation section</a>.
    </p>
</section>
</main>
</template>
<script>
import { LinearGaugeComponent, AxisDirective, Annotations, AxesDirective, PointersDirective, PointerDirective } from "@syncfusion/ej2-vue-lineargauge";

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
        title1:'Text widget',
        title2:'Icon widget',
        title3:'Multiple widget pointers',
        titleStyle: {
         fontFamily: 'inherit', fontWeight: '499'
        },
        width:0,
        widthData:'150px',
        widthData3:'160px',
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
         width:20
        },
        pointer1:[{
            width: 30,
            value: 55,
            offset: -2,
            color: '#173BBB',
            position: 'Cross',
            placement: 'Center',
            markerType: 'Circle',
        }
        ],
        annotations1:[{
        axisIndex: 0,
        axisValue: 55,
        x: 0,
        y: 0,
        zIndex: 1,
        content: '<div style="font-size: 12px;color: white;margin-left: -2px;margin-top:1px;"> 55 </div>'
       }],
        majorTicks2: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks2:{
            interval: 10, height: 3
        },
        labelStyle2: { font: { fontFamily: 'inherit' } },
        line2: {
         width:20
        },
        pointer2:[{
            width: 45,
            value: 90,
            height: 30,
            placement: 'Near',
            markerType: 'Image',
            imageUrl: 'src/linear-gauge/images/thumb-icon.png'
        }
        ],
        majorTicks3: { 
             interval: 20, height: 7, width: 1
        },
        minorTicks3:{
              interval: 10, height: 3
        },
        labelStyle3:{
            font: { fontFamily: 'inherit', fontWeight:'normal' }
        },
        line3: {
         width:20
        },
        pointer3:[{
            width: 30,
            value: 60,
            offset: -2,
            placement: 'Center',
            position: 'Cross',
            markerType: 'Circle',
            color: '#173BBB'
        }, {
            width: 45,
            height: 30,
            value: 30,
            placement: 'Near',
            markerType: 'Image',
            color: '#173BBB',
            imageUrl: 'src/linear-gauge/images/thumb-icon.png'
        }
        ],
        annotations2:[{
        axisIndex: 0,
        axisValue: 60,
        x: 0,
        y: 0,
        zIndex: 1,
        content: '<div style="font-size: 12px;color: white;margin-left: -2px;margin-top:1px;"> 60 </div>'
       }],
}
},
provide: {
    lineargauge: [Annotations]
},
methods: {
    horizontal(event) {
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = "col-xs-12 col-sm-12 col-lg-12 col-md-12";
        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge3.ej2Instances.width = '450px';
        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = '150px';
        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = "Horizontal";
        this.$refs.lineargauge1.ej2Instances.axes[0].pointers[0].offset = 2;
        this.$refs.lineargauge3.ej2Instances.axes[0].pointers[0].offset = 2;
        if (event.currentTarget != null) {
            event.currentTarget['style']['color'] = "white";
            event.currentTarget['style']['backgroundColor'] = "#0074E3";
            document.getElementById('vertical').style.color = "black";
            document.getElementById('vertical').style.backgroundColor = "white";            
        }
    },
    vertical(event) {
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = "col-xs-5 col-sm-5 col-lg-4 col-md-4"; 
        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = '150px';
        this.$refs.lineargauge3.ej2Instances.width = '160px';
        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = '350px';
        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = "Vertical";
        this.$refs.lineargauge1.ej2Instances.axes[0].pointers[0].offset = -2;
        this.$refs.lineargauge3.ej2Instances.axes[0].pointers[0].offset = -2;
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