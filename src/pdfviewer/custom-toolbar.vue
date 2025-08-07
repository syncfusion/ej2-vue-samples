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
        <ejs-toolbar id="customToolbar" ref="toolbar">
            <e-items>
                <e-item prefixIcon='e-icons-new e-folder' tooltipText='Open' :click="openClicked"></e-item>
                <e-item prefixIcon='e-icons-new e-save' tooltipText='Save' :click="saveClicked"></e-item>
                <e-item prefixIcon='e-icons-new e-chevron-left' id="previousPage" tooltipText='Previous Page'
                    align='Center' :click="previousClicked"></e-item>
                <e-item prefixIcon='e-icons-new e-chevron-right' id="nextPage" tooltipText='Next Page' align='Center'
                    :click="nextClicked"></e-item>
                <e-item :template="'pageNoTemplate'" tooltipText='Page Number' align='Center'>
                    <template v-slot:pageNoTemplate>
                        <div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" />
                        </div>
                    </template>
                </e-item>
                <e-item :template="'pageTextTemplate'" tooltipText='Page Number' align='Center'>
                    <template v-slot:pageTextTemplate>
                        <div class="" style="margin:0px 6px"><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>
                    </template>
                </e-item>
                <e-item type="Separator"  tooltipText="Separator" align='Center'></e-item>
                <e-item prefixIcon="e-icons-new e-mouse-pointer"   :click='textSelection'  id="text_selection_tool"  tooltipText="Text Selection tool" align='Center'></e-item>
                <e-item prefixIcon="e-icons-new e-pan"  :click='panMode'  id="pan_mode" tooltipText="Pan Mode" align='Center'></e-item>
                <e-item type="Separator"  tooltipText="Separator" align='Center'></e-item>
                <e-item prefixIcon="e-icons-new e-annotation-edit"  :click='openEditAnnotation' tooltipText="Edit Annotation" id="edit_annotation" align='Center'></e-item>
                <e-item type="Separator"  tooltipText="Separator" align='Center'></e-item>
                <e-item prefixIcon="e-icons-new e-split-vertical"  :click='addEditFormFields' tooltipText="Add and Edit Form Fields" id="add_form_field" align='Center'></e-item>
                <e-item prefixIcon="e-icons-new e-search"  :click='findText' tooltipText="Find Text" id="find_text" align='Right'></e-item>
                <e-item prefixIcon='e-icons-new e-print' tooltipText='Print' align='Right' :click="printClicked"></e-item>
            </e-items>
        </ejs-toolbar>
        <ejs-toolbar id="magnificationToolbar">
            <e-items>
                <e-item prefixIcon='e-pv-fit-page-icon' id="fitPage" tooltipText='Fit to page'
                    :click="pageFitClicked"></e-item>
                <e-item prefixIcon='e-icons-new e-circle-add' id="zoomIn" tooltipText='Zoom in' :click="zoomInClicked"></e-item>
                <e-item prefixIcon='e-icons-new e-circle-remove' id="zoomOut" tooltipText='Zoom out'
                    :click="zoomOutClicked"></e-item>
            </e-items>
        </ejs-toolbar>
          <div id="textSearchToolbar" v-show="searchToolbarVisible">
    <div class="e-pv-search-bar" :style="{ right: '0px', zIndex: 1111 }" id="container_search_box">
      <div class="e-pv-search-bar-elements" id="container_search_box_elements">
        <div class="e-input-group e-pv-search-input" id="container_search_input_container">
          <input class="e-input" id="container_search_input" type="text" placeholder="Find in document" @keypress="searchInputKeypressed" @input="inputChange" />
          <span class="e-input-group-icon e-input-search-group-icon e-icons e-search" id="container_search_box-icon" @click="searchClickHandler"></span>
        </div>
           <button class="e-btn e-icon-btn e-pv-search-btn e-icons e-chevron-left" id="container_prev_occurrence" type="button" :disabled="prevSearchDisabled" aria-label="Previous Search text" @click="previousTextSearch">
           <span class="e-pv-icon-search e-pv-prev-search-icon" id="container_prev_occurrenceIcon"></span>
         </button>
        <button class="e-btn e-icon-btn e-pv-search-btn e-icons e-chevron-right" id="container_next_occurrence" type="button" :disabled="nextSearchDisabled" aria-label="Next Search text" @click="nextTextSearch">
          <span class="e-pv-icon-search e-pv-next-search-icon" id="container_next_occurrenceIcon"></span>
        </button>
      </div>
      <div class="e-pv-match-case-container" id="container_match_case_container">
        <div class="e-checkbox-wrapper e-wrapper e-pv-match-case">
          <label for="container_match_case">
            <input id="container_match_case" type="checkbox" class="e-control e-checkbox e-lib" @click="checkBoxChanged" v-model="matchCase" />
            <span class="e-ripple-container" data-ripple="true"></span>
            <span id="checkboxSpan" class="e-icons-new e-frame"></span>
            <span class="e-label">Match case</span>
          </label>
        </div>
      </div>
    </div>
  </div>
       <div id="editAnnotationToolbar" style="display:none">
    <ejs-toolbar id="toolbar">
      <e-items>
        <e-item prefixIcon="e-icons-new e-highlight-color" :click='highlight' tooltipText="Highlight" id="highlight" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-underline" :click='underLine' tooltipText="Underline" id="underline" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-strikethrough" :click='strikeThrough' tooltipText="Strikethrough" id="strikethrough" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-squiggly" :click='squiggly' tooltipText="Squiggly" id="squiggly" align="Center"></e-item>
        <e-item type="Separator" tooltipText="separator" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-line" :click='addLine' tooltipText="Add Line" id="line" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-arrow-right-up" :click='addArrow' tooltipText="Add Arrow" id="arrow" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-rectangle" :click='addRectangle' tooltipText="Add Rectangle" id="rectangle" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-circle" :click='addCircle' tooltipText="Add Circle" id="circle" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-pentagon" :click='addPoligon' tooltipText="Add Polygon" id="polygon" align="Center"></e-item>
        <e-item type="Separator" tooltipText="separator" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-length" :click='distance'  tooltipText="Calibrate Distance" id="calibrate_distance" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-perimeter" :click='perimeter' tooltipText="Calibrate Perimeter" id="calibrate_perimeter" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-area" :click='area' tooltipText="Calibrate Area" id="calibrate_area" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-radius" :click='radius' tooltipText="Calibrate Radius" id="calibrate_radius" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-volume" :click='volume' tooltipText="Calibrate Volume" id="calibrate_volume" align="Center"></e-item>
        <e-item type="Separator" tooltipText="separator" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-text-annotation" :click='freeText'  tooltipText="Free Text" id="freeText" align="Center"></e-item>
        <e-item type="Separator" tooltipText="separator" align="Center"></e-item>
        <e-item type="Separator" tooltipText="separator" align="Center"></e-item>
        <e-item :template='menuTemplate' prefixIcon ='e-icons e-stamp' tooltipText='Add Stamp' id="stamp" align="Center"></e-item>
        <e-item type="Separator" tooltipText="separator" align="Center"></e-item>
        <e-item :template='signTemplate' prefixIcon ='e-icons e-signature' tooltipText='Add Signature' id="signature" align="Center"></e-item>
        <e-item type="Separator" tooltipText="separator" align="Center"></e-item>
        <e-item prefixIcon="e-icons-new e-style"  :click='ink' id="ink" align="Center"></e-item>
      </e-items>
     </ejs-toolbar>
    </div>
    <input type="file" id="fileUpload" accept=".pdf" style="display:block;visibility:hidden;width:0;height:0;" />
    <div id="formFieldToolbar" style="display:none">
    <ejs-toolbar id="form-toolbar">
      <e-items>
        <e-item id="textbox" prefixIcon="e-icons-new e-text-form" :click='textBox' tooltipText="Textbox" align="Center"></e-item>
        <e-item id="password" prefixIcon="e-icons-new e-password"  :click='passWord' tooltipText="Password" align="Center"></e-item>
        <e-item id="checkbox" prefixIcon="e-icons-new e-check-box" :click='checkBox' tooltipText="Checkbok" align="Center"></e-item>
        <e-item id="radio_button" prefixIcon="e-icons-new e-radio-button" :click='radioButton' tooltipText="Radio Button" align="Center"></e-item>
        <e-item id="drop_down" prefixIcon="e-icons-new e-drop-down" :click='dropDown' tooltipText="Drop Down" align="Center"></e-item>
        <e-item id="list_box" prefixIcon="e-icons-new e-list-unordered" :click='listBox'  tooltipText="List Box" align="Center"></e-item>
        <e-item :template='formSignTemplate' prefixIcon ='e-icons e-signature' tooltipText='Add Signature' id="formSignature" align="Center"></e-item>
        <e-item id="separator" type="Separator" tooltipText="separator" align="Center"></e-item>
      </e-items>
    </ejs-toolbar>
  </div>
        <ejs-pdfviewer 
            id="pdfviewer" 
            ref="pdfviewer" 
            :pageChange="pageChange" 
            :documentLoad="documentLoad" 
            :documentPath="documentPath" 
            :enableToolbar="enableToolbar"
            :enableAnnotationToolbar="enableAnnotationToolbar"
            :enableCommentPanel="enableCommentPanel" 
            :enableNavigationToolbar="enableNavigationToolbar"
            :resourceUrl="resourceUrl">
        </ejs-pdfviewer>
    </div>
        <div id="action-description">
            <p>This example illustrates the process of crafting a customized toolbar within the PDF Viewer, allowing you to incorporate specific tools tailored to your needs.</p>
        </div>

        <div id="description">   
            <p>This sample demonstrate how to perform the PDF Viewer core functionalities using a custom toolbar.
               In this example, you can see PDF Viewer control API in action to perform the functionalities.</p>
            <p>
            <ul>
                <li>Load document - <code>viewer.load(fileName, password)</code></li>
                <li>Save - <code>viewer.download()</code></li>
                <li>Go to Previous Page - <code>viewer.navigation.goToPreviousPage()</code></li>
                <li>Go to Next Page - <code>viewer.navigation.goToNextPage()</code></li>
                <li>Go to Page - <code>viewer.navigation.goToPage(pageindex)</code></li>
                <li>TextSelection  - <code>textSelection()</code></li>
                <li>Pan  - <code>panMode()</code></li>
                <li>Annotation Edit - <code>openEditAnntation()</code></li>
                <li>FormFields Edit - <code>addEditFormFields()</code></li>
                <li>Search Text - <code>viewer.textSearch.searchText(searchText,isMatchCase)</code></li>
                <li>Search Next - <code>viewer.textSearch.searchNext()</code></li>
                <li>Search Previous - <code>viewer.textSearch.searchPrevious()</code></li>
                <li>Cancel Search Text - <code>viewer.textSearch.searchPrevious()</code></li>
                <li>Print - <code>viewer.print.print()</code></li>
                <li>Fit To Page - <code>viewer.magnification.fitToPage()</code></li>
                <li>Zoom In - <code>viewer.magnification.zoomIn()</code></li>
                <li>Zoom Out - <code>viewer.magnification.zoomOut()</code></li>               
          </ul>
                More information on the PDF Viewer instantiation can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
                    documentation section
                </a>.
            </p>
        </div>
    </div>
