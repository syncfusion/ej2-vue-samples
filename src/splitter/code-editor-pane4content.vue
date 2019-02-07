<template>
  <div>
    <div class="content">
        <h3 class="h3">Preview of sample</h3>
        <div class="splitter-image">
            <img class="img1" src="https://ej2.syncfusion.com/demos/src/listview/images/albert.png" style="width: 20%;margin: 0 auto;">
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
