<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:64%; padding-top: 40px;">
         <h4>Template</h4>
            <ejs-multiselect id='multi-template' :dataSource='data' :fields='fields' cssClass='multiselect-template' :placeholder='watermark'
             :headerTemplate="'hTemplate'" :itemTemplate="'iTemplate'" :valueTemplate="'vTemplate'" mode='Box' popupHeight="450px">
              <template v-slot:hTemplate="{data}">
                <div class="header"> <span>Photo</span> <span class="info">Employee Info</span></div>
              </template>
              <template v-slot:iTemplate="{data}">
                <div><img class="empImage" :src="data.Eimg" alt="employee"/><div class="ename"> {{data.Name}} </div><div class="job"> {{data.Designation}} </div></div>
              </template>
              <template v-slot:vTemplate="{data}">
                <div style="width:100%;height:100%;"><img class="value" :src="data.Eimg" height="26px" width="26px" alt="employee"/><div class="name"> {{data.Name}} </div></div>
              </template>
             </ejs-multiselect>
        </div>
    </div>
    <div id="action-description">    
        <p>This sample demonstrates the template functionalities of the MultiSelect. Type a character in the MultiSelect element or click on this element to choose one or more items from the customized list.</p>
    </div>
    <div id="description">
        <p>The MultiSelect has been provided with several options to customize each list items, group title, selected value, header
    and footer elements.
    </p>

    <p>This sample uses the following list of templates in MultiSelect.</p>
    <ul>
        <li><code>ItemTemplate</code> - To customize the list item's content.</li>
        <li><code>ValueTemplate</code> - To customize the value element content that holds the selected item's text.</li>
        <li><code>HeaderTemplate</code> - To customize the header element.</li>
    </ul>
    </div>
