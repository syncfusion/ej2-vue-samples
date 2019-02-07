<template>
  <div>
    <div class="col-lg-12 control-section details-view">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='splitter' ref='splitterObj' class='splitterContent' :created='onCreated' width='100%' height='292px'>
                    <e-panes>
                        <e-pane size="35%" min="25%" :content='pane1Content'></e-pane>
                        <e-pane size="65%" min ="45%" :content='pane2Content'></e-pane>
                    </e-panes>
            </ejs-splitter>
            
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the Splitter control that is used to design details view page. 
            Select the employee from left pane to display the corresponding employee details on the right pane.
        </p>
    </div>

    <div id="description">
        <p>
            The Splitter is the layout user interface (UI) control, which integrates other JavaScript UI controls within its pane. 
            In this sample, the JavaScript ListView control is integrated within left pane to display the employee list and right pane 
            to display the corresponding employee details. 
        </p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import pane1Content from "./details-view-content.vue";
Vue.use(SplitterPlugin);

export default Vue.extend({
    data: function() {
        return {
            pane1Content: function () {
                return { template : pane1Content }
            },
        }
    },
    methods: {
        onCreated: function() {
            this.$refs.splitterObj.$el.ej2_instances[0].paneSettings[1].content = "<div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/margaret.png' alt='margaret'></div></div><div class='profile-name'>Margeret Peacock</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>11/15/1994</td></tr><tr><td class='e-bold'>Address</td><td>507 - 20th Ave. E. Apt. 2A</td></tr><tr><td class='e-bold'>City</td><td>Seattle</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-9857</td></tr></table>"
        }
    }
});
</script>
<style>
    .details-view #splitter .e-avatar.e-avatar-xlarge {
        font-size: 22px;
    }
    .details-view .header-image {
        text-align: center;
        margin-top: 7px;
    }
    .details-view .e-custom-card .e-avatar {
        font-size: 40px;
        position: absolute;
        top: calc(0% - 1.5em);
        left: calc(50% - 1.5em);
        box-shadow: 0 16px 28px -8px rgba(0, 0, 0, .36), 0 4px 15px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
    }
    .details-view #target {
        margin: 20px auto;
        max-width: 710px;
    }
    /* ListView template customization */

    .details-view #ui-list.e-listview .showUI {
        display: flex;
    }
    .details-view #ui-list.e-listview .hideUI {
        display: none;
    }
    .details-view #ui-list.e-listview .e-list-item {
        padding: 3px 0;
    }
    .details-view #ui-list.e-listview .R {
        background: lightgrey;
    }
    .details-view #ui-list.e-listview .M {
        background: lightblue;
    }

    .details-view .highcontrast #ui-list.e-listview .e-list-item.e-active {
        background: #ffd939;
        color: #000000;
    }
    .details-view table {
        border-collapse: collapse;
        border-spacing: 0;
        width: calc(100% - 20px);
        margin: 10px;
    }
    .details-view table th,
    .details-view table td {
        font-weight: normal;
        padding: 5px;
        text-align: left;
        border: 1px solid #ddd
    }
    .details-view .e-bold {
        font-weight: 550;
    }
    .details-view .profile-name {
        font-weight: 550;
        font-size: 14px;
        text-align: center;
    }
</style>