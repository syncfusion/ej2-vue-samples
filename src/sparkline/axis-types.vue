<template>
<div>
<div class="control-section">
    <div id="spark-container" class="row">
        <div class="cols-sample-area">
            <table style="width:100%;">
                <tr>
                    <td align="center">
                        <div>Mean working hours for a month</div>
                        <div><i>(DateTime axis)</i></div>
                    </td>
                    <td style="padding: 10px;">
                        <ejs-sparkline id='datetime' :load='load' style="width:170px; height:100px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill' :dataSource='dataSource' :tooltipSettings='tooltipSettings' xName='xDate' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <div>Percentage of the students in a class</div>
                        <div><i>(Category axis)</i></div>
                    </td>
                    <td style="padding: 10px;">
                        <ejs-sparkline id='category' :load='load' style="width:170px; height:100px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType2' :fill='fill2' :dataSource='dataSource2' :tooltipSettings='tooltipSettings2' xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <div>Expenditure details of various trips</div>
                        <div><i>(Numeric axis)</i></div>
                        </td>
                    <td style="padding: 10px;">
                        <ejs-sparkline id='numeric' :load='load' style="width:170px; height:100px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType3' :fill='fill3' :dataSource='dataSource3' :tooltipSettings='tooltipSettings3' xName='x' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample depicts the various types of axis value types available in sparkline.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see the sparklines with various axis value types such as date-time, category, and numeric. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over the data points or tap on a data point in touch enabled devices.
	</p>
</div>
</div>
</template>
<style>
    td{
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif";
        font-size: 14px;
        font-weight: 500;
    }
</style>
<script>
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);
export default Vue.extend({
data:function(){
return{
        height: '100px',
        width: '170px',
        lineWidth: 1,
        fill: '#3C78EF',
        type: 'Column',
        valueType: 'DateTime',
        dataSource: [
            { xDate: new Date(2018, 0, 1), x: 0, yval: 4 },
            { xDate: new Date(2018, 0, 2), x: 1, yval: 4.5 },
            { xDate: new Date(2018, 0, 3), x: 2, yval: 8 },
            { xDate: new Date(2018, 0, 4), x: 3, yval: 7 },
            { xDate: new Date(2018, 0, 5), x: 4, yval: 6 },
            { xDate: new Date(2018, 0, 8), x: 5, yval: 8 },
            { xDate: new Date(2018, 0, 9), x: 6, yval: 8 },
            { xDate: new Date(2018, 0, 10), x: 7, yval: 6.5 },
            { xDate: new Date(2018, 0, 11), x: 8, yval: 4 },
            { xDate: new Date(2018, 0, 12), x: 9, yval: 5.5 },
            { xDate: new Date(2018, 0, 15), x: 10, yval: 8 },
            { xDate: new Date(2018, 0, 16), x: 11, yval: 6 },
            { xDate: new Date(2018, 0, 17), x: 12, yval: 6.5 },
            { xDate: new Date(2018, 0, 18), x: 13, yval: 7.5 },
            { xDate: new Date(2018, 0, 19), x: 14, yval: 7.5 },
            { xDate: new Date(2018, 0, 22), x: 15, yval: 4 },
            { xDate: new Date(2018, 0, 23), x: 16, yval: 8 },
            { xDate: new Date(2018, 0, 24), x: 17, yval: 6 },
            { xDate: new Date(2018, 0, 25), x: 18, yval: 7.5 },
            { xDate: new Date(2018, 0, 26), x: 19, yval: 4.5 },
            { xDate: new Date(2018, 0, 29), x: 20, yval: 6 },
            { xDate: new Date(2018, 0, 30), x: 21, yval: 5 },
            { xDate: new Date(2018, 0, 31), x: 22, yval: 7 }
        ],
        tooltipSettings: {
            visible: true,
            format: '${xDate} : ${yval}hrs'
        },
        fill2: '#3C78EF',
        valueType2: 'Category',
        dataSource2: [
           { x: 0, xval: 'Robert', yval: 60 },
            { x: 1, xval: 'Andrew', yval: 65 },
            { x: 2, xval: 'Suyama', yval: 70 },
            { x: 3, xval: 'Michael', yval: 80 },
            { x: 4, xval: 'Janet', yval: 55 },
            { x: 5, xval: 'Davolio', yval: 90 },
            { x: 6, xval: 'Fuller', yval: 75 },
            { x: 7, xval: 'Nancy', yval: 85 },
            { x: 8, xval: 'Margaret', yval: 77 },
            { x: 9, xval: 'Steven', yval: 68 },
            { x: 10, xval: 'Laura', yval: 96 },
            { x: 11, xval: 'Elizabeth', yval: 57 }
        ],
        tooltipSettings2: {
            visible: true,
            format: '${xval} : ${yval}%'
        },
        fill3: '#3C78EF',
        valueType3: 'Numeric',
        dataSource3: [
             { x: 1, xval: 2010, yval: 190 },
            { x: 2, xval: 2011, yval: 165 },
            { x: 3, xval: 2012, yval: 158 },
            { x: 4, xval: 2013, yval: 175 },
            { x: 5, xval: 2014, yval: 200 },
            { x: 6, xval: 2015, yval: 180 },
            { x: 7, xval: 2016, yval: 210 }
        ],
        tooltipSettings3: {
            visible: true,
            format: '${x} : $${yval}'
        }
}
},
provide:{
    sparkline:[SparklineTooltip]
},
methods:{
    load:function(args){
        debugger;
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    }
}
})
</script>
