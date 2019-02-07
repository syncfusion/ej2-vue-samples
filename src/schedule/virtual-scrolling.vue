<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" :cssClass="cssClass" width='100%' height='610px' :selectedDate="selectedDate" :eventSettings='eventSettings'
                    :group='group'>
                    <e-views>
                        <e-view option="TimelineMonth" :eventTemplate="monthTemplate" :allowVirtualScrolling="virtualScroll"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ResourceId' title='Reosurce' name='Resources' allowMultiple=true :dataSource='resourceData' textField='Text'
                            idField='Id' colorField='Color'>
                        </e-resource>
                    </e-resources> 
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>This example illustrates how to dynamically load the resources and events as you scroll through the scheduler.
               All the events in this example are loaded at the initial rendering of scheduler, but the events in the visible
               area alone will be rendered. Here, the scheduler is made to dynamically load 300 resources along with the
               events count of 3600 (300 resources * 12 events).
            </p>
        </div>

        <div id="description">
            <p>
               In this example, the virtual scrolling option is enabled on timeline month view to load the large number of
               resources and its associated events. To enable the dynamic loading of events and resources in timeline view of
               Scheduler, set the <code>allowVirtualScrolling</code> property to <code>true</code> within the view-specific settings.
            </p>
        </div>

    </div>
</template>
<style>
    .e-schedule .template-wrap .subject {
        padding: 10px 25px;
    }

    .e-schedule .template-wrap {
        width: 100%;
    }

    .e-schedule .e-timeline-month-view .e-resource-left-td {
        width: 150px;
    }
</style>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { generateResourceData, generateStaticEvents } from './datasource';
    import { SchedulePlugin, TimelineMonth, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

    Vue.use(SchedulePlugin);   

    var monthTempVue = Vue.component("monthTemp", {
        template: '<div class="template-wrap" :style="{background: data.PrimaryColor}">'+
        '<div class="subject" :style="{background: data.SecondaryColor}">{{data.Subject}}</div></div>',
        data() {
            return {
                data: {}
            };
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                selectedDate: new Date(2018, 4, 1),
                cssClass: 'virtual-scroll',
                virtualScroll: true,
                monthTemplate: function (e) {
                    return {
                        template: monthTempVue
                    };
                },
                group: {
                    enableCompactView: false,
                    resources: ['Resources']
                },
                resourceData: generateResourceData(1, 300, 'Resource'),
                eventSettings: { dataSource: generateStaticEvents(new Date(2018, 4, 1), 300, 12) }
            }
        },
        provide: {
            schedule: [TimelineMonth, Resize, DragAndDrop]
        }
    });

</script>