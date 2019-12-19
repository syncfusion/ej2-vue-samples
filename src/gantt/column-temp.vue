<template>
  <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
    <img :src="resourceImage" style="height:40px;width:40px">
    <div style="display:inline-block;width:100%;position:relative;left:30px">{{data.ganttProperties.resourceNames}}</div>
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
    resourceImage: function() {
      return 'src/gantt/images/' + this.data.ganttProperties.resourceNames + '.png';
    }
  }
}
</script>