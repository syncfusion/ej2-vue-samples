<template>
  <div>
    <div class="col-lg-12 control-section details-view">
        <div id="target" class="control_wrapper">
            <ejs-splitter id='splitter' ref='splitterObj' class='splitterContent' width='100%' height='292px'>
                    <e-panes>
                        <e-pane size="35%" min="25%" :content='pane1Content'></e-pane>
                        <e-pane size="65%" min ="45%" :content='pane2Content'></e-pane>
                    </e-panes>
            </ejs-splitter>
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the Splitter control that is used to design details view page. 
            Select the employee from left pane to display the corresponding employee details on the right pane.
        </p>
    </div>
    <div id="description">
        <p>
            The Splitter is the layout user interface (UI) control, which integrates other JavaScript UI controls within its pane. 
            In this sample, the JavaScript ListView control is integrated within left pane to display the employee list and right pane 
            to display the corresponding employee details. 
        </p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { ListViewPlugin, Virtualization } from "@syncfusion/ej2-vue-lists";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ListViewPlugin);
Vue.use(SplitterPlugin);

let commonData = [];
let dataSource = {};
let liElement = undefined;
let listid = undefined;

var Margaret = Vue.component("margaret", {
  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/margaret.png' alt='margaret'></div></div><div class='profile-name'>Margeret Peacock</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>11/15/1994</td></tr><tr><td class='e-bold'>Address</td><td>507 - 20th Ave. E. Apt. 2A</td></tr><tr><td class='e-bold'>City</td><td>Seattle</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-9857</td></tr></table></div>`
});

var Laura = Vue.component("laura", {
  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/laura.png' alt='laura'></div></div><div class='profile-name'>Laura Callahan</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>09/25/1993</td></tr><tr><td class='e-bold'>Address</td><td>908 W. Capital Way</td></tr><tr><td class='e-bold'>City</td><td>Tacoma</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-9482</td></tr></table></div>`
});

var Robert = Vue.component("robert", {
  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/robert.png' alt='robert'></div></div><div class='profile-name'>Robert King</div><table><tr><td class='e-bold'>Title</td><td>Sales Manager</td></tr><tr><td class='e-bold'>Hire Date</td><td>03/20/1990</td></tr><tr><td class='e-bold'>Address</td><td>14 Garrett Hill</td></tr><tr><td class='e-bold'>City</td><td>London</td></tr><tr><td class='e-bold'>Phone</td><td>(71) 555-4848</td></tr></table></div>`
});

var Albert = Vue.component("albert", {
  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/albert.png' alt='albert'></div></div><div class='profile-name'>Albert Dodsworth</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>10/5/1996</td></tr><tr><td class='e-bold'>Address</td><td>7 Houndstooth Rd.</td></tr><tr><td class='e-bold'>City</td><td>London</td></tr><tr><td class='e-bold'>Phone</td><td>(71) 555-4444</td></tr></table></div>`
});

var Michale = Vue.component("michale", {
  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/michale.png' alt='michale'></div></div><div class='profile-name'>Michale Suyama</div><table><tr><td class='e-bold'>Title</td><td>Inside Sales Coordinator</td></tr><tr><td class='e-bold'>Hire Date</td><td>06/10/1998</td></tr><tr><td class='e-bold'>Address</td><td>4726 - 11th Ave. N.E.</td></tr><tr><td class='e-bold'>City</td><td>Seattle</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-1189</td></tr></table></div>`
});

