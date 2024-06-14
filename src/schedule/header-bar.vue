<template>
    <div class="schedule-vue-sample">
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered"
                    :currentView="currentView" :actionComplete="onActionComplete" :showHeaderBar="showHeaderBar">
                    <e-views>
                        <e-view option="Month"></e-view>
                    </e-views>
                    <e-toolbaritems>
                        <e-toolbaritem name='Previous' align='Left'></e-toolbaritem>
                        <e-toolbaritem name='Next' align='Left'></e-toolbaritem>
                        <e-toolbaritem name='DateRangeText' align='Left'></e-toolbaritem>
                        <e-toolbaritem name='Today' align='Right'></e-toolbaritem>
                        <e-toolbaritem align='Right' prefixIcon='user-icon' text='Nancy' cssClass='e-schedule-user-icon'></e-toolbaritem>
                    </e-toolbaritems>
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
                item has been added to the Scheduler header bar by using the
                <code><a aria-label="Toolbar items" href="https://ej2.syncfusion.com/vue/documentation/api/schedule/#toolbaritems">toolbarItems</a></code> property.
                Here, the default items such as previous, next, date range text, and today have been used along with external icon as custom items.
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

    .material3-dark .e-profile-wrapper {
        border: 0.5px solid #444746;
        background-color: #302c38;
    }

    .fluent2-dark .e-profile-wrapper {
        border: 0.5px solid #525252;
        background-color: #1F1F1F;
    }

    .fluent2-highcontrast .e-profile-wrapper {
        border: 0.5px solid #FFFFFF;
        background-color: #000000;
    }
</style>
<script>
    import { employeeEventData } from './datasource';
    import { Popup } from '@syncfusion/ej2-vue-popups';
    import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
    import { createElement, extend } from '@syncfusion/ej2-base';
    import { ScheduleComponent, ViewDirective, ViewsDirective, ToolbarItemsDirective, ToolbarItemDirective, Month, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    
    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective,
          'e-toolbaritems': ToolbarItemsDirective,
          'e-toolbaritem': ToolbarItemDirective,
          'ejs-checkbox': CheckBoxComponent
        },
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
            onActionComplete: function (args) {
                if (args.requestType === 'toolBarItemRendered') {
                    let scheduleElement = document.getElementById('Schedule');
                    let userIconEle = scheduleElement.querySelector('.e-schedule-user-icon');
                    userIconEle.onclick = () => {
                        if (this.profilePopup.element.classList.contains('e-popup-close')) {
                            this.profilePopup.show();
                        } else {
                            this.profilePopup.hide();
                        }
                    };
                    let userContentEle = createElement('div', { className: 'e-profile-wrapper'});
                    let templateContent = createElement('div', { className: 'profile-container', innerHTML: `<div class="profile-image"></div><div class="content-wrap">
                        <div class="name">Nancy</div><div class="destination">Product Manager</div><div class="status">
                        <div class="status-icon"></div>Online</div></div>` });
                    scheduleElement.parentElement.appendChild(userContentEle);
                    this.profilePopup = new Popup(userContentEle, {
                        content: templateContent,
                        relateTo: '.e-schedule-user-icon',
                        position: { X: 'left', Y: 'bottom' },
                        collision: { X: 'flip', Y: 'flip' },
                        targetType: 'relative',
                        viewPortElement: scheduleElement,
                        width: 210,
                        height: 80
                    });
                    this.profilePopup.hide();

                    // custom code start
                    const hidePopup = (event) => {
                        if (this.profilePopup.element.classList.contains('e-popup-open') && (event.type === 'keydown' && (event.key === 'Escape') ||
                            (event.type === 'click' && event.target && !(event.target.closest('.e-schedule-user-icon') ||
                                event.target.closest('.e-profile-wrapper'))))) {
                            this.profilePopup.hide();
                        }
                    }
                    document.addEventListener('keydown', hidePopup);
                    document.addEventListener('click', hidePopup);

                    this.$refs.ScheduleObj.ej2Instances.destroyed = () => {
                        document.removeEventListener('keydown', hidePopup);
                        document.removeEventListener('click', hidePopup);
                    };
                    // custom code end
                }
            },
            // function to handle the CheckBox change event
            onChange: function (args) {
                if (!args.checked) {
                    this.profilePopup.hide();
                }
                this.$refs.ScheduleObj.ej2Instances.showHeaderBar = args.checked;
            }
        }
    }

</script>