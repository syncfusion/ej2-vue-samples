<template>
<div>
    <div class="col-lg-8 control-section virtualization">
        <!-- ListView element -->
        <ejs-listview id='ui-list' ref="list" :dataSource='listData' :showHeader='header' :fields='fields' :headerTitle='title'
        :height='height' :cssClass='cssClass' :enableVirtualization='enableUi' :actionComplete='onActionComplete'
        :actionBegin='onActionBegin' :template="'gTemplate'">
            <template v-slot:gTemplate="{ data }">
                <div class="e-list-wrapper e-list-avatar" >
                    <span :class="['e-avatar e-avatar-circle ' + data.icon + ' showUI']" v-if="data.imgUrl == undefined">{{ data.icon }}</span>
                    <span :class="['e-avatar e-avatar-circle ' + data.icon + ' hideUI']" v-if="data.imgUrl !== undefined">{{ data.icon }}</span> 
                    <img :class="['e-avatar e-avatar-circle showUI']" :src="data.imgUrl" v-if="data.imgUrl !== undefined" :alt="data.altText"/>
                    <img :class="['e-avatar e-avatar-circle hideUI']" :src="data.imgUrl" v-if="data.imgUrl == undefined" :alt="data.altText"/>
                    <span class="e-list-content">{{ data.name }}</span>
                </div>
            </template>
        </ejs-listview>
    </div>
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties">
            <tbody>
                <tr>
                    <td style="width: 50%">
                        <div class="userselect">Load data</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div>
                            <ejs-dropdownlist id='ddl' :dataSource='ddlData' :fields='ddlField' index=0 :change='onChange' placeholder='Select a Range'
                                popupHeight='200px'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">
                        <div class="userselect">Time taken</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div style="padding-left: 10px;">
                            <span id="time">0 ms</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of UI virtualization. Scroll list item to experience UI virtualization.
        </p>
    </div>
    <div id="description">
        <p>
            UI virtualization is an optimization technique to avoid unnecessarily constructing and rendering objects for list items by loading only visible list items in a view port. This helps improve ListView performance when loading a large number of items. The
            list items are updated dynamically while users scroll the list. The virtualization can be enabled by using the <code><a target='_blank' class='code' href='https://ej2.syncfusion.com/vue/documentation/api/list-view#enablevirtualization'>enableVirtualization</a></code> API in Listview.
        </p>
    </div>
</div>
</template>
<style>
/* ListView position alignment */

#ui-list.e-listview {
    margin: auto;
    max-width: 325px;
    line-height: initial;
    border: 1px solid lightgray;
}

/* ListView header alignment */

#ui-list.e-listview .e-list-header {
    height: 50px
}

#ui-list.e-listview .e-list-header .e-text {
    line-height: 18px
}

/* ListView template customization */

#ui-list.e-listview .showUI {
    display: flex;
}

#ui-list.e-listview .hideUI {
    display: none;
}

#ui-list.e-listview .R {
    background: lightgrey;
}

#ui-list.e-listview .M {
    background: pink;
}

#ui-list.e-listview .A {
    background: lightgreen;
}

#ui-list.e-listview .S {
    background: lightskyblue;
}

#ui-list.e-listview .J {
    background: orange;
}

#ui-list.e-listview .N {
    background: lightblue;
}

/* ListView theme customization */

.highcontrast #ui-list.e-listview .e-list-item:not(.e-hover),
.highcontrast #ui-list.e-listview .e-list-header {
    background: rgb(0, 0, 0);
}

.highcontrast #ui-list.e-listview .e-list-item.e-active {
    background: #ffd939;
    color: #000000;
}

</style>
<script>
import { ListViewComponent, Virtualization } from "@syncfusion/ej2-vue-lists";
import { Browser } from "@syncfusion/ej2-base";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import {createSpinner, hideSpinner, showSpinner} from "@syncfusion/ej2-popups";
import { virtualizationData } from "./listData";
let commonData = [];
let dataSource = {};
let endTime = undefined;
let startTime = undefined;
let liElement = undefined;
export default {
    components: {
      'ejs-listview': ListViewComponent,
      'ejs-dropdownlist': DropDownListComponent
    },
    beforeCreate: function() {
        commonData =virtualizationData;
        [
            [1010, "data1"],
            [5010, "data5"],
            [10010, "data10"],
            [25010, "data25"]
        ].forEach(ds => {
            let data = commonData.slice();
            let index;
            let spyIndex;
            for (let i = 10; i <= ds[0]; i++) {
                while (index === spyIndex) {
                    index = parseInt((Math.random() * 10).toString(), 10);
                }
                data.push({
                    name: data[index].name,
                    icon: data[index].icon,
                    imgUrl: data[index].imgUrl,
                    id: i.toString()
                });
                spyIndex = index;
            }
            dataSource[ds[1]] = data;
        });
    },
    data: function() {
        return {
            listData: dataSource.data1,
            cssClass: 'e-list-template',
            header: true,
            title: "Contacts",
            fields: {
                text: "name"
            },
            height: 500,
            enableUi: true,
            ddlData: [{
                    value: "1",
                    text: "1k"
                },
                {
                    value: "5",
                    text: "5k"
                },
                {
                    value: "10",
                    text: "10k"
                },
                {
                    value: "25",
                    text: "25k"
                }
            ],
            ddlField: {
                text: "text",
                value: "value"
            }
        };
    },

    methods: {
        onActionComplete: function() {
            endTime = new Date();
            document.getElementById("time").innerText =
                endTime.getTime() - startTime.getTime() + " ms";
        },
        onActionBegin: function() {
            startTime = new Date();
            liElement = document.getElementById("ui-list");

            if (Browser.isDevice) {
                liElement.classList.add("ui-mobile");
            }

            createSpinner({
                target: liElement
            });
        },
        onChange: function(e) {
            showSpinner(liElement);
            startTime = new Date();
            this.$refs.list.ej2Instances.dataSource = dataSource["data" + e.value];
            this.$refs.list.dataBind();
            endTime = new Date();
            document.getElementById("time").innerText =
                endTime.getTime() - startTime.getTime() + " ms";
            hideSpinner(liElement);
        }
    },
    provide: {
        listview: [Virtualization]
    }
}
</script>
