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
        <ejs-lineargauge ref="lineargauge1" :animationDuration=2000 :background='background' :dragMove='dragMove1' :dragStart='dragStart1' :dragEnd='dragEnd1' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title1' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='gaugeTriangle' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks1' :pointers='pointer1' :line='line1' :minorTicks='minorTicks1' :labelStyle='labelStyle1' :opposedPosition='opposedPosition' >
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container2' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge2" :animationDuration=2000 :background='background' :dragMove='dragMove2' :dragStart='dragStart2' :dragEnd='dragEnd2' :minimum=0 :maximum=100 :title='title2' :titleStyle='titleStyle' :load='load' style='display:block' :width='widthData' :height='heightData' align='center' id='gaugeCircle' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks2' :pointers='pointer2' :minorTicks='minorTicks2' :line='line2' :labelStyle='labelStyle2' :opposedPosition='opposedPosition' >
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container4' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge4" :animationDuration=2000 :background='background' :dragMove='dragMove4' :dragStart='dragStart4' :dragEnd='dragEnd4' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title4' :titleStyle='titleStyle' :height='heightData' style='display:block'  align='center' id='gaugeRectangle' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks4' :pointers='pointer4' :minorTicks='minorTicks4' :line='line4' :labelStyle='labelStyle4' :opposedPosition='opposedPosition' >
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
    <div id='container3' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
    style="display: flex;justify-content: center; align-items: center;">
    <ejs-lineargauge ref="lineargauge3" :animationDuration=2000 :background='background' :dragMove='dragMove3' :dragStart='dragStart3' :dragEnd='dragEnd3' :minimum=0 :maximum=100 :load='load' :width='widthText' :title='title3' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='gaugeDiamond' :orientation='orientation' >
        <e-axes>
            <e-axis :majorTicks='majorTicks3' :pointers='pointer3' :minorTicks='minorTicks3' :line='line3' :labelStyle='labelStyle3' :opposedPosition='opposedPosition' >
            </e-axis>
        </e-axes>
    </ejs-lineargauge>
    </div>
    <div id='container5' class="col-xs-4 col-sm-4 col-lg-2 col-md-2"
        style="display: flex;justify-content: center; align-items: center;">
        <ejs-lineargauge ref="lineargauge5" :animationDuration=2000 :background='background' :dragMove='dragMove5' :dragStart='dragStart5' :dragEnd='dragEnd5' :minimum=0 :maximum=100 :load='load' :width='widthData' :title='title5' :titleStyle='titleStyle' :height='heightData' style='display:block' align='center' id='gaugeMultiple' :orientation='orientation'>
            <e-axes>
                <e-axis :majorTicks='majorTicks5' :pointers='pointer5' :minorTicks='minorTicks5' :line='line5' :labelStyle='labelStyle5' :opposedPosition='opposedPosition' >
                </e-axis>
            </e-axes>
        </ejs-lineargauge>
    </div>
</div>
<section id="action-description" aria-label="Description of Linear Gauge sample">
    <p>
        This sample shows the various marker pointer shapes available in the linear gauge. Additionally, multiple marker
        pointer, animation and drag support are enabled.
    </p>
