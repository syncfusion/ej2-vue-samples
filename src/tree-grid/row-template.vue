<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Tree Grid component with the row template feature. In this sample, we have rendered each Tree Grid
        row using the template.
    </p>
    </div>
    <div>
        <ejs-treegrid :dataSource="data" childMapping='Children' height=335 :rowHeight = '83' width='auto' :treeColumnIndex='0' :rowTemplate="'rowTemplate'">
            <e-columns>
                <e-column field='EmpID' headerText='Employee ID' width='180'></e-column>
                <e-column field='Name' headerText='Employee Name'></e-column>
                <e-column field='Address' headerText = 'Employee Details' width='350'></e-column>
                <e-column field='DOB' headerText = 'DOB'></e-column>
            </e-columns>
            <template v-slot:rowTemplate="{data}">
                <tr>
                    <td class="border" style='padding-left:18px;'>
                        <div>{{data.EmpID}}</div>
                    </td>
                    <td class="border" style='padding: 10px 0px 0px 20px;'>
                        <div style="font-size:14px;">
                            {{data.Name}}
                            <p style="font-size:9px;">{{data.Designation}}</p>
                        </div>
                    </td>
                    <td class="border">
                        <div>
                            <div style="position:relative;display:inline-block;">
                                <img :src="'source/tree-grid/images/' + data.FullName + '.png'" :alt="data.FullName" />
                        </div>
                        <div style="display:inline-block;">
                            <div style="padding:5px;">{{data.Address}}</div>
                            <div style="padding:5px;">{{data.Country}}</div>
                            <div style="padding:5px;font-size:12px;">{{data.Contact}}</div>
                            </div>
                        </div>
                        </td>
                    <td class="border" style='padding-left: 20px;'>
                        <div>{{format(data.DOB)}}</div>
                    </td>
                </tr>
          </template>
        </ejs-treegrid>
    </div>
    <div id="description">
    <p>
        The Tree Grid provides a way to use a custom layout for its rows using template feature. The 
        <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/treegrid/row/#row-template">rowTemplate</a></code> property 
        accepts either string or HTML element`s ID value, which will be used as the template for the row.  
    </p>
    <p>
        In this demo, we have presented Employee Information with Employee Photo and employee details like Name, Address etc.
    </p>
    <p>The template expression should be provided inside <code>${...}</code> interpolation syntax.</p>
</div>

</div>
</template>
<!-- custom code start -->
<style scoped>
    /deep/ .border {
        border-color: #e0e0e0;
        border: 1px solid #e0e0e0;
        border-width: 1px 0px 0px 0px;
    }

    /deep/ img {
        width: 60px;
        height: 60px;
        vertical-align: baseline;
        border-radius: 50px;
        margin-left: 20px;
        background-repeat: no-repeat;
    
    }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { textdata } from "./data-source";
import { Internationalization } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);

let instance = new Internationalization();

export default Vue.extend({
  data: () => {
    return {
      data: textdata,
    };
  },
  methods : {
      format(value: any) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
  },
});
</script>
