<template>
    <div>
        <div class="e-pv-e-sign control-section">
            <div class="e-pv-e-sign-property-sec">
                <div class="e-pv-e-sign-property-sec">
                    <ejs-toolbar id="e-pv-e-sign-toolbar-user-viewer">
                        <e-items>
                            <e-item template="template">
                                <template v-slot:template>
                                    <div id='e-pv-e-sign-user-field' style="width: 200px; height: 37px; left: 0px">
                                        <div class='e-pv-e-sign-user-dropdown'>
                                            <ejs-dropdownlist ref="userMenu" :dataSource="userDetails" :fields="fields"
                                                :index=0 :itemTemplate="'iTemplate'" :valueTemplate="'vTemplate'"
                                                popupHeight="450px" popupWidth="200px" :select="userChange">
                                                <template v-slot:iTemplate="{ data }">
                                                    <div style="display: flex;">
                                                        <img class="e-pv-e-sign-user-profile"
                                                            :src="`src/pdfviewer/images/employees/${data.Eimg}.png`"
                                                            :style="{ height: '33px', marginTop: '7px', marginLeft: '3px', borderRadius: '50%', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}`, }" />
                                                        <div>
                                                            <div class="e-pv-e-sign-user-name"
                                                                style="font-size: 14px; height: 18px;">{{ data.Name }}
                                                            </div>
                                                            <div class="e-pv-e-sign-user-mail" style="font-size: 12px;">
                                                                {{ data.Mail }}</div>
                                                        </div>
                                                    </div>
                                                </template>
                                                <template v-slot:vTemplate="{ data }">
                                                    <div class="e-pv-e-sign-value-template" style="display: flex;">
                                                        <img class="e-pv-e-sign-user-profile"
                                                            :src="`src/pdfviewer/images/employees/${data.Eimg}.png`"
                                                            :style="{ height: '30px', borderRadius: '50%',marginLeft: '3px', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}` }" />
                                                        <div>
                                                            <div class="e-pv-e-sign-user-name"
                                                                style="font-size: 12px; margin-left: 12px;">{{ data.Name
                                                                }}</div>
                                                            <div class="e-pv-e-sign-user-mail"
                                                                style="font-size: 10px; margin-left: 11px;">{{ data.Mail
                                                                }}</div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </ejs-dropdownlist>
                                        </div>
                                    </div>
                                </template>
                            </e-item>
                            <e-item align="Right" template="buttonComponent">
                                <template v-slot:buttonComponent>
                                    <ejs-button ref="btnElement" id="e-pv-e-sign-finishbtn" cssClass="e-outline"
                                        :onClick="finishSigning" :disabled="true">Finish Signing</ejs-button>
                                </template>
                            </e-item>
                        </e-items>
                    </ejs-toolbar>
                </div>
            </div>
            <ejs-pdfviewer ref="viewer" id="container" :documentPath="documentPath" :resourceUrl="resourceUrl"
                :serviceUrl="serviceUrl" :downloadFileName="downloadFileName" :enableNavigationToolbar="false" :enableAnnotationToolbar = "false"
                :enableToolbar="false" :enableFormDesignerToolbar="false" :documentLoad="documentLoad"
                :formFieldPropertiesChange="fieldChange" :downloadEnd="downloadEnd" style="height: 640px;">
            </ejs-pdfviewer>
            <div id="e-pv-e-sign-dialog-target">
                <ejs-dialog ref="dialogInstance" :minHeight="'50px'" :isModal="true" :width="'350px'" :buttons="buttons"
                    :visible="status" :target="'#e-pv-e-sign-dialog-target'"></ejs-dialog>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample enables two different users to sign the document. The first
                user must fill out and sign their designated fields, which are visible
                only to them. Once the first user has completed their section, the
                second user can be selected to fill out and sign their own fields. After
                both users have signed, the document can be finalized.
            </p>
        </div>
        <div id="description">
            <p>
                More information on the PDF Viewer instantiation can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
                    documentation section
                </a>
            </p>
        </div>
    </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, } from '@syncfusion/ej2-vue-pdfviewer';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { ToolbarComponent, ItemDirective, ItemsDirective } from '@syncfusion/ej2-vue-navigations';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
    components: {
        "ejs-pdfviewer": PdfViewerComponent,
        "ejs-button": ButtonComponent,
        "ejs-dropdownlist": DropDownListComponent,
        "ejs-dialog": DialogComponent,
        "ejs-toolbar": ToolbarComponent,
        "e-items": ItemsDirective,
        "e-item": ItemDirective
    },
    data() {
        return {
            documentPath: 'https://cdn.syncfusion.com/content/pdf/eSign_filling.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
            serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer',
            downloadFileName: 'eSign_filling.pdf',
            status: false,
            preventChange: false,
            currentUser: 'andrew@mycompany.com',
            borderColor: '2px solid red',
            finishedBackground: '#daeaf7ff',
            anneBackground: '#eff7ef',
            andrewBackground: '#ffefef',
            buttons: [
                {
                    click: this.dlgButtonClick,
                    buttonModel: {
                        content: 'OK',
                        isPrimary: true,
                    },
                },
            ],
            userDetails: [
                { Name: 'Andrew Fuller', Eimg: 'profile1', Mail: 'andrew@mycompany.com', fieldIds: [] },
                { Name: 'Anne Dodsworth', Eimg: 'profile2', Mail: 'anne@mycompany.com', fieldIds: [] },
            ],
            fields: { text: 'Mail', value: 'Eimg', fieldIds: 'fieldIds' },
        };
    },
    provide: {
        PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
    },
    methods: {

        finishSigning() {
            var viewer = this.$refs.viewer.ej2Instances;
            for (const formField of viewer.formFieldCollections) {
                viewer.formDesignerModule.updateFormField(formField, { backgroundColor: this.finishedBackground });
            }
            viewer.serverActionSettings.download = 'FlattenDownload';
            viewer.download();
            viewer.serverActionSettings.download = 'Download';
        },
        downloadEnd(args) {
            this.$refs.viewer.ej2Instances.load(args.downloadDocument, null);
            this.$refs.btnElement.ej2Instances.disabled = true;
            this.$refs.userMenu.ej2Instances.enabled = false;
        },
        updateUserFormField() {
            var viewer = this.$refs.viewer.ej2Instances;
            const otherFormFieldDetails = viewer.formFieldCollections.filter(formField => formField.customData.author === 'anne');
            const currentFormFieldDetails = viewer.formFieldCollections.filter(formField => formField.customData.author === 'andrew');
            if (this.currentUser === 'andrew@mycompany.com') {
                otherFormFieldDetails.forEach(field => {
                    if (field.value !== '') {
                        const mainFieldUpdateData = {
                            backgroundColor: this.finishedBackground,
                            isReadOnly: true,
                        };
                        viewer.formDesigner.updateFormField(field, mainFieldUpdateData);
                        currentFormFieldDetails.forEach(currentField => {
                            const currentFieldUpdateData = {
                                backgroundColor: this.andrewBackground,
                                isReadOnly: true,
                            };
                            viewer.formDesigner.updateFormField(currentField, currentFieldUpdateData);
                        });
                    } else {
                        currentFormFieldDetails.forEach(currentField => {
                            const currentFieldUpdateData = {
                                backgroundColor: this.andrewBackground,
                            };
                            viewer.formDesigner.updateFormField(currentField, currentFieldUpdateData);
                        });
                    }
                    const otherUserField = document.getElementById(field.id + '_content_html_element');
                    if (otherUserField) {
                        const currentFormField = viewer.formFieldCollections.find(formField => formField.id === field.id);
                        if (currentFormField.type !== 'DropDown' && otherUserField) {
                            if (!currentFormField.value) {
                                viewer.formDesignerModule.updateFormField(currentFormField, { visibility: 'hidden' });
                            }
                        } else {
                            if (currentFormField.value.length !== 0 && otherUserField) {
                                viewer.formDesignerModule.updateFormField(currentFormField, { visibility: 'hidden' });
                            }
                        }
                    }
                });
            } else {
                this.validation(currentFormFieldDetails);
                if (!this.status) {
                    currentFormFieldDetails.forEach(field => {
                        const currentFieldUpdateData = {
                            backgroundColor: this.finishedBackground,
                            isReadOnly: true,
                        };
                        viewer.formDesigner.updateFormField(field, currentFieldUpdateData);
                        otherFormFieldDetails.forEach(otherField => {
                            const otherFieldUpdateData = {
                                backgroundColor: this.anneBackground,
                                isReadOnly: false,
                            };
                            viewer.formDesigner.updateFormField(otherField, otherFieldUpdateData);
                        });
                    });
                    otherFormFieldDetails.forEach(field => {
                        viewer.formDesignerModule.updateFormField(field, { visibility: 'visible' });
                    });
                }
            }
        },
        dlgButtonClick() {
            this.status = false;
            this.$refs.dialogInstance.hide();
        },
        validation(args) {
            let errorMessage = 'Required Field(s): ';
            const forms = args;
            let flag = false;
            let isAllFieldFilled = true;
            let radioGroupName = '';

            for (let i = 0; i < forms.length; i++) {
                let text = "";

                if (forms[i].isRequired) {
                    switch (forms[i].type.toString()) {
                        case "Checkbox":
                            if (!forms[i].isChecked) {
                                text = forms[i].name;
                            }
                            break;

                        case "RadioButton":
                            if (!flag) {
                                radioGroupName = forms[i].name;
                                if (forms[i].isSelected) {
                                    flag = true;
                                }
                            }
                            break;

                        case "DropdownList":
                            if (forms[i].value.length === 0) {
                                text = forms[i].name;
                            }
                            break;

                        default:
                            if (!forms[i].value || (typeof forms[i].newValue === 'string' && forms[i].newValue === "")) {
                                text = forms[i].name;
                            }
                            break;
                    }

                    if (text) {
                        errorMessage = errorMessage === "Required Field(s): " ? errorMessage + text : errorMessage + ", " + text;
                    }
                }
            }
            if (!flag && radioGroupName !== '') {
                if (errorMessage === 'Required Field(s): ') errorMessage += radioGroupName;
                else errorMessage += ', ' + radioGroupName;
                isAllFieldFilled = false;
            }
            if (errorMessage !== 'Required Field(s): ') {
                this.status = true;
                this.$refs.dialogInstance.ej2Instances.content = errorMessage;
                this.$refs.dialogInstance.ej2Instances.show();
                this.preventChange = true;
            } else {
                this.status = false;
                this.preventChange = false;
            }
        },
        fieldChange(args) {
            let errorMessage = 'Required Field(s): ';
            const forms = this.$refs.viewer.ej2Instances.formFieldCollections;
            let flag = false;
            let isAllFieldFilled = true;
            let radioGroupName = '';
            forms.forEach(form => {
                let text = "";

                if (form.isRequired) {
                    if (form.type.toString() === "Checkbox" && !form.isChecked) {
                        text = form.name;
                        isAllFieldFilled = false;
                    } else if (form.type === "RadioButton" && !flag) {
                        radioGroupName = form.name;
                        if (form.isSelected) {
                            flag = true;
                        }
                    } else if (form.type.toString() !== "Checkbox" && form.type !== "RadioButton" && (!form.value || (typeof args.newValue === 'string' && args.newValue === ""))) {
                        text = form.name;
                        isAllFieldFilled = false;
                    } else if (form.type.toString() === "DropdownList" && form.value.length === 0) {
                        text = form.name;
                        isAllFieldFilled = false;
                    }

                    if (text) {
                        errorMessage = errorMessage === "Required Field(s): " ? errorMessage + text : errorMessage + ", " + text;
                    }
                }
            });
            if (!flag && radioGroupName !== '') {
                if (errorMessage === 'Required Field(s): ') errorMessage += radioGroupName;
                else errorMessage += ', ' + radioGroupName;
                isAllFieldFilled = false;
            }
            if (isAllFieldFilled) {
                this.$refs.btnElement.ej2Instances.disabled = false;
            } else {
                this.$refs.btnElement.ej2Instances.disabled = true;
            }
        },
        userChange(args) {
            this.currentUser = args.itemData.Mail;
            if (args.itemData.Mail === 'andrew@mycompany.com') {
                this.borderColor = '1px solid red';
            } else {
                this.borderColor = '1px solid green';
            }
            this.updateUserFormField();
            if (this.preventChange) {
                args.cancel = true;
            }
        },
        documentLoad() {
            var viewer = this.$refs.viewer.ej2Instances;
            viewer.magnification.fitToPage();
            viewer.designerMode = false;
            this.updateUserFormField();
        },

    }
};
</script>

<style>
#e-pv-e-sign-toolbar_user_viewer {
    z-index: 1001;
    width: 100% !important;
    height: 48px !important;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
}

#e-pv-e-sign-finishbtn {
    width: 115px !important;
    height: 28px;
    padding: 0;
    font-size: 12px;
    flex-shrink: 0;
    border-radius: 16px;
}
.e-pv-e-sign-user-dropdown> :first-child {
    border: none !important;
}
</style>