</template>

<style>
/* custom code start*/
 
 @font-face {
   font-family: "pV-icons";
   font-style: normal;
   font-weight: normal;
   src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
 } 

#pdfviewer {
    height: 640px;  
}

#magnificationToolbar {
    background: transparent;
    height: auto;
    min-height: 56px;
    width: auto;
    border: none;
    position: absolute;
    z-index: 900;
    top: calc(100% - 140px);
    left: calc(100% - 150px);
    transform: rotate(90deg);
}

div#magnificationToolbar.e-toolbar .e-toolbar-items {
    background: transparent;
    padding: 2px 3px 2px 2px;
}

#magnificationToolbar.e-toolbar .e-tbar-btn {
    border-radius: 50%;
    min-height: 30px;
    min-width: 30px;
    border: 1px solid #c8c8c8;
}

#customToolbar {
    z-index: 900;
    top: 0px;
}

.e-bookmark-popup {
    height: 300px;
    max-width: 300px;
}

.e-text-search-popup {
    height: 104px;
    max-width: 348px;
}

.e-custom-search-input {
    width: 234px;
}

.e-text-search-popup .e-footer-content,
.e-bookmark-popup .e-footer-content {
    padding: 0;
    height: 0;
}

.search-button,
.search-button:disabled,
.search-button:focus,
.search-button:hover {
    background: transparent;
    box-shadow: none;
}

