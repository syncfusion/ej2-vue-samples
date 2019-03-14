<template>
<div>
<div class="control-section" align="center">
    <div id="spark-container" class="row">
        <div class="cols-sample-area" align="center" style="margin-top: 8%;">
            <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                        <ejs-sparkline ref="spark1" class="spark" :load='load' id='spark-container1' :height='height' :width='width' :type='type' :valueType='valueType' :fill='fill' :dataSource='dataSource' :axisSettings='axisSettings' :containerArea='containerArea' :border='border' xName='x' yName='yval'></ejs-sparkline>                        
                         <div style="color: #000000; font-size: 12px; position: absolute; margin-top: 10px; margin-left: 12%;">
                        <b>CPU</b>
                        </div>
                        <div id='cpu' style="color: #0877d6;position: absolute; margin-top: 25px; margin-left: 12%;">26% 1.2GHz</div>
                    </div>
                     <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                         <ejs-sparkline ref="spark2" class="spark" :load='load' id='spark-container2' :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill2' :dataSource='dataSource2' :axisSettings='axisSettings2' :containerArea='containerArea2' :border='border2' xName='x' yName='yval'></ejs-sparkline>                        
                  <div style="color: #000000; font-size: 12px; position: absolute; margin-top: 10px; margin-left: 12%;">
                        <b>Disk</b>
                    </div>
                    <div id="disk" style="color: #b247c6;position: absolute; margin-top: 25px; margin-left: 12%;">50%</div>
                     </div>
                     <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                        <ejs-sparkline ref="spark3" class="spark" :load='load' id='spark-container3' :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill3' :dataSource='dataSource3' :axisSettings='axisSettings3' :containerArea='containerArea3' :border='border3' xName='x' yName='yval'></ejs-sparkline>                        
                          <div style="color: #000000; font-size: 12px; position: absolute; margin-top: 10px; margin-left: 12%;">
                        <b>Memory</b>
                    </div>
                    <div id="memory" style="color: #5bcc8f;position: absolute; margin-top: 25px; margin-left: 12%;">6.5/15.8 GB (41%)</div>
                     </div>
                   <div align="center" class="col-lg-3 col-m-3 col-sm-6">
                        <ejs-sparkline ref="spark4" class="spark" :load='load' id='spark-container4' :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill4' :dataSource='dataSource4' :axisSettings='axisSettings4' :containerArea='containerArea4' :border='border4' xName='x' yName='yval'></ejs-sparkline>                        
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
import { data, data2, data3, data4 } from "./live-update";
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
        dataSource: data,
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
        dataSource2: data2,
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
        dataSource3: data3,
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
        dataSource4: data4,
         lineWidth: 1
}
},
mounted(){
    this.update();
    this.update1();
    this.update2();
    this.update3();
},
methods:{
    /* custom code start */
     load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    /* custom code end */
    update: function() {
        let spark = document.getElementById('spark-container1');
        let gauge = this.$refs.spark1.ej2Instances;
        let temp1 = gauge.dataSource.length - 1;
        this.update = setInterval(function() {
            if (gauge.element.className.indexOf('e-sparkline') > -1) {
                let value = ((Math.random() * 100) + 5) % 50;
                gauge.dataSource.push({ x: ++temp1, yval: value });
                gauge.dataSource.shift();
                gauge.refresh();
                let cpu = document.getElementById('cpu');
                if (cpu) {
                cpu.innerHTML = ((value / 150) * 100).toFixed(0) + '% ' + ((value * 3) / 100).toFixed(2) + 'GHz';
                }
            }
        }, 500);
    },
    update1: function() {
        let spark1 = document.getElementById('spark-container2');
        let gauge = this.$refs.spark2.ej2Instances;
        let temp2 = gauge.dataSource.length - 1;
        this.update1 = setInterval(function() {
            if (gauge.element.className.indexOf('e-sparkline') > -1) {
                let value = Math.random();
                if (value > 0.6) {
                    value = 6 + (value / 10);
                } else {
                    value = 6 - (value / 10);
                }
                gauge.dataSource.push({ x: ++temp2, yval: value });
                gauge.dataSource.shift();
                gauge.refresh();
                let memory = document.getElementById('memory');
                let gb = parseFloat(value.toString().replace('0', '')).toFixed(1);
                if (memory) {
                memory.innerHTML = gb + '/15.8 GB (' + ((value / 15.8) * 100).toFixed(0) + '%)';
                }
            }
        }, 500);
    },
    update2: function() {
        let spark2 = document.getElementById('spark-container3');
        let gauge = this.$refs.spark3.ej2Instances;
        let temp3 = gauge.dataSource.length - 1;
        this.update2 = setInterval(function() {
            if (gauge.element.className.indexOf('e-sparkline') > -1) {
                let value = ((Math.random() * 100) + 5) % 80;
                gauge.dataSource.push({ x: ++temp3, yval: value });
                gauge.dataSource.shift();
                gauge.refresh();
                let disk = document.getElementById('disk');
                if (disk) {
                disk.innerHTML = value.toFixed(0) + '%';
                }
            }
        }, 500);
    },
    update3: function() {
        let spark3 = document.getElementById('spark-container4');
        let gauge = this.$refs.spark4.ej2Instances;
        let temp4 = gauge.dataSource.length - 1;
        this.update3 = setInterval(function() {
            if (gauge.element.className.indexOf('e-sparkline') > -1) {
                let value = ((Math.random() * 100) + 5) % 80;
                gauge.dataSource.push({ x: ++temp4, yval: value });
                gauge.dataSource.shift();
                gauge.refresh();
                let net = document.getElementById('net');
                if (net) {
                net.innerHTML = 'R: ' + value.toFixed(0) + 'Kbps';
                }
            }
        }, 500);
    }
}
})
</script>