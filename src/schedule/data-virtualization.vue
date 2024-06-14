<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" width='100%' height='610px' :selectedDate="selectedDate" readonly="true" :eventSettings='eventSettings'
                    :group='group'>
                    <e-views>
                        <e-view option="TimelineMonth" enableLazyLoading="true"></e-view>
                        <e-view option="Month" enableLazyLoading="true"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ResourceId' title='Resource' name='Resources' :dataSource='resourceData' textField='Text'
                            idField='Id' colorField='Color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This example demonstrates the dynamic retrieval of events on each scroll within the Scheduler.
                As the content is scrolled, a data-loading request is dispatched to a remote data server.
                This request specifically aims to load appointments only for the resources currently being displayed.
            </p>
        </div>

        <div id="description">
            <p>
               In this example, the lazy loading option is enabled in timeline month and month views to load 1000 resources, and data from remote service is bound to the Scheduler
               using the instance of <code><a aria-label="Data Manager" target="_blank" class="code" href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">DataManager</a></code>.
               To enable the on-demand loading of events in the Scheduler, set the <code>enableLazyLoading</code> property to <code>true</code> within the view-specific settings.
            </p>
        </div>

    </div>
</template>

<script>
    import { createApp } from "vue";
    import { generateResourceData } from './datasource';
    import { ScheduleComponent, ViewDirective, ViewsDirective, ResourceDirective, ResourcesDirective, TimelineMonth, Month } from '@syncfusion/ej2-vue-schedule';
    import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
    
    const app = createApp({});

    var dataManager = new DataManager({
        url: 'https://services.syncfusion.com/vue/production/api/VirtualEventData',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });

    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective,
          'e-resource': ResourceDirective,
          'e-resources': ResourcesDirective
        },
        data: function () {
            return {
                selectedDate: new Date(2023, 3, 1),
                group: {
                    enableCompactView: false,
                    resources: ['Resources']
                },
                resourceData: generateResourceData(1, 1000, 'Resource'),
                eventSettings: { dataSource: dataManager }
            }
        },
        provide: {
            schedule: [TimelineMonth, Month]
        }
    }
</script>