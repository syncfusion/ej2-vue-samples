<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteObj" :value="value" :created="onCreate"  placeholder="Type @ to get the employee list with their email IDs."></ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
      <p>This sample demonstrates how to integrate the third-party library `Tribute JS` (Mentions library) into the Rich Text Editor. Type @ to open autocomplete popup with employee list.</p>
</div>

<div id="description">
    <p>The Rich Text Editor allows you to integrate the third-party libraries such as Tribute JS or At JS for mentions. If you want to tag or address someone directly during a conversation, the mentions library will be helpful. Type @ to show autocomplete
        popup with a list of matching items based on the provided key-value pair.</p>
    <p>For example, type '@' in the above sample to show the employee list with their mail IDs in the autocomplete popup.</p>
</div>
</template>
<style>
    .tribute-container {
        position: absolute;
        top: 0;
        left: 0;
        height: auto;
        max-height: 300px;
        max-width: 500px;
        overflow: auto;
        display: block;
        z-index: 999999;
    }
    
    .tribute-container ul {
        margin: 0;
        margin-top: 2px;
        padding: 0;
        list-style: none;
        background: #efefef;
    }
    
    .tribute-container li {
        padding: 5px 5px;
        cursor: pointer;
    }
    
    .tribute-container li.highlight {
        background: #ddd;
    }
    
    .tribute-container li span {
        font-weight: bold;
    }
    
    .tribute-container li.no-match {
        cursor: default;
    }
    
    .tribute-container .menu-highlighted {
        font-weight: bold;
    }
</style>

<script>
import Vue from "vue";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table } from "@syncfusion/ej2-vue-richtexteditor";
import Tribute  from 'tributejs';
Vue.use(RichTextEditorPlugin);

export default Vue.extend({
    data: function() {
        return {
            showCharCount: true,
            myCodeMirror: '',
            maxLength: 2000,
        };
    },
    methods: {
     onCreate: function(e) {
        var tribute  = new Tribute({
            values: [
                { key: 'Phil Heartman', value: 'pheartman' },
                { key: 'Gordon Ramsey', value: 'gramsey' },
                { key: 'Jordan Humphreys', value: 'jhumphreys' },
                { key: 'Howard Johnson', value: 'hjohnson' }
            ]
          })  
          tribute.attach(this.$refs.rteObj.ej2Instances.inputElement);
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table]
    }
});
</script>