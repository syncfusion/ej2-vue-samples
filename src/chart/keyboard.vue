<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart ref='chart' style='display:block' :theme='theme' align='center' id='keyboardcontainer' :title='title' :width='width' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :tooltip='tooltip'  :legendSettings='legendSettings'
            :enableAnimation='enableAnimation'
            :enableSideBySidePlacement='enableSideBySidePlacement'
            :zoomSettings='zoomSettings'
            :selectionMode='selectionMode'
            :selectionPattern='selectionPattern' 
            :legendClick = legendClick
            :getStriplineValues = 'getStriplineValues'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Column' xName='Month' yName='Sales' name='Quarter 1' width=2 > </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='Month' yName='Sales' name='Quarter 2' width=2  > </e-series>
                <e-series :dataSource='seriesData3' type='Column' xName='Month' yName='Sales' name='Quarter 3' width=2 > </e-series>
                <e-series :dataSource='seriesData4' type='Column' xName='Month' yName='Sales' name='Quarter 4' width=2 > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        Keyboard shortcuts can be used to interact with chart functionality. In the example below, various key combinations can be used to interact with the chart.
    </p>
</div>
<div id="description">
    <i>The key combinations listed below can be used in the chart to initiate various actions.</i>
    <ul>
         <li>
            <b>FOCUS ELEMENTS</b>
            <ul>
                <li>
                    <span class="key-class"><kbd>Alt</kbd> + <kbd>J</kbd></span>
                    <span> - Moves the focus to the chart element.</span>
                </li>
				<li>
                    <span class="key-class"><kbd>Tab</kbd></span>
                    <span> - Moves the focus to the next element in the chart.</span>
                </li>
				<li>
                    <span class="key-class"><kbd>Shift</kbd> + <kbd>Tab</kbd></span>
                    <span> - Moves the focus to the previous element in the chart.</span>
                </li>
            </ul>
        </li>
		<li>
		   <b>SERIES</b>
		    <ul>
                <li>
                    <span class="key-class"><kbd>Down arrow</kbd></span>
                    <span> - Moves the focus to the data point left side from the selected point.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Up arrow</kbd></span>
                    <span> - Moves the focus to the data point right side from the selected point.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Left arrow</kbd></span>
                    <span> - Moves the focus to the next series in our chart.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Right arrow</kbd></span>
                    <span> - Moves the focus to the previous series in our chart.</span>
                </li>
				<li>
                    <span class="key-class"><kbd>ESC</kbd></span>
                    <span> - Cancel the tooltip for the data point.</span>
                </li>
				<li>
                    <span class="key-class"><kbd>Enter</kbd>/<kbd>Space</kbd></span>
                    <span> - Selects the data point in the series.</span>
                </li>
			</ul>
		</li>
		<li>
		   <b>Legend </b>
		    <ul>
                <li>
                    <span class="key-class"><kbd>Down</kbd>/<kbd>Left arrow</kbd></span>
                    <span> - Moves the focus to the legend left side from the selected legend.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Up</kbd>/<kbd>Right arrow</kbd></span>
                    <span> - Moves the focus to the legend right side from the selected legend.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Enter</kbd>/<kbd>Space</kbd></span>
                    <span> - Toggles the visibility of the corresponding series.</span>
                </li>
			</ul>
		</li>
		<li>
            <b>ZOOMING AND PANNING</b>
            <ul>
                <li>
                    <span class="key-class"><kbd>Ctrl</kbd> + <kbd>+</kbd></span>
                    <span> - Zoom in the chart.</span>
                </li>
				<li>
                    <span class="key-class"><kbd>Ctrl</kbd> + <kbd>-</kbd></span>
                    <span> - Zoom out the chart.</span>
                </li>
				<li>
                    <span class="key-class"><kbd>Down</kbd>/<kbd>Up arrow</kbd></span>
                    <span> - Pans the chart vertically.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Left</kbd>/<kbd>Right arrow</kbd></span>
                    <span> - Pans the chart horizontally.</span>
                </li>
				<li>
                    <span class="key-class"><kbd>R</kbd></span>
                    <span> - Reset the zoomed chart.</span>
                </li>
            </ul>
        </li>
        <li>
            <b>PRINT</b>
            <ul>
                <li>
                    <span class="key-class"><kbd>Ctrl</kbd> + <kbd>P</kbd></span>
                    <span> - Prints the chart.</span>
                </li>
            </ul>
        </li>
    </ul>
