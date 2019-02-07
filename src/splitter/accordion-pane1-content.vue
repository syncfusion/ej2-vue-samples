<template>
  <div>
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
</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { AccordionPlugin } from "@syncfusion/ej2-vue-navigations";
import { Accordion, ExpandEventArgs } from '@syncfusion/ej2-navigations';
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { ListView } from '@syncfusion/ej2-lists';
import { Ajax } from '@syncfusion/ej2-base';
Vue.use(AccordionPlugin);
Vue.use(ListViewPlugin);
let index = undefined;
let splitterobj = undefined;
let listid = undefined;
export default Vue.extend({
    data: function() {
        return {
            data1: [
                { text: 'Grid', id: '1' },
                { text: 'Schedule', id: '2'},
                { text: 'Chart', id: '7'}
            ],
            data2: [
                { text: 'Grid', id: '3' },
                { text: 'Schedule', id: '4'},
                { text: 'Chart', id: '8'}
            ],
            data3: [
                { text: 'Grid', id: '5' },
                { text: 'Schedule', id: '6'},
                { text: 'Chart', id: '9'}
            ]
        };
    },
   methods: {
       onActionBegin: function() {
           document.getElementById('content2').style.display = 'none';
           document.getElementById('content3').style.display = 'none';
       },
        onselect: function(e) {
            listid = e.item.dataset.uid;
            splitterobj = document.getElementById('splitter').ej2_instances[0];
            switch (listid) {
            case '1':
                let ajax = new Ajax('./src/splitter/aspnet-grid-ajax.html', 'GET', true);
                ajax.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax.send();
                break;
            case '2':
                let ajax1 = new Ajax('./src/splitter/aspnet-schedule-ajax.html', 'GET', true);
                ajax1.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax1.send();
                break;
            case '3':
                let ajax2 = new Ajax('./src/splitter/aspnetmvc-grid-ajax.html', 'GET', true);
                ajax2.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax2.send();
                break;
            case '4':
                let ajax3 = new Ajax('./src/splitter/aspnetmvc-schedule-ajax.html', 'GET', true);
                ajax3.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax3.send();
                break;
            case '5':
                let ajax4 = new Ajax('./src/splitter/javascript-grid-ajax.html', 'GET', true);
                ajax4.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax4.send();
                break;
            case '6':
                let ajax5 = new Ajax('./src/splitter/javascript-schedule-ajax.html', 'GET', true);
                ajax5.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax5.send();
                break;
            case '7':
                let ajax6 = new Ajax('./src/splitter/aspnet-chart-ajax.html', 'GET', true);
                ajax6.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax6.send();
                break;
            case '8':
                let ajax7 = new Ajax('./src/splitter/aspnetmvc-chart-ajax.html', 'GET', true);
                ajax7.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax7.send();
                break;
            case '9':
                let ajax8 = new Ajax('./src/splitter/javascript-chart-ajax.html', 'GET', true);
                ajax8.onSuccess = (data) => {
                   splitterobj.paneSettings[1].content = data;
                };
                ajax8.send();
                break;
            }
        },
       expanding: function(e) {
        index = e.index;
        splitterobj = document.getElementById('splitter').ej2_instances[0];
        switch (index) {
            case 0:
                splitterobj.paneSettings[1].content = '<div id="content"><h4>About ASP.NET</h4>Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.</div>';
                break;
            case 1:
                splitterobj.paneSettings[1].content = '<div id="content"><h4>About ASP.NET MVC</h4>The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages.</div>';
                break;
            case 2:
                splitterobj.paneSettings[1].content = '<div id="content"><h4>About JavaScript</h4>JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.</div>';
                break;
        }
    }
   }
});
</script>