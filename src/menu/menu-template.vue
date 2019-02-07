<template>
  <span v-if="data.category">
    {{data.category}}
  </span>
  <div v-else-if="data.value" style="width: 100%;display: flex;justify-content: space-between;">
    <img v-if="data.url" class="e-avatar e-avatar-small" :src="image" />
    <span style="width:100%;">{{data.value}}</span>
    <span v-if="data.count" class="e-badge e-badge-success">{{data.count}}</span>
  </div>
  <div tabindex="0" class="e-card" v-else>
      <div class="e-card-header">
          <div class="e-card-header-caption">
              <div class="e-card-header-title">About Us</div>
          </div>
      </div>
      <div class="e-card-content">
          {{data.about.value}}
      </div>
      <div class="e-card-actions">
          <button class="e-btn e-outline" style="pointer-events: auto;">
              Read More
          </button>
      </div>
  </div>
</template>
 
<script>
 
export default {
  data () {
    return {
      data: {}
    }
  },
  computed: {
    image: function() {
      return `src/menu/images/${this.data.url}.png`
    }
  }
}
</script>