<template>
    <div>
        <div class="control-section">
            <ejs-pdfviewer id="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"></ejs-pdfviewer>
        </div>

       <div id="action-description">
       <p>This sample demonstrate the core features of PDF Viewer such as PDF viewing, printing, navigation, text search and selection, zooming, panning etc. with its built-in toolbar.</p>
       </div>
 
       <div id="description">
       <p>
        The PDF Viewer component enables you to view and print the PDF files. This sample demonstrate the following key features of PDF Viewer,
       </p>
       <ul>
       <li>View the PDF document</li>
       <li>Core interactions - Scrolling, Zooming, panning and page navigation</li>
       <li>Built-in toolbar</li>
       <li>Select and copy text from PDF file</li>
       <li>Search a text easily across the PDF document</li>
       <li>Easy navigation with the help of Bookmarks, thumbnails, hyperlinks and table of contents</li>
       <li>View modes - fit to page and fit to width</li>
       <li>Print the entire document or a specific page directly from the browser.</li>
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
    }	
});
</script>
