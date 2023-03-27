<template>
<div class="control-section">
    <div  class="col-lg-8">
        <div id="panel">
            <titleBar :documentName="documentTitle"></titleBar>
            <input type="file" id="fileUpload" ref="uploadDocument" style="position:fixed; left:-100em" @change="fileChange" />   
            <div id="documenteditor_container_panel" >        
                <ejs-documenteditor ref="documenteditor" :baseUrl='hostUrl' :enablePrint='true' :height='editorHeight' v-bind:documentChange="documentChangedEvent" v-bind:viewChange="viewChanged" 
                v-bind:zoomFactorChange="zoomFactorChangeEvent"
                id="container" pageOutline="#E0E0E0" style="width: 100%;height: 100%;"></ejs-documenteditor>                   
            </div>
            <div class="overlay" id="popup-overlay"></div>
            <div id='waiting-popup'>
                <svg class="circular" height="40" width="40">
                    <circle class="circle-path" cx="25" cy="25" r="20" fill="none" stroke-width="6" stroke-miterlimit="10" />
                </svg>
            </div>    
            <statusBar :pageCount="editorPageCount" :currentPage="currentPageNumber" :zoomContent="zoomFactor"></statusBar>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <div style="padding-top: 20px">
            <b>Document Editor settings</b>
        </div>
        <table style="margin-top: 10px; margin-bottom: 30px;">
            <tr>
                <td style="width: 50%;">
                   <span style="padding-right: 20px">Device pixel ratio:</span>
                </td>
                <td style="width: 50%;">
                     <ejs-tooltip target='#printNumeric' content='Specifies the device pixel ratio for the image generated while printing the document.'>
                        <ejs-numerictextbox :width="numbericTextWidth" :value="2" format="n" :min="1" :max="10" :step="0.5" :decimals="1" v-bind:change="onPixelRatioChange">
                        </ejs-numerictextbox>
                     </ejs-tooltip>
                </td>
            </tr>
        </table>
    </div>
    <div id="action-description">
         <p>This sample demonstrates how to view and print Word documents online using document editor.</p>
    </div>
    <div id="description">
        <p>In this example, document editor is defined as lightweight by injecting only the modules that are necessary for opening and printing Word documents.</p>
        <p style="display: block"> Document editor provides the following document viewing features:</p>
        <ul>
            <li>Open Word documents with document elements like text, images, hyperlinks, tables, bookmarks, page numbers, tables
                of contents, headers, and footers.</li>
            <li>Scroll or navigate to specific pages.</li>
            <li>Print Word documents in required quality by using your own device pixel ratio.</li>        
        </ul>
        <p style="display: block"> More information about the document editor features can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/document-editor/print/">documentation section.</a>
        </p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { DocumentEditorPlugin, DocumentEditorComponent, Print } from '@syncfusion/ej2-vue-documenteditor';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(TooltipPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(DropDownButtonPlugin);
Vue.use(DocumentEditorPlugin);
Vue.use(ButtonPlugin);


let titleBarComp = {
    props: ['documentName'],
    data() {
        return {
            iconStyle: 'float:right;background: transparent;box-shadow:none;border-color: transparent;border-radius: 2px;color:#ffffff;font-size:12px;text-transform:capitalize;margin-top:2px;height:28px;font-weight:400;font-family:inherit;',
            titileStyle: 'text-transform:capitalize;font-weight:400;font-family:inherit;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text',
            openIconCss: 'e-de-icon-Open e-de-padding-right',
            printIconCss: 'e-de-icon-Print e-de-padding-right'
        }
    },
    template: `<div ref="de_titlebar" id="documenteditor_titlebar" class="e-de-ctn-title">
    <div class="single-line" id="documenteditor_title_contentEditor"  title="Document Name. Click or tap to rename this document." contenteditable="false">
        <label id="documenteditor_title_name" :style="titileStyle" >{{documentName}}</label>
    </div>    
    <ejs-button id="de-print" :style="iconStyle" :iconCss="printIconCss" v-on:click.native="printBtnClick" title="Print this document (Ctrl+P).">Print</ejs-button>	
    <ejs-button id="de-open" :style="iconStyle" :iconCss="openIconCss" v-on:click.native="openBtnClick" title="Open">Open</ejs-button>    
</div>`,
    methods: {
        printBtnClick: function () {
            vm.$refs.documenteditor.ej2Instances.print()
        },
        openBtnClick: function () {
            vm.$refs.uploadDocument.click();
        },
        titleBarKeydownEvent: function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById("documenteditor_title_contentEditor").contentEditable = 'false';
                if (document.getElementById("documenteditor_title_contentEditor").textContent === '') {
                    document.getElementById("documenteditor_title_contentEditor").textContent = 'Document1';
                }
            }
        },
        titleBarBlurEvent: function (args) {
            if (document.getElementById("documenteditor_title_contentEditor").textContent === '') {
                document.getElementById("documenteditor_title_contentEditor").textContent = 'Document1';
            }
            document.getElementById("documenteditor_title_contentEditor").contentEditable = 'false';
            vm.$refs.documenteditor.ej2Instances.documentName = document.getElementById("documenteditor_title_name").textContent;
        },
        titleBarClickEvent: function () {
            titleBarComp.methods.updateDocumentEditorTitle();
        },
        updateDocumentEditorTitle: function () {
            document.getElementById("documenteditor_title_contentEditor").contentEditable = 'true';
            document.getElementById("documenteditor_title_contentEditor").focus();
            window.getSelection().selectAllChildren(document.getElementById("documenteditor_title_contentEditor"));
        }
    },
    mounted() {
        document.getElementById("documenteditor_title_contentEditor").addEventListener('keydown', function (e) { titleBarComp.methods.titleBarKeydownEvent(e); });
        document.getElementById("documenteditor_title_contentEditor").addEventListener('blur', function () { titleBarComp.methods.titleBarBlurEvent(); });
        document.getElementById("documenteditor_title_contentEditor").addEventListener('click', function () { titleBarComp.methods.titleBarClickEvent(); });
    }
};
let statusBarComp = {
    props: ['pageCount', 'currentPage', 'zoom', 'zoomContent'],
    data() {
        return {
            zoomContent: "100%",
            zoomItems: [{
                text: '200%',
            },
            {
                text: '175%',
            },
            {
                text: '150%',
            },
            {
                text: '125%',
            },
            {
                text: '100%',
            },
            {
                text: '75%',
            },
            {
                text: '50%',
            },
            {
                text: '25%',
            },
            {
                separator: true
            },
            {
                text: 'Fit one page'
            },
            {
                text: 'Fit page width',
            }]
        }
    },
    template: `<div ref="de_statusbar" id="documenteditor_statusbar">
    <label style="margin-top: 6px;margin-right: 2px">Page </label>
    <div class="single-line e-de-pagenumber-text" id="editablePageNumber" style="font-size:12px;font-weight: 700;border: 1px solid #F1F1F1;display: inline-flex;height: 17px;padding: 0px 4px;" title="The current page number in the document. Click or tap to navigate specific page." contenteditable="false"><label id="documenteditor_page_no" style="text-transform:capitalize;white-space:pre;overflow:hidden;user-select:none;cursor:text;height:17px;max-width:150px">{{currentPage}}</label></div>
    <label id="documenteditor_pagecount" style="margin-left:2px;letter-spacing: 1.05px">of</label>
    <label id="documenteditor_pagecount" style="margin-left:6px;letter-spacing: 1.05px">{{pageCount}}</label>
    <ejs-dropdownbutton ref="de_zoom" :items="zoomItems" class="e-de-print-statusbar" :content="zoomContent" v-bind:select="onZoom" title = "Zoom level. Click or tap to open the Zoom options."></ejs-dropdownbutton>
    </div>
    </div>
        `,
    methods: {
        onZoom: function (args) {
            this.setZoomValue(args.item.text);
            this.zoomContent = Math.round(vm.$refs.documenteditor.ej2Instances.zoomFactor * 100) + '%';

        },
        setZoomValue: function (text) {
            if (text.match('Fit one page')) {
                vm.$refs.documenteditor.ej2Instances.fitPage('FitOnePage');
            } else if (text.match('Fit page width')) {
                vm.$refs.documenteditor.ej2Instances.fitPage('FitPageWidth');
            } else {
                vm.$refs.documenteditor.ej2Instances.zoomFactor = parseInt(text, 0) / 100;
            }
        },
        pageKeydownEvent: function (e) {
            if (e.which === 13) {
                e.preventDefault();
                let pageNumber = parseInt(document.getElementById("editablePageNumber").textContent, 0);
                if (pageNumber > vm.$refs.documenteditor.ej2Instances.pageCount) {
                    statusBarComp.methods.updatePageNumber();
                } else {
                    vm.$refs.documenteditor.ej2Instances.scrollToPage(parseInt(document.getElementById("editablePageNumber").textContent, 0));
                }
                document.getElementById("editablePageNumber").contentEditable = 'false';
                if (document.getElementById("editablePageNumber").textContent === '') {
                    statusBarComp.methods.updatePageNumber();
                }
            }
            if (e.which > 64) {
                e.preventDefault();
            }
        },
        pageBlurEvent: function () {
            if (document.getElementById("editablePageNumber").textContent === '' || parseInt(document.getElementById("editablePageNumber").textContent, 0) > this.editorPageCount) {
                statusBarComp.methods.updatePageNumber();
            }
            document.getElementById("editablePageNumber").contentEditable = 'false';
        },
        pagerClickEvent: function () {
            this.updateDocumentEditorPageNumber();
        },
        updateDocumentEditorPageNumber: function () {
            document.getElementById("editablePageNumber").contentEditable = 'true';
            document.getElementById("editablePageNumber").focus();
            window.getSelection().selectAllChildren(document.getElementById("editablePageNumber"));
        },
        updatePageNumberOnViewChange: function (value) {
            document.getElementById("documenteditor_page_no").textContent = value;
        },
        updatePageNumber: function () {
            document.getElementById("documenteditor_page_no").textContent = vm.$refs.documenteditor.ej2Instances.selection.startPage.toString();
        }
    },
    mounted() {
        this.$nextTick(function () {
            vm.statusBarHeight = document.getElementById('documenteditor_statusbar').offsetHeight;
        });
        document.getElementById("editablePageNumber").addEventListener('keydown', function (e) { statusBarComp.methods.pageKeydownEvent(e); });
        document.getElementById("editablePageNumber").addEventListener('blur', function () { statusBarComp.methods.pageBlurEvent(); });
        document.getElementById("editablePageNumber").addEventListener('click', function () { statusBarComp.methods.pagerClickEvent(); });
    }
};

