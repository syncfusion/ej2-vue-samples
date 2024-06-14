<template>
  <div class="control-section e-tbar-section" style="padding-bottom: 120px">
    <div class="e-sample-resize-container toolbar-type-section">
        <h1 style="display: inline-block">Simple Toolbar</h1>
       <ejs-toolbar>
         <e-items>
            <e-item prefixIcon='e-icons e-cut' tooltipText='Cut'></e-item>
            <e-item prefixIcon='e-icons e-copy' tooltipText='Copy'></e-item>
            <e-item prefixIcon='e-icons e-paste' tooltipText='Paste'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-bold' tooltipText='Bold'></e-item>
            <e-item prefixIcon='e-icons e-underline' tooltipText='Underline'></e-item>
            <e-item prefixIcon='e-icons e-italic' tooltipText='Italic'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-align-left' tooltipText='Align-Left'></e-item>
            <e-item prefixIcon='e-icons e-align-right' tooltipText='Align-Right'></e-item>
            <e-item prefixIcon='e-icons e-align-center' tooltipText='Align-Center'></e-item>
            <e-item prefixIcon='e-icons e-justify' tooltipText='Align-Justify'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-list-unordered' tooltipText='Bullets'></e-item>
            <e-item prefixIcon='e-icons e-list-ordered' tooltipText='Numbering'></e-item>
          </e-items>
       </ejs-toolbar>
       <br> <br>
       <h1 style="display: inline-block">Scrollable Toolbar</h1>
        <ejs-toolbar overflowMode='Scrollable' id="toolbar_Scrollable">
            <e-items>
            <e-item prefixIcon='e-icons e-cut' tooltipText='Cut' text='Cut'></e-item>
            <e-item prefixIcon='e-icons e-copy' tooltipText='Copy' text='Copy'></e-item>
            <e-item prefixIcon='e-icons e-paste' tooltipText='Paste' text='Paste'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-bold' tooltipText='Bold' text='Bold'></e-item>
            <e-item prefixIcon='e-icons e-underline' tooltipText='Underline' text='Underline'></e-item>
            <e-item prefixIcon='e-icons e-italic' tooltipText='Italic' text='Italic'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-align-left' tooltipText='Align-Left' text='Align-Left'></e-item>
            <e-item prefixIcon='e-icons e-align-right' tooltipText='Align-Right' text='Align-Right'></e-item>
            <e-item prefixIcon='e-icons e-align-center' tooltipText='Align-Center' text='Align-Center'></e-item>
            <e-item prefixIcon='e-icons e-justify' tooltipText='Align-Justify' text='Align-Justify'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-list-unordered' tooltipText='Bullets' text='Bullets'></e-item>
            <e-item prefixIcon='e-icons e-list-ordered' tooltipText='Numbering' text='Numbering'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-undo' tooltipText='Undo' text='Undo'></e-item>
            <e-item prefixIcon='e-icons e-redo' tooltipText='Redo' text='Redo'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-increase-indent' tooltipText='Indent' text='Indent'></e-item>
            <e-item prefixIcon='e-icons e-decrease-indent' tooltipText='Outdent' text='Outdent'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-erase' tooltipText='Clear' text='Clear'></e-item>
          </e-items>
        </ejs-toolbar>
        <br> <br>
        <h1 style="display: inline-block">Popup Toolbar</h1>
        <ejs-toolbar overflowMode='Popup' id="toolbar_Popalways">
            <e-items>
            <e-item prefixIcon='e-icons e-cut' tooltipText='Cut' text='Cut'></e-item>
            <e-item prefixIcon='e-icons e-copy' tooltipText='Copy' text='Copy'></e-item>
            <e-item prefixIcon='e-icons e-paste' tooltipText='Paste' text='Paste'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-bold' tooltipText='Bold' text='Bold'></e-item>
            <e-item prefixIcon='e-icons e-underline' tooltipText='Underline' text='Underline'></e-item>
            <e-item prefixIcon='e-icons e-italic' tooltipText='Italic' text='Italic'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-align-left' tooltipText='Align-Left' text='Align-Left'></e-item>
            <e-item prefixIcon='e-icons e-align-right' tooltipText='Align-Right' text='Align-Right'></e-item>
            <e-item prefixIcon='e-icons e-align-center' tooltipText='Align-Center' text='Align-Center'></e-item>
            <e-item prefixIcon='e-icons e-justify' tooltipText='Align-Justify' text='Align-Justify'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-list-unordered' tooltipText='Bullets' text='Bullets'></e-item>
            <e-item prefixIcon='e-icons e-list-ordered' tooltipText='Numbering' text='Numbering'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-undo' tooltipText='Undo' text='Undo'></e-item>
            <e-item prefixIcon='e-icons e-redo' tooltipText='Redo' text='Redo'></e-item>            
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-increase-indent' tooltipText='Indent' text='Indent'></e-item>
            <e-item prefixIcon='e-icons e-decrease-indent' tooltipText='Outdent' text='Outdent'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-erase' tooltipText='Clear' text='Clear'></e-item>
          </e-items>
        </ejs-toolbar>
        <br> <br>
        <h1 style="display: inline-block">MultiRow Toolbar</h1>
        <ejs-toolbar overflowMode='MultiRow' id="toolbar_MultiRow">
            <e-items>
            <e-item prefixIcon='e-icons e-cut' tooltipText='Cut' text='Cut'></e-item>
            <e-item prefixIcon='e-icons e-copy' tooltipText='Copy' text='Copy'></e-item>
            <e-item prefixIcon='e-icons e-paste' tooltipText='Paste' text='Paste'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-bold' tooltipText='Bold' text='Bold'></e-item>
            <e-item prefixIcon='e-icons e-underline' tooltipText='Underline' text='Underline'></e-item>
            <e-item prefixIcon='e-icons e-italic' tooltipText='Italic' text='Italic'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-align-left' tooltipText='Align-Left' text='Align-Left'></e-item>
            <e-item prefixIcon='e-icons e-align-right' tooltipText='Align-Right' text='Align-Right'></e-item>
            <e-item prefixIcon='e-icons e-align-center' tooltipText='Align-Center' text='Align-Center'></e-item>
            <e-item prefixIcon='e-icons e-justify' tooltipText='Align-Justify' text='Align-Justify'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-list-unordered' tooltipText='Bullets' text='Bullets'></e-item>
            <e-item prefixIcon='e-icons e-list-ordered' tooltipText='Numbering' text='Numbering'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-undo' tooltipText='Undo' text='Undo'></e-item>
            <e-item prefixIcon='e-icons e-redo' tooltipText='Redo' text='Redo'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-increase-indent' tooltipText='Indent' text='Indent'></e-item>
            <e-item prefixIcon='e-icons e-decrease-indent' tooltipText='Outdent' text='Outdent'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-erase' tooltipText='Clear' text='Clear'></e-item>
          </e-items>
        </ejs-toolbar>
        <br> <br>
        <h1 style="display: inline-block">Extended Toolbar</h1>
        <ejs-toolbar overflowMode='Extended' id="toolbar_Extended">
            <e-items>
            <e-item prefixIcon='e-icons e-cut' tooltipText='Cut' text='Cut'></e-item>
            <e-item prefixIcon='e-icons e-copy' tooltipText='Copy' text='Copy'></e-item>
            <e-item prefixIcon='e-icons e-paste' tooltipText='Paste' text='Paste'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-bold' tooltipText='Bold' text='Bold'></e-item>
            <e-item prefixIcon='e-icons e-underline' tooltipText='Underline' text='Underline'></e-item>
            <e-item prefixIcon='e-icons e-italic' tooltipText='Italic' text='Italic'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-align-left' tooltipText='Align-Left' text='Align-Left'></e-item>
            <e-item prefixIcon='e-icons e-align-right' tooltipText='Align-Right' text='Align-Right'></e-item>
            <e-item prefixIcon='e-icons e-align-center' tooltipText='Align-Center' text='Align-Center'></e-item>
            <e-item prefixIcon='e-icons e-justify' tooltipText='Align-Justify' text='Align-Justify'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-list-unordered' tooltipText='Bullets' text='Bullets'></e-item>
            <e-item prefixIcon='e-icons e-list-ordered' tooltipText='Numbering' text='Numbering'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-undo' tooltipText='Undo' text='Undo'></e-item>
            <e-item prefixIcon='e-icons e-redo' tooltipText='Redo' text='Redo'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-increase-indent' tooltipText='Indent' text='Indent'></e-item>
            <e-item prefixIcon='e-icons e-decrease-indent' tooltipText='Outdent' text='Outdent'></e-item>
            <e-item type='Separator'></e-item>
            <e-item prefixIcon='e-icons e-erase' tooltipText='Clear' text='Clear'></e-item>
          </e-items>
        </ejs-toolbar>
