<template>
  <div>
    <div class="col-lg-8 control-section" style="padding:10px;position:relative;">
     <div id="predefinedDialogAnimation">
     <ejs-button id="dlgbtn"  v-on:click.native="confirmBtnClick" cssClass="e-success">Confirm</ejs-button>
     </div>
    </div>
    <div class="col-lg-4 property-section"> 
        <div id="property" title="Properties">
            <ejs-dropdownlist id='effectDropdownlist' popupHeight='200px' floatLabelType='Always' placeholder='Animation effect' :value='value' :fields='fields' :dataSource='dataSource' :change='onChange'></ejs-dropdownlist>
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates how to show and hide the predefined dialog using a variety of animation effects. The dropdown item that displays the animation effects can be selected and set to it.
        </p>
    </div>
    <div id="description">
        <p>
        The dialog can be opened or closed with an animation effect using the <code>animationSettings</code> property. 
        You can also customize the duration of the animation and delay to begin the animation or disable the dialog's animation by setting the animation effect as none. 
        </p>
        <p>
            <b>See also</b>
        </p>
        <ul>
            <li> <a target="_blank" 
                href="https://ej2.syncfusion.com/vue/documentation/dialog/dialog-utlility/">
                documentation section</a>    
            </li>
        </ul>   
    </div>
  </div>
</template>

<style scoped>
    #predefinedDialogAnimation {
        padding: 25px 0 0 15px;
    }
</style>

<script>
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
let ConfirmDialogArgs  = {
    title: " Delete Multiple Items",
    content: "Are you sure you want to permanently delete these items?",
    animationSettings: { effect: 'Zoom',delay:0,duration: 400},
    position: { X: 'center', Y: 'center' },
    width:'420px',
    closeOnEscape: true
    };
export default Vue.extend({
    data: function() {
        var effectData =  [
        { Text: 'Fade zoom' ,Value: 'FadeZoom' },
        { Text: 'Slide bottom', Value: 'SlideBottom' },
        { Text: 'Slide top', Value: 'SlideTop' },
        { Text: 'Zoom' , Value: 'Zoom' },
        { Text: 'Fade', Value: 'Fade' }
        ];
        return { 
            dataSource : effectData,
            fields : {  text: 'Text', value: 'Value' },
            value: 'FadeZoom'
        }
    },
    methods: {
        confirmBtnClick: function () {
            DialogUtility.confirm(ConfirmDialogArgs);
        },
        onChange: function (args) { 
            ConfirmDialogArgs.animationSettings.effect = args.value;
        }
    }
});
</script>