export default Vue.extend({
    components: {
	'titleBar': titleBarComp, 'statusBar': statusBarComp
    },
    data: function() {
       window.vm = this;    
    let style = 'height: ' + (window.innerHeight - (26 + 36)) + 'px;';
        return {
            documentTitle: 'Untitled Document',
            editorPageCount: 1,
            currentPageNumber: 1,
            styleObject: style,
            zoomFactor: "100%",
            editorHeight: "590px",
            numbericTextWidth: "120px"
        }
    },
    provide:{
        DocumentEditor: [Print]
    },
    methods: {
        fileChange: function (args) {
            if (args.target.files[0]) {
                let path = args.target.files[0];
                if (path.name.substr(path.name.lastIndexOf('.')) === '.sfdt') {
                    let waitingPopUp = document.getElementById('waiting-popup');
                    let overlay = document.getElementById('popup-overlay');
                    overlay.style.display = 'block';
                    waitingPopUp.style.display = 'block';
                    let fileReader = new FileReader();
                    fileReader.onload = (e) => {
                        let contents = e.target.result;
                        this.$refs.documenteditor.ej2Instances.open(contents);
                    };
                    fileReader.readAsText(path);
                    this.$refs.documenteditor.ej2Instances.documentName = path.name.substr(0, path.name.lastIndexOf('.'));
                    overlay.style.display = 'none';
                    waitingPopUp.style.display = 'none';
                } else {
                    this.loadFile(args.target.files[0]);
                }
            }
        },
        documentChangedEvent: function () {
            this.editorPageCount = this.$refs.documenteditor.ej2Instances.pageCount;
            this.documentTitle = this.$refs.documenteditor.ej2Instances.documentName === '' ? 'Untitled Document' : this.$refs.documenteditor.ej2Instances.documentName;
            setTimeout(() => { this.$refs.documenteditor.ej2Instances.scrollToPage(1); }, 10);
        },
        onPixelRatioChange: function(args) {
            this.$refs.documenteditor.ej2Instances.documentEditorSettings.printDevicePixelRatio = args.value;
        },
        updateContainerSize: function () {
            let containerPanel = document.getElementById('documenteditor_container_panel')
            // if (containerPanel) {
            let val = window.innerHeight - (document.getElementById('documenteditor_titlebar').offsetHeight
                + document.getElementById('documenteditor_statusbar').offsetHeight) + 'px';
            // }            
            return 'height: ' + val + ';';
        },
        viewChanged: function (args) {
            this.currentPageNumber = args.startPage;
        },
        zoomFactorChangeEvent: function () {
            this.zoomFactor = Math.round(this.$refs.documenteditor.ej2Instances.zoomFactor * 100) + '%';
        },
        loadFile: function (path) {
            let hostUrl = 'https://services.syncfusion.com/vue/production/api/documenteditor/import';
            let httpRequest = new XMLHttpRequest();
            httpRequest.open('POST', baseUrl, true);
            let waitingPopUp = document.getElementById('waiting-popup');
            let overlay = document.getElementById('popup-overlay');
            overlay.style.display = 'block';
            waitingPopUp.style.display = 'block';
            this.$refs.documenteditor.ej2Instances.isReadOnly = true;
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200 || httpRequest.status === 304) {
                        this.$refs.documenteditor.ej2Instances.open(httpRequest.responseText);
                        this.$refs.documenteditor.ej2Instances.isReadOnly = false;
                        overlay.style.display = 'none';
                        waitingPopUp.style.display = 'none';
                    } else {
                        this.$refs.documenteditor.ej2Instances.isReadOnly = false;
                        console.error(httpRequest.response);
                        overlay.style.display = 'none';
                        waitingPopUp.style.display = 'none';
                    }
                }
            };
            let formData = new FormData();
            formData.append('files', path);
            this.$refs.documenteditor.ej2Instances.documentName = path.name.substr(0, path.name.lastIndexOf('.'));
            httpRequest.send(formData);
        },
        loadDefaultDocument: function () {
            this.$refs.documenteditor.ej2Instances.pageOutline = '#E0E0E0';
            this.$refs.documenteditor.ej2Instances.documentEditorSettings.printDevicePixelRatio = 2;
            let waitingPopUp = document.getElementById('waiting-popup');
            let overlay = document.getElementById('popup-overlay');
            waitingPopUp.style.display = 'block';
            overlay.style.display = 'block';
            let defaultDocument = {"sfdt":"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"};
            this.$refs.documenteditor.ej2Instances.documentName = 'Print';
            this.$refs.documenteditor.ej2Instances.open(JSON.stringify(defaultDocument));
            overlay.style.display = 'none';
            waitingPopUp.style.display = 'none';
        }
    },
    mounted() {
	this.$refs.documenteditor.height = this.height;
    this.loadDefaultDocument();    
    }
});
</script>
<style>