var pane1Content = Vue.component("pane1", {
  template: `<div>
    <div>
        <!-- ListView element -->
        <ejs-listview id='ui-list' ref='listviewObj' :dataSource='listData' :fields='fields'
            :height='height' :cssClass='cssClass' :enableVirtualization='enableUi' :select='onSelect' :actionComplete='onActionComplete'
            :actionBegin='onActionBegin' :template='gTemplate'>
        </ejs-listview>
    </div>
</div>`,
beforeCreate: function() {
        commonData = [{
                name: "Margaret",
                imgUrl: './src/splitter/images/margaret.png',
                id: "1"
            },
            {
                name: "Laura",
                imgUrl: './src/splitter/images/laura.png',
                id: "2"
            },
            {
                name: "Robert",
                icon: 'R',
                id: "3"
            },
            {
                name: "Albert",
                imgUrl: './src/splitter/images/albert.png',
                id: "4"
            },
            {
                name: "Michale",
                icon: 'M',
                id: "5"
            }];
        [
            [5, "data1"]
        ].forEach(ds => {
            let data = commonData.slice();
            dataSource[ds[1]] = data;
        });
    },
  data() {
    return {
                  gTemplate: '<div class="e-list-wrapper e-list-avatar">' +
            '<span class="e-avatar e-avatar-circle ${icon} ${$imgUrl ? \'hideUI\' : \'showUI\' }">' +
            '${icon}</span> <img class="e-avatar e-avatar-circle ${$imgUrl ? \'showUI\' : \'hideUI\' }" ' +
            'src="${$imgUrl ?  $imgUrl : \' \' }" />' +
            '<span class="e-list-content">${name}</span></div>',
            listData: dataSource.data1,
            cssClass: 'e-list-template',
            fields: {
                text: "name"
            },
            height: 289,
            enableUi: true
    };
  },
    methods: {
        onActionBegin: function() {
            liElement = document.getElementById("ui-list");
            if (Browser.isDevice) {
                liElement.classList.add("ui-mobile");
            }
        },
        onActionComplete: function() {
                this.$refs.listviewObj.ej2Instances.selectItem(dataSource.data1[0]);
        },
        onSelect: function(e) {
            listid = e.item.dataset.uid;
            switch (listid) {
                case '1':
                    bus.$emit("pane-content", function() { return { template: Margaret }; });
                    break;
                case '2':
                    bus.$emit("pane-content", function() { return { template: Laura }; });
                    break;
                case '3':
                    bus.$emit("pane-content", function() { return { template: Robert }; });
                    break;
                case '4':
                    bus.$emit("pane-content", function() { return { template: Albert }; });
                    break;
                case '5':
                    bus.$emit("pane-content", function() { return { template: Michale }; });
                    break;
                default:
                    break;
            }
        }
    },
    provide: {
        listview: [Virtualization]
    }
});

var bus = new Vue({});

export default Vue.extend({
    data: function() {
        return {
            pane1Content: function () {
                return { template : pane1Content }
            },
            pane2Content: function () {
                return { template : Margaret }
            },
        }
    },
    mounted: function () {
        bus.$on("pane-content", paneContent => {
            debugger;
            this.$refs.splitterObj.ej2Instances.paneSettings[1].content = paneContent;
        });
    }
});
</script>
<style>
    .details-view #splitter .e-avatar.e-avatar-xlarge {
        font-size: 22px;
    }
    .details-view .header-image {
        text-align: center;
        margin-top: 7px;
    }
    .details-view .e-custom-card .e-avatar {
        font-size: 40px;
        position: absolute;
        top: calc(0% - 1.5em);
        left: calc(50% - 1.5em);
        box-shadow: 0 16px 28px -8px rgba(0, 0, 0, .36), 0 4px 15px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
    }
    /* custom code start */
    .details-view #target {
        margin: 20px auto;
        max-width: 710px;
    }
    /* custom code end */
    /* ListView template customization */

    .details-view #ui-list.e-listview .showUI {
        display: flex;
    }
    .details-view #ui-list.e-listview .hideUI {
        display: none;
    }
    .details-view #ui-list.e-listview .e-list-item {
        padding: 3px 0;
    }
    .details-view #ui-list.e-listview .R {
        background: lightgrey;
    }
    .details-view #ui-list.e-listview .M {
        background: lightblue;
    }

    .details-view .highcontrast #ui-list.e-listview .e-list-item.e-active {
        background: #ffd939;
        color: #000000;
    }
    .details-view table {
        border-collapse: collapse;
        border-spacing: 0;
        width: calc(100% - 20px);
        margin: 10px;
    }
    .details-view table th,
    .details-view table td {
        font-weight: normal;
        padding: 5px;
        text-align: left;
        border: 1px solid #ddd
    }
    .details-view .e-bold {
        font-weight: 550;
    }
    .details-view .profile-name {
        font-weight: 550;
        font-size: 14px;
        text-align: center;
    }
</style>
