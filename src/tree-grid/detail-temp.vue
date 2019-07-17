<template>
<div>
     <div style="position: relative; display: inline-block; float: left; font-weight: bold; width: 10%;padding:5px 4px 2px 27px;;">
        <img :src="image" alt="{{data.FullName}}"/>
    </div>
    <div style="padding-left: 10px; display: inline-block; width: 66%; text-wrap: normal;font-size:13px;font-family:'Segoe UI';">
        <div class="e-description" style="word-wrap: break-word;">
            <b>{{data.Name}}</b> was born on {{format(data.DOB)}}. Now lives at {{data.Address}}, {{data.Country}}. {{data.Name}} holds a position of <b>{{data.Designation}}</b> in our WA department, (Seattle USA).
        </div>
        <div class="e-description" style="word-wrap: break-word;margin-top:5px;">
            <b style="margin-right:10px;">Contact:</b>{{data.Contact}}
        </div>
    </div>
</div>
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
      return 'src/tree-grid/images/' + this.data.FullName + '.png';
    }
  }
}
</script>
