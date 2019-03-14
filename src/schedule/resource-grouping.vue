<template>
    <div>
        <div class="col-md-12 control-section">
            <div class='schedule-demo-heading'>
                Flight timings between Barcelona and Los Angeles
            </div>
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :cssClass='cssClass' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :group='group' :resourceHeaderTemplate='resourceTemplate'>
                    <e-views>
                        <e-view option="Week"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="Agenda"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='AirlineId' title='Airline Name' name='Airlines' :allowMultiple='allowMultiple' :dataSource='resourceDataSource'
                            textField='AirlineName' idField='AirlineId' colorField='AirlineColor'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates the timings of different flight services on a specific route say between Barcelona and Los Angeles,
                on a daily basis. Here, the Scheduler is grouped based on the 3 Airline services.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the Scheduler has been grouped with multiple resources by making use of the property
                <code>group</code>. The resources to be grouped depends on the values of
                <code>resources</code> option within the
                <code>group</code> property, which accepts the array of resource names. The resource header has been customized
                by making use of the
                <code>resourceHeaderTemplate</code> property.
            </p>
            <p>
                In mobile mode, when the grouping is enabled, the resources will be listed out in a treeview as a side-panel which opens
                or closes, on clicking the hamburger icon at the resource header. Only a single resource will be viewable
                at a time, due to the space constraints on mobile. If in case, the users want to view the grouped layout
                on mobile with scrolling content, then it is necessary to set
                <code>false</code> to the
                <code>enableCompactView</code> option within the
                <code>group</code> property which is set to
                <code>true</code> by default. This option is not applicable on desktop mode. </p>
            <p>
                Note: If the
                <code>group</code> property is not defined, then the default Scheduler will be rendered with no grouping on
                layout, but the appointments of all the resources will be displayed on a single schedule.
            </p>
        </div>


    </div>
</template>
<style>
    .schedule-group.e-schedule .template-wrap {
        display: flex;
        text-align: left;
    }

    /* custom code start*/
    .schedule-demo-heading {
        font-size: 16px;
        padding-bottom: 15px;
        text-align: center;
        font-weight: 500
    }
    /* custom code end*/

    .schedule-group.e-schedule .e-agenda-view .template-wrap {
        display: table;
        width: inherit;
        text-align: center;
        padding-top: 10px;
    }

    .schedule-group.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
        width: 110px;
    }

    .schedule-group.e-schedule .template-wrap .airline-image {
        width: 30px;
        margin-top: 15px;
        background-repeat: no-repeat;
    }

    .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-image {
        height: 30px;
        margin-top: 0;
        margin-left: 35%;
    }

    .schedule-group.e-schedule.e-device .template-wrap .airline-image {
        margin-top: 5px;
    }

    .schedule-group.e-schedule .e-vertical-view .e-resource-cells {
        height: 76px;
    }

    .e-bigger .schedule-group.e-schedule.e-schedule .e-vertical-view .e-resource-cells {
        height: 80px;
    }

    .schedule-group.e-schedule.e-device .template-wrap .airline-details .airline-name {
        font-size: inherit;
        font-weight: inherit;
    }

    .schedule-group.e-schedule .template-wrap .airline-details {
        padding-left: 15px;
    }

    .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-details {
        padding: 0;
    }

    .schedule-group.e-schedule .template-wrap .airline-details .airline-name {
        font-size: 16px;
        font-weight: 500;
    }

    .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-model,
    .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-seats {
        display: none;
    }

    .schedule-group.e-schedule.e-device .template-wrap .airline-model,
    .schedule-group.e-schedule.e-device .template-wrap .airline-seats {
        display: none;
    }

    /* custom code start*/
    @media (max-width: 550px) {
        .schedule-demo-heading {
            font-size: 14px;
        }
    }
    /* custom code end*/
</style>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { resourceConferenceData } from './datasource';
    import { SchedulePlugin, Week, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    var resourceTemplateVue = Vue.component("resource-template", {
        template: '<div class="template-wrap"><div class="airline-image"><img :src="getImage" :alt="getImage" />' +
        '</div><div class="airline-details"><div class="airline-name">{{getAirlineName(data)}}</div><div class="airline-model">Model no: {{getAirlineModel(data)}}</div>' +
        '<div class="airline-seats">No.of seats: {{getAirlineSeats(data)}}</div></div></div>',
        data() {
            return {
                data: {}
            };
        },
        computed: {
            getImage: function() {
                return './src/schedule/images/' + this.getAirlineImage(this.data) + '.svg';
            }
        },
        methods: {
            getAirlineName: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
            },
            getAirlineModel: function (data) {
                let airlineName = this.getAirlineName(data);
                return (airlineName === 'Airways 1') ? 'CRJ 700' : (airlineName === 'Airways 2') ? 'Airbus A330' : 'ATR 72-600';
            },
            getAirlineSeats: function (data) {
                let airlineName = this.getAirlineName(data);
                return (airlineName === 'Airways 1') ? 50 : (airlineName === 'Airways 2') ? 75 : 100;
            },
            getAirlineImage: function (data) {
                let resourceName = this.getAirlineName(data);
                return (resourceName === 'Airways 1') ? 'airways-1' : (resourceName === 'Airways 2') ? 'airways-2' : 'airways-3';
            }
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                cssClass: 'schedule-group',
                eventSettings: {
                    dataSource: this.generateEvents(),
                    fields: {
                        subject: { title: 'Travel Summary', name: 'Subject' },
                        location: { title: 'Source', name: 'Location' },
                        description: { title: 'Comments', name: 'Description' },
                        startTime: { title: 'Departure Time', name: 'StartTime' },
                        endTime: { title: 'Arrival Time', name: 'EndTime' }
                    }
                },
                selectedDate: new Date(2018, 3, 1),
                allowMultiple: true,
                resourceDataSource: [
                    { AirlineName: 'Airways 1', AirlineId: 1, AirlineColor: '#EA7A57' },
                    { AirlineName: 'Airways 2', AirlineId: 2, AirlineColor: '#357cd2' },
                    { AirlineName: 'Airways 3', AirlineId: 3, AirlineColor: '#7fa900' }
                ],
                group: { resources: ['Airlines'] },
                resourceTemplate: function () {
                    return { template: resourceTemplateVue }
                },
            }
        },
        provide: {
            schedule: [Week, Month, Agenda, Resize, DragAndDrop]
        },
        // custom code start
        methods: {
             generateEvents: function () {
                var subjectCollection = ['Barcelona to Los Angeles', 'Los Angeles to Barcelona'];
                var collections = [];
                var dataCollections = [1, 2, 3];
                var id = 1;
                for (var i = 0; i < dataCollections.length; i++) {
                    var data = dataCollections[i];
                    var startDate = new Date(2018, 3, 1);
                    startDate.setMilliseconds(1000 * 60 * 60 * 0.5 * (data - 1));
                    var lastDate = new Date((startDate.getTime()) + (1000 * 60 * 60 * 24 * 30));
                    for (var date = startDate; date.getTime() < lastDate.getTime(); date = new Date(date.getTime() + (1000 * 60 * 60 * 5))) {
                        var strDate = new Date(date.getTime());
                        var endDate = new Date((strDate.getTime()) + (1000 * 60 * 60 * (2.5 + (0.5 * data))));
                        collections.push({
                            Id: id,
                            Subject: subjectCollection[id % 2],
                            StartTime: new Date(strDate.getTime()),
                            EndTime: new Date(endDate.getTime()),
                            AirlineId: data
                        });
                        id += 1;
                    }
                }
                return collections;
            }
        }
        // custom code end
    });

</script>