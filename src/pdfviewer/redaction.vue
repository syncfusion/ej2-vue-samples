<template>
    <div>
        <div class="control-section" id="e-pv-redact-sb-panel">
            <div class="content-wrapper">
                <div class="flex-container" id="e-pv-redact-sb-flexContainer">
                </div>
                <ejs-appbar colorMode="Primary">
                    <span class="regular" style="margin:0 5px">Redaction</span>
                    <div class="e-appbar-spacer"></div>
                    <ejs-button cssClass="e-inherit" iconCss='e-icons e-download e-btn-icon e-icon-left' @click="downloadClicked">Download</ejs-button>
                </ejs-appbar>

                <div id="toolbar_default">
                    <ejs-toolbar id="e-pv-redact-sb-toolbar" ref='primaryToolbar'>
                        <e-items>
                            <e-item prefixIcon="e-icon e-folder" :click='openClicked' tooltipText="Open" id="pdfviewer_open" cssClass='e-pv-redact-sb-open-container' text="Open"></e-item>
                            <e-item type="Separator" tooltipText="separator" id="separator1"></e-item>
                            <e-item prefixIcon="e-icon e-text-annotation" :click='addText' tooltipText="Text" cssClass='e-pv-redact-sb-font-container' text="Text"></e-item>
                            <e-item prefixIcon="e-icons e-image" v-if="ShowBtn" :click="imgClick" tooltipText="Image" id="targetButton" cssClass='e-pv-redact-sb-image-btn' text="Image"></e-item>
                            <e-item prefixIcon="e-icons e-opacity" :click='addPattern' tooltipText="Pattern" cssClass='e-pv-redact-sb-pattern-container' text="Pattern"></e-item>
                            <e-item prefixIcon="e-icons black-out" :click='addBlackout' tooltipText="Black out" cssClass='e-pv-redact-sb-black-out-container' text="Blackout"></e-item>
                            <e-item prefixIcon="e-icons white-out" :click='addWhiteout' tooltipText="White Out" cssClass='e-pv-redact-sb-white-out-container' text="Whiteout"></e-item>
                            <e-item type="Separator"></e-item>
                            <e-item prefixIcon="e-icons e-redact" :click='redaction' tooltipText="Redaction" id="redacticon" cssClass='e-pv-redact-sb-redaction-container' text="Redact" disabled=true></e-item>
                        </e-items>
                    </ejs-toolbar>
                    <input type="file" id="documentUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;"></input>
                </div>
            </div>
            <div class="e-pv-redact-sb-secondary-toolbar" id="toolbar_secondary">
                <ejs-toolbar id="secondary-toolbar" ref='secondaryToolbar'>
                    <e-items>
                        <e-item prefixIcon="e-icon e-chevron-left" :click='previousClicked' id="previousPage" tooltipText="Previous Page" cssClass='e-pv-redact-sb-previous-container' disabled=true></e-item>
                        <e-item :template="'currentPageTemplate'" cssClass="page-count"></e-item>
                        <template v-slot:currentPageTemplate>
                            <div><span id="current-page" title="Current Page">1 </span><span id="total-page" title="Total Page">/ 1</span></div>
                        </template>
                        <e-item prefixIcon="e-icon e-chevron-right" :click='nextClicked' id="nextPage" tooltipText="Next Page" cssClass='e-pv-redact-sb-next-container' disabled=true></e-item>
                        <e-item type="Separator"></e-item>
                        <e-item :template="'ComboTemplate'" cssClass="percentage" tooltipText="Zoom"></e-item>
                        <template v-slot:ComboTemplate>
                            <ejs-combobox width="90px" popupWidth="85px" value="100%" :showClearButton=false :dataSource="zoomList" :change='zoomValueChange'></ejs-combobox>
                        </template>
                    </e-items>
                </ejs-toolbar>
            </div>
            <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentLoad="documentLoad" :documentPath="documentPath" :enableToolbar="enableToolbar" :enableAnnotationToolbar="enableAnnotationToolbar" :enableCommentPanel="enableCommentPanel"
            :enableNavigationToolbar="enableNavigationToolbar" :pageChange="pageChange" :annotationAdd="annotationAdd" :annotationRemove="annotationRemove">
            </ejs-pdfviewer>
            <div id='dialog'>
                <ejs-dialog :header="'headerTemplate'" id="e-pv-redact-sb-dialog" ref="dialogObj" :buttons='dlgButtons' :content="'contentTemplate'" :animationSettings='animationSettings' showCloseIcon='true' :target='target' width='477px' :open="dialogOpen" :visible="dialogVisible"
                isModal='true' minHeight='485px'>
                    <template v-slot:headerTemplate>
                        <span id="container">
                  <div id="dlg-template" title="UploadImage" class="e-icon-settings"> Upload Image </div>
              </span>
                    </template>
                    <template v-slot:contentTemplate>
                        <div id='e-pv-redact-sb-defaultfileupload'>
                            <div class="drop-area-wrap" id='e-pv-redact-sb-drop-area-wrap'>
                                <div>
                                    <ejs-uploader ref="uploadObj" :asyncSettings="path" :allowedExtensions="extentions" :change="onFileChange" :multiple=false></ejs-uploader>
                                </div>
                                <div>
                                    (Only JPG and PNG images will be accepted)
                                </div>
                            </div>
                            <div class="e-pv-redact-sb-image-list">
                                <div id='imageContainer' ref='imgContainer' class="e-pv-redact-sb-image-container" style="display:none">
                                    <img id='imageView' ref='imgTag' class="e-pv-redact-sb-image-source">
                                </div>
                            </div>
                        </div>
                    </template>
                </ejs-dialog>
            </div>
        </div>


        <div id="action-description">
            <p> The PDF Viewer facilitates the permanent removal of sensitive or confidential data from PDF files. Simplifying the redaction process, Syncfusion’s <a target='_blank' href='https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library'
                aria-label="Navigate to the Redaction Documendation in PDF library">.NET PDF library</a> includes features for seamless implementation. </p>
        </div>

        <div id="description">
            <p> This example showcases the implementation of redaction using rectangle annotation, leveraging the Redaction feature in <a target='_blank' href='https://help.syncfusion.com/file-formats/pdf/working-with-redaction' aria-label="Navigate to the Redaction Documendation by pdf viewer Library">File formats</a>.</p>
            <p>Various types of redactions are demonstrated: </p>
            <ul>
                <li>Displaying text over the redacted area</li>
                <li>Adding an image to the redacted area</li>
                <li>Drawing patterns on the redacted area</li>
                <li>Blacking out the redacted area</li>
                <li>Whitening out the redacted area</li>

            </ul>
            <p> Upon selecting areas on a page or across different pages with different redaction options, users can click the `Redact button`. This action redacts the document and reloads it into the PDF Viewer. The redacted document can then be saved or
                downloaded. </p>
            <p>
                More information on adding annotation programmatically can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
            documentation section</a>.
            </p>
        </div>
    </div>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
           ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
  import { AppBarComponent, ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";
  import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
  import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
  import { DialogComponent } from '@syncfusion/ej2-vue-popups';
  import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
  import { getUniqueID } from '@syncfusion/ej2-base';

  var fileName = "programmatical-annotations.pdf";
  var viewer;
  var toolbar;
  var imageElement;
  var primaryToolbarObj;
  var imageElementContainer;
  var currentPageBox;
  var annotation;
  var redactionCount = 0;


  function updatePageNavigation() {
      if (viewer.currentPageNumber === 1) {
          toolbar.items[0].disabled = true;
          toolbar.items[2].disabled = false;
      }
      else if (viewer.currentPageNumber === viewer.pageCount) {
          toolbar.items[0].disabled = false;
          toolbar.items[2].disabled = true;
      }
      else {
          toolbar.items[0].disabled = false;
          toolbar.items[2].disabled = false;
      }
  };

  function updateRedaction() {
        if (redactionCount <= 0) {
            primaryToolbarObj.items[8].disabled = true;
        }
        else {
            primaryToolbarObj.items[8].disabled = false;
        }

  };

  function readFile(args) {
        // tslint:disable-next-line
        let upoadedFiles = args.target.files;
        if (args.target.files[0] !== null) {
            let uploadedFile = upoadedFiles[0];
            fileName = uploadedFile.name;
            if (uploadedFile) {
                let reader = new FileReader();
                reader.readAsDataURL(uploadedFile);
                // tslint:disable-next-line
                reader.onload = function (e) {
                    let uploadedFileUrl = e.currentTarget.result;
                    viewer.load(uploadedFileUrl, null);
                    viewer.fileName = fileName;
                    viewer.downloadFileName = fileName;
                };
            }
        }
    };

  export default {
    name: 'App',

    components: {
      "ejs-pdfviewer": PdfViewerComponent,
      "ejs-appbar": AppBarComponent,
      "ejs-button": ButtonComponent,
      'ejs-toolbar': ToolbarComponent,
      'e-item': ItemDirective,
      'e-items': ItemsDirective,
      'ejs-combobox': ComboBoxComponent,
      "ejs-dialog": DialogComponent,
      "ejs-uploader": UploaderComponent
    },

    data() {
      return {
        serviceUrl: 'https://ej2services.syncfusion.com/vue/development/api/pdfviewer',
        documentPath: "https://cdn.syncfusion.com/content/pdf/programmatical-annotations.pdf",
        zoomList: ['10%', '25%', '50%', '75%', '100%', '200%', '400%'],
        enableToolbar: false,
        enableNavigationToolbar: false,
        enableAnnotationToolbar:false,
        enableCommentPanel:false,
        proxy: this,
        animationSettings:  { effect: 'None' },
        ShowBtn: true,
        dialogVisible: false,
        autoUpload: false,
        target: '#e-pv-redact-sb-panel',
        path: {
            saveUrl:
                'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl:
                'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        },
        extentions: '.png, .jpg, .jpeg',
        imageSrc: "",
        customStampSource: null,
        dlgButtons: [{ click: this.dialogObjClose, buttonModel: { isPrimary:'true', content: 'Cancel' } }]
      };
    },
    provide: {
      PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                   Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer ]
    },
    methods: {
        documentLoad: function (args) {
          viewer = this.$refs.pdfviewer.ej2Instances;
          toolbar = this.$refs.secondaryToolbar.ej2Instances;
          primaryToolbarObj = this.$refs.primaryToolbar.ej2Instances;
          document.getElementById('documentUpload').addEventListener('change', readFile, false);
          currentPageBox = document.getElementById('current-page');
          currentPageBox.textContent = '1 ';
          document.getElementById('total-page').innerHTML = `/ ${viewer.pageCount}`;
          updatePageNavigation();
          updateRedaction();
        },
        downloadClicked: function (args) {
          viewer.fileName = fileName;
          viewer.downloadFileName = fileName;
          viewer.serverActionSettings.download = "Redaction";
          viewer.download();
          viewer.serverActionSettings.download = "Download";
        },
        redaction: function (args) {
            viewer.serverActionSettings.download = "Redaction";
            viewer.saveAsBlob().then(function (value) {
                var data = value;
                var reader = new FileReader();
                reader.readAsDataURL(data);
                reader.onload = (e) => {
                    var base64String = e.target?.result.toString();
                    viewer.load(base64String, null);
                };
            });
            viewer.fileName = fileName;
            redactionCount = 0;
            viewer.serverActionSettings.download = "Download";
        },
        openClicked: function (args) {
            document.getElementById('documentUpload').click();
        },
        annotationAdd: function (args) {
            var pdfAnnotationList;
            pdfAnnotationList = viewer.annotationCollection;
            var selectedAnnotationIndex = pdfAnnotationList.findIndex(item => item.annotationId == args.annotationId);
            if (selectedAnnotationIndex != -1) {
                annotation = pdfAnnotationList[selectedAnnotationIndex];
            }
            if (annotation.author == "Redaction" || annotation.customStampName == "Image" || annotation.author == "Pattern" || annotation.author == "Text") {
                redactionCount = redactionCount + 1;
                updateRedaction();
            }
        },
        annotationRemove: function (args) {
            if (annotation.author == "Redaction" || annotation.customStampName == "Image" || annotation.author == "Pattern" || annotation.author == "Text") {
                redactionCount = redactionCount - 1;
                updateRedaction();
            }
        },
        addText: function (args) {
            viewer.rectangleSettings = {
                fillColor: '#a3a2a0',
                strokeColor: '#a3a2a0',
                author: 'Text'
            }
            viewer.annotation.setAnnotationMode('Rectangle');
        },
        addPattern: function (args) {
            viewer.rectangleSettings = {
                fillColor: '#dedfe0',
                strokeColor: '#dedfe0',
                author: 'Pattern'
            }
            viewer.annotation.setAnnotationMode('Rectangle');
        },
        addBlackout: function (args) {
            viewer.rectangleSettings = {
                fillColor: '#000000',
                strokeColor: '#000000',
                author: 'Redaction'
            }
            viewer.annotation.setAnnotationMode('Rectangle');
        },
        addWhiteout: function (args) {
            viewer.rectangleSettings = {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
                author: 'Redaction'
            }
            viewer.annotation.setAnnotationMode('Rectangle');
        },
        zoomValueChange: function (args) {
            let zoom = args.value;
            let previousZoom = args.previousItemData.value;
            if (zoom !== null || previousZoom !== null) {
                let zoomchange = parseInt(zoom.replace("%", ""), 10);
                viewer.magnificationModule.zoomTo(zoomchange);
            }
        },
        pageChange: function (args) {
            currentPageBox = document.getElementById('current-page');
            currentPageBox.textContent = viewer.currentPageNumber.toString() + ' ';
            updatePageNavigation();
        },
        nextClicked: function (args) {
            viewer.navigation.goToNextPage();
        },
        previousClicked: function (args) {
            viewer.navigation.goToPreviousPage();
        },
        dialogObjClose: function() {
          this.$refs.dialogObj.hide();
        },    
        imgClick: function() {
          this.dialogVisible = true;
          this.$refs.dialogObj.show();
        },
        openDocumentClicked: function(args) {
          const textSearchToolbarElement = document.getElementById('textSearchToolbar');
          if (textSearchToolbarElement !== null && textSearchToolbarElement.style.display === 'block') {
              textSearchToolbarElement.style.display = 'none';
          }
          document.getElementById('fileUpload').click();
        },
        handleImageClick() {
          this.customStampSource = this.imageSrc;
          this.dialogVisible = false;
          this.addImage();
        },
        onFileChange(event) {
          const file = event.file[0].rawFile;
          imageElement = this.$refs.imgTag;
          imageElementContainer = this.$refs.imgContainer;
          const reader = new FileReader();
          reader.onload = (e) => {
            const base64String = e.target.result;
            this.imageSrc = base64String;
            this.customStampSource = this.imageSrc;
            imageElement.src = this.imageSrc;
            imageElementContainer.className = 'image-container e-pv-redact-sb-image-container-selected';
            imageElementContainer.style.display = 'block';
            imageElement.addEventListener('click', this.handleImageClick);
          };
          reader.readAsDataURL(file);
        },
        addImage() {
          viewer = this.$refs.pdfviewer.ej2Instances;
          viewer.stampSettings.author = "Image";
          viewer.customStampSettings = {
            width: 200,
            author: 'Image',
            height: 125,
            isAddToMenu: false,
            enableCustomStamp: false,
          };
          viewer.customStamp = [
            {
              customStampName: 'Image',
              customStampImageSource: this.customStampSource,
            },
          ];
        },
    },
  }

</script>

<style>
#e-pv-redact-sb-flexContainer {
    display: flex;
    justify-content: flex-end;
}

