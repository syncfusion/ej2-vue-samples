<template>
    <div :style="style" :id ="`${data.Id}`"></div>
</template>

<script>

export default {
  data () {
    return {
        data: {}
    }
  },
  computed: {
      style: function() {
        return "height:" + this.data.PieHeight + ";width:" + this.data.PieWidth;
      }
  }
}

</script>