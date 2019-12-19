<template>
<div>
<div class="control-section">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' :titleSettings='titleSettings' height='300px' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :load='load' :tooltipRender='tooltipRender'></ejs-heatmap>
    </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes the summary of user activities in GitLab account such as merge requests, push events and comments across 52 weeks in a year.
    </p>
</div>
<div id="description">
   <p>
         In this example, you can see how to display a calendar data using heatmap. You can make the axis labels to display at specific time intervals along the datetime axis using the showLabelOn property.  
         
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip </code>  module using the <code>Heatmap.Inject(Tooltip) </code> method, and use a legend by injecting the <code>Legend </code>  module using the <code>Heatmap.Inject(Legend) </code>  method.
    </p>

</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { Internationalization } from '@syncfusion/ej2-base';
import { calendarDataSource } from './heatmap-data/calendar-data-source.json';
Vue.use(HeatMapPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Annual Summary of User Activities in GitLab',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            opposedPosition: true,
            valueType: 'DateTime',
            minimum: new Date(2017, 6, 23),
            maximum: new Date(2018, 6, 30),
            intervalType: 'Days',
            showLabelOn: 'Months',
            labelFormat: 'MMM',
            increment: 7,
            labelIntersectAction: 'Rotate45'
        },
        yAxis: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            isInversed: true,
        },
        dataSource: calendarDataSource,
        cellSettings: {
            showLabel: false,
            border: {
                color: 'white'
            }
        },
        paletteSettings: {
            palette: [
                { value: 0, color: 'rgb(238,238,238)', label: 'no contributions' },
                { value: 1, color: 'rgb(172, 213, 242)', label: '1-15 contributions' },
                { value: 16, color: 'rgb(127, 168, 201)', label: '16-31 contributions' },
                { value: 32, color: 'rgb(82, 123, 160)', label: '31-49 contributions' },
                { value: 50, color: 'rgb(37, 78, 119)', label: '50+ contributions' },
            ],
            type: 'Fixed',
            emptyPointColor: 'white'
        },
        legendSettings: {
            position: 'Bottom',
            width: '20%',
            alignment: 'Near',
            showLabel: true,
            labelDisplayType: 'None',
            enableSmartLegend: true
        },
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    tooltipRender: function(args)
    {
        let intl = new Internationalization();
        let format = intl.getDateFormat({ format: 'EEE MMM dd, yyyy' });
        let newDate = new Date(args.xValue);
        let date = new Date(newDate.getTime());
        let axisLabel = args.heatmap.axisCollections[1].axisLabels;
        let index = axisLabel.indexOf(args.yLabel);
        (date).setDate((date).getDate() + index);
        let value = format(date);
        args.content = [(args.value === 0 ? 'No' : args.value) + ' ' + 'contributions' + '<br>' + value];
    }
  }
})
</script>
