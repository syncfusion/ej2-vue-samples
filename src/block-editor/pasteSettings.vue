<template>
  <div class="control-section pastecleanupsample">
    <div class="col-lg-8 control-section sb-property-border">
      <div class="blockeditor-paste">
        <ejs-blockeditor
          id="block-editor"
          ref="blockEditor"
          height= "600px"
          :blocks="blocks"
          :pasteCleanupSettings="pasteSettings"
        />
      </div>
    </div>
    <div class="col-lg-4 property-section pastesettingPanel">
        <div id="property" title="Properties" class="property-panel-table">
          <table>
            <tbody>
              <tr>
                <td>
                  <div>Format Option</div>
                </td>
                <td>
                  <div>
                    <ejs-dropdownlist
                      ref="formatOptionInstance"
                      :dataSource="formatData"
                      :fields="fields"
                      :popupHeight="height"
                      :value="selectedFormat"
                      @change="formatChange"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Denied Tags</div>
                </td>
                <td>
                  <div>
                     <ejs-textbox
                      ref="deniedTagsInstance"
                      v-model="deniedTagsText"
                      cssClass="e-input"
                      placeholder="'img[!href]', 'h1'"
                      @blur="deniedTagChange"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Allowed Style Properties</div>
                </td>
                <td>
                  <div>
                    <ejs-textbox
                      ref="allowedStylesInstance"
                      v-model="allowedStylesText"
                      cssClass="e-input"
                      placeholder="'href', 'style'"
                      @blur="allowStyleChange"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the Block Editor <code>pasteCleanupSettings</code> property allows you to define various options to control how content is pasted into the editor.
      </p>
    </div>
    <div id="description">
      <p>The following settings are available to cleanup the content in pasteCleanup settings property:</p>
      <ul>
        <li>Select any option in <code>Format Option</code> drop down list for the paste content.</li>
        <ul>
          <li>Select the <code>Plain Text</code> option to paste the content as plain text.</li>
          <li>Select the <code>Keep Format</code> option to keep the same format in the copied content.</li>
        </ul>
        <li>Fill the <code>denied tags</code> text box to ignore the tags when pasting HTML content.</li>
        <ul>
          <li><code>['a[!href]']</code> - paste the content by filtering anchor tags that don’t have the 'href' attribute.</li>
          <li><code>['a[href, target]']</code> - paste the content by filtering anchor tags that have the 'href' and 'target' attributes</li>
        </ul>
        <li>Fill the <code>allowed style</code> properties to paste the content by accepting these style attributes and removing other attributes. For example:</li>
        <ul>
          <li><code>['color', 'margin']</code> - This will allow only the style properties 'color' and 'margin' in each pasted element.</li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import * as data from './blockData.json';

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-textbox': TextBoxComponent
  },
  data() {
    return {
      blocks: data['blockDataPaste'],
      pasteSettings: {
        deniedTags: ['script', 'iframe']
      },
      height: '200px',
      // Your format options
      formatData: [
        { Id: 'plainText', Format: 'Plain Text' },
        { Id: 'keepFormat', Format: 'Keep Format' }
      ],
      fields: { text: 'Format', value: 'Id' },
      selectedFormat: 'keepFormat',
      deniedTagsText: '',
      allowedStylesText: ""
    };
  },
  methods: {
    formatChange(args) {
      const selected = args.value;
      if (selected === 'plainText') {
        this.pasteSettings.plainText = true;
        this.pasteSettings.keepFormat = false;
      } else if (selected === 'keepFormat') {
        this.pasteSettings.plainText = false;
        this.pasteSettings.keepFormat = true;
      }
      this.selectedFormat = selected;
      this.$refs.blockEditor.ej2Instances.dataBind();
    },
    deniedTagChange() {
       const value = this.deniedTagsText;
      if (!value) {
        this.pasteSettings.deniedTags = [];
      } else {
        let arrayValue = value.split(',').map(item => item.trim().replace(/^['"]|['"]$/g, ''));
        this.pasteSettings.deniedTags = arrayValue.filter(prop => prop !== '');
      }
      this.$refs.blockEditor.ej2Instances.dataBind();
    },
    allowStyleChange() {
      const value = this.allowedStylesText;
      if (!value) {
        this.pasteSettings.allowedStyles = [];
        this.$refs.blockEditor.ej2Instances.dataBind();
        return;
      }
      const arrayValue = value.split(',').map(item => item.trim().replace(/^['"]|['"]$/g, ''));
      this.pasteSettings.allowedStyles = arrayValue.filter(prop => prop !== '');
      this.$refs.blockEditor.ej2Instances.dataBind();
    }
  }
};
</script>

<style>
.blockeditor-paste {
width: 100%;
margin: 0 auto;
}

.pastecleanupsample .pastesettingPanel .property-panel-table div
{
    padding:unset !important;
}
</style>