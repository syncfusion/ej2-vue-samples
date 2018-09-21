<template>
    <div class="listWrapper">
        <span :class="['e-avatar e-avatar-small e-avatar-circle']" v-if="data.avatar !== ''">{{data.avatar}}</span>
        <span :class="[data.pic + ' e-avatar e-avatar-small e-avatar-circle']" v-if="data.pic !== '' "> </span>
        <span class="list-text">{{data.text}}</span>
    </div>

</template>
 
<script>
export default {
  data () {
    return {
      data: {}
    }
  }
}
</script>
