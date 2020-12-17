<template let-data>
  <div class="card-template">
    <div class="card-template-wrap">
      <div>
        <div class='e-card-header'>
            <div class='e-card-header-caption'>
                <div class='e-card-header-title e-tooltip-text'>{{data.Title}}</div>
            </div>
        </div>
        <div class='e-card-content e-tooltip-text'>
            <div class='e-text'>{{data.Description}}</div>
            <div class='e-card-kanban-image'><img :src="image(data)" alt=''></div>
        </div>
        <div class="e-card-custom-footer" v-html="getCardFooter(data)"></div>
    </div>
    </div>
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
    getCardFooter: function(data) {
      let tagDiv = "";
      let tags = data.Tags.split(",");
      for (let tag of tags) {
        tagDiv += "<div class='e-card-tag-field'>" + tag + "</div>";
      }
      return tagDiv;
    },
    image: function(data) {
      return 'source/kanban/images/' + data.ImageURL;
    }
  }
};
</script>