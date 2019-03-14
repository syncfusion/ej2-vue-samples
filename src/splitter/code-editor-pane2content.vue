<template>
  <div>
    <div class="content">
        <h3 class="h3">CSS</h3>
        <div class="code-preview">
            <span>img {</span>
                <div id="code-text">margin:<span>0 auto;</span></div>
                <div id="code-text">display:<span>flex;</span></div> 
                <div id="code-text">height:<span>70px;</span></div>
            <span>   }</span>
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
