<template>
<div>
    <div class="control-section ddl-databinding">
        <div class="col-lg-9 ddl-data-binding">
            <div id='local' class='col-lg-6' style="margin: 0 auto;padding-top: 15px;">
                <div class='drop-down-list-content'>
                <label class="h4">Local Data</label>
                    <ejs-autocomplete id='dropdownlist1' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields'  :enableVirtualization='true' popupHeight="200px"></ejs-autocomplete>
                </div>
            </div>
            <div id='remote' class='col-lg-6' style="margin: 0 auto;padding-top: 15px;">
                <div class='drop-down-list-content'>
                <label class="h4">Remote Data</label>
                    <ejs-autocomplete id='dropdownlist2' :dataSource='data' placeholder='OrderID' :fields='customerfields'  :enableVirtualization='true' popupHeight="200px"></ejs-autocomplete>
                </div>
            </div>
            <div id='group' class='col-lg-6' style="margin: 0 auto;padding-top: 15px;">
                <div class='drop-down-list-content'>
                <label class="h4">Grouping</label>
                    <ejs-autocomplete id='dropdownlist3' :dataSource='itemData' placeholder='e.g Item 1' :fields='groupfields'  :enableVirtualization='true' popupHeight="200px"></ejs-autocomplete>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This example demonstrates the virtualization support of the AutoComplete. The component has 150 items bound to it; however, when you open the suggestion list, only few items are loaded based on the popup height, and the remaining items are loaded while scrolling.</p>
    </div>
    <div id="description">
         <p>The <code>AutoComplete</code> component supports virtualization, which improves UI performance for large amounts of
        data. To enable virtualization, set the <code>enableVirtualization</code> property to true. When virtualization is
        enabled, AutoComplete doesn't render the entire suggestion data source on initial component rendering. It loads the
        N number of items in the popup on initial rendering and the remaining set number of items will load while scrolling.
        Virtualization works with both local and remote data.</p>
        <p>To perform the virtualization feature in the AutoComplete, the <code>VirtualScroll</code> module has to be injected at the application level.</p>
    </div>
</div>
</template>
<style scoped>
    .property-panel-content {
        padding: 0 10px 10px 0;
    }

    .drop-down-list-content {
        margin: 0 auto; 
        width: 250px;
    }
    .drop-down-list-content .h4 {
        font-size: 16px;
        margin: 0 0 10px;
        font-weight: bold;
    }

    .content {
        width: 43%;
        margin: 0 auto;
        min-width: 185px;
        padding: 25px 0px;
    }

    .control-label {
        padding: 24px 0px 0px 0px;
        font-size: 12px;
        opacity: 0.54;
    }

    .control-section.ddl-databinding,
    .content-wrapper.ddl-data-binding {
        min-height: 350px;
    }
</style>
<script>
import { AutoCompleteComponent, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
let records = [];
function dataSource() {
    for (var i = 1; i <= 150; i++) {
        var item = {};
        item.id = 'id' + i;
        item.text = "Item ".concat(i);
        var randomGroup = Math.floor(Math.random() * 4) + 1;
        switch (randomGroup) {
            case 1:
                item.group = 'Group A';
                break;
            case 2:
                item.group = 'Group B';
                break;
            case 3:
                item.group = 'Group C';
                break;
            case 4:
                item.group = 'Group D';
                break;
            default:
                break;
        }
        records.push(item);
    }
}
dataSource();
var remoteData = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-autocomplete": AutoCompleteComponent
    },
    data (){
        return {
            itemData: records,
            data: remoteData,
            fields: { value: 'text' },
            customerfields: { value: 'OrderID' },
            groupfields: { groupBy: 'group', value: 'text' },
            allowFiltering: true,
        }
    },
    provide: {
        autocomplete: [VirtualScroll]
    }
}
</script>