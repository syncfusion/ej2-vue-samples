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
            :resourceUrl="resourceUrl"
            :created="created"
            :toolbarSettings="toolbarSettings"
            :annotationSettings="annotationSettings"
            >
        </ejs-pdfviewer>
        </div>
       <div id="action-description">
       <p>The sample showcases the PDF viewer operating in a read-only mode, which restricts the ability to make changes to annotations, form fields, and also disables text selection.</p>
       </div> 
       <div id="description">
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
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-switch': SwitchComponent 
    },
    data: function() {
        return {
			documentPath:'https://cdn.syncfusion.com/content/pdf/restricted-formfield.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
            toolbarSettings:{ showTooltip : true, toolbarItems: ['OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'PrintOption']},
            enableStickyNotesAnnotation:false,
            annotationSettings:{isLock:true},
        }
           
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
    },
    methods: {
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
        },

        
        created: function (args) { 
            var viewer = document.getElementById('pdfviewer').ej2_instances[0];
            
            viewer.textFieldSettings = {
                isReadOnly: true,
            };
            viewer.passwordFieldSettings = {
                isReadOnly: true,
            };
            viewer.checkBoxFieldSettings = {
                isReadOnly: true,
            };
            viewer.radioButtonFieldSettings = {
                isReadOnly: true,
            };
            viewer.listBoxFieldSettings = {
                isReadOnly: true,
            };
            viewer.DropdownFieldSettings = {
                isReadOnly: true,
            };
            viewer.signatureFieldSettings = {
                isReadOnly: true,
            };
            viewer.initialFieldSettings = {
                isReadOnly: true,
            };

            viewer.contextMenuOption="None";
            viewer.dataBind();
        },
    }
};
</script>