<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; max-width:370px; padding-top: 5px;">
            <ejs-dropdowntree id='multi-template' :fields='fields' cssClass='ddt-template' :placeholder='watermark'
             :headerTemplate="'hTemplate'" :itemTemplate="'iTemplate'" :footerTemplate="'fTemplate'" :valueTemplate="'vTemplate'" popupHeight="210px" width="100%">
                <template v-slot:hTemplate="{}">
                    <div class="head"> Employee List </div>
                </template>
                <template v-slot:iTemplate="{data}">
                   <div>
                       <img class="eimage" :src="data.eimg" />
                        <div>
                            <div class="ename"> {{data.name}} </div>
                            <div class="ejob"> {{data.job}} </div>
                            <span class="e-badge icons">
                                <span :class="data.status"></span>
                            </span>
                        </div>
                    </div>
                </template>
                <template v-slot:fTemplate="{}">
                    <div class="footer">
                        <div class="footer-content">
                            <span class="e-badge">
                                <span class="display available">
                                    <span class="status online"></span>
                                    Available
                                </span>
                                <span class="display meeting">
                                    <span class="status busy"></span> 
                                    Busy
                                </span>
                                <span class="display unavailable">
                                    <span class="status away"></span>
                                    Away
                                </span>
                            </span>
                        </div>
                    </div>
                </template>
                <template v-slot:vTemplate="{ data }">
                    <div>
                        <div> {{ data.name }} - {{ data.job }} </div>
                    </div>
                </template>
             </ejs-dropdowntree>
        </div>
    </div>
    <div id="action-description">
        <p>This sample explains you about the template functionalities of the Dropdown Tree. Click the Dropdown Tree
            element, and then select an item from the customized list.</p>
    </div>
    <div id="description">
        <p>The Dropdown Tree has been provided with several options to customize each list items, header, and footer
            elements.
        </p>
        <p>This sample uses the following list of templates in the Dropdown Tree</p>
        <ul>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#itemtemplate">ItemTemplate</a> - To customize the list item's content.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#headertemplate">HeaderTemplate</a> - To customize the header element.</li>
            <li><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#footertemplate">FooterTemplate</a> - To customize the footer element.</li>
            <li><code>valueTemplate</code> - To customize the selected item's element.</li>
        </ul>
    </div>
