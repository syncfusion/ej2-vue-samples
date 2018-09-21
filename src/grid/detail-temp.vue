<template>
    <table class="detailtable" width="100%">
        <colgroup>
            <col width="35%">
            <col width="35%">
            <col width="30%">
        </colgroup>
        <tbody>
            <tr>
                <td rowspan="4" style="text-align: center;">
                    <img class='photo' :src="image" :alt="data.EmployeeID" />
                </td>
                <td>
                    <span style="font-weight: 500;">First Name: </span> {{data.FirstName}}
                </td>
                <td>
                    <span style="font-weight: 500;">Postal Code: </span> {{data.PostalCode}}
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-weight: 500;">Last Name: </span> {{data.LastName}}
                </td>
                <td>
                    <span style="font-weight: 500;">City: </span> {{data.City}}
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-weight: 500;">Title: </span> {{data.Title}}
                </td>
                <td>
                    <span style="font-weight: 500;">Phone: </span> {{data.HomePhone}}
                </td>
            </tr>
            <tr>
                <td>
                    <span style="font-weight: 500;">Address: </span> {{data.Address}}
                </td>
                <td>
                    <span style="font-weight: 500;">HireDate: </span> {{format(data.HireDate)}}
                </td>
            </tr>
        </tbody>
    </table>
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
    format: function(value){
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
  },
  computed: {
    image: function() {
      return 'src/grid/images/' + this.data.EmployeeID + '.png';
    }
  }
}
</script>