<div id="action-description">
    <p>This sample demonstrates the default functionalities of the <code>Toolbar</code>. Select any command or click the left/right navigation icon or touch swipe to see the hidden commands of the Toolbar.</p>
</div>

<div id="description">
    <p>
        <strong>Toolbar</strong> is a graphical control on which commands / buttons will be displayed in horizontal order.
        By default scrolling display mode enabled when content exceeds the available viewing area.
    </p>
    <p>
        You can use left / right navigation icon or touch swipe to see the hidden commands of the toolbar.
    </p>
    <p>
        Initially toolbar rendered with the <code> left and right navigation</code> icon and you can see hidden commands by <code>moving in right or left</code> direction.
    </p>
    <p>
        When you reach <code>right / left end of toolbar</code>, corresponding  navigation direction will be disabled.
    </p>
    <p>
        In this demo, available responsive mode of Vue Toolbar has been showcased. The modes can be set through <code>overflowMode</code> property and the possible modes are <code>Scrollable</code>, <code>Popup</code>Popup, <code>Extended</code> and <code>MultiRow</code>.
    </p>
    <ul> 
        <li>
            <code>Scrollable</code> - The scrollable mode is the default mode. When you have excess toolbar items, it
            can be viewed by scrolling through left and right arrows. You can continuously scroll the toolbar content by holding on the navigation icon. In <code>devices</code> navigation icons are not available. you can touch swipe to see the hidden commands of the toolbar.
        </li>
        <li>
            <code>Popup</code> - The overflowing toolbar items which do not fit in viewing area moves to the popup
            container.
        </li>
        <li>
            <code>Extended</code> - The overflowing toolbar items which do not fit in the available space can be viewed
            in the next row of the toolbar on clicking the expand icon.
        </li>
        <li>
            <code>MultiRow</code> - The overflowing toolbar items which do not fit in viewing area will be displayed as
            an in-line of the toolbar.
        </li>
    </ul>
</div>
    </div>

</div>
</template>
<style>

.toolbar-type-section h1 {
    font-size: 18px;
}

@media only screen and (min-width: 1224px) {
    .e-tbar-section .e-sample-resize-container {
       width: 80%;
    }
}

@media only screen and (min-width: 1824px) {
    .e-tbar-section .e-sample-resize-container {
        width: 50%;
    }
}
</style>
<script>
import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";

export default {
  components: {
    'ejs-toolbar': ToolbarComponent,
    'e-item': ItemDirective,
    'e-items': ItemsDirective
  }
}
</script>