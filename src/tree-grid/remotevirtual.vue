<template>
<div class="col-lg-12 control-section">
  <div id="action-description">
    <p>This example demonstrates how to load child records on demand in the Tree Grid when using remote data. During the initial render, only parent rows are loaded and displayed in a collapsed state. Child records are fetched dynamically when a parent row is expanded.
    </p>
  </div>
     <div>
      <ejs-treegrid
        :dataSource="data"
        idMapping="TaskID"
        parentIdMapping="ParentValue"
        hasChildMapping="isParent"
        expandStateMapping="IsExpanded"
        height="450"
        :enableVirtualization="true"
        :loadChildOnDemand="true"
        :treeColumnIndex="1"
        :pageSettings="pageSettings"
      >
        <e-columns>
          <e-column
            field="TaskID"
            headerText="Task ID"
            width="80"
            textAlign="Right"
          ></e-column>
          <e-column
            field="TaskName"
            headerText="Task Name"
            width="200"
          ></e-column>
          <e-column
            field="StartDate"
            headerText="Start Date"
            width="90"
            format="yMd"
            textAlign="Right"
          ></e-column>
          <e-column
            field="EndDate"
            headerText="End Date"
            width="90"
            format="yMd"
            textAlign="Right"
          ></e-column>
          <e-column
            field="Duration"
            headerText="Duration"
            width="90"
            textAlign="Right"
          ></e-column>
          <e-column
            field="Progress"
            headerText="Progress"
            width="90"
          ></e-column>
        </e-columns>
      </ejs-treegrid>
    </div>

      <div id="description">
        The <a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/api/treegrid/#loadchildondemand'>LoadChildOnDemand</a> property is enabled by default, allowing the Tree Grid to initially render only parent records. This behavior is supported only for remote data sources and helps improve performance by minimizing the initial load. If LoadChildOnDemand is set to false, both parent and child records are loaded together during the initial rendering, and all rows are displayed in an expanded state.
        In this demo, Tree Grid features such as <a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/treegrid/virtual-scroll'>Virtualization</a> and the <a target='_blank' href='https://ej2.syncfusion.com/vue/documentation/treegrid/data-binding/remote-data'>DataManager</a> are used.
      </div>
</div>
</template>
<script lang="ts">
import {
  TreeGridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  VirtualScroll,
} from '@syncfusion/ej2-vue-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { sampleData } from './data-source';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
      let SERVICE_URI: string =
      'https://services.syncfusion.com/vue/production/api/TreeUrlDataSource';
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new UrlAdaptor(),
        crossDomain: true,
      }),
      pageSettings: { pageSize: 20 },
    };
  },
  provide: {
    treegrid: [Page, VirtualScroll],
  },
   methods:{
      
  }

}
</script>
