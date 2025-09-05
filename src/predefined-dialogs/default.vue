<template>
  <div>
    <div class="col-lg-12 control-section" id="predefinedDialogDefault" >
        <ejs-button id="alertDlgBtn"  v-on:click="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
        <ejs-button id="confirmDlgBtn"  v-on:click="confirmBtnClick" cssClass = "e-success">Confirm</ejs-button>
        <ejs-button id="promptDlgBtn"  v-on:click="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
        <span id="statusText"></span>
    </div>
    <div id="action-description">
        <p>This example demonstrates the usage of dialog utility to display various forms of dialog, including<b> alert, confirm </b>and <b>prompt</b> dialog. Three buttons have been added to this example, click one of them to open the relevant dialog box.</p>
    </div>
    <div id="description">
        <p>The predefined dialogs are used to display messages and collect user input within a web page. The following are the three types of Dialogs:
    </p>
        <ul>
            <li><code>Alert</code>- Used to show errors, warnings, and information that need user awareness.</li>
            <li><code>Confirm</code> - Used to get approval from user that appears before any critical action.</li>
            <li><code>Prompt</code> - Used to get input from the user. </li>
        </ul>
        <p>
            <b>See also</b>
        </p>
        <ul>
            <li> <a target="_blank" 
            href="https://ej2.syncfusion.com/vue/documentation/dialog/dialog-utlility/">Getting started with predefined dialogs </a>    
            </li>
        </ul>
    </div>
  </div>
</template>!

<style>
    #predefinedDialogDefault {
	padding: 25px 0 0 15px;
    }
    #predefinedDialogDefault .e-btn {
        margin-right: 10px;
    }
    #inputEle{
        margin-top:10px;
    }
    #predefinedDialogDefault #statusText{
        font-size:16px;
        margin-top: 20px;
    }
    .e-alert-dialog.e-dialog.e-popup, .e-confirm-dialog.e-dialog.e-popup{
        margin: 30px auto;
        width: auto;
    }
    .control-section {
        height: 100%;
        min-height: 350px;
    }
</style>

<script>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
let dialogObj=undefined;
let value ;
export default {
    components: {
      'ejs-button': ButtonComponent
    },
    data: function() {
        return { 
        }
    },
    methods: {
        alertBtnClick: function () {
            document.getElementById("statusText").style.display="none";
            dialogObj = DialogUtility.alert({
                title: 'Low Battery',
                content: '10% of battery remaining',
                okButton: {click:this.alertOkAction},
                position: { X: 'center', Y: 'center' },
                closeOnEscape: true ,
                close : this.alertOkAction
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
                title: " Delete Multiple Items",
                content: "Are you sure you want to permanently delete these items?",
                okButton: { click:this.confirmOkAction},
                cancelButton: { click:this.confirmCancelAction},
                position: { X: 'center', Y: 'center' },
                closeOnEscape: true ,
                close : this.confirmCancelAction 
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
        promptBtnClick: function () {
            document.getElementById("statusText").style.display="none";
            dialogObj = DialogUtility.confirm({
                title: "Join Chat Group",
                content:'<P>Enter your name:</p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
                okButton: { click:this.promptOkAction },
                cancelButton: { click:this.promptCancelAction},
                position: { X: 'center', Y: 'center' },
                closeOnEscape: true ,
                close : this.promptOkAction
            });
        },
        promptOkAction:function () {
        value = document.getElementById("inputEle").value;
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
}
</script>
