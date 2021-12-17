<template>
  <div>
    <div class="col-lg-12 control-section">
      <div id="signature-toolbar-control">
        <ejs-toolbar id="toolbar" :created="onCreate" :clicked="clicked">
          <e-items>
            <e-item text='Undo' prefixIcon='e-icons e-undo' tooltipText='Undo (Ctrl + Z)'></e-item>
            <e-item text='Redo' prefixIcon='e-icons e-redo' tooltipText='Redo (Ctrl + Y)' ></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Save (Ctrl + S)' :template= 'SaveTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Stroke Color' :template= 'StrokeColorTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Background Color' :template= 'BgColorTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item tooltipText= 'Stroke Width' :template= 'StrokeWidthTemplate'></e-item>
            <e-item type='Separator'></e-item>
            <e-item  text= 'Clear' prefixIcon= 'e-sign-icons e-clear' tooltipText= 'Clear'></e-item>
            <e-item tooltipText= 'Disabled' :template='DisableTemplate' align='Right'></e-item>
          </e-items>
        </ejs-toolbar>
        <div id="signature-control">
          <ejs-signature #signature id="signature" :maxStrokeWidth="maxStrokeWidth" style="height: 90%; width:100%;" :change="signChange"></ejs-signature>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the <b>Signature</b> component with toolbar items to illustrate the undo, redo, save with background, background color, stroke color, clear and disabled support of the <b>Signature</b> component.</p>
    </div>
    <div id="description">
      <p>The <code>Signature</code> component supports undo, redo, background color, stroke color, save, save with background, clear, and disabled functionalities.</p>
      <p>In this sample, each toolbar item illustrates the <code>Signature</code> component functionalities, which are listed below.</p>
      <ul>
          <li><p>Use <b>Undo</b> button or <b>Ctrl + Z</b> key to revert your signature.</p></li>
          <li><p>Use the <b>Redo</b> button or <b>Ctrl + Y</b> key to remake your reverted signature.</p></li>
          <li><p>Use the <b>Save</b> button or <b>Ctrl + S</b> key to store your signature as an image file.</p></li>
          <li><p><b>Stroke</b> color picker is used to apply the stroke color to the Signature component.</p></li>
          <li><p><b>Background</b> color picker is used to apply the background color to the Signature component.</p></li>
          <li><p>Use <b>Stroke Width</b> drop-down list values to change the signature stroke width.</p></li>
          <li><p>Use the <b>Clear</b> button to clear the signature.</p></li>
          <li><p>Check the <b>Disabled</b> checkbox to disable the Signature component.</p></li>
      </ul>
      <p>
        More information about Signature can be found in this
        <a
        target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/signature/getting-started"
        >documentation</a> section.
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { SignaturePlugin, ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { SplitButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { CheckBoxPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { getComponent, addClass, createElement } from '@syncfusion/ej2-base';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(SignaturePlugin);
Vue.use(ColorPickerPlugin);
Vue.use(ToolbarPlugin);
Vue.use(SplitButtonPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);


export default {
	data: function() {
    return {
      maxStrokeWidth: 2,
			SaveTemplate: function () {
				return {
					template: Vue.component('SplitButtonComponent', {
						template: '<ejs-splitbutton content="Save" id="save-option" :items="items" iconCss= "e-sign-icons e-save" :select="onSelect" disabled="true"></ejs-splitbutton>',
						data() { return {
							items: [
								{
									text: 'Png'
								},
								{
									text: 'Jpeg'
								},
								{
									text: 'Svg'
								}
							]};
						},
						methods: {
							onSelect: function(args) {
								var signature = getComponent(document.getElementById('signature'), 'signature');
    						signature.save(args.item.text, 'Signature');
							}
						}
      		})
    		}
  		},
			StrokeColorTemplate: function () {
				return {
					template: Vue.component('ColorPickerComponent', {
						template: '<ejs-colorpicker id="stroke-color" mode="Palette" cssClass="e-stroke-color" :change="strokeColorChanged"  :modeSwitcher= "false" :columns="4" :presetColors="customColors" :beforeTileRender="beforeTileRender" :showButtons= "false"></ejs-colorpicker>',
						data() { return {
              customColors:{
                'custom': ['#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
              }
            };},
						methods: {
              beforeTileRender: function(args) {
                args.element.classList.add('e-circle-palette');
                args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
              },
							strokeColorChanged: function(args) {
								var signature = getComponent(document.getElementById('signature'), 'signature');
								var strokecolor = getComponent(document.getElementById('stroke-color'), 'colorpicker');
								if (signature.disabled) {
									return;
                }
								var selElem= strokecolor.element.nextElementSibling.querySelector('.e-selected-color');
								selElem.style.borderBottomColor = args.currentValue.rgba;
								signature.strokeColor = args.currentValue.rgba;
							}
						}
					})
    		}
  		},
			BgColorTemplate: function () {
				return {
					template: Vue.component('ColorPickerComponent', {
						template: '<ejs-colorpicker id="bg-color" noColor="true" mode="Palette" cssClass="e-bg-color" :change="bgColorChanged" :modeSwitcher= "false" :columns="4" :presetColors="customColors" :beforeTileRender="beforeTileRender1" :showButtons= "false"></ejs-colorpicker>',
						data() { return {
              customColors:{
                'custom': ['#ffffff', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
              }
            };},
						methods: {
              beforeTileRender1: function(args) {
                args.element.classList.add('e-circle-palette');
                args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
              },
							bgColorChanged: function(args) {
								var signature = getComponent(document.getElementById('signature'), 'signature');
								var bgcolor = getComponent(document.getElementById('bg-color'), 'colorpicker');
								if (signature.disabled) {
									return;
                }
								var selElem= bgcolor.element.nextElementSibling.querySelector('.e-selected-color');
								signature.backgroundColor = args.currentValue.rgba;
                selElem.style.borderBottomColor = args.currentValue.rgba;
							}
						}
					})
    		}
  		},
			DisableTemplate: function () {
				return {
					template: Vue.component('CheckBoxComponent', {
						template: '<ejs-checkbox label="Disabled" :change="change1"></ejs-checkbox>',
						data() { return {
            };},
            methods: {
              change1: function(args) {
                var signature = getComponent(document.getElementById('signature'), 'signature');
                signature.disabled = args.checked;
              }
            }
					})
    		}
  		},
      StrokeWidthTemplate: function () {
				return {
					template: Vue.component('DropDownListComponent', {
						template: '<ejs-dropdownlist  :value="value" width="60" :dataSource="items":change="numChange"></ejs-dropdownlist>',
						data() { return {
              value: 2,
              items:[1, 2, 3, 4, 5]
            };},
            methods: {
              numChange: function(args) {
                var signature = getComponent(document.getElementById('signature'), 'signature');
                signature.maxStrokeWidth = args.value;
              }
            }
					})
    		}
  		}
    };
  },
  methods: {
		onCreate: function() {
			var strokeColor = getComponent(document.getElementById('stroke-color'), 'colorpicker');
			var bgColor = getComponent(document.getElementById('bg-color'), 'colorpicker');
			addClass([strokeColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
      addClass([bgColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
      document.getElementById('save-option').addEventListener('click', this.saveBtnClick);
      var cBtn = this.clearButton();
      cBtn.disabled = true;
      var toolbarlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
      for (var i = 0; i < toolbarlItems.length; i++) {
        if (toolbarlItems[i].children[0].classList.contains('e-undo')) {
          var undoButton = getComponent(toolbarlItems[i] , 'btn');
          undoButton.disabled = true;
        }
        if (toolbarlItems[i].children[0].classList.contains('e-redo')) {
          var redoButton= getComponent(toolbarlItems[i], 'btn');
          redoButton.disabled = true;
        }
      }
		},
		clicked:function(args) {
			var signature = getComponent(document.getElementById('signature'), 'signature');
      var saveBtn =  getComponent(document.getElementById("save-option"), 'split-btn');
			if (signature.disabled) {
        return;
      }
			switch (args.item.tooltipText) {
        case 'Undo (Ctrl + Z)':
          if (signature.canUndo()) {
            signature.undo();
            this.updateUndoRedo();
            this.updateSaveBtn();
          }
          break;
        case 'Redo (Ctrl + Y)':
          if (signature.canRedo()) {
            signature.redo();
            this.updateUndoRedo();
            this.updateSaveBtn();
          }
          break;
        case 'Clear':
          signature.clear();
          if (signature.isEmpty()) {
            var cBtn = this.clearButton();
            cBtn.disabled = true;
            saveBtn.disabled = true;
          }
          break;
        case 'Disabled':
          signature.disabled = !(args.item.template).checked;
      }
		},
    signChange: function() {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      var saveBtn =  getComponent(document.getElementById("save-option"), 'split-btn');
      if (!signature.isEmpty()) {
        var cBtn = this.clearButton();
        saveBtn.disabled = false;
        cBtn.disabled = false;
      }
      this.updateUndoRedo();
    },
    saveBtnClick: function() {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      signature.save();
    },
    clearButton: function() {
      var tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
      for (var i = 0; i < tlItems.length; i++) {
        if (tlItems[i].children[0].classList.contains('e-clear')) {
          var clrBtn = getComponent(tlItems[i], 'btn');
        }
      }
      return clrBtn;
    },
    updateSaveBtn: function() {
        var signature = getComponent(document.getElementById('signature'), 'signature');
        var saveBtn = getComponent(document.getElementById("save-option"), 'split-btn');
        if (signature.isEmpty()) {
            saveBtn.disabled = true;
        }
    },
    updateUndoRedo: function() {
      var signature = getComponent(document.getElementById('signature'), 'signature');
      var undoButton; var redoButton;
      var tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
      for (var i = 0; i < tlItems.length; i++) {
        if (tlItems[i].children[0].classList.contains('e-undo')) {
          undoButton = getComponent(tlItems[i], 'btn'); 
        }
        if (tlItems[i].children[0].classList.contains('e-redo')) {
          redoButton = getComponent(tlItems[i], 'btn');
        }
      }
      if (signature.canUndo()) {
        undoButton.disabled = false;
      } else {
        undoButton.disabled = true;
      }
      if (signature.canRedo()) {
        redoButton.disabled = false;
      } else {
        redoButton.disabled = true;
      }
    }
 	}
}
</script>

<style>

@font-face {
  font-family: 'font-icons';
  src:
  url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
  font-weight: normal;
  font-style: normal;
}

.e-sign-icons {
  font-family: 'font-icons' !important;
  font-size: 55px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#signature-toolbar-control {
  border: 1px solid lightgray;
}

.highcontrast #signature-toolbar-control {
  border: 1px solid white;
}

#signature-toolbar-control #toolbar {
  border: none;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
}

/* custom code start */

/* custom code start */
    #signature-toolbar-control #toolbar {
        height: 44px !important;
    }

    .e-bigger #signature-toolbar-control #toolbar {
        height: 54px !important;
    }

    .e-bigger .material #signature-toolbar-control div#toolbar,
    .e-bigger .material-dark #signature-toolbar-control div#toolbar {
        height: 57px !important;
    }

    .e-bigger .bootstrap4 #signature-toolbar-control div#toolbar,
    .e-bigger .bootstrap4-dark #signature-toolbar-control div#toolbar {
        height: 65px !important;
    }

    .bootstrap4 #signature-toolbar-control div#toolbar,
    .bootstrap4-dark #signature-toolbar-control div#toolbar,
    .bootstrap-dark #signature-toolbar-control div#toolbar,
    .bootstrap #signature-toolbar-control div#toolbar {
        height: 49px !important;
    }

.bootstrap5 #signature-toolbar-control #toolbar .e-split-btn,
.bootstrap5 #signature-toolbar-control #toolbar .e-dropdown-btn {
  color: #6c757d
}

.bootstrap4 #signature-toolbar-control #toolbar .e-split-btn,
.bootstrap4 #signature-toolbar-control #toolbar .e-dropdown-btn {
  color: #495057;
}

