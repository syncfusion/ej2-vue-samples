<template>
    <div class="control-section">
        <div id="target" class="fab-grid-container custom-index">
            <ejs-grid  ref="grid" id="Grid" :dataSource="data" :editSettings="editSettings"> </ejs-grid>
            <ejs-fab id="fab" target="#target" iconCss="e-icons e-plus" title="Add Record" v-on:click="fabClick"></ejs-fab>
        </div>
        <div id="action-description">
              <p>This sample demonstrates the usage of the Floating Action Button (FAB) component to add a new record to a DataGrid.</p>
        </div>
        <div id="description">
            <p>
                The FAB is a button that appears in front of all screen contents and performs the primary action. In this example, FAB is positioned at the bottom left of its target DataGrid to perform the add new record action.
            </p>
        </div>
    </div>
</template>
<style>
   .fab-grid-container {
        position: relative;
    }
    .custom-index{
        z-index:500 !important;
    }
</style>
<script>
    import { GridComponent, ColumnDirective, ColumnsDirective, Edit } from '@syncfusion/ej2-vue-grids';
    import { FabComponent } from "@syncfusion/ej2-vue-buttons";

    export default {
        components: {
            'ejs-grid': GridComponent,
            'e-columns': ColumnsDirective,
            'e-column': ColumnDirective,
            'ejs-fab': FabComponent
        },
        data () {
            let orders=[];
                for (let i = 1; i < 10; i++) {
                    orders.push({
                        "OrderID": 10589 + i, 
                        "CustomerID": ["VINET", "TOMSP", "SUPRD", "CHOPS", "RICSU"][Math.floor(Math.random() * 5)],
                        "Freight": (10.35 * i).toFixed(2), 
                        "ShippingCountry": ["France", "Brazil", "Switzerland", "Germany"][Math.floor(Math.random() * 4)]
                    });
                }
            return {
                data:orders,
                editSettings:{ allowAdding:true, mode: 'Dialog'}
                };
        },
        provide: {
            grid: [Edit]
        },
        methods : {
            fabClick: function() {
                this.$refs.grid.addRecord();
            }
        }
    }
</script>
