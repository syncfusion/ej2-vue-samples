<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered"
                    :currentView="currentView" :actionBegin="onActionBegin" :actionComplete="onActionComplete" :showHeaderBar="showHeaderBar">
                    <e-views>
                        <e-view option="Month"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr style="height: 50px">
                        <td>
                            <div>
                                <ejs-checkbox id="checkbox" label="Show/Hide Header bar" checked="true" :change="onChange"></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="action-description">
            <p>
                This demo shows the way of adding custom items into the Scheduler header bar. Here, an employee image is added to the header
                bar, clicking on which will open the popup showing that person's short profile information.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, a popup has been designed separately with a person’s profile info and kept in a hidden state initially. A custom
                item has been added to the Scheduler header bar within the
                <code>actionBegin</code> event by checking for the request type as
                <code>toolbarItemRendering</code> which triggers at the time of header bar items rendering on the Schedule.
            </p>
            <p>
                Once the items are added, the click action is being bound to it in the
                <code>actionComplete</code> event by checking for the request type as
                <code>toolbarItemRendered</code> which triggers after the items are rendered on the Schedule. The appropriate
                action of showing or hiding the popup on clicking the custom item has been done within it.
            </p>
            <p>
                In case, if the header bar of Scheduler needs to be hidden, it can be done by setting false to
                <code>showHeaderBar</code> property.
            </p>
        </div>
    </div>
</template>
<style>
    .e-schedule .e-schedule-toolbar .user-icon {
        background-image: url('./images/nancy.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        height: 24px;
        min-width: 24px !important;
        width: 24px !important;
    }

    .e-schedule .e-schedule-toolbar .e-toolbar-items .e-schedule-user-icon .e-tbar-btn:hover {
        background-color: inherit;
    }

    .e-schedule .e-schedule-toolbar .e-toolbar-items .e-schedule-user-icon .e-tbar-btn-text {
        display: none;
    }

    .e-schedule .e-schedule-toolbar .e-toolbar-pop .e-schedule-user-icon .e-tbar-btn-text {
        padding-left: 8px !important;
    }

    .e-profile-wrapper {
        width: 210px;
        height: 80px;
        background-color: #fafafa;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .e-profile-wrapper .profile-container {
        display: flex;
        padding: 10px;
    }

    .e-profile-wrapper .profile-image {
        background-image: url('./images/nancy.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
        width: 60px;
        height: 60px;
    }

    .e-profile-wrapper .content-wrap {
        padding-left: 10px;
    }

    .e-profile-wrapper .name {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        margin-top: 2px;
    }

    .e-profile-wrapper .destination {
        font-size: 12px;
    }
	
	.e-profile-wrapper .status-icon {
        height:6px;
        width:6px;
        background:green;
        border-radius:100%;
        float:left;
        margin-right:4px;
        margin-top:4px;
    }

    .e-profile-wrapper .status {
        font-size: 11px;
    }

    .highcontrast .e-profile-wrapper {
        border: 1px solid #969696
    }
    .highcontrast .e-profile-wrapper .profile-container {
        background-color: #000;
    }
</style>
<script>
    import Vue from "vue";
    import { employeeEventData } from './datasource';
    import { Popup } from '@syncfusion/ej2-vue-popups';
    import { ItemModel } from '@syncfusion/ej2-vue-navigations';
    import { CheckBoxPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-buttons';
    import { createElement, compile, extend, Internationalization } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Month, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    Vue.use(CheckBoxPlugin);

    var instance = new Internationalization();
    var headerTemplateVue = Vue.component("header-template", {
        template: '<div class="profile-container"><div class="profile-image"></div><div class="content-wrap">' +
        '<div class="name">Nancy</div><div class="destination">Product Manager</div><div class="status"> ' +
        '<div class="status-icon"></div>Online</div></div></div>',
        data() {
            return {
                data: {}
            };
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], employeeEventData, null, true)
                },
                currentView: 'Month',
                showHeaderBar: true,
                selectedDate: new Date(2018, 1, 15),
                headerTemplate: function () {
                    return { template: headerTemplateVue }
                },
            }
        },
        provide: {
            schedule: [Month, Resize, DragAndDrop]
        },
        methods: {
            oneventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            },
            onActionBegin: function (args) {
                if (args.requestType === 'toolbarItemRendering') {
                    let userIconItem = {
                        align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
                    };
                    args.items.push(userIconItem);
                }
            },
            onActionComplete: function (args) {
                let scheduleElement = document.getElementById('Schedule');
                if (args.requestType === 'toolBarItemRendered') {
                    let userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
                    userIconEle.onclick = () => {
                        this.profilePopup.relateTo = userIconEle;
                        this.profilePopup.dataBind();
                        if (this.profilePopup.element.classList.contains('e-popup-close')) {
                            this.profilePopup.show();
                        } else {
                            this.profilePopup.hide();
                        }
                    };
                }
                let userContentEle = createElement('div', {
                    className: 'e-profile-wrapper'
                });
                scheduleElement.parentElement.appendChild(userContentEle);

                let userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
                let getDOMString = compile(this.headerTemplate);
                let output = getDOMString({});
                this.profilePopup = new Popup(userContentEle, {
                    content: output[0],
                    relateTo: userIconEle,
                    position: { X: 'left', Y: 'bottom' },
                    collision: { X: 'flip', Y: 'flip' },
                    targetType: 'relative',
                    viewPortElement: scheduleElement,
                    width: 210,
                    height: 80
                });
                this.profilePopup.hide();
            },
            // function to handle the CheckBox change event
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.showHeaderBar = args.checked;
            }
        }
    });

</script>