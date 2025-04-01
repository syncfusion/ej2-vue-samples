<template>
  <div>
    <div class="e-pv-e-sign control-section">
      <div class="e-pv-e-sign-property-sec">
        <ejs-toolbar id="e-pv-e-sign-toolbar-user-viewer">
          <e-items v-if="isMobile">
            <e-item template="template">
              <template v-slot:template>
                <div id='e-pv-e-sign-user-field' style="width: 200px; height: 37px; left: 0px">
                  <div class='e-pv-e-sign-user-dropdown'>
                    <ejs-dropdownlist id="e-pv-e-sign-dropdown" :dataSource="userDetails" :fields="fields" :index=0
                      :itemTemplate="'iTemplate'" :valueTemplate="'vTemplate'" popupHeight="450px" popupWidth="200px"
                      :select="userChange">
                      <template v-slot:iTemplate="{ data }">
                        <div style="display: flex;">
                          <img class="e-pv-e-sign-user-profile" :src="`src/pdfviewer/images/employees/${data.Eimg}.png`"
                            :style="{ height: '32px', marginTop: '7px', marginLeft: '3px', borderRadius: '50%', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}`, }" />
                          <div>
                            <div class="e-pv-e-sign-user-name" style="font-size: 14px; height: 18px;">{{ data.Name }}
                            </div>
                            <div class="e-pv-e-sign-user-mail" style="font-size: 12px;">{{ data.Mail }}</div>
                          </div>
                        </div>
                      </template>
                      <template v-slot:vTemplate="{ data }">
                        <div class="e-pv-e-sign-value-template" style="display: flex;">
                          <img class="e-pv-e-sign-user-profile" :src="`src/pdfviewer/images/employees/${data.Eimg}.png`"
                            :style="{ height: '32px', borderRadius: '50%',marginLeft: '1px', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}` }" />
                          <div>
                            <div class="e-pv-e-sign-user-name" style="font-size: 12px; margin-left: 12px;">{{ data.Name
                              }}</div>
                            <div class="e-pv-e-sign-user-mail" style="font-size: 10px; margin-left: 11px;">{{ data.Mail
                              }}</div>
                          </div>
                        </div>
                      </template>
                    </ejs-dropdownlist>
                  </div>
                </div>
              </template>
            </e-item>
            <e-item prefixIcon="e-icons e-download" align="Right" tooltipText="Download" :click="downloadFile" />
          </e-items>
          <e-items v-if="!isMobile">
            <e-item prefixIcon="e-icons e-download" text="Download" align="Right" tooltipText="Download"
              id="e-pv-e-sign-download" :click="downloadFile" />
          </e-items>
        </ejs-toolbar>
      </div>
      <div :style="{ display: isMobile ? 'block' : 'flex', position: 'relative' }">
        <ejs-sidebar v-if="!isMobile" id="e-pv-e-sign-defaultSidebar" ref="sidebarobj"
          class="e-pv-e-sign-default-sidebar" width="200px" :enableGestures="false">
          <div class="e-pv-e-sign-content-wrapper" style="margin-left: 2px; margin-top: 14px;">
            <div class="e-pv-e-sign-user-label" style=" font-size: 16px; margin: 15px 10px 5px; font-weight: 500px;">
              Fields
            </div>
            <div id='e-pv-e-sign-user-field'
              style="width: 193px; height: 37px; left: 0px; margin-bottom: 20px;border: 1px solid lightgray;">
              <div class='e-pv-e-sign-user-dropdown' style="width: 190px;">
                <ejs-dropdownlist id="e-pv-e-sign-dropdown" :dataSource="userDetails" :fields="fields" :index=0
                  :itemTemplate="'iTemplate'" :valueTemplate="'vTemplate'" popupHeight="450px" popupWidth="190px"
                  :select="userChange">
                  <template v-slot:iTemplate="{ data }">
                    <div style="display: flex;">
                      <img class="e-pv-e-sign-user-profile" :src="`src/pdfviewer/images/employees/${data.Eimg}.png`"
                        :style="{ height: '33px', marginTop: '7px', marginLeft: '3px', borderRadius: '50%', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}`, }" />
                      <div>
                        <div class="e-pv-e-sign-user-name" style="font-size: 13px; height: 18px;">{{ data.Name }}
                        </div>
                        <div class="e-pv-e-sign-user-mail" style="font-size: 11px;">{{ data.Mail }}</div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:vTemplate="{ data }">
                    <div class="e-pv-e-sign-value-template" style="display: flex;">
                      <img class="e-pv-e-sign-user-profile" :src="`src/pdfviewer/images/employees/${data.Eimg}.png`"
                        :style="{ height: '32px', borderRadius: '50%',margin:'1px', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}` }" />
                      <div>
                        <div class="e-pv-e-sign-user-name" style="font-size: 12px; margin-left: 12px;">{{ data.Name }}
                        </div>
                        <div class="e-pv-e-sign-user-mail" style="font-size: 10px; margin-left: 11px;">{{ data.Mail }}
                        </div>
                      </div>
                    </div>
                  </template>
                </ejs-dropdownlist>
              </div>
            </div>
            <div style="display: flex;margin-left: 7px;">

              <ejs-button ref="signatureBtn" class="e-pv-e-sign-form-field-property e-outline" title="Signature"
                @click="signatureClick">
                <span class="e-pv-handwritten-icon e-pv-icon" ></span>
                <span style="font-size: 12px; margin-top: 11px;">Signature</span>
              </ejs-button>
              <ejs-button ref="initialBtn" class="e-pv-e-sign-form-field-property e-outline" title="Initial"
                @click="initialClick">
                <i class="e-icons e-font-name" ></i>
                <span style="font-size: 12px; margin-top: 11px;">Initial</span>
              </ejs-button>
            </div>
            <div style="display: flex;margin-left: 7px;">
              <ejs-button ref="textBtn" class="e-pv-e-sign-form-field-property e-outline" title="Textbox"
                @click="textBoxClick">
                <i class="e-icons e-text-form" ></i>
                <span style="font-size: 12px; margin-top: 11px;">Textbox</span>
              </ejs-button>
              <ejs-button ref="passwordBtn" class="e-pv-e-sign-form-field-property e-outline" title="Password"
                @click="passWordClick">
                <i class="e-icons e-password" ></i>
                <span style="font-size: 12px; margin-top: 11px;">Password</span>
              </ejs-button>
            </div>
            <div style="display: flex;margin-left: 7px;">
              <ejs-button ref="checkBoxBtn" class="e-pv-e-sign-form-field-property e-outline" title="CheckBox"
                @click="checkBoxClick">
                <i class="e-icons e-check-box" ></i>
                <span style="font-size: 12px; margin-top: 11px;">Checkbox</span>
              </ejs-button>
              <ejs-button ref="radioBtn" class="e-pv-e-sign-form-field-property e-outline" title="RadioButton"
                @click="radioButtonClick">
                <i class="e-icons e-radio-button" ></i>
                <span style="font-size: 12px; margin-top: 11px;">Radio</span>
              </ejs-button>
            </div>
            <div style="display: flex;margin-left: 7px;">
              <ejs-button ref="dropdownBtn" class="e-pv-e-sign-form-field-property e-outline" title="DropDown"
                @click="dropDownClick">
                <i class="e-icons e-drop-down" ></i>
                <span style="font-size: 12px; margin-top: 11px;">Dropdown</span>
              </ejs-button>
              <ejs-button ref="listBoxBtn" class="e-pv-e-sign-form-field-property e-outline" title="ListBox"
                @click="listBoxClick">
                <i class="e-icons e-list-unordered" ></i>
                <span style="font-size: 12px; margin-top: 11px;">Listbox</span>
              </ejs-button>
            </div>
          </div>
        </ejs-sidebar>

        <div :style="{ width: isMobile ? '100%' : 'calc(100% - 200px)' }">
          <ejs-pdfviewer ref="pdfviewer" id="container" :enableNavigationToolbar="false" :enableToolbar="false" :enableAnnotationToolbar = "false"
            documentPath="https://cdn.syncfusion.com/content/PDFViewer/Fill+and+Sign.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib"
            :formFieldAdd="addFormField" :zoomMode="FitToPage"
            :pageClick="pageClick" downloadFileName="eSign_designMode.pdf" :documentLoad="documentLoad"
            :style="{ height: isMobile ? '500px' : '640px' }">
          </ejs-pdfviewer>
        </div>
      </div>
      <div v-if="isMobile">
        <ejs-toolbar ref="toolbarObj" :created="toolbarCreated" overflowMode="Scrollable" class="e-pv-e-sign-toolbar-user-viewer-mob">
          <e-items>           
            <e-item :template="'toolbarTemplate'"> </e-item>
            <template v-slot:toolbarTemplate>
              <div class="e-pv-e-sign-btn-div" style="width: 100%;justify-content: space-between;">
                <ejs-button ref="signatureBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="Signature"
                  @click="signatureClick">
                  <span class="e-pv-handwritten-icon e-pv-icon"></span>
                </ejs-button>
                <ejs-button ref="initialBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="Initial"
                  @click="initialClick">
                  <i class="e-icons e-font-name"></i>
                </ejs-button>
                <ejs-button ref="textBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="Textbox"
                  @click="textBoxClick">
                  <i class="e-icons e-text-form"></i>
                </ejs-button>
                <ejs-button ref="passwordBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="Password"
                  @click="passWordClick">
                  <i class="e-icons e-password"></i>
                </ejs-button>
                <ejs-button ref="checkBoxBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="CheckBox"
                  @click="checkBoxClick">
                  <i class="e-icons e-check-box"></i>
                </ejs-button>
                <ejs-button ref="radioBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="RadioButton"
                  @click="radioButtonClick">
                  <i class="e-icons e-radio-button"></i>
                </ejs-button>
                <ejs-button ref="dropdownBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="DropDown"
                  @click="dropDownClick">
                  <i class="e-icons e-drop-down"></i>
                </ejs-button>
                <ejs-button ref="listBoxBtn" class="e-pv-e-sign-form-field-property-mob e-outline" title="ListBox"
                  @click="listBoxClick">
                  <i class="e-icons e-list-unordered"></i>
                </ejs-button>
              </div>
            </template>


          </e-items>
        </ejs-toolbar>
      </div>
    </div>
    <div id="action-description">
      <p>This sample enables the design of a PDF form that accommodates signatures from two different users. The form
        includes distinct fields for each user: when the first user is selected, specific fields can be added that apply
        only to that user. Upon switching the user via the dropdown menu, new fields can be added for the second user.
        The fields for each user are distinguishable by different background colors.</p>
    </div>
    <div id="description">
      <p>
        More information on the PDF Viewer instantiation can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started">
          documentation section
        </a>.
      </p>
    </div>
  </div>
