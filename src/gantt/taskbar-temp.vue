<template>
    <div v-if="data.TaskName == 'Oscar moments'">
      <div class="e-gantt-child-taskbar e-custom-moments" style="height:100%;border-radius:5px;">
        <template v-if="data.ganttProperties.duration < 4">
          <img class="moments" height="32px" width="32px">
        </template>
        <template v-else>
          <img class="moments" height="32px" width="32px">
          <span
            class="e-task-label"
            style="position:absolute;top:15px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;"
          >{{data.Performance}}</span>
        </template>
      </div>
    </div>
    <div v-else-if="data.TaskName == 'Oscar performance'">
      <div
        class="e-gantt-child-taskbar e-custom-performance"
        style="height:100%;border-radius:5px;"
      >
        <template v-if="data.ganttProperties.duration <= 5">
          <img class="face-mask" height="32px" width="32px">
        </template>
        <template v-else>
          <img class="face-mask" height="32px" width="32px">
          <span
            class="e-task-label"
            style="position:absolute;top:5px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;"
          >{{data.Performance}}</span>
        </template>
      </div>
    </div>
    <div v-else>
      <div
        class="e-gantt-parent-taskbar e-custom-parent"
        style="height:100%;border-radius:5px;text-overflow:ellipsis;"
      >
        <template v-if="data.ganttProperties.duration < 4">
          <img class="oscar" height="32px" width="32px">
        </template>
        <template v-else>
          <template v-if="data.taskData.Winner && data.taskData.Movie">
            <img class="oscar" height="32px" width="32px">
            <span
              class="e-task-label"
              style="position:absolute; top:13px;font-size:14px;"
            >{{data.taskData.Winner}}</span>
            <span
              class="e-task-label"
              style="position:absolute;top:33px;font-size:10px;text-overflow:ellipsis;"
            >{{data.taskData.Movie}}</span>
          </template>
          <template v-else-if="data.taskData.Movie">
            <img class="oscar" height="32px" width="32px">
            <span
              class="e-task-label"
              style="position:absolute; top:13px;font-size:12px;text-overflow:ellipsis;"
            >{{data.taskData.Movie}}</span>
          </template>
          <template v-else>
            <span class="e-task-label"></span>
          </template>
        </template>
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
