<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8 control-section dateformat sb-property-border">
        <div class="content-wrapper">
          <div class="content">
            <div id="control_wrapper" class="control_wrapper date-format">
              <ejs-datepicker :value="currentDate" :placeholder="waterMarkText" :format="selectedFormat" :inputFormats="inputFormats"></ejs-datepicker>
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
                  :showSelectAll="showSelectAll"
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
            In this sample, the DatePicker has been configured with the <code>dd-MMM-yy</code> date format.
            To change this current date format, go to the properties panel at the right side and select a date format from the dropdown options.
            For mobile mode touch the icon at the right side and select a date format from the dropdown options.
          </p>
        </div>
        <div id="description">
          <p>
            Date Formats sample illustrates the support of custom date format in the DatePicker component by using the <code>format</code> property. You can also change the date format by selecting it from the format options in the properties panel.
          </p>
          <p>
            Furthermore, this example showcases the flexible date value parsing functionality available in DatePicker component.
            By utilizing the <code>inputFormats</code> property, users can enter dates in various formats, which will be
            automatically parsed and formatted according to the chosen date format.
          </p>
          <p> More information on the date format configuration can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/datepicker/date-format.html" target="_blank"> documentation section</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { DropDownListComponent, MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
export default {
    components: {
        'ejs-datepicker': DatePickerComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-multiselect': MultiSelectComponent
    },
  data() {
    return {
      dateValue: null,
      currentDate: new Date(),
      selectedFormat: 'dd-MMM-yy',
      datePickerPlaceholder: 'Choose a Date',
      dropdownPlaceholder: 'Select a format',
      multiMode: 'CheckBox',
      showSelectAll: true,
      multiselectPlaceholder: 'e.g. MM/dd/yyyy',
      inputFormats: ['dd/MM/yyyy', 'yyyyMMdd'],
      formatOptions: [ "dd-MMM-yy", "yyyy-MM-dd", "dd-MMMM-yyyy" ],
      inputFormatOptions: [
        'dd/MM/yyyy', 'ddMMMyy', 'yyyyMMdd', 'dd.MM.yy', 'MM/dd/yyyy', 'yyyy/MMM/dd', 'dd-MM-yyyy'
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