<template>
    <div v-if="data.ganttProperties.resourceInfo">
      <span v-for="resource in data.ganttProperties.resourceInfo">
        <img :src="'src/gantt/images/' + resource.resourceName + '.png'" height="40px" />
        <span style="marginLeft:5px;marginRight:5px">{{ resource.resourceName }}</span>
      </span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {}
            };
        },
    };
</script>