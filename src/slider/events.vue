<template>
  <div>
    <div class="col-lg-8 control-section events">
      <div class="content-wrapper">
        <div class="sliderwrap">
          <!-- Slider element -->
          <ejs-slider
            id="minrange"
            ref="minslider"
            :value="value"
            :min="min"
            :max="max"
            :type="type"
            :ticks="ticks"
            :tooltip="tooltip"
            :created="onCreated"
            :change="onChange"
            :changed="onChanged"
          ></ejs-slider>
        </div>
      </div>
    </div>

    <div id="slider_event" class="col-lg-4 property-section">
      <table id="property" title="Event Trace">
        <tr>
          <td>
            <div class="eventarea" style="height: 245px;overflow: auto">
              <!-- Event log element -->
              <span class="EventLog" id="EventLog" style="word-break: normal;"></span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="evtbtn" style="padding-top:10px;padding-bottom: 10px">
              <!-- clear button element -->
              <button
                id="clear"
                type="button"
                class="e-control e-btn e-primary"
                value="Clear"
                v-on:click="onClear"
              >Clear</button>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the events that have been triggered on the Slider operations with the help of event trace panel.
        Drag the thumb over the bar between min and max to know the event details.
      </p>
    </div>

    <div id="description">
      <p>
        Slider component triggers the event based on its actions. The events can be used as an extension point to perform custom
        operations.
      </p>
      <p>In this demo, Slider performs following actions which can be traced by event trace panel:</p>
      <ul>
        <li>Created - Triggers when Slider is created.</li>
        <li>Change - Triggers when the Slider value is changed.</li>
        <li>Changed - Triggers when the Slider action is completed with change in Slider value.</li>
      </ul>
      <p>
        For more information, refer to the
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/api-slider.html#events"
        >events</a> API from the documentation.
      </p>
    </div>
  </div>
</template>

<style>
.property-section {
  margin-top: 20px;
}
.events .content-wrapper {
  padding-top: 50px;
  width: 55%;
  margin: 0 auto;
  min-width: 185px;
}

.events .sliderwrap {
  margin-top: 40px;
}

.e-bigger .content-wrapper {
  width: 80%;
}

.userselect {
  -webkit-user-select: none;
  /* Safari 3.1+ */
  -moz-user-select: none;
  /* Firefox 2+ */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}

#EventLog b {
  color: #388e3c;
}

hr {
  margin-top: 6px;
  margin-bottom: 6px;
}

#slider_event .property-panel-table div {
  margin-top: -4px;
  padding-bottom: 0px;
}

#slider_event.property-section {
  margin-bottom: -19px;
}
</style>

<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
Vue.use(ButtonPlugin);
Vue.use(SliderPlugin);

export default Vue.extend({
  data: function() {
    return {
      value: 30,
      min: 0,
      max: 100,
      type: "MinRange",
      ticks: {
        placement: "Both",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      tooltip: { isVisible: true, placement: "Before", showOn: "Focus" }
    };
  },
  methods: {
    onCreated: function(args) {
      this.appendElement("Slider control has been <b>created</b><hr>");
    },
    onChange: function(args) {
      this.appendElement(
        "Slider value is <b>changing</b> from " +
          args.previousValue +
          "  to  " +
          args.value +
          "<hr>"
      );
    },
    onChanged: function(args) {
      this.appendElement(
        "Slider value has been <b>changed</b> from " +
          args.previousValue +
          "  to  " +
          args.value +
          "<hr>"
      );
    },
    appendElement: function appendElement(html) {
      var span = document.createElement("span");
      span.innerHTML = html;
      var log = document.getElementById("EventLog");
      log.insertBefore(span, log.firstChild);
    },
    onClear: function() {
      document.getElementById("EventLog").innerHTML = "";
    },
    onScroll: function() {
      if (
        !isNullOrUndefined(document.getElementById("minrange")) &&
        this.$refs.minslider
      ) {
        this.$refs.minslider.ej2Instances.refreshTooltip(this.$refs.minslider.ej2Instances.tooltipTarget);
      }
    }
  },
  mounted: function() {
    if (document.getElementById("right-pane")) {
      document
        .getElementById("right-pane")
        .addEventListener("scroll", this.onScroll.bind(this));
    }
  }
});
</script>
