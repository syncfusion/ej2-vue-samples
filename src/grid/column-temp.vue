<style>
.image img {
        height: 55px;
        width: 55px;
        border-radius: 50px;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
    }
</style>

<template>
  <div class="image">
    <img :src="image" :alt="data.EmployeeID"/>
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
      return 'src/grid/images/' + this.data.EmployeeID + '.png';
    }
  }
}
</script>
