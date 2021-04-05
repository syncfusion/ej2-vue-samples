<template>
  <div class="url">
    <a :href="url">{{data.EmailID}}</a>
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
    url: function() {
      return 'mailto:'+this.data.EmailID;
    }
  }
}
</script>
