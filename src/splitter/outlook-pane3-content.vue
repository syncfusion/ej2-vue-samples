<template>
<div>
        <div style="width: 100%; padding: 15px;">
            <table>
                <tr>
                    <td><ejs-button cssClass='e-flat e-outline' isprimary=true >To...</ejs-button></td>
                    <td><ejs-textbox id="firstname" /></td>
                </tr>
                <tr>
                    <td><ejs-button cssClass='e-flat e-outline'>Cc...</ejs-button></td>
                    <td><ejs-textbox id="lastname" /></td>
                </tr>
                <tr>
                    <td><div id="subject-text">Subject</div></td>
                    <td><ejs-textbox id="subject" /></td>
                </tr>
            </table>
        </div>
        <div class="forum">
        <div id="createpostholder">
                <ejs-richtexteditor id="outlook_rte" ref="rteInstance" height='262px'></ejs-richtexteditor>
                <div id="buttonSection">
                    <ejs-button :isPrimary="isPrimary" id="send" >Send</ejs-button>
                    <ejs-button id="discard" >Discard</ejs-button>
                </div>
        </div>
    </div>
</div>
</template>
<style>
    
</style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Link, Image, HtmlEditor, Toolbar } from "@syncfusion/ej2-vue-richtexteditor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(TextBoxPlugin);
Vue.use(RichTextEditorPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
        isPrimary: true
        };
    },
    mounted: function() {
        this.$nextTick(function () {
            this.$refs.rteInstance.$el.ej2_instances[0].refresh();
        })
    },
    provide:{
        richtexteditor:[Link, Image, HtmlEditor, Toolbar]
    }
});
</script>