</template>

<style>
.e-pv-e-sign.control-section {
  margin-top: 0px;
}

.e-pv-e-sign-btn-div {
  display: flex;
}

.e-pv-e-sign-form-field-property {
  width: 72px !important ;
  height: 72px !important;
  margin: 9px;
  border: 1px solid lightgrey !important;
  border-radius: 8px;
  display: grid;
  place-content: center;
  font-size: 12px !important;
}

.e-pv-e-sign-form-field-property-mob {
  border: none !important;
  box-shadow: none;
}

#e-pv-e-sign-download {
  border: 1px solid black;
  border-radius: 16px;
  height: 32px;
  width: 115px !important;
}

.e-pv-e-sign-user-dropdown .e-input-group:not(.e-float-icon-left):not(.e-float-input).e-input-focus::before,
.e-pv-e-sign-user-dropdown .e-input-group:not(.e-float-icon-left):not(.e-float-input).e-input-focus::after {
  width: 0px !important;
}

#e-pv-e-sign-user-field {
  color: #222933;
  font-family: Heebo, open sans, "sans-serif", -apple-system, BlinkMacSystemFont;
  border-radius: 4px;
  display: flex;
  position: relative;
  left: 1px;
}

#e-pv-e-sign-toolbar-user-viewer.e-toolbar .e-toolbar-items .e-toolbar-left .e-toolbar-item:first-child {
  margin-left: 0px !important;
}

