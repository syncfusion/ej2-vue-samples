<template>
  <div class="control-section">
    <div class="checkbox-control">
        <div class="row">
            <ejs-checkbox label='CheckBox: true' :checked="true" :change="onChange"></ejs-checkbox>
        </div>
        <div class="row">
            <ejs-checkbox label='Checked  Disabled' :disabled="true" :checked="true"></ejs-checkbox>
        </div>
        <div class="row">
            <ejs-checkbox label='Indeterminate, Disabled' :indeterminate="true" :disabled="true"></ejs-checkbox>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the default functionalities of the CheckBox. Click the CheckBox element to toggle states between checked/unchecked.</p>
</div>
<div id="description">
    <p>
        CheckBox is a graphical user interface element that allows to select one or more options from the choices. It contains checked, unchecked, and indeterminate states.
    </p>
    <p>
        In this sample, checked state is achieved by using the 
        <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/check-box/#checked">checked
        </a></code> property, indeterminate state is achieved by using the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/check-box/#indeterminate">indeterminate
        </a></code> property, and disabled state is achieved by using the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/check-box/#disabled">disabled
        </a></code> property.
    </p>
    <p>
        More information about CheckBox can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/check-box/getting-started">
        documentation section</a>.
    </p>
</div>
</div>
</template>
<!-- custom code start -->
<style>
/* CheckBox Styles */
.checkbox-control {
  margin: 12% 0 12% 40%;
}

@media only screen and (max-width: 700px) {
  .checkbox-control {
    margin: 20% 0 0 32%;
  }

  .control-section {
    min-height: 200px;
  }
}

@media only screen and (max-width: 500px) {
  .control-section {
    min-height: 200px;
  }

  .checkbox-control {
    margin-top: 27%;
    margin-left: 20%;
    margin-bottom: 27%;
  }
}

.control-section .row {
  margin: 20px 0;
}
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(CheckBoxPlugin);

export default Vue.extend({
  methods: {
    onChange: function(args) {
      var checkboxObj = args.event.target.ej2_instances[0];
      checkboxObj.label = "CheckBox: " + args.checked;
    }
  }
});
</script>