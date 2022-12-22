<template>
  <div>
    <div class="col-lg-8 control-section msg-icon-section">
      <div class="content-section">
        <ejs-button id="btn1" ref="defaultBtn" content="Show Default Message" cssClass="e-outline e-primary msg-hidden" v-on:click.native="defaultClick"></ejs-button>
        <ejs-message id="msg_default_icon" ref="msgDefault" :showCloseIcon="showCloseIcon" :closed="defaultClosed">Editing is restricted</ejs-message>
        <ejs-button id="btn2" ref="infoBtn" content="Show Info Message" cssClass="e-outline e-primary e-info msg-hidden" v-on:click.native="infoClick"></ejs-button>
        <ejs-message id="msg_info_icon" ref="msgInfo" severity="Info" :showCloseIcon="showCloseIcon" :closed="infoClosed">Please read the comments carefully</ejs-message>
        <ejs-button id="btn3" ref="successBtn" content="Show Success Message" cssClass="e-outline e-primary e-success msg-hidden" v-on:click.native="successClick"></ejs-button>
        <ejs-message id="msg_success_icon" ref="msgSuccess" severity="Success" :showCloseIcon="showCloseIcon" :closed="successClosed">Your message has been sent successfully</ejs-message>
        <ejs-button id="btn4" ref="warningBtn" content="Show Warning Message" cssClass="e-outline e-primary e-warning msg-hidden" v-on:click.native="warningClick"></ejs-button>
        <ejs-message id="msg_warning_icon" ref="msgWarning" severity="Warning" :showCloseIcon="showCloseIcon" :closed="warningClosed">There was a problem with your network connection</ejs-message>
        <ejs-button id="btn5" ref="errorBtn" content="Show Error Message" cssClass="e-outline e-primary e-error msg-hidden" v-on:click.native="errorClick"></ejs-button>
        <ejs-message id="msg_error_icon" ref="msgError" severity="Error" :showCloseIcon="showCloseIcon" :closed="errorClosed">A problem occurred while submitting your data</ejs-message>
      </div>
    </div>
    <div class="col-lg-4 property-section">
      <div title="Properties" id="property">
        <table id="property" title="Properties">
          <tbody>
            <tr>
              <td style="padding: 10px">
                <ejs-checkbox label="Severity Icon" :checked="checked" :change="severityIconChange"></ejs-checkbox>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px">
                <ejs-checkbox label="Close Icon" :checked="checked" :change="closeIconChange"></ejs-checkbox>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the visibility customization of severity and close icons of the Vue Message component. Click the close icon to hide the message. Click the button to restore the hidden message. Check or uncheck the check box to show or hide the visibility of the severity icon. Check or uncheck the check box to show or hide the visibility of the close icon.</p>
    </div>
    <div id="description">
      <p>The Message component can be rendered with and without the severity and close icons. The close icon is used to hide the message.</p>
      <p>In this sample, the Message component is rendered with a severity icon and a close icon. The visibility of the severity icon is handled by the <code>showIcon</code> property. The visibility of the close icon is handled by the <code>showCloseIcon</code> property.</p>
    </div>
  </div>
</template>

<style>
.msg-icon-section .content-section {
  margin: 0 auto;
  max-width: 520px;
  padding-top: 10px;
}

.msg-icon-section .e-message {
  margin: 10px 0;
}

.msg-icon-section .e-btn {
  display: block;
  margin: 10px 0;
}

.msg-icon-section .e-btn.msg-hidden {
  display: none;
}
</style>

<script>
import Vue from "vue";
import { MessagePlugin } from "@syncfusion/ej2-vue-notifications";
import { ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { getComponent } from "@syncfusion/ej2-base";

Vue.use(ButtonPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(MessagePlugin);
export default Vue.extend({
  data: function () {
    return {
      showCloseIcon: true,
      checked: true,
    };
  },
  methods: {
    defaultClick: function () {
      this.show(this.$refs.msgDefault, this.$refs.defaultBtn);
    },
    infoClick: function () {
      this.show(this.$refs.msgInfo, this.$refs.infoBtn);
    },
    successClick: function () {
      this.show(this.$refs.msgSuccess, this.$refs.successBtn);
    },
    warningClick: function () {
      this.show(this.$refs.msgWarning, this.$refs.warningBtn);
    },
    errorClick: function () {
      this.show(this.$refs.msgError, this.$refs.errorBtn);
    },
    defaultClosed: function () {
      this.$refs.defaultBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    infoClosed: function () {
      this.$refs.infoBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    warningClosed: function () {
      this.$refs.warningBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    successClosed: function () {
      this.$refs.successBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    errorClosed: function () {
      this.$refs.errorBtn.ej2Instances.element.classList.remove("msg-hidden");
    },
    severityIconChange: function (args) {
      this.changeProp("showIcon", args.checked);
    },
    closeIconChange: function (args) {
      this.changeProp("showCloseIcon", args.checked);
    },
    show: function (message, btn) {
      message.ej2Instances.visible = true;
      btn.ej2Instances.element.classList.add("msg-hidden");
    },
    changeProp: function (prop, value) {
      var msgTypes = ["default", "info", "success", "warning", "error"];
      for (var i = 0; i <= 4; i++) {
        var msgObj = getComponent(document.getElementById("msg_" + msgTypes[i] + "_icon"), "message");
        if (msgObj) {
          if (value) {
            msgObj[prop] = true;
          } else {
            msgObj[prop] = false;
          }
        }
      }
    },
  },
});
</script>
