<template>
    <div>
        <div class="control-section">
            <ejs-pdfviewer id="pdfviewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :documentLoad="documentLoad"></ejs-pdfviewer>
        </div>

       <div id="action-description">
       <p>The sample demonstrates the Handwritten Signature support of  PDF Viewer. The Handwritten signature reduces the paperwork of reviewing the contents and it's verified it's digitally.</p>
       </div>
 
       <div id="description">
       <p>
        In the PDF Viewer component, we can explicitly open the Handwritten signature dialog using the method 
setAnnotationMode
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
<style>
	#pdfviewer {
		height: 640px;
	}
</style>
<script>
import Vue from "vue";
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields } from "@syncfusion/ej2-vue-pdfviewer";

Vue.use(PdfViewerPlugin);

export default Vue.extend({
    data: function() {
        return {
			serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
			documentPath:"PDF_Succinctly.pdf"		
        }
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields]
    },
    methods: {
        documentLoad: function (args) {
            this.$refs.pdfviewer.ej2Instances.annotationModule.setAnnotationMode('HandWrittenSignature');
        }
    }	
});
</script>