#e-pv-redact-sb-panel.control-section .e-dlg-overlay
{
    background: none;
    backdrop-filter: blur(2px) !important;
}

/*new*/
#e-pv-redact-sb-panel.control-section .e-appbar {
    height: 36px;
    font-size: 14px !important;
}
#e-pv-redact-sb-toolbar.e-toolbar .e-toolbar-item .e-tbar-btn.e-tbtn-txt .e-icons.e-btn-icon
{
    padding: 4px !important;
}
#e-pv-redact-sb-toolbar.e-toolbar .e-toolbar-item .e-tbar-btn {
    flex-direction: column;
}
#e-pv-redact-sb-toolbar.e-toolbar .e-toolbar-item .e-tbar-btn .e-image {
    height: auto !important;
}    
#e-pv-redact-sb-toolbar.e-toolbar .e-toolbar-item .e-tbar-btn .e-icons.e-btn-icon 
{
    font-size: 18px;
}
#e-pv-redact-sb-toolbar
{
    height: 72px !important;
}
#e-pv-redact-sb-toolbar .e-toolbar-items
{
    gap: 5px;
}

.e-pv-redact-sb-secondary-toolbar .e-toolbar-item.page-count.e-template {
    min-width: 0px !important;
}

#e-pv-redact-sb-toolbar .e-toolbar-item.e-separator
{
    height: 48px !important;
}
#e-pv-redact-sb-toolbar , #e-pv-redact-sb-toolbar .e-toolbar , .e-pv-redact-sb-secondary-toolbar .e-toolbar
{
    border-left-width: 1px !important;
    border-right-width: 1px !important;
}

