<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This example showcases the Syncfusion EJ2 Grid component which features stacked headers, column resizing, and a customizable column chooser template.
        </p>
    </div>
    <div>
        <ejs-grid ref='gridInstance' id='gridInstance' :dataSource="data" :allowPaging='true' :enableHover='false' :clipMode="'EllipsisWithTooltip'" :allowResizing='true' :allowSorting='true' :allowMultiSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :showColumnChooser='true' :columnChooserSettings='columnChooserSettings' :queryCellInfo='queryCellInfo' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='CustomerID' headerText='Customer ID' width='160' minWidth='115' textAlign='Right' :showInColumnChooser="false" :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerName' headerText='Name' width='150' minWidth='120'></e-column>
                <e-column headerText='Order Details' :columns='orderColumns' textAlign='Center'></e-column>
                <e-column headerText='Shipping Details' :columns='shipColumns' textAlign='Center'></e-column>
                <e-column headerText='Delivery Status' :columns='deliveryColumns' textAlign='Center'></e-column>
            </e-columns>
            <template v-slot:template="{data}">
                <div  v-if="data && data.columns && data.columns.length">
                    <ejs-treeview id='treeview' :fields='dataProcess(data)' cssClass="no-border" :enableRtl="enableRTL" :showCheckBox='true' :keyPress='nodeCheck' :nodeClicked='nodeCheck'></ejs-treeview>
                </div>
                <div v-else class="no-record-text">No Matches Found</div>
            </template>
            
            <template v-slot:headerTemplate>
                <div>
                    <span class="e-icons e-columns" id="column-chooser-icon"></span> 
                    <span id="column-chooser-text">Column Options</span>
                </div>
            </template>
            
            <template v-slot:footerTemplate>
                <ejs-button v-on:click='columnChooserSubmit'>Apply</ejs-button>
                <ejs-button v-on:click='columnChooserClose'>Close</ejs-button>
            </template>

            <template v-slot:locationTemplate="{ data }">
              <div>
                <img :src="'src/grid/images/Map.png'" class="e-grid-location-image" alt="Location" />
                <span>{{ data.ShipCountry }}</span>
              </div>
            </template>

            <template v-slot:feedbackTemplate="{ data }">
              <div id="status" class="rating">
                <ejs-rating :readOnly="true" :value="data.Feedback" cssClass="custom-rating"></ejs-rating>
              </div>
            </template>
        </ejs-grid>
    </div>

     <div id="description">
        <p><b>Stacked Headers:</b></p>
        <p>
            The Grid allows grouping columns to display multiple levels of headers using the
            <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel#columns">columns->columns</a></code> property.
        </p>
        <p>In this demo, the columns are grouped as follows:</p>
        <ul>
            <li><b>Order Details</b>: ID and Date</li>
            <li><b>Shipping Details</b>: Country and Charges </li>
            <li><b>Delivery Status</b>: Status and Feedback</li>
        </ul>
        <br/>
        <p><b>Column Resizing:</b></p>
        <p>
            Columns can be resized by clicking and dragging the right edges of the column header. To enable this feature, set
            <code><a target="_blank" class="code" href="http://ej2.syncfusion.com/vue/documentation/api/grid#allowresizing">allowResizing </a></code>
            to true. To disable resizing for specific columns, set
            <code><a target="_blank" class="code" href="http://ej2.syncfusion.com/vue/documentation/api/grid/column#allowresizing">columns->allowResizing </a></code> 
            to false.
        </p>
        <br/>
        <p><b>Column Chooser Templates:</b></p>
        <p>The column chooser template is used to customize layout and manage column visibility.</p>
        <p>Key properties: </p>
        <ul>
            <li>
                <code>columnChooserSettings->headerTemplate </code> :- Defines the header template.                   
            </li>
            <li>
                <code>columnChooserSettings->template </code> :- Defines the content template.
            </li>
            <li>
                <code>columnChooserSettings->footerTemplate </code> :- Defines the footer template.
            </li>
            <li>
                <code>columnChooserSettings->enableSearching </code> :- Enables or disables search functionality.
            </li>
        </ul>
        <p>In this demo, the <code> showInColumnChooser </code> of the <b>Customer ID</b> column is set to false, preventing it from being displayed in the column chooser popup.</p>
        <br/>
        <p>
            More information on the stacked header configuration can be found in this 
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/columns/column-resizing#resize-stacked-column">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Resize, Sort, Toolbar, Edit, Filter, ColumnChooser, Column } from '@syncfusion/ej2-vue-grids';
import { stackedHeaderData } from './data-source';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-button': ButtonComponent,
    "ejs-treeview": TreeViewComponent,
    "ejs-rating": RatingComponent
  },
  data: () => {
      return {
          data: stackedHeaderData,
          filterSettings: { type: 'Excel' },
          editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
          orderidrules: { required: true, number: true },
          toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'],
          columnChooserSettings: { enableSearching: true, template: 'template', headerTemplate: 'headerTemplate', footerTemplate: 'footerTemplate' },
          enableRTL: false,
          orderColumns: [
                { field: 'OrderID', headerText: 'ID', textAlign: 'Right', width: 90, minWidth: 90 },
                { field: 'OrderDate', headerText: 'Date', textAlign: 'Right', width: 110, minWidth: 105, format: 'yMd', editType: 'datepickeredit' }
            ],
            shipColumns: [
                { field: 'ShipCountry', headerText: 'Country', textAlign: 'Left', width: 150, minWidth: 120, editType: 'dropdownedit', template : 'locationTemplate', validationRules: { required: true } },
                { field: 'Freight', headerText: 'Charges', textAlign: 'Right', width: 130, minWidth: 115, format: 'C2', editType: 'numericedit', validationRules: { required: true, number: true } },
            ],
            deliveryColumns: [
                { field: 'Status', headerText: 'Status', textAlign: 'Center', width: 150, minWidth: 120, editType: 'dropdownedit', validationRules: { required: true, } },
                { field: 'Feedback', headerText: 'Feedback', allowResizing: false, textAlign: 'Center', width: 130, minWidth: 115, template : 'feedbackTemplate', editType: 'numericedit', validationRules: { required: true, min: 0, max: 5 } }
            ],
        }
    },
    methods: {
        nodeCheck: function (args: any): void {
            let checkedNode = [args.node];
            var treeObj = (document.getElementById('treeview') as any).ej2_instances[0];
            if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
            let getNodeDetails = treeObj.getNode(args.node);
                if (getNodeDetails.isChecked == 'true') {
                    treeObj.uncheckAll(checkedNode);
                } else {
                    treeObj.checkAll(checkedNode);
                }
            }
        },
        queryCellInfo: function(args: any) {
        if (args.column.field === 'Status') {
            if (args.data['Status'] === 'Delivered') {
                args.cell.classList.remove('e-inprogress');
                args.cell.classList.add('e-delivered');
            } else {
                args.cell.classList.remove('e-delivered');
                args.cell.classList.add('e-inprogress');
            }
        }
        },
        dataProcess: function (args: any) {
            const parentNodes = [
            { id: 1, name: 'Order Details', hasChild: true, expanded: true },
            { id: 2, name: 'Shipping Details', hasChild: true, expanded: true },
            { id: 3, name: 'Delivery Status', hasChild: true, expanded: true },
        ];
            let treeData = [];
            if (args.columns && args.columns.length) {
            treeData = args.columns.map((column: any) => {
                let parentId: any;
                switch (column.field) {
                    case 'OrderID':
                    case 'OrderDate':
                        parentId = 1;
                        break;
                    case 'ShipCountry':
                    case 'Freight':
                        parentId = 2;
                        break;
                    case 'Status':
                    case 'Feedback':
                        parentId = 3;
                        break;
                    default :
                        break;
                }
                return {
                id: column.uid,
                name: column.headerText,
                pid: parentId,
                isChecked: column.visible
                };
            });
            const uniquePids: string[] = [];
            treeData.forEach((item: any) => {
                if (uniquePids.indexOf(item.pid) === -1) {
                    uniquePids.push(item.pid);
                }
            });
            const filteredParents = parentNodes.filter((parent: any) => uniquePids.indexOf(parent.id) !== -1);
            treeData.push(...filteredParents);
            } else {
                treeData = [];
            }
            const fields = { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
            return fields;
        },
        columnChooserClose: function(): void {
            var gridInstance = (document.getElementById('gridInstance') as any).ej2_instances[0];
            gridInstance.columnChooserModule.hideDialog();
        },
        columnChooserSubmit: function (): void {
            const checkedElements: string[] = [];
            const uncheckedElements: string[] = [];
            var gridInstance = (document.getElementById('gridInstance') as any).ej2_instances[0];
            var treeObj = (document.getElementById('treeview') as any).ej2_instances[0];
            var showColumns = gridInstance.getVisibleColumns().filter(function (column: Column) { return (column.showInColumnChooser === true); });
            showColumns = showColumns.map(function (col: any) { return col.headerText; });
            const treeItems = document.querySelectorAll('.e-list-item');
            treeItems.forEach(item => {
                const itemDetails = treeObj.getNode(item);
                if (!itemDetails.hasChildren) {
                    if (item.getAttribute('aria-checked') === 'true') {
                    checkedElements.push(itemDetails.text);
                } else {
                    uncheckedElements.push(itemDetails.text);
                }
                }
            });
            showColumns = showColumns.filter((col: any) => uncheckedElements.indexOf(col) === -1);
            checkedElements.forEach(item => {
                if (!showColumns.includes(item)) {
                    showColumns.push(item);
                }
            });
            var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
            gridInstance.columnChooserModule.changeColumnVisibility(columnsToUpdate);
        },
    },
    computed: {
        enableRTL() {
            const gridInstance = (document.getElementById('gridInstance') as any)?.ej2_instances[0];
            return gridInstance.enableRtl;
        }
    },
    provide: {
        grid: [Page, Resize, Sort, Toolbar, Edit, Filter, ColumnChooser]
    }
}
</script>
  
