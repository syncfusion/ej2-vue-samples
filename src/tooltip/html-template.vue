<template>
<div>
    <div id="htmlTemplate" class="col-lg-12 control-section">
        <!-- Tooltip element -->
        <ejs-tooltip ref="tooltip" target="#content" :beforeRender="onBeforeRender" :created='created' :showTipPointer="show"
            cssClass="e-tooltip-template-css" opensOn="Click" :content="template1">
            <div id="customization">
                <ejs-button class="text" id="content">HTML Template</ejs-button>
            </div>
        </ejs-tooltip>
    </div>
    <div id="action-description">
        <p>This sample demonstrates customizing tooltip content to display a HTML page.</p>
    </div>
    <div id="description">
        <p> Tooltip content has been customized using HTML tags and CSS, i.e. the content can be loaded with
            HTML tags such as &lt;img&gt;, &lt;a&gt;,&lt;b&gt;, etc. Title can also be added to the content.
            Overall, the tooltip content can be customized to appear like a web page.</p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);

export default Vue.extend({
  data: function() {
    return {
      template1: `
        <div id="democontent" class="democontent">
          <h3 style="margin-top:10px">Eastern Bluebird</h3>
          <img id="bird" src="./src/tooltip/images/bird.png" />
          <p>The
            <a href="https://en.wikipedia.org/wiki/Eastern_bluebird" target="_blank"> Eastern Bluebird</a>
            is easily found in open fields and sparse woodland areas, including along woodland edges. These are cavity-nesting birds
            and a pair of eastern bluebirds will raise 2-3 broods annually, with 2-8 light blue or whitish eggs per brood.</p>
          <hr style="margin:10px 0" />
          <p>Eastern bluebirds can be very vocal in flocks. Their calls include a rapid, mid-tone chatter and several long dropping pitch
            calls.</p>
          <p>Source:<br/>
            <a href="https://en.wikipedia.org/wiki/Eastern_bluebird" target="_blank">https://en.wikipedia.org/wiki/Eastern_bluebird</a>
          </p>
        </div>
      `
    };
  },
  methods: {
    created: function() {
      if (document.getElementById("right-pane")) {
        document
          .getElementById("right-pane")
          .addEventListener("click", this.onClick);
        document
          .getElementById("right-pane")
          .addEventListener("scroll", this.onScroll);
      }
    },
    onClick: function(args) {
      if (
        args &&
        !args.target.parentNode.parentNode.classList.contains("e-tooltip")
      ) {
        if (
          this.$refs.tooltip &&
          document.getElementsByClassName("e-tooltip-wrap").length > 0
        ) {
          this.$refs.tooltip.close();
        }
      }
    },
    onScroll: function() {
      if (
        this.$refs.tooltip &&
        document.getElementsByClassName("e-tooltip-wrap").length > 0
      ) {
        this.$refs.tooltip.close();
      }
    }
  }
});
</script>
<style>
#htmlTemplate {
  height: 385px;
}

#htmlTemplate #customization {
  display: table;
  margin: 0 auto;
}

.e-tooltip-template-css {
  filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.25));
}

#democontent {
  font-size: 14px;
  line-height: 20px;
  border: 0.5px solid;
  padding-left: 12px;
  padding-right: 5px;
}

#democontent #bird {
  float: right;
  margin-left: 8px;
  height: 125px;
  width: 125px;
}

.material #democontent,
.bootstrap #democontent {
  border-color: #d2d2d2;
}

.fabric #democontent,
.highcontrast #democontent {
  border-color: #cccccc;
}

#democontent a {
  color: #62e0f7;
}

.bootstrap4 .e-tooltip-template-css {
  filter: none;
}

</style>
