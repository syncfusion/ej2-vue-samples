<template>
<div>
<div class="control-section" style="overflow:hidden;">
    <div class="col-lg-8 control-section">
        <div class="control-wrapper">
            <div class="sample-container">
                <div class="default-section">
                   <ejs-richtexteditor ref="rteObj"  :enableAutoUrl="enableAutoUrl" :insertImageSettings="insertImageSettings" :quickToolbarSettings="quickToolbarSettings" :toolbarClick="onToolbarClick"><p>Rich Text Editor allows to insert images from online source as well as local 
                computer where you want to insert the image in your content.</p>
                <p><b>Get started Quick Toolbar to click on the image</b></p>
                <p>It is possible to add custom style on the selected image inside the RichTextEditor through quick toolbar.</p>
                <img id="rteImageID" style="width:300px; height:300px;transform: rotate(0deg);" alt="Logo" src="./images/RTEImage-Feather.png"></ejs-richtexteditor>
                </div>
            </div>
        </div>
        </div>
    <div class="col-lg-4 property-section">
        <div title="Properties" id="property">
            <table title="Properties" id="property">
                <tbody>
                        <tr>
                        <td>
                            <div>Enable AutoUrl</div>
                        </td>
                        <td>
                            <div>
                             <ejs-checkbox ref="checkInstance" :change="changeCheck" id="enablehtml" ></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            <div>Format Option </div>
                        </td>
                        <td>
                            <div>
                            <ejs-dropdownlist ref="formatOptionInstance" :dataSource="formatData"  :fields='fields' :popupHeight="height" :change="formatChange" :value='value'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
 </div>
    
    <div id="action-description">
            <p>This sample demonstrates the option to insert the image to the RichTextEditor content. Click the image button from the
            toolbar item to insert the image.</p>
    </div>
    
    <div id="description">
         <p>Image tools used to insert an image to the RichTextEditor and click on the image to easily customize the image using quick toolbar. 
    The quick toolbar has the following items</p>
    
    <ul><li><code>Replace</code> – can replace the image with some other image.</li>
    <li><code>Align</code> – Align the image with left, right and justify.</li>
    <li><code>Image captions</code> – set the captions for the image.</li>
    <li><code>Change size</code> – modify width and height of image.</li>
    <li><code>Delete</code> – delete the image.</li>
    <li><code>Link</code> – provide the link to the image.</li>
    <li><code>Display</code> - display the image as inline or with break.</li>
    <li><code>Alternate text</code> – provide the alternative text for the image if the image is not present in the location.</li>
    <li><code>Resize</code> – can resize the image dimension with resize options.</li>
    </ul> 
    <p><b>Injecting Module:</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar</code> into the <code>provide</code> section.</p>
    </div>
</div>
</template>
<style>
    .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {
        content: "\e341";
    }

    .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {
        content: "\e354";
    }

    .bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {
        content: "\e752";
    }
    
    .bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {
        content: "\e778";
    }

</style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection } from "@syncfusion/ej2-vue-richtexteditor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './data-source.json';
import { CheckBoxPlugin} from "@syncfusion/ej2-vue-buttons";
Vue.use(DropDownListPlugin);
Vue.use(RichTextEditorPlugin);
Vue.use(CheckBoxPlugin);
export default Vue.extend({
    data: function() {
        return {
             height: '200px',
            formatData: data['saveFormat'],
            fields: { text: 'Id', value: 'Id' },
            value: 'Blob',
            enableAutoUrl : false,
             insertImageSettings: {
                saveFormat: 'Blob'
            },
    quickToolbarSettings: {
            image: [
                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
                'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension',
                {
                    tooltipText: 'Rotate Left',
                    template: '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-rotate-left"></span>'
                },
                {
                    tooltipText: 'Rotate Right',
                    template: '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-rotate-right"></span>'
                }
            ]
        }
        };
        },
        methods: {
            onToolbarClick: function(e) {
            var nodeObj = new NodeSelection();
            var range = nodeObj.getRange(this.$refs.rteObj.ej2Instances.contentModule.getDocument());
            var imgEle = nodeObj.getNodeCollection(range)[0];
            if (e.item.tooltipText === 'Rotate Right') {
                var transform = (imgEle.style.transform === '') ? 0 :
                    parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);
                imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';
                this.$refs.rteObj.ej2Instances.formatter.saveData();
                this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);
            }
            else if (e.item.tooltipText === 'Rotate Left') {
                var transform = (imgEle.style.transform === '') ? 0 :
                    Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));
                imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';
                defaulthis.$refs.rteObj.ej2Instances.tRTE.formatter.saveData();
                this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);
            }
            },
             formatChange: function() {
             if (this.$refs.formatOptionInstance.ej2Instances.value === 'Base64') {
                this.$refs.rteObj.ej2Instances.insertImageSettings.saveFormat = 'Base64';
            } else {
                this.$refs.rteObj.ej2Instances.insertImageSettings.saveFormat = 'Blob';
            }
            this.$refs.rteObj.ej2Instances.dataBind();
        },
        changeCheck: function(args) {
           this.$refs.rteObj.ej2Instances.enableAutoUrl = args.checked;
           this.$refs.rteObj.ej2Instances.dataBind();
    },
        },
    provide:{
        richtexteditor:[Toolbar, Image,  Link, HtmlEditor, QuickToolbar]
    }
});
</script>