#e-pv-e-sign-toolbar-user-viewer {
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
  z-index: 1111;
}

#e-pv-e-sign-defaultSidebar {
  height: 640px;
  position: absolute;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
}

.e-pv-e-sign-user-dropdown> :first-child {
  border: none !important;
  
}
#e-pv-e-sign-dropdown .e-input-value {
    width: 84% !important;
}

.e-pv-e-sign-user-dropdown .e-input-group-icon.e-ddl-icon.e-search-icon {
  padding: 0px ;
}

.e-pv-e-sign-form-field-property .e-pv-handwritten-icon.e-pv-icon{
    font-size: 12px !important;
}

.e-pv-e-sign-toolbar-user-viewer,
.e-pv-e-sign-toolbar-user-viewer-mob {
  z-index: 1001;
  width: 100% !important;
  height: 48px !important;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
}

.e-pv-e-sign-toolbar-user-viewer {
  z-index: 1 !important;
}
</style>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from "@syncfusion/ej2-vue-pdfviewer";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { SidebarComponent, ToolbarComponent, ItemDirective, ItemsDirective, } from "@syncfusion/ej2-vue-navigations";
import { Draggable, Browser } from "@syncfusion/ej2-base";

var currentUser = 'andrew@mycompany.com';
var borderColor = '2px solid red';
var isDropped = false;
var currentFieldType = "";
var fieldType = "";
var userColor = '#ffefef';
var isMobile = Browser.isDevice;
var zoomFactor;
var defaultFieldWidth = 200;
var defaultFieldHeight = 24;
var checkBoxFieldSize = 20;
var radioFieldSize = 20;
var SignatureFieldSize = 66;
var ListFieldSize = 66;
var defaultZoomFactor;

