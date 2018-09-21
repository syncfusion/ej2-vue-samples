<template>
<div class="col-lg-12 control-section">
    <div class="box-form">
          <form id="form-element" @submit="checkForm" class="form-horizontal">                    
        <div id="formWrapper" >
            <ejs-datetimepicker id="datetimepicker" v-model="dateValue" :blur="onFocusOut" name="date" data-msg-containerid="noError" placeholder='Select date and time' floatLabelType="Always" :min="minValue" :max="maxValue"></ejs-datetimepicker>
         </div>
            <div id="noError"></div>
           <div id="success" v-if="success === 'pass'" class="alert alert-success">form submitted successfully!</div>
          <div class="submitBtn"><ejs-button cssClass="e-flat e-bigger">Submit</ejs-button></div>
      </form>
    </div>
   <div id="action-description">
    <p>
        This sample demonstrates the form support of the DateTimePicker component. Select a date from the popup and that values go into the form models.
   </p>
 </div>
 <div id="description">
    <p>
        The <code>DateTimePicker</code> has a corresponding v-model to connect them to values. Fairly short and simple. We define a message to hold errors and set empty values for the DateTimePicker form field. The checkForm logic (which is run on submit) checks for DateTimePicker. If it is empty or invalid (out of the min and max value) it checks each set as a specific error, that on a successful submission it will POST with a valid date and time value.
    </p>
    <p>More information on the DateTimePicker instantiation can be found in the
       <a href="https://ej2.syncfusion.com/vue/documentation/datetimepicker/" target="_blank"> documentation section</a>.</p>
   </div>
</div>

</template>

<script>
import Vue from "vue";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { FormValidator, FormValidatorModel } from "@syncfusion/ej2-inputs";
Vue.use(DateTimePickerPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
  data: function() {
    return {
      success: "",
      dateValue: null,
      minValue: new Date(new Date().getFullYear(), new Date().getMonth(), 7),
      maxValue: new Date(new Date().getFullYear(), new Date().getMonth(), 27),
      options: {
        //Initialize the CustomPlacement.
        customPlacement: function(inputElement, errorElement) {
          element.parentNode.appendChild(errorElement);
        },
        rules: {
          date: {
            required: [true, "date and time value is required"],
            min: [
              new Date(new Date().getFullYear(), new Date().getMonth(), 7),
              "Given value must be greater than min value"
            ],
            max: [
              new Date(new Date().getFullYear(), new Date().getMonth(), 27),
              "Given value must be smaller than max value"
            ]
          }
        }
      }
    };
  },
  mounted: function() {
    let localObj = this;
    this.formObj = new FormValidator("#form-element", this.options);
  },
  methods: {
    formStatus() {
      let status = this.formObj.validate();
      this.success = status ? "pass" : "fail";
    },
    onFocusOut() {
      let status = this.formObj.validate();
      if (!status) {
        this.success = "fail";
      }
    },
    checkForm(e) {
      this.formStatus();
      e.preventDefault();
    }
  }
});
</script>


<style>
.box-form {
  border: 1px solid #d7d7d7;
  max-width: 500px;
  height: 300px;
  margin: 30px auto;
  padding-top: 15px;
}
.submitBtn {
  text-align: center;
}
#form-element {
  margin: 10%;
}
#noError .e-error {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>