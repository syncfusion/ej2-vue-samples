<template>
    <div class="listWrapper" style="width: inherit;height: inherit;">
        <span :class="[data.icons + ' list_svg']">&nbsp;</span>
        <span class="list_text">{{data.text}} </span>
        <span :class="[data.badge]" style="float: right;margin-top: 16px;font-size: 12px;">{{data.messages}}</span>
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
