<template>
<div>
    <div class="col-lg-12 control-section htmlTemplate">
        <!-- Tooltip element -->
        <ejs-tooltip ref="tooltip" target="#content" :created='created'
            cssClass="e-tooltip-template-css" opensOn="Click" :content="template1" :windowCollision='true' position="BottomCenter" :height='toolTipHeight'>
            <div id="customization">
                <ejs-button class="text" id="content">HTML Template</ejs-button>
            </div>
        </ejs-tooltip>
    </div>
    <div id="action-description">
        <p>This sample demonstrates customizing tooltip content to display a HTML page.</p>
    </div>
    <div id="description">
        <p> Tooltip <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/tooltip/#content">content</a> has been customized using HTML tags and CSS, i.e. the content can be loaded with
            HTML tags such as &lt;img&gt;, &lt;a&gt;,&lt;b&gt;, etc. Title can also be added to the content.
            Overall, the tooltip content can be customized to appear like a web page.</p>
    </div>
</div>
</template>
<script>
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { Browser } from '@syncfusion/ej2-base';

export default {
  components: {
    'ejs-tooltip': TooltipComponent,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
      template1: `
        <div id="democontent" class="democontent">
          <h3 style="margin-top:10px">Eastern Bluebird</h3>
          <hr style="margin:10px 0" />
          <img id="bird" src="source/tooltip/images/bird.png" />
          <p>The
            <a href="https://en.wikipedia.org/wiki/Eastern_bluebird" target="_blank"> Eastern Bluebird</a>
            is easily found in open fields and sparse woodland areas, including along woodland edges.</p>
        </div>
      `,
      toolTipHeight:"auto",
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
        if (args) {
            const parentNode = args.target.parentNode;
            const grandParentNode = parentNode?.parentNode;
    
            if (grandParentNode && !grandParentNode.classList.contains("e-tooltip")) {
                if (this.$refs.tooltip && document.getElementsByClassName("e-tooltip-wrap").length > 0) {
                    this.$refs.tooltip.ej2Instances.close();
                }
            }
        }
    },
    onScroll: function() {
      if (
        this.$refs.tooltip &&
        document.getElementsByClassName("e-tooltip-wrap").length > 0
      ) {
        this.$refs.tooltip.ej2Instances.close();
      }
    }
  }
}
</script>
<style>
.htmlTemplate {
  height: 385px;
}

body.material3 #htmlTemplate,
body.material3-dark #htmlTemplate {
  height: 450px;
}

.htmlTemplate #customization {
  display: table;
  margin: 0 auto;
}

.e-tooltip-template-css {
  filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.25));
}

.e-tooltip-template-css #democontent {
  font-size: 14px;
  line-height: 20px;
  padding-left: 12px;
  padding-right: 5px;
}

.e-tooltip-template-css #democontent #bird {
  float: right;
  margin-left: 8px;
  height: 125px;
  width: 125px;
}

.material .e-tooltip-template-css #democontent,
.bootstrap .e-tooltip-template-css #democontent {
  border-color: #d2d2d2;
}

.fabric .e-tooltip-template-css #democontent,
.highcontrast .e-tooltip-template-css #democontent {
  border-color: #cccccc;
}

.e-tooltip-template-css #democontent a.{
  color: #62e0f7;
}

.bootstrap4 .e-tooltip-template-css {
  filter: none;
}

</style>