<style>
    #column-chooser-icon, #column-chooser-text {
        position: relative;
    }

    #column-chooser-icon {
        top: 3px;
    }

    #column-chooser-text {
        left: 5px;
    }

    .e-rtl #column-chooser-icon {
        top: 3px;
        right: 5px;
    }

    .e-rtl #column-chooser-text {
        left: 0;
    }
    
    .no-record-text {
        padding: 5px;
    }

    .custom-rating.e-rating-container .e-rating-item-container,
        .e-bigger
          .custom-rating.e-rating-container
          .e-rating-item-container
          .e-rating-icon,
        .e-bigger.custom-rating.e-rating-container
          .e-rating-item-container
          .e-rating-icon {
          font-size: 11px;
    }

    .custom-rating.e-rating-container
        .e-rating-item-container
        .e-rating-icon {
        -webkit-text-fill-color: lightgrey;
        -webkit-text-stroke: 1px lightgrey;
    }

    .custom-rating.e-rating-container
        .e-rating-item-container.e-rating-selected
        .e-rating-icon {
        background: linear-gradient(
        to right,
        #ffa600 var(--rating-value),
        #ffa600 var(--rating-value)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px #ffa600;
    }

    .e-grid-location-image {
        height: 13px;
        width: 14px;
        margin-right: 4px;
    }

    .fluent .e-grid .e-rowcell.e-delivered,
    .fluent2 .e-grid .e-rowcell.e-delivered,
    .bootstrap5 .e-grid .e-rowcell.e-delivered,
    .bootstrap5\.3 .e-grid .e-rowcell.e-delivered,
    .tailwind3 .e-grid .e-rowcell.e-delivered,
    .tailwind .e-grid .e-rowcell.e-delivered,
    .material .e-grid .e-rowcell.e-delivered,
    .fabric .e-grid .e-rowcell.e-delivered,
    .bootstrap4 .e-grid .e-rowcell.e-delivered,
    .bootstrap .e-grid .e-rowcell.e-delivered,
    .highcontrast .e-grid .e-rowcell.e-delivered,
    .fluent
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5\.3
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind3
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .material
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap4
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .highcontrast
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-grid .e-rowcell.e-delivered,
    .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #dfffe2;
        color: #00a653;
    }

    .fluent-dark .e-grid .e-rowcell.e-delivered,
    .fluent2-dark .e-grid .e-rowcell.e-delivered,
    .fluent2-highcontrast .e-grid .e-rowcell.e-delivered,
    .bootstrap5-dark .e-grid .e-rowcell.e-delivered,
    .bootstrap5\.3-dark .e-grid .e-rowcell.e-delivered,
    .highcontrast .e-grid .e-rowcell.e-delivered,
    .tailwind3-dark .e-grid .e-rowcell.e-delivered,
    .tailwind-dark .e-grid .e-rowcell.e-delivered,
    .material-dark .e-grid .e-rowcell.e-delivered,
    .fabric-dark .e-grid .e-rowcell.e-delivered,
    .bootstrap-dark .e-grid .e-rowcell.e-delivered,
    .fluent-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-highcontrast
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5\.3-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .highcontrast
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind3-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .material-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd) {
          background-color: #315c35;
          color: #38ff9c;
    }

    .material3-dark .e-grid .e-rowcell.e-delivered,
    .material3-dark
        .e-grid
        .e-rowcell.e-delivered:not(.e-editedbatchcell):not(.e-updatedtd) {
          background-color: #143e17;
          color: #8eda94;
    }

    .fluent .e-grid .e-rowcell.e-inprogress,
    .fluent2 .e-grid .e-rowcell.e-inprogress,
    .bootstrap5 .e-grid .e-rowcell.e-inprogress,
    .bootstrap5\.3 .e-grid .e-rowcell.e-inprogress,
    .tailwind3 .e-grid .e-rowcell.e-inprogress,
    .tailwind .e-grid .e-rowcell.e-inprogress,
    .material .e-grid .e-rowcell.e-inprogress,
    .fabric .e-grid .e-rowcell.e-inprogress,
    .bootstrap4 .e-grid .e-rowcell.e-inprogress,
    .bootstrap .e-grid .e-rowcell.e-inprogress,
    .highcontrast .e-grid .e-rowcell.e-inprogress,
    .fluent
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5\.3
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind3
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .material
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap4
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .highcontrast
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-grid .e-rowcell.e-inprogress,
    .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd) {
          background-color: #ffebe9;
          color: #ff3740;
    }

    .fluent-dark .e-grid .e-rowcell.e-inprogress,
    .fluent2-dark .e-grid .e-rowcell.e-inprogress,
    .fluent2-highcontrast .e-grid .e-rowcell.e-inprogress,
    .bootstrap5-dark .e-grid .e-rowcell.e-inprogress,
    .bootstrap5\.3-dark .e-grid .e-rowcell.e-inprogress,
    .highcontrast .e-grid .e-rowcell.e-inprogress,
    .tailwind3-dark .e-grid .e-rowcell.e-inprogress,
    .tailwind-dark .e-grid .e-rowcell.e-inprogress,
    .material-dark .e-grid .e-rowcell.e-inprogress,
    .fabric-dark .e-grid .e-rowcell.e-inprogress,
    .bootstrap-dark .e-grid .e-rowcell.e-inprogress,
    .fluent-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-highcontrast
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5\.3-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .highcontrast
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind3-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .material-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd) {
          background-color: #55241e;
          color: #ff9ca0;
    }

    .material3-dark .e-grid .e-rowcell.e-inprogress,
    .material3-dark
        .e-grid
        .e-rowcell.e-inprogress:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #3a1618;
        color: #ff7b81;
    }

    .no-border {
        border: none !important;
    }
</style>
