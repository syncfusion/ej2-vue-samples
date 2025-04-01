<template>
  <div id="defaultRTE">
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor
            ref="rteObj"
            id="mailMergeEditor"
            :value="value"
            :saveInterval="saveInterval"
            :toolbarSettings="toolbarSettings"
            :actionBegin="onActionBegin"
            :actionComplete="OnActionComplete"
          ></ejs-richtexteditor>
          <button
            class="e-control e-lib e-btn e-formats-tbar-btn e-rte-elements e-tbar-btn e-tbar-btn"
            tabindex="-1"
            id="merge_data"
            style="width: 100%"
            @click="onClickHandler"
          >
            <span style="display: inline-flex"
              ><span class="e-tbar-btn-text">Merge Data</span></span
            >
          </button>
          <ejs-dropdownbutton
            id="insertField"
            :items="itemsName"
            :content="dropdownContent"
            cssClass="e-rte-dropdown-btn e-rte-dropdown-popup e-rte-dropdown-items e-rte-elements e-tbar-btn"
            @select="onItemSelect($event)"
          ></ejs-dropdownbutton>
        </div>
        <ejs-mention
          ref="mentionObj"
          id="mentionObj"
          target="#mailMergeEditor_rte-edit-view"
          :mentionChar="mentionChar"
          :allowSpaces="true"
          :dataSource="mergeData"
          :fields="fieldsData"
          popupWidth="250px"
          popupHeight="200px"
          :displayTemplate="'displayTemplate'"
        >
          <template v-slot:displayTemplate="{ data }">
            <span>{{ formatMentionTemplate(data.value) }}</span>
          </template>
        </ejs-mention>
      </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates how to implement a mail merge in the Rich Text Editor sample by inserting placeholders into the editor using custom toolbar item, which are then replaced with actual data to create personalized content.</p>
    </div>
    <div id="description">
      <p>
       The mail merge in the Rich Text Editor sample enables users to insert placeholders for personalized content. These placeholders are
        replaced with actual data when generating the final content, making it
        easy to create customized letters, invoices, and more.
      </p>
      <p>The following configurations are used in this sample:</p>
      <ul>
        <li>
          The <code>Button</code> and <code>DropDownButton</code> components are
          configured in the custom toolbar of the Rich Text Editor.
        </li>
        <li>
          The <code>Button</code> click action performs the merge of the editor
          placeholder content.
        </li>
        <li>
          The <code>DropDownButton</code> component provides a list of available
          fields, such as "First Name" or "Email Address." A selected field from
          this dropdown is inserted into the editor as a placeholder.
        </li>
        <li>
          The <code>Mention</code> component allows insertion of merge fields by
          pressing the mention character, such as <code>{"{"}{"{"}</code>, in
          the editor and selecting an item. These chips make it easy to see and
          select fields directly within the content.
        </li>
      </ul>
      <p><b>Injecting Modules</b></p>
      <p>
        Rich Text Editor features are divided into individual modules.In this
        demo, we have used the following injectable services:
        <code>ToolbarService </code>, <code>LinkService</code>,
        <code>ImageService </code>, <code> HtmlEditorService </code>,
        <code>QuickToolbarService</code>, <code>TableService </code>, and
        <code> PasteCleanupService </code>. These services are included in the
        <code>&#64;NgModule.providers</code>
        section of your Angular module.
      </p>
    </div>
  </div>
</template>

<style scoped>
 .tailwind3 #merge_data,
 .tailwind3-dark #merge_data {
      font-weight:400;
  }
</style>

