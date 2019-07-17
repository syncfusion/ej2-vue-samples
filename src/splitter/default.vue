<template>
  <div>
    <div id="target" class="col-lg-12 control-section default-splitter">
        <div class="control_wrapper">
            <div class="pane1">
                <div id="pane-heading">Horizontal Splitter</div>
                <ejs-splitter id='splitter1' class='splitterContent' ref="splitterObj" :separatorSize=4 width='100%' height='110px'>
                    <e-panes>
                        <e-pane size="25%" min="60px" content='<div>Left pane<div id="panetext">size: 25%</div><div id="panetext">min: 60px</div></div>'></e-pane>
                        <e-pane size="50%" min="60px" content='<span>Middle pane<div id="panetext">size: 50%</div><div id="panetext">min: 60px</div></span>'></e-pane>
                        <e-pane size="25%" min="60px" content='<span>Right pane<div id="panetext">size: 25%</div><div id="panetext">min: 60px</div></span>'></e-pane>
                    </e-panes>
                </ejs-splitter>
            </div>
            <div class="pane2">
                <div id="pane-heading">Vertical Splitter</div>
                <ejs-splitter id='splitter2' class='splitterContent' ref="splitterObj" :separatorSize=4 orientation='Vertical' width='100%' height='240px'>
                    <e-panes>
                        <e-pane size="30%" min="60px" content='<span>Top pane<div id="panetext">size: 30%</div><div id="panetext">min: 60px</div></span>'></e-pane>
                        <e-pane size="40%" min="60px" content='<span>Middle pane<div id="panetext">size: 40%</div><div id="panetext">min: 60px</div></span>'></e-pane>
                        <e-pane size="30%" min="60px" content='<span>Bottom pane<div id="panetext">size: 30%</div><div id="panetext">min: 60px</div></span>'></e-pane>
                    </e-panes>
                </ejs-splitter>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the default functionalities of the <code>Splitter</code> control. 
            To resize panes and increase the dimension of a pane, drag a separator (divider) bar.
        </p>
    </div>

    <div id="description">
        <p>
            The split panes of the Splitter control can be oriented horizontally or vertically using the Orientation property.
            <ul>
                <li>Set orientation property to Horizontal to create horizontal splitter, which align panels left-to-right.</li>
                <li>Set orientation property to Vertical to create vertical splitter, which align panels top-to-bottom.</li>
            </ul>
            The splitter allows resizing its panes when the drag separator (divider) bar is used to increase its dimension.
        </p>
    </div>
</div>
</template>
<style>
    .default-splitter #panetext {
        font-size: 11px;
    }
    .default-splitter #pane-heading {
        font-size: 14px;
        margin-bottom: 4px;
    }
    /* custom code start */
   .default-splitter .pane1 {
        margin: 20px auto;
        max-width: 440px;
   }
    .default-splitter .pane2 {
        margin: 20px auto;
        max-width: 440px;
   }
   /* custom code end */
    .default-splitter.control-section {          
        min-height: 370px;
        margin-bottom: 15px;
        margin-top: 10px;    
    }
    .default-splitter .splitterContent div.e-pane-horizontal, .default-splitter .splitterContent div.e-pane-vertical {
        text-align: center;
        align-items: center;
        justify-content: center;
        display: grid;
        height: 100%;
    }
     .default-splitter .splitterContent.e-rtl div.e-pane-horizontal, .default-splitter .splitterContent.e-rtl div.e-pane-vertical {
      justify-content: initial;
    text-align: initial;
    }
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(SplitterPlugin);

export default Vue.extend({
    data: function() {
        return {
        }
    }
});
</script>