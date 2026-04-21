<template>
  <div class="control-pane">
    <div class="control-section">
      <div align="center">
      <ejs-sankey
        id="sankey-container"
        ref="sankey"
        title="California Energy Consumption in 2023"
        subTitle="Source: Lawrence Livermore National Laboratory"
        :width="width"
        :height="height"
        background="transparent"
        :linkStyle="linkStyle"
        :labelSettings="labelSettings"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
        :load="load"
      >
        <e-sankey-nodes>
          <e-sankey-node id="Electricity Generation" :offset="-120" />
          <e-sankey-node id="Residential"          :offset="38" />
          <e-sankey-node id="Commercial"           :offset="36" />
          <e-sankey-node id="Industrial"           :offset="34" />
          <e-sankey-node id="Transportation"       :offset="32" />
          <e-sankey-node id="Rejected Energy"      :offset="-40" />
          <e-sankey-node id="Energy Services" />
          <e-sankey-node id="Solar" />
          <e-sankey-node id="Nuclear" />
          <e-sankey-node id="Wind" />
          <e-sankey-node id="Geothermal" />
          <e-sankey-node id="Natural Gas" />
          <e-sankey-node id="Coal" />
          <e-sankey-node id="Biomass" />
          <e-sankey-node id="Petroleum" :offset="-10" />
        </e-sankey-nodes>

        <e-sankey-links>
          <!-- Electricity Generation sources -->
          <e-sankey-link source-id="Solar"          target-id="Electricity Generation" :value="454" />
          <e-sankey-link source-id="Nuclear"        target-id="Electricity Generation" :value="185" />
          <e-sankey-link source-id="Wind"           target-id="Electricity Generation" :value="47.8" />
          <e-sankey-link source-id="Geothermal"     target-id="Electricity Generation" :value="40" />
          <e-sankey-link source-id="Natural Gas"    target-id="Electricity Generation" :value="800" />
          <e-sankey-link source-id="Coal"           target-id="Electricity Generation" :value="28.7" />
          <e-sankey-link source-id="Biomass"        target-id="Electricity Generation" :value="50" />

          <!-- Sector inflows -->
          <e-sankey-link source-id="Electricity Generation" target-id="Residential"    :value="182" />
          <e-sankey-link source-id="Natural Gas"            target-id="Residential"    :value="400" />
          <e-sankey-link source-id="Petroleum"              target-id="Residential"    :value="50" />

          <e-sankey-link source-id="Electricity Generation" target-id="Commercial"     :value="351" />
          <e-sankey-link source-id="Natural Gas"            target-id="Commercial"     :value="300" />

          <e-sankey-link source-id="Electricity Generation" target-id="Industrial"     :value="641" />
          <e-sankey-link source-id="Natural Gas"            target-id="Industrial"     :value="786" />
          <e-sankey-link source-id="Biomass"                target-id="Industrial"     :value="563" />
          <e-sankey-link source-id="Petroleum"              target-id="Industrial"     :value="300" />

          <e-sankey-link source-id="Electricity Generation" target-id="Transportation" :value="20" />
          <e-sankey-link source-id="Natural Gas"            target-id="Transportation" :value="51" />
          <e-sankey-link source-id="Biomass"                target-id="Transportation" :value="71" />
          <e-sankey-link source-id="Petroleum"              target-id="Transportation" :value="2486" />

          <!-- Rejected Energy -->
          <e-sankey-link source-id="Residential"    target-id="Rejected Energy" :value="432" />
          <e-sankey-link source-id="Commercial"     target-id="Rejected Energy" :value="351" />
          <e-sankey-link source-id="Industrial"     target-id="Rejected Energy" :value="972" />
          <e-sankey-link source-id="Transportation" target-id="Rejected Energy" :value="1920" />

          <!-- Useful Energy Services -->
          <e-sankey-link source-id="Residential"    target-id="Energy Services" :value="200" />
          <e-sankey-link source-id="Commercial"     target-id="Energy Services" :value="300" />
          <e-sankey-link source-id="Industrial"     target-id="Energy Services" :value="755" />
          <e-sankey-link source-id="Transportation" target-id="Energy Services" :value="637" />
        </e-sankey-links>
      </ejs-sankey>
    </div>
    </div>

    <div id="action-description">
      <p>
        Explore California’s 2023 energy consumption in TBtu (Trillion British Thermal Units) with an interactive Sankey
        chart based on Lawrence Livermore National Laboratory data. Follow energy flows from generation sources to
        Residential, Commercial, Industrial, and Transportation sectors, highlighting useful energy services versus
        rejected energy.
      </p>
    </div>

    <div id="description">
      <p>
        This Sankey chart illustrates energy flow across sources, carriers, and usage sectors,
        with labeled nodes and interactive tooltips that reveal detailed link and value information.
      </p>

      <p><strong>Key features:</strong></p>
      <ul>
        <li>Configure nodes to represent energy sources and consumption sectors</li>
        <li>Define links to trace energy flow from generation through end use</li>
        <li>Enable tooltips for exploring individual flow values and relationships</li>
        <li>Hover over nodes or links for deeper insight into the energy distribution pattern</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  SankeyComponent,
  SankeyLegend,
  SankeyTooltip,
  SankeyNodesCollectionDirective,
  SankeyNodeDirective,
  SankeyLinksCollectionDirective,
  SankeyLinkDirective,
  SankeyExport
} from "@syncfusion/ej2-vue-charts"

import { Browser } from "@syncfusion/ej2-base"
import { loadSankeyChartTheme } from './theme-color'

export default {
  name: 'SankeyDefault',

  components: {
    'ejs-sankey': SankeyComponent,
    'e-sankey-nodes': SankeyNodesCollectionDirective,
    'e-sankey-node': SankeyNodeDirective,
    'e-sankey-links': SankeyLinksCollectionDirective,
    'e-sankey-link': SankeyLinkDirective
  },

  provide: {
    sankey: [SankeyLegend, SankeyTooltip, SankeyExport]
  },

  data() {
    return {
      width: '90%',
      height: Browser.isDevice ? '600px' : '450px',

      linkStyle: {
        opacity: 0.6,
        curvature: 0.55,
        colorType: 'Source'
      },

      labelSettings: {
        visible: Browser.isDevice ? false : true
      },

      legendSettings: {
        visible: true,
        position: 'Bottom',
        itemPadding: 8
      },

      tooltip: {
        enable: true,
        nodeTemplate: '${name}: ${value} TBtu',
        linkTemplate: Browser.isDevice ? 
        '${start.name}: ${start.out} TBtu → <br/> ${target.name}: ${target.in} TBtu' :
        '${start.name}: ${start.out} TBtu → ${target.name}: ${target.in} TBtu'
      }
    }
  },

  methods: {
    load(args) {
      loadSankeyChartTheme(args)
    }
  }
}
</script>

<style scoped>
.control-pane {
  font-family: 'Segoe UI', 'Roboto', sans-serif;
}
</style>