<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the column spanning feature. In this sample, we have spanned multiple
        adjacent cells together.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" height='auto' width='auto' gridLines='Both' :allowTextWrap='true' :queryCellInfo='queryCellInfoEvent'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='150' textAlign='Right' isPrimaryKey={true}></e-column>
                <e-column field='EmployeeName' headerText='Employee Name' width='200'></e-column>
                <e-column field='9:00' headerText='9:00 AM' width='120'></e-column>
                <e-column field='9:30' headerText='9:30 AM' width='120'></e-column>
                <e-column field='10:00' headerText='10:00 AM' width='120'></e-column>
                <e-column field='10:30' headerText='10:30 AM' width='120'></e-column>
                <e-column field='11:00' headerText='11:00 AM' width='120'></e-column>
                <e-column field='11:30' headerText='11:30 AM' width='120'></e-column>
                <e-column field='12:00' headerText='12:00 PM' width='120'></e-column>
                <e-column field='12:30' headerText='12:30 PM' width='120'></e-column>
                <e-column field='2:30' headerText='2:30 PM' width='120'></e-column>
                <e-column field='3:00' headerText='3:00 PM' width='120'></e-column>
                <e-column field='3:30' headerText='3:30 PM' width='120'></e-column>
                <e-column field='4:00' headerText='4:00 PM' width='120'></e-column>
                <e-column field='4:30' headerText='4:30 PM' width='120'></e-column>
                <e-column field='5:00' headerText='5:00 PM' width='120'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
         <p>
            Grid allows to span the multiple adjacent cells. In <a href='http://ej2.syncfusion.com/vue/documentation/grid/api-queryCellInfoEventArgs.html'><code>queryCellInfo</code></a> event, you can define the <code>colSpan</code> attribute to span the cells.
        </p>
        <p>
            In this demo, Employee <b>Davolio</b> doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned and
            Employee <b>Buchamann</b> doing support work from 9.30 AM to 11.00 AM, so that cells have spanned.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { GridPlugin, QueryCellInfoEventArgs } from '@syncfusion/ej2-vue-grids';
import { columnSpanData, ColumnSpanDataType  } from './data-source';

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
      return {
        data: columnSpanData
        }
  },
  methods: {
    queryCellInfoEvent: function(args: any) {
        let data: ColumnSpanDataType = args.data as ColumnSpanDataType;
        switch (data.EmployeeID) {
            case 10001:
                if (args.column.field === '9:00' || args.column.field === '2:30' || args.column.field === '4:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:00') {
                    args.colSpan = 3;
                }
                break;
            case 10002:
                if (args.column.field === '9:30' || args.column.field === '2:30' ||
                    args.column.field === '4:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:00') {
                    args.colSpan = 4;
                }
                break;
            case 10003:
                if (args.column.field === '9:00' || args.column.field === '11:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '10:30' || args.column.field === '3:30' ||
                    args.column.field === '4:30' || args.column.field === '2:30') {
                    args.colSpan = 2;
                }
                break;
            case 10004:
                if (args.column.field === '9:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '4:00' || args.column.field === '2:30') {
                    args.colSpan = 2;
                }
                break;
            case 10005:
                if (args.column.field === '9:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '3:30' || args.column.field === '4:30' || args.column.field === '2:30') {
                    args.colSpan = 2;
                }
                break;
            case 10006:
                if (args.column.field === '9:00' || args.column.field === '4:30' ||
                    args.column.field === '2:30' || args.column.field === '3:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '10:00' || args.column.field === '11:30') {
                    args.colSpan = 3;
                }
                break;
            case 10007:
                if (args.column.field === '9:00' || args.column.field === '3:00' || args.column.field === '10:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:30' || args.column.field === '4:00') {
                    args.colSpan = 3;
                }
                break;
            case 10008:
                if (args.column.field === '9:00' || args.column.field === '10:30' || args.column.field === '2:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '4:00') {
                    args.colSpan = 2;
                }
                break;
            default:
                this.extendQueryCellEvent(args, data.EmployeeID);
        }
    },
    extendQueryCellEvent: function(args: any, value: number) {
        switch (value) {
            case 10009:
                if (args.column.field === '9:00' || args.column.field === '11:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '4:30' || args.column.field === '2:30') {
                    args.colSpan = 2;
                }
                break;
            case 100010:
                if (args.column.field === '9:00' || args.column.field === '2:30' ||
                    args.column.field === '4:00' || args.column.field === '11:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '10:30') {
                    args.colSpan = 2;
                }
                break;
        }
    }
    }
  })
</script>