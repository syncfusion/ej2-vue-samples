<template>
    <div class="col-lg-12 control-section contextual-tab">
        <div id="ribbonContainer">
            <div id="ribbon">
                <ejs-ribbon id="contextualTab" ref="ribbonContextualTab" :enablePersistence="true" :fileMenu="fileSettings" :launcherIconClick="launcherIconClicked">
                    <e-ribbon-tabs>
                        <e-ribbon-tab header="Home">
                        <e-ribbon-groups>
                            <e-ribbon-group header="Clipboard" id="clipboard" groupIconCss="e-icons e-paste" :showLauncherIcon="true" >
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" :disabled="true" id="default-pastebtn" :allowedSizes="largeSize" :splitButtonSettings="pasteSettigs" >
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :buttonSettings="cutButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="copyButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="formatButton">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Font" orientation="Row" overflowHeader="More Font Options" :enableGroupOverflow="true" :isCollapsible="false" groupIconCss="e-icons e-bold" cssClass="font-group" >
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
                                    </e-ribbon-item>
                                    <e-ribbon-item type="ComboBox" :comboBoxSettings="sizeOptions">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="GroupButton" allowedSizes="Small" :groupButtonSettings="groupButtonMultiple"></e-ribbon-item>
                                    <e-ribbon-item type="ColorPicker" :displayOptions="colorPickerDisplayMode" allowedSizes="Small" :colorPickerSettings="colorPicker" >
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Paragraph" orientation="Row" groupIconCss="e-icons e-align-center" >
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" allowedSizes="Small" :buttonSettings="decreaseIndent">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" allowedSizes="Small" :buttonSettings="increaseIndent">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" allowedSizes="Small" :buttonSettings="paragraphBtn">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="GroupButton" allowedSizes="Small" :groupButtonSettings="groupButtonSingle"></e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Editing" orientation="Row" groupIconCss="e-icons e-edit" >
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" :splitButtonSettings="searchOptions" >
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="replaceButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="SplitButton" :splitButtonSettings="selectOptions" >
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Voice" :isCollapsible="false" groupIconCss="sf-icon-dictate" >
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" :allowedSizes="largeSize" :splitButtonSettings="dictateOptions" >
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Editor" :isCollapsible="false" groupIconCss="sf-icon-editor" >
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="editorButton" >
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Reuse Files" :isCollapsible="false" groupIconCss="sf-icon-reuse" >
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :disabled="true" :allowedSizes="largeSize" :buttonSettings="reuseButton">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                        </e-ribbon-groups>
                        </e-ribbon-tab>
                        <e-ribbon-tab header="Insert">
                        <e-ribbon-groups>
                            <e-ribbon-group header="Tables" :isCollapsible=false>
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" :allowedSizes="largeSize" :dropDownSettings="tableSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Illustrations" id="illustration" overflowHeader="Illustrations" :showLauncherIcon=true orientation="Row" :enableGroupOverflow=true groupIconCss="e-icons e-image">
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item id="pictureddl" type="DropDown" :dropDownSettings="pictureSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="DropDown" :dropDownSettings="shapeSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="modelSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="artSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="chartSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="screenshotSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Header & Footer" id="header_footer" :showLauncherIcon=true orientation="Column" groupIconCss="e-icons e-table">
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" :dropDownSettings="headerSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="DropDown" :dropDownSettings="footerSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="DropDown" :dropDownSettings="pageSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Comments" :isCollapsible=false>
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="commentSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Links" groupIconCss="e-icons e-link" :isCollapsible=false>
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="DropDown" :allowedSizes="largeSize" :dropDownSettings="linkSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                        </e-ribbon-groups>
                        </e-ribbon-tab>
                        <e-ribbon-tab header="View">
                        <e-ribbon-groups>
                            <e-ribbon-group header="Views" orientation="Row" groupIconCss="e-icons e-print">
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :buttonSettings="readSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="printSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="layoutSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Zoom" orientation="Row" groupIconCss="e-icons e-zoom-to-fit">
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :buttonSettings="zoomInSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="zoomOutSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Show" :isCollapsible=false>
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="CheckBox" :checkBoxSettings="rulerSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="CheckBox" :checkBoxSettings="gridSettings">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="CheckBox" :checkBoxSettings="navigationSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                            <e-ribbon-group header="Dark Mode" :isCollapsible=false>
                            <e-ribbon-collections>
                                <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="modeSettings">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                                </e-ribbon-collection>
                            </e-ribbon-collections>
                            </e-ribbon-group>
                        </e-ribbon-groups>
                        </e-ribbon-tab>
                    </e-ribbon-tabs>
                    <!-- Contextual Tab 1 -->
                    <e-ribbon-contextual-tabs>
                        <e-ribbon-contextual-tab :visible="true">
                            <e-ribbon-tabs>
                                <e-ribbon-tab id="TableDesign" header="Table Design">
                                    <e-ribbon-groups>
                                        <e-ribbon-group header="Table Style" groupIconCss="e-icons e-field-settings">
                                            <e-ribbon-collections>
                                                <e-ribbon-collection>
                                                    <e-ribbon-items>
                                                        <e-ribbon-item type="DropDown" :allowedSizes="largeSize" :dropDownSettings="tableDropdown">
                                                        </e-ribbon-item>
                                                    </e-ribbon-items>
                                                </e-ribbon-collection>
                                            </e-ribbon-collections>
                                        </e-ribbon-group>
                                        <e-ribbon-group header="Borders Style" groupIconCss="e-icons e-field-settings">
                                            <e-ribbon-collections>
                                                <e-ribbon-collection>
                                                    <e-ribbon-items>
                                                        <e-ribbon-item type="DropDown" :allowedSizes="largeSize" :dropDownSettings="borderDropdown">
                                                        </e-ribbon-item>
                                                    </e-ribbon-items>
                                                </e-ribbon-collection>
                                            </e-ribbon-collections>
                                        </e-ribbon-group>
                                    </e-ribbon-groups>
                                </e-ribbon-tab>
                                <e-ribbon-tab id="TableLayout" header="Table Layout">
                                    <e-ribbon-groups>
                                        <e-ribbon-group header="Data" groupIconCss="e-icons e-custom-sort">
                                            <e-ribbon-collections>
                                                <e-ribbon-collection>
                                                    <e-ribbon-items>
                                                        <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="sortAscendingButton">
                                                        </e-ribbon-item>
                                                    </e-ribbon-items>
                                                </e-ribbon-collection>
                                                <e-ribbon-collection>
                                                    <e-ribbon-items>
                                                        <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="sortDescendingButton">
                                                        </e-ribbon-item>
                                                    </e-ribbon-items>
                                                </e-ribbon-collection>
                                            </e-ribbon-collections>
                                        </e-ribbon-group>
                                        <e-ribbon-group header="Merge" groupIconCss="e-icons e-merge-cells">
                                            <e-ribbon-collections>
                                                <e-ribbon-collection>
                                                    <e-ribbon-items>
                                                        <e-ribbon-item type="DropDown" :allowedSizes="largeSize" :dropDownSettings="mergeDropdown">
                                                        </e-ribbon-item>
                                                    </e-ribbon-items>
                                                </e-ribbon-collection>
                                            </e-ribbon-collections>
                                        </e-ribbon-group>
                                    </e-ribbon-groups>
                                </e-ribbon-tab>
                            </e-ribbon-tabs>
                        </e-ribbon-contextual-tab>
                        <!-- Contextual Tab 2 -->
                        <e-ribbon-contextual-tab :visible="false">
                            <e-ribbon-tabs>
                                <e-ribbon-tab id="Format" header="Picture Format">
                                    <e-ribbon-groups>
                                        <e-ribbon-group header="Background" groupIconCss="e-icons e-image">
                                            <e-ribbon-collections>
                                                <e-ribbon-collection>
                                                    <e-ribbon-items>
                                                        <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="backgroundButton">
                                                        </e-ribbon-item>
                                                    </e-ribbon-items>
                                                </e-ribbon-collection>
                                            </e-ribbon-collections>
                                        </e-ribbon-group>
                                    </e-ribbon-groups>
                                </e-ribbon-tab>
                            </e-ribbon-tabs>
                        </e-ribbon-contextual-tab>
                    </e-ribbon-contextual-tabs>                    
                </ejs-ribbon>
            </div>
            <div id="contextualRibbonPlaceHolder" @click="handleRibbonPlaceHolderClick">
                <div class="content2">
                    <div class="table-content" style="background-color: white;">
                        <table border="1" class="ribbon-table">
                            <caption class="table-header">Click on the table or image to show contextual tabs.</caption>
                            <tbody class="table-body" @click="handleTableCellClick">
                                <tr id="tableRow1">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id="tableRow2">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr id="tableRow3">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <img id="ribbonImage" class="ribbon-image" src="./images/empire-state-building.png" alt="image" @click="handleImageClick"/>
                    </div>
                </div>
            </div>
            <div id="pictureList">
              <ejs-listview id="listview" :dataSource="pictureList" :showHeader=true headerTitle="Insert Picture From" :select="listItem"></ejs-listview>
            </div>
        </div>
        <div id="action-description">
          <p> This sample showcases the contextual tabs support in the ribbon. </p>
        </div>
        <div id="description">
          <p> The Ribbon contextual tabs enable users to display the ribbon tabs on demand based on specific actions or needs. It supports adding all built-in and custom ribbon items, similar to the normal ribbon tab. This example demonstrates adding the contextual tabs using the <code>contextualTabs</code> property and showing the contextual tabs in the initial load using the <code>visible</code> property. </p>
        </div>
    </div>
  </template>
  
  <script>
    import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonColorPicker, DisplayMode, RibbonGroupButtonSelection, RibbonContextualTabsDirective, RibbonContextualTabDirective, RibbonContextualTab } from '@syncfusion/ej2-vue-ribbon';
    import { RibbonFileMenu, RibbonItemSize } from '@syncfusion/ej2-vue-ribbon';
    import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
    import { ToastUtility } from '@syncfusion/ej2-vue-notifications';
    
    let isPasteDisabled = true;
  
  export default {
    components: {
      'ejs-ribbon': RibbonComponent,
      'e-ribbon-collection': RibbonCollectionDirective,
      'e-ribbon-collections': RibbonCollectionsDirective,
      'e-ribbon-item': RibbonItemDirective,
      'e-ribbon-items': RibbonItemsDirective,
      'e-ribbon-group': RibbonGroupDirective,
      'e-ribbon-groups': RibbonGroupsDirective,
      'e-ribbon-tab': RibbonTabDirective,
      'e-ribbon-tabs': RibbonTabsDirective,
      'e-ribbon-contextual-tabs': RibbonContextualTabsDirective,
      'e-ribbon-contextual-tab': RibbonContextualTabDirective,
      'ejs-listview': ListViewComponent
    },
    name: "App",
    provide: {
      ribbon: [RibbonFileMenu, RibbonColorPicker, RibbonContextualTab ]
    },  
    data: function () {
      return {
        selectedCell: null,
        largeSize: RibbonItemSize.Large,
        colorPickerDisplayMode: DisplayMode.Classic | DisplayMode.Simplified,
        fileSettings: {
          visible: true,
          menuItems: [
            { text: "New", iconCss: "e-icons e-file-new", id: "new" },
            { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
            { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
            { text: "Save as", iconCss: "e-icons e-save", id: "save",
              items: [
                { text: "Microsoft Word (.docx)", iconCss: "sf-icon-word", id: "word" },
                { text: "Microsoft Word 97-2003(.doc)", iconCss: "sf-icon-word", id: "word97" },
                { text: "Download as PDF", iconCss: "e-icons e-export-pdf", id: "pdf" },
              ],
            },
          ],
          select:(args) => { this.selectMenuItem(args) }
        },
        tableDropdown: {
            iconCss: 'e-icons e-field-settings', content: 'Table Style', isDropDownButton: true,
            items: [{ text: 'Header Row' }, { text: 'Banded Rows' }, { text: 'Banded Columns' }],
            select: (args) => { this.updateContent("Table Style -> " + args.item.text)}
        },
        borderDropdown: {
            iconCss: 'e-icons e-border-all', content: 'Borders', isDropDownButton: true,
            items: [{ text: 'Border Right', iconCss: 'e-icons e-border-right' }, { text: 'Border Left', iconCss: 'e-icons e-border-left' }, { text: 'Border Bottom', iconCss: 'e-icons e-border-bottom' }, { text: 'Border Top', iconCss: 'e-icons e-border-top' }],
            select: (args) => { this.updateContent("Borders -> " + args.item.text); }
        },
        mergeDropdown: {
            iconCss: 'e-icons e-merge-cells', content: 'Merge', isDropDownButton: true,
            items: [{ text: 'Merge Cells', iconCss: 'e-icons e-merge-cells' }, { text: 'Split Cells', iconCss: 'e-icons e-split-horizontal' }],
            select: (args) => { this.updateContent("Merge -> " + args.item.text); }
        },
        sortAscendingButton: { iconCss: "e-icons e-sort-ascending", content: "Sort Table Ascending", clicked: () => { this.updateContent("Sort Table Ascending"); } },
        sortDescendingButton: { iconCss: "e-icons e-sort-descending", content: "Sort Table Descending", clicked: () => { this.updateContent("Sort Table Descending"); } },
        backgroundButton: { iconCss: "e-icons e-image", content: "Remove Background", clicked: () => { this.updateContent("Remove Background"); } },
        
        groupButtonMultiple: {
          selection: RibbonGroupButtonSelection.Multiple,
          header: 'Format Styles',
          items: [{ iconCss: 'e-icons e-bold', content: 'Bold', selected: true, click: () => { this.updateContent("Bold") } }, 
          {iconCss: 'e-icons e-italic', content: 'Italic', click: () => { this.updateContent("Italic") }}, 
          {iconCss: 'e-icons e-underline', content: 'Underline', click: () => { this.updateContent("Underline") }}, 
          {iconCss: 'e-icons e-strikethrough', content: 'Strikethrough', click: () => { this.updateContent("Strikethrough") }}, 
          {iconCss: 'e-icons e-change-case', content: 'Change Case', click: () => { this.updateContent("Change Case") }}]
        },
        decreaseIndent: { iconCss: "e-icons e-decrease-indent", content: 'Decrease Indent', clicked: () => { this.updateContent("Decrease Indent"); } },
        increaseIndent: { iconCss: "e-icons e-increase-indent", content: 'Increase Indent', clicked: () => { this.updateContent("Increase Indent"); } },
        paragraphBtn: { iconCss: "e-icons e-paragraph", content: 'Paragraph', clicked: () => { this.updateContent("Paragraph Mark"); } },
        groupButtonSingle: {
          selection: RibbonGroupButtonSelection.Single,
          header: 'Alignment',
          items: [
            {iconCss: 'e-icons e-align-left', selected: true, click: () => { this.updateContent("Align Left") }},
            {iconCss: 'e-icons e-align-center', click: () => { this.updateContent("Align Center") }}, 
            {iconCss: 'e-icons e-align-right', click: () => { this.updateContent("Align Right") }}, 
            {iconCss: 'e-icons e-justify', click: () => { this.updateContent("Justify") }}
          ]
        },
        pasteSettigs:{ 
          iconCss: 'e-icons e-paste', content: 'Paste',
          items: [{ text: "Keep Source Format" }, { text: "Merge Format" }, { text: "Keep Text Only" }],
          select:(args) => { this.updateContent( "Paste -> " + args.item.text) },
          click: () => { this.updateContent("Paste"); }
        },
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut", clicked: () => { this.updateContent("Cut"); this.enablePaste(); } },
        copyButton:  { iconCss: "e-icons e-copy", content: "Copy", clicked: () => { this.updateContent("Copy"); this.enablePaste(); } },
        formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter", clicked: () => { this.updateContent("Format Painter") } },
        styleOptions: {
          dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings" ],
          index: 3,
          label: 'Font Style',
          width: '115px',
          popupWidth: '150px',
          allowFiltering: true,
          change:(args) => { if (args.itemData) { this.updateContent( "Font Style -> " + args.itemData.text) } }
        },
        sizeOptions: {
          dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96" ],
          index: 4,
          label: 'Font Size',
          width: "65px",
          popupWidth: '85px',
          allowFiltering: true,
          change:(args) => { if (args.itemData) { this.updateContent( "Font Size -> " + args.itemData.text) } }
        },
        boldButton:  { iconCss: "e-icons e-bold", content: "Bold", isToggle: "true", clicked: () => { this.updateContent("Bold") } },
        italicButton:  { iconCss: "e-icons e-italic", content: "Italic", isToggle: "true", clicked: () => { this.updateContent("Italic") } },
        underlineButton:  { iconCss: "e-icons e-underline", content: "Underline", isToggle: "true", clicked: () => { this.updateContent("Underline") } },
        strikethroughButton:  { iconCss: "e-icons e-strikethrough", content: "Strikethrough", isToggle: "true", clicked: () => { this.updateContent("strikethrough") } },
        caseButton:  { iconCss: "e-icons e-change-case", content: "Change Case", isToggle: "true", clicked: () => { this.updateContent("Change Case") } },
        colorPicker: {value: "#123456", change:(args) => { this.updateContent( args.currentValue.hex + " color")} },
        searchOptions:{ 
          iconCss: 'e-icons e-search', content: 'Find',
          items: [
            { text: 'Find', iconCss: 'e-icons e-search' },
            { text: 'Advanced Find', iconCss: 'e-icons e-search' },
            { text: 'Go to', iconCss: 'e-icons e-arrow-right' }
          ],
          select:(args) => { this.updateContent( "Find -> " + args.item.text)},
          click: () => {this.updateContent("Find")}
        },
        replaceButton: { iconCss: "e-icons e-replace", content: "Replace", clicked: () => { this.updateContent("Replace") } },
        selectOptions: {
          iconCss: "e-icons e-mouse-pointer", content: "Select",
          items: [{ text: "Select All" }, { text: "Select Objects" }],
          select:(args) => { this.updateContent( "Select -> " + args.item.text) },
          click: () => {this.updateContent("Select")}
        },
        dictateOptions:{ 
          iconCss: 'sf-icon-dictate', content: 'Dictate',
          items: [{ text: 'Chinese' }, { text: 'English' }, { text: 'German' }, { text: 'French' }],
          select:(args) => { this.updateContent( "Dictate -> " + args.item.text)},
          click: () => {this.updateContent("Dictate")}
        },
        editorButton: { iconCss: "sf-icon-editor", content: "Editor", clicked: () => { this.updateContent("Editor") } },
        reuseButton: { iconCss: "sf-icon-reuse", content: "Reuse Files", clicked: () => { this.updateContent("Reuse Files") } },
        tableSettings:{ 
          iconCss: 'e-icons e-table', content: 'Table', isDropDownButton: true,
          items: [{ text: 'Insert Table' }, { text: 'Draw Table' }, { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }],
          select:(args) => { this.updateContent( "Table -> " + args.item.text)}
        },
        pictureSettings:{ 
          iconCss: 'e-icons e-image', content: 'Pictures', isDropDownButton: true, target: '#pictureList'        
        },
        shapeSettings:{ 
          iconCss: 'sf-icon-shapes', content: 'Shapes', isDropDownButton: true,
          items: [{ text: 'Lines' }, { text: 'Rectangles' }, { text: 'Basic Arrows' }, { text: 'Basic Shapes' }, { text: 'FlowChart' }],
          select:(args) => { this.updateContent( "Shapes -> " + args.item.text)}
        },
        modelSettings: { iconCss: "sf-icon-3d-model", content: "3D Models", clicked: () => { this.updateContent("3D Models") } },
        artSettings: { iconCss: "sf-icon-smart-art", content: "SmartArt", clicked: () => { this.updateContent("SmartArt") } },
        chartSettings: { iconCss: "sf-icon-chart", content: "Chart", clicked: () => { this.updateContent("Chart") } },
        screenshotSettings: { iconCss: "sf-icon-screenshot", content: "Screenshot", clicked: () => { this.updateContent("Screenshot") } },
        headerSettings:{ 
          iconCss: 'e-icons e-header', content: 'Header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          select:(args) => {this.updateContent( "Header -> " + args.item.text)}
        },
        footerSettings:{ 
          iconCss: 'e-icons e-footer', content: 'Footer',
          items: [{ text: 'Insert Footer' }, { text: 'Edit Footer' }, { text: 'Remove Footer' }],
          select:(args) => {this.updateContent( "Footer -> " + args.item.text)}
        },
        pageSettings:{ 
          iconCss: 'e-icons e-page-numbering', content: 'Page Number',
          items: [{ text: 'Insert Top of page' }, { text: 'Insert Bottom of page' }, { text: 'Format Page Number' }, { text: 'Remove Page Number' }],
          select:(args) => {this.updateContent( "Page Numbering -> " + args.item.text)}
        },
        commentSettings: { iconCss: "e-icons e-comment-add", content: "New Comment", clicked: () => { this.updateContent("New Comment") } },
        linkSettings:{ 
          iconCss: 'e-icons e-link', content: 'Link',
          items: [
            { text: 'Insert Link', iconCss: 'e-icons e-link' },
            { text: 'Recent Links', iconCss: 'e-icons e-clock' },
            { text: 'Bookmarks', iconCss: 'e-icons e-bookmark' }
          ],
          select:(args) => {this.updateContent( "Link -> " + args.item.text)}
        },
        readSettings: { iconCss: "sf-icon-read", content: "Read Mode", clicked: () => { this.updateContent("Read Mode") } },
        printSettings: { iconCss: "e-print e-icons", content: "Print Layout", clicked: () => { this.updateContent("Print Layout") } },
        layoutSettings: { iconCss: "sf-icon-web-layout", content: "Web Layout", clicked: () => { this.updateContent("Web Layout") } },
        zoomInSettings: { iconCss: "e-icons e-zoom-in", content: "Zoom In", clicked: () => { this.updateContent("Zoom In") } },
        zoomOutSettings: { iconCss: "e-icons e-zoom-out", content: "Zoom Out", clicked: () => { this.updateContent("Zoom Out") } },
        rulerSettings:  { label: "Ruler", checked: false, change: () => { this.updateContent("Ruler") } },
        gridSettings:  { label: "Gridlines", checked: false, change: () => { this.updateContent("Gridlines") } },
        navigationSettings:  { label: "Navigation Pane", checked: true, change: () => { this.updateContent("Navigation Pane") } },
        modeSettings: { iconCss: "sf-icon-mode", content: "Dark Mode", clicked: () => { this.updateContent("Dark Mode") } },
        pictureList: [
          { text: 'This Device' },
          { text: 'Stock Images' },
          { text: 'Online Images' }
        ]
      };
    },  
    methods: {

      enablePaste: function() {
          if (!isPasteDisabled) { return; }
          this.$refs.ribbonContextualTab.enableItem('default-pastebtn');
          isPasteDisabled = false;
      },
      launcherIconClicked: function(args) {
          if (args.groupId == "clipboard") {
            this.updateContent("Clipboard LauncherIcon");
          }
          else if (args.groupId == "illustration") {
            this.updateContent("Illustration LauncherIcon");
          }
          else if (args.groupId == "header_footer") {
            this.updateContent("Header & Footer LauncherIcon");
          }
      },
      selectMenuItem(args) {
          if (args.item.id == "word" || args.item.id == "word97" || args.item.id == "pdf") {
            this.updateContent("File -> Save as -> " + args.item.text);
          } else {
            this.updateContent("File -> " + args.item.text);
          }
      },
      listItem (args) {
        this.updateContent( "Pictures -> " + args.text)
      },
      updateContent: function (args) {
          ToastUtility.show({
          target: "#contextualRibbonPlaceHolder",
          cssClass: "e-toast-info",
          height: 25,
          width: 'auto',
          timeOut: 2000,
          newestOnTop: true,
          animation: { show: { effect: 'FadeIn' }, hide: { effect: 'FadeOut' } },
          position: { X: "Right" },
          showCloseButton: true,
          content: "Last clicked item is " + args
        });
      },
      handleTableCellClick(event) {
        const selectedCellClass = 'e-table-selected';

        if (this.selectedCell) {
            this.selectedCell.classList.remove(selectedCellClass);
        }

        const target = event.target;
        if (target.tagName === 'TD') {
            target.classList.add(selectedCellClass);

            this.selectedCell = target;

            this.$refs.ribbonContextualTab.showTab('TableDesign', true);
            this.$refs.ribbonContextualTab.showTab('TableLayout', true);
            this.$refs.ribbonContextualTab.selectTab('TableDesign');
            this.$refs.ribbonContextualTab.hideTab('Format', true);
            document.querySelector('#ribbonImage').classList.remove('e-image-selected');
        }
    },
    handleImageClick() {
        this.$refs.ribbonContextualTab.showTab('Format', true);
        this.$refs.ribbonContextualTab.selectTab('Format');
        this.$refs.ribbonContextualTab.hideTab('TableDesign', true);
        this.$refs.ribbonContextualTab.hideTab('TableLayout', true);
        this.updateSelectedState('Image');
    },
    handleRibbonPlaceHolderClick(event) {
        if (event.target.nodeName !== 'TD' && event.target.nodeName !== 'IMG') {
            this.$refs.ribbonContextualTab.hideTab('TableDesign', true);
            this.$refs.ribbonContextualTab.hideTab('TableLayout', true);
            this.$refs.ribbonContextualTab.hideTab('Format', true);
            this.updateSelectedState('Table');
        }
    },

    updateSelectedState(args) {
        if (this.selectedCell) {
            this.selectedCell.classList.remove('e-table-selected');
            this.selectedCell = null;
        }
        document.querySelector('#ribbonImage').classList[args === 'Image' ? 'add' : 'remove']('e-image-selected');
    },
    }
  };
  </script>
  
  <style>
  .e-table-selected {
    border: 1px solid #0078D6;
}
#contextualRibbonPlaceHolder .table-content {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.ribbon-table {
    width: 50%;
    background-color: #fff;
    margin: 20px auto;
}

#ribbonImage {
    width: 50%;
    height: auto;
    margin: 0 auto 30px;
    padding: 1px;
    border: 2px solid;
    border-color: transparent;
}

