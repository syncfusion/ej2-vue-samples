<template>
    <div>
         <form id="formId" class="form-horizontal" novalidate>
            <div class="form-group">
                <div class="e-float-input">
                    <input type="text" id="user" name="User" required data-msg-containerid="userError">
                    <span class="e-float-line"></span>
                    <label class="e-float-text" for="user">User Name</label>
                </div>
                <div id="userError"></div>
            </div>
            <div class="form-group">
                <div class="e-float-input">
                    <ejs-datepicker id="dob" name="DOB" :placeholder="waterMark" data-msg-containerid="dateError"></ejs-datepicker>
                    <span class="e-float-line"></span>
                </div>
                <div id="dateError"></div>
            </div>
            <div class="form-group">
                <div class="e-float-input">
                    <textarea rows="2" id="Address" name="Address"></textarea>
                    <span class="e-float-line"></span>
                    <label class="e-float-text" for="address">Address</label>
                </div>
            </div>  
            <div class="form-group">
                <div class="e-float-input">
                    <input type="text" id="city" name="City" required data-msg-containerid="cityError">
                    <span class="e-float-line"></span>
                    <label class="e-float-text" for="city">City</label>
                </div>
                <div id="cityError"></div>
            </div>
            <div class="form-group">
                <div class="e-float-input">
                    <input type="text" id="state" name="State" required data-msg-containerid="stateError">
                    <span class="e-float-line"></span>
                    <label class="e-float-text" for="state">State</label>
                </div>
                <div id="stateError"></div>
            </div>
            <div class="row">
                <div style="width: 320px;margin:0px auto;height: 100px;padding-top: 25px;">
                    <div style="display: inline-block;">
                       <button class="submit-btn e-btn e-primary" type="submit" id="submit-btn" style="height:40px;width: 150px;">Add Customer</button>
                    </div>
                    <div style="float: right;">
                        <button id="resetbtn" class="samplebtn e-control e-btn" type="reset" style="height:40px;width: 150px;" data-ripple="true">Clear</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<style>
    .e-btn-hide {
	    display: none;
	}
  .form-title {
        width: 100%;
        text-align: center;
        padding: 10px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.70);
    }

    .e-error,
    .e-float-text {
        font-weight: 500;
    }

    .e-custom-label {
        font-size: 14px;
        font-weight: 500;
        margin-left: 20px;
    }

    #formId {
        padding-top: 10px;
        border: 1px solid #ccc;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.36);
        border-radius: 5px;
        background: #f9f9f9;
    }

    .highcontrast form,
    .highcontrast .header {
        color: #fff;
        background: #000000;
    }

    .header {
        color: rgba(0, 0, 0, 0.7);
    }

    table,
    td,
    th {
        padding: 3px;
    }

    .form-horizontal .form-group {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 5px;
     }

</style>
<script>
import Vue from "vue";
import { FormValidator  } from '@syncfusion/ej2-vue-inputs';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(DatePickerPlugin);
export default Vue.extend({
     data () {
    return {
      waterMark : 'Date of Birth'
    }
  },
   mounted() {
      var options = {
      rules: {
        'User': {
                        required: true
                    },
                    'DOB': {
                        required: true
                    },
                    'City': {
                        required: true
                    },
                    'State': {
                        required: true
                    }
      },
     
    };
      let localObj = this;
     // defines FormValidator to validate the TimePicker
        var formObject = new FormValidator("#formId", options);
        document.getElementById('submit-btn').onclick = function() {
            localObj.onFormSubmit();
        };
  },
   methods:{
        onFormSubmit: function() {
            let formStatus = this.formObj.validate();
            if (formStatus) {
                this.formObj.element.reset();
                this.$refs.dialogObj.show();
            }
        }
    }
});
</script>