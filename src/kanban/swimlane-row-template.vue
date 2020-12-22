<template let-data>
<div class='swimlane-template e-swimlane-template-table'>
        <div class="e-swimlane-row-text"><img :src="image(data)" :alt="data.keyField" />
        <span>{{data.textField}}</span></div>
</div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    image: function(data) {
      return 'source/kanban/images/' + data.keyField + '.png';
    }
  }
};
</script>