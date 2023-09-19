<template>
  <div>
    <div class="col-lg-9 control-section" style="overflow:auto;">
      <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings"
          :enablePaging="enablePaging" :pageSettings="pageSettings" :pagerSettings="pagerSettings"
          :gridSettings="gridSettings" :width="width" :height="height"></ejs-pivotview>
      </div>
    </div>
    <div class="col-lg-3 property-section pivot-property-section">
      <table id="property" title="Properties" style="width: 100%;height:100%;" class="pivot-property-panel-table">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div class="hdrlabel">Pager Position
              </div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist id='Pager_Position' ref='Pager_Position' :change="onDropDownChange"
                  :dataSource='pagerPositions' index=1></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div class="hdrlabel">Show Pager
              </div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist id='Pager_View' ref='Pager_View' :change="onDropDownChange"
                  :dataSource='pagerViewData' index=2></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div class="hdrlabel">Show Page Size
              </div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist id='Page_Size' ref='Page_Size' :change="onDropDownChange" :dataSource='pageSizes'
                  index=2></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div class="hdrlabel">Compact View
              </div>
            </td>
            <td>
              <div>
                <ejs-checkbox id='Compact_View' ref="Compact_View" :change="onCompactCheckBoxChange"></ejs-checkbox>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div class="hdrlabel">Inverse Pager
              </div>
            </td>
            <td>
              <div>
                <ejs-checkbox id='Inverse' ref="Inverse" :change="onInverseCheckBoxChange"></ejs-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="action-description">
      <p>This sample shows how to use the paging option to break and load a large data source into chunks and display
        them
        page by page. You can also use the built-in navigation buttons to move between pages.
      </p>
    </div>
    <div id="description">
      <p>The pivot table provides an optimized way to render rows and columns page by page without displaying the entire
        pivot data. To enable paging, set the <code>enablePaging</code> property to <b>true</b>. You can also configure
        page information for
        row and column, such as page size, current page, and so on, using the <code>pageSettings</code>. The
        <code>pageSettings</code>
        properties are explained in-detail below:
      </p>
      <table>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>currentRowPage :</code>
          </td>
          <td>Holds the current page number, row-wise. You can also change the page number at runtime.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 10px 0;width: 180px;">
            <code>currentColumnPage :</code>
          </td>
          <td>Holds the current page number, column-wise. You can also change the page number at runtime.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>rowPageSize :</code>
          </td>
          <td>Indicates the number of records to be displayed in each page, row-wise. You can also change the page
            size at runtime.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>columnPageSize :</code>
          </td>
          <td>Indicates the number of records to be displayed in each page, column-wise. You can also change the page
            size at runtime.</td>
        </tr>
      </table>
      <br />
      <p>Also, you can customize the paging UI by changing the position, visibility, page size, and other settings for
        row and column using the <code>pagerSettings</code>. The <code>pagerSettings</code> properties are explained
        in-detail below:
      </p>
      <table>
        <tr>
          <td style="vertical-align: top;padding: 10px 0;width: 180px;">
            <code>position :</code>
          </td>
          <td>Display the pager UI either at top or bottom of the Pivot Table.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>isInversed :</code>
          </td>
          <td>Toggle and display the row and column pagers.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>showRowPager :</code>
          </td>
          <td>Show or hide the row pager in the pager UI.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>showColumnPager :</code>
          </td>
          <td>Show or hide the column pager in the pager UI.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>showRowPageSize :</code>
          </td>
          <td>Show or hide the pre-defined page sizes in the row pager UI.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>showColumnPageSize :</code>
          </td>
          <td>Show or hide the pre-defined page sizes in the column pager UI.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>rowPageSizes :</code>
          </td>
          <td>Allows you to assign a set of pre-defined page sizes in the pager UI's "Rows per page" dropdown, which
            can be used to change the number of records displayed in row at runtime.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>columnPageSizes :</code>
          </td>
          <td>Allows you to assign a set of pre-defined page sizes in the pager UI's "Columns per page" dropdown,
            which can be used to change the number of records displayed in column at runtime.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>enableCompactView :</code>
          </td>
          <td>Allows the paging UI to be displayed with minimal design by hiding all paging information except
            navigation options.</td>
        </tr>
        <tr>
          <td style="vertical-align: top;padding: 4px 0;">
            <code>template :</code>
          </td>
          <td>Allows you to change the appearance of the pager UI by displaying user-defined HTML elements instead of
            built-in HTML elements.</td>
        </tr>
      </table>
      <br />
      <p>
        <strong>Injecting Module:</strong>
      </p>
      <p>
        The pivot table features are segregated into individual modules. To use the paging option, we
        need to inject the
        <code>Pager</code> module using the
        <code>provide</code> section.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import {
  PivotViewComponent,
  PagerPosition,
  Pager
} from "@syncfusion/ej2-vue-pivotview";
import {
  DropDownListComponent,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import {
  CheckBoxComponent,
  ChangeEventArgs as checkEventArgs
} from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
import {
  DataManager,
  WebApiAdaptor
} from "@syncfusion/ej2-data";
enableRipple(false);

let remoteData: DataManager = new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});

