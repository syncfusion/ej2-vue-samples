<template>
    <div>
        <div class="control-section">
            <ejs-pdfviewer id="pdfviewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :documentLoad="documentLoad"></ejs-pdfviewer>
        </div>

       <div id="action-description">
       <p>This sample demonstrates the Handwritten signature and initial support of the PDF Viewer. The signature or initial support reduces the paperwork of reviewing the contents and it is verified digitally.</p>
       </div>
 
       <div id="description">
       <p>
       In the PDF Viewer component, we can explicitly open the Handwritten signature dialog or initial dialog using the method setAnnotationMode.
       </p>
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
</style>
<script>
import Vue from "vue";
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";

Vue.use(PdfViewerPlugin);

export default Vue.extend({
    data: function() {
        return {
			serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
			documentPath:"HandwrittenSignature.pdf"		
        }
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
    },
    methods: {
        documentLoad: function (args) {
            this.$refs.pdfviewer.ej2Instances.annotationModule.setAnnotationMode('HandWrittenSignature');
        }
    }	
});
</script>