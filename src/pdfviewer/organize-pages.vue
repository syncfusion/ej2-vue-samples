<template>
    <div>
        <div class="control-section">
            <div class="flex-container">
                <label class="switchLabel" for="checked">Standalone PDF Viewer</label>
                <div class="e-message render-mode-info">
                    <span class="e-msg-icon render-mode-info-icon" title="Turn OFF to render the PDF Viewer as server-backed"></span>
                </div>
                <ejs-switch cssClass="buttonSwitch" id="checked" :change="change" :checked="true"></ejs-switch>
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
        <p>This sample showcases the page organization features of the PDF Viewer component, allowing users to effortlessly insert, delete, rearrange, copy, import, undo, redo, and rotate pages. Additionally, users can select all pages for collective adjustments and save changes instantly or download the edited document.</p>
       </div>
 
       <div id="description">
        <p>
            Explore the comprehensive page organization capabilities of the PDF Viewer component through this sample. Users can seamlessly manage the PDF documents with the following functionalities:
        </p>
        <ul>
            <li>Add new pages to the document to integrate additional content seamlessly.</li>
            <li>Remove unnecessary pages with ease, streamlining document management.</li>
            <li>Resolve orientation issues by rotating pages clockwise <code>right</code>  or counterclockwise <code>left</code> as required.</li>
            <li>Conveniently select all pages for uniform adjustments and modifications.</li>
            <li>Rearrange pages by dragging and dropping selected pages to the desired position.</li>
            <li>Copy pages by selecting the thumbnails and using the copy option; duplicates are added next to the selected pages.</li>
            <li>Click the "Import Documents" icon in the toolbar to import a document. If any thumbnail is selected, the new document will be imported next to it; otherwise, it will be imported as the first thumbnail.</li>
            <li>Undo and redo actions are available at the organize pages dialog.</li>
            <li>Enjoy real-time updates as any changes made to the page organization are instantly reflected within the PDF Viewer, when you click on the <code>Save</code> button.</li>
            <li>Utilize the <code>Save As</code> feature to preserve edits, enabling users to download the modified version of the PDF document for future reference.</li> 
        </ul>      
       <p>
       More information on the PDF Viewer instantiation can be found in this
       <a target="_blank"
       href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
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
    align-items: center;
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
    margin-bottom: 3px;
}

.render-mode-info .render-mode-info-icon::before {
    line-height: normal;
}

.buttonSwitch {
    Width: 40px;
    Height: 24px;
}

</style>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer} from "@syncfusion/ej2-vue-pdfviewer";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
var isInitialLoading = true;
export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-switch': SwitchComponent 
    },
    data: function() {
        return {
			documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'}
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]
    },
    methods: {
        documentLoad: function (args) {
            if(isInitialLoading)
            {
                this.$refs.pdfviewer.ej2Instances.isPageOrganizerOpen = true;
                isInitialLoading = false;
            }
            else{
                this.$refs.pdfviewer.ej2Instances.isPageOrganizerOpen = false;
            }
        },
        // Initialize switchObj within the mounted hook
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