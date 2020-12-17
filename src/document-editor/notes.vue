<template>
    <div class="control-section">

        <div class="sample-container">
        <div class="default-section">
          <div ref="de_titlebar" id="documenteditor_titlebar" class="e-de-ctn-title">
    <div v-on:keydown="titleBarKeydownEvent" v-on:click="titleBarClickEvent" class="single-line" id="documenteditor_title_contentEditor" title="Document Name. Click or tap to rename this document." contenteditable="false">
        <label v-on:blur="titleBarBlurEvent" id="documenteditor_title_name" :style="titileStyle" >{{documentName}}</label>
    </div>    
    <ejs-button id="de-print" :style="iconStyle" :iconCss="printIconCss" v-on:click.native="printBtnClick" title="Print this document (Ctrl+P).">Print</ejs-button>	
    <ejs-dropdownbutton ref="de-export" :style="iconStyle" :items="exportItems" :iconCss="exportIconCss" cssClass="e-caret-hide" content="Download" v-bind:select="onExport" :open="openExportDropDown" title="Download this document."></ejs-dropdownbutton>        
</div>
<ejs-documenteditorcontainer ref="doceditcontainer" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>            
        </div>
    </div>
        <div id="action-description">
    <p>This example demonstrates footnotes and endnotes support in DocumentEditor. You can add footnotes and endnotes to the document.</p>
</div>
<div id="description">
    <p style="display: block">In this example, you can find footnotes and endnotes feature in DocumentEditor.</p>
    <ul>
        <li>You can insert footnote and end note using toolbar options</li>
    </ul>
    <p style="display: block"> More information about the document editor features can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/document-editor">documentation section.</a>
    </p>
</div>
    </div>
</template>
<style>

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


[contenteditable="true"].single-line {
    white-space: nowrap;
    border-color: #e4e4e4 !important;
}

</style>
<script>
import Vue from "vue";
import { DocumentEditorContainerPlugin,DocumentEditorContainerComponent,Toolbar } from "@syncfusion/ej2-vue-documenteditor";
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { notes } from "./data";

Vue.use(DocumentEditorContainerPlugin);
Vue.use(DropDownButtonPlugin);


export default Vue.extend({
  components: {
    },
    data: function() {
        return {
          hostUrl : 'https://ej2services.syncfusion.com/production/web-services/',
          documentName : 'Footnotes and Endnotes',
          documentTitle: 'Untitled Document',
          iconStyle: 'float:right;background: transparent;box-shadow:none;border-color: transparent;border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400;font-family:inherit;',
            titileStyle: 'text-transform:capitalize;font-weight:400;font-family:inherit;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text',
            openIconCss: 'e-de-icon-Open e-de-padding-right',
            printIconCss: 'e-de-icon-Print e-de-padding-right',
            exportIconCss: 'e-de-icon-Download e-de-padding-right',
            exportItems: [
                { text: 'Microsoft Word (.docx)', id: 'word' },
                { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' }
            ]
        };
    },  
    provide:{
        DocumentEditorContainer:[Toolbar]
    },
      methods: {
        onExport: function (args) {
            switch (args.item.id) {
                case 'word':
                    this.save('Docx');
                    break;
                case 'sfdt':
                    this.save('Sfdt');
                    break;
            }
        },
        openExportDropDown: function () {
            // tslint:disable-next-line:max-line-length
            document.getElementById('word').setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
            // tslint:disable-next-line:max-line-length
            document.getElementById('sfdt').setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
        },
        save: function (format) {
            // tslint:disable-next-line:max-line-length
             this.$refs.doceditcontainer.ej2Instances.documentEditor.save( this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName === '' ? 'sample' :  this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName, format);
        },
        openBtnClick: function () {
            this.$refs.uploadDocument.click();
        },
        printBtnClick: function () {
            this.$refs.doceditcontainer.ej2Instances.documentEditor.print();
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
            this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName = document.getElementById("documenteditor_title_name").textContent;
        },
        titleBarClickEvent: function () {
            this.updateDocumentEditorTitle();
        },
        updateDocumentEditorTitle: function () {
            document.getElementById("documenteditor_title_contentEditor").contentEditable = 'true';
            document.getElementById("documenteditor_title_contentEditor").focus();
            window.getSelection().selectAllChildren(document.getElementById("documenteditor_title_contentEditor"));
        },
        documentChangedEvent: function () {
            var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;
            this.documentTitle = obj.documentName === '' ? 'Untitled Document' : obj.documentName;
            document.getElementById("documenteditor_title_name").textContent = obj.documentName ;
            setTimeout(() => { obj.scrollToPage(1); }, 10);
        }
    },
    mounted() {
        this.$nextTick(function () {
          var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;
          obj.open(JSON.stringify(notes));
          obj.documentName='Footnotes and Endnotes';
          this.$refs.doceditcontainer.ej2Instances.serviceUrl = this.hostUrl + 'api/documenteditor/';
          this.$refs.doceditcontainer.ej2Instances.documentChange = () => {
                this.documentChangedEvent();
            };
       });
    }
});
</script>