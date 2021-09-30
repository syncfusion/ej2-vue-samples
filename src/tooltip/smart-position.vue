<template>
<div>
  <div class="control-section tooltip-smart">
    <ejs-tooltip ref="tooltip" id="targetContainer" content="Drag me anywhere, to start walking with me !!!" :offsetX="-15" target="#demoSmart"
        :animation="tooltipAnimation">
        <div id="demoSmart">
        </div>
    </ejs-tooltip>
  </div>

    <div id="action-description">
        <p>This sample demonstrates the <b>smart positioning</b> functionalities of the Tooltip which will open by dragging the picture.</p>
    </div>
    <div id="description">
        <p>This sample shows the dynamic adjustment of the tooltip position within the specified viewport. Start dragging the ant
        image, so that the tooltip opens up immediately and keeps moving along with the target image. When the image reaches
        the corners of the sample container on dragging, the tooltip and its arrow position will be auto adjusted
        to make it look fit within the sample container area.</p>
        <p>In this sample, the tooltip is opened manually by using its <code>open</code> method on drag start of the target image.
        On further dragging, the <code>refresh</code> method of the tooltip needs to be called to reposition it
        continuously and on drag stop, the tooltip will be hidden by using it’s <code>close</code> method.</p>
        <p>More information on dynamic positioning of the tooltip can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/tooltip/position/#dynamic-positioning" target="_blank"> documentation section</a>.
        </p>
    </div>
</div>
</template>

<style>
.tooltip-smart #targetContainer {
    border: 1px solid #dddddd;
    margin: 15px;
    min-height: 350px;
}
.tooltip-smart #demoSmart {
    background-image: url('../images/tooltip/smartposition.png');
    background-size: 100px 100px;
    height: 100px;
    position: absolute;
    left: calc( 50% - 50px);
    top: calc( 50% - 50px);
    width: 100px;
}
</style>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { Draggable } from '@syncfusion/ej2-base';
Vue.use(TooltipPlugin);
export default Vue.extend({
   data: function(){
        return {
            tooltipAnimation:  {
        open: { effect: 'None' },
        close: { effect: 'None' }
    }
        }
   },
    mounted: function (args) {
        var ele = document.getElementById('demoSmart');
        var drag = new Draggable(ele, { 
            clone : false,
            dragArea: '#targetContainer',
            drag: (args) => {
                if (args.element.getAttribute('data-tooltip-id') === null) {
                    this.$refs.tooltip.open(args.element);
                } else {
                    this.$refs.tooltip.refresh(args.element);
                }
            },
            dragStart: (args) => {
                if (args.element.getAttribute('data-tooltip-id') === null) {
                    this.$refs.tooltip.open(args.element);
                }
            },
            dragStop: (args) => {
                this.$refs.tooltip.close();
            }
        });
    },
   methods: {
     
   }
});
</script>
