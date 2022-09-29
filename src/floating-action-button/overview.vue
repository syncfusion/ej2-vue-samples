<template>
    <div class="control-section">
        <div class="fab-grid-container custom-index">
            <ejs-grid  ref="grid" id="Grid" :dataSource="data" :editSettings="editSettings"> </ejs-grid>
            <ejs-fab id="fab" target="#Grid" iconCss="fab-icons fab-icon-add" title="Add Record" v-on:click.native="fabClick"></ejs-fab>
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
   .fab-grid-container #Grid {
        position: relative;
    }
    .custom-index{
        z-index:500 !important;
    }

    @font-face {
        font-family: 'fab-icons';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    [class^="fab-icon-"],
    [class*=" fab-icon-"] {
        font-family: 'fab-icons' !important;
        speak: none;
        font-size: 55px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .fab-icon-add:before {
        content: "\e704";
    }
</style>
<script>
    import Vue from 'vue'
    import { GridPlugin,Edit } from '@syncfusion/ej2-vue-grids';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";
    Vue.use(GridPlugin,FabPlugin);
    export default {
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
