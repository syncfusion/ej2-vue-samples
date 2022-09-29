<template>
<div>
	<div class="col-lg-12 control-section">
	    <div id="mention-template">
		<table>
		    <tr>
			<td>
			    <label id="template-size">Compose your content</label>
			    <div id="templateMention" placeholder = "Type @ and tag user"></div>
			    <ejs-mention id='template' :target='target' mentionChar='@' :dataSource='data' :fields='mentionfields' allowSpaces='true' :itemTemplate="'iTemplate'" :displayTemplate="'dTemplate'" noRecordsTemplate="No item related to the search" popupWidth="250px" popupHeight="200px">
				<template v-slot:iTemplate="{data}">
				    <div class="template_listItems"><img class="mentionEmpImage" :src="data.Eimg" alt="employee"/><span class="person">{{data.Name}}</span><span class="email">{{data.EmailId}}</span></div>
				</template>
				<template v-slot:dTemplate="{data}">{{data.Name}}</template>
			    </ejs-mention>
			</td>
		    </tr>
		</table>
	    </div>
	</div>

	<div id="action-description">
	    <p>This sample demonstrates the template functionalities of the Mention component. Type the <code>@</code> character in the editable element and select or tag the user from the customized suggestion list.</p>
	</div>
	<div id="description">
	    <p>In the above sample, for the template rendering the following are used</p>
	    <ul>
		<li><code>itemTemplate</code> - It is used for displaying customized lists.</li>
		<li><code>displayTemplate</code> - It is used to display, how the the value selected is previewed in the element.</li>
		<li><code>noRecordsTemplate</code> - It is used to display a message if a user searches for irrelevant data in the data source bound.</li>
	    </ul>
	</div>
</div>
</template>

<script>
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);
import * as data from './dataSource.json';

export default {
        data: function() {
        return {
          mentionfields: { text: 'Name' },
          data: data['emailData'],
          target: "#templateMention",
        };
    }
}
</script>

<style scoped>

    #mention-template #templateMention {
        min-height: 100px;
        border: 1px solid #D7D7D7;
        width: 600px;
        padding: 8px;
        font-size: 14px;
        border-radius: 4px;
    }
    #mention-template {
        margin: 0 auto;
        width: 600px;
    }
    .template_listItems {
		padding-left: 12px;
		vertical-align: middle;
		width: 80%;
	}
	#templateMention_popup .e-dropdownbase .e-list-item {
    	line-height: 25px;
    	text-indent: 8px;
	}
	#templateMention_popup .mentionEmpImage {
		width: 44px;
		float: left;
	}
	#templateMention_popup .person {
		font-size: 16px;
		margin-top: 8px;
	}
    #templateMention_popup .e-dropdownbase .e-list-item * {
        display: block;
    }
    div#templateMention[placeholder]:empty:before {
        content: attr(placeholder);
        color: #555;
    }
    #mention-template #template-size{
        font-size: 15px;
		font-weight: 600;
    }
    @media screen and (max-width: 1010px) {
        #mention-template #templateMention,
        #mention-template, #mention-template table {
            width: 100%;
        }
    }
    
</style>
