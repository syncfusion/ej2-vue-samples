<template>
<div>
<div class="control-section">
    <div id="spark-container" class="row">
        <div class="cols-sample-area" align="center" style="margin-top: 8%;">
            <div align="center" class="col-lg-2 col-md-3 col-sm-5 sparent">
                <ejs-sparkline class="spark" :load='load' id='line' align="center" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :markerSettings='markerSettings'  xName='x' yName='yval'></ejs-sparkline>                        
                    <div class="sparktext" align="center" style="position: absolute; margin-top: 90px; margin-left: 2px; width: 70%;">Power production for a day</div>
                </div>
             <div align="center" class="col-lg-2 col-md-3 col-sm-5 sparent">
                    <ejs-sparkline class="spark" :load='load' id='area' align="center" :height='height' :width='width' :lineWidth='lineWidth' :type='type2' :opacity='opacity2' :valueType='valueType2' :fill='fill2' :border='border2' :axisSettings='axisSettings2' :dataSource='dataSource2' :tooltipSettings='tooltipSettings2' xName='xval' yName='yval'></ejs-sparkline>                        
            <div class="sparktext" align="center" style="position: absolute; margin-top: 90px; margin-left: 3px; width: 70%;">Average weather comparision</div>
                </div>
            <div align="center" class="col-lg-2 col-md-3 col-sm-5 sparent">
                    <ejs-sparkline class="spark" :load='load' id='column' align="center" :height='height' :width='width' :lineWidth='lineWidth' :type='type3' :valueType='valueType3' :highPointColor='highPointColor3' :fill='fill3' :dataSource='dataSource3' :tooltipSettings='tooltipSettings3' xName='xval' yName='yval'></ejs-sparkline>                        
            <div class="sparktext" align="center" style="position: absolute; margin-top: 90px; margin-left: 10px; width: 70%;">Revenue status</div>
                </div>
            <div align="center" class="col-lg-2 col-md-5 col-sm-5 sparent">
                <ejs-sparkline class="spark"  :load='load' id='winloss' align="center" :height='height' :width='width' :lineWidth='lineWidth' :type='type4' :valueType='valueType4' :negativePointColor='negativePointColor4' :fill='fill4' :dataSource='dataSource4' :tooltipSettings='tooltipSettings4'></ejs-sparkline>                        
                <div class="sparktext" align="center" style="position: absolute; margin-top: 90px; margin-left: 5px; width: 70%;">Customer satisfaction score</div>
            </div>
             <div align="center" class="col-lg-2 col-md-5 col-sm-10 sparent">
                 <div class="spark" align="center" style="height: 87px;">
                      <div class="sparkpie" style="height:40px;width: 29%;">
                    <ejs-sparkline id='pie1' :load='load' :height='pieheight' :width='piewidth' :lineWidth='pielineWidth' :type='pietype' :valueType='pievalueType' :dataSource='piedataSource' :tooltipSettings='pietooltipSettings' xName='x' yName='y'></ejs-sparkline>                        
                         <div align="center" class="pietext" style="position: absolute; width: 25%;">USA</div>
                    </div>
                    <div class="sparkpie" style="height:40px;width: 29%;">
                    <ejs-sparkline id='pie2' :load='load' :height='pieheight' :width='piewidth' :lineWidth='pielineWidth' :type='pietype' :valueType='pievalueType' :dataSource='piedataSource2' :tooltipSettings='pietooltipSettings2' xName='x' yName='y'></ejs-sparkline>                        
                          <div align="center" class="pietext" style="position: absolute; width: 25%;">GBR</div>
                    </div>
                    <div class="sparkpie" style="height:40px;width: 29%;">
                    <ejs-sparkline id='pie3' :load='load' :height='pieheight' :width='piewidth' :lineWidth='pielineWidth' :type='pietype' :valueType='pievalueType' :dataSource='piedataSource3' :tooltipSettings='pietooltipSettings3' xName='x' yName='y'></ejs-sparkline>                        
                        <div align="center" class="pietext" style="position: absolute; width: 25%;">CHN</div>
                    </div>
            <div class="sparktext" align="center" style="position: absolute; margin-top: 90px; margin-left: 1px; width: 80%;">Olympics medal details</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample depicts the various types of series available in sparkline.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see the sparkline with various series types such as line, area, column, win loss, and pie. Tooltip
        is enabled in this example. To see the tooltip in action, hover the mouse over the data points or tap on a data point
        in touch enabled devices.
    </p>
</div>
</div>
</template>
<style>
   td {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif";
        font-weight: 600;
    }

    .spark {
        float: left;
        margin-left: 3%;
        border: 1px solid rgb(209, 209, 209);
        border-radius: 2px;
        width: 93%;
    }
    .sparent {
        height: 110px;
        margin-left: 3%;
        margin-right: 0%;
    }
    .sparkpie {
        float: left;
        margin-top: 15px;
        margin-left: 2%;
    }
    .pieparent {
        width: 93%;
    }
    .pietext {
        float: left;
    }

    .sparktext {
        text-anchor:middle;
    }
</style>
<script>
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
import { data, data2, data3 } from "./series-types";
Vue.use(SparklinePlugin);
export default Vue.extend({
data:function(){
return{
        height: '80px',
        width: '90%',
        lineWidth: 1,
        type: 'Line',
        fill: '#3C78EF',
        valueType: 'Numeric',
        dataSource: data,
        tooltipSettings: {
            visible: true,
            format: '${x} : ${yval}',
            trackLineSettings: {
                visible: true
            }
        },
        markerSettings: {
            visible: ['All'],
            size: 2.5,
            fill: 'blue',
        },
        type2: 'Area',
        opacity2: 1,
        fill2: '#b2cfff',
        border2: { color: '#3C78EF', width: 2},
        valueType2: 'Category',
        axisSettings2: {
            lineSettings: {
                visible: true
            }
        },
        dataSource2: data2,
        tooltipSettings2: {
            visible: true,
           format: '${xval} : ${yval}°C',
            trackLineSettings: {
                visible: true
            }
        },
        fill3: '#3C78EF',
        type3: 'Column',
        valueType3: 'Category',
        highPointColor3: '#14aa21',
        dataSource3: data3,
        tooltipSettings3: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type4: 'WinLoss',
        fill4: '#3C78EF',
        negativePointColor4: '#fc5070',
        valueType4: 'Numeric',
        dataSource4: [12, 15, -10, 13, 15, 6, -12, 17, 13, 0, 8, -10],
        tooltipSettings4: {
            format: '${x} : ${y}',
        },
        pieheight: '40px',
        piewidth: '100%',
        pielineWidth: 1,
        pietype: 'Pie',
        pievalueType: 'Category',
        piedataSource: [{x: 'Gold', y : 46}, {x: 'Silver', y : 37}, {x: 'Bronze', y : 38}],
        pietooltipSettings: {
            visible: true,
            format: '${x} : ${y}',
        },
        piedataSource2: [{x: 'Gold', y : 27}, {x: 'Silver', y : 23}, {x: 'Bronze', y : 17}],
        pietooltipSettings2: {
            visible: true,
            format: '${x} : ${y}',
        },
        piedataSource3: [{x: 'Gold', y : 26}, {x: 'Silver', y : 18}, {x: 'Bronze', y : 26}],
        pietooltipSettings3: {
            visible: true,
            format: '${x} : ${y}',
        }
}
},
provide:{
    sparkline:[SparklineTooltip]
},
/* custom code start */
methods:{
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    }
}
/* custom code end */
})
</script>

