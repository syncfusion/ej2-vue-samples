<template>
    <div class="col-lg-12 control-section avatar-listview">
        <!-- Listview element -->
        <ejs-listview id='letterAvatarList' :dataSource="dataSource" :headerTitle="title" :showHeader="header" :template="listTemplate"
        :sortOrder="sortOrder"></ejs-listview>
    <div id="action-description">
        <p>This sample demonstrates the integration of avatar component into listview to create contacts applications.</p>
    </div>

    <div id="description">
        <p>The avatar can be used with other components to create various applications. Here, the avatar is used to display images
            or their initials from the persons contact lists.</p>
        <p>Here, the xsmall avatar is used in circle type. To change the size of the avatar to xsmall and circle style, add
            <code>.e-avatar-xsmall</code> and
            <code>.e-avatar-circle</code>.</p>
    </div>
  </div>
</template>
<style>
 .control-section {
        overflow: auto;
    }

    /* Listview Customization */

    .avatar-listview #letterAvatarList {
        max-width: 360px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }

    .avatar-listview #letterAvatarList .listWrapper {
        width: inherit;
        height: inherit;
        position: relative;
    }

    .avatar-listview #letterAvatarList .e-list-header {
        height: 54px;
    }

    .material .avatar-listview #letterAvatarList .e-list-header .e-text {
        line-height: 22px;
    }

    .fabric .avatar-listview #letterAvatarList .e-list-header .e-text {
        line-height: 22px;
    }

    .bootstrap .avatar-listview #letterAvatarList .e-list-header .e-text {
        line-height: 13px;
    }

    .highcontrast .avatar-listview #letterAvatarList .e-list-header .e-text {
        line-height: 20px;
    }

    .avatar-listview #letterAvatarList .e-list-item {
        cursor: pointer;
        height: 50px;
        line-height: 44px;
        border: 0;
    }

    /* Badge Positioning */

    .avatar-listview #letterAvatarList .e-badge {
        margin-top: 12px;
    }

    .avatar-listview #letterAvatarList .listWrapper .list-text {
        width: 60%;
        display: inline-block;
        vertical-align: middle;
        margin: 0 50px;
    }

    /* Avatar Positioning */

    .avatar-listview #letterAvatarList .listWrapper .e-avatar {
        position: absolute;
        top: calc(100% - 40px);
        font-size: 10px;
        left: 5px;
    }

    /* Avatar Background Customization */

    .avatar-listview #letterAvatarList .e-list-item:nth-child(1) .e-avatar {
        background-color: #039BE5;
    }

    .avatar-listview #letterAvatarList .e-list-item:nth-child(3) .e-avatar {
        background-color: #E91E63;
    }

    .avatar-listview #letterAvatarList .e-list-item:nth-child(5) .e-avatar {
        background-color: #009688;
    }

    /* Avatar images using 'background-image' property */

    .avatar-listview .pic01 {
        background-image: url('./images/pic01.png');
    }

    .avatar-listview .pic02 {
        background-image: url('./images/pic02.png');
    }

    .avatar-listview .pic03 {
        background-image: url('./images/pic03.png');
    }

    .avatar-listview .pic04 {
        background-image: url('./images/pic04.png');
    }

 .bootstrap4 #letterAvatarList .e-list-item {
        line-height: 30px;
        padding: 8px 16px 8px 16px;
    }

    .bootstrap4 #letterAvatarList .e-list-item .e-avatar {
        top: calc(100% - 48px);
    }

</style>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import listtemplateVue from "./list-template.vue";
import { avatarListData } from "./listData";
Vue.use(ListViewPlugin);
export default Vue.extend({
  data: function() {
    return {
        dataSource:avatarListData,
        title: "Contacts",
        header: true,
        listTemplate: function () {
            return { template : listtemplateVue}
        },
        sortOrder: 'Ascending'
    };
  }
});
</script>