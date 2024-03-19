<template>
<div>
    <div class="col-lg-9 control-section pdfviewer-control-section">
        <div class="flex-container">
            <label class="switchLabel" for="checked">Standalone PDF Viewer</label>
            <div class="e-message render-mode-info">
                <span class="e-msg-icon render-mode-info-icon" title="Turn OFF to render the PDF Viewer as server-backed"></span>
            </div>
            <div>
                <ejs-switch cssClass="buttonSwitch" id="checked" :change="change" :checked="true"></ejs-switch>
            </div>
        </div>
        <ejs-pdfviewer id="pdfviewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :documentLoad="documentLoad" :customContextMenuSelect="customContextMenuSelect" :customContextMenuBeforeOpen="customContextMenuBeforeOpen">
        </ejs-pdfviewer>
    </div>
    <div class='col-lg-3 pdfviewer-property-section'>
        <div class="pdfviewer-property-container">
            <h5><b>Properties</b></h5>
        </div>
        <table>
            <tr>
                <td class='pdfviewer-contextmenu-checkbox-label'>Hide Default Context Menu</td>
                <td>
                    <ejs-checkbox id="enable" @change="contextmenuHelper" :checked="false"></ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td class='pdfviewer-contextmenu-checkbox-label'>Add Custom option at bottom</td>
                <td>
                    <ejs-checkbox id="position" @change="contextmenuHelper" :checked="false"></ejs-checkbox>
                </td>
            </tr>
        </table>
    </div>
    <div id="action-description">
        <p>Explore how to tailor context menus for PDF pages, annotations, and form fields in this sample.</p>
    </div>

    <div id="description">
        <p>
            This customization empowers users to add new context menus on PDF pages, annotations, and form fields. In this sample:
        </p>
        <ul>
            <li>Selecting text on pages reveals a custom context menu, enabling users to search for the selected text on Google.</li>
            <li>Annotations and Form Fields can be locked directly from the context menu.</li>
            <li>Customization is achieved using the following APIs:</li>
            <ul>
                <li>Customize the context menu by selectively displaying custom options, hiding existing menu items, controlled by boolean parameters in the <code>addCustomMenu()</code> method.</li>
                <li>Position custom menu items either above or below existing ones, adjusting boolean parameters in the <code>addCustomMenu()</code> method.</li>
                <li>Tailor the visibility of custom menu items using the <code>customContextMenuBeforeOpen</code> event.</li>
                <li>Implement specific functionalities for custom options through the <code>customContextMenuSelect</code> event.</li>
            </ul>
        </ul>
        <p>
            More information on the PDF Viewer instantiation can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started">
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
}

.render-mode-info .render-mode-info-icon::before {
    line-height: 0.5rem;
}

.buttonSwitch {
    Width: 40px;
    Height: 24px;
}

.pdfviewer-property-section {
    padding: 20px 15px;
}

.pdfviewer-contextmenu-checkbox-label {
    padding: 10px;
}

.pdfviewer-control-section {
    border-right: 1px solid #D7D7D7;
}

.pdfviewer-property-container {
    padding-bottom: 20px;
}
</style>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-switch': SwitchComponent,
        'ejs-menu': MenuComponent,
        'ejs-checkbox': CheckBoxComponent
    },
    data: function () {
        return {
            documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
            menuItems: [{
                    text: 'Search In Google',
                    id: 'search_in_google',
                    iconCss: 'e-icons e-de-ctnr-find'
                },
                {
                    text: 'Lock Annotation',
                    iconCss: 'e-icons e-lock',
                    id: 'lock_annotation'
                },
                {
                    text: 'Unlock Annotation',
                    iconCss: 'e-icons e-unlock',
                    id: 'unlock_annotation'
                },
                {
                    text: 'Lock Form Fields',
                    iconCss: 'e-icons e-lock',
                    id: 'read_only_true'
                },
                {
                    text: 'Unlock Form Fields',
                    iconCss: 'e-icons e-unlock',
                    id: 'read_only_false'
                },
            ]
        }
    },
    provide: {
        PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
    },
    methods: {
        documentLoad: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            viewer.addCustomMenu(this.menuItems, false, false);
        },

        customContextMenuSelect: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            switch (args.id) {
                case 'search_in_google':
                    for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                        var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                        if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
                            window.open('http://google.com/search?q=' + content);
                        }
                    }
                    break;
                case 'lock_annotation':
                    this.lockAnnotations(args);
                    break;
                case 'unlock_annotation':
                    this.unlockAnnotations(args);
                    break;
                case 'read_only_true':
                    this.setReadOnlyTrue(args);
                    break;
                case 'read_only_false':
                    this.setReadOnlyFalse(args);
                    break;
                default:
                    break;
            }
        },

        customContextMenuBeforeOpen: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            for (var i = 0; i < args.ids.length; i++) {
                var search = document.getElementById(args.ids[i]);
                if (search) {
                    search.style.display = 'none';
                    if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
                        search.style.display = 'block';
                    } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                        var isLockOption = args.ids[i] === "lock_annotation";
                        for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
                            var selectedAnnotation = viewer.selectedItems.annotations[j];
                            if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                                var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                                    (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                                search.style.display = shouldDisplay ? 'block' : 'none';
                            }
                        }
                    } else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && viewer.selectedItems.formFields.length !== 0) {
                        var isReadOnlyOption = args.ids[i] === "read_only_true";
                        for (var j = 0; j < viewer.selectedItems.formFields.length; j++) {
                            var selectedFormFields = viewer.selectedItems.formFields[j];
                            if (selectedFormFields) {
                                var selectedFormField = viewer.selectedItems.formFields[j].isReadonly;
                                var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                                search.style.display = displayMenu ? 'block' : 'none';
                            }
                        }
                    } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
                        search.style.display = 'block';
                    }
                }
            }
        },

        lockAnnotations: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            for (var i = 0; i < viewer.annotationCollection.length; i++) {
                if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
                    viewer.annotationCollection[i].annotationSettings.isLock = true;
                    viewer.annotationCollection[i].isCommentLock = true;
                    viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                }
                args.cancel = false;
            }
        },

        unlockAnnotations: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            for (var i = 0; i < viewer.annotationCollection.length; i++) {
                if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
                    viewer.annotationCollection[i].annotationSettings.isLock = false;
                    viewer.annotationCollection[i].isCommentLock = false;
                    viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                }
                args.cancel = false;
            }
        },

        setReadOnlyTrue: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            var selectedFormFields = viewer.selectedItems.formFields;
            for (var i = 0; i < selectedFormFields.length; i++) {
                var selectedFormField = selectedFormFields[i];
                if (selectedFormField) {
                    viewer.formDesignerModule.updateFormField(selectedFormField, {
                        isReadOnly: true,
                    });
                }
                args.cancel = false;
            }
        },

        setReadOnlyFalse: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            var selectedFormFields = viewer.selectedItems.formFields;
            for (var i = 0; i < selectedFormFields.length; i++) {
                var selectedFormField = selectedFormFields[i];
                if (selectedFormField) {
                    viewer.formDesignerModule.updateFormField(selectedFormField, {
                        isReadOnly: false,
                    });
                }
                args.cancel = false;
            }
        },

        contextmenuHelper: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            viewer.addCustomMenu(this.menuItems, enable.checked, position.checked);
        },

        change: function (args) {
            var viewer = this.$refs.pdfviewer.ej2Instances;
            if (args.checked) {
                viewer.serviceUrl = "";
            } else {
                viewer.serviceUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer";
            }
            viewer.dataBind();
            viewer.load(viewer.documentPath, null);
        }
    }
};
</script>
