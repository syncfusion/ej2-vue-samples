<template>
  <div class="col-lg-12 control-section msg-template-section">
    <div class="content-section">
      <ejs-button id="showBtn" ref="showBtn" content="Show pull request" cssClass="e-outline e-primary e-success msg-hidden" v-on:click.native="showClick"></ejs-button>
      <ejs-message id="msg_template" ref="msgTemplate" severity="Success" :content="'contentTemplate'" :closed="closed">
        <template v-slot:contentTemplate>
          <div>
            <h1>Merged pull request</h1>
            <p>Pull request #41 merged after a successful build</p>
            <ejs-button id="commitBtn" cssClass="e-link" content="View commit"></ejs-button>
            <ejs-button id="closeBtn" cssClass="e-link" content="Dismiss" v-on:click.native="dismissClick"></ejs-button>
          </div>
        </template>
      </ejs-message>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the template functionality of the Vue Message component. Click the <b>dismiss</b> button to hide the message. Click the <b>Show pull request</b> button to restore the hidden message.</p>
    </div>
    <div id="description">
      <p>The Message component has an option to customize the content with a custom structure. The content can be a string, paragraph, or any other HTML element.</p>
      <p>In this sample, the Message component content is customized with HTML elements and Vue Button components.</p>
    </div>
  </div>
</template>

<style>
.msg-template-section .content-section {
  margin: 0 auto;
  max-width: 450px;
  padding-top: 20px;
}

.msg-template-section .e-btn.msg-hidden {
  display: none;
}

.msg-template-section .e-message h1 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.msg-template-section .e-message .e-msg-icon {
  padding: 0 4px;
  margin-top: 3px;
}

.msg-template-section .e-message p {
  margin: 8px 0 4px;
}

.msg-template-section .e-message .e-btn {
  padding: 0 5px 0 0;
}

.e-bigger .msg-template-section .e-message h1 {
  font-size: 20px;
}

.e-bigger .msg-template-section .e-message .e-msg-icon {
  padding: 4px;
  font-size: 20px;
}
</style>

<script>
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ButtonPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(MessagePlugin);
export default Vue.extend({
  data: function () {
    return {};
  },
  methods: {
    showClick: function () {
      this.$refs.msgTemplate.ej2Instances.visible = true;
      this.$refs.showBtn.ej2Instances.element.classList.add("msg-hidden");
    },
    dismissClick: function () {
      this.$refs.msgTemplate.ej2Instances.visible = false;
    },
    closed: function () {
      this.$refs.showBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
  },
});
</script>
