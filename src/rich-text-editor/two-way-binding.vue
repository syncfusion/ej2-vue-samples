<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
              <div class="forum">
        <ejs-richtexteditor id="rte1" v-on:destroyed="onDestroyed"  v-on:created="onCreated"  v-model="value" v-bind:value="value"></ejs-richtexteditor>

        <ejs-richtexteditor id="rte2" v-on:destroyed="onDestroyed"  v-on:created="onCreated" v-model="value" v-bind:value="value"></ejs-richtexteditor>
</div>
        </div>
    </div>
</div>

 <div id="action-description">
    <p>
        This sample demonstrates two-way binding support of the RichTextEditor component.
   </p>
 </div>

 <div id="description">
    <p>
        In this sample, two-way binding support is achieved using the v-model directive in Vue. When you change the content in the RichTextEditor,the changed value gets updated automatically and displayed on the other RichTextEditor control.
    </p>
    <p>
      The v-model directive updates the template every time whenever the model gets updated and vice versa. 
    </p> 
    <p>More information on the RichTextEditor instantiation can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/rich-text-editor/getting-started.html" target="_blank"> documentation section</a>.</p>
 </div>

</div>

</template>
<style>
.forum .e-richtexteditor {
  margin-top : 40px;
}
@media (max-width: 550px) {
        .forum {
            padding: 20px 20px 60px 20px;
        }
    }

    @media (min-width: 550px) {
        .forum {
            margin: 0 auto;
            width: 80%;
            border: 1px solid #d8d8c0;
            padding: 10px 90px 60px 90px;
            box-shadow: 2px 2px 2px 2px #f5f5ef;
        }
        .highcontrast .forum {
            border: 1px solid #fff;
        }
    }
</style>
<script>
import Vue from "vue";
import {
  RichTextEditorPlugin,
  Toolbar,
  Link,
  Image,
  HtmlEditor
} from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

export default Vue.extend({
  name: "ModelBinding",
  data: function() {
    return {
      value: "<p>Type or edit the content in the RichTextEditor to see the action.</p>",
      isCreated: 0,
      isDestroyed: 0
    };
  },
  methods: {
    onCreated: function() {
      this.isCreated++;
    },
    onDestroyed: function() {
      this.isDestroyed++;
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor]
  }
});
</script>