.highcontrast #signature-toolbar-control #toolbar .e-split-btn,
.highcontrast #signature-toolbar-control #toolbar .e-dropdown-btn {
  color: #fff;
}

.fabric #signature-toolbar-control #toolbar .e-split-btn,
.fabric #signature-toolbar-control #toolbar .e-dropdown-btn,
.bootstrap5 #signature-toolbar-control #toolbar .e-split-btn,
.bootstrap5 #signature-toolbar-control #toolbar .e-dropdown-btn,
.bootstrap4 #signature-toolbar-control #toolbar .e-split-btn,
.bootstrap4 #signature-toolbar-control #toolbar .e-dropdown-btn {
  background-color: transparent !important;
  border-color: lightgray;
}

.fabric-dark #signature-toolbar-control #toolbar .e-dropdown-btn,
.fabric-dark #signature-toolbar-control #toolbar .e-split-btn,
.bootstrap5-dark #signature-toolbar-control #toolbar .e-split-btn,
.bootstrap5-dark #signature-toolbar-control #toolbar .e-dropdown-btn,
.bootstrap4-dark #signature-toolbar-control #toolbar .e-split-btn,
.bootstrap4-dark #signature-toolbar-control #toolbar .e-dropdown-btn {
  background-color: transparent !important;
  border-color: gray;
}

