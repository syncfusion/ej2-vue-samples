<template>
<div>
    <div class="control-section">
        <div class="col-lg-12" style="height: 350px">
            <div id='content' style="margin: 0 auto; width:250px; padding-top: 30px">
                <ejs-dropdownlist id='dropdownlist' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :allowFiltering='allowFiltering' :enableVirtualization='true' popupHeight="200px"></ejs-dropdownlist>
            </div>
        </div>
    </div>
    <div id="action-description">
         <p>This example demonstrates the virtualization support of the DropDownList. The component has 150 items bound to it; however, when you open the suggestion list, only few items are loaded based on the popup height, and the remaining items are loaded while scrolling.</p>
    </div>
    <div id="description">
         <p>The <code>DropDownList</code> component supports virtualization, which improves UI performance for large amounts of data. To enable virtualization, set the <code>enableVirtualization</code> property to true. When virtualization is enabled, DropDownList doesn't render the entire suggestion data source on initial component rendering. It loads the N number of items in the popup on initial rendering and the remaining set number of items will load while scrolling.
        Virtualization works with both local and remote data.</p>
        <p>To perform the virtualization feature in the DropDownList, the <code>VirtualScroll</code> module has to be injected at the application level.</p>
    </div>
</div>
</template>

<script>
import { DropDownListComponent, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";
let records = [];
function dataSource() {
    for (let i = 1; i <= 150; i++) {
        let item = {
            id: 'id' + i,
            text: "Item " + i,
        };
        records.push(item);
    }
}
dataSource();

//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-dropdownlist": DropDownListComponent
    },
    data (){
        return {
            itemData: records,
            fields: { value: 'id', text: 'text' },
            allowFiltering: true,
        }
    },
    provide: {
        dropdownlist: [VirtualScroll]
    }
}
</script>