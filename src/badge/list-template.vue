<template>
    <div class="listWrapper" style="width: inherit;height: inherit;">
        <span :class="[data.icons + ' list_svg']">&nbsp;</span>
        <span class="list_text">{{data.text}} </span>
        <span :class="[data.badge]">{{data.messages}}</span>
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
