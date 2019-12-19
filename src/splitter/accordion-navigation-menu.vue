<template>
  <div>
    <div class="col-lg-12 control-section accordion-view">
      <div id="target" class="control_wrapper">
        <ejs-splitter id="splitter" ref="splitterObj" width="100%" height="288px">
          <e-panes>
            <e-pane size="39%" min="30%" :content="pane1Content"></e-pane>
            <e-pane size="65%" min="45%" :content="pane2Content"></e-pane>
          </e-panes>
        </ejs-splitter>
      </div>
    </div>
    <div id="action-description">
      <p>
        This example demonstrates the Accordion control that can be integrated within the split pane.
        Select the product from the left pane to display the corresponding product details on the right pane.
      </p>
    </div>
    <div id="description">
      <p>
        The Splitter is the layout user interface (UI) control and allows integrating other JavaScript UI controls within its pane.
        In this sample, the Splitter control is used to design navigation menu-like application using JavaScript Accordion control.
        The Accordion control is integrated within left pane to display the product menu and selected product details on right pane.
      </p>
    </div>
  </div>
</template>
<style>
.accordion-view #content {
  padding: 18px;
}
/* custom code start */
.accordion-view #target {
  margin: 20px auto;
  max-width: 600px;
}
/* custom code end */
.accordion-view.control-section {
  min-height: 370px;
}
.accordion-view .content {
  padding: 9px;
}
#splitter .e-pane.e-pane-horizontal {
 padding : 10px;
}
.accordion-view
  #splitter
  .e-accordion
  .e-acrdn-item
  .e-acrdn-panel
  .e-acrdn-content {
  padding: 0px;
}
.accordion-view #splitter .e-accordion,
.accordion-view #splitter .e-accordion .e-acrdn-item.e-select,
.accordion-view
  #splitter
  .e-accordion
  .e-acrdn-item.e-selected.e-select
  > .e-acrdn-header {
  border: none;
}
.accordion-view #splitter .e-acrdn-header-content {
  display: block;
  text-decoration: none;
}
.bootstrap .accordion-view #splitter .e-list-parent.e-ul li:nth-child(3),
.bootstrap4 .accordion-view #splitter .e-list-parent.e-ul li:nth-child(3) {
  border-bottom: none;
}
.bootstrap4 .accordion-view #splitter .e-listview {
  border: none;
}
</style>
<script>
import Vue from "vue";
import { SplitterPlugin } from "@syncfusion/ej2-vue-layouts";
import { AccordionPlugin } from "@syncfusion/ej2-vue-navigations";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";

Vue.use(AccordionPlugin);
Vue.use(ListViewPlugin);
Vue.use(SplitterPlugin);

let index = undefined;
let listid = undefined;

var bus = new Vue({});

var aspContent = Vue.component("asp", {
  template: `<div><h4>About ASP.NET</h4>Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.</div>`
});

var mvcContent = Vue.component("mvc", {
  template: `<div><h4>About ASP.NET MVC</h4>The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages.</div>`
});

var jsContent = Vue.component("js", {
  template: `<div><h4>About JavaScript</h4>JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.</div>`
});

var aspGridContent = Vue.component("aspGrid", {
  template: `<div>
        <h4>About ASP.NET Grid</h4>
        <div style="padding: 2px">
                The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format. Its wide range of functionalities includes data binding, editing, filtering, grouping, paging, freezing rows and columns, aggregation of rows, and exporting to Excel, CSV, and PDF formats.
        </div>
</div>`
});

var aspScheduleContent = Vue.component("aspSchedule", {
  template: `<div>
        <h4>About ASP.NET Schedule</h4>
        <div style="padding: 2px">
                The ASP.NET Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently. It features easy resource scheduling, rescheduling appointments through editor pop-ups, drag and drop, and a resizing action.
        </div>    
</div>`
});

var aspChartContent = Vue.component("aspChart", {
  template: `<div >
    <h4>About ASP.NET Charts</h4>
    <div style="padding: 2px">
        ASP.NET charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications. It contains a rich gallery of 30+ charts and graphs, ranging from line to financial charts, that cater to all charting scenarios. Its high performing quality helps to render a large amount of data quickly. It also comes with a lot of features such as zooming, panning, tooltip, crosshair, trackball, drill-down, and events to make the charts more interactive.
    </div>
</div>`
});

var mvcGridContent = Vue.component("mvcGrid", {
  template: `<div>
        <h4>About ASP.NET MVC Grid</h4>
        <div style="padding: 2px">
                The ASP.NET MVC DataGrid control, or DataTable for is a feature-rich control used to display data in a tabular format. Its wide range of functionalities includes data binding, editing, filtering, grouping, paging, freezing rows and columns, aggregation of rows, and exporting to Excel, CSV, and PDF formats.
        </div>
</div>`
});

var mvcScheduleContent = Vue.component("mvcSchedule", {
  template: `<div>
        <h4>About ASP.NET MVC Schedule</h4>
        <div style="padding: 2px">
                The ASP.NET MVC Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently. It features easy resource scheduling, rescheduling appointments through editor pop-ups, drag and drop, and a resizing action.
        </div>    
</div>`
});

