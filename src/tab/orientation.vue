<template>
  <div class="control-section e-tab-section">
    <div class="col-lg-8 content-wrapper">
        <ejs-tab id="tab_orientation" :showCloseButton=true heightAdjustMode='Auto'>
            <e-tabitems>
                <e-tabitem :header='headerText0' :content='content0'></e-tabitem>
                <e-tabitem :header='headerText1' :content='content1'></e-tabitem>
                <e-tabitem :header='headerText2' :content='content2'></e-tabitem>
            </e-tabitems>
        </ejs-tab>
        <div id="action-description">
        <p>This sample demonstrates the <code>header</code> orientation of the <code>Tab</code>. Select option from drop-downs to switch header placement and changing the header style in properties panel.</p>
    </div>

    <div id="description">
        <p>The <code>Tab</code> allows to place the header section inside the Tab component either at <code>top/bottom</code> position by using <code>headerPlacement</code> property.</p>
        <p>This sample illustrates the use of header placement and <code>showCloseButton</code> property. Users can change the header position by changing the drop-down value options and can close the Tab item by clicking close icon in header.</p>
        <br>
        <p>The User can also view different header styles of Tab component by selecting options from `Header Styles` drop-down. Header styles changed by adding predefined classes in Tab root element and it class names listed below</p>
        <ul>
           <li>Material and Fabric theme differentiates all the available tab header styles such as <code>e-fill, e-background e-accent.</code></li>
           <li>In bootstrap theme, all the styles such as <code>e-fill</code> & <code>e-background e-accent</code> will have the same look with no difference.</li>
        </ul>
        <p>If above classes not included in root element default style will applied in Tab component.</p>
        <p>More information about Tab can be found in this <a href="" target="_blank">documentation</a> section.</p>
    </div>
    </div>
    <div class="col-lg-4 property-section">
                <table id="property" title="Properties">
                    <tr>
                        <td style="width:50%">Header Placement:</td>
                        <td style="width:50%">
                              <ejs-dropdownlist id='header-place' width='90%' :dataSource='dataPlace' :change='placeChange' :value='placeValue' :fields='placeFields'>
                            </ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:50%">Header Styles:</td>
                        <td style="width:50%">
                            <ejs-dropdownlist id='header-styles' width='90%' :dataSource='dataStyles' :change='styleChange' :value='styleValue' :fields='styleFields'>
                            </ejs-dropdownlist>
                        </td>
                    </tr>
                </table>
    </div>
