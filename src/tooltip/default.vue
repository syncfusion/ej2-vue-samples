<template>
  <div >
      <div  class="col-lg-8 control-section" >
     <ejs-tooltip ref="tooltip" :position="tipposition" content='Lets go green & Save Earth !!!' style="display:block;position:absolute;left:calc( 50% - 60px);top:45%;">

            <!-- Button element -->
            <ejs-button>Show Tooltip</ejs-button>
        </ejs-tooltip>
        </div>
        <div class="col-lg-4 property-section">
        <table id="property"  title="Properties">
                    <tbody>
                        <tr>
                            <td style="width: 30%">
                                <div>Position</div>
                            </td>
                            <td style="width: 70%;padding-right: 10px">
                                <div>
                                    <select id="positions" @change="onChange" class="form-control">
                                        <option value="TopLeft">Top Left</option>
                                        <option value="TopCenter" selected>Top Center</option>
                                        <option value="TopRight">Top Right</option>
                                        <option value="BottomLeft">Bottom Left</option>
                                        <option value="BottomCenter">Bottom Center</option>
                                        <option value="BottomRight">Bottom Right</option>
                                        <option value="LeftTop">Left Top</option>
                                        <option value="LeftCenter">Left Center</option>
                                        <option value="LeftBottom">Left Bottom</option>
                                        <option value="RightTop">Right Top</option>
                                        <option value="RightCenter">Right Center</option>
                                        <option value="RightBottom">Right Bottom</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
            <div id="action-description">
             <p>This sample demonstrates the default functionalities of the Tooltip which will open
    by Hover or Touch-hold action on button and displayed in 12 different positions.
    </p>
            </div>
            <div id="description">
            <p>
        This sample illustrates a tooltip, that gets opened on hovering the target labelled “Show Tooltip”. The tooltip can be shown
        on 12 possible positions, by selecting the appropriate position values provided in the dropdown. The applicable tooltip
        positions are as follows:
    </p>
    <ul>
        <li><code>TopLeft</code></li>
        <li><code>TopCenter</code></li>
        <li><code>TopRight</code></li>
        <li><code>BottomLeft</code></li>
        <li><code>BottomCenter</code></li>
        <li><code>BottomRight</code></li>
        <li><code>LeftTop</code></li>
        <li><code>LeftCenter</code></li>
        <li><code>LeftBottom</code></li>
        <li><code>RightTop</code></li>
        <li><code>RightCenter</code></li>
        <li><code>RightBottom</code></li>
    </ul>
    <p>In case, if the tooltip needs to be opened on mobile devices, tap hold on the target labelled “Show Tooltip” instead of hovering
        and by default, it closes after 1.5 seconds on lift.</p>
    <p>More information on the Tooltip instantiation can be found in the
        <a href="http://ej2.syncfusion.com/vue/documentation/tooltip/getting-started.html" target="_blank"> documentation section</a>.
    </p>
            </div>
    </div>

   
</template>
<style>
 #Tooltip {
        position: absolute;
        left: calc( 50% - 60px);
        top: 45%;
    }
</style>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(TooltipPlugin);
export default Vue.extend({
   data: function(){
        return {
            tipposition : "TopCenter"
        }
   },
   methods: {
       onChange: function(args){
           this.tipposition = args.srcElement.value;
       }
   }
});
</script>