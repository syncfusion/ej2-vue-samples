<template>
  <ejs-splitter id="Innersplitter" height='100%' width='100%' >
    <e-panes>
      <e-pane size="29%" min="23%" :content="pane1Content"></e-pane>
      <e-pane size="20%" min="15%" :content="pane2Content"></e-pane>
      <e-pane size="35%" min="35%" :content="pane3Content"></e-pane>
    </e-panes>
  </ejs-splitter>
</template>
<script>
import { createApp } from "vue";
import { SplitterComponent, PanesDirective, PaneDirective } from "@syncfusion/ej2-vue-layouts";
import pane1Content from "./code-editor-pane1content.vue";
import pane2Content from "./code-editor-pane2content.vue";
import pane3Content from "./code-editor-pane3content.vue";

export default {
  components: {
        'ejs-splitter': SplitterComponent,
        'e-panes': PanesDirective,
        'e-pane': PaneDirective
  },
  data: function() {
    return {
      orient: "Vertical",
      pane1Content: function() {
        return { template: createApp({}).component('pane1', pane1Content) };
      },
      pane2Content: function() {
        return { template: createApp({}).component('pane2', pane2Content) };
      },
      pane3Content: function() {
        return { template: createApp({}).component('pane3', pane3Content) };
      }
    };
  },
  methods: {}
};
</script>
