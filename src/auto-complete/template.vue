<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-autocomplete id='employees' :dataSource='data' :fields='fields' :placeholder='watermark'
             :headerTemplate="'hTemplate'" :itemTemplate="'iTemplate'" popupHeight="450px" cssClass='autocomplete-template'>
              <template v-slot:hTemplate="{data}">
                <div class="header"> <span>Photo</span> <span class="info">Employee Info</span></div>
              </template>
              <template v-slot:iTemplate="{data}">
                <div><img class="empImage" :src="data.Eimg" alt="employee"/><div class="ename"> {{data.Name}} </div><div class="job"> {{data.Designation}} </div></div>
              </template>              
             </ejs-autocomplete>
        </div>
    </div>
    <div id="action-description">    
        <p>This sample demonstrates the template functionalities of the AutoComplete. Type a character in the AutoComplete element and choose an item from the customized list</p>     
    </div>
    <div id="description">
        <p>The AutoComplete has been provided with several options to customize each list items, group title, header and footer
            elements.
        </p>

        <p>This sample uses the following list of templates in AutoComplete</p>
        <ul>
            <li><code>ItemTemplate</code> - To customize the list item's content.</li>
            <li><code>HeaderTemplate</code> - To customize the header element.</li>
        </ul>
        <p> More information on the template feature configuration can be found in the
            <a href="http://ej2.syncfusion.com/angular/documentation/auto-complete/templates.html" target="_blank"> documentation section</a>.
        </p>
    </div>
</div>
</template>
<style>
    .autocomplete-template .header {
        font-weight: 600;
        color: rgba(0, 0, 0, .54);
        height: 48px;
        padding: 15px 0 0 16px;
        font-size: 16px;
        background-color: #f5f5f5;
        font-family: "Segoe UI", "GeezaPro", "DejaVu Serif";
    }

    .fabric .autocomplete-template .header {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        color: #0078d7;
        font-weight: 400;
    }

    .bootstrap .autocomplete-template .header {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        color: #777;
        font-family: "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
        font-weight: 400;
        font-size: 12px;
        line-height: 30px;
        height: 30px;
        padding: 0 0 0 24px;
    }

    .highcontrast .autocomplete-template .header {
        color: #fff;
        background-color: #000;
    }

    .e-bigger.bootstrap .autocomplete-template .header {
        line-height: 44px;
        height: 44px;
        font-size: 13px;
    }

    .bootstrap .autocomplete-template .info,
    .e-bigger.bootstrap .autocomplete-template .info {
        margin-left: 25px;
    }

    .bootstrap .autocomplete-template .job {
        opacity: .54;
        font-size: 14px;
        margin-top: -25px;
        margin-bottom: 20px;
    }

    .e-bigger.bootstrap .autocomplete-template .job {
        font-size: 15px;
        margin-top: -32px;
        margin-bottom: 17px;
    }
    
    .tailwind .autocomplete-template .job {
        margin-top: -7px;
        margin-bottom: 5px;
    }

    .e-bigger.tailwind .autocomplete-template .job {
        margin-top: -15px;
        margin-bottom: 5px;
    }


    .bootstrap .autocomplete-template .ename {
        font-size: 15px;
        margin-top: 20px;
        opacity: .87;
        padding: 3px 0 20px;
    }

    .e-bigger.bootstrap .autocomplete-template .ename {
        font-size: 16px;
        padding-bottom: 15px;
    }

    .bootstrap .autocomplete-template .empImage,
    .e-bigger.bootstrap .autocomplete-template .empImage {
        margin: 0px 10px 0 20px;
    }

    .autocomplete-template .info {
        margin-left: 17px;
    }

    .autocomplete-template .ename {
        display: block !important;
        opacity: .87;
        font-size: 16px;
        margin-top: 8px;
    }

    .autocomplete-template .job {
        opacity: .54;
        font-size: 14px;
        margin-top: -15px;
        margin-bottom: 7px;
    }

    .autocomplete-template .empImage {
        margin: 6px 16px;
        float: left;
        width: 50px;
        height: 50px;
    }

    .autocomplete-template.e-popup .e-list-item * {
        display: block;
        text-indent: 0;
    }

    .e-bigger:not(.bootstrap) .autocomplete-template .e-dropdownbase .e-list-item {
        line-height: 42px;
        height: 80px;
    }

    .e-bigger:not(.bootstrap) .autocomplete-template.e-popup .empImage {
        margin: 10px 16px;
    }
    .bootstrap4 .autocomplete-template.e-popup .empImage {
        margin: 0px 16px;
    }

    .bootstrap4 .autocomplete-template.e-popup .job {
        margin-top: 0;
    }
    .e-bigger.bootstrap4 .autocomplete-template.e-popup .job {
        margin-top: -15px;
    }
    .bootstrap4 .autocomplete-template .header {
        color: #6c757d;
    }
     .fluent-dark .header {
        background: #252423;
        color: #2899F5;
    }

    .bootstrap5-dark .autocomplete-template .header {
        background: #343A40;
        color: #7B848D;
    }

    .fluent .autocomplete-template .header{
         color: #2899F5;
    }

    .tailwind-dark .autocomplete-template .header {
        background: #374151;
        color: rgb(255, 255, 255);
    }

    .material-dark .autocomplete-template .header {
        background: rgb(66, 66, 66);
        color: rgb(255, 255, 255);
    }

    .fabric-dark .autocomplete-template .header {
        background: rgb(40, 39, 39);
        color: rgb(255, 255, 255);
    }

    .bootstrap-dark .autocomplete-template .header {
        background: rgb(49, 49, 49);
        color: rgb(255, 255, 255);
    }
</style>
<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(AutoCompletePlugin);

export default Vue.extend ({
    data: function() {
        return {
            fields: { value: 'Name' },
            watermark: 'e.g. Andrew Fuller',
            data:data['empList']
        };
    }
});
</script>