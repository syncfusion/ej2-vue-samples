<template>
  <div class="col-lg-12 control-section">
    <div class="generative-aiassistview">
      <ejs-aiassistview
        id="aiAssistView"
        ref="aiAssistViewRef"
        :enableStreaming="true"
        :promptSuggestions="suggestions"
        :promptSuggestionsHeader="'Suggested Prompts'"
        :promptRequest="onPromptRequest"
        :toolbarSettings="toolbarSettings"
        bannerTemplate="bannerTemplate"
      >
        <template v-slot:bannerTemplate>
          <div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>AI Assistance Generative UI</h3>
            <i>Ask anything about weather, economy, or market trends.</i>
          </div>
        </template>

        <template v-slot:weatherCardTemplate>
          <WeatherCard />
        </template>

        <template v-slot:gdpChartTemplate>
          <GDPChart
            :privateConsumptionData="chartData.privateConsumptionData"
            :governmentConsumptionData="chartData.governmentConsumptionData"
            :investmentData="chartData.investmentData"
            :foreignTradeData="chartData.foreignTradeData"
            :gdpData="chartData.gdpData"
          />
        </template>

        <template v-slot:salesGridTemplate>
          <SalesGrid :gridData="salesGridData" />
        </template>
      </ejs-aiassistview>
    </div>
  </div>
</template>

<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import WeatherCard from "./weatherCard.vue";
import GDPChart from "./gdpChart.vue";
import SalesGrid from "./salesGrid.vue";
import promptResponseData from "./promptResponseData.json";

const { cardBlockData, chartBlockData, gridBlockData } = promptResponseData;

export default {
  components: {
    "ejs-aiassistview": AIAssistViewComponent,
    WeatherCard,
    GDPChart,
    SalesGrid
  },

  data() {
    return {
      suggestions: promptResponseData.generativeSuggestions,
      salesGridData: [],
      chartData: {
        privateConsumptionData:    [],
        governmentConsumptionData: [],
        investmentData:            [],
        foreignTradeData:          [],
        gdpData:                   []
      },
      toolbarSettings: {
        items: [
          { iconCss: "e-icons e-refresh", align: "Right", tooltip: "Start new chat" }
        ],
        itemClicked: (args) => {
          this.toolbarItemClicked(args);
        }
      }
    };
  },

  mounted() {
    const inst = this.$refs.aiAssistViewRef.ej2Instances;

    inst.registerToolUI({
      toolName: "weather-card",
      template: "weatherCardTemplate"
    });

    inst.registerToolUI({
      toolName: "chart-tool",
      template: "gdpChartTemplate",
      handler: (container, args) => {
        this.chartData = {
          privateConsumptionData:    args.privateConsumptionData,
          governmentConsumptionData: args.governmentConsumptionData,
          investmentData:            args.investmentData,
          foreignTradeData:          args.foreignTradeData,
          gdpData:                   args.gdpData
        };
      }
    });

    inst.registerToolUI({
      toolName: "sales-grid",
      template: "salesGridTemplate",
      handler: (container, args) => {
        this.salesGridData = args.gridData;
      }
    });

    this.$nextTick(() => {
      inst.prompts = [{ prompt: "What are France's GDP growth trends?" }];
      this.$nextTick(() => {
        inst.addPromptResponse({ blocks: chartBlockData });
      });
    });
  },

  methods: {
    onPromptRequest(args) {
      const inst = this.$refs.aiAssistViewRef.ej2Instances;

      setTimeout(() => {
        if (args.prompt === "What is the weather in New York?") {
          inst.addPromptResponse({ blocks: cardBlockData });
          return;
        }

        if (args.prompt === "What are France's GDP growth trends?") {
          inst.addPromptResponse({ blocks: chartBlockData });
          return;
        }

        if (args.prompt === "How do smartphone sales perform across regions?") {
          inst.addPromptResponse({ blocks: gridBlockData });
          return;
        }

        inst.addPromptResponse(
          "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services."
        );
      }, 2000);
    },

    toolbarItemClicked(args) {
      if (args.item.iconCss === "e-icons e-refresh") {
        this.$refs.aiAssistViewRef.ej2Instances.prompts = [];
        this.salesGridData = [];
        this.chartData = {
          privateConsumptionData:    [],
          governmentConsumptionData: [],
          investmentData:            [],
          foreignTradeData:          [],
          gdpData:                   []
        };
      }
    }
  }
};
</script>

<style>
.generative-aiassistview {
  height: 620px;
  width: 65vw;
  margin: 0 auto;
}

.generative-aiassistview .banner-content .e-assistview-icon:before {
  font-size: 35px;
}

.generative-aiassistview .banner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 330px;
  text-align: center;
}

.generative-aiassistview .chartContainer {
  width: max-content;
}

.generative-aiassistview .chartContainer svg text {
  fill: rgba(0, 0, 0, 1);
}

body[class*="highcontrast"] .generative-aiassistview .chartContainer svg text,
body[class*="dark"] .generative-aiassistview .chartContainer svg text {
  fill: white;
}

@media only screen and (max-width: 750px) {
  .generative-aiassistview {
    width: 100%;
  }
}

#aiAssistView .e-response-item-template .e-toolbar-items {
  margin-left: 35px;
}
</style>