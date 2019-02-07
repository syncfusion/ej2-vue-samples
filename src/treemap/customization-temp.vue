<template>
    <div><img :src="image" :style="style"/></div>
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
        return "height:" + this.data.ItemHeight + ";width:" + this.data.ItemWidth;
      },
      image: function() {
        return "src/treemap/image/" + this.data.GameImage;
      }
  }
}

</script>