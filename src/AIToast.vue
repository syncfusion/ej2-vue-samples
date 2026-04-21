<template>
  <ejs-toast
    ref="toastRef"
    :width="420"
    :position="position"
    :timeOut="0"
    :newestOnTop="true"
    :template="'toasttemplate'"
    id="ai-toast"
  >
    <template v-slot:toasttemplate>
      <div class="ai-toast-container">
        <div class="ai-content-text">
          <div class="ai-content-title">Explore AI Demos</div>
          <div class="ai-content-message">
            You can now explore our <strong>Smart AI demos</strong> with limited AI token usage.
            Additionally, you can try out our <strong>
            <a href="https://github.com/syncfusion/smart-ai-samples/tree/master/vue" target="_blank" style="color: #007bff;">Syncfusion Smart AI Samples</a></strong>
            locally by using your own API key.
          </div>
        </div>
        <button class="toast-close-button" aria-label="Close" @click="closeToast">✕</button>
      </div>
    </template>
  </ejs-toast>
</template>

<script>
import { ToastComponent } from '@syncfusion/ej2-vue-notifications';

export default {
  name: 'AIToast',
  components: {
    'ejs-toast': ToastComponent
  },
  data() {
    return {
      position: { X: 'Right', Y: 'Top' }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.toastRef.show();
    });
  },
  methods: {
    closeToast() {
      this.$refs.toastRef.hide();
    }
  }
};
</script>

<style>

.toast-close-button:hover {
  color: #333;
}

</style>