<template>
  <div>
    <div class="e-gantt-milestone" style="position:absolute;">
      <img class="moments" height="24px" width="48px">
      <div
        class="e-milestone-top"
        style="border-right-width:26px; margin-top: -24px;border-left-width:26px;border-bottom-width:26px;"
      ></div>
      <div
        class="e-milestone-bottom"
        style="top:26px;border-right-width:26px; border-left-width:26px; border-top-width:26px;"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>
