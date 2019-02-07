<template>
  <div>
     <div id="target" class="col-lg-12 control-section">
        <div id='customization'>      
            <div class='animate'>
               <ejs-button v-on:click.native='buttonClick' id='Zoom'>Zoom</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipXDown'>FlipX Down</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipXUp'>FlipX Up</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipYLeft'>FlipY Left</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipYRight'>FlipY Right</ejs-button>
            </div>
        </div>             
        <ejs-dialog id='dialog' header='Animation Dialog' content='The dialog is configured with animation effect. It is opened or closed with "Zoom In or Out" animation.' showCloseIcon='true' :isModal='isModal' :animationSettings='animationSettings' width='285px' ref='dialogObj'
            target='#target' :buttons='dlgButton'>
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
           This example demonstrates how to open or close the dialog with animation effects by clicking the appropriate button.
        </p>
    </div>
    <div id="description">
        <p>
            The dialog can be opened or closed with animation effect using the <code>animationSettings</code> property. You can also customize the duration of animation and delay to begin animation. Disables the dialog's animation by setting the animation effect as none. 
        </p>
        More information on the animation effect of Dialog can be found in
        the <a href="https://ej2.syncfusion.com/vue/documentation/dialog/animation/" target="_blank"> documentation section</a>.
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);

export default Vue.extend({
    data: function() {
        return {
            dlgButton: [{ 'click': () => { this.$refs.dialogObj.hide(); }, buttonModel: { content: 'Hide', isPrimary: true }}],
            isModal: true,
            animationSettings: { effect: 'Zoom' }
        }
    },
    methods: {
        buttonClick: function(e){
            var effect = e.target.getAttribute('id');
            let txt = e.target.parentElement.innerText;
            txt = (txt === 'Zoom In/Out') ? 'Zoom In or Out' : txt;
            this.$refs.dialogObj.content = 'The dialog is configured with animation effect. It is opened or closed with "' + txt + '" animation.';
            this.$refs.dialogObj.animationSettings = { effect: effect, duration: 400};
            setTimeout(() => {
                this.$refs.dialogObj.show();
            },400);
        }
    }
});
</script>

<style>            
    #customization {
        display: table;
        margin: 0 auto;
    }

    .animate {
        display: table-cell;
        padding-left: 20px;
    }

    #customization .e-btn.e-outline:hover,
    #customization .e-css.e-btn.e-outline:hover,
    #customization .e-btn.e-outline:hover:focus, 
    #customization .e-css.e-btn.e-outline:hover:focus,
    #customization .e-btn.e-outline:focus,
    #customization .e-css.e-btn.e-outline:focus {
        background-color: #ffffff;
        border-color: #0078d6;
        color:#0078d6;
        outline: none;
    }

</style>
