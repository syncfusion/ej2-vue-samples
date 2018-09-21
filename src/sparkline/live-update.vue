<template>
<div>
<div class="control-section" align="center">
    <div id="spark-container" class="row">
        <div class="cols-sample-area" align="center" style="margin-top: 8%;">
            <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                        <ejs-sparkline class="spark" :load='load' id='spark-container1' :height='height' :width='width' :type='type' :valueType='valueType' :fill='fill' :dataSource='dataSource' :axisSettings='axisSettings' :containerArea='containerArea' :border='border' xName='x' yName='yval'></ejs-sparkline>                        
                         <div style="color: #000000; font-size: 12px; position: absolute; margin-top: 10px; margin-left: 12%;">
                        <b>CPU</b>
                        </div>
                        <div id='cpu' style="color: #0877d6;position: absolute; margin-top: 25px; margin-left: 12%;">26% 1.2GHz</div>
                    </div>
                     <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                         <ejs-sparkline class="spark" :load='load' id='spark-container2' :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill2' :dataSource='dataSource2' :axisSettings='axisSettings2' :containerArea='containerArea2' :border='border2' xName='x' yName='yval'></ejs-sparkline>                        
                  <div style="color: #000000; font-size: 12px; position: absolute; margin-top: 10px; margin-left: 12%;">
                        <b>Disk</b>
                    </div>
                    <div id="disk" style="color: #b247c6;position: absolute; margin-top: 25px; margin-left: 12%;">50%</div>
                     </div>
                     <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                        <ejs-sparkline class="spark" :load='load' id='spark-container3' :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill3' :dataSource='dataSource3' :axisSettings='axisSettings3' :containerArea='containerArea3' :border='border3' xName='x' yName='yval'></ejs-sparkline>                        
                          <div style="color: #000000; font-size: 12px; position: absolute; margin-top: 10px; margin-left: 12%;">
                        <b>Memory</b>
                    </div>
                    <div id="memory" style="color: #5bcc8f;position: absolute; margin-top: 25px; margin-left: 12%;">6.5/15.8 GB (41%)</div>
                     </div>
                   <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                        <ejs-sparkline class="spark" :load='load' id='spark-container4' :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill4' :dataSource='dataSource4' :axisSettings='axisSettings4' :containerArea='containerArea4' :border='border4' xName='x' yName='yval'></ejs-sparkline>                        
                      <div style="color: #000000; font-size: 12px; position: absolute; margin-top: 10px; margin-left: 12%;">
                        <b>Ethernet</b>
                    </div>
                    <div id="net" style="color: #d1a990;position: absolute; margin-top: 25px; margin-left: 12%;">R: 50Kbps</div>
                </div>
            </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample depicts the various customization options available in sparklines.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see various customization options available in sparklines. Tooltip is enabled in this example. To
        see the tooltip in action, hover the mouse over the data points or tap on a data point in touch enabled devices.
    </p>
</div>
</div>
</template>
<style>
    .spark {
        float: left;
        width: 95%;
        margin-left: 3%;
    }