</div>
</template>
<style>
  .e-tab .e-content .e-item {
    font-size: 12px;
    padding: 10px;
    text-align: justify;
}
.e-bigger .e-tab .e-list-item {
    height: 63px;
    border-bottom: 1px solid gainsboro;
}
.template-container {
    height: 63px;
    padding: 7px 16px 0 16px;
    border-bottom: 1px solid gainsboro;
}
.template-container:hover {
    background: #eee;
}
.left {
    display: inline-block;
    vertical-align: top;
}
.empImg {
    height: 48px;
    width: 48px;
}
.name, .role {
    font-size: 15px;
    line-height: normal;
}
.name {
    font-weight: 500;
}
.role {
    color: grey;
    font-weight: 100;
}
.info {
    padding: 7px 0 0 15px;
}
.content-title {
    height: 50px;
    display: table;
    margin: 0 auto;
}
.cnt-text {
    vertical-align: middle;
    display: table-cell;
    font-size: 18px;
    font-weight: 600;
}
#property td {
    padding-bottom: 10px;
}
.property-panel-content {
    padding: 10px;
}
@media only screen and (min-width: 1824px) {
    .e-tab-section .e-sample-resize-container {
        width: 60%;
    }

    .e-bigger .e-tab-section .e-sample-resize-container {
        width: 70%;
    }
}
.e-tab .e-tab-header .e-close-icon:before{
    content: '\e7fc';
    position: relative;
}
#tab_orientation .e-listview:not(.e-list-template) .e-list-item {
    height: 63px;
}
</style>
<script>
import Vue from "vue";
import { TabPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(TabPlugin);
export default Vue.extend({
     data: function(){
        return {
            headerText0: { text: 'Rome' },
            headerText1: { text: 'Paris' },
            headerText2: { text: 'London' },
            dataPlace: [{ id: 'top', position: 'Top' }, { id: 'bottom', position: 'Bottom' }],
            dataStyles: [{ id: 'default', class: 'Default' }, { id: 'fill', class: 'Fill' }, { id: 'accent', class: 'Accent' }],
            styleValue: 'default',
            styleFields: { text: 'class', value: 'id' },
            placeValue: 'top',
            placeFields: { text: 'position', value: 'id' },
            content0: '<div class="content-title"><div class="cnt-text">Employee Info</div></div><div id="rome">' +
        '<div class="template-container"><div class="left"><img class="empImg" src="src/tab/Employees/1.png" ' +
        'alt="Anne Dodsworth" /></div><div class="left info"><div class="name">Anne Dodsworth</div> <div class="role">' +
        'Product Manager</div></div></div><div class="template-container"><div class="left"><img class="empImg" ' +
        'src="src/tab/Employees/2.png" alt="Laura Callahan" /></div><div class="left info"><div class="name">' +
        'Laura Callahan</div> <div class="role">Team Lead</div></div></div><div class="template-container"><div ' +
        'class="left"><img class="empImg" src="src/tab/Employees/3.png" alt="Andrew Fuller" /></div><div ' +
        'class="left info"><div class="name">Andrew Fuller</div> <div class="role">Developer</div></div></div></div>',

        content1: '<div class="content-title"><div class="cnt-text">Employee Info</div></div><div id="rome">' +
        '<div class="template-container"><div class="left"><img class="empImg" src="src/tab/Employees/4.png" ' +
        'alt="Robert King" /></div><div class="left info"><div class="name">Robert King</div> <div class="role">' +
        'Team Lead</div></div></div><div class="template-container"><div class="left"><img class="empImg" ' +
        'src="src/tab/Employees/5.png" alt="Michael Suyama" /></div><div class="left info"><div class="name">' +
        'Michael Suyama</div> <div class="role">Developer</div></div></div><div class="template-container"><div ' +
        'class="left"><img class="empImg" src="src/tab/Employees/6.png" alt="Margaret Peacock" /></div><div ' +
        'class="left info"><div class="name">Margaret Peacock</div> <div class="role">Developer</div></div></div></div>',
   
        content2: '<div class="content-title"><div class="cnt-text">Employee Info</div></div><div id="rome">' +
        '<div id="ripple" class="template-container"><div class="left"><img class="empImg" src="src/tab/Employees/7.png" ' +
        'alt="Janet Leverling" /></div><div class="left info"><div class="name">Janet Leverling</div> <div class="role">' +
        'CEO</div></div></div><div class="template-container"><div class="left"><img class="empImg" ' +
        'src="src/tab/Employees/8.png" alt="Steven Buchanan" /></div><div class="left info"><div class="name">' +
        'Steven Buchanan</div> <div class="role">HR</div></div></div><div class="template-container"><div ' +
        'class="left"><img class="empImg" src="src/tab/Employees/9.png" alt="Nancy Davolio" /></div><div ' +
        'class="left info"><div class="name">Nancy Davolio</div> <div class="role">Product Manager</div></div></div></div>',
    }
   },
     methods: {
       placeChange: function(args) {
           let tabObj=document.getElementById('tab_orientation');
           if (args.value === 'bottom') {
               tabObj.ej2_instances[0].headerPlacement = 'Bottom';
            } else {
              tabObj.ej2_instances[0].headerPlacement = 'Top';
           }
           tabObj.ej2_instances[0].dataBind();
       },
       styleChange: function(args) {
            var name = args.value;
            let tabObj=document.getElementById('tab_orientation');
            tabObj.ej2_instances[0].element.classList.remove('e-fill');
            tabObj.ej2_instances[0].element.classList.remove('e-background');
            tabObj.ej2_instances[0].element.classList.remove('e-accent');
            if (name === 'fill') {
                tabObj.ej2_instances[0].element.classList.add('e-fill');
            } else if (name === 'accent') {
                tabObj.ej2_instances[0].element.classList.add('e-background');
                tabObj.ej2_instances[0].element.classList.add('e-accent');
            }
       }
    }
});
</script>