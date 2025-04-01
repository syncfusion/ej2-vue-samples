<template>
<div class="control-section">
    <div class="contextmenu-control">
        <div id='contextmenutarget'></div>
        <ejs-contextmenu cssClass="e-contextMenu-template" id="contextmenu" ref="contextMenu" target="#contextmenutarget" :items="data" :itemTemplate="'itemTemplate'" :beforeOpen="addtemplateClass" >
            <template v-slot:itemTemplate="{ data }">
                <div class="menu-wrapper">
                    <span :class="`${data.iconCss} icon-right`"></span>
                    <div class="text-content">
                        <span class="text">{{ data.answerType }}</span>
                        <span class="description">{{ data.description }}</span>
                    </div>
                </div>
            </template>
        </ejs-contextmenu>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the template functionality of the ContextMenu. Right-click or touch and hold the designated rectangular area to open the ContextMenu, which displays customized items using a template.</p>
</div>
<div id="description">
    <p>ContextMenu is a graphical user interface that appears on a right-click or touch-and-hold action. It supports displaying single-level or multi-level menus and allows for customizing the menu items through templates.</p>
    <p>
        In this demo, <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/context-menu/#itemtemplate">itemTemplate
        </a></code> property  is used to enable template support for customizing ContextMenu items. Each menu item is customized using a template to include icons, descriptive text, and additional content, offering a flexible and user-friendly interface.
    </p>
    <p>
        In mobile, the sub menu opens in a single layer with option for switching back to parent menu.
    </p>
    <p>
        More information about ContextMenu can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/context-menu/getting-started">
        documentation section</a>.
    </p>
</div>
</div>
</template>

<style>

/* custom code start */

/* template support css*/
    .e-contextMenu-template .menu-wrapper{
        display: flex;
        align-items: center;
        padding: 2px;
    }

    .e-contextMenu-template .menu-wrapper .text-content {
        display: flex;
        flex-direction: column;
    }

    .e-contextMenu-template .menu-wrapper .text {
        font-weight: 600;
    }

    .e-contextMenu-template .menu-wrapper .description {
        font-size: 0.8em;
    }

    .e-contextMenu-template .menu-wrapper .icon-right {
        padding: 8px 8px 8px 0px;
        font-size: 1.5em;
    }

    .e-contextMenu-template .e-caret {
        margin-top: -34px !important;
    }

    .e-contextMenu-template .e-menu-item {
        height: auto !important;
        line-height: unset !important;
    }

    .e-contextMenu-template .e-menu-item .e-previous {
        margin-right: 0 !important;
    }

    .contextmenu-control {
        margin: 5% 25%;
        width: auto;
        -webkit-touch-callout: none;
        /* iOS Safari */
        -webkit-user-select: none;
        /* Safari */
    }

    #contextmenutarget {
      border: 1px dashed;
      height: 250px;
      padding: 10px;
      position: relative;
      text-align: center;
      font-size: 14px;
      justify-content: center;
      display: flex;
      align-items: center;
    }

    @media only screen and (max-width: 700px) {
      .contextmenu-control {
        margin: 5% 10%;
        width: auto;
      }
      #contextmenutarget {
        font-size: 12px;
      }
    }
/* custom code end */

</style>

<script>
import { ContextMenuComponent } from "@syncfusion/ej2-vue-navigations";

export default {
  components: {
    'ejs-contextmenu': ContextMenuComponent
  },
  data: function() {
    return {
      data: [
        {
            answerType: 'Selection',
            description: "Choose from options",
            iconCss: 'e-icons e-list-unordered'
        },
        {
            answerType: 'Yes / No',
            description: "Select Yes or No",
            iconCss: 'e-icons e-check-box',
        },
        {
            answerType: 'Text',
            description: "Type own answer",
            iconCss: 'e-icons e-caption',
            items: [
                {
                    answerType: 'Single line',
                    description: "Type answer in a single line",
                    iconCss: 'e-icons e-text-form'
                },
                {
                    answerType: 'Multiple line',
                    description: "Type answer in multiple line",
                    iconCss: 'e-icons e-text-wrap',
                }
            ]
        },
        {
            answerType: 'None',
            iconCss: 'e-icons e-mouse-pointer',
            description: "No answer required"
        },
    ]
    };
  },
  methods: {
    addtemplateClass: function(args) {
      if (args.element.classList.contains('e-ul')) {
          args.element.classList.add('e-contextMenu-template')
      }
    }
  },
  mounted: function() {
      var menuObj = this.$refs.contextMenu.ej2Instances;
      if (window.browserDetails.isDevice) {
        document.getElementById("contextmenutarget").textContent =
          "Touch hold to open the Context Menu and select the answer type";
        menuObj.animationSettings.effect = "ZoomIn";
      } else {
        document.getElementById("contextmenutarget").textContent =
          "Right click/Touch hold to open the Context Menu and select the answer type";
        menuObj.animationSettings.effect = "SlideDown";
      }
  }
}
</script>