export default {

  components: {
    "ejs-pdfviewer": PdfViewerComponent,
    "ejs-button": ButtonComponent,
    "ejs-dropdownlist": DropDownListComponent,
    "ejs-sidebar": SidebarComponent,
    "ejs-toolbar": ToolbarComponent,
    "e-items": ItemsDirective,
    "e-item": ItemDirective
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/PDFViewer/Fill+and+Sign.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib",

      fields: { text: 'Mail', value: 'Eimg', fieldIds: 'fieldIds' },
      userDetails: [
        { Name: 'Andrew Fuller', Eimg: 'profile1', Mail: 'andrew@mycompany.com', fieldIds: [] },
        { Name: 'Anne Dodsworth', Eimg: 'profile2', Mail: 'anne@mycompany.com', fieldIds: [] }
      ],
      isMobile: Browser.isDevice,
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },

  methods: {

    userChange(args) {
      currentUser = args.itemData.Mail;
      if (args.itemData.Mail == "andrew@mycompany.com") {
        borderColor = '1px solid red';
      } else {
        borderColor = '1px solid green';
      }
    },
    downloadFile() {
      this.$refs.pdfviewer.download();
    },

    documentLoad() {
      defaultZoomFactor = true;
      var viewer = this.$refs.pdfviewer.ej2Instances;
      this.initializeDraggable(this.$refs.textBtn.$el, 'Textbox');
      this.initializeDraggable(this.$refs.signatureBtn.$el, 'SignatureField');
      this.initializeDraggable(this.$refs.passwordBtn.$el, 'Password');
      this.initializeDraggable(this.$refs.checkBoxBtn.$el, 'CheckBox');
      this.initializeDraggable(this.$refs.radioBtn.$el, 'RadioButton');
      this.initializeDraggable(this.$refs.dropdownBtn.$el, 'DropDown');
      this.initializeDraggable(this.$refs.listBoxBtn.$el, 'ListBox');
      this.initializeDraggable(this.$refs.initialBtn.$el, 'InitialField');
      this.$refs.pdfviewer.ej2Instances.designerMode = true;
      defaultZoomFactor = false;
    },

    addFormField(args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      userColor = currentUser === 'andrew@mycompany.com' ? '#ffefef' : '#eff7ef';
      if (currentUser === "andrew@mycompany.com") {
        viewer.formDesigner.updateFormField(viewer.retrieveFormFields()[(viewer.formFieldCollections).length - 1], { backgroundColor: userColor }, { customData: { author: 'andrew' } });
      } else {
        viewer.formDesigner.updateFormField(viewer.retrieveFormFields()[(viewer.formFieldCollections).length - 1], { backgroundColor: userColor }, { customData: { author: 'anne' } });
      }
      var currentUserDetails = this.userDetails.filter(userDetail => userDetail.Mail === currentUser)[0];
      var currentFormField = viewer.formFieldCollections.filter(formField => formField.id === args.field.id)[0];
      if (currentUserDetails)
        (currentUserDetails.fieldIds).push(currentFormField);
      let signIcons = document.querySelectorAll('[id*="signIcon"]');
      signIcons.forEach(element => {
        if (viewer.zoomPercentage < 65) {
          element.style.fontSize = '5px'
        } else if (viewer.zoomPercentage <= 85 && viewer.zoomPercentage > 65) {
          element.style.fontSize = "7px";
        }
      });
    },

    pageClick(args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (isDropped) {
        isDropped = false;
        var width = defaultFieldWidth;
        var height = defaultFieldHeight;
        switch (currentFieldType) {
          case 'SignatureField':
          case 'InitialField':
            height = SignatureFieldSize;
            break;
          case 'CheckBox':
          case 'RadioButton':
            width = checkBoxFieldSize;
            height = checkBoxFieldSize;
            break;
          case 'ListBox':
            height = ListFieldSize;
            break;
        }
        viewer.formDesignerModule.addFormField(currentFieldType, {
          bounds: { X: args.x, Y: args.y, Width: width, Height: height },
        });
      }
    },

    initializeDraggable(element, field) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (defaultZoomFactor) {
        zoomFactor = 1;
      } else {
        zoomFactor = viewer.viewerBase.getZoomFactor();
      }
      var left, top;

      var scaledWidth = defaultFieldWidth * zoomFactor;
      var scaledHeight = defaultFieldHeight * zoomFactor;

      switch (field) {
        case 'CheckBox':
        case 'RadioButton':
          scaledWidth = checkBoxFieldSize * zoomFactor;
          scaledHeight = checkBoxFieldSize * zoomFactor;
          left = 0;
          top = (checkBoxFieldSize / 2) * zoomFactor - (scaledHeight / 2);
          break;
        case 'ListBox':
          scaledHeight = ListFieldSize * zoomFactor;
          left = 90;
          top = (ListFieldSize / 2) * zoomFactor - (scaledHeight / 2);
          break;
        case 'SignatureField':
        case 'InitialField':
          scaledHeight = SignatureFieldSize * zoomFactor;
          left = 90;
          top = (SignatureFieldSize / 2) * zoomFactor - (scaledHeight / 2);
          break;
        default:
          scaledHeight = defaultFieldHeight * zoomFactor;
          left = 90;
          top = (defaultFieldHeight / 2) * zoomFactor - (scaledHeight / 2);
          break;
      }

      left = left / zoomFactor - (scaledWidth / 2);
      new Draggable(element, {
        helper: (e) => {
          if (e.sender.type == "mousemove") {
            zoomFactor = viewer.viewerBase.getZoomFactor();
            var cloneElement = document.createElement('div');
            cloneElement.style.width = (defaultFieldWidth * zoomFactor) + 'px';
            cloneElement.style.height = (defaultFieldHeight * zoomFactor) + 'px';
            cloneElement.style.borderRadius = '0';
            switch (field) {
              case 'SignatureField':
              case 'InitialField':
                cloneElement.style.height = (SignatureFieldSize * zoomFactor) + 'px';
                break;
              case 'CheckBox':
                cloneElement.style.height = (checkBoxFieldSize * zoomFactor) + 'px';
                cloneElement.style.width = (checkBoxFieldSize * zoomFactor) + 'px';
                break;
              case 'RadioButton':
                cloneElement.style.height = (radioFieldSize * zoomFactor) + 'px';
                cloneElement.style.width = (radioFieldSize * zoomFactor) + 'px';
                cloneElement.style.borderRadius = '50%';
                break;
              case 'ListBox':
                cloneElement.style.height = (ListFieldSize * zoomFactor) + 'px';
                break;
            }
            cloneElement.style.backgroundColor = currentUser === 'andrew@mycompany.com' ? '#ffefef' : '#eff7ef';
            cloneElement.style.zIndex = '10001';
            cloneElement.style.position = 'absolute';
            cloneElement.style.pointerEvents = 'none';
            cloneElement.style.opacity = '0.5';
            document.body.appendChild(cloneElement);
            return cloneElement;
          }
          else {
            return null
          }
        },
        drag: (e) => {
          e.event.preventDefault();
        },
        dragStart: (e) => {
          currentFieldType = field;
          isDropped = true;
        },
        dragArea: '#container',
        dragStop: (e) => {
          if (e.helper && e.helper.parentNode) {
            e.helper.parentNode.removeChild(e.helper);
          }
          isDropped = false;
        },
        cursorAt: { left: left, top: top },
        clone: true,
        enableTailMode: true,
      });
    },

    signatureClick(args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("SignatureField");
    },

    initialClick(args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("InitialField");
    },

    textBoxClick(args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("Textbox");
    },

    passWordClick: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("Password");
    },
    checkBoxClick: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("CheckBox");
    },
    radioButtonClick: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("RadioButton");
    },
    dropDownClick: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("DropDown");
    },
    listBoxClick: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.sourceCapabilities.firesTouchEvents)
        viewer.formDesignerModule.setFormFieldMode("ListBox");
    },
  },

};
</script>