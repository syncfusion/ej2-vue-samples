<template>
    <div class="schedule-vue-sample">
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
    .schedule-vue-sample .e-schedule .e-schedule-toolbar .user-icon {
        background-image: url('./images/nancy.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        height: 24px;
        min-width: 24px !important;
        width: 24px !important;
    }

    .schedule-vue-sample .e-schedule .e-schedule-toolbar .e-toolbar-items .e-schedule-user-icon .e-tbar-btn:hover {
        background-color: inherit;
    }

    .schedule-vue-sample .e-schedule .e-schedule-toolbar .e-toolbar-items .e-schedule-user-icon .e-tbar-btn-text {
        display: none;
    }

    .schedule-vue-sample .e-schedule .e-schedule-toolbar .e-toolbar-pop .e-schedule-user-icon .e-tbar-btn-text {
        padding-left: 8px !important;
    }

    .schedule-vue-sample .e-profile-wrapper {
        width: 210px;
        height: 80px;
        background-color: #fafafa;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .schedule-vue-sample .e-profile-wrapper .profile-container {
        display: flex;
        padding: 10px;
    }

    .schedule-vue-sample .e-profile-wrapper .profile-image {
        background-image: url('./images/nancy.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0, 0, 0, 0.2);
        width: 60px;
        height: 60px;
    }

    .schedule-vue-sample .e-profile-wrapper .content-wrap {
        padding-left: 10px;
    }

    .schedule-vue-sample .e-profile-wrapper .name {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        margin-top: 2px;
    }

    .schedule-vue-sample .e-profile-wrapper .destination {
        font-size: 12px;
    }

    .schedule-vue-sample .e-profile-wrapper .status-icon {
        height: 6px;
        width: 6px;
        background: green;
        border-radius: 100%;
        float: left;
        margin-right: 4px;
        margin-top: 4px;
    }

    .schedule-vue-sample .e-profile-wrapper .status {
        font-size: 11px;
        line-height: normal;
    }

    .highcontrast .schedule-vue-sample .e-profile-wrapper {
        border: 1px solid #969696
    }

    .highcontrast .schedule-vue-sample .e-profile-wrapper .profile-container {
        background-color: #000;
    }

    .tailwind-dark .e-profile-wrapper {
        background-color: #374151;
        border: 0.5px solid #4b5563;
    }

    .bootstrap5-dark .e-profile-wrapper {
        background-color: rgb(40, 45, 49);
        border: 0.5px solid #4b5563;
    }

    .tailwind .e-profile-wrapper .destination,
    .tailwind-dark .e-profile-wrapper .destination {
        font-size: 11px;
    }

    .bootstrap-dark .e-profile-wrapper {
        background-color: #1a1a1a;
    }

    .fluent-dark .e-profile-wrapper {
        background-color: #201f1e;
    }

    .fabric-dark .e-profile-wrapper {
        background-color: #333232;
    }

    .material-dark .property-panel-header {
        color: #fff;
    }

    .material-dark .e-profile-wrapper {
        color: #fff;
        border: 0.5px solid #616161;
        background-color: #212121;
    }
</style>
<script>
    import Vue from "vue";
    import { employeeEventData } from './datasource';
    import { Popup } from '@syncfusion/ej2-vue-popups';
    import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
    import { createElement, compile, extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Month, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    Vue.use(CheckBoxPlugin);

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], employeeEventData, null, true)
                },
                currentView: 'Month',
                showHeaderBar: true,
                selectedDate: new Date(2021, 1, 15),
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
                let userContentEle = createElement('div', { className: 'e-profile-wrapper'});
                let templateContent = createElement('div', { className: 'profile-container', innerHTML: `<div class="profile-image"></div><div class="content-wrap">
                        <div class="name">Nancy</div><div class="destination">Product Manager</div><div class="status">
                        <div class="status-icon"></div>Online</div></div>` });
                scheduleElement.parentElement.appendChild(userContentEle);
                let userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
                this.profilePopup = new Popup(userContentEle, {
                    content: templateContent,
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
                if (!args.checked) {
                    this.profilePopup.hide();
                }
                this.$refs.ScheduleObj.ej2Instances.showHeaderBar = args.checked;
            }
        }
    });

</script>