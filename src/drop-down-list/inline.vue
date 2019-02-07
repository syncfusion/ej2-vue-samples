<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:350px; padding-top: 40px;">
            <span id="contentText">React top expert of this week is
            <ejs-dropdownlist id='employee' :dataSource='data' :fields='fields' :popupHeight='height' :width='width' cssClass='inlinecss' :value='value' :popupWidth='popupWidth' :placeholder='watermark'>
            </ejs-dropdownlist>
            </span>
        </div>
    </div>
    <div id="action-description">
        <p>The DropDownList appearing in line with highlighted content. Click that DropDownList value content and select an item
            from the popup list.
        </p>
    </div>
    <div id="description">
        <p>The DropDownList component can be rendered in line with other content and you can override the styles of the dropdownlist
            component.
        </p>

        <p>This sample illustrates using the user's data that has been used and customized DropDownList border.</p>
    </div>
</div>
</template>
<style>

    .inlinecss.e-ddl .e-input-group-icon.e-ddl-icon {
        display: none;
    }

    .inlinecss.e-ddl .e-control.e-dropdownlist.e-input {
        font-size: 17px;
        font-weight: 500;
        margin: -5px 0px 0px 0px;
        padding: 0px;
    }

    .material .inlinecss.e-ddl .e-control.e-dropdownlist.e-input {
        margin: 4px 0px 0px 0px;
    }

    .bootstrap .inlinecss.e-ddl .e-control.e-dropdownlist.e-input {
        margin-top: -1px;
    }

    #contentText .e-input-group.e-control-wrapper.e-ddl::before,
    #contentText .e-input-group.e-control-wrapper.e-ddl::after {
        content: none;
    }

    #contentText .e-input-group.e-control-wrapper.e-ddl,
    #contentText .e-input-group.e-control-wrapper.e-ddl:hover,
    #contentText .e-input-group.e-ddl.e-input-focus,
    #contentText .e-input-group.e-ddl.e-input-focus::before,
    #contentText .e-input-group.e-ddl.e-input-focus::after {
        border-width: 0px;
        border: none;
        border-bottom: 1px dashed black;
        box-shadow: none;
    }
</style>
<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';
import * as data from './dataSource.json';

Vue.use(MultiSelectPlugin);

export default Vue.extend ({
    data: function() {
        return {
            fields: { text: 'Name'},
            height: '220px',
            width: '63px',
            popupWidth: '140px',
            value: 'Michael',
            watermark: 'Select an employee',
            data: data['employees'],
        };
    }
});
</script>