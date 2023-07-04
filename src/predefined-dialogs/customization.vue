<template>
  <div>
    <div class="col-lg-12 control-section" id="predefinedDialogCustomization">
        <ejs-button id="alertDlgBtn"  v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
        <ejs-button id="ConfirmDlgBtn"  v-on:click.native="confirmBtnClick" cssClass="e-success">Confirm</ejs-button>
        <ejs-button id="PromptDlgBtn"  v-on:click.native="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
        <span id="statusText"></span>
    </div>
    <div id="action-description">
      <p>This example demonstrates how to customize the content of the predefined Alert, Confirm and Prompt dialogs. Three buttons have been added to this example, click one of them to open the relevant dialog box.</p>
  </div>
    <div id="description">       	
      <p>The predefined dialog is used to display messages such as supplemental content like graphics, text, and interactive content like form components within a web page. It can use the <code>
        content </code> property to load customized content.
        The content property accepts both string and HTML elements as content.
      </p>
      <p>
          <b>See also</b>
      </p>
      <ul>
        <li> <a target="_blank" 
            href="https://ej2.syncfusion.com/vue/documentation/dialog/dialog-utlility/">
            Customization of predefined dialogs </a>    
        </li>
      </ul>
    </div>
  </div>
</template>

<style >
	#predefinedDialogCustomization{
        padding: 25px 0 0 15px;
    }
    #predefinedDialogCustomization .e-btn {
      margin-right: 10px;
    }
    #predefinedDialogCustomization #statusText{
      font-size:16px;
      margin-top: 20px;
    }
    .fileEdit{
        display:flex;
        justify-content:space-evenly;
        padding: 20px 0 0 50px;
    }
    .e-alert-dialog .e-footer-content {
        display: flex;
        justify-content: center;
    }
    .Table{
        line-height: 2.0;
    }
    .circle-border{
        align-items: center;
        justify-content: center;
        display: flex;
        color: green;
        width: 60px;
        height: 60px;
        border: 5px solid rgb(215,215,215);
        border-radius: 50%;
    }
    .e-changes-reject{
        display: inline;
        float: left;
        font-size: 40px;
        padding-right: 10px; 
    }
</style>

<script>
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
let dialogObj=undefined;
export default Vue.extend({
    data: function() {
        return { }
    },
    methods: {
    alertBtnClick: function () {
      document.getElementById("statusText").style.display="none";
      dialogObj = DialogUtility.alert({
        title: '',
        content:'<div class="new" style="display: flex;flex-direction: column;align-items: center;"><p><span class="circle-border"><span class="e-icons e-check" style="font-size: 30px; color: green; padding:5px 0 0 0; font-weight: 700;"></span></span></p><p><b style="font-size:25px; font-weight: 500 !important;">Good job!</b></p><p>You clicked the button!</p></div>',
        okButton: { text: 'OK',click:this.alertOkAction },
        position: { X: 'center', Y: 'center' },
        width:'240px',
        closeOnEscape: true
      });
    },
    alertOkAction:function(){
      dialogObj.hide();
      document.getElementById("statusText").innerHTML = "The user closed the Alert dialog."
      document.getElementById("statusText").style.display="block";
    },
     confirmBtnClick: function () {
      document.getElementById("statusText").style.display="none";
      dialogObj = DialogUtility.confirm({
        title: ' Delete file',
        content: '<p ><span class= "e-icons e-changes-reject" style="float: left;padding-right: 10px;font-size: 25px;display: inline;"></span>Are you sure you want to permanently delete this file?</p><p class="fileEdit"><span class= "e-icons e-image" style="font-size: 60px;"></span><span>failed personas.png<br/>Item type:PNG File<br/>Dimenstion: 1384 * 782<br/>Size:374 KB<br/>Original Location: C:/Users/Images</span></p>',
        okButton: { text: 'YES',click:this.confirmOkAction },
        cancelButton: { text: 'No',click:this.confirmCancelAction },
        position: { X: 'center', Y: 'center' },
        width:'420px',
        closeOnEscape: true
      });
    },
    confirmOkAction:function () {
      dialogObj.hide();
      document.getElementById("statusText").innerHTML="The user confirmed the dialog box";
      document.getElementById("statusText").style.display="block";
    },
    confirmCancelAction:function(){
      dialogObj.hide();
      document.getElementById("statusText").innerHTML="The user canceled the dialog box.";
      document.getElementById("statusText").style.display="block";
    },
     promptBtnClick  : function () {
      document.getElementById("statusText").style.display="none";
      dialogObj = DialogUtility.confirm({
        title: 'Join Wi-Fi network',
        content: '<table class="Table"><tbody><tr><td>SSID: <b>AndroidAP</b></td></tr><tr> <td>Password:</td> </tr> <tr> <td> <span class="e-input-group"> <input type="password" id="password" name="Required" class="e-input"> </span> </td> </tr> </tbody> </table> ',
        okButton: { text: 'OK',click:this.promptOkAction },
        cancelButton: { click:this.promptCancelAction },
        position: { X: 'center', Y: 'center' },
        width: '240px',
        closeOnEscape: true
      });
    },
    promptOkAction:function () {
      value = document.getElementById("password").value;
        if(value ==""){
            dialogObj.hide();
            document.getElementById("statusText").innerHTML="The user's input is returned as\" \"";
            document.getElementById("statusText").style.display="block";
        }
        else{
            dialogObj.hide();
            document.getElementById("statusText").innerHTML="The user's input is returned as" +" "+ value;
            document.getElementById("statusText").style.display="block";
        } 
    },
    promptCancelAction:function () {
      dialogObj.hide ();
      document.getElementById("statusText").innerHTML ="The user canceled the prompt dialog";
      document.getElementById("statusText").style.display="block";
    }
  },
});
</script>