#signature-toolbar-control .e-btn:disabled {
  opacity: 0.5 !important;
  pointer-events: none;
}

#signature-toolbar-control #signature-control {
  height: 300px;
  width: 100%;
  margin: 0;
}

#signature-toolbar-control #signature {
  border: none !important;
}

.e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn .e-selected-color {
  background: none;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  width: 14px;
  margin: 0px 2px;
  border-bottom-color: #ffffff;
}

.e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn .e-selected-color {
  background: none;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  width: 14px;
  margin: 0px 2px;
  border-bottom-color: #000000;
}

.e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn .e-selected-color .e-split-preview,
.e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn .e-selected-color .e-split-preview {
  display: none;
}

.e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn .e-selected-color::before {
  content: '\e707';
}

.e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn .e-selected-color::before {
  content: '\e704';
}

.bootstrap4 .e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn:hover .e-selected-color::before {
  color: black;
}

.bootstrap5 .e-colorpicker-wrapper.e-bg-color #bg-color+.e-split-btn-wrapper .e-split-btn:hover .e-selected-color::before {
  color: grey;
}

.bootstrap4 .e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn:hover .e-selected-color::before {
  color: black;
}

.bootstrap5 .e-colorpicker-wrapper.e-stroke-color #stroke-color+.e-split-btn-wrapper .e-split-btn:hover .e-selected-color::before {
  color: grey;
}

