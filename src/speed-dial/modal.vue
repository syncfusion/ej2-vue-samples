<template>
    <div class="control-section">
        <div id="speed-dial-wrapper">
            <div id="target" class="speeddial-modal-target custom-index">
                <ejs-speeddial title="Menu" openIconCss='e-icons e-justify'
                    closeIconCss='e-icons e-close' :items=items target='#target'
                    position='BottomCenter' :modal=true></ejs-speeddial>
            </div>
        </div>
        <div id="action-description">
             <p>
                The following sample demonstrates the modal popup of a speed dial. Click the button to open action items and click the overlay to close the action items.
            </p>
        </div>
        <div id="description">
             <p>
                Speed dial enables modal popup mode when the <code>modal</code> property is set. When this mode is enabled, an overlay is added to prevent background interaction, and actions are closed when the overlay is clicked.
            </p>
        </div>
    </div>
</template>
   
<script>
import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: { 'ejs-speeddial': SpeedDialComponent },
    data: function () {
        return {
            items: [
                {
                    title:'Home',
                    iconCss:'e-icons e-home'
                },
                {
                    title:'People',
                    iconCss:'e-icons e-people'
                },
                {
                    title:'Search',
                    iconCss:'e-icons e-search'
                },
                {
                    title:'Message',
                    iconCss:'e-icons e-comment-show'
                }
            ]
        };
    }
}
</script>
 
<style>
    .speeddial-modal-target {
        min-height: 350px;
        position: relative;
    }
    .speeddial-modal-target .e-fab.e-btn.e-fab-bottom {
        bottom: 50px;
    }
    .custom-index {
        z-index:500 !important;
    }
</style>