<script>
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  QuickToolbar,
  HtmlEditor,
  Table,
  Video,
  NodeSelection,
  Audio,
  PasteCleanup,
} from '@syncfusion/ej2-vue-richtexteditor';
import { MentionComponent } from '@syncfusion/ej2-vue-dropdowns';
import { DropDownButtonComponent } from '@syncfusion/ej2-vue-splitbuttons';
//   import { ItemModel } from '@syncfusion/ej2-splitbuttons';
export default {
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
    'ejs-mention': MentionComponent,
    'ejs-dropdownbutton': DropDownButtonComponent,
  },
  data() {
    return {
      selection: new NodeSelection(),
      saveInterval: 1,
      ranges: null,
      saveSelection: null,
      value: `<p>Dear <span contenteditable="false" class="e-mention-chip"><span>{{FirstName}}</span></span> <span contenteditable="false" class="e-mention-chip"><span>{{LastName}}</span></span>,</p>
    <p>We are thrilled to have you with us! Your unique promotional code for this month is: <span contenteditable="false" class="e-mention-chip"><span>{{PromoCode}}</span></span>.</p>
    <p>Your current subscription plan is: <span contenteditable="false" class="e-mention-chip"><span>{{SubscriptionPlan}}</span></span>.</p>
    <p>Your customer ID is: <span contenteditable="false" class="e-mention-chip"><span>{{CustomerID}}</span></span>.</p>
    <p>Your promotional code expires on: <span contenteditable="false" class="e-mention-chip"><span>{{ExpirationDate}}</span></span>.</p>
    <p>Feel free to browse our latest offerings and updates. If you need any assistance, don't hesitate to contact us at <a href="mailto:{{SupportEmail}}"><span contenteditable="false" class="e-mention-chip"><span>{{SupportEmail}}</span></span></a> or call us at <span contenteditable="false" class="e-mention-chip"><span>{{SupportPhoneNumber}}</span></span>.</p>
    <p>Best regards,<br>The <span contenteditable="false" class="e-mention-chip"><span>{{CompanyName}}</span></span> Team</p>`,

      dropdownContent: ` <span style="display:inline-flex;">
    <span class="e-rte-dropdown-btn-text">Insert Field</span>
  </span>`,

      itemsName: [
        { text: 'First Name' },
        { text: 'Last Name' },
        { text: 'Support Email' },
        { text: 'Company Name' },
        { text: 'Promo Code' },
        { text: 'Support Phone Number' },
        { text: 'Customer ID' },
        { text: 'Expiration Date' },
        { text: 'Subscription Plan' },
      ],
      placeholderData: {
        FirstName: 'John',
        LastName: 'Doe',
        PromoCode: 'ABC123',
        SubscriptionPlan: 'Premium',
        CustomerID: '123456',
        ExpirationDate: '2024-12-31',
        SupportEmail: 'support@example.com',
        SupportPhoneNumber: '+1-800-555-5555',
        CompanyName: 'Example Inc.',
      },
      textToValueMap: {
        'First Name': 'FirstName',
        'Last Name': 'LastName',
        'Support Email': 'SupportEmail',
        'Company Name': 'CompanyName',
        'Promo Code': 'PromoCode',
        'Support Phone Number': 'SupportPhoneNumber',
        'Customer ID': 'CustomerID',
        'Expiration Date': 'ExpirationDate',
        'Subscription Plan': 'SubscriptionPlan',
      },
      mergeData: [
        { text: 'First Name', value: 'FirstName' },
        { text: 'Last Name', value: 'LastName' },
        { text: 'Support Email', value: 'SupportEmail' },
        { text: 'Company Name', value: 'CompanyName' },
        { text: 'Promo Code', value: 'PromoCode' },
        { text: 'Support Phone Number', value: 'SupportPhoneNumber' },
        { text: 'Customer ID', value: 'CustomerID' },
        { text: 'Expiration Date', value: 'ExpirationDate' },
        { text: 'Subscription Plan', value: 'SubscriptionPlan' },
      ],
      fieldsData: { text: 'text', value: 'value' },
      mentionChar: '{{',
      toolbarSettings: {
        items: [
          'Bold',
          'Italic',
          'Underline',
          '|',
          'Formats',
          'Alignments',
          'OrderedList',
          'UnorderedList',
          '|',
          'CreateLink',
          'Image',
          'CreateTable',
          '|',
          { tooltipText: 'Merge Data', template: '#merge_data' },
          { tooltipText: 'Insert Field', template: '#insertField' },
          'SourceCode',
          '|',
          'Undo',
          'Redo',
        ],
      },
    };
  },
  provide() {
    return {
      richtexteditor: [
        Toolbar,
        Link,
        Image,
        QuickToolbar,
        HtmlEditor,
        Table,
        Video,
        Audio,
        PasteCleanup,
      ],
    };
  },
  methods: {
    formatMentionTemplate(value) {
      return `{{${value}}}`;
    },
    displayTemplate(data) {
      return `${data.value}`;
    },
    onItemSelect: function (args) {
      if (args && args.item && args.item.text) {
        const value = this.textToValueMap[args.item.text.trim()];
        if (value && this.$refs.rteObj && this.$refs.rteObj.ej2Instances) {
          this.$refs.rteObj.ej2Instances.formatter.editorManager.nodeSelection.restore();
          this.$refs.rteObj.ej2Instances.executeCommand(
            'insertHTML',
            `<span contenteditable="false" class="e-mention-chip">{{${value}}}</span>`,
            { undo: true }
          );
        } else {
          console.log(
            'No matching value found in textToValueMap or RichTextEditor is not initialized.'
          ); // Debug log
        }
      }
    },
    onActionBegin(args) {
      if (
        args.requestType === 'EnterAction' &&
        this.$refs.mentionObj &&
        this.$refs.mentionObj.ej2Instances &&
        this.$refs.mentionObj.ej2Instances.element.classList.contains(
          'e-popup-open'
        )
      ) {
        args.cancel = true;
      }
    },
    OnActionComplete(e) {
            if (e.requestType === 'SourceCode') {
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#merge_data').parentElement.classList.add('e-overlay');
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#insertField').parentElement.classList.add('e-overlay');
        } else if (e.requestType === 'Preview') {
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#merge_data').parentElement.classList.remove('e-overlay');
            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#insertField').parentElement.classList.remove('e-overlay');
        }
      },
    onClickHandler() {
      if (this.$refs.rteObj && this.$refs.rteObj.ej2Instances) {
        let editorContent = this.$refs.rteObj.ej2Instances.value || '';
        let mergedContent = this.replacePlaceholders(
          editorContent,
          this.placeholderData
        );
        if (
          this.$refs.rteObj.ej2Instances.formatter.getUndoRedoStack() &&
          this.$refs.rteObj.ej2Instances.formatter.getUndoRedoStack().length ===
            0
        ) {
          this.$refs.rteObj.ej2Instances.formatter.saveData();
        }
        this.value = mergedContent;
        this.$refs.rteObj.ej2Instances.formatter.saveData();
        this.$refs.rteObj.trigger('change');
      } else {
        console.log('MailMergeEditor is not initialized.');
      }
    },
    replacePlaceholders(template, data) {
      return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
        const value = data[key.trim()];
        return value !== undefined ? value : match;
      });
    },
  },
};
</script>