</section>
<section id="description" aria-label="Description of the Linear Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to render and configure marker pointer in the linear gauge. The <a
            target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointerModel/">
            pointers</a> collection is useful for displaying multiple pointers. The properties available in <a
            target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointerModel/">
            pointers</a> help in the customization of the marker pointer in the linear gauge. Drag pointers are
        assisted by the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#dragstart">dragStart</a> and <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#dragend">dragEnd</a> events.
    </p>
    <p>
        More information on the marker pointer can be found in this
        <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/linear-gauge/pointers/#marker-pointer">documentation
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
        opposedPosition:true,
        title1:'Inverted triangle',
        background:'transparent',
        title2:'Circle',
        title3:'Text',
        title4:'Rectangle',
        title5:'Multiple pointers',

        titleStyle: {
         fontFamily: 'inherit', fontWeight: '499'
        },
        widthData:'150px',
        widthText:'168px',
        heightData:'350px',
        majorTicks1: { 
          interval: 20, height: 7, width: 1
        },
        minorTicks1:{
            interval: 10, height: 3
        },
        labelStyle1:{
            font: {
                fontFamily: 'inherit'
            }
        },
        line1: {
         width:5
        },
        pointer1: [{
            width: 5,
            value: 40,
            height: 5,
            placement: 'Near',
            type: 'Bar',
            offset: 12,
            color: '#0074E3',
            animationDuration: 1500
        }, {
            width: 15,
            value: 40,
            height: 15,
            enableDrag: true,
            placement: 'Near',
            markerType: 'Triangle',
            animationDuration: 1500
         }
        ],
        majorTicks2: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks2:{
            interval: 10, height: 3
        },
        labelStyle2: { font: { fontFamily: 'inherit' } },
        line2: {
         width:5
        },
        pointer2: [{
            width: 5,
            value: 20,
            height: 5,
            placement: 'Near',
            type: 'Bar',
            offset: 12,
            color: '#0074E3',
            animationDuration: 1500
        }, {
            width: 15,
            value: 20,
            height: 15,
            enableDrag: true,
            placement: 'Near',
            markerType: 'Circle',
            animationDuration: 1500
         }
        ],
        majorTicks3: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks3:{
            interval: 10, height: 3
        },
        labelStyle3:{
            font: { fontFamily: 'inherit' }
        },
        line3: {
         width:5
        },
        pointer3: [{
            width: 5,
            value: 50,
            height: 5,
            placement: 'Near',
            type: 'Bar',
            offset: 12,
            color: '#0074E3',
            animationDuration: 1500
        }, {
            width: 15,
            value: 50,
            height: 15,
            enableDrag: true,
            placement: 'Near',
            markerType: 'Text',
            offset:-10,
            text:'50 Points',
            animationDuration: 1500
         }
        ],
        majorTicks4: { 
            interval: 20,
            height: 7,
            width: 1
        },
        minorTicks4:{
            interval: 10,
            height: 3
        },
        labelStyle4:{
            font: { fontFamily: 'inherit' }
        },
        line4: {
         width:5
        },
        pointer4: [{
            width: 5,
            value: 30,
            height: 5,
            placement: 'Near',
            type: 'Bar',
            offset: 12,
            color: '#0074E3',
            animationDuration: 1500
        }, {
            width: 15,
            value: 30,
            height: 5,
            enableDrag: true,
            placement: 'Near',
            markerType: 'Rectangle',
            animationDuration: 1500
         }
        ],
        majorTicks5: { 
            interval: 20, height: 7, width: 1
        },
        minorTicks5:{
            interval: 10, height: 3
        },
        labelStyle5:{
            font: { fontFamily: 'inherit' }
        },
        line5: {
         width:5
        },
        pointer5: [{
            width: 5,
            value: 10,
            height: 5,
            placement: 'Near',
            type: 'Bar',
            offset: 12,
            color: '#0074E3',
            animationDuration: 1500
        }, {
            width: 15,
            value: 10,
            height: 15,
            enableDrag: true,
            placement: 'Near',
            markerType: 'Triangle',
            animationDuration: 1500
        }, {
            width: 15,
            value: 100,
            height: 15,
            enableDrag: true,
            placement: 'Near',
            markerType: 'Diamond',
            animationDuration: 1500
         }
        ]
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
        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge4.ej2Instances.width = this.$refs.lineargauge5.ej2Instances.width = '150px';
        this.$refs.lineargauge3.ej2Instances.width = '168px';
        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = this.$refs.lineargauge4.ej2Instances.height = this.$refs.lineargauge5.ej2Instances.height = '350px';
        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = this.$refs.lineargauge4.ej2Instances.orientation = this.$refs.lineargauge5.ej2Instances.orientation = "Vertical";
        if (event.currentTarget != null) {
            event.currentTarget['style']['color'] = "white";
            event.currentTarget['style']['backgroundColor'] = "#0074E3";
            document.getElementById('horizontal')['style']['color'] = "black";
            document.getElementById('horizontal')['style']['backgroundColor'] = "white";                       
        }
    },
    dragEnd1: function(args) {
        this.$refs.lineargauge1.ej2Instances.axes[0].pointers[0].animationDuration = 1500;
        this.$refs.lineargauge1.ej2Instances.axes[0].pointers[1].animationDuration = 1500;
    },
    dragStart1: function(args) {
        this.$refs.lineargauge1.ej2Instances.axes[0].pointers[0].animationDuration = 0;
        this.$refs.lineargauge1.ej2Instances.axes[0].pointers[1].animationDuration = 0;
    },
    dragMove1: function(args) {
        if (args.pointerIndex == 1) {
            this.$refs.lineargauge1.ej2Instances.setPointerValue(0, 0, args.currentValue);
        }
    },
    dragEnd2: function(args) {
        this.$refs.lineargauge2.ej2Instances.axes[0].pointers[0].animationDuration = 1500;
        this.$refs.lineargauge2.ej2Instances.axes[0].pointers[1].animationDuration = 1500;
    },
    dragStart2: function(args) {
        this.$refs.lineargauge2.ej2Instances.axes[0].pointers[0].animationDuration = 0;
        this.$refs.lineargauge2.ej2Instances.axes[0].pointers[1].animationDuration = 0;
    },
    dragMove2: function(args){
        if (args.pointerIndex == 1) {
            this.$refs.lineargauge2.ej2Instances.setPointerValue(0, 0, args.currentValue);
        }
    },
    dragEnd3: function(args) {
        this.$refs.lineargauge3.ej2Instances.axes[0].pointers[0].animationDuration = 1500;
        this.$refs.lineargauge3.ej2Instances.axes[0].pointers[1].animationDuration = 1500;
    },
    dragStart3: function(args) {
        this.$refs.lineargauge3.ej2Instances.axes[0].pointers[0].animationDuration = 0;
        this.$refs.lineargauge3.ej2Instances.axes[0].pointers[1].animationDuration = 0;
    },
    dragMove3: function(args){
        if (args.pointerIndex == 1) {
            this.$refs.lineargauge3.ej2Instances.axes[0].pointers[1].text = Math.round(args.currentValue).toString() + " Points";
            this.$refs.lineargauge3.ej2Instances.setPointerValue(0, 0, args.currentValue);
        }
    },
    dragEnd4: function(args) {
        this.$refs.lineargauge4.ej2Instances.axes[0].pointers[0].animationDuration = 1500;
        this.$refs.lineargauge4.ej2Instances.axes[0].pointers[1].animationDuration = 1500;
    },
    dragStart4: function(args) {
        this.$refs.lineargauge4.ej2Instances.axes[0].pointers[0].animationDuration = 0;
        this.$refs.lineargauge4.ej2Instances.axes[0].pointers[1].animationDuration = 0;
    },
    dragMove4: function(args){
        if (args.pointerIndex == 1) {
            this.$refs.lineargauge4.ej2Instances.setPointerValue(0, 0, args.currentValue);;
        }
    },
    dragEnd5: function(args) {
        this.$refs.lineargauge5.ej2Instances.axes[0].pointers[0].animationDuration = 1500;
        this.$refs.lineargauge5.ej2Instances.axes[0].pointers[1].animationDuration = 1500;
    },
    dragStart5: function(args) {
        this.$refs.lineargauge5.ej2Instances.axes[0].pointers[0].animationDuration = 0;
        this.$refs.lineargauge5.ej2Instances.axes[0].pointers[1].animationDuration = 0;
    },
    dragMove5: function(args){
        if (args.pointerIndex == 1) {
            this.$refs.lineargauge5.ej2Instances.setPointerValue(0, 0, args.currentValue);
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