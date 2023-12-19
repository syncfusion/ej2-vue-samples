<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor id="mention_integration"  placeholder="Type @ and tag the name" :actionBegin="onActionBegin">
                        <p>Hello <span contenteditable="false" class="e-mention-chip"><a href="mailto:maria@gmail.com" title="maria@gmail.com">@Maria</a></span>&#8203;</p>
                        <p>Welcome to the mention integration with rich text editor demo. Type <code>@</code> character and tag user from the suggestion list. </p>
                    </ejs-richtexteditor>
                </div>
                <ejs-mention id="mentionEditor" target="#mention_integration_rte-edit-view" :suggestionCount="8" :showMentionChar="false" :allowSpaces="true" :dataSource="data" :fields="fieldsData" 
                popupWidth='250px' popupHeight='200px' :itemTemplate="'iTemplate'" :displayTemplate="'dTemplate'">
                    <template v-slot:iTemplate="{data}">
                       <table><tr><td><div id="mention-TemplateList"><img class="mentionEmpImage" :src="data.Eimg" alt="employee" /><span :class="'e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom'+ data.Status"></span></div></td><td class="mentionNameList"><span class="person">{{data.Name}}</span><span class="email">{{data.EmailId}}</span></td></tr></table>
                    </template>
                    <template v-slot:dTemplate="{data}">                
                            <a :href="'mailto:' + data.EmailId" :title="data.EmailId">@{{data.Name}}</a>
                    </template>
                </ejs-mention>
            </div>
        </div>
        <div id="action-description">
            <p>This example shows how to integrate @mention component within Rich Text Editor component. Type <code>@</code> character and select a user from the suggestion list.</p>
        </div>

        <div id="description">
            <p> The @Mention is a component used to display a list of items that users can select or tag from the suggested list. In this demo, configured the following properties with popup dimensions.</p>
            <ul>
                <li><code>allowSpaces</code> - Allows to search a word with space.</li>
                <li><code>suggestionCount</code> - Control the items in suggestion list.</li>
                <li><code>itemTemplate</code> - Used to display the customized appearance in suggestion list.</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './data-source.json';

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent,
      'ejs-mention': MentionComponent
    },
    data: function() {
        return {
          data: data.emailData,
          fieldsData: { text: 'Name' },
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    },
    methods: {
       onActionBegin: function(args) {
            if (args.requestType === 'EnterAction') {
                args.cancel = true;
            }
        }
    }
}
</script>

<style scoped>
    #mention-TemplateList {
        position: relative;
        display: inline-block;
        padding: 2px;
    }
    .mentionNameList .person, .mentionNameList.email {
        display: block;
        line-height: 20px;
        text-indent: 5px;
    }
    .mentionNameList .person {
        font-size: 16px;
    }
    .mentionEmpImage {
        display: inline-block;
        width: 46px;
        height: 46px;
        padding: 3px;
        border-radius: 25px;
    }
    #mention-TemplateList .e-badge-success {
        left: 76%;
        bottom: 4px;
        top: auto;
    }
    #mention_integration_rte-edit-view_popup .e-dropdownbase .e-list-item {
        line-height: 8px;
    }
    #mention-TemplateList .e-badge-success {
        background-color: #4d841d;
		color: #fff;
    }
    #mention-TemplateList .e-badge-success.away {
        background-color: #fedd2d;
		color: #fff;
    }
	#mention-TemplateList .e-badge-success.busy {
        background-color: #de1a1a;
		color: #fff;
    }
    #mention-TemplateList .e-badge.e-badge-dot {
        height: 10px;
        width: 10px;
    }
    #mention_integration .e-mention-chip{
        cursor: pointer;
    }
</style>
