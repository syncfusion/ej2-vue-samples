<template>
<div>
<table>
    <tbody>
        <tr>
            <td class="e-label">ID</td>
            <td>
              <div class="e-float-input e-control-wrapper">
                <input id="Id" name="Id" type="text" class="e-field" v-model='data.Id' disabled />
              </div>
            </td>
        </tr>
        <tr>
            <td class="e-label">Category</td>
            <td>
               <ejs-dropdownlist id="Category" name="Category" class="e-field" v-model='data.Category' :dataSource="dataSource1" placeholder="Category"></ejs-dropdownlist>
            </td>
        </tr>
        <tr>
            <td class="e-label">Title</td>
            <td>
              <ejs-textbox id="Title" name="Title" v-model='data.Title' class="e-field" placeholder="Title"></ejs-textbox>
            </td>
        </tr>
        <tr>
            <td class="e-label">Size</td>
            <td>
              <ejs-textbox type="Size" name="Size" id="Size" v-model='data.Size' class="e-field" placeholder="Size"></ejs-textbox>
            </td>
        </tr>
        <tr>
            <td class="e-label">Description</td>
            <td>
              <div class="e-float-input e-control-wrapper">
                <textarea type="text" name="Description" id="Description" class="e-field" v-model='data.Description'></textarea>
              </div>
            </td>
        </tr>
         <tr>
            <td class="e-label">Deliver</td>
            <td>
              <ejs-datepicker id="datepicker" v-model='data.Date' format="MM/dd/yyyy"></ejs-datepicker>
            </td>
        </tr>
    </tbody>
</table>
</div>
</template>
<script>
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';
export default {
  components: {
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-datepicker': DatePickerComponent,
  },
  data() {
    var categoryData = [
      { text: 'Menu' },
      { text: 'Order' },
      { text: 'Ready to Serve' },
      { text: 'Delivered' }
    ];
    return {
      dataSource1: categoryData,
      data: {},
    };
}
};
</script>