var mvcChartContent = Vue.component("mvcChart", {
  template: `<div>
        <h4>About ASP.NET MVC Charts</h4>
        <div style="padding: 2px">
                ASP.NET MVC charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications. It contains a rich gallery of 30+ charts and graphs, ranging from line to financial charts, that cater to all charting scenarios. Its high performing quality helps to render a large amount of data quickly. It also comes with a lot of features such as zooming, panning, tooltip, crosshair, trackball, drill-down, and events to make the charts more interactive.
        </div>
</div>
        `
});

var jsGridContent = Vue.component("jsGrid", {
  template: `<div>
        <h4>About JavaScript Grid</h4>
        <div style="padding: 2px">
                The JavaScript DataGrid, or DataTable, is a feature-rich control for displaying data in a tabular format. Its wide range of functionalities includes data binding, editing, filtering, grouping, paging, freezing rows and columns, aggregating rows, and exporting to Excel, CSV, and PDF formats.
        </div>
</div>`
});

var jsScheduleContent = Vue.component("jsSchedule", {
  template: `<div>
        <h4>About JavaScript Schedule</h4>
        <div style="padding: 2px">
                The HTML5 JavaScript Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently. It features easy resource scheduling, rescheduling appointments through editor pop-ups, drag and drop, and a resizing action.
        </div>
</div>`
});

var jsChartContent = Vue.component("jsChart", {
  template: `<div>
        <h4>About JavaScript Charts</h4>
        <div style="padding: 2px">
                The HTML5 JavaScript charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications. It contains a rich gallery of 30+ charts and graphs, ranging from line to financial charts, that cater to all charting scenarios. Its high performing quality helps to render a large amount of data quickly. It also comes with a lot of features such as zooming, panning, tooltip, crosshair, trackball, drill-down, and events to make the charts more interactive.
        </div>
</div>`
});

var pane1Content = Vue.component("pane1", {
  template: `  <div>
    <div class="e-sample-resize-container">
        <ejs-accordion ref="Accordion_Nested" :expanding="expanding">
        <e-accordionitems>
            <e-accordionitem expanded='true' header='ASP.NET' content='#content1'></e-accordionitem>
            <e-accordionitem header='ASP.NET MVC' content='#content2'></e-accordionitem>
            <e-accordionitem header='JavaScript' content='#content3'></e-accordionitem>
        </e-accordionitems>
        </ejs-accordion>
    </div>
    <ejs-listview id="content1" :dataSource='data1' :select='onselect'></ejs-listview>
    <ejs-listview id="content2" :dataSource='data2' :actionBegin='onActionBegin'  :select='onselect'></ejs-listview>
    <ejs-listview id="content3" :dataSource='data3' :actionBegin='onActionBegin'  :select='onselect'></ejs-listview>
</div>`,
  data() {
    return {
      data1: [
        { text: "Grid", id: "1" },
        { text: "Schedule", id: "2" },
        { text: "Chart", id: "7" }
      ],
      data2: [
        { text: "Grid", id: "3" },
        { text: "Schedule", id: "4" },
        { text: "Chart", id: "8" }
      ],
      data3: [
        { text: "Grid", id: "5" },
        { text: "Schedule", id: "6" },
        { text: "Chart", id: "9" }
      ]
    };
  },
  methods: {
    onActionBegin: function() {
      document.getElementById("content2").style.display = "none";
      document.getElementById("content3").style.display = "none";
    },
    onselect: function(e) {
      listid = e.item.dataset.uid;
      switch (listid) {
        case "1":
          bus.$emit("pane-content", function() { return { template: aspGridContent }; });
          break;
        case "2":
          bus.$emit("pane-content", function() { return { template: aspScheduleContent }; });
          break;
        case "3":
          bus.$emit("pane-content", function() { return { template: mvcGridContent }; });
          break;
        case "4":
          bus.$emit("pane-content", function() { return { template: mvcScheduleContent }; });
          break;
        case "5":
          bus.$emit("pane-content", function() { return { template: jsGridContent }; });
          break;
        case "6":
          bus.$emit("pane-content", function() { return { template: jsScheduleContent }; });
          break;
        case "7":
          bus.$emit("pane-content", function() { return { template: aspChartContent }; });
          break;
        case "8":
          bus.$emit("pane-content", function() { return { template: mvcChartContent }; });
          break;
        case "9":
          bus.$emit("pane-content", function() { return { template: jsChartContent }; });
          break;
        default:
          break;
      }
    },
    expanding: function(e) {
      index = e.index;
      switch (index) {
        case 0:
          bus.$emit("pane-content", function() { return { template: aspContent }; });
          break;
        case 1:
          bus.$emit("pane-content", function() { return { template: mvcContent }; });
          break;
        case 2:
          bus.$emit("pane-content", function() { return { template: jsContent }; });
          break;
        default:
          break;
      }
    }
  }
});

export default Vue.extend({
  data: function() {
    return {
      pane1Content: function() {
        return { template: pane1Content };
      },
      pane2Content: function() {
        return { template: aspContent };
      }
    };
  },
  mounted: function() {
    bus.$on("pane-content", paneContent => {
      this.$refs.splitterObj.ej2Instances.paneSettings[1].content = paneContent;
    });
  }
});
</script>
