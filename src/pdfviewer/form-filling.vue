<template>
    <div>
        <div class="control-section">
            <ejs-pdfviewer id="pdfviewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :enableFormFieldsValidation="true" :showNotificationDialog="false" :validateFormFields="validateFormFields"></ejs-pdfviewer>
        </div>

       <div id="action-description">
       <p>This sample demonstrates the form filling features of PDF Viewer and allows you to edit the form fields, download and print the edited form fields PDF documents.</p>
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
<style scoped>
	#pdfviewer {
		height: 640px;
	}
</style>
<script>
import Vue from "vue";
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";

Vue.use(PdfViewerPlugin);
var viewer;
export default Vue.extend({
    data: function() {
        return {
			serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
			documentPath:"FormFillingDocument.pdf"		
        }
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
    },
    methods: {
        validateFormFields: function (args) {
            var errorMessage = "Required Field(s): ";
            viewer = this.$refs.pdfviewer.ej2Instances;
            var forms = viewer.formFieldCollections;
            var flag = false;
            var radioGroupName = "";
            for (var i = 0; i < forms.length; i++) {
                var text = "";
                if (forms[i].isRequired == true)
                {
                    if (forms[i].type.toString() == "Checkbox" && forms[i].isChecked == false) {
                        text = forms[i].name;
                    }
                    else if (forms[i].type == "RadioButton" && flag == false) {
                        radioGroupName = forms[i].name;
                        if(forms[i].isSelected == true)
                            flag = true;
                    }
                    else if (forms[i].type.toString() != "Checkbox" && forms[i].type != "RadioButton" &&  forms[i].value == ""){
                        text = forms[i].name;
                    }
                    if(text != "")
                    {                    
                        if (errorMessage == "Required Field(s): ") {
                            errorMessage += text;
                        }
                        else {
                            errorMessage += ", " + text;
                        }
                    }
                }
            }
            if(!flag && radioGroupName != "")
            {
                if(errorMessage == "Required Field(s): ")
                    errorMessage += radioGroupName;
                else
                    errorMessage += ", " + radioGroupName;
            }
            if (errorMessage != "Required Field(s): ") {
                viewer.showNotificationPopup(errorMessage);
            }
        }
    }
});
</script>
