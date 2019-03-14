<template>
<div>
<div class="control-section">
<ejs-circulargauge :load='load' style='display:block' align='center' id='pointer-container' :title='title' :titleStyle='titleStyle' :centerY='centerY'>
<e-axes>
<e-axis :radius='gaugeRadius' :startAngle='startAngle' minimum=0  maximum=14 :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle' :annotations='annotations' :ranges='ranges'>
<e-pointers>
<e-pointer :type='type1' :value='value1' :radius='pointerRadius1' :markerShape='markerShape1' :imageUrl='imageUrl1' :markerWidth='markerWidth1' :markerHeight='markerHeight1' :animation='animation1'></e-pointer>
<e-pointer :type='type2' :value='value2' :radius='pointerRadius2' :markerShape='markerShape2' :imageUrl='imageUrl2' :markerWidth='markerWidth2' :markerHeight='markerHeight2' :animation='animation2'></e-pointer>
<e-pointer :type='type3' :value='value3' :radius='pointerRadius3' :markerShape='markerShape3' :imageUrl='imageUrl3' :markerWidth='markerWidth3' :markerHeight='markerHeight3' :animation='animation3'></e-pointer>
<e-pointer :type='type4' :value='value4' :radius='pointerRadius4' :markerShape='markerShape4' :imageUrl='imageUrl4' :markerWidth='markerWidth4' :markerHeight='markerHeight4' :animation='animation4'></e-pointer>
<e-pointer :type='type5' :value='value5' :radius='pointerRadius5' :markerShape='markerShape5' :imageUrl='imageUrl5' :markerWidth='markerWidth5' :markerHeight='markerHeight5' :animation='animation5'></e-pointer>
<e-pointer :type='type6' :value='value6' :radius='pointerRadius6' :markerShape='markerShape6' :imageUrl='imageUrl6' :markerWidth='markerWidth6' :markerHeight='markerHeight6' :animation='animation6'></e-pointer>
<e-pointer :type='type7' :value='value7' :radius='pointerRadius7' :markerShape='markerShape7' :imageUrl='imageUrl7' :markerWidth='markerWidth7' :markerHeight='markerHeight7' :animation='animation7'></e-pointer>
</e-pointers>
</e-axis>
</e-axes>
</ejs-circulargauge>
</div>
<div id="action-description">
    <p>
        This sample visualizes the short-put distance covered by the athletes by using the image pointer in gauge.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to use the pointer image for an axis in the circular gauge. Pointer value points out the
        actual value set in the <b>Circular Gauge</b>. You can customize the <code>pointers</code> to improve the
        appearance of <b>Gauge</b>.
    </p>
    <br>
    <p>
        In this sample, a pointer with image is used to show the short-put distance thrown by the player.
    </p>
    <p>
        More information on the pointers can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation">documentation section</a>.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue'
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
data:function(){
    return{
    title: 'Short Put Distance',
    titleStyle: {
            size: '18px'
        },
    centerY: '57%',
    annotations: [{
            content: '12 M', radius: '108%', angle: 98, zIndex: '1'
        }, {
            content: '11 M', radius: '80%', angle: 81, zIndex: '1'
        }, {
            content: '10 M', radius: '50%', angle: 69, zIndex: '1'
        }, {
            content: 'Doe', radius: '108%', angle: 190, zIndex: '1'
        }, {
            content: 'Almaida', radius: '80%', angle: 185, zIndex: '1'
        }, {
            content: 'John', radius: '50%', angle: 180, zIndex: '1'
        }],
        lineStyle: {
            width: 0, color: '#1d1d1d'
        },
        gaugeRadius: '90%',
        labelStyle: {
            font: {
                    size: '0px'
            }
        }, 
        majorTicks: {
            interval: 20, width: 0,
        }, 
        minorTicks: {
            width: 0,
        },
        startAngle: 200, endAngle: 130,
        ranges: [{
                start: 0, end: 12, radius: '115%',
                color: '#01aebe', startWidth: 25, endWidth: 25
            }, {
                start: 0, end: 11, radius: '85%',
                color: '#3bceac', startWidth: 25, endWidth: 25
            }, {
                start: 0, end: 10, radius: '55%',
                color: '#ee4266', startWidth: 25, endWidth: 25
        }],
        type1: 'Marker', value1: 12, markerShape1: 'Image',
        imageUrl1: 'src/circular-gauge/images/foot-ball.png',
        pointerRadius1: '108%', markerWidth1: 28, markerHeight1: 28,
        animation1: { duration: 1500 },

        type2: 'Marker', value2: 11, markerShape2: 'Image',
        imageUrl2: 'src/circular-gauge/images/basket-ball.png',
        pointerRadius2: '78%', markerWidth2: 28, markerHeight2: 28,
        animation2: { duration: 1200 },

        type3: 'Marker', value3: 10, markerShape3: 'Image',
        imageUrl3: 'src/circular-gauge/images/golf-ball.png',
        pointerRadius3: '48%', markerWidth3: 28, markerHeight3: 28,
        animation3: { duration: 900 },

        type4: 'Marker', value4: 12, markerShape4: 'Image',
        imageUrl4: 'src/circular-gauge/images/athletics.png',
        pointerRadius4: '0%', markerWidth4: 90, markerHeight4: 90,
        animation4: { duration: 0 },

        type5: 'Marker', value5: 0.1, markerShape5: 'Image',
        imageUrl5: 'src/circular-gauge/images/girl.png',
        pointerRadius5: '108%', markerWidth5: 28, markerHeight5: 28,
        animation5: { duration: 1500 },

        type6: 'Marker', value6: 0.1, markerShape6: 'Image',
        imageUrl6: 'src/circular-gauge/images/man-one.png',
        pointerRadius6: '78%', markerWidth6: 28, markerHeight6: 28,
        animation6: { duration: 1500 },

        type7: 'Marker', value7: 0.1, markerShape7: 'Image',
        imageUrl7: 'src/circular-gauge/images/man-two.png',
        pointerRadius7: '48%', markerWidth7: 28, markerHeight7: 28,
        animation7: { duration: 1500 }
    }
},
/* custom code start */
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
},
/* custom code end */
provide: {
    circulargauge: [Annotations]
}
})
</script>