</div>

</div>

</template>
<style scoped>

</style>
<script>
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Chart, Category, ColumnSeries, Legend, Tooltip, StripLine, Selection, Zoom} from "@syncfusion/ej2-vue-charts";
import { Browser, EmitType } from '@syncfusion/ej2-base';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
let FillColors=[] ;
let TextColor;
if(theme === "Material"){
    FillColors = ["#00bdae", "#404041", "#357cd2", "#e56590", "#f8b883", "#70ad47", "#dd8abd", "#7f84e8", "#7bb4eb","#ea7a57", "#404041", "#00bdae"];
    TextColor = '#000000';
}
else if(theme === 'Fluent'){
    FillColors =  ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
    "#7D39C0"];
    TextColor = '#000000';
}
else if(theme === 'FluentDark'){
    FillColors =  ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
    "#7D39C0"];
    TextColor = '#FFFFFF';
}
else if(theme === 'Bootstrap5'){
    FillColors =  ["#6355C7", "#FFB400", "#2196F5", "#F7523F", "#963C70", "#4BE0BC", "#FD7400", "#C9E422", "#0C7DA0",
    "#162F88"];
    TextColor = '#000000';
}
else if(theme === 'Bootstrap5Dark'){
    FillColors =  ["#8F80F4", "#FFD46D", "#6CBDFF", "#FF7F71", "#FF6DB3", "#63F5D2", "#FCAA65", "#ECFF77", "#EF8EFF",
    "#5F82FD"];
    TextColor = '#FFFFFF';
}
else if(theme === 'Tailwind'){
    FillColors =  ["#5A61F6", "#65A30D", "#334155", "#14B8A6", "#8B5CF6", "#0369A1", "#F97316", "#9333EA", "#F59E0B", "#15803D"];
    TextColor = '#000000';
}
else if(theme === 'TailwindDark'){
    FillColors =  ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6", "#10B981"];
    TextColor = '#FFFFFF';
}
else if(theme === 'MaterialDark'){
    FillColors =  ["#9ECB08", "#56AEFF", "#C57AFF", "#61EAA9", "#EBBB3E", "#F45C5C", "#8A77FF", "#63C7FF", "#FF84B0","#F7C928"];
    TextColor = '#FFFFFF';
}
else if(theme === 'FabricDark'){
    FillColors = ["#4472C4", "#ED7D31", "#FFC000", "#70AD47"];
    TextColor = '#FFFFFF';
}
else if(theme === 'BootstrapDark'){
    FillColors =  ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6','#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
    TextColor = '#FFFFFF';
}
else if(theme === 'Fabric'){
    FillColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5', '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
    TextColor = '#000000';
}
else if(theme === 'Bootstrap'){
    FillColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6','#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
    TextColor = '#000000';
}
else if(theme === 'Bootstrap4'){
    FillColors =  ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6','#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
    TextColor = '#000000';
}
else if(theme === 'HighContrast'){
    FillColors = ["#79ECE4", "#E98272", "#DFE6B6", "#C6E773", "#BA98FF", "#FA83C3", "#00C27A", "#43ACEF", "#D681EF",
        "#D8BC6E"];
    TextColor = '#FFFFFF';
}
else if(theme === 'Material3'){
    FillColors = ["#6355C7", "#00AEE0", "#FFB400", "#F7523F", "#963C70", "#FD7400", "#4BE0BC", "#2196F5", "#DE3D8A", "#162F88"];
    TextColor = "#000000";
}
else if(theme === 'Material3Dark'){
    FillColors = ["#4EAAFF", "#FA4EAB", "#FFF500", "#17EA58", "#38FFE7",
        "#FF9E45", "#B3F32F", "#B93CE4", "#FC5664", "#9B55FF"];
    TextColor = "#FFFFFF";
}
else {
    FillColors =  ["#5ECB9B", "#A860F1", "#EBA844", "#557EF7", "#E9599B", "#BFC529", "#3BC6CF", "#7A68EC", "#74B706","#EA6266"];
    TextColor = '#FFFFFF';
}

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
         theme: theme,
                seriesData1: [
                    { Month: 'Jan 15', Sales: 10 },
                    { Month: 'Jan 31', Sales: 15 },
                    { Month: 'Feb 15', Sales: 15 },
                    { Month: 'Feb 28', Sales: 20 },
                    { Month: 'March 15', Sales: 20 },
                    { Month: 'March 31', Sales: 25 },
                    { Month: 'March', Sales: null },
                ],
                seriesData2: [
                    { Month: 'Apr 15', Sales: 36 },
                    { Month: 'Apr 30', Sales: 48 },
                    { Month: 'May 15', Sales: 43 },
                    { Month: 'May 31', Sales: 59 },
                    { Month: 'Jun 15', Sales: 35 },
                    { Month: 'Jun 30', Sales: 50 },
                    { Month: 'Jun', Sales: null },
                ],
                seriesData3: [
                    { Month: 'Jul 15', Sales: 30 },
                    { Month: 'Jul 31', Sales: 45 },
                    { Month: 'Aug 15', Sales: 30 },
                    { Month: 'Aug 31', Sales: 55 },
                    { Month: 'Sep 15', Sales: 57 },
                    { Month: 'Sep 30', Sales: 60 },
                    { Month: 'Sep', Sales: null },
                ],
                seriesData4: [
                    { Month: 'Oct 15', Sales: 60 },
                    { Month: 'Oct 31', Sales: 70 },
                    { Month: 'Nov 15', Sales: 70 },
                    { Month: 'Nov 30', Sales: 70 },
                    { Month: 'Dec 15', Sales: 90 },
                    { Month: 'Dec 31', Sales: 100 },
                ],
     //Initializing Primary X Axis           
      primaryXAxis: {
            valueType: 'Category',
            majorGridLines: {
                width: 0
            },
            labelStyle: {
                size: "0px"
            },
            majorTickLines: {
                width: 0
            },
        },

         
      //Initializing Primary Y Axis
          primaryYAxis: {
            title: "Sales in Percentage",
            labelFormat: "{value}%",
            maximum: 120,
            lineStyle: {
                width: 0
            },
            majorTickLines: {
                width: 0
            },
            stripLines: [
                {
                    isSegmented: true, start: 33, end: 35.5,  visible: true, segmentStart:0, segmentEnd:5, color:FillColors[0],
                },
                {
                    isSegmented:true , start:39, end:39.2, visible:true, text:"Jan - Mar" , segmentStart:0, segmentEnd:5, color:"transparent", textStyle: {color: TextColor},
                },
                {
                    isSegmented:true , start:65, end:67.5, visible:true, segmentStart:7, segmentEnd:12, color:FillColors[1],
                },
                {
                    isSegmented:true , start:70, end:70.2, visible:true, text:"Apr - Jun" , segmentStart:7, segmentEnd:12, color:"transparent", textStyle: {color: TextColor},
                },
                {
                    isSegmented:true , start:65, end:67.5, visible:true , segmentStart:14, segmentEnd:19, color:FillColors[2],
                },
                {
                    isSegmented:true , start:70, end:70.2, visible:true, text:"Jul - Sep" , segmentStart:14, segmentEnd:19, color:"transparent", textStyle: {color: TextColor},
                },
                {
                    isSegmented:true , start:104, end:106.5, visible:true, segmentStart:21, segmentEnd:26, color:FillColors[3],
                },
                {
                    isSegmented:true , start:109, end:109.2, visible:true, text:"Oct - Dec" , segmentStart:21, segmentEnd:26, color:"transparent", textStyle: {color: TextColor},
                }
            ]
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        width: Browser.isDevice ? "100%" : "75%",
        tooltip: { 
            enable: true
         },
      title: 'Quarterly Sales Chart',
      legendSettings: {
        mode: 'Range'
    },
     enableAnimation: false,
     enableSideBySidePlacement: false,
     selectionMode: 'Point',
     selectionPattern: 'DiagonalForward',
        zoomSettings: {
           enableSelectionZooming: true,
        },          
    };
  },
  provide: {
    chart: [Chart, Category, ColumnSeries, Legend, StripLine,Tooltip, Selection, Zoom]
  },
  methods: {
    load: function(args =ILoadedEventArgs) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },
        legendClick : function(ILegendClickEventArgs) {
            this.getStriplineValues(ILegendClickEventArgs.series.name);
         },
        getStriplineValues : function(legendClickedName) {
          let chart =this.$refs.chart.ej2Instances;
          let seriesIndex =0;
          let Segments = [[0, 5], [7, 12], [14, 19], [21, 26]];
          for (let i = 0; i < chart.series.length; i++) {
            let name = chart.series[i].name; 
            let visible = name === legendClickedName ? !chart.series[i].visible: chart.series[i].visible;
            if (seriesIndex > 3) {
                seriesIndex = 0;
            }
            if (name == "Quarter 1") {
                chart.primaryYAxis.stripLines[0].visible = chart.primaryYAxis.stripLines[1].visible = visible;
                if (chart.primaryYAxis.stripLines[0].visible) {
                    chart.primaryYAxis.stripLines[0].segmentStart = chart.primaryYAxis.stripLines[1].segmentStart = Segments[seriesIndex][0];
                    chart.primaryYAxis.stripLines[0].segmentEnd  = chart.primaryYAxis.stripLines[1].segmentEnd = Segments[seriesIndex][1];
                    seriesIndex++;
                }
            }
            else if (name == "Quarter 2") {
                chart.primaryYAxis.stripLines[2].visible = chart.primaryYAxis.stripLines[3].visible = visible;
                if (chart.primaryYAxis.stripLines[2].visible) {
                    chart.primaryYAxis.stripLines[2].segmentStart = chart.primaryYAxis.stripLines[3].segmentStart = Segments[seriesIndex][0];
                    chart.primaryYAxis.stripLines[2].segmentEnd = chart.primaryYAxis.stripLines[3].segmentEnd = Segments[seriesIndex][1];
                    seriesIndex++;
                }
            }
            else if (name == "Quarter 3") {
                chart.primaryYAxis.stripLines[4].visible = chart.primaryYAxis.stripLines[5].visible = visible;
                if (chart.primaryYAxis.stripLines[4].visible) {
                    chart.primaryYAxis.stripLines[4].segmentStart = chart.primaryYAxis.stripLines[5].segmentStart = Segments[seriesIndex][0];
                    chart.primaryYAxis.stripLines[4].segmentEnd = chart.primaryYAxis.stripLines[5].segmentEnd = Segments[seriesIndex][1];
                    seriesIndex++;
                }
            }
            else {
                chart.primaryYAxis.stripLines[6].visible = chart.primaryYAxis.stripLines[7].visible = visible;
                if (chart.primaryYAxis.stripLines[6].visible) {
                    chart.primaryYAxis.stripLines[6].segmentStart = chart.primaryYAxis.stripLines[7].segmentStart = Segments[seriesIndex][0];
                    chart.primaryYAxis.stripLines[6].segmentEnd = chart.primaryYAxis.stripLines[7].segmentEnd = Segments[seriesIndex][1];
                    seriesIndex++;
                }
            }
        }
        this.$refs.chart.refreshLiveData();
      }
    },
};
</script>