<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:350px; padding-top: 40px;">
            <span id="contentText">React top expert of this week is
            <ejs-dropdownlist id='employee' :dataSource='data' :fields='fields' :popupHeight='height' :width='width' cssClass='ddl-inlinecss' :value='value' :popupWidth='popupWidth' :placeholder='watermark'>
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

    .ddl-inlinecss.e-ddl .e-input-group-icon.e-ddl-icon {
        display: none;
    }

    .ddl-inlinecss.e-ddl .e-control.e-dropdownlist.e-input {
        font-size: 17px;
        font-weight: 500;
        margin: -5px 0px 0px 0px;
        padding: 0px;
    }

    .material .ddl-inlinecss.e-ddl .e-control.e-dropdownlist.e-input {
        margin: 4px 0px 0px 0px;
    }

    .bootstrap .ddl-inlinecss.e-ddl .e-control.e-dropdownlist.e-input {
        margin-top: -1px;
    }

    .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl::before,
    .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl::after {
        content: none;
    }

    .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after {
        border-width: 0px;
        border: none;
        border-bottom: 1px dashed black;
        box-shadow: none;
    }
    .highcontrast .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .highcontrast .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .highcontrast .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .highcontrast .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .highcontrast .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after {
        border-bottom: 1px dashed #f0f0f0;
    }
    .material-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .material-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .material-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .material-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .material-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .material-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after,
    .material3-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .material3-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .material3-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .material3-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .material3-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .material3-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after,
    .fabric-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .fabric-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .fabric-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .fabric-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .fabric-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .fabric-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after,
    .bootstrap-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .bootstrap-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .bootstrap-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .bootstrap-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .bootstrap-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .bootstrap-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after,
    .bootstrap5-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .bootstrap5-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .bootstrap5-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .bootstrap5-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .bootstrap5-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .bootstrap5-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after {
        border-bottom: 1px dashed #f0f0f0;
    }
    .tailwind-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .tailwind-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .tailwind-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .tailwind-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .tailwind-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after,
    .fluent-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl,
    .fluent-dark .ddl-inlinecss.e-input-group.e-control-wrapper.e-ddl:hover,
    .fluent-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus,
    .fluent-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::before,
    .fluent-dark .ddl-inlinecss.e-input-group.e-ddl.e-input-focus::after {
        border-bottom: 1px dashed #f0f0f0;
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
            width: '65px',
            popupWidth: '140px',
            value: 'Michael',
            watermark: 'Select an employee',
            data: data['employees'],
        };
    }
});
</script>