#e-pv-redact-sb-toolbar .e-toolbar , .e-pv-redact-sb-secondary-toolbar .e-toolbar
{
    border-top-width: 1px !important;
}

#e-pv-redact-sb-panel.control-section .e-input-group
{
    border:none !important;
} 
.e-pv-redact-sb-black-out-container .black-out {
    background-color: black;
    width: 18px !important;
    height: 18px !important;
    border: 1px solid white;
    border-radius: 3px;
    margin:4px !important;
}
.e-pv-redact-sb-white-out-container .white-out {
    background-color: white;
    width: 18px !important;
    height: 18px !important;
    border: 1px solid black;
    border-radius: 3px;
    margin:4px !important;
}
.e-bigger .e-pv-redact-sb-black-out-container .black-out,
    .e-bigger .e-pv-redact-sb-white-out-container .white-out {
        position: relative;
        top: -4px;
}
.e-bigger #e-pv-redact-sb-toolbar.e-toolbar .e-toolbar-item.e-pv-redact-sb-black-out-container .e-tbar-btn.e-btn,
    .e-bigger #e-pv-toolbar.e-toolbar .e-toolbar-item.e-pv-redact-sb-white-out-container .e-tbar-btn.e-btn {
        padding-top : 5px !important;
}
.e-bigger .e-pv-redact-sb-black-out-container .e-tbar-btn .e-tbar-btn-text,
     .e-bigger .e-pv-redact-sb-white-out-container .e-tbar-btn .e-tbar-btn-text{
         padding: 2px 4px 7px 4px !important;
}
/*upload image*/
#e-pv-redact-sb-dialog.e-dialog #e-pv-redact-sb-defaultfileupload #e-pv-redact-sb-defaultfileupload .e-upload-files {
        border: none !important;
}
#e-pv-redact-sb-panel.control-section #file-uploader
{
    display: flex;
    border: 1px dashed #c8c6c4;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: 6px;
}
#e-pv-redact-sb-dialog.e-dialog .e-dlg-header-content
{
    border-bottom:1px solid #C4C7C5 !important;
    padding: 15px !important;
}

