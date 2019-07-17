<template>
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
                                    <img :src="image" :alt="data.FullName" />
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
<script>

import { Internationalization } from '@syncfusion/ej2-base';

let instance = new Internationalization();

export default {
  data () {
    return {
        data: {}
    }
  },
 methods: {
    format: function(value) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
  },
computed: {
    image: function() {
      return 'src/tree-grid/images/' + this.data.FullName + '.png';
    }
  }
}
</script>
