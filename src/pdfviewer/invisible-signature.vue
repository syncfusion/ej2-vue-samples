<template>
  <div>
    <div class="control-section">
      <ejs-toolbar id="customToolbar_invibleSignature" ref="toolbar">
        <e-items>
          <e-item
            prefixIcon="e-icons e-folder-open"
            align="Left"
            tooltipText="Open"
            :click="openClicked"
          ></e-item>
          <e-item
            text="Complete Signing"
            width="150px"
            id="pdfviewer_sign"
            tooltipText="Finish Signing"
            disabled="true"
            align="Right"
            :click="signDocument"
          ></e-item>
          <e-item
            prefixIcon="e-icons e-download"
            tooltipText="Download"
            disabled="true"
            align="Right"
            :click="downloadClicked"
          ></e-item>
        </e-items>
      </ejs-toolbar>
      <ejs-message
        id="msg_success"
        ref="msgsuccess"
        :visible="false"
        severity="Success"
      ></ejs-message>
      <ejs-message
        id="msg_warning"
        ref="msgwarning"
        :visible="false"
        severity="Warning"
      ></ejs-message>
      <ejs-message
        id="msg_error"
        ref="msgerror"
        :visible="false"
        severity="Error"
      ></ejs-message>
      <ejs-pdfviewer
        id="pdfviewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        :documentLoad="documentLoad"
        :addSignature="addSignature"
        :enableThumbnail="enableThumbnail"
        :enableToolbar="enableToolbar"
        :enableTextSelection="enableTextSelection"
        :enableNavigationToolbar="enableNavigationToolbar"
        :enableAnnotationToolbar="enableAnnotationToolbar"
      ></ejs-pdfviewer>
      <input
        type="file"
        id="fileUpload"
        accept=".pdf"
        style="display: block; visibility: hidden; width: 0; height: 0"
      />
    </div>

    <div id="action-description">
      <p>This sample demonstrates how to digitally sign a PDF document from code behind using Syncfusion's PDF Viewer and
          PDF Library</p>
    </div>

    <div id="description">
      <p>
          This sample operates correctly when a signature field is present in the PDF document. If all signature fields
          are signed, the "Finish Signing" button becomes enabled. Clicking this button adds a digital signature
          certificate programmatically and reloads the digitally signed document into the viewer.
      </p>

      <br />

      <p>The below are the messages shown in the respective scenarios:</p>

      <br />

      <p>1. The document has been digitally signed, but it has been modified since it was signed and at least one
          signature is invalid.</p>
      <ul>
          <li>This message appears if the digitally signed document is edited after reloading.</li>
      </ul>

      <p>2. The document has been digitally signed and at least one signature has a problem.</p>

      <ul>
          <li>This message is shown if the digital signature is not registered on the machine and is not in the trusted
              list. Adding the certificate to the trusted list is necessary.</li>
      </ul>

      <p>3. The document has been digitally signed and all the signatures are valid.</p>

      <ul>
          <li>This message indicates that the document is digitally signed without any issues.</li>
      </ul>

      <p>
          More information on the PDF Viewer instantiation can be found on this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
              documentation section </a>.
      </p>
    </div>

  </div>
</template>
<style scoped>
#pdfviewer {
  height: 640px;
}
#customToolbar_invibleSignature {
        z-index: 900;
}
</style>
<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from "@syncfusion/ej2-vue-pdfviewer";
import {
  ItemDirective,
  ItemsDirective,
  ToolbarComponent,
} from "@syncfusion/ej2-vue-navigations";
import { MessageComponent } from "@syncfusion/ej2-vue-notifications";
var toolbarObj;
var viewer;
var msgWarning;
var msgError;
var msgSuccess;
var documentData;
// Specifies whether the document has a digital signature or not.
var hasDigitalSignature = false;
var openDocument;
var fileName;
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
}

export default {
  components: {
    "ejs-pdfviewer": PdfViewerComponent,
    "ejs-toolbar": ToolbarComponent,
    "e-items": ItemsDirective,
    "e-item": ItemDirective,
    "ejs-message": MessageComponent,
  },
  data: function () {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/InvisibleDigitalSignature.pdf",
      enableToolbar: false,
      enableNavigationToolbar: false,
      enableThumbnail: false,
      enableAnnotationToolbar: false,
      enableTextSelection: false,
      resourceUrl: "https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    downloadClicked: function (args) {
      viewer.download();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      toolbarObj = this.$refs.toolbar.ej2Instances;
      msgWarning = this.$refs.msgwarning.ej2Instances;
      msgError = this.$refs.msgerror.ej2Instances;
      msgSuccess = this.$refs.msgsuccess.ej2Instances;
      fileName = args.documentName;
      var postData = {
        documentData: documentData,
      };
      var options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      };
      var apiUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer/ValidateSignature";
      fetch(apiUrl, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (body) {
          if (body.successVisible || body.warningVisible || body.errorVisible)
            toolbarObj.items[1].disabled = true;
          if (!body.downloadVisibility) toolbarObj.items[2].disabled = false;
          if (body.successVisible) {
            setTimeout(function () {
              msgSuccess.content = body.message;
              msgSuccess.visible = true;
            }, 1000);
            setTimeout(function () {
              msgSuccess.visible = false;
            }, 5000);
          }
          if (body.warningVisible) {
            msgWarning.content = body.message;
            msgWarning.visible = true;
          }
          if (body.errorVisible) {
            msgError.content = body.message;
            msgError.visible = true;
          }
        });
      document
        .getElementById("fileUpload")
        .addEventListener("change", readFile, false);
    },
    openClicked: function (args) {
      document.getElementById("fileUpload").click();
    },
    addSignature: function (args) {
      var field = viewer.retrieveFormFields();
      var signatureFieldCount = 0;
      var signaturesCount = 0;
      for (var i = 0; i < field.Count; i++) {
        if (field[i].Type.ToString() == "SignatureField") {
          signatureFieldCount++;
        }
        if (
          field[i].Value != "" &&
          field[i].Value != null &&
          field[i].Type.ToString() == "SignatureField"
        ) {
          signaturesCount++;
        }
      }
      if (signatureFieldCount == signaturesCount) {
        if (!hasDigitalSignature) {
          toolbarObj.items[1].disabled = false;
        }
      }
    },
    signDocument: function (args) {
      const url = "https://services.syncfusion.com/vue/production/api/pdfviewer/AddSignature";
      viewer.saveAsBlob().then(function (value) {
          const reader = new FileReader();
          reader.readAsDataURL(value);
          reader.onload = function (e) {
              const base64String = e.target ? e.target.result : null;
              const xhr = new XMLHttpRequest();
              xhr.open('POST', url, true);
              xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
              const requestData = JSON.stringify({ base64String: base64String });
              xhr.onload = function () {
                  if (xhr.status === 200) {
                    documentData = xhr.responseText;
                    viewer.load(xhr.responseText, null);
                    toolbarObj.items[1].disabled = true;
                    toolbarObj.items[2].disabled = false;
                    viewer.fileName = fileName;
                    viewer.downloadFileName = fileName;
                  }
                  else {
                    console.error('Error in AddSignature API:', xhr.statusText);
                  }
              };
              xhr.onerror = function () {
                console.error('Error reading Blob as Base64.', xhr.statusText);
              };
              xhr.send(requestData);
          };
        }).catch(function (error) {
            console.error('Error saving Blob:', error);
        });
    },
  },
};
</script>