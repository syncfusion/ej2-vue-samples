<template>
  <div class="control-section">
    <ejs-tooltip ref="tooltip" id="targetContainer" content="Drag me anywhere, to start walking with me !!!" :offsetX="-15" target="#demoSmart"
        :animation="tooltipAnimation">
        <div id="demoSmart">
        </div>
    </ejs-tooltip>
        
           
    </div>

   
</template>
<style>
#targetContainer {
    border: 1px solid #dddddd;
    margin: 15px;
    min-height: 350px;
}
#demoSmart {
    background-image: url('./images/smartposition.png');
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