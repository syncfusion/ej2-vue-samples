<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
            <ejs-schedule id="schedule" ref="ScheduleObj" :cssClass="cssClass" width='100%' height='650px'
                :ownerCollections="ownerCollection" :selectedDate="selectedDate" :eventSettings="eventSettings">
                <e-resources>
                    <e-resource field="OwnerId" title="Owners" :dataSource='resourceDataSource' allowMultiple="true"
                                name="Owners" textField="OwnerText" idField="OwnerId" colorField="Color">
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table id="property" title="Resources" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 100%">
                        <ejs-checkbox ref="ownerOneObj" id="margaret" cssClass="margaret" label="Margaret" value="1"
                        :checked="true" :change="onChange">
                        </ejs-checkbox>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 100%">
                        <ejs-checkbox ref="ownerTwoObj" id="robert" cssClass="robert" label="Robert" value="2"
                        :checked="true" :change="onChange">
                        </ejs-checkbox>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 100%">
                        <ejs-checkbox ref="ownerThreeObj" id="laura" cssClass="laura" label="Laura" value="3"
                        :checked="true" :change="onChange">
                        </ejs-checkbox>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
    <p>
        This example demonstrates how to dynamically show or hide the appointments of resources on Scheduler based on
        the resource selection.
    </p>
    </div>
    <div id="description">
    <p>
        In this example, the resource appointments are dynamically shown or hidden on the Scheduler, by passing the
        filtered event data of selected resources to the <code>Query</code> option of the <code>Eventsettings</code>.
    </p>
    </div>
</div>
</template>
<!-- custom code start -->
<style>
    .property-panel-content .e-checkbox-wrapper.margaret .e-frame {
        background-color: #ea7a57;
        border-color: transparent;
    }

    .property-panel-content .e-checkbox-wrapper.robert .e-frame {
        background-color: #df5286;
        border-color: transparent;
    }

    .property-panel-content .e-checkbox-wrapper.laura .e-frame {
        background-color: #865fcf;
        border-color: transparent;
    }
</style>
<!-- custom code end -->

<script>
    import Vue from "vue";
    import { Predicate, Query } from '@syncfusion/ej2-data';
    import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
    import { extend } from '@syncfusion/ej2-base';
    import { resourceSampleData } from './datasource';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);
    Vue.use(CheckBoxPlugin);

    var ownerCollections = [
        { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
        { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
        { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' }
    ];
     export default Vue.extend({
        data: function () {
            return {
                selectedDate: new Date(2018, 5, 5),
                resourceDataSource: ownerCollections,
                ownerCollection: ownerCollections,
                allowMultiple: true,
                eventSettings: { dataSource: extend([], resourceSampleData, null, true) }
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]
        },
        methods: {
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let ownerOneObj = this.$refs.ownerOneObj;
                let ownerTwoObj = this.$refs.ownerTwoObj;
                let ownerThreeObj = this.$refs.ownerThreeObj;
                let predicate;
        let checkBoxes = [ownerOneObj, ownerTwoObj, ownerThreeObj];
        checkBoxes.forEach((checkBoxObj) => {
            if (checkBoxObj.ej2Instances && checkBoxObj.ej2Instances.checked) {
                if (predicate) {
                    predicate = predicate.or('OwnerId', 'equal', parseInt(checkBoxObj.value, 10));
                } else {
                    predicate = new Predicate('OwnerId', 'equal', parseInt(checkBoxObj.value, 10));
                }
            }
        });
        scheduleObj.ej2Instances.eventSettings.query = new Query().where(predicate);
            }
        }
    });
</script>