#ribbonImage.e-image-selected {
    border-color: #0078D6;
}

.table-header {
    font-size: 1vw;
    text-align: center;
    color: black;
    padding-bottom: 15px;
}

#tableRow1, #tableRow2, #tableRow3 {
    height: 20px;
}

@media screen and (max-width: 550px) {
    .table-header {
        font-size: 2vw;
    }
}

  #pictureList {
      display: none;
      border: 1px;
      box-shadow: 0 0 2px;
  }

  #pictureddl-popup #pictureList {
      display: block;
  }

  .e-bigger #pictureList .e-list-header {
   background-color: white;
  }

  body[class*="dark"].e-bigger #pictureList .e-list-header,
  body[class*="high"].e-bigger #pictureList .e-list-header {
      background-color: #212529;
  }
  
  .e-bigger #pictureList ul {
      padding: 0px;
      margin-top: 0px;
  }

  .contextual-tab #ribbonContainer {
      padding: 20px;
      background-color: #dbdadacc;
  }

  #ribbon {
      box-sizing: border-box;
  }

  #contextualRibbonPlaceHolder .e-toast-close-icon {
      position: absolute;
      top: 50%;
      right: 2px ;
      transform: translateY(-50%);
      margin: 0;
  }

  #contextualRibbonPlaceHolder .e-toast-content {
      padding-right: 25px;
  }

  #contextualRibbonPlaceHolder {
      background-color: transparent;
      box-sizing: border-box;
      gap: 10px;
      margin-top: 15px;
  }

  #contextualRibbonPlaceHolder .content2 {
      background-color: #9d9c9a;
      width: 100%;
      padding: 30px 0;
  }

  body[class*="dark"] #contextualRibbonPlaceHolder,
  body[class*="high"] #contextualRibbonPlaceHolder {
      background-color: #5b5958;
  }

  .font-group .e-ribbon-group-content {
      justify-content: center;
  }

  #header_footer .e-ribbon-group-overflow-ddb {
      min-width: 10ch;
  }

  @font-face {
      font-family: 'ribbon';
      src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  [class^="sf-icon-"], [class*=" sf-icon-"] {
      font-family: 'ribbon' !important;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  .sf-icon-3d-model:before {
      content: "\e700";
  }

  .sf-icon-shapes:before {
      content: "\e701";
  }

  .sf-icon-dictate:before {
      content: "\e702";
  }

  .sf-icon-chart:before {
      content: "\e703";
  }

  .sf-icon-screenshot:before {
      content: "\e704";
  }

  .sf-icon-smart-art:before {
      content: "\e706";
  }

  .sf-icon-share:before {
      content: "\e707";
  }

  .sf-icon-read:before {
      content: "\e708";
  }

  .sf-icon-web-layout:before {
      content: "\e709";
  }

  .sf-icon-mode:before {
      content: "\e70b";
  }

  .sf-icon-draft:before {
      content: "\e70c";
  }

  .sf-icon-reuse:before {
      content: "\e70f";
  }

  .sf-icon-editor:before {
      content: "\e70a";
  }

  .sf-icon-word:before {
      content: "\e70d";
  }
</style>
