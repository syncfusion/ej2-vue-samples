<template>
    <div class="control-section e-img-editor-canvas">
        <div class='e-profile'>
            <div class="e-custom-wrapper">
                <canvas id='img-canvas'></canvas>
                <img alt="img" id="custom-img"  v-on:load="imageLoad" crossorigin="anonymous" src="src/image-editor/images/profile.png"
                style="display: none;"/>
                <input type="file" id="img-upload" style="display:none" v-on:change="fileChanged"/>
                <span id="custom-edit" class="e-custom-edit" v-on:click="editClicked">
                    <span class="e-custom-icon sb-icons"></span>
                </span>
            </div>
        </div>
        <div id='profile-dialog' class="e-img-editor-profile">
            <ejs-dialog id="componentsDialog" :position="position" :closeOnEscape=true :open="dlgOpened" :buttons='dlgButtons' ref="dialogObj" :header='header' :animationSettings='animationSettings' :content='imageEditorTemplate' showCloseIcon=true :target='target' width='340px' height="400px" :visible= false>
        </ejs-dialog>
        </div>
        <div id="action-description">
            <p>The Image Editor component provides built-in support to rotate an image using the rotate method and support to crop an image using the select and crop methods.</p>
        </div>
        <div id="description">
            <p>In this demo, Image Editor is rendered within a dialog and opens an image by passing its URL path to the open method of the Image Editor control.</p>
            <p> The following operations are supported in the Image Editor. :  </p>
            <ul>
                <li><b>Selection</b> : Multiple selection options are available. The selection region can be a square or circle, customized to various aspect ratios, and customized by dragging and resizing.</li>
                <li><b>Crop</b> : The image can be cropped based on the selection.</li>
                <li><b>Rotate</b> : The image can be rotated both clockwise and anticlockwise by 90 degrees.</li>
            </ul>
            <p>
                More information about Image Editor can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/image-editor/getting-started/">documentation</a> section.
            </p>
        </div>
    </div>
</template>

<!-- custom code start -->
<style>
   
    .e-img-editor-canvas {
		position: relative;
	}

    .e-profile {
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        -webkit-transform: translate(-50%, 30%);
        transform: translate(-50%, 30%);
        border-radius: 50%;
    }

    .e-custom-wrapper {
        position: relative;
    }

    .e-custom-edit {
        position: absolute;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: blue;
        top: calc(100% - 54px);
        left: calc(100% - 47px);
    }

    .e-custom-icon::before {
        content: '\e911';
        font-size: 28px;
        color: white;
        left: 5px;
        top: 7px;
        position: absolute;
    }
	
	.tailwind .e-custom-icon::before,
	.tailwind-dark .e-custom-icon::before {
    	top: 6px;
	}

    #custom-edit:hover {
        cursor: pointer;
    }

    canvas#img-canvas {
        border-radius: 50%;
        border: 4px solid darkgrey;
        max-width: 200px;
        max-height: 200px;
    }

    .e-img-custom-open {
        float: left;
		margin-left: 0 !important;
    }

    .e-img-custom-reset {
        float: left;
    }
	
	.e-bigger #profile-dialog .e-dlg-header {
		font-size: 18px !important;
	}
	

    .highcontrast .e-custom-img-btn,
    .fabric .e-custom-img-btn,
    .fabric-dark .e-custom-img-btn {
        padding: 2px 10px !important;
    }

    .e-bigger .e-custom-img-btn {
        font-size: 14px !important;
        padding: 6px 10px !important;
    }

    .e-bigger.highcontrast .e-custom-img-btn,
    .e-bigger.fabric .e-custom-img-btn,
    .e-bigger.fabric-dark .e-custom-img-btn,
    .e-bigger.material .e-custom-img-btn,
    .e-bigger.material-dark .e-custom-img-btn {
        padding: 3px 10px !important;
    }
    .e-bigger.bootstrap .e-custom-img-btn,
    .e-bigger.bootstrap-dark .e-custom-img-btn {
        padding: 1px 10px !important;
    }

    .e-img-editor-sample {
        min-height: 450px;
    }
</style>
<!-- custom code end -->

<script>
import Vue from "vue";
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { getComponent, createElement } from "@syncfusion/ej2-base";
Vue.use(DialogPlugin);

Vue.use(ImageEditorPlugin);

export default Vue.extend({
  data: function() {
    return {
        target: '.sb-desktop-wrapper',
        header: 'Profile',
        position: {X: 'center', Y: 100},
        dlgButtons: [
            { click: this.dlgOpenBtnClick, buttonModel: { content: 'Open', cssClass: 'e-custom-img-btn e-img-custom-open' } },
            { click: this.dlgResetBtnClick, buttonModel: { content: 'Reset', cssClass: 'e-custom-img-btn e-img-custom-reset' } },
            { click: this.dlgRotateBtnClick, buttonModel: { content: 'Rotate', cssClass: 'e-custom-img-btn e-img-custom-rotate' } },
            { click: this.dlgDoneBtnClick, buttonModel: { content: 'Apply', isPrimary: true, cssClass: 'e-custom-img-btn e-img-custom-apply' } }
        ],
        animationSettings: { effect: 'None' },
        imageEditorTemplate: function() {
            return {
                template: Vue.component('ImageEditorComponent', {
                    theme: 'Bootstrap5',
                    template: '<ejs-imageeditor :theme="themeValue" id="image-editor" :created="created" :fileOpened="fileOpened" :toolbar=[]></ejs-imageeditor>',
                    methods: {
                        fileOpened: function() {
                            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
                            imgEditor.select('circle');
                        },
                        created: function() {
                            if (this.themeValue && window.location.href.split('#')[1]) {
                                this.themeValue = window.location.href.split('#')[1].split('/')[1];
                            } 
                        }
                    },
                    computed: {
                        themeValue: {
                            get: function () {
                                return this.theme;
                            },
                            set: function (theme) {
                                this.theme = theme
                            }
                        }
                    }
                })
            }
        }		
    };
  },
   methods: {
        imageLoad: function() {
            let canvas = document.querySelector('#img-canvas');
            let image = document.querySelector('#custom-img');
            let ctx = canvas.getContext('2d');
            canvas.width = image.width < image.height ? image.width : image.height; 
            canvas.height = canvas.width;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        },
        dlgOpened: function() {
            let canvas = document.querySelector('#img-canvas');
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.open(canvas.toDataURL());
        },
        editClicked: function() {
            this.$refs.dialogObj.show();
        },
        dlgOpenBtnClick: function() {
            document.getElementById('img-upload').click();
        },
        dlgResetBtnClick: function() {
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.reset();
        },
        dlgRotateBtnClick: function() {
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.rotate(-90);
        },
        dlgDoneBtnClick: function() {
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.crop();
            let croppedData = imgEditor.getImageData();
            let canvas = document.querySelector('#img-canvas');
            let ctx = canvas.getContext('2d');
            let parentDiv = document.querySelector('.e-profile');
            let tempCanvas = parentDiv.appendChild(createElement('canvas'));
            let tempContext = tempCanvas.getContext('2d');
            tempCanvas.width = croppedData.width; tempCanvas.height = croppedData.height;
            tempContext.putImageData(croppedData, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
            tempCanvas.remove();
            parentDiv.style.borderRadius = '100%'; canvas.style.backgroundColor = '#fff';
            this.$refs.dialogObj.hide();
        },
        fileChanged: function(args) {
            const URL = window.URL; const url = URL.createObjectURL((args.target).files[0]);
            const imageEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imageEditor.open(url.toString());
            document.getElementById('img-upload').value = null;
        }
    }
});
</script>