#signature-toolbar-control .e-clear::before {
  content: '\e706';
}

#signature-toolbar-control .e-save::before {
  content: '\e701';
}

/* Circle palette customization */
.e-container .e-palette .e-circle-palette {
  border: 0;
  height: 32px;
  width: 32px;
  border-radius: 20px;
  margin: 4px;
}
.e-bigger .e-container .e-palette .e-circle-palette {
  height: 32px;
  width: 32px;
}
.e-container .e-palette .e-circle-palette:hover {
  box-shadow: none;
  transform: scale(1.2);
  transition: transform .2s ease-out;
}

.e-circle-palette .e-circle-selection {
  height: 32px;
  width: 32px;
  border-radius: 20px;
  display: inline-block;
  transform: scale(0);
  transition: transform 1.2s ease-in;
}

.e-circle-palette.e-selected .e-circle-selection {
  transform: scale(0.8);
  background-color: #fff;
  transition: transform .2s ease-out;
}

#circle-palette+.e-container,
#scroll-palette+.e-container {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

.e-container .e-palette .e-circle-palette.e-selected {
    outline: none;
}

.e-bg-color .e-circle-palette.e-nocolor-item.e-selected .e-circle-selection {
    background: transparent;
}

.e-bg-color .e-circle-palette.e-nocolor-item.e-selected {
    border: 3px solid lightgray;
}

/* custom code end */

</style>
