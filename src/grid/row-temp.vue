<template>
    <tr>
        <td class="rowphoto">
            <img :src="image" :alt="data.EmployeeID" />
        </td>
        <td class="details">
            <table class="CardTable" cellpadding="3" cellspacing="2">
                <colgroup>
                    <col width="50%">
                    <col width="50%">
                </colgroup>
                <tbody>
                    <tr>
                        <td class="CardHeader">First Name </td>
                        <td>{{data.FirstName}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Last Name</td>
                        <td>{{data.LastName}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Title</td>

                        <td>{{data.Title}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Birth Date</td>
                        <td>{{format(data.BirthDate)}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Hire Date</td>
                        <td>{{format(data.HireDate)}} </td>
                    </tr>
                </tbody>
            </table>
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
      return 'src/grid/images/' + this.data.EmployeeID + '.png';
    }
  }
}
</script>
