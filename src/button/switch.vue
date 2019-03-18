<template>
    <div class="col-lg-12 control-section">
    <div class="content-wrapper">
        <div class="container switch-control">
                <div>
                    <h4 class="heading">Hotspot & tethering</h4>
                </div>
                <div>
                    <label for="checked" style="padding: 10px 70px 10px 0"> USB Tethering </label>
                    <ejs-switch id="checked" :checked="true"></ejs-switch>
                </div>
                <div>
                    <label for="unchecked" style="padding: 10px 24px 10px 0"> Portable Wi-Fi hotspot </label>
                    <ejs-switch id="unchecked"></ejs-switch>
                </div>
                <div>
                    <label for='disabled' class="e-disabled" style="padding: 10px 40px 10px 0"> Bluetooth Tethering </label>
                    <ejs-switch id="disabled" :disabled="true"></ejs-switch>
                </div>
        </div>
    </div>
<div id="action-description">
    <p>This sample demonstrates the default functionalities of a Switch. Click the Switch element to toggle between checked and unchecked states.</p>
</div>
<div id="description">
    <p>
        The Switch is a graphical user interface element that allows you to toggle between checked and unchecked states.
    </p>
    <p>
        In this sample, checked state is achieved by using the 
        <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/switch#checked">checked
        </a></code> property, and disabled state is achieved by using the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/switch#disabled">disabled
        </a></code> property.
    </p>
    <p>
        More information on Switch can be found in the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/switch/getting-started">
        documentation section</a>.
    </p>
</div>
</div>
</template>
<!-- custom code start -->
<style>

/* Switch Styles */
.content-wrapper {
    margin-top: 47px;
}

.switch-control .heading {
    text-indent: 15px;
    padding: 15px 0;
}

.switch-control div {
    display: flex;
    align-items: center;
}

.switch-control  {
    margin: 0 auto;
    width: 275px;
}

.switch-control label {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    user-select: none;
    font-weight: 400;
    font-size: 13px;
}

.switch-control .e-disabled {
    pointer-events: none;
}
</style>
<!-- custom code end -->

<script>
import Vue from "vue";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { rippleMouseHandler } from "@syncfusion/ej2-buttons";

Vue.use(SwitchPlugin);

export default Vue.extend({
    mounted: function(){
        var elemArray = document.querySelectorAll('.switch-control label');
        for (var i = 0, len = elemArray.length; i < len; i++) {
            elemArray[i].addEventListener('mouseup', rippleHandler);
            elemArray[i].addEventListener('mousedown', rippleHandler);
        }
        function rippleHandler(e) {
            var rippleSpan = this.nextElementSibling.querySelector('.e-ripple-container');
            rippleSpan && rippleMouseHandler(e, rippleSpan);
        }
    }
});
</script>