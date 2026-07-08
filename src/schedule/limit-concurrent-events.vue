<template>
    <div class="schedule-control-section">
        <div class="col-lg-8 control-section">
            <div class="control-wrapper">
                <ejs-schedule id="Schedule" ref="scheduleObj" cssClass="schedule-limit-concurrent" width="100%" height="650px"
                    :currentView="currentView" :selectedDate="selectedDate" :eventSettings="eventSettings"
                    :navigating="onNavigating">
                    <e-views>
                        <e-view option="Day" :maxEventStack="getMaxStack"></e-view>
                        <e-view option="Week" :maxEventStack="getMaxStack"></e-view>
                        <e-view option="WorkWeek" :maxEventStack="getMaxStack"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div class="col-lg-4 property-section">
            <div class="property-panel-table" title="Properties">
                <div class="property-panel-content" id="propertypanel">
                    <div class="property-row" style="display: flex; align-items: center; height: 70px;">
                        <div class="property">
                            <ejs-radiobutton id="radio1" cssClass="schedule-radio-button" name="eventDisplay" value="all" :checked="displayMode === 'all'"
                                :change="() => this.onDisplayModeChange('all')">
                            </ejs-radiobutton>
                        </div>
                        <div class="property-label" style="display: flex; align-items: center; margin-left: 30px;">
                            <span style="font-size: 16px;"><b>Show all events</b></span>
                        </div>
                    </div>
                    <div class="property-row" style="display: flex; align-items: center; height: 70px;">
                        <div class="property">
                            <ejs-radiobutton id="radio2" cssClass="schedule-radio-button" name="eventDisplay" value="limited" :checked="displayMode === 'limited'"
                                :change="() => this.onDisplayModeChange('limited')">
                            </ejs-radiobutton>
                        </div>
                        <div class="property-label" style="display: flex; align-items: center; font-size: 16px; gap: 6px; margin-left: 30px;">
                            <span><b>Show up to</b></span>
                            <ejs-numerictextbox id="limit" :value="maxEventsLimit" :min="1" :width="'80px'"
                                        :enabled="displayMode === 'limited'" :change="onLimitChange">
                                    </ejs-numerictextbox>
                            <span><b>labels</b></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo illustrates how to limit the number of concurrent events displayed within a single time slot on the Scheduler component.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the <code>maxEventStack</code> property allows you to control how many events are visible at a time within each time slot.
                When multiple events overlap and exceed the specified limit, a "+N" indicator appears, showing how many additional events exist.
                Users can click on this indicator to view remaining events in a popup window.
            </p>
            <p>
                Use the options below to customize the event display:
            </p>
            <ul>
                <li>Select <strong>"Show all events"</strong> to display all events</li>
                <li>Select <strong>"Show up to N labels"</strong> to set a maximum limit for visible events per time slot</li>
                <li>Modify the numeric value to adjust how many events display before the "+N" indicator appears</li>
            </ul>
            <p>
                The <code>maxEventStack</code> property is applicable only with Day, Week, and WorkWeek views when the timeScale option is enabled.
            </p>
            <p>Looking for the full Vue Scheduler component overview, features, pricing, and documentation? Visit our <a href="https://www.syncfusion.com/vue-components/vue-scheduler">Vue Scheduler</a> page.</p>
        </div>
    </div>
</template>

<style>
    .schedule-radio-button .e-radio + label {
        margin-top: -25px;
    }
</style>

<script>
    import { extend } from '@syncfusion/ej2-base';
    import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
    import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
    import { overlappingData } from './datasource';

    export default {
        components: {
            'ejs-schedule': ScheduleComponent,
            'e-view': ViewDirective,
            'e-views': ViewsDirective,
            'ejs-radiobutton': RadioButtonComponent,
            'ejs-numerictextbox': NumericTextBoxComponent
        },
        data: function() {
            return {
                displayMode: 'limited',
                maxEventsLimit: 1,
                currentView: 'Week',
                selectedDate: new Date(2026, 4, 29),
                eventSettings: { dataSource: extend([], overlappingData, null, true) }
            };
        },
        computed: {
            getMaxStack: function() {
                return this.displayMode === 'all' ? 0 : this.maxEventsLimit;
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Resize, DragAndDrop]
        },
        methods: {
            onDisplayModeChange: function(mode) {
                this.displayMode = mode;
                const scheduleObj = this.$refs.scheduleObj.ej2Instances;
                if (mode === 'all') {
                    scheduleObj.activeViewOptions.maxEventStack = 0;
                } else {
                    scheduleObj.activeViewOptions.maxEventStack = this.maxEventsLimit;
                }
                scheduleObj.refreshEvents();
            },
            onLimitChange: function(args) {
                this.maxEventsLimit = args.value;
                const scheduleObj = this.$refs.scheduleObj.ej2Instances;
                scheduleObj.activeViewOptions.maxEventStack = args.value;
                scheduleObj.refreshEvents();
            },
            applyMaxStackToAllViews: function(value) {
                const scheduleObj = this.$refs.scheduleObj.ej2Instances;
                if (!scheduleObj) return;
                const currentViews = scheduleObj.views;
                const updatedViews = currentViews.map((view) => ({
                    ...view,
                    maxEventStack: value
                }));
                scheduleObj.setProperties({ views: updatedViews }, true);
                scheduleObj.dataBind();
                scheduleObj.refreshEvents();
            },
            onNavigating: function(args) {
                if (args.action === 'view') {
                    const value = this.displayMode === 'all' ? 0 : this.maxEventsLimit;
                    this.applyMaxStackToAllViews(value);
                }
            }
        }
    };
</script>
