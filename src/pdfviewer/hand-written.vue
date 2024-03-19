<template>
    <div>
        <div class="control-section">
            <div class="flex-container">
                <label class="switchLabel" for="checked">Standalone PDF Viewer</label>
                <div class="e-message render-mode-info">
                    <span class="e-msg-icon render-mode-info-icon" title="Turn OFF to render the PDF Viewer as server-backed"></span>
                </div>
                <div>
                    <ejs-switch cssClass="buttonSwitch" id="checked" :change="change" :checked="true"></ejs-switch>
                </div>
            </div>

            <ejs-pdfviewer
            id="pdfviewer" 
            ref="pdfviewer" 
            :documentPath="documentPath" 
            :documentLoad="documentLoad"
            :resourceUrl="resourceUrl">
            </ejs-pdfviewer>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the Handwritten signature and initial support of the PDF Viewer. The signature or
                initial support reduces the paperwork of reviewing the contents and it is verified digitally.</p>
        </div>

        <div id="description">
            <p>
                In the PDF Viewer component, we can explicitly open the Handwritten signature dialog or initial dialog using
                the method setAnnotationMode.
            </p>
            <p>
                More information on the PDF Viewer instantiation can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
                    documentation section</a>.
            </p>
        </div>

    </div>
</template>
<style scoped>

    #pdfviewer {
        height: 640px;
    }

    .flex-container {
        display: flex;
        justify-content: flex-end;
    }

    .render-mode-info {
        background: none;
        border: none;
        padding-left: 0px;
    }

    .render-mode-info .render-mode-info-icon {
        height: 16px;
        width: 16px;
    }

    .switchLabel {
        font-family: "Segoe UI", "GeezaPro", "DejaVu Serif", sans-serif;        
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.24px;
        text-align: right;
        font-size: 14px;
    }

    .render-mode-info .render-mode-info-icon::before {
        line-height: 0.5rem;
    }

    .buttonSwitch {
        Width: 40px;
        Height: 24px;
    }

</style>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
var isInitialLoading = true;
export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-switch': SwitchComponent
    },
    data: function () {
        return {
            documentPath: 'https://cdn.syncfusion.com/content/pdf/handwritten-signature.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'
        }
    },
    provide: {
        PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]
    },
    methods: {
        documentLoad: function (args) {
            if(isInitialLoading){
                this.$refs.pdfviewer.ej2Instances.annotationModule.setAnnotationMode('HandWrittenSignature');
                isInitialLoading = false;
            }
        },
        change: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            if (args.checked) {
                viewer.serviceUrl = "";
            } else {
                viewer.serviceUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer";
            }           
            viewer.dataBind();
            viewer.load(viewer.documentPath, null);
        }
    }
};
</script>