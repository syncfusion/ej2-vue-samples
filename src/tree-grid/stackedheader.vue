<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        This example demonstrates how to use stacked headers and a customizable column chooser in the Tree Grid component.
    </div>
    <div>
        <ejs-treegrid ref='gridInstance' id='gridInstance' :toolbar='toolbar'  :dataSource='data' childMapping='subtasks' :height='350' :showColumnChooser='true' :columnChooserSettings='columnChooserSettings' :treeColumnIndex='1' :allowPaging='true' clipMode='EllipsisWithTooltip'>
            <e-columns>
                <e-column headerText='Order Details' :columns='orderColumns' textAlign='Center'></e-column>
                <e-column headerText='Shipment Details' :columns='shipColumns' textAlign='Center'></e-column>
                <e-column headerText='Price Details' :columns='priceColumns' textAlign='Center'></e-column>
            </e-columns>
            
            <!-- Custom Column Chooser Template using TreeView Component -->
            <template v-slot:template="{data}">
                <div  v-if="data && data.columns && data.columns.length">
                    <ejs-treeview id='treeview' :fields='dataProcess(data)' cssClass="no-border"  :showCheckBox='true' :keyPress='nodeCheck' :nodeClicked='nodeCheck'></ejs-treeview>
                </div>
                <div v-else class="no-record-text">No Matches Found</div>
            </template>

            <!-- Column Chooser Header Template -->
            <template v-slot:headerTemplate>
                <div>
                    <span id="column-chooser-text">Column Options</span>
                </div>
            </template>
            
            <!-- Column Chooser Footer Template with Apply/Close Buttons -->
            <template v-slot:footerTemplate>
                <ejs-button v-on:click='columnChooserSubmit'>Apply</ejs-button>
                <ejs-button v-on:click='columnChooserClose'>Close</ejs-button>
            </template>
        </ejs-treegrid>
    </div>
    <div id="description">
        <p>The stacked header category explains the use of the <code>columns -> column</code> property to group columns under common headers, facilitating a clear and structured display of data for enhanced readability and user navigation. 
            It categorizes columns into three groups: Order Details, comprising Order ID, Order Name, and Order Date; Shipment Details, comprising Shipment Category, Shipped Date, and Units; and Price Details, comprising Price per Unit and Total Price.</p>
        <p>The <b>Column Chooser Template</b> category highlights a customizable layout that allows users to manage column visibility, offering flexibility and improving the overall user experience.</p>
        <p>Key properties include <code>columnChooserSettings -> headerTemplate</code> for a custom header layout, <code>columnChooserSettings -> template</code> for a custom content layout,<code>columnChooserSettings -> footerTemplate</code> for a custom footer layout, and <code>enableSearching</code> to enable or disable search functionality.</p>
        <p>
            More information on the stacked header configuration can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-resizing#resize-stacked-column">documentation</a> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, ColumnChooser, Toolbar, } from "@syncfusion/ej2-vue-treegrid";
import { stackedData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-button': ButtonComponent,
    "ejs-treeview": TreeViewComponent,
  },  
  data: () => {
    return {
      data: stackedData,
      toolbar: ['ColumnChooser'],
      columnChooserSettings: { enableSearching: true, template: 'template', headerTemplate: 'headerTemplate', footerTemplate: 'footerTemplate' },
     
          
      orderColumns : [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90, showInColumnChooser: false },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 180 },
            { field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
        ],
        shipColumns : [
            { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 150 },
            { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', format: 'yMd', width: 120 },
            { field: 'units', headerText: 'Units', textAlign: 'Right', width: 90 }
        ],
        priceColumns : [
            { field: 'unitPrice', headerText: 'Price per unit', width: 150, format: 'c2', textAlign: 'Right' },
            { field: 'price', headerText: 'Total Price', width: 120, format: 'c', textAlign: 'Right' }
        ]
    };
  },
   provide : {
      treegrid: [ Page, Toolbar, ColumnChooser],
    },
    methods :{
        // Handle checking/unchecking nodes in the TreeView (column chooser)
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
        // Render TreeView in the column chooser's Content
        dataProcess: function (args: any) {
            const parentNodes = [
            { id: 1, name: 'Order Details', hasChild: true, expanded: true },
            { id: 2, name: 'Shipment Details', hasChild: true, expanded: true },
            { id: 3, name: 'Price Details', hasChild: true, expanded: true },   
        ];
            let treeData = [];
            if (args.columns && args.columns.length) {
            treeData = args.columns.map((column: any) => {
                let parentId: any;
                switch (column.field) {
                    case 'orderID':
                    case 'orderName':
                    case 'orderDate':
                    parentId = 1;
                    break;
                case 'shipMentCategory':
                case 'shippedDate':
                case 'units':
                    parentId = 2;
                    break;
                    case 'unitPrice':
                case 'price':
                
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
            gridInstance.grid.columnChooserModule.hideDialog();
        },
        // Apply the column chooser selection
        columnChooserSubmit: function (): void {
            const checkedElements: string[] = [];
            const uncheckedElements: string[] = []; 
            var gridInstance = (document.getElementById('gridInstance') as any).ej2_instances[0];
            if((document.getElementById('treeview') as any) != null){
            var treeObj = (document.getElementById('treeview') as any).ej2_instances[0];
            }
            var showColumns = gridInstance.getVisibleColumns().filter(function (column: any) { return (column.showInColumnChooser === true); });
            showColumns = showColumns.map(function (col: any) { return col.headerText; });
            const treeItems = document.querySelectorAll('.e-list-item');
            if(treeObj != null || treeObj != undefined){
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
            gridInstance.grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
            }
            else{
                gridInstance.grid.columnChooserModule.hideDialog();
            }
        },
    }

}
</script>
<style>
    .no-record-text {
        padding: 5px;
    }
    
    .e-dlg-header{
        width:300px;
    }
    
    #gridInstance_gridcontrol_ccdlg .e-columnChooserTemplate {
        overflow-x: auto !important;
        overflow-y: auto;
        min-width: 230px;
    }

    #gridInstance_gridcontrol_ccdlg .e-columnChooserTemplate .e-ul {
        width: fit-content !important;
    }
 
    #gridInstance_gridcontrol_ccdlg .e-treeview .e-text-content,
    #gridInstance_gridcontrol_ccdlg .e-treeview .e-list-text {
        white-space: nowrap !important;
        overflow: hidden;
    }
</style>