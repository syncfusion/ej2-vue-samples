<template>
<div>
	<div class="col-lg-12 control-section">
	    <div id="mention-disabled">
		<table>
		    <tr>
			<td>
			    <label id="disabled-size">Compose your content</label>
			    <div id="disabledMention" placeholder = "Type @ and tag user"></div>
			    <ejs-mention id='disabled' :target='target' mentionChar='@' :dataSource='data' :fields='mentionfields' allowSpaces='true' :itemTemplate="'iTemplate'" :displayTemplate="'dTemplate'" noRecordsTemplate="No item related to the search" popupWidth="250px" popupHeight="200px">
				<template v-slot:iTemplate="{data}">
				    <div class="disabled_listItems"><img class="mentionEmpImage" :src="data.Eimg" alt="employee"/><span class="person">{{data.Name}}</span><span class="email">{{data.EmailId}}</span></div>
				</template>
				<template v-slot:dTemplate="{data}">{{data.Name}}</template>
			    </ejs-mention>
			</td>
		    </tr>
		</table>
	    </div>
	</div>

    <div id="action-description">
        <p>This sample showcases the disabled items of the Mention component. Type the <code>@</code> character in the editable element and you will notice that the disabled items are greyed out and cannot be selected.</p>
    </div>
    <div id="description">
        <p>The Mention provides options for individual items to be in either an enabled or disabled state for specific scenarios. Once an item is disabled, it cannot be select a particular item. To configure the disabled item columns, use the <b>fields.disabled</b> property.</p>
    </div>
</div>
</template>

<script>
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';

export default {
        components: {
            'ejs-mention': MentionComponent
        },
        data: function() {
        return {
          mentionfields: { text: 'Name', disabled: 'State' },
          data: data['emailData2'],
          target: "#disabledMention",
        };
    }
}
</script>

<style scoped>

    #mention-disabled #disabledMention {
        min-height: 100px;
        border: 1px solid #D7D7D7;
        width: 600px;
        padding: 8px;
        font-size: 14px;
        border-radius: 4px;
    }
    #mention-disabled {
        margin: 0 auto;
        width: 600px;
    }
    .disabled_listItems {
		padding-left: 12px;
		vertical-align: middle;
		width: 80%;
	}
	#disabledMention_popup .e-dropdownbase .e-list-item {
    	line-height: 25px;
    	text-indent: 8px;
	}
	#disabledMention_popup .mentionEmpImage {
		width: 44px;
		float: left;
	}
	#disabledMention_popup .person {
		font-size: 16px;
		margin-top: 8px;
	}
    #disabledMention_popup .e-dropdownbase .e-list-item * {
        display: block;
    }
    div#disabledMention[placeholder]:empty:before {
        content: attr(placeholder);
        color: #555;
    }
    #mention-disabled #disabled-size{
        font-size: 15px;
		font-weight: 600;
    }
    @media screen and (max-width: 1010px) {
        #mention-disabled #disabledMention,
        #mention-disabled, #mention-disabled table {
            width: 100%;
        }
    }
    
</style>