#popup .e-dlg-content {
    padding-left: 0;
    padding-bottom: 0;
}

.e-pv-bookmarks {
    min-width: 234px;
}

.e-pv-current-page-number {
    width: 46px;
    height: 28px;
    text-align: center;
}

.material .e-pv-current-page-number {
    border-width: 1px;
}

.e-btn-icon.e-icons-new.e-circle-remove.e-icons-new {
    transform: rotate(90deg);
}

.flex-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.e-pv-fit-page-icon::before {
    content: '\e91b';
    font-family: "pV-icons";
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
import { createApp } from 'vue';
import {
  PdfViewerComponent,
  Toolbar,
  Annotation,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from "@syncfusion/ej2-vue-pdfviewer";
import {
  ItemDirective,
  ItemsDirective,
  ToolbarComponent,
  MenuComponent,
} from "@syncfusion/ej2-vue-navigations";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
var toolbar;
var viewer;
var fileName;
var currentPageBox;

function updatePageNavigation() {
  if (viewer.currentPageNumber === 1) {
    toolbar.enableItems(document.getElementById("previousPage"), false);
    toolbar.enableItems(document.getElementById("nextPage"), true);
  } else if (viewer.currentPageNumber === viewer.pageCount) {
    toolbar.enableItems(document.getElementById("previousPage"), true);
    toolbar.enableItems(document.getElementById("nextPage"), false);
  } else {
    toolbar.enableItems(document.getElementById("previousPage"), true);
    toolbar.enableItems(document.getElementById("nextPage"), true);
  }
}

function onCurrentPageBoxKeypress(event) {
  if (
    (event.which < 48 || event.which > 57) &&
    event.which !== 8 &&
    event.which !== 13
  ) {
    event.preventDefault();
    return false;
  } else {
    var currentPageNumber = parseInt(currentPageBox.value);
    if (event.which === 13) {
      if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
        viewer.navigation.goToPage(currentPageNumber);
      } else {
        currentPageBox.value = viewer.currentPageNumber.toString();
      }
    }
    return true;
  }
}

function onCurrentPageBoxClicked() {
  currentPageBox.select();
}

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
        viewer.documentPath = uploadedFileUrl;
        viewer.fileName = fileName;
        viewer.downloadFileName = fileName;
      };
    }
  }
}
var app = createApp();
var menutemplateVue = app.component("menuTemp", {
  components: {
    'ejs-menu': MenuComponent
  },
  template: '<ejs-menu :items="menuItems" showItemOnClick = "true" :select="select"></ejs-menu>',
  data() {
    return {
      data: {},
      menuItems: [
          {
              iconCss: 'e-icons e-stamp',
              items: [
                {
                    text: 'Dynamic',
                    items: [
                        { text: 'Revised', id: 'Dynamic' },
                        { text: 'Reviewed', id: 'Dynamic' },
                        { text: 'Received', id: 'Dynamic' },
                        { text: 'Confidential', id: 'Dynamic' },
                        { text: 'Approved', id: 'Dynamic' },
                        { text: 'Not Approved', id: 'Dynamic' },
                    ],
                },
                {
                    text: 'Sign Here',
                    items: [
                        { text: 'Witness' , id: 'Sign Here' }, 
                        { text: 'Initial Here', id: 'Sign Here' }, 
                        { text: 'Sign Here', id: 'Sign Here' }, 
                        { text: 'Accepted', id: 'Sign Here'}, 
                        { text: 'Rejected', id: 'Sign Here' }],
                },
                {
                    text: 'Standard Business',
                    items: [
                        { text: 'Approved' , id: 'Standard Business' }, 
                        { text: 'Not Approved', id: 'Standard Business' }, 
                        { text: 'Draft', id: 'Standard Business' }, 
                        { text: 'Final', id: 'Standard Business'}, 
                        { text: 'Completed', id: 'Standard Business' },
                        { text: 'Confidential' , id: 'Standard Business' }, 
                        { text: 'For Public Release', id: 'Standard Business' }, 
                        { text: 'Not For Public Release', id: 'Standard Business' }, 
                        { text: 'For Comment', id: 'Standard Business'}, 
                        { text: 'Void', id: 'Standard Business' },
                        { text: 'Preliminary Results' , id: 'Standard Business' }, 
                        { text: 'Information Only', id: 'Standard Business' }
                    ],
                },
              ],
          },
      ],
    };
  },
  methods:{
    select: function(args) {
      const textSearchToolbarElement =
        document.getElementById("textSearchToolbar");
      if (
        textSearchToolbarElement !== null &&
        textSearchToolbarElement.style.display === "block"
      ) {
        textSearchToolbarElement.style.display = "none";
      }

      const formFieldToolbarElement =
        document.getElementById("formFieldToolbar");
      if (
        formFieldToolbarElement !== null &&
        formFieldToolbarElement.style.display === "block"
      ) {
        formFieldToolbarElement.style.display = "none";
        viewer.designerMode = false;
      }
      
      var stampId = args.element.id;
      var stampText = args.element.innerText;
      if (stampId === 'Dynamic' && stampText != null) {
        if (stampText === 'Revised') {
          viewer.annotation.setAnnotationMode('Stamp', 'Revised');
        } else if (stampText == 'Reviewed') {
          viewer.annotation.setAnnotationMode('Stamp', 'Reviewed');
        } else if (stampText == 'Received') {
          viewer.annotation.setAnnotationMode('Stamp', 'Received');
        } else if (stampText == 'Confidential') {
          viewer.annotation.setAnnotationMode('Stamp', 'Confidential');
        } else if (stampText == 'Approved') {
          viewer.annotation.setAnnotationMode('Stamp', 'Approved');
        } else if (stampText == 'Not Approved') {
          viewer.annotation.setAnnotationMode('Stamp', 'NotApproved');
        }
      }
      if (stampId === 'Sign Here' && stampText != null) {
        if (stampText === 'Witness') {
          viewer.annotation.setAnnotationMode('Stamp', undefined, 'Witness');
        } else if (stampText == 'Initial Here') {
          viewer.annotation.setAnnotationMode('Stamp', undefined, 'InitialHere');
        } else if (stampText == 'Sign Here') {
          viewer.annotation.setAnnotationMode('Stamp', undefined, 'SignHere');
        } else if (stampText == 'Accepted') {
          viewer.annotation.setAnnotationMode('Stamp', undefined, 'Accepted');
        } else if (stampText == 'Rejected') {
          viewer.annotation.setAnnotationMode('Stamp', undefined, 'Rejected');
        }
      }
      if (stampId === 'Standard Business' && stampText != null) {
        if (stampText === 'Approved') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'Approved'
          );
        } else if (stampText == 'Not Approved') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'NotApproved'
          );
        } else if (stampText == 'Draft') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'Draft'
          );
        } else if (stampText == 'Final') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'Final'
          );
        } else if (stampText == 'Completed') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'Completed'
          );
        } else if (stampText == 'Confidential') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'Confidential'
          );
        } else if (stampText == 'For Public Release') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'ForPublicRelease'
          );
        } else if (stampText == 'Not For Public Release') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'NotForPublicRelease'
          );
        } else if (stampText == 'For Comment') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'ForComment'
          );
        } else if (stampText == 'Void') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'Void'
          );
        } else if (stampText == 'Preliminary Results') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'PreliminaryResults'
          );
        } else if (stampText == 'Information Only') {
          viewer.annotation.setAnnotationMode(
            'Stamp',
            undefined,
            undefined,
            'InformationOnly'
          );
        }
      }
    }
  }
});
var app1 = createApp();
var signtemplateVue = app1.component("signTemp", {
  components: {
    'ejs-menu': MenuComponent
  },
  template: '<ejs-menu :items="signItems" showItemOnClick = "true" :select="onSignatureClick"></ejs-menu>',
  data() {
    return {
      signItems: [
        {
         iconCss: 'e-icons e-signature',
         items: [
          { text: 'Add Signature' , id: 'Add Signature' }, 
          { text: 'Add Initial', id: 'Add Initial' } 
         ]
        },
      ]
    };
  },
  methods:{
     onSignatureClick: function(event) {
      const editAnnotationToolbarElement = document.getElementById("editAnnotationToolbar");
      if (editAnnotationToolbarElement?.style.display === "block") {
        if (event.element instanceof HTMLElement) {
          if (event.element.innerText === "Add Signature") {
            viewer.annotationModule.setAnnotationMode("HandWrittenSignature");
          } else if (event.element.innerText === "Add Initial") {
            viewer.annotationModule.setAnnotationMode("Initial");
          }
        }
      }

      const formFieldToolbarElement = document.getElementById("formFieldToolbar");
      if (formFieldToolbarElement?.style.display === "block") {
        if (event.element instanceof HTMLElement) {
          if (event.element.innerText === "Add Signature") {
            viewer.formDesignerModule.setFormFieldMode("SignatureField");
          } else if (event.element.innerText === "Add Initial") {
            viewer.formDesignerModule.setFormFieldMode("InitialField");
          }
        }
      }

      const signatureToolbarElement =
        this.$el.querySelector("#SignatureToolbar");
      if (signatureToolbarElement?.style.display === "block") {
        signatureToolbarElement.style.display = "none";
      }
    },
  },
});
export default {
  components: {
    "ejs-pdfviewer": PdfViewerComponent,
    "ejs-toolbar": ToolbarComponent,
    "e-items": ItemsDirective,
    "e-item": ItemDirective,
    "ejs-switch": SwitchComponent,
    'ejs-menu': MenuComponent
  },
  data: function () {
    return {
      documentPath:
        "https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf",
      resourceUrl:
        "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib",
      enableToolbar: false,
      enableNavigationToolbar: false,
      enableAnnotationToolbar:false,
      enableCommentPanel:false,
      searchToolbarVisible: false,
      searchText: "",
      prevSearchDisabled: true,
      nextSearchDisabled: true,
      matchCase: false,
      prevMatchCase: false,
      isInkEnabled:false,
      searchActive:false,
      menuTemplate: function() {
        return {
          template: menutemplateVue
        }
      },
      signTemplate: function() {
        return {
          template: signtemplateVue
        }
      },
      formSignTemplate: function() {
        return {
          template: signtemplateVue
        }
      },
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Annotation,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    openClicked: function (args) {
      this.disableInkAnnotation();
      document.getElementById("fileUpload").click();

      const textSearchToolbarElement =
        document.getElementById("textSearchToolbar");
      if (
        textSearchToolbarElement !== null &&
        textSearchToolbarElement.style.display === "block"
      ) {
        textSearchToolbarElement.style.display = "none";
      }
    },
    previousClicked: function (args) {
      this.disableInkAnnotation();
      viewer.navigation.goToPreviousPage();
    },
    nextClicked: function (args) {
      this.disableInkAnnotation();
      viewer.navigation.goToNextPage();
    },
    printClicked: function (args) {
      this.disableInkAnnotation();
      viewer.print.print();
    },
    saveClicked: function (args) {
      this.disableInkAnnotation();
      viewer.download();
    },
    pageFitClicked: function (args) {
      viewer.magnification.fitToPage();
    },
    zoomInClicked: function (args) {
     viewer.magnification.zoomIn();
    },
    zoomOutClicked: function (args) {
     viewer.magnification.zoomOut();
    },
    pageChange: function (args) {
      this.disableInkAnnotation();
      currentPageBox = document.getElementById("currentPage");
      currentPageBox.value = viewer.currentPageNumber.toString();
      updatePageNavigation();
    },
    textSelection: function (args) {
      this.disableInkAnnotation();
      viewer.interactionMode = "TextSelection";
      viewer.enableTextSelection = true;
    },
    panMode: function (args) {
      this.disableInkAnnotation();
      viewer.interactionMode = "Pan";
      viewer.enablePanMode = true;
    },
    openEditAnnotation: function (args) {
      this.disableInkAnnotation();
      const editAnnotationToolbarElement = document.getElementById(
        "editAnnotationToolbar"
      );
      if (editAnnotationToolbarElement !== null) {
        if (editAnnotationToolbarElement.style.display === "block") {
          editAnnotationToolbarElement.style.display = "none";
        } else {
          editAnnotationToolbarElement.style.display = "block";
        }
      }

      const textSearchToolbarElement =
        document.getElementById("textSearchToolbar");
      if (
        textSearchToolbarElement !== null &&
        textSearchToolbarElement.style.display === "block"
      ) {
        textSearchToolbarElement.style.display = "none";
      }

      const formFieldToolbarElement =
        document.getElementById("formFieldToolbar");
      if (
        formFieldToolbarElement !== null &&
        formFieldToolbarElement.style.display === "block"
      ) {
        formFieldToolbarElement.style.display = "none";
        viewer.designerMode = false;
      }
    },
    addEditFormFields: function (args) {
      this.disableInkAnnotation();

      const formFieldToolbarElement =
        document.getElementById("formFieldToolbar");
      if (formFieldToolbarElement !== null) {
        if (formFieldToolbarElement.style.display === "block") {
          formFieldToolbarElement.style.display = "none";
          viewer.designerMode = false;
        } else {
          formFieldToolbarElement.style.display = "block";
          viewer.designerMode = true;
        }
      }

      const editAnnotationToolbarElement = document.getElementById(
        "editAnnotationToolbar"
      );
      if (
        editAnnotationToolbarElement !== null &&
        editAnnotationToolbarElement.style.display === "block"
      ) {
        editAnnotationToolbarElement.style.display = "none";
      }

      const textSearchToolbarElement =
        document.getElementById("textSearchToolbar");
      if (
        textSearchToolbarElement !== null &&
        textSearchToolbarElement.style.display === "block"
      ) {
        textSearchToolbarElement.style.display = "none";
      }
    },
    findText: function (args) {
      this.disableInkAnnotation();     
      const textSearchToolbarElement =
        document.getElementById("textSearchToolbar");
      if (textSearchToolbarElement !== null) {
        if (textSearchToolbarElement.style.display === "block") {
          textSearchToolbarElement.style.display = "none";
        } else {
          textSearchToolbarElement.style.display = "block";
        }
      }

      const formFieldToolbarElement =
        document.getElementById("formFieldToolbar");
      if (
        formFieldToolbarElement !== null &&
        formFieldToolbarElement.style.display === "block"
      ) {
        formFieldToolbarElement.style.display = "none";
        viewer.designerMode = false;
      }
    },
    highlight: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Highlight");
    },
    underLine: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Underline");
    },
    strikeThrough: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Strikethrough");
    },
    squiggly: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Squiggly");
    },
    addLine: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Line");
    },
    addArrow: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Arrow");
    },
    addRectangle: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Rectangle");
    },
    addCircle: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Circle");
    },
    addPoligon: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Polygon");
    },
    distance: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Distance");
    },
    perimeter: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Perimeter");
    },
    area: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Area");
    },
    radius: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Radius");
    },
    volume: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("Volume");
    },
    freeText: function (args) {
      this.disableInkAnnotation();
      viewer.annotation.setAnnotationMode("FreeText");
    },
    ink: function (args) {
      if(!this.isInkEnabled)
      {
        viewer.annotation.setAnnotationMode("Ink");
        this.isInkEnabled=true;
      }
      else
      {
        viewer.annotation.setAnnotationMode("none");
        this.isInkEnabled =false;
      }

    },
    textBox: function (args) {
      viewer.formDesignerModule.setFormFieldMode("Textbox");
    },
    passWord: function (args) {
      viewer.formDesignerModule.setFormFieldMode("Password");
    },
    checkBox: function (args) {
      viewer.formDesignerModule.setFormFieldMode("CheckBox");
    },
    radioButton: function (args) {
      viewer.formDesignerModule.setFormFieldMode("RadioButton");
    },
    dropDown: function (args) {
      viewer.formDesignerModule.setFormFieldMode("DropDown");
    },
    listBox: function (args) {
      viewer.formDesignerModule.setFormFieldMode("ListBox");
    },
    searchInputKeypressed: function (event) {
      if (event.key === "Enter") {
        this.initiateTextSearch();
      }
    },
    checkSearchActive: function () {
      if(!this.searchActive) {
        viewer.textSearchModule.clearAllOccurrences();
      }
    },
    disableInkAnnotation: function()
    {
      if(this.isInkEnabled)
      {
        viewer.annotation.setAnnotationMode("none");
        this.isInkEnabled =false;
      }
    },
    initiateTextSearch: function () {
     const textsearchPrevElement = document.getElementById("container_prev_occurrence");
     const textsearchNextElement = document.getElementById("container_next_occurrence");
     const textsearchElement = document.getElementById("container_search_box-icon");
     if (textsearchPrevElement && textsearchNextElement && textsearchElement) {
       textsearchElement.classList.add('e-close');
       textsearchElement.classList.remove('e-search');
       textsearchPrevElement.disabled = false;
       textsearchNextElement.disabled = false;
       if (this.searchText !== (document.getElementById('container_search_input').value) || this.prevMatchCase !== this.matchCase) {
         textsearchPrevElement.addEventListener("click", (event) => {
         this.previousTextSearch(event); 
       });
       textsearchNextElement.addEventListener("click", (event) => {
       this.nextTextSearch(event);
       });
       viewer.textSearch.cancelTextSearch();
       this.searchText = (document.getElementById('container_search_input')).value;
       this.searchActive = true;
       viewer.textSearch.searchText(this.searchText, this.matchCase);
       this.prevMatchCase = this.matchCase;
      }
      else {
        this.nextTextSearch();
        }
      }
    },
    inputChange: function () {
      viewer.textSearchModule.clearAllOccurrences();
      this.searchActive = false;
      var searchInput = document.getElementById('container_search_input');
      if(searchInput.value == '') {
        this.updateSearchInputIcon(true);
        viewer.textSearch.cancelTextSearch();
        this.searchText = '';
      }
    },
    searchClickHandler: function () {
      var searchBtn = document.getElementById('container_search_box-icon');
      if (searchBtn.classList.contains('e-search')) {
        viewer.textSearch.cancelTextSearch();
        this.initiateTextSearch();
        this.updateSearchInputIcon(false);
        this.searchText = '';
      }
      else if (searchBtn.classList.contains('e-close')) {
        var searchInput = document.getElementById('container_search_input');
        this.updateSearchInputIcon(true);
        searchInput.value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
        this.searchText = '';
      }
    },
    updateSearchInputIcon: function (isEnable) {
      var searchBtn = document.getElementById('container_search_box-icon');
      if (isEnable) {
        searchBtn.classList.add('e-search');
        searchBtn.classList.remove('e-close');
      } 
      else {
        searchBtn.classList.add('e-close');
        searchBtn.classList.remove('e-search');
      }
    },
    previousTextSearch: function () {
      viewer.textSearchModule.searchPrevious();
      this.searchActive = true;
    },
    nextTextSearch: function () {
      viewer.textSearchModule.searchNext();
      this.searchActive = true;
    },
    checkBoxChanged: function (event) {
      const target = event.target;

      if (target.checked) {
        const matchcaseElement = document.getElementById(
          "container_match_case"
        );
        if (matchcaseElement) {
          matchcaseElement.checked = true;
        }
        this.matchCase = true;
        const checkboxSpanElement = document.getElementById("checkboxSpan");
        if (checkboxSpanElement) {
          checkboxSpanElement.classList.add("e-check");
        }
      } else {
        this.matchCase = false;
        const checkboxSpanElement = document.getElementById("checkboxSpan");
        if (checkboxSpanElement) {
          checkboxSpanElement.classList.remove("e-check");
        }
      }
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      toolbar = this.$refs.toolbar.ej2Instances;
      currentPageBox = document.getElementById("currentPage");
      currentPageBox.value = "1";
      document.getElementById("totalPage").textContent =
        "of " + viewer.pageCount;
      currentPageBox.addEventListener("keypress", onCurrentPageBoxKeypress);
      currentPageBox.addEventListener("click", onCurrentPageBoxClicked);
      document
        .getElementById("fileUpload")
        .addEventListener("change", readFile, false);
      updatePageNavigation();
    },

    change: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.checked) {
        viewer.serviceUrl = "";
      } else {
        viewer.serviceUrl =
          "https://services.syncfusion.com/vue/production/api/pdfviewer";
      }
      viewer.dataBind();
      viewer.load(viewer.documentPath, null);
    },
  },
};

</script>