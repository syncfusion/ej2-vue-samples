<template>
  <div class="control-section" style="text-align: center;">
    <div >
      <ejs-accumulationchart
        ref="funnel"
        :theme="theme"
        id="container"
        :width="width"
        :tooltip="tooltip"
        :title="title"
        :legendSettings="legendSettings"
        :pointRender = "pointRender"
        :enableAnimation="false"
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            :dataSource="data"
            xName="InterviewProcess"
            yName="Candidates"
            :explode="explode"
            :funnelMode="funnelMode"
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
        In this example, you can see how to render and configure a funnel chart to visualize the recruitment process. The <code>trapezoidal</code> funnelMode is set to display the stages of the employment cycle, from the number of candidates who applied to the number of hires. The labels are smartly arranged to avoid overlapping.
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

import { loadAccumulationChartTheme, funnelPointRender  } from "./theme-color";
let theme = loadAccumulationChartTheme();

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
        { InterviewProcess : "Candidates Applied", Candidates : 170, DataLabelMappingName:"Applications Received: 170"},
        { InterviewProcess : "Initial Validation", Candidates : 145, DataLabelMappingName: "Initial Validation: 145"},
        { InterviewProcess : "Screening", Candidates : 105, DataLabelMappingName: Browser.isDevice ? "Screening <br> Completed: 105" : "Screening Completed: 105"},
        { InterviewProcess : "Telephonic Interview", Candidates : 85, DataLabelMappingName: Browser.isDevice ? "Phone <br> Interview: 85" : "Phone Interview: 85"},
        { InterviewProcess : "Personal Interview", Candidates : 58, DataLabelMappingName: Browser.isDevice ? "Final <br> Interview: 58" : "Final Interview: 58"},
        { InterviewProcess : "Hired", Candidates : 30, DataLabelMappingName: "Final <br> Selections: 30"},
      ],
      pointRender: function (args) {
        funnelPointRender(args);
        },
      dataLabel: {
        name: 'DataLabelMappingName', visible: true, position: 'Inside', 
        font: {
            fontWeight: '600', size: Browser.isDevice ? '11px' : '13px'
          },
        connectorStyle: {length:'20px'},
      },
      explode: false,
      funnelMode : 'Trapezoidal',
    
      legendSettings: {
        visible: false
      },

      tooltip: { enable: false},
      width: Browser.isDevice ? '100%' : '75%',
      title: "Recruitment Funnel: From Application to Hiring",
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