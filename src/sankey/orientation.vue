<template>
  <div class="control-section">
    <div>
    <ejs-sankey
      id="sankey-orientation"
      ref="sankey"
      align="center"
      :title="title"
      subTitle="Source: EPA 2022 GHG Inventory"
      :subTitleStyle="subTitleStyle"
      orientation="Vertical"
      :width="width"
      :height="height"
      background="transparent"
      :linkStyle="linkStyle"
      :nodeStyle="nodeStyle"
      :labelSettings="labelSettings"
      :legendSettings="legendSettings"
      :tooltip="tooltip"
      :load="load"
    >
      <e-sankey-nodes>
        <!-- Major sectors -->
        <e-sankey-node id="Transportation" />
        <e-sankey-node id="Industry" />
        <e-sankey-node id="Commercial" />
        <e-sankey-node id="Residential" />
        <e-sankey-node id="Agriculture" />

        <!-- Sub-paths -->
        <e-sankey-node id="Road (Cars/Trucks)" />
        <e-sankey-node id="Aviation & Other Transport" />
        <e-sankey-node id="Direct Emissions" />
        <e-sankey-node id="Indirect Electricity Use" />

        <!-- Final sink -->
        <e-sankey-node id="Atmosphere (Gross Emissions)" />
      </e-sankey-nodes>

      <e-sankey-links>
        <!-- Sector → Sub-paths -->
        <e-sankey-link source-id="Transportation" target-id="Road (Cars/Trucks)"          :value="1482" />
        <e-sankey-link source-id="Transportation" target-id="Aviation & Other Transport" :value="326" />

        <e-sankey-link source-id="Industry"       target-id="Direct Emissions"          :value="1416" />
        <e-sankey-link source-id="Industry"       target-id="Indirect Electricity Use"  :value="457" />

        <e-sankey-link source-id="Commercial"     target-id="Indirect Electricity Use"  :value="600" />
        <e-sankey-link source-id="Residential"    target-id="Indirect Electricity Use"  :value="500" />

        <e-sankey-link source-id="Agriculture"    target-id="Direct Emissions"          :value="664" />

        <!-- All paths → Final emissions -->
        <e-sankey-link source-id="Road (Cars/Trucks)"          target-id="Atmosphere (Gross Emissions)" :value="1482" />
        <e-sankey-link source-id="Aviation & Other Transport"  target-id="Atmosphere (Gross Emissions)" :value="326" />
        <e-sankey-link source-id="Direct Emissions"            target-id="Atmosphere (Gross Emissions)" :value="2080" />
        <e-sankey-link source-id="Indirect Electricity Use"    target-id="Atmosphere (Gross Emissions)" :value="1557" />
      </e-sankey-links>
    </ejs-sankey>
    </div>

  <div id="action-description">
      <p>
        Explore U.S. greenhouse gas emissions by economic sector (2022) in a vertical Sankey chart measured in MMT CO₂e
        (million metric tons of CO₂ equivalent). Trace top‑to‑bottom flows from sectors—Transportation, Industry,
        Commercial, Residential, and Agriculture—through direct and indirect electricity use to total atmospheric
        emissions.
      </p>
    </div>
    <div id="description">
      <p>
        This vertical Sankey chart visualizes U.S. GHG emissions in MMT CO₂e, showing how sector sources split into
        road, aviation, direct emissions, and indirect electricity use before reaching total atmospheric emissions.
        Hover or tap nodes and links to see precise MMT CO₂e values and relationships.
      </p>

      <p><strong>Key features:</strong></p>
      <ul>
        <li>Break down emissions by sector and pathway (direct vs. indirect electricity)</li>
        <li>Follow top‑to‑bottom flows to the atmosphere for clear attribution</li>
        <li>Interactive tooltips reveal exact MMT CO₂e values per node and link</li>
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
  name: 'SankeyOrientation',

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
      title: Browser.isDevice
        ? 'U.S. GHG Emissions'
        : 'U.S. Greenhouse Gas Emissions by Economic Sector (2022)',

      orientation: 'Vertical',

      width: '90%',

      height: '650px',

      linkStyle: {
        opacity: 0.5,
        curvature: 0.55,
        colorType: 'Source'
      },

      nodeStyle: {
        width: 30,
        padding: 8,
        opacity: 1
      },

      labelSettings: {
        visible: Browser.isDevice ? false : true
      },

      legendSettings: Browser.isDevice
        ? { visible: false }
        : { visible: true, position: 'Right', margin: { left: 100 } },

      tooltip: {
        enable: true,
        nodeTemplate: '${name}: ${value} MMT CO₂e',
        linkTemplate: Browser.isDevice ? 
        '${start.name}: ${start.out} MMT CO₂e → <br/> ${target.name}: ${target.in} MMT CO₂e' : 
        '${start.name}: ${start.out} MMT CO₂e → ${target.name}: ${target.in} MMT CO₂e'
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
#sankey-orientation {
  display: block;
}
</style>