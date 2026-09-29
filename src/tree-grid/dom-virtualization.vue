<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
      <p>
        This sample demonstrates DOM virtualization in the Tree Grid component,
        enabling smooth scrolling and efficient rendering of 100,000 hierarchical
        records while maintaining optimal rendering performance and minimal
        memory consumption.
      </p>
    </div>

    <div>
<ejs-treegrid
        id="TreeGrid"
        ref="treegrid"
        :dataSource="domVirtualizationData"
        :enableVirtualization="true"
        :treeColumnIndex="2"
        idMapping="ItemID"
        parentIdMapping="ParentItemID"
        height="400"
        rowHeight="50"
        :enableDomVirtualization="true"
        :enableVirtualMaskRow="true"
        :domVirtualizationSettings="{ rowBuffer: 20 }"
        :pageSettings="{ pageSize: 100 }"
        :allowSorting="true"
        clipMode="EllipsisWithTooltip"
      >
        <e-columns>
          <e-column
            field="ItemID"
            headerText="ID"
            width="110"
            textAlign="Right"
            :isPrimaryKey="true"
          />

          <e-column
            field="ParentItemID"
            headerText="Parent ID"
            width="110"
            textAlign="Right"
            :visible="false"
          />

          <e-column field="ItemName" headerText="Inventory Name" width="320" />

          <e-column
            field="ItemType"
            headerText="Type"
            width="120"
            :visible="false"
          />

          <e-column field="Category" headerText="Category" width="200" />

          <e-column
            field="Region"
            headerText="Location"
            width="200"
            :template="'regionTemplate'"
          />

          <e-column field="Supplier" headerText="Supplier" width="240" />

          <e-column
            field="StockStatus"
            headerText="Stock Status"
            width="180"
            :template="'statusTemplate'"
          />

          <e-column
            field="Quantity"
            headerText="Quantity"
            width="120"
            textAlign="Right"
          />

          <e-column
            field="UnitPrice"
            headerText="Unit Price"
            width="130"
            textAlign="Right"
            :format="{ type: 'currency', currency: 'USD', format: 'C2' }"
          />
        </e-columns>
        <template v-slot:statusTemplate="{ data }">
          <div class="rg-badge" :class="getStatusClass(data.StockStatus)">
            {{ data.StockStatus }}
          </div>
        </template>

        <template v-slot:regionTemplate="{ data }">
          <div class="rg-region">
            <span
              class="rg-region-flag"
              v-html="getRegionFlagSvg(data.Country)"
            ></span>
            <span class="rg-region-name">
              {{ data.Region }}
            </span>
          </div>
        </template>
      </ejs-treegrid>
    </div>

    <div id="description">
      <p>
        DOM virtualization is a performance optimization feature that renders
        only the visible rows within the Tree Grid viewport instead of rendering
        the entire dataset. This significantly improves performance when
        working with large volumes of hierarchical data.
      </p>

      <p>
        With DOM virtualization enabled, the Tree Grid calculates the content
        height and renders only the necessary <code>tr</code> elements for the
        visible portion of the control. As the user scrolls, previously rendered
        rows are replaced with newly required rows, ensuring that only a minimal
        number of DOM elements are maintained at any time. This improves
        rendering speed and memory usage for large datasets.
      </p>

      <p>
        DOM virtualization is enabled by setting the
        <code>enableDomVirtualization</code> property to <code>true</code>.
        This demo loads 100,000 hierarchical records using DOM virtualization.
        Row virtualization is enabled using the
        <code>enableVirtualization</code> property.
      </p>

      <p><strong>Injecting Module:</strong></p>

      <p>
        Features of the Tree Grid component are organized into individual,
        feature-specific modules. To use DOM virtualization, inject the
        <code>DomVirtualization</code> module into the provide section.
      </p>

      <p>
        More information on DOM virtualization can be found in the
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/treegrid/virtual-scroll"
        >
          documentation
        </a>
        section.
      </p>

      <p>
        Looking for the full Vue Tree Grid component overview, features,
        pricing, and documentation? Visit our
        <a
          target="_blank"
          href="https://www.syncfusion.com/vue-components/vue-tree-grid"
        >
          Vue Tree Grid component
        </a>
        page.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  TreeGridComponent,
  ColumnDirective,
  ColumnsDirective,
  DomVirtualization,
  Sort
} from '@syncfusion/ej2-vue-treegrid';