body {
    margin: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

#documenteditor_container_panel {
    width: 100%;
    height: 100%;
    border: solid 1px #D9D9D9;
}

#documenteditor_statusbar {
    height: 28px;
    min-height: 28px;
    width: 100%;
    background: #F1F1F1;
    font-size: 12px;
    color: #515151;
    border: 0.5px solid #D4D4D4;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
}

.overlay {
    z-index: 10;
    display: none;
    position: fixed;
    background-color: #383838;
    height: 100%;
    width: 100%;
    opacity: .5;
    left: 0;
    top: 0;
}

.e-de-print-statusbar {
    background-color: #F1F1F1;
    border: 0;
    color: #000;
    float: right;
    height: 26px;
}

.e-bigger .e-de-print-statusbar {
    background-color: #F1F1F1;
    border: 0;
    color: #000;
    float: right;
    height: 26px;
    padding-top: 0;
}

#documenteditor_titlebar {
    height: 36px;
    line-height: 26px;
    width: 100%;
    font-size: 12px;
    padding-left: 15px;
    padding-right: 10px;
    font-family: inherit;
}

#documenteditor_title_contentEditor {
    height: 26px;
    max-width: 85%;
    width: auto;
    overflow: hidden;
    display: inline-block;
    padding-left: 4px;
    padding-right: 4px;
    margin: 5px;
}

