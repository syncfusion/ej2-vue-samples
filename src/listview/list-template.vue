<template>
<div id="postContainer" v-bind:class="{'clearfix desc e-list-wrapper e-list-multi-line e-list-avatar':
  (data.category !== undefined), 'clearfix e-list-wrapper e-list-multi-line e-list-avatar': (data.category === undefined)}">
    <img v-if="data.imgSrc" class="e-avatar" :src="data.imgSrc" />
    <span class="e-list-item-header">{{data.title}} </span>
    <span class="e-list-content e-text-overflow" >{{data.description}} </span>
    <div v-if="data.timeStamp" id="list-logo">
      <span class="bookmark"></span>
      <span class="comments"></span>
      <span class="share"></span>
    </div>
    <div v-if="data.timeStamp" class="timeStamp">{{data.timeStamp}}</div>
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