#e-pv-redact-sb-dialog.e-dialog .e-footer-content
{
    border-top:1px solid #C4C7C5 !important;
    padding: 10px !important;
}

#e-pv-redact-sb-dialog.e-dialog .e-dlg-header-content+.e-dlg-content
{
    padding: 20px !important;
}

#e-pv-redact-sb-panel.control-section .e-file-select-wrap
{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#e-pv-redact-sb-dialog.e-dialog .e-footer-content .e-btn
{
    background: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    box-shadow: none;
    color: #242424;
}

#e-pv-redact-sb-defaultfileupload .e-upload-file-list {
    display: none;
}
#e-pv-redact-sb-defaultfileupload .e-upload-files {
    border: none !important;
}
.e-pv-redact-sb-image-source {
    width: 70px;
    height: 70px;
}
.e-pv-redact-sb-image-container {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    gap: 5px;
    border-radius: 4px;
}
.e-pv-redact-sb-image-list {
    display: flex;
    justify-content: center;
    padding: 24px 15px;
    gap: 35px;
}
.e-pv-redact-sb-image-container-selected {
    border: 1px solid #757575 !important;
}
.e-pv-redact-sb-image-container:hover {
    border: 1px solid #757575;
}
#e-pv-redact-sb-drop-area-wrap {
    display: flex;
    border: 1px dashed #c8c6c4;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: 6px;
}
#e-pv-redact-sb-panel.control-section #uploadicon {    
    cursor: pointer;
    top: 5px;
    left: 20px;
    position: relative;
}
#e-pv-redact-sb-defaultfileupload .e-upload {
    border: none;
    margin-top: 10px;
    width: 100%;
    height:100%;
}

#e-pv-redact-sb-dialog
{
    max-height: 600px !important;
}
</style>