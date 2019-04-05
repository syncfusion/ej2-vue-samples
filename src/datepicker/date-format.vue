<template>
<div>
<div class="col-lg-8 control-section dateformat">
    <div class="content-wrapper">
        <div class="content">
            <div id="control_wrapper" class="control_wrapper date-format">
                <ejs-datepicker :value="date" :placeholder="waterMarkText" :format="dateFormat"></ejs-datepicker>
            </div>
        </div>
    </div>
    </div>
    <div id="propertyWrapper" class="col-lg-4 property-section">
                <table class="property-panel-table" title="Properties">
                    <tr>
                        <td>
                            <div class="radio-control">
                            <h4 class="row">Select a format</h4>
                            <div class="row">
                                <ejs-radiobutton label="dd-MMM-yy" name="format" :change="changeFormat" value="dd-MMM-yy" :checked="true"></ejs-radiobutton>
                            </div>
                            <div class="row">
                                <ejs-radiobutton label="yyyy-MM-dd" name="format" :change="changeFormat" value="yyyy-MM-dd"></ejs-radiobutton>
                            </div>
                            <div class="row">
                                <ejs-radiobutton label="dd-MMMM" name="format" :change="changeFormat" value="dd-MMMM"></ejs-radiobutton>
                            </div>
                            </div>
                        </td>
                    </tr>
                </table>
    </div>
    <div id="action-description">
    <p>
        In this sample, the DatePicker has been configured with the <code>dd-MMM-yy</code> date format.
        To change this current date format, go to the properties panel at the right side and select a date format from the dropdown options.
        For mobile mode touch the icon at the right side and select a date format from the dropdown options.
    </p>
</div>
<div id="description">
    <p>
        Date Formats sample illustrates the support of custom date format in the DatePicker component by using the <code>format</code> property. You can also change the date format by selecting it from the format options in the properties panel.
    </p>
    <p> More information on the date format configuration can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/datepicker/date-format.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { DatePickerPlugin} from '@syncfusion/ej2-vue-calendars';
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(DatePickerPlugin, RadioButtonPlugin);
export default Vue.extend({
    data: function() {
        return {
            waterMarkText : 'Choose a date',
            dateFormat: 'dd-MMM-yy',
            date : new Date("05/27/2017")
        }
    },
    methods: {
        changeFormat: function(args) {
            this.dateFormat = args.value;
      } 
    }
});
</script>



<style>

.control_wrapper.date-format {
    max-width: 246px;
    margin: 30px auto;
    padding-top: 15px;
}

#property.property-section, #property.property-section{
    margin: 30px auto;
    padding-top: 50px;
}
.control-section {
    padding: 5%;
}

#control_wrapper #container {
    min-height: 300px;
}
.content {
    width: 43%;
    margin: 0 auto;
    min-width: 185px;
    padding: 20px 0px;
}
.property-section {
    padding: 5%;
}

</style>