import {
  domVirtualizationData,
  domVirtualizationDataSource
} from './data-source';

domVirtualizationDataSource();


export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },

  data() {
    return {
      domVirtualizationData,
    };
  },

  provide: {
    treegrid: [
      DomVirtualization,
      Sort
    ]
  },

  methods: {

    getStatusClass(args: any) {
      const status: string = (args || '').toString().toLowerCase();

      if (status.indexOf('available') === 0) {
        return 'rg-badge-stock-available';
      }

      if (status.indexOf('low stock') === 0) {
        return 'rg-badge-stock-low';
      }

      if (status.indexOf('out of stock') === 0) {
        return 'rg-badge-stock-out';
      }

      if (status.indexOf('discontinued') === 0) {
        return 'rg-badge-stock-discontinued';
      }

      return '';
    },

    getRegionFlagSvg(region: string) {
      switch (region) {
        case 'United States':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#B22234"/><rect y="1" width="20" height="1" fill="#fff"/><rect y="3" width="20" height="1" fill="#fff"/><rect y="5" width="20" height="1" fill="#fff"/><rect y="7" width="20" height="1" fill="#fff"/><rect y="9" width="20" height="1" fill="#fff"/><rect y="11" width="20" height="1" fill="#fff"/><rect y="13" width="20" height="1" fill="#fff"/><rect width="8" height="7" fill="#3C3B6E"/></svg>';

        case 'Canada':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#fff"/><rect width="4" height="14" fill="#D52B1E"/><rect x="16" width="4" height="14" fill="#D52B1E"/><path d="M10 3 L11 5 L13 5 L11.5 6.5 L12 9 L10 7.8 L8 9 L8.5 6.5 L7 5 L9 5 Z" fill="#D52B1E"/></svg>';

        case 'United Kingdom':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#012169"/><path d="M0 0L20 14M20 0L0 14" stroke="#FFF" stroke-width="3"/><path d="M10 0V14M0 7H20" stroke="#FFF" stroke-width="4"/><path d="M10 0V14M0 7H20" stroke="#C8102E" stroke-width="2"/></svg>';

        case 'France':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="6.67" height="14" fill="#0055A4"/><rect x="6.67" width="6.66" height="14" fill="#FFF"/><rect x="13.33" width="6.67" height="14" fill="#EF4135"/></svg>';

        case 'Australia':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#012169"/><rect width="8" height="6" fill="#012169"/><path d="M0 0L8 6M8 0L0 6" stroke="#FFF" stroke-width="1"/><path d="M4 0V6M0 3H8" stroke="#FFF" stroke-width="2"/><path d="M4 0V6M0 3H8" stroke="#C8102E" stroke-width="1"/><circle cx="15" cy="10" r="1" fill="#FFF"/><circle cx="13" cy="8" r="0.7" fill="#FFF"/><circle cx="17" cy="8" r="0.7" fill="#FFF"/></svg>';

        case 'Japan':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#FFF"/><circle cx="10" cy="7" r="4" fill="#BC002D"/></svg>';

        case 'Germany':
          return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#000"/><rect y="4.67" width="20" height="4.67" fill="#DD0000"/><rect y="9.34" width="20" height="4.66" fill="#FFCE00"/></svg>';

        case 'Singapore':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="7" fill="#EF3340"/><rect y="7" width="20" height="7" fill="#FFF"/><circle cx="5" cy="4" r="2" fill="#FFF"/><circle cx="5.6" cy="4" r="1.5" fill="#EF3340"/></svg>';
        case 'Brazil':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009B3A"/><polygon points="10,2 17,7 10,12 3,7" fill="#FFDF00"/><circle cx="10" cy="7" r="2.5" fill="#002776"/></svg>';
        case 'Netherlands':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#AE1C28"/><rect y="4.67" width="20" height="4.67" fill="#FFF"/><rect y="9.34" width="20" height="4.66" fill="#21468B"/></svg>';
        case 'South Korea':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#FFF"/><circle cx="10" cy="7" r="2.2" fill="#CD2E3A"/><path d="M10 4.8A2.2 2.2 0 0 1 10 9.2A1.1 1.1 0 0 0 10 4.8" fill="#0047A0"/></svg>';
        case 'Switzerland':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#D52B1E"/><rect x="8" y="3" width="4" height="8" fill="#FFF"/><rect x="6" y="5" width="8" height="4" fill="#FFF"/></svg>';
        case 'Sweden':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#006AA7"/><rect x="6" width="2" height="14" fill="#FECC00"/><rect y="6" width="20" height="2" fill="#FECC00"/></svg>';
        case 'Italy':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="6.67" height="14" fill="#009246"/><rect x="6.67" width="6.66" height="14" fill="#FFF"/><rect x="13.33" width="6.67" height="14" fill="#CE2B37"/></svg>';
        case 'Spain':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#AA151B"/><rect y="3" width="20" height="8" fill="#F1BF00"/></svg>';
        case 'India':
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#FF9933"/><rect y="4.67" width="20" height="4.67" fill="#FFF"/><rect y="9.34" width="20" height="4.66" fill="#138808"/><circle cx="10" cy="7" r="1.2" fill="none" stroke="#000080" stroke-width="0.4"/></svg>';
        default:
              return '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#6b7280"/></svg>';
      }
    },
  }
};
</script>

