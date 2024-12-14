<template>
    <div class="control-section">
        <div class="fab-default-container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="target1" class="col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index">
                        <ejs-fab id="fab1" title="Contact" target="#target1"  position="MiddleCenter"  iconCss="e-icons e-people" cssClass="e-mic" :isPrimary=false></ejs-fab>
                    </div>
                    <div id="target2" class="col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index">
                        <ejs-fab id="fab2" content="Contact"  position="MiddleCenter"   target="#target2" iconCss="e-icons e-people"></ejs-fab>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="target3" class="col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index">
                        <ejs-fab id="fab3" content="Disabled"  position="MiddleCenter"   target="#target3" iconCss="e-icons e-people" disabled=true></ejs-fab>
                    </div>
                    <div id="target4" class="col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index">
                        <ejs-fab id="fab4" content="Text Content" position="MiddleCenter"  cssClass="e-warning" target="#target4"></ejs-fab>
                    </div>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the default functionalities of the Floating Action Button (FAB).</p>
        </div>
        <div id="description">
            <p>
                In this example, each FAB showcases the usage of iconCss, cssClass,  content,  and disabled properties, such as:
            </p>
            <ul>
                <li>Icon only FAB</li>
                <li>Icon with label FAB</li>
                <li>Disabled FAB</li>
                <li>Label Only FAB</li>
            </ul>
        </div>
    </div>
</template>
<style>
     .fab-default-container {
        width: 90%;
        margin: 8% auto;
        text-align: center;
        max-width: 600px;
    }
    .fab-index {
        z-index: 500 !important;
    }
    
   .fab-default-container .col-xs-12 {
        position: relative;
        margin: 15px 0;
        min-height: 100px;
    }
    .fab-default-container .col-md-6 {
        padding: 0;
    }
</style>
<script>
import { FabComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: { 'ejs-fab': FabComponent },
}
</script>