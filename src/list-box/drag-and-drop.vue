<template>
    <div class="col-lg-12 control-section" style="min-height: 450px">
        <div id="drag-drop-wrapper">
            <div class="listbox-control">
                <h4>Group A</h4>
                <ejs-listbox ref="listObj1" :dataSource="dataA" :fields="fields" height="330px" scope="combined-list" :allowDragAndDrop="true" @drop="onDropGroupA"></ejs-listbox>
            </div>
            <span class="e-swap-icon"></span>
            <div class="listbox-control">
                <h4>Group B</h4>
                <ejs-listbox ref="listObj2" :dataSource="dataB" scope="combined-list" height="330px" :fields="fields" :allowDragAndDrop="true" @drop="onDropGroupB"></ejs-listbox>
                <button class="e-btn" @click="saveChanges">Update</button>
            </div>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the drag and drop functionalities of a ListBox. Drag an item or a group of selected items and drop it within the same list box or into another list box.</p>
        </div>
        <div id="description">
            <p>The ListBox component allows the user to drag and drop a desired item from one list box into another list box. The drag and drop feature can be enabled by using the following properties,</p>
            <ul>
                <li>To drag and drop a desired item within the ListBox, the <code>allowDragAndDrop</code> property should be set to <code>true.</code></li>
                <li>To drag and drop between two listboxes, the <code>scope</code> property should be set to both the listboxes.</li>
            </ul>
            <p>In this sample, a list of countries is loaded in <code>Group A</code> and another list of countries is loaded in <code>Group B.</code> You can drag and drop an item or multiple items from
                <code>Group A</code> to <code>Group B</code>, and vice versa. Save changes is enabled in the sample for <code>Group B</code>, so that by clicking save changes button, user can save the
                changes in json using <code>Datamanager</code> save changes method.</p>
            <p>More information about drag and drop functionalities in the ListBox can be found in the
                <a href="https://ej2.syncfusion.com/vue/documentation/list-box/" target="_blank"> documentation section</a>.
            </p>  
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    @font-face {
        font-family: 'swap-icon';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmXID+ZgAAAcgAAAA4aGVhZBR5I0cAAADQAAAANmhoZWEIVQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAcAAAAAAHAAAAABm1heHABDgAZAAABCAAAACBuYW1ltM6mlQAAAgAAAAI9cG9zdFSIYnYAAARAAAAALgABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAARPvYwl8PPPUACwQAAAAAANixb1gAAAAA2LFvWAAAAAAD+AOaAAAACAACAAAAAAAAAAEAAAACAA0AAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAHAAAAAIAAAAAA/gDmgAFAAwAABMhBxcBITUxBTUhNycIA1HcLAFP/BAD8Pyv2ysBYs4uATy9AUDOLgAAAAASAN4AAQAAAAAAAAABAAAAAQAAAAAAAQAJAAEAAQAAAAAAAgAHAAoAAQAAAAAAAwAJABEAAQAAAAAABAAJABoAAQAAAAAABQALACMAAQAAAAAABgAJAC4AAQAAAAAACgAsADcAAQAAAAAACwASAGMAAwABBAkAAAACAHUAAwABBAkAAQASAHcAAwABBAkAAgAOAIkAAwABBAkAAwASAJcAAwABBAkABAASAKkAAwABBAkABQAWALsAAwABBAkABgASANEAAwABBAkACgBYAOMAAwABBAkACwAkATsgRm9udCBTd2FwUmVndWxhckZvbnQgU3dhcEZvbnQgU3dhcFZlcnNpb24gMS4wRm9udCBTd2FwRm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABGAG8AbgB0ACAAUwB3AGEAcABSAGUAZwB1AGwAYQByAEYAbwBuAHQAIABTAHcAYQBwAEYAbwBuAHQAIABTAHcAYQBwAFYAZQByAHMAaQBvAG4AIAAxAC4AMABGAG8AbgB0ACAAUwB3AGEAcABGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQIBAwAEU3dhcAAAAAA=) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    .e-swap-icon {
        font-family: 'swap-icon' !important;
        speak: none;
        font-size: 40px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        align-self: center;
        margin: 0 10px;
        transform: rotateX(180deg);
    }
    #drag-drop-wrapper .e-swap-icon:before {
        content: '\e700';
    }
    #drag-drop-wrapper {
        width: 85%;
        margin: auto;
        display: flex;
    }
    #drag-drop-wrapper .e-btn {
        margin-top: 15px;
        float: right;
        margin-bottom: -43px;
    }
    .e-bigger #drag-drop-wrapper .e-btn {
        margin-bottom: -51px;
    }
    .listbox-control {
        width: 40%;
        margin: auto;
    }
    @media screen and (max-width: 590px) {
        .listbox-control,
        #drag-drop-wrapper {
            width: 100%;
        }
        .e-swap-icon {
            font-size: 30px;
        }
    }
    #right-pane {
        transform: none !important;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager } from "@syncfusion/ej2-data";
import * as data from './datasource.json';
Vue.use(ListBoxPlugin);
export default Vue.extend({
    data: function() {
        return {
            // Set the dragAndDropA & dragAndDropB data to the data source.
            dataA: new DataManager({
                json: data.dragAndDropA
            }),
            dataB: new DataManager({
                json: data.dragAndDropB
            }),
            // Map the appropriate columns to fields property.
            fields: { text: 'Name'},
            modifiedDataA: { addedRecords: [], deletedRecords: [], changedRecords: [] },
            modifiedDataB: { addedRecords: [], deletedRecords: [], changedRecords: [] }
        };
    },
    methods: {
        savechanges() {
            this.dataA.saveChanges(this.modifiedDataA);
            this.dataB.saveChanges(this.modifiedDataB);
            this.modifiedDataA.addedRecords = []; this.modifiedDataB.addedRecords = [];
        },
        onDropGroupA(args) {
            args.items.forEach((item) => {
                if (!this.$refs.listObj1.getDataByValue(item[this.fields.text])) {/*Preventing item manipulation while doing drag and drop within same list box.*/
                    this.modifiedDataB.addedRecords.push(item);
                    this.modifiedDataA.deletedRecords.push(item);
                }
            });
        },
        onDropGroupB(args) {
            args.items.forEach((item) => {
                if (!this.$refs.listObj2.getDataByValue(item[this.fields.text])) {
                    this.modifiedDataA.addedRecords.push(item);
                    this.modifiedDataB.deletedRecords.push(item);
                }
            });
        }
    }
});
</script>