<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor ref="rteObj" :value="value" :enableXhtml="enableXhtml" :actionComplete="actionCompleteHandler" :beforeQuickToolbarOpen="quickToolbarOpenHandler" :quickToolbarClose="quickToolbarClosehandler"
                        :insertImageSettings="insertImageSettings" :toolbarSettings="toolbarSettings">
                    </ejs-richtexteditor>
                    <ejs-uploader ref="uploadObj" id='rteCustomWordUpload' name="UploadFiles" :asyncSettings="path"
                        :success="onUploadSuccess"></ejs-uploader>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This example illustrates how to efficiently import the Word document into the Rich Text Editor.</p>
        </div>
        <div id="description">
            <p>In this demo, the Word document can be imported as Rich Text Editor content by clicking the import to
                Word icon, browsing for the document, and uploading it to the server, where it is converted to HTML and
                then sent to the Rich Text Editor as its value.</p>
        </div>
    </div>
</template>
<style>
.e-upload:has(#rteCustomWordUpload) {
    display: none;
}
</style>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, Video, Audio, PasteCleanup } from "@syncfusion/ej2-vue-richtexteditor";
import { UploaderComponent } from "@syncfusion/ej2-vue-inputs";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
export default {
    components: {
        'ejs-richtexteditor': RichTextEditorComponent,
        'ejs-uploader': UploaderComponent
    },
    data: function () {
        return {
            hostUrl: 'https://services.syncfusion.com/vue/production/',
            value: `<h2 style="text-align: center;">Invitation to Microsoft Webinar Meet-Up</h2><p> Dear Guest, </p><p> We're thrilled to extend a special invitation to you for an exclusive Microsoft webinar meet-up, where we'll explore the latest innovations and insights driving the future of technology. As a valued member of our community, we believe this event will offer invaluable knowledge and networking opportunities. </p><h2>Event Details:</h2><table class="e-rte-table" style="width: 100%; height: 125px;"> <tbody> <tr style="height: 20%;"> <th class="">Time:</th> <td>10:00 AM - 12:00 PM</td> </tr> <tr style="height: 20%;"> <th>Duration:</th> <td>2 hours</td> </tr> <tr style="height: 20%;"> <th>Platform:</th> <td>Microsoft Teams</td> </tr> </tbody></table><p><br></p><h2>Agenda:</h2><ul> <li>Introduction to Cutting-Edge Microsoft Technologies</li> <li>Deep Dive into AI in Business: Leveraging Microsoft Azure Solutions</li> <li>Live Q&amp;A Session with Industry Experts</li> <li>Networking Opportunities with Peers and Professionals</li> </ul><h2>Why Attend?</h2><ul> <li>Gain insights into the latest trends and advancements in technology.</li> <li>Interact with industry experts and expand your professional network.</li> <li>Get your questions answered in real-time during the live Q&amp;A session.</li> <li>Access exclusive resources and offers available only to webinar attendees.</li> </ul><p> Feel free to invite your colleagues and peers who might benefit from this enriching experience. Simply forward this email to them or share the event details. </p><p> We're looking forward to your participation and to exploring the exciting world of Microsoft technology together. Should you have any questions or require further information, please don't hesitate to contact us at <a href="mailto:webinar@company.com">webinar@company.com</a>.</p><p> <br></p><p>Warm regards,</p><p>John Doe<br>Event Coordinator<br>ABC Company</p>`,
            enableXhtml: true,
            insertImageSettings: {
                saveUrl: this.hostUrl + 'api/RichTextEditor/SaveFile',
                removeUrl: this.hostUrl + 'api/RichTextEditor/DeleteFile',
                path: this.hostUrl + 'RichTextEditor/'
            },
            path: {
                saveUrl: this.hostUrl + 'api/RichTextEditor/ImportFromWord',
            },
            toolbarSettings: {
                items: [
                    'Undo',
                    'Redo',
                    '|',
                    {
                        tooltipText: "Import from Word",
                        template: `<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="custom_tbarbtn_1" style="width:100%">
                         <span class="e-rte-import-doc e-btn-icon e-icons"></span></button>`,
                        click: this.importContentFromWord.bind(this),
                    },
                    '|',
                    'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                    'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                    'Formats', 'Alignments', 'blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'ClearFormat', 'SourceCode'
                ]
            },
        };
    },
    methods: {
        importContentFromWord(e) {
            this.$refs.uploadObj.ej2Instances.element.click();
        },
        onUploadSuccess(args) {
            this.$refs.rteObj.ej2Instances.executeCommand('insertHTML', args.e.currentTarget.response, { undo: true });
        },
        actionCompleteHandler: function (e) {
            if (e.requestType === 'SourceCode') {
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.add('e-overlay');
        } else if (e.requestType === 'Preview') {
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.remove('e-overlay');
        }
        },
        quickToolbarOpenHandler: function (e) {
            if (!isNullOrUndefined(e.targetElement) && e.targetElement.nodeName === 'IMG') {
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.add('e-overlay');
        }
        },
        quickToolbarClosehandler: function (e) {
           if (!isNullOrUndefined(e.element) && e.element.classList.contains('e-rte-image-popup')) {
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbarbtn_1').parentElement.classList.remove('e-overlay');
        } 
        },
    },
    provide: {
        richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio]
    },
};
</script>