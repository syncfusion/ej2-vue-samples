<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8 control-section dateformat sb-property-border">
        <div class="content-wrapper">
          <div class="content">
            <div id="control_wrapper" class="control_wrapper date-format">
              <ejs-datetimepicker
                v-model:value="dateValue"
                :placeholder="datePickerPlaceholder"
                :format="selectedFormat"
                :inputFormats="inputFormats"
              ></ejs-datetimepicker>
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
                  :showSelectAll="true"
                ></ejs-multiselect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12">
        <div id="action-description">
          <p>
            In this sample, the DateTimePicker has been configured with the
                  <code>dd-MMM-yy hh:mm a</code> date time format.
                  To change this current date time format, go to the properties panel at the right side and select a date format from the dropdown options.
                  For mobile mode touch the icon at the right side and select a date time format from the dropdown options.
          </p>
          <p>
              Furthermore, this example showcases the flexible date value parsing functionality available in DateTimePicker component. 
              By utilizing the <code>inputFormats</code> property, users can enter dates in various formats, which will be automatically parsed and formatted according to the chosen date format. 
          </p>
      </div>
      <div id="description">
          <p>
              Datetime Formats sample illustrates the support of custom dateTime format in the DateTimePicker component by using the <code>format</code> property. You can also change the datetime format by selecting it from the format options in the properties
              panel.
          </p>
          <p>
            Furthermore, this example showcases the flexible date value parsing functionality available in DateTimePicker
            component.
            By utilizing the <code>inputFormats</code> property, users can enter dates in various formats, which will be
            automatically parsed and formatted according to the chosen date format.
          </p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { DropDownListComponent, MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";

export default {
components: {
  'ejs-datetimepicker': DateTimePickerComponent,
  'ejs-dropdownlist': DropDownListComponent,
  'ejs-multiselect': MultiSelectComponent
},
data() {
  return {
    dateValue: new Date(),
    selectedFormat: 'dd-MMM-yy hh:mm a',
    datePickerPlaceholder: 'Choose Date & Time',
      dropdownPlaceholder: 'Select a format',
      multiMode: 'CheckBox',
      multiselectPlaceholder: 'e.g. MM/dd/yyyy HH:mm',
    inputFormats: ['dd/MM/yyyy HH:mm', 'yyyyMMdd HH:mm'],
    formatOptions: ["dd-MMM-yy hh:mm a", "yyyy-MM-dd HH:mm", "dd-MMMM-yyyy HH:mm"],
    inputFormatOptions: [
      'dd/MM/yyyy HH:mm', 'ddMMMyy HH:mm', 'yyyyMMdd HH:mm', 'dd.MM.yy HH:mm', 'MM/dd/yyyy HH:mm', 'yyyy/MMM/dd HH:mm', 'dd-MM-yyyy HH:mm'
    ]
  };
},
provide: {
  multiselect: [CheckBoxSelection]
}
};
</script>

<style scoped>
.control_wrapper.date-format {
    max-width: 246px;
    margin: 30px auto;
    padding-top: 15px;
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

