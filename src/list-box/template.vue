<template>
    <div class="col-lg-12 control-section">
        <div id="template-listbox-control">
            <ejs-listbox :dataSource="data" :itemTemplate="'iTemplate'">
                <template v-slot:iTemplate="{data}">
                    <div class="list-wrapper">
                        <span class=" e-avatar e-avatar-xlarge e-avatar-circle"><img :src="data.pic" alt="pic"/></span><span class="text"> {{data.text}} </span><span class="description"> {{data.description}} </span>
                    </div>
                </template>
            </ejs-listbox>
        </div>
       <div id="action-description">
            <p>This sample demonstrates the Item template functionalities of a ListBox.</p>
        </div>
        <div id="description">
           <p>The <code>ListBox</code>is a graphical user interface component used to display a list of items. This sample illustrates how to integrate the item template to customize the
        list item's content and this can be specified by using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/list-box/#itemtemplate"><code>itemTemplate
       </code></a> property.</p>
            <p>In this sample, data is bound to the ListBox using the <code>dataSource</code> property.</p>
            <p> More information about the ListBox can be found in the
                <a href="https://ej2.syncfusion.com/vue/documentation/list-box/getting-started" target="_blank"> documentation section</a>.
            </p> 
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    #template-listbox-control {
        width: 350px;
        margin: auto;
    }

    @media screen and (max-width: 590px) {
        #template-listbox-control {
            width: 100%;
        }
    }

    #template-listbox-control .list-wrapper {
        height: inherit;
        position: relative;
        padding: 14px 12px 14px 78px;
    }

    #template-listbox-control .list-wrapper .text,
    #template-listbox-control .list-wrapper .description {
        display: block;
        margin: 0;
        padding-bottom: 3px;
        white-space: normal;
    }
    
    #template-listbox-control .list-wrapper .description {
        font-size: 12px;
        font-weight: 500;
    }
    
    #template-listbox-control .e-listbox-wrapper .list-wrapper .text {
        font-weight: bold;
        font-size: 13px;
    }
    
    #template-listbox-control .list-wrapper .e-avatar {
        position: absolute;
        left: 5px;
        background-color: transparent;
        font-size: 22px;
        top: calc(50% - 26px);
    }

    #template-listbox-control .list-wrapper .e-avatar {
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        margin-left: 10px;
    }

     #template-listbox-control .list-wrapper .text { 
        padding-left: 0px !important;
    }
    
    #template-listbox-control .list-wrapper { 
        display: block !important;
    }

</style>
<!-- custom code end -->
<script>
import { ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './datasource.json';

export default {
    components: {
        'ejs-listbox': ListBoxComponent
    },
    data: function() {
        return {
            data: data.template,
        };
    }
}
</script>