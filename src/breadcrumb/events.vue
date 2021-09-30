<template>
<div>
<div class="control-section col-lg-8" style="border-right: 1px solid #D7D7D7;">
    <div class="content-wrapper breadcrumb-control-wrapper">
      <div class="row material2">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
            <h5>Breadcrumb with Events</h5>
        </div>
    </div>
    <div class="row material2">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 e-breadcrumb-icons">
            <ejs-breadcrumb :created="createdHandler" :itemClick="clickHandler" :beforeItemRender="beforeItemRenderHandler">
                    <e-breadcrumb-items>
                        <e-breadcrumb-item text="Program Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Commom Files" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Services" iconCss="e-bicons e-folder"></e-breadcrumb-item>
                        <e-breadcrumb-item text="Config.json" iconCss="e-bicons e-file"></e-breadcrumb-item>
                    </e-breadcrumb-items>
                </ejs-breadcrumb>
        </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 property-section">
    <table id="property" title="Event Trace">
      <tr>
        <td>
          <div class="eventarea" style="height: 245px;overflow: auto">
            <span class="EventLog" id="EventLog" style="word-break: normal;"></span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="evtbtn" style="padding-bottom: 10px">
            <button v-on:click="clearLog" class="e-btn" id="clear">Clear Log</button>
          </div>
        </td>
      </tr>
    </table>
  </div>


<div id="action-description">
    <p>This sample demonstrates the events that have been triggered on <code>Breadcrumb</code> actions. The event details are showcased in the event trace panel.</p>
</div>
<div id="description">
    <p>In this demo, <code>Breadcrumb</code> performs following actions which can be traced by event trace panel:</p>
    <ul>
        <li>created - Triggers when the Breadcrumb is created.</li>
        <li>itemClick - Triggers when a Breadcrumb item is clicked.</li>
        <li>beforeItemRender - Triggers while rendering each Breadcrumb item.</li>
    </ul>
    <p>More information about <code>Breadcrumb</code> component can be found in this <a target='_blank' href="https://ej2.syncfusion.com/vue/documentation/breadcrumb/getting-started/">documentation section</a>.</p>
</div>
</div>
</template>

<!-- custom code start -->
<style>
.breadcrumb-control-wrapper {
  width: 90% !important;
  margin: 0 auto;
  min-width: 85px;
}

.breadcrumb-control-wrapper div.row {
  padding: 15px 0px;
}

@media only screen and (max-width: 480px) {
  .breadcrumb-control-wrapper {
      width: 92%;
  }

  .col-xs-12,
  .col-xs-4,
  .col-xs-12 {
      padding: 10px 5px;
      width: 100%;
  }

  .breadcrumb-control-wrapper div.row {
      padding: 0px;
  }
}

#EventLog b{
color: #388e3c;
}
hr {
margin: 1px 10px 1px 0px;
border-top: 1px solid #eee;
}

.tailwind .e-breadcrumb,
.tailwind-dark .e-breadcrumb {
    margin-left: -12px;
}

.material .e-breadcrumb,
.material-dark .e-breadcrumb {
    margin-left: -8px;
}

.fabric .e-breadcrumb,
.fabric-dark .e-breadcrumb,
.highcontrast .e-breadcrumb {
    margin-left: -4px;
}
</style>
<!-- custom code end -->
<style>
    @font-face {
        font-family: 'e-breadcrumb-icons';
        src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .e-breadcrumb-icons .e-bicons {
        font-family: 'e-breadcrumb-icons' !important;
        font-size: 14px;
    }

    .e-breadcrumb-icons .e-folder:before {
        content: "\e704";
    }

    .e-breadcrumb-icons .e-file:before {
        content: "\e703";
    }
</style>

<script>
import Vue from "vue";
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);

export default Vue.extend({
  data: function() {
    return {
      
    };
  },
  methods: {
      createdHandler: function() {
        this.logEvent('created');
      },
      clickHandler: function(args) {
        this.logEvent(args.name);
      },
      beforeItemRenderHandler: function(args) {
          this.logEvent(args.name);
      },
      clearLog: function() {
          document.getElementById('EventLog').innerHTML = '';
      },
      logEvent: function(eventName) {
            var span = document.createElement('span');
            span.innerHTML = 'Breadcrumb <b>' + eventName  + '</b> event called<hr>';
            var log = document.getElementById('EventLog');
            log.insertBefore(span, log.firstChild);
      }

  }
});
</script>