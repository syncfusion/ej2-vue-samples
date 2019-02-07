<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
          <ejs-daterangepicker :placeholder="waterMarkText">
            <e-presets>
                <e-preset label="This Week" :start='weekStartDate' :end='weekEndDate'></e-preset>
                <e-preset label="This Month" :start='monthStartDate' :end='monthEndDate'></e-preset>
                <e-preset label="Last Month" :start='lastMonthStartDate' :end='lastMonthEndDate'></e-preset>
                <e-preset label="Last Year" :start='lastYearStartDate' :end='lastYearEndDate'></e-preset>
            </e-presets>
        </ejs-daterangepicker>
    </div>
    <div id="action-description">
    <p>
       Click/Touch the DateRangePicker popup icon to view and select the list of custom preset ranges. Select the custom range option which is provided at the end of this list to open date range picker popup calendar for selecting custom ranges.
    </p>
</div>
<div id="description">
    <p>
        The <code>DateRangePicker</code> component has presets support to display the collection of required ranges in the popup element. User can select a required range from the list and the selected range value will be updated in the component.
    </p>
    <p>More information on the DateRangePicker instantiation can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/customization.html#preset-ranges" target="_blank"> documentation section</a>.</p>

</div>
</div>
</template>

<script>

import Vue from "vue";
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);
export default Vue.extend({
    data: function(){
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        return {
           waterMarkText : 'Selct a Range',
           weekStartDate :  new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString()),

           weekEndDate : new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
           - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString()),

           monthStartDate :  new Date(new Date(new Date().setDate(1)).toDateString()),

           monthEndDate : new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).setDate(0)).toDateString()),

           lastMonthStartDate : new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString()),

           lastMonthEndDate : new Date(new Date(new Date().setDate(0)).toDateString()),
           lastYearStartDate : new Date(year - 1, 1, 1).toDateString(),
           lastYearEndDate  :  new Date(year - 1, 11, 31).toDateString()
        }
    }
});
</script>



<style>
#wrapper {
        max-width: 246px;
        margin: 30px auto;
        padding-top: 15px;
    }
</style>