.single-line {
    cursor: text !important;
    outline: none;
}

.single-line:hover {
    border-color: #e4e4e4 !important;
}

[contenteditable="true"].single-line {
    white-space: nowrap;
    border-color: #e4e4e4 !important;
}

#waiting-popup {
    width: 56px;
    height: 56px;
    position: absolute;
    top: calc(50% - 28px);
    left: calc(50% - 28px);
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    background-color: white;
    z-index: 20;
    display: none;
}

.circular {
    animation: rotate 2s linear infinite;
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.circle-path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
    stroke: #2B3481;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }
}

@font-face {
    font-family: 'Sample level icons FONT';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZQAgAGwAZQB2AGUAbAAgAGkAYwBvAG4AcwAgAEYATwBOAFQAUgBlAGcAdQBsAGEAcgBTAGEAbQBwAGwAZQAgAGwAZQB2AGUAbAAgAGkAYwBvAG4AcwAgAEYATwBOAFQAUwBhAG0AcABsAGUAIABsAGUAdgBlAGwAIABpAGMAbwBuAHMAIABGAE8ATgBUAFYAZQByAHMAaQBvAG4AIAAxAC4AMABTAGEAbQBwAGwAZQAgAGwAZQB2AGUAbAAgAGkAYwBvAG4AcwAgAEYATwBOAFQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAALU3Ryb2tlU3R5bGUIQm9va21hcmsHUGljdHVyZQRGaW5kDU91dHNpZGVCb3JkZXIHSnVzdGlmeQVDbG9zZQ5EZWNyZWFzZUluZGVudBVQaXhlbEFsaWduQ2VudGVyVGFibGUPQmFja2dyb3VuZENvbG9yC0FsaWduQm90dG9tCVBhZ2VTZXR1cA5IaWdobGlnaHRDb2xvcgtTdXBlcnNjcmlwdAVUYWJsZQRVbmRvC0luc2VydEJlbG93CVRvcEJvcmRlcgpQYWdlTnVtYmVyEEFsaWduQ2VudGVyVGFibGUOSW5jcmVhc2VJbmRlbnQEQm9sZAlBbGlnbkxlZnQGRm9vdGVyC0luc2VydFJpZ2h0CVVuZGVybGluZQpJbnNlcnRMZWZ0BExvY2sGSGVhZGVyDVN0cmlrZXRocm91Z2gIQ2xlYXJBbGwLUmlnaHRCb3JkZXIKQWxpZ25SaWdodARPcGVuClN0cm9rZVNpemUFUHJpbnQLRGVsZXRlVGFibGUJRm9udENvbG9yDUluc2lkZUJvcmRlcnMKRGVsZXRlUm93cwtMaW5lU3BhY2luZwxTaG93SGlkZVBhbmUUSW5zaWRlVmVydGljYWxCb3JkZXIIQWxpZ25UT3AEUmVkbwxCb3R0b21Cb3JkZXIDTmV3BVBhc3RlB0J1bGxldHMEQ2VsbA1EZWxldGVDb2x1bW5zCkFsbEJvcmRlcnMJU3Vic2NyaXB0CERvd25sb2FkDlRhYmxlT2ZDb250ZW50Bkl0YWxpYxZJbnNpZGVIb3Jpem9uZGFsYm9yZGVyC0xlZnRCb3JkZXJzCU51bWJlcmluZwRMaW5rC0FsaWduQ2VudGVyC0luc2VydEFib3ZlAAAAAAA=) format('truetype');
    font-weight: normal;
    font-style: normal;
}

[class^="e-de-icon-"],
[class*="e-de-icon-"] {
    font-family: 'Sample level icons FONT' !important;
}

.e-de-icon-Open:before {
    content: "\e721";
}

.e-de-icon-Print:before {
    content: "\e723";
}
/* end of styles */
</style>