</style>
<script>
import Vue from 'vue';
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);
export default Vue.extend({
data:function(){
return{
        height: '130px',
        width: '90%',
        axisSettings: {
            minY: 0, maxY: 150
        },
        containerArea: {
            background: 'white',
            border: {
                color: '#dcdfe0',
                width: 2
            }
        },
        border: {
            color: '#0358a0',
            width: 1
        },
        fill: '#e8f2fc',
        type: 'Area',
        valueType: 'Numeric',
        dataSource: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 30 },
            { x: 4, yval: 50 },
            { x: 5, yval: 40 },
            { x: 6, yval: 20 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 40 },
            { x: 11, yval: 50 },
            { x: 12, yval: 10 },
            { x: 13, yval: 30 },
            { x: 14, yval: 50 },
            { x: 15, yval: 20 },
            { x: 16, yval: 10 },
            { x: 17, yval: 40 },
            { x: 18, yval: 30 },
            { x: 19, yval: 40 }
        ],
        axisSettings2: {
            minY: 4, maxY: 8
        },
        containerArea2: {
            background: 'white',
            border: {
                color: '#dcdfe0',
                width: 2
            }
        },
        border2: {
            color: '#b247c6',
            width: 1
        },
        fill2:'#f5e8fc',
        dataSource2: [
            { x: 0, yval: 6.05 },
            { x: 1, yval: 6.03 },
            { x: 2, yval: 6.02 },
            { x: 3, yval: 6.07 },
            { x: 4, yval: 6.05 },
            { x: 5, yval: 6.09 },
            { x: 6, yval: 6.08 },
            { x: 7, yval: 6.01 },
            { x: 8, yval: 6.03 },
            { x: 9, yval: 6.01 },
            { x: 10, yval: 6.07 },
            { x: 11, yval: 6.05 },
            { x: 12, yval: 6.01 },
            { x: 13, yval: 6.06 },
            { x: 14, yval: 6.05 },
            { x: 15, yval: 6.03 },
            { x: 16, yval: 6.01 },
            { x: 17, yval: 6.09 },
            { x: 18, yval: 6.06 },
            { x: 19, yval: 6.05 }
        ],
        axisSettings3: {
            minY: 0, maxY: 130
        },
        containerArea3: {
            background: 'white',
            border: {
                color: '#dcdfe0',
                width: 2
            }
        },
        border3: {
            color: '#27ad66',
            width: 1
        },
        fill3: '#e0f9d1',
        dataSource3: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 70 },
            { x: 4, yval: 50 },
            { x: 5, yval: 20 },
            { x: 6, yval: 80 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 70 },
            { x: 11, yval: 50 },
            { x: 12, yval: 10 },
            { x: 13, yval: 60 },
            { x: 14, yval: 50 },
            { x: 15, yval: 30 },
            { x: 16, yval: 10 },
            { x: 17, yval: 20 },
            { x: 18, yval: 60 },
            { x: 19, yval: 50 }
        ],
        axisSettings4: {
            minY: 0, maxY: 100
        },
        containerArea4: {
            background: 'white',
            border: {
                color: '#dcdfe0',
                width: 2
            }
        },
        border4: {
            color: '#AA907A',
            width: 1
        },
        fill4: '#F2D8C7',
        dataSource4: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 70 },
            { x: 4, yval: 50 },
            { x: 5, yval: 20 },
            { x: 6, yval: 80 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 70 },
            { x: 11, yval: 50 },
            { x: 12, yval: 10 },
            { x: 13, yval: 60 },
            { x: 14, yval: 50 },
            { x: 15, yval: 30 },
            { x: 16, yval: 10 },
            { x: 17, yval: 20 },
            { x: 18, yval: 60 },
            { x: 19, yval: 50 }
        ],
         lineWidth: 1
}
},
mounted(){
     let spark = document.getElementById('spark-container1');
     let temp1 = spark.ej2_instances[0].dataSource.length - 1;
     function update() {
        if (spark.ej2_instances[0].element.className.indexOf('e-sparkline') > -1) {
            let value = ((Math.random() * 100) + 5) % 50;
            spark.ej2_instances[0].dataSource.push({ x: ++temp1, yval: value });
            spark.ej2_instances[0].dataSource.shift();
            spark.ej2_instances[0].refresh();
            let cpu = document.getElementById('cpu');
            cpu.innerHTML = ((value / 150) * 100).toFixed(0) + '% ' + ((value * 3) / 100).toFixed(2) + 'GHz';
        }
    }
    let time = setInterval(update, 500);

    let spark1 = document.getElementById('spark-container2');
    let temp2 = spark1.ej2_instances[0].dataSource.length - 1;
    function update1(){
        if (spark1.ej2_instances[0].element.className.indexOf('e-sparkline') > -1) {
            let value = Math.random();
            if (value > 0.6) {
                value = 6 + (value / 10);
            } else {
                value = 6 - (value / 10);
            }
            spark1.ej2_instances[0].dataSource.push({ x: ++temp2, yval: value });
            spark1.ej2_instances[0].dataSource.shift();
            spark1.ej2_instances[0].refresh();
            let memory = document.getElementById('memory');
            let gb = parseFloat(value.toString().replace('0', '')).toFixed(1);
            memory.innerHTML = gb + '/15.8 GB (' + ((value / 15.8) * 100).toFixed(0) + '%)';
        }
    }
    let time1 = setInterval(update1, 500);

    let spark2 = document.getElementById('spark-container3');
    let temp3 = spark2.ej2_instances[0].dataSource.length - 1;
    function update2() {
        if (spark2.ej2_instances[0].element.className.indexOf('e-sparkline') > -1) {
            let value = ((Math.random() * 100) + 5) % 80;
            spark2.ej2_instances[0].dataSource.push({ x: ++temp3, yval: value });
            spark2.ej2_instances[0].dataSource.shift();
            spark2.ej2_instances[0].refresh();
            let disk = document.getElementById('disk');
            disk.innerHTML = value.toFixed(0) + '%';
        }
    }
    let time2 = setInterval(update2, 500);

    let spark3 = document.getElementById('spark-container4');
    let temp4 = spark3.ej2_instances[0].dataSource.length - 1;
    function update4() {
        if (spark3.ej2_instances[0].element.className.indexOf('e-sparkline') > -1) {
            let value = ((Math.random() * 100) + 5) % 80;
            spark3.ej2_instances[0].dataSource.push({ x: ++temp3, yval: value });
            spark3.ej2_instances[0].dataSource.shift();
            spark3.ej2_instances[0].refresh();
            let net = document.getElementById('net');
            net.innerHTML = 'R: ' + value.toFixed(0) + 'Kbps';
        }
    }
    let time4 = setInterval(update4, 500);
},
methods:{
     load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    }
}
})
</script>