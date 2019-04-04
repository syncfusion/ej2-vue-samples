<template>
  <div>
    <div class="col-lg-12 control-section ajaxsample" style="padding:10px;position:relative;">
        <ejs-button id='ajaxBtn' v-on:click.native="ajaxBtnClick">Open</ejs-button>
        <ejs-dialog ref="dialogObj" :header='header' :buttons='dlgButtons' :content='contentData' :animationSettings='animationSettings' :showCloseIcon='showCloseIcon' :target='target' :width='width' :open="dialogOpen" :close="dialogClose">
        </ejs-dialog>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates that the content of dialog can be loaded from external HTML file.
            Click "more details" on dialog to load the content dynamically from external HTML file.
            Click “open” to show the dialog again, if it is closed. 
        </p>
    </div>
    <div id="description">
        <p>
            The user can load dialog's content dynamically from external source like external file using AJAX library.
            The AJAX library can make the request and load dialog's content using its success event. 
        </p>
    </div>

  </div>
</template>

<style>
	.control-section {
        height: 100%;
        min-height: 350px;
    }
    .ajaxsample .e-dialog .e-dlg-header >img.img1 {
        height: 20px;
        width: 20px;
		margin-right: 10px;
        margin-top: 4px;
        float: left;
    }
    .ajaxsample .e-footer-content button.e-control.e-btn.e-flat {
        width: 100%
    }
    .ajaxsample .e-dialog .e-footer-content .e-btn {
		margin-left: 0px;
	}
    .ajaxsample .e-dlg-header-content {
       min-height: 65px; 
    }
	.ajaxsample .e-dialog .e-icon-dlg-close::before{
	    top: 6px;
    }
    .material .ajaxsample .e-dialog {
        height: 278px;
    }
    .fabric .ajaxsample .e-dialog, .bootstrap .ajaxsample .e-dialog, .highcontrast .ajaxsample .e-dialog {
        height: 334px;
    }
    .highcontrast .ajaxsample .e-dialog .e-dlg-content {
        padding: 28px 25px 19px;
    }
	.e-bigger.e-dialog .e-footer-content .e-btn, .e-bigger .e-dialog .e-footer-content .e-btn{
	   margin-left: 0px;
    }
	.ajaxsample .e-footer-content button.e-control.e-btn.e-flat {
		width: initial;
    }
    .ajaxsample .e-btn .e-btn-icon {
        margin-top: -12px;
    }
</style>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Ajax } from '@syncfusion/ej2-base';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
            header: '<img class="img1" src="src/dialog/images/dialog-img2.png">Whats Coming from Microsoft this Fall',
            target:'.control-section',
            showCloseIcon:  true,
            ajaxHeight:  '270px',
            width:'500px',
            animationSettings: { effect: 'None' },
            innerContent1: 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform.',
            innerContent2: 'Much like its previous counter part, the Spring Creators Update ...',
            contentData: 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform. '
            + 'Much like its previous counterpart, the Spring Creators Update, the release is set to deliver more features '
            + 'to Windows 10 for both developers and users, with particular emphasis this time around on app modernization, '
            + 'mixed reality, and game development and software updates. App modernization is the term Microsoft used in ' 
            + 'its press event to encompass the features that will affect most Windows 10 users and developers.',
            content: this.innerContent1 + this.innerContent2,
            dlgButtons: [{ click: this.dlgButtonClick.bind(this), buttonModel: { isPrimary:'true', content: 'More Details' } }]
        }
    },
    mounted: function(){
        document.getElementById('ajaxBtn').focus();
    },
    methods: {
        dialogClose: function() {
            document.getElementById('ajaxBtn').style.display = '';
        },
        ajaxBtnClick: function() {
            this.$refs.dialogObj.show();
        },
        dialogOpen: function() {
            document.getElementById('ajaxBtn').style.display = 'none';
        },
        dlgButtonClick: function() {
            let localObj = this;
            if (document.querySelector('.e-footer-content .e-btn').textContent === 'More Details') {
                let ajax = new Ajax('./src/dialog/blog.html', 'GET', true);
                ajax.onSuccess = (data) => {
                    this.$refs.dialogObj.content = data;
                };
                ajax.send();
                document.querySelector('.e-footer-content .e-btn').textContent = 'Less Details';
            } else {
                this.$refs.dialogObj.content = this.contentData;
                document.querySelector('.e-footer-content .e-btn').textContent = 'More Details';
            }
        }
    }
});
</script>