</div>
</template>
<style>
    .multiselect-template .header {
        font-weight: 600;
        color: rgba(0, 0, 0, .54);
        height: 48px;
        padding: 15px 0 0 16px;
        font-size: 16px;
        background-color: #f5f5f5;
        font-family: "Segoe UI", "GeezaPro", "DejaVu Serif";
    }

    .fabric .multiselect-template .header {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        color: #0078d7;
        font-weight: 400;
    }

    .bootstrap .multiselect-template .header {
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

    .fluent-dark .multiselect-template .header {
        background: #252423;
        color: #2899F5;
    }

    .bootstrap5-dark .multiselect-template .header {
        background: #343A40;
        color: #7B848D;
    }

    .fluent .multiselect-template .header{
         color: #2899F5;
    }

    .tailwind-dark .multiselect-template .header {
        background: #374151;
        color: rgb(255, 255, 255);
    }

    .material3-dark .multiselect-template .header,
    .material-dark .multiselect-template .header {
        background: rgb(66, 66, 66);
        color: rgb(255, 255, 255);
    }

    .fabric-dark .multiselect-template .header {
        background: rgb(40, 39, 39);
        color: rgb(255, 255, 255);
    }

    .bootstrap-dark .multiselect-template .header {
        background: rgb(49, 49, 49);
        color: rgb(255, 255, 255);
    }

    .highcontrast .multiselect-template .header {
        color: #fff;
        background-color: #000;
    }

    .e-bigger.bootstrap .multiselect-template .header {
        line-height: 44px;
        height: 44px;
        font-size: 13px;
    }

    .bootstrap .multiselect-template .info,
    .e-bigger.bootstrap .multiselect-template .info {
        margin-left: 25px;
    }

    .bootstrap .multiselect-template .job {
        opacity: .54;
        font-size: 14px;
        margin-top: -25px;
        margin-bottom: 20px;
    }

    .e-bigger.bootstrap .multiselect-template .job {
        font-size: 15px;
        margin-top: -32px;
        margin-bottom: 17px;
    }
    
    .tailwind .multiselect-template .job,
    .bootstrap4 .multiselect-template .job,
    .bootstrap5 .multiselect-template .job {
        margin-top: -7px;
        margin-bottom: 5px;
    }
    
    .e-bigger.tailwind .multiselect-template .job,
    .e-bigger.bootstrap4 .multiselect-template .job,
    .e-bigger.bootstrap5 .multiselect-template .job {
        margin-top: -15px;
        margin-bottom: 5px;
    }


    .bootstrap .multiselect-template .ename {
        font-size: 15px;
        margin-top: 20px;
        opacity: .87;
        padding: 3px 0 20px;
    }

    .e-bigger.bootstrap .multiselect-template .ename {
        font-size: 16px;
        padding-bottom: 15px;
    }

    .bootstrap:not(.e-bigger) .multiselect-template .empImage {
        margin: 0px 10px 0 20px;
    }

    .multiselect-template .info {
        margin-left: 17px;
    }

    .multiselect-template .ename {
        display: block !important;
        opacity: .87;
        font-size: 16px;
        margin-top: 8px;
    }

    .multiselect-template .job {
        opacity: .54;
        font-size: 14px;
        margin-top: -15px;
        margin-bottom: 7px;
    }

    .multiselect-template .empImage {
        margin: 6px 16px;
        float: left;
        width: 50px;
        height: 50px;
    }

    .multiselect-template .e-list-item * {
        display: block;
        text-indent: 0;
    }

    .e-bigger:not(.bootstrap) .multiselect-template .e-dropdownbase .e-list-item {
        line-height: 42px;
        height: 80px;
    }

    .e-bigger:not(.bootstrap) .multiselect-template.e-popup .empImage {
        margin: 10px 16px;
    }
    .bootstrap4 .multiselect-template .header {
        color: #6c757d;
    }

    .bootstrap4 .multiselect-template.e-popup .empImage {
        margin: 1px 16px;
    }

    .multiselect-template .value {
        border-radius: 50%;
        float: left;
        margin-top: -1px;
        position: relative;
        left: 0px;
        height: 24px;
        width: 24px;
    }

    .e-bigger:not(.bootstrap) .multiselect-template .name {
        padding: 11px 42px;
    }

    .e-bigger:not(.bootstrap) .multiselect-template .value {
        margin-top: 6px;
    }

    .highcontrast .multiselect-template .value{
        margin-top: 0px;
    }

    .highcontrast .multiselect-template .name {
        padding: 3px 28px;
    }

    .bootstrap .multiselect-template .value,
    .bootstrap-dark .multiselect-template .value {
        left: -9px;
        height: 28px;
        width: 28px;
        margin-top: 18px;
    }

    .fabric .multiselect-template .value,
    .fabric-dark .multiselect-template .value {
        margin-top: 22px;
    }

    .material .multiselect-template .name
    .material-dark .multiselect-template .name,
    .material3 .multiselect-template .name
    .material3-dark .multiselect-template .name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 3px 0 0 28px;
        bottom: 21px;
        position: relative;
        margin-right: -16px;
    }

    .bootstrap .multiselect-template .name,
    .bootstrap-dark .multiselect-template .name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 1px 0 0 26px;
        bottom: 23px;
        position: relative;
        margin-right: -24px;
    }

    .e-bigger .multiselect-template .value {
        margin-top: 0px;
        height: 30px;
        width: 30px;
    }

    .e-bigger.fabric .multiselect-template .value,
    .e-bigger.fabric-dark .multiselect-template .value {
        margin-top: 2px;
    }

    .e-bigger .multiselect-template .name {
        padding: 0 0 0 36px;
        bottom: 24px;
        width: 121px;
    }

    .e-bigger.highcontrast .multiselect-template .name {
        padding: 10px 0 0 36px;
        bottom: 24px;
        width: 121px;
    }

    .fabric .multiselect-template .name,
    .fabric-dark .multiselect-template .name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 0 3px 30px;
        position: relative;
        bottom: 22px;
        margin-right: -23px;
    }

    .fabric.e-bigger .multiselect-template .name,
    .fabric-dark.e-bigger .multiselect-template .name {
        padding: 7px 0 0 32px;
        width: 100%;
        position: relative;
        overflow: initial;
        text-overflow: unset;
        bottom: 0px;
        margin-right: -6px;
    }

    .bootstrap.e-bigger .multiselect-template .name,
    .bootstrap-dark.e-bigger .multiselect-template .name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 0 0 29px;
        position: relative;
        bottom: 23px;
        margin-right: -24px;
    }

    .bootstrap4.e-bigger .multiselect-template .name {
        padding: 9px 0 9px 24px;
    }

    .bootstrap.e-bigger .multiselect-template .value,
    .bootstrap-dark.e-bigger .multiselect-template .value {
        left: -9px;
        margin-top: 17px;
    }

    .bootstrap5.e-bigger .multiselect-template .value {
        margin-top: 1px;
    }

    .e-bigger .multiselect-template .value {
        position: relative;
    }

    .tailwind.e-bigger .multiselect-template .name,
    .tailwind-dark.e-bigger .multiselect-template .name {
        padding: 6px 0 0 35px;
        line-height: 1.2em;
    }

    .tailwind .multiselect-template .name,
    .bootstrap4 .multiselect-template .name {
        padding: 3px 0px 0px 25px;
        line-height: 1.2em;
    }

    .bootstrap5 .multiselect-template .name {
        padding: 3px 0px 0px 30px;
    }    

    .bootstrap5.e-bigger .multiselect-template .name {
        padding: 7px 0px 0px 35px;
    }    
    .bootstrap4 .multiselect-template .value {
      margin-left: -5px;
    }
    .tailwind .multiselect-template .value,
    .bootstrap4 .multiselect-template .value {
        margin-top: 1px;
        height: 22px;
        width: 22px;
    }
    .tailwind.e-bigger .multiselect-template .value,
    .tailwind-dark.e-bigger .multiselect-template .value {
        margin-top: 1px;
        height: 26px;
        width: 26px;
    }

    .material.e-bigger .multiselect-template .name,
    .material-dark.e-bigger .multiselect-template .name,
    .material3.e-bigger .multiselect-template .name,
    .material3-dark.e-bigger .multiselect-template .name {
        padding: 8px 0px 0px 26px;
        margin-top: 0px;
        position: unset;
        bottom: 24px;
        width: 100%;
    }

    .material.e-bigger .multiselect-template .value,
    .material-dark.e-bigger .multiselect-template .value,
    .material3.e-bigger .multiselect-template .value,
    .material3-dark.e-bigger .multiselect-template .value {
        margin-top: 1px;
    }
    
    .material.e-bigger .e-chips.e-mob-chip.e-chip-selected .name {
        left: 0px;
        width: 110px;
        position: relative;
    }

    .multiselect-template .name {
        padding: 3px 20px;
        line-height: 1.2em;
    }
    .e-multi-select-wrapper .e-chips {
        max-width: 166px;
        overflow: hidden;
    }

    .e-multi-select-wrapper .e-chips.e-mob-chip.e-chip-selected {
        padding: 0 0 0 0px;
    }

    .bootstrap.e-bigger .e-chips.e-mob-chip.e-chip-selected .value {
        left: 0px;
    }
    .material.e-bigger .e-chips.e-mob-chip.e-chip-selected .name {
        left: 0px;
        width: 110px;
        position: relative;
    }
    .fabric .e-multi-select-wrapper .e-chips.e-mob-chip.e-chip-selected .e-chips-close.e-icon {
        left: 0px;
    }
</style>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multiselect': MultiSelectComponent
    },
    data: function() {
        return {
            fields: { value: 'Name', text: 'Name' },
            watermark: 'Select Employees',
            data: data['empList']
        };
    }
}
</script>