<template>
  <div>
    <div class="content">
        <h3 class="h3">HTML</h3>
        <div class="code-preview">                        
            &lt;<span>!DOCTYPE html></span>
            <div>&lt;<span>html></span></div>
            <div>&lt;<span>body></span></div>
            &lt;<span>div</span> id="custom-image">
            <div style="margin-left: 5px">&lt;<span>img</span> src="src/albert.png"></div>
            <div>&lt;<span>div</span>&gt;</div>
            <div>&lt;<span>/body></span></div>
            <div>&lt;<span>/html></span></div>
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
