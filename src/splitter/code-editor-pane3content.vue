<template>
  <div>
     <div class="content">
        <h3 class="h3">JavaScript</h3>
        <div class="code-preview">
            <span>var</span> image = document.getElementById("custom-image");
            <div>image.addEventListener("click", function() {</div>
                <div style="padding-left: 20px;">// Code block for click action</div>
            <span> }</span>
        </div>
    </div>
</div>
</template>
<style>
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
Vue.use(SplitterPlugin);

export default Vue.extend({
    data: function() {
        return {
        }
    },
    methods: {
    }
});
</script>
