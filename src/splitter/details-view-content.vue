<template>
<div>
    <div>
        <!-- ListView element -->
        <ejs-listview id='ui-list' ref='listviewObj' :dataSource='listData' :fields='fields'
            :height='height' :cssClass='cssClass' :enableVirtualization='enableUi' :select='onSelect' :actionComplete='onActionComplete'
            :actionBegin='onActionBegin' :template='gTemplate'>
        </ejs-listview>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { ListViewPlugin, Virtualization } from "@syncfusion/ej2-vue-lists";
import { Browser } from "@syncfusion/ej2-base";
Vue.use(ListViewPlugin);
let commonData = [];
let dataSource = {};
let liElement = undefined;
let listObj = undefined;
let listid = undefined;
let splitterobj = undefined;
export default Vue.extend({
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
                id: "5"
            },
            {
                name: "Michale",
                icon: 'M',
                id: "4"
            }];
        [
            [5, "data1"]
        ].forEach(ds => {
            let data = commonData.slice();
            dataSource[ds[1]] = data;
        });
    },
    data: function() {
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
            this.$refs.listviewObj.$el.ej2_instances[0].selectItem(dataSource.data1[0]);
        },
        onSelect: function(e) {
            listid = e.item.dataset.uid;
            splitterobj = document.getElementById('splitter').ej2_instances[0];
            switch (listid) {
                case '1':
                    splitterobj.paneSettings[1].content = "<div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/margaret.png' alt='margaret'></div></div><div class='profile-name'>Margeret Peacock</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>11/15/1994</td></tr><tr><td class='e-bold'>Address</td><td>507 - 20th Ave. E. Apt. 2A</td></tr><tr><td class='e-bold'>City</td><td>Seattle</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-9857</td></tr></table>";
                    break;
                case '2':
                    splitterobj.paneSettings[1].content = "<div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/laura.png' alt='laura'></div><div class='profile-name'>Laura Callahan</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>09/25/1993</td></tr><tr><td class='e-bold'>Address</td><td>908 W. Capital Way</td></tr><tr><td class='e-bold'>City</td><td>Tacoma</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-9482</td></tr></table>";
                    break;
                case '3':
                    splitterobj.paneSettings[1].content = "<div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/robert.png' alt='robert'></div><div class='profile-name'>Robert King</div><table><tr><td class='e-bold'>Title</td><td>Sales Manager</td></tr><tr><td class='e-bold'>Hire Date</td><td>03/20/1990</td></tr><tr><td class='e-bold'>Address</td><td>14 Garrett Hill</td></tr><tr><td class='e-bold'>City</td><td>London</td></tr><tr><td class='e-bold'>Phone</td><td>(71) 555-4848</td></tr></table>";
                    break;
                case '4':
                    splitterobj.paneSettings[1].content = "<div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/michale.png' alt='michale'></div><div class='profile-name'>Michale Suyama</div><table><tr><td class='e-bold'>Title</td><td>Inside Sales Coordinator</td></tr><tr><td class='e-bold'>Hire Date</td><td>06/10/1998</td></tr><tr><td class='e-bold'>Address</td><td>4726 - 11th Ave. N.E.</td></tr><tr><td class='e-bold'>City</td><td>Seattle</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-1189</td></tr></table>";
                    break;
                case '5':
                    splitterobj.paneSettings[1].content = "<div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./src/splitter/images/albert.png' alt='albert'></div><div class='profile-name'>Albert Dodsworth</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>10/5/1996</td></tr><tr><td class='e-bold'>Address</td><td>7 Houndstooth Rd.</td></tr><tr><td class='e-bold'>City</td><td>London</td></tr><tr><td class='e-bold'>Phone</td><td>(71) 555-4444</td></tr></table>";
                    break;
            }
        }
    },
    provide: {
        listview: [Virtualization]
    }
});
</script>
