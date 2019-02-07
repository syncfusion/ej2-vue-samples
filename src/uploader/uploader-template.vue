<template>
 <div class='container'>
  <span class='wrapper'><span :class="['sf-icon-' + data.type]"></span>
  <span class='name file-name'>{{data.name}} ({{data.size}} bytes)</span>
  <span class='upload-status'>{{data.status}}</span>
  </span><span class='e-icons e-file-remove-btn' title='Remove'></span>
</div>

</template>
 
<script>
 
export default {
  data () {
    return {
      data: {
      }
    }
  }
}
</script>
