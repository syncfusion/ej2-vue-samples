<template>
    <div class="control-section">
        <div class="col-lg-12 e-img-editor-sample">
            <ejs-imageeditor :theme="themeValue" id="image-editor" ref="imageEditorObj" :created = "created">
                
            </ejs-imageeditor>
        </div>
        <div id="action-description">
            <p>This sample demonstrates Image Editor features such as crop, rotate, flip, insert annotations such as rectangle, ellipse, line, arrow, path, and text.</p>
        </div>
        <div id="description">
            <p>
                The Image Editor component provides built-in support to edit images in the following ways through APIs:
            </p>
            <ul>
                <li><b>Selection</b> : Multiple selection options are available. The selection region can be a square or circle, customized to various aspects ratios, and customized by dragging and resizing.</li>
                <li><b>Crop</b> : The image can be cropped based on the selection.</li>
                <li><b>Rotate</b> : The image can be rotated both clockwise and anticlockwise by 90 degrees.</li>
                <li><b>Flip</b> : The image can be flipped both horizontally and vertically.</li>
                <li><b>Zoom</b> : The image can be zoomed in and out.</li>
                <li><b>Pan</b> : View the entire image by toggling the pan option from the toolbar.</li>
                <li><b>Freehand drawing</b> : Draw freehand on the image and adjust the pen's stroke width and stroke color.</li>
                <li><b>Reset</b> : Revert all the edited states and load the original image.</li>
                <li><b>Save</b> : Save the edited image in JPEG, PNG, and SVG formats.</li>
                <li><b>Annotation</b> : Text, rectangle, ellipse, arrow, path, image, and line annotation shapes are supported.</li>
	            <li><b>Finetunes</b> : The effects such as brightness, contrast, hue, sauration, and blur can be applied to the image.</li>
                <li><b>Filters</b> : The predefined filters such as chrome, cold, warm, grayscale, sepia, and invert can be applied to the image.</li>
                <li><b>Frames</b> : The predefined frames such as mat, bevel, line, hook, and inset can be applied to the image.</li>
                <li><b>Resize</b> : The image can be resized to cater to the user's preferences and needs, enhancing the adaptability and usability of the content.</li>
            </ul>
            <p>
                More information about Image Editor can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/image-editor/getting-started/">documentation</a> section.
            </p>
        </div>
    </div>
</template>

<!-- custom code start -->
<style scoped>
    
    .e-img-editor-sample {
        height: 80vh;
        width: 100%;
    }

    @media only screen and (max-width: 700px) {
        .e-img-editor-sample {
            height: 75vh;
            width: 100%;
        }
    }

	.control-wrapper {
		height: 100%;
	}

    .e-image-editor {
        margin: 0 auto;
    }
</style>
<!-- custom code end -->

<script>
import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { Browser, getComponent, isNullOrUndefined } from "@syncfusion/ej2-base";

export default {
  components: {
    'ejs-imageeditor': ImageEditorComponent
  },
  data: function() {
    return {
        theme: 'Bootstrap5'
    };
  },
  methods: {
    created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('src/image-editor/images/flower.png');
        } else {
            this.$refs.imageEditorObj.open('src/image-editor/images/default.png');
        }
        if (this.themeValue && window.location.href.split('#')[1]) {
            this.themeValue = window.location.href.split('#')[1].split('/')[1];
        } 
    },
    onScroll: function() {
        if (document.getElementById('imageeditor_sliderWrapper')) {
            var slider = getComponent(document.getElementById('imageeditor_sliderWrapper'), 'slider');
            slider.refreshTooltip(slider.tooltipTarget);
        }
    }
  },
  mounted: function() {
    if (!isNullOrUndefined(document.getElementById("right-pane"))) {
        document.getElementById("right-pane").addEventListener("scroll", this.onScroll.bind(this));
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
};
</script>