<style>
.rg-badge {
  box-sizing: border-box;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  width: 120px;
  min-height: 32px;
  line-height: 1.2;
  text-align: center;
}

.rg-badge-status-running {
  background: #66bb6a;
  color: white;
}

.rg-badge-status-stopped {
  background: #ef5350;
  color: white;
}

.rg-badge-status-degraded {
  background: #ffb74d;
  color: white;
}

.rg-badge-status-maintenance {
  background: #0277bd;
  color: white;
}

.rg-badge-stock-available {
  color: #15803d;
  background-color: #fff;
  border: 1.5px solid #ede3fb;
  border-radius: 20px;
}

.rg-badge-stock-low {
  color: #b45309;
  background-color: #fff;
  border: 1.5px solid #ede3fb;
  border-radius: 20px;
}

.rg-badge-stock-out {
  color: #dc2626;
  background-color: #fff;
  border: 1.5px solid #ede3fb;
  border-radius: 20px;
}

.rg-badge-stock-discontinued {
  color: #6b7280;
  background-color: #fff;
  border: 1.5px solid #ede3fb;
  border-radius: 20px;
}

.rg-badge-priority-low {
  background-color: #ccffcc;
  color: #00cc00;
}

.rg-badge-priority-high {
  background-color: #ffe5cc;
  color: #cc6600;
}

.rg-badge-priority-critical {
  background-color: #ffcccc;
  color: #cc0000;
}

.rg-compliance {
  width: 100px;
  height: 12px;
  background: #f3f4f6;
  border-radius: 20px;
  overflow: hidden;
}

.rg-compliance > i {
  display: block;
  height: 100%;
  background: #2563eb;
  border-radius: 20px;
}

.rg-compliance-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}

.rg-compliance-value {
  color: #1e40af;
  font-weight: 600;
}

.tailwind3-dark .rg-compliance-value,
.fluent2-dark .rg-compliance-value,
.bootstrap5\.3-dark .rg-compliance-value,
.material3-dark .rg-compliance-value,
.fluent2-highcontrast .rg-compliance-value {
  color: #fff;
}

.rg-region {
  display: flex;
  gap: 10px;
  align-items: center;
}

.rg-region-flag {
  display: inline-flex;
  width: 20px;
  height: 14px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}
</style>