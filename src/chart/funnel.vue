<template>
  <div class="control-section">
    <div >
      <ejs-accumulationchart
        ref="funnel"
        :theme="theme"
        id="container"
        style="display:block;  width: 92%"
        :tooltip="tooltip"
        :title="title"
        :legendSettings="legendSettings"

        :enableAnimation="false"
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            :dataSource="data"
            xName="InterviewProcess"
            yName="Candidates"
            :neckWidth="neckWidth"
            :neckHeight="neckHeight"
            :width="width"
            height="80%"
            :explode="explode"
            :dataLabel="dataLabel"
            type="Funnel"
          ></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>

    <div id="action-description">
      <p>This Vue Funnel Chart example shows a funnel chart for recruitment process. Datalabels show information about the points.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a funnel chart. The labels are smartly arranged to avoid overlapping. The width and height of the funnel chart can be customized using the <code>NeckWidth</code> and <code>NeckHeight</code> properties.
      </p>
     <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use Funnel feature, we need to inject
        <code>FunnelSeries</code> into the
        <code>provide</code> option.
      </p>
      <p>
        More information about the funnel series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/funnel/" aria-label="Navigate to the documentation for Funnel Chart in Vue Accumulation Chart component">documentation section</a>.
    </p>
    </div>
  </div>
</template>
<style scoped>
.control-section {
  min-height: 450px;
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  FunnelSeries,
  AccumulationLegend,
  AccumulationDataLabel
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      data: [
        { InterviewProcess : "Hired", Candidates : 50, DataLabelMappingName:"Hired: 50"},
        { InterviewProcess : "Personal Interview", Candidates : 58, DataLabelMappingName: Browser.isDevice ? "Personal <br> Interview: 58" : "Personal Interview: 58"},
        { InterviewProcess : "Telephonic Interview", Candidates : 85, DataLabelMappingName:"Telephonic <br> Interview: 85"},
        { InterviewProcess : "Screening", Candidates : 105, DataLabelMappingName:"Screening: 105"},
        { InterviewProcess : "Initial Validation", Candidates : 145, DataLabelMappingName: Browser.isDevice ? "Initial <br> Validation: 145" :  "Initial Validation: 145"},
        { InterviewProcess : "Candidates Applied", Candidates : 250, DataLabelMappingName:"Candidates Applied: 250"},
      ],
      
      dataLabel: {
        name: 'DataLabelMappingName', visible: true, position: 'Inside', 
        font: {
            fontWeight: '600',  
          },
        connectorStyle: {length:'20px'},
      },
      neckWidth: "15%",
      neckHeight: "18%",
      width: Browser.isDevice ? "90%" : "50%",
      explode: false,
    
      legendSettings: {
        visible: false
      },

      tooltip: { enable: false},

      title: "Recruitment Process",
    };
  },
  provide: {
    accumulationchart: [
      AccumulationLegend,
      FunnelSeries,
      AccumulationDataLabel,
      AccumulationTooltip
    ]
  },
  updated: function() {
    this.$nextTick(function() {
      this.$refs.funnel.ej2Instances.refresh();
      this.$refs.funnel.ej2Instances.removeSvg();
      this.$refs.funnel.ej2Instances.refreshSeries();
      this.$refs.funnel.ej2Instances.refreshChart();
    });
  }
};
</script>