</div>
</template>
/* custom code start */
<style>
    .ddt-template .head {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        margin: 0 auto;
        width: 100%;
        padding: 0 20px;
    }

    .e-rtl.ddt-template .e-badge.icons {
        left: 0;
        right: unset;
    }

    .e-rtl.ddt-template .eimage {
        padding: 11px 0 11px 16px;
        float: right;
    }
    
    .ddt-template .footer {
        vertical-align: middle;
        padding: 10px;
        text-align: center;
    }

    .ddt-template .head,
    .ddt-template .footer {
        background-color: #F5F5F5;
        color: #718292;
        box-sizing: border-box;
        font-weight: bold;
    }

    .highcontrast .ddt-template .head,
    .highcontrast .ddt-template .footer,
    .highcontrast .ddt-template .footer-content .e-badge {
        color: #fff;
        background-color: #000;
    }

    .material-dark .ddt-template .head,
    .material-dark .ddt-template .footer,
    .material-dark .ddt-template .footer-content .e-badge {
        color: #fff;
        background-color: #333;
    }

    .fabric-dark .ddt-template .head,
    .fabric-dark .ddt-template .footer,
    .fabric-dark .ddt-template .footer-content .e-badge {
        color: #fff;
        background-color: #3333;
    }

    .bootstrap-dark .ddt-template .head,
    .bootstrap-dark .ddt-template .footer,
    .bootstrap-dark .ddt-template .footer-content .e-badge {
        color: #fff;
        background-color: #1A1A1A;
    }

    .bootstrap5-dark .ddt-template .head,
    .bootstrap5-dark .ddt-template .footer,
    .bootstrap5-dark .ddt-template .footer-content .e-badge {
        color: #fff;
        background-color: #212529;
    }

    .material3 .e-ddt.ddt-template .e-treeview .e-fullrow,
    .material3-dark .e-ddt.ddt-template .e-treeview .e-fullrow,
    .e-bigger.material3 .e-ddt.ddt-template .e-treeview .e-fullrow,
    .e-bigger.material3-dark .e-ddt.ddt-template .e-treeview .e-fullrow,
    .tailwind3 .e-ddt.ddt-template .e-treeview .e-fullrow,
    .tailwind3-dark .e-ddt.ddt-template .e-treeview .e-fullrow,
    .e-bigger.tailwind3 .e-ddt.ddt-template .e-treeview .e-fullrow,
    .e-bigger.tailwind3-dark .e-ddt.ddt-template .e-treeview .e-fullrow {
        height: 90px;
    }
    
    .e-bigger .e-ddt.ddt-template .e-treeview .e-fullrow,
    .e-ddt.ddt-template .e-treeview .e-fullrow {
        height: 72px;
    }

    .e-ddt.ddt-template .e-treeview .e-list-text {
        line-height: normal;
    }

    .e-ddt.ddt-template .e-treeview .e-list-parent.e-ul {
        width: 100%;
    }

    .ddt-template .eimage {
        float: left;
        padding: 11px 16px 11px 0;
        height: 48px;
        width: 48px;
        box-sizing: content-box;
    }

    .ddt-template .ename {
        font-size: 16px;
        padding: 14px 0 0;
    }

    .ddt-template .ejob {
        font-size: 14px;
        opacity: .87;
        padding: 5px;
    }

    .bootstrap5-dark .ddt-template .ejob,
    .bootstrap5_3-dark .ddt-template .ejob,
    .material-dark .ddt-template .ejob,
    .material3-dark .ddt-template .ejob,
    .fluent-dark .ddt-template .ejob,
    .fluent2-dark .ddt-template .ejob,
    .tailwind-dark .ddt-template .ejob,
    .highcontrast .ddt-template .ejob,
    .fluent2-highcontrast .ddt-template .ejob {
        color: #979A9C;
    }

    .ddt-template .e-badge.icons {
        padding: 0;
        right: 0;
        position: absolute;
        top: 25px;
        background: transparent;
    }

    .ddt-template .footer-content .e-badge {
        display: flex;
    }

    .ddt-template .display {
        width: 100%;
    }

    .ddt-template .status {
        margin-right: 10px;
    }

    .ddt-template .footer .e-badge.icons {
        position: relative;
    }

    .ddt-template .e-badge.icons span,
    .ddt-template .status {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 50%;
    }

    .ddt-template .busy {
        background-color: #FF4B4B;
    }

    .ddt-template .online {
        background-color: #98E16E;
    }

    .ddt-template .away {
        background-color: #FFE65E;
    }

    .bootstrap5\.3-dark .ddt-template .head,
    .bootstrap5\.3-dark .ddt-template .footer,
    .bootstrap5\.3-dark .ddt-template .footer-content .e-badge,
    .material3-dark .ddt-template .head,
    .material3-dark .ddt-template .footer,
    .material3-dark .ddt-template .footer-content .e-badge,
    .fluent-dark .ddt-template .head,
    .fluent-dark .ddt-template .footer,
    .fluent-dark .ddt-template .footer-content .e-badge,
    .fluent2-dark .ddt-template .head,
    .fluent2-dark .ddt-template .footer,
    .fluent2-dark .ddt-template .footer-content .e-badge,
    .fluent2-highcontrast .ddt-template .head,
    .fluent2-highcontrast .ddt-template .footer,
    .fluent2-highcontrast .ddt-template .footer-content .e-badge,
    .tailwind-dark .ddt-template .head,
    .tailwind-dark .ddt-template .footer,
    .tailwind-dark .ddt-template .footer-content .e-badge,
    .tailwind3-dark .ddt-template .head,
    .tailwind3-dark .ddt-template .footer,
    .tailwind3-dark .ddt-template .footer-content .e-badge {
        color: #fff;
        background-color: #1f2937;
    }
</style>
/* custom code end */
<script>
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './template-data.json';

export default {
    components: {
        'ejs-dropdowntree': DropDownTreeComponent
    },
    data: function() {
        return {
            fields: { dataSource: data.templateData, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild' },
            watermark: 'Select  an employee'
        };
    }
}
</script>