export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        type: 'JSON',
        dataSource: remoteData,
        expandAll: true,
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
        filters: []
      },
      width: '100%',
      height: 600,
      enablePaging: true,
      pageSettings: {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
      },
      pagerSettings: {
        position: 'Bottom',
        enableCompactView: false,
        showColumnPager: true,
        showRowPager: true
      },
      gridSettings: { columnWidth: 120 },
      pagerPositions: ['Top', 'Bottom'],
      pageSizes: ['Row', 'Column', 'Both', 'None'],
      pagerViewData: ['Row', 'Column', 'Both']
    };
  },
  provide: {
    pivotview: [Pager]
  },
  methods: {
    onDropDownChange: function (args: ChangeEventArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (args.element.id === 'Pager_Position') {
        pivotObj.pagerSettings.position = args.value as PagerPosition;
      } else if (args.element.id === 'Pager_View') {
        if (args.value === 'Row') {
          pivotObj.pagerSettings.showRowPager = true;
          pivotObj.pagerSettings.showColumnPager = false;
        } else if (args.value === 'Column') {
          pivotObj.pagerSettings.showRowPager = false;
          pivotObj.pagerSettings.showColumnPager = true;
        } else {
          pivotObj.pagerSettings.showRowPager = pivotObj.pagerSettings.showColumnPager = true;
        }
      } else {
        if (args.value === 'Row') {
          pivotObj.pagerSettings.showRowPageSize = true;
          pivotObj.pagerSettings.showColumnPageSize = false;
        } else if (args.value === 'Column') {
          pivotObj.pagerSettings.showRowPageSize = false;
          pivotObj.pagerSettings.showColumnPageSize = true;
        } else if (args.value === 'Both') {
          pivotObj.pagerSettings.showRowPageSize = pivotObj.pagerSettings.showColumnPageSize = true;
        } else {
          pivotObj.pagerSettings.showRowPageSize = pivotObj.pagerSettings.showColumnPageSize = false;
        }
      }
    },
    onCompactCheckBoxChange: function (args: checkEventArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      pivotObj.pagerSettings.enableCompactView = args.checked;
    },
    onInverseCheckBoxChange: function (args: checkEventArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      pivotObj.pagerSettings.isInversed = args.checked;
    },
  }
}
</script>

<style scoped>
/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}

/deep/ .control-section {
  min-height: 255px !important;
}

/deep/ #PivotViewcontainerwrapper {
  height: auto !important;
}

/deep/ .e-bigger .e-float-input.e-control-wrapper {
  width: 100% !important;
}

/deep/ .pivot-property-panel-table div {
  padding: 0;
}

/deep/ .pivot-property-panel-table {
  margin-left: 10px;
}
</style>