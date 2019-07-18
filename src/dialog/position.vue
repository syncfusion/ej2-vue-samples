<template>
  <div>
     <div id="target" class="col-lg-12 control-section">
         <ejs-button id="dialogBtn" v-on:click.native="buttonClick">Open Dialog</ejs-button>
    
        <ejs-dialog id='defaultDialog' header='Choose a Dialog Position' showCloseIcon='true' :position='position' :footerTemplate='footerTemplate' width='452px' ref='dialogObj'
            target='#target' :open='dialogOpen' :close='dialogClose' closeOnEscape='false'>
            <table style='width: 405px' id ='poschange'>
                <tr>
                    <td><ejs-radiobutton id='radio1' label='Left Top' value='left top' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio2' label='Center Top' value='center top' name='xy' :change='changePosition'></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio3' label='Right Top' value='right top' name='xy' :change='changePosition'></ejs-radiobutton></td>
                </tr>
                <tr>
                    <td><ejs-radiobutton id='radio4' label='Left Center' value='left center' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio5' label='Center Center' value='center center' name='xy' checked='true' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio6' label='Right Center' value='right center' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                </tr>
                <tr>
                    <td><ejs-radiobutton id='radio7' label='Left Bottom' value='left bottom' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio8' label='Center Bottom' value='center bottom' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                    <td><ejs-radiobutton id='radio9' label='Right Bottom' value='right bottom' name='xy' :change='changePosition' ></ejs-radiobutton></td>
                </tr>
            </table>
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
           This example demonstrates how to position the dialog component. Select the appropriate radio button to position where the dialog is displayed. The current position of the dialog is at the bottom.  Enable the <code>open dialog</code> button to reopen the dialog if it is closed.
        </p>
    </div>
    <div id="description">
        <p>
            By default, the dialog is displayed in the center of the target container. Use the <code>position</code> property to set location where the dialog displays relative to the target. The property point-out the horizontal and vertical coordinates. You can set position with specific X and Y coordinates in pixel values.
        </p>
        More information on the positioning of Dialog can be found in 
        the <a href="https://ej2.syncfusion.com/vue/documentation/dialog/getting-started/#positioning" target="_blank"> documentation section</a>.
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(RadioButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
            footerTemplate: '<span id="posvalue" style="float:left;margin-left:8px;padding:10px;">Position: { X: "Center", Y: "Center" }</span>',
            position: { X: 'center', Y: 'center' }    
        }
    },
    mounted: function(){
        document.getElementById('radio5').click();
    },
    methods: {
        buttonClick: function(args){
            this.$refs.dialogObj.show();
        },
        changePosition: function(event) {
            this.$refs.dialogObj.position = { X: event.value.split(" ")[0], Y: event.value.split(" ")[1] };
            document.getElementById('posvalue').innerHTML = 'Position: {X: "' + event.value.split(" ")[0] + '", Y: "' + event.value.split(" ")[1] + '"}'
            var txt = event.event.target.parentElement.querySelector('.e-label').innerText.split(" ");
            document.getElementById('posvalue').innerHTML = 'Position: { X: "' + txt[0] + '", Y: "' + txt[1] + '" }';
        },
        dialogClose() {
            document.querySelector('#dialogBtn').style.display='inline-block';
        },
        dialogOpen() {
            document.querySelector('#dialogBtn').style.display='none';
        }
    }
});
</script>

<style>
    html,
    body,    
    #container {
        height: 100%;
        overflow: hidden;
        width: 100%;
    }
    .control-section{            
        min-height: 370px;
        margin-bottom: 10px;
        margin-top: 10px;    
    }
    #defaultDialog table,
    #defaultDialog th,
    #defaultDialog td {
        border: 1px solid #D8D8D8;
        border-collapse: collapse;
    }

    #defaultDialog.e-dialog .e-footer-content {
        padding: 0px 1px 4px;
    }

    .highcontrast #defaultDialog.e-dialog .e-footer-content {
        padding: 0px 8px 4px;
    }

    .fabric .e-dialog .e-dlg-content {
        padding: 15px 18px 20px;
    }

    .tableStyle {
        margin: 17px;
        width: 304px;
    }

    .e-dialog .e-dlgcontent{
        padding: 10px 16px 10px;
    }     

    .e-radio +label .e-label {
        line-height:18px;
    }

    td {
        padding: 6px;
    }
</style>
