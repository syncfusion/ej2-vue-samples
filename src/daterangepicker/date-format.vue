<template>
<div>
<div class=" col-lg-8 control-section daterangeformat">
    <div class="content-wrapper">
        <div class="content">
            <div id="control_wrapper" class="control_wrapper datarangepicker_format">
                <ejs-daterangepicker :startDate="startValue" :placeholder="waterMarkText" :endDate="endValue" :format="selectedFormat" :separator="separate" :inputFormats="inputFormats"></ejs-daterangepicker>
            </div>
        </div>
    </div>
    </div>
    <div class="col-lg-4">
        <div class="property-panel">
          <div class="property-panel-header">Properties</div>
          <div class="property-panel-content">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label class="example-label">Choose a display format</label>
                <ejs-dropdownlist
                  v-model:value="selectedFormat"
                  :dataSource="formatOptions"
                  :placeholder="dropdownPlaceholder"
                  :change="changeFormat"
                ></ejs-dropdownlist>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label class="example-label">Choose input format</label>
                <ejs-multiselect
                  v-model:value="inputFormats"
                  :dataSource="inputFormatOptions"
                  :mode="multiMode"
                  :placeholder="multiselectPlaceholder"
                  :showSelectAll="showSelectAll"
                  :allowFiltering='allowFiltering'
                ></ejs-multiselect>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div id="action-description">
    <p>
        In this sample, the DateRangePicker has been configured with the <code> dd/MMM/yy hh:mm a</code> date time format. To change this current date time format, go to the properties panel at the right side and select a date format from the dropdown options. For mobile mode touch the icon at the right side and select a date time format from the dropdown options.
    </p>
  </div>
 <div id="description">
    <p>
        Format sample illustrates the support of custom date time format in the DateRangePicker component by using the
        <code>format</code> property. You can also change the date time format by selecting it from the format options in the properties panel.
    </p>
    <p>
        Furthermore, this example showcases the flexible date value parsing functionality available in DateRangePicker component.
        By utilizing the <code>inputFormats</code> property, users can enter dates in various formats, which will be
        automatically parsed and formatted according to the chosen date format.
    </p>
    <p> More information on the date format configuration can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/globalization.html#customize-the-date-format" target="_blank">
            documentation section</a>.</p>
    </div>
</div>
</template>

<script>
import { DateRangePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { DropDownListComponent, MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";

export default {
  data: function() {
    return {
      waterMarkText: "Select a Range",
      dateFormat: "dd/MMM/yy hh:mm a",
      startValue: new Date(new Date().setDate(3)),
      endValue: new Date(new Date().setDate(28)),
      separate: "-",
      selectedFormat: 'dd/MMM/yy hh:mm a',
      datePickerPlaceholder: 'Choose a Date',
      dropdownPlaceholder: 'Select a format',
      multiMode: 'CheckBox',
      allowFiltering: false,
      showSelectAll: true,
      multiselectPlaceholder: 'e.g. MM/dd/yyyy',
      inputFormats: ['dd/MM/yyyy', 'yyyyMMdd'],
      formatOptions: [ "dd/MMM/yy hh:mm a", "yyyy-MM-dd", "dd-MMMM-yyyy", "yyyy/MM/dd HH:mm" ],
      inputFormatOptions: [
        'dd/MM/yyyy', 'ddMMMyy', 'yyyyMMdd', 'dd.MM.yy', 'MM/dd/yyyy', 'yyyy/MMM/dd', 'dd-MM-yyyy'
      ]
    };
  },
  components: {
      'ejs-daterangepicker': DateRangePickerComponent,
      'ejs-dropdownlist': DropDownListComponent,
      'ejs-multiselect': MultiSelectComponent
  },
  methods: {
    changeFormat: function(args) {
      this.separate = args.value === "yyyy/MM/dd HH:mm" ? "to" : "-";		
    }		
  },
  provide: {
    multiselect: [CheckBoxSelection]
  }
};
</script>

<style scoped>
.control_wrapper.datarangepicker_format {
  max-width: 275px;
  margin: 30px auto;
  padding-top: 15px;
}

#property.property-section,
#property.property-section {
  margin: 30px auto;
  padding-top: 50px;
}
.control-section.daterangeformat {
  padding: 5%;
}

#control_wrapper #container {
  min-height: 300px;
}

.content {
  width: 60%;
  margin: 0 auto;
  min-width: 185px;
  padding: 20px 0px;
}
#propertyWrapper {
  padding: 5%;
}
.property-panel {
    margin: 30px 10px;
    padding: 15px;
}

.property-panel-header {
    font-size: 14px;
    font-weight: 600;
    padding: 10px 0;
}


.example-label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
}

.mt-3 {
    margin-top: 30px;
}

#action-description, #description {
    padding: 15px;
    margin-top: 10px;
}
</style>