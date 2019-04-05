<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-dropdownlist id='multi-template' :dataSource='data' :fields='fields' :placeholder='watermark'
             :headerTemplate='hTemplate' :itemTemplate='iTemplate' popupHeight="450px"></ejs-dropdownlist>
        </div>
    </div>
    <div id="action-description">    
        <p>This sample demonstrates the template functionalities of the DropDownList. Click the DropDownList element and select an item from the customized list.</p>    
        </div>
    <div id="description">
         <p>The DropDownList has been provided with several options to customize each list items, group title, selected value, header
    and footer elements.
    </p>

    <p>This sample uses the following list of templates in DropDownList</p>
    <ul>
        <li><code>ItemTemplate</code> - To customize the list item's content.</li>
        <li><code>ValueTemplate</code> - To customize the value element content that holds the selected item's text.</li>
        <li><code>HeaderTemplate</code> - To customize the header element.</li>
    </ul>
    </div>
</div>
</template>
<style>

    .header {
        font-weight: 600;
        color: rgba(0, 0, 0, .54);
        height: 48px;
        padding: 15px 0 0 16px;
        font-size: 16px;
        background-color: #f5f5f5;
        font-family: "Segoe UI", "GeezaPro", "DejaVu Serif";
    }

    .fabric .header {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        color: #0078d7;
        font-weight: 400;
    }

    .bootstrap .header {
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

    .highcontrast .header {
        color: #fff;
        background-color: #000;
    }

    .e-bigger.bootstrap .header {
        line-height: 44px;
        height: 44px;
        font-size: 13px;
    }

    .bootstrap .info,
    .e-bigger.bootstrap .info {
        margin-left: 25px;
    }

    .bootstrap .job {
        opacity: .54;
        font-size: 14px;
        margin-top: -25px;
        margin-bottom: 20px;
    }

    .e-bigger.bootstrap .job {
        font-size: 15px;
        margin-top: -32px;
        margin-bottom: 17px;
    }

    .bootstrap .ename {
        font-size: 15px;
        margin-top: 20px;
        opacity: .87;
        padding: 3px 0 20px;
    }

    .e-bigger.bootstrap .ename {
        font-size: 16px;
        padding-bottom: 15px;
    }

    .bootstrap .empImage,
    .e-bigger.bootstrap .empImage {
        margin: 0px 10px 0 20px;
    }

    .info {
        margin-left: 17px;
    }

    .ename {
        display: block !important;
        opacity: .87;
        font-size: 16px;
        margin-top: 8px;
    }

    .job {
        opacity: .54;
        font-size: 14px;
        margin-top: -15px;
        margin-bottom: 7px;
    }

    .empImage {
        margin: 6px 16px;
        float: left;
        width: 50px;
        height: 50px;
    }

    #employees_popup.e-popup .e-list-item * {
        display: block;
        text-indent: 0;
    }

    .e-bigger:not(.bootstrap) #multi-template_popup .e-dropdownbase .e-list-item {
        line-height: 42px;
        height: 80px;
    }

    .e-bigger:not(.bootstrap) #multi-template_popup.e-popup .empImage {
        margin: 10px 16px;
    }
    .bootstrap4 #multi-template_popup.e-popup .empImage {
        margin: 0px 16px;
    }

    .bootstrap4 #multi-template_popup.e-popup .job {
        margin-top: 0;
    }

    .bootstrap4 #multi-template_popup.e-popup .job {
        margin-top: -15px;
    }

    .bootstrap4 .header {
        color: #6c757d;
    }
</style>
<script>
import Vue from "vue";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(DropDownListPlugin);

var headerVue = Vue.component("headerTemplate", {
  template: '<div class="header"> <span>Photo</span> <span class="info">Employee Info</span></div>',
  data() {
    return {
      data: {}
    };
  }
});

var itemVue = Vue.component("itemTemplate", {
  template: '<div><img class="empImage" :src="data.Eimg" alt="employee"/>' +
            '<div class="ename"> {{data.Name}} </div><div class="job"> {{data.Designation}} </div></div>',
  data() {
    return {
      data: {}
    };
  }
});

export default Vue.extend ({
    data: function() {
        return {
            fields: { value: 'Name' },
            watermark: 'Select Employees',
            hTemplate: function(e) {
                return {
                    template: headerVue
                };
            },
            iTemplate: function(e) {
                return {
                    template: itemVue
                };
            },
            data: data['empList']
        };
    }
});
</script>