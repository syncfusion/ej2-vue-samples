<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample demonstrates the Grid component with the row spanning feature. In this sample, you will see multiple rows spanning.
    </p>
</div>
    <div>
        <ejs-grid :dataSource="data" height='auto' width='auto' gridLines='Both' :enableHover='false' :allowSelection= 'false' :allowTextWrap='true' :queryCellInfo='queryCellInfoEvent'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='150' textAlign='Right' freeze='Left' isPrimaryKey={true}></e-column>
                <e-column field='EmployeeName' headerText='Employee Name' width='200'></e-column>
                <e-column field='9:00' headerText='9:00 AM' width='120'></e-column>
                <e-column field='9:30' headerText='9:30 AM' width='120'></e-column>
                <e-column field='10:00' headerText='10:00 AM' width='120'></e-column>
                <e-column field='10:30' headerText='10:30 AM' width='120'></e-column>
                <e-column field='11:00' headerText='11:00 AM' width='120'></e-column>
                <e-column field='11:30' headerText='11:30 AM' width='120'></e-column>
                <e-column field='12:00' headerText='12:00 PM' width='120'></e-column>
                <e-column field='12:30' headerText='12:30 PM' width='120'></e-column>
                <e-column field='1:00' headerText='1:00 PM' width='120'></e-column>
                <e-column field='1:30' headerText='1:30 PM' width='120'></e-column>
                <e-column field='2:00' headerText='2:00 PM' width='120'></e-column>
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
        This feature enables you to span multiple adjacent cells. Use the <code>rowSpan</code> attribute to define how many cells are to be spanned in the <a href='https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/'><code>QueryCellInfo</code></a> event. 
        Additionally, you can freeze columns at specific positions by setting the freeze property to left, right, center and fixed in the column definition.
    </p>
    <p>
        In this demo, you can see that the <b>Davolio</b> cell is spanned to two rows in the employee named column. Similarly, the <b>Lunch Break</b> cell is spanned to ten rows and three columns in the 1:00 column. 
        Also, the <b>Employee ID</b> column is frozen to the left.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Grid features are separated into feature-wise modules. 
        To use the frozen rows and columns feature, we need to inject the <code>Freeze</code> module into the <code>provide</code> section.
    </p>
    <p>
        More information on the row spanning can be found in this
        <a target="_blank" 
        href="https://ej2.syncfusion.com/vue/documentation/grid/row/row-spanning">
        documentation section</a>.
    </p>
</div>

</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, QueryCellInfoEventArgs, Freeze } from '@syncfusion/ej2-vue-grids';
import { columnSpanData, ColumnSpanDataType  } from './data-source';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
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
                if (args.column.field === '9:00' || args.column.field === '2:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '1:00') {
                    args.colSpan = 3;
                    args.rowSpan = 10;
                } else if (args.column.field === '4:30') {
                    args.colSpan = 2;
                    args.rowSpan = 2;
                } else if (args.column.field === 'EmployeeName') {
                     args.rowSpan = 2;
                 }
                break;
            case 10002:
                if (args.column.field === '9:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '2:30') {
                    args.colSpan = 2;
                    args.rowSpan = 5;
                } else if (args.column.field === '3:30') {
                    args.colSpan = 2;
                }
                break;
            case 10003:
                if (args.column.field === '9:00') {
                    args.colSpan = 3;
                    args.rowSpan = 2;
                } else if (args.column.field === '10:30' || args.column.field === '3:30' || args.column.field === '4:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                }
                break;
            case 10004:
                if (args.column.field === '11:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '4:00') {
                    args.colSpan = 2;
                }
                break;
            case 10005:
                if (args.column.field === '9:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '3:30') {
                    args.colSpan = 2;
                    args.rowSpan = 2;
                } else if (args.column.field === '4:30') {
                    args.colSpan = 2;
                }
                break;
        default: this.rowSpanIteration(args, data.EmployeeID);
        }
    },
    rowSpanIteration: function(args: any, value: number) {
    switch (value) {
        case 10006:
                if (args.column.field === '9:00' || args.column.field === '4:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '10:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                }
                break;
        case 10007:
                if (args.column.field === '9:00' || args.column.field === '10:30' || args.column.field === '3:00') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:30' || args.column.field === '4:00') {
                    args.colSpan = 3;
                }
                break;
            case 10008:
                if (args.column.field === '9:00' || args.column.field === '10:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '2:30') {
                    args.colSpan = 3;
                    args.rowSpan = 2;
                } else if (args.column.field === '4:00') {
                    args.colSpan = 2;
                }
                break;
            case 10009:
                if (args.column.field === '9:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                    args.rowSpan = 2;
                } else if (args.column.field === '4:30') {
                    args.colSpan = 2;
                }
                break;
            case 10010:
                if (args.column.field === '9:00' || args.column.field === '2:30' || args.column.field === '4:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '10:30') {
                    args.colSpan = 2;
                }
                break;
            }
    }
    },
    provide: {
      grid: [Freeze]
    }
  }
</script>