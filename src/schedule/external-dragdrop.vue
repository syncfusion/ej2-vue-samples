<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
            <div class="schedule-container">
                <div class="title-container">
                    <h1 class="title-text">Doctor's Appointments</h1>
                </div>
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :cssClass='cssClass' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :group='group' :currentView='currentView' :resourceHeaderTemplate='resourceHeaderTemplate' :drag="onItemDrag" :actionBegin="onActionBegin">
                    <e-views>
                        <e-view option="TimelineDay"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='DepartmentID' title='Department' name='Departments' :dataSource='departmentDataSource'
                            textField='Text' idField='Id' colorField='Color'>
                        </e-resource>
                        <e-resource field='ConsultantID' title='Consultant' name='Consultants' :dataSource='consultantDataSource'
                            textField='Text' idField='Id' groupIDField='GroupId' colorField='Color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
            <div class="treeview-container">
                <div class="title-container">
                    <h1 class="title-text">Waiting List</h1>
                </div>
                <ejs-treeview id='Tree' cssClass="treeview-external-drag" :nodeTemplate="treeTemplate" :fields='treeViewFields' :nodeDragging="onItemDrag" :allowDragAndDrop=true :nodeDragStop="onTreeDragStop"></ejs-treeview>
            </div>
            <div id="action-description">
                <p>
                    This example illustrates how to drag and drop the events from an external source into scheduler. Here, you can drag and drop the items from TreeView control into scheduler.
                </p>
            </div>
            <div id="description">
                <p>
                    In this example, <code>resourceHeaderTemplate</code> is used to change the default appearance of the resource header
                    column. Within the <code>actionBegin</code> event of scheduler, the dragged item from the TreeView control is removed,
                    when it is being dragged and dropped onto the scheduler. When the item is being dropped onto the scheduler, the event editor is
                    explicitly made to open with the target details by invoking the <code>openEditor</code> method of scheduler within the <code>nodeDragStop</code> event of TreeView.
                </p>
            </div>
            </div>
        </div>
    </div>
</template>
<style>
/* custom code start*/
.content-wrapper {
    display: -ms-flexbox;
    display: flex;
}
.schedule-container {
    padding-right: 10px;
    width: 100%;
 }

 .title-container {
    padding-bottom: 10px;
 }

.e-device-hover {
    background-color: #e0e0e0!important;
}

.title-container {
    padding-bottom: 10px;
}

.treeview-external-drag #waiting {
    height: 100%;
    padding: 0;
}

.treeview-external-drag #waitid {
    float: left;
    width: 13%;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    font-family: "Segoe UI";
    color: #f9920b;
    overflow: hidden;
    margin: 9px 0;
    padding: 0 2px 0 0;
}

.treeview-external-drag #waitdetails {
    width: 95%;
    float: left;
    height: 100%;
    padding: 0;
}

.title-text {
    font-size: 18px;
    margin: 0px;
    font-weight: bold;
    text-align: center;
}
/* custom code end*/

.treeview-external-drag #waitlist {
    width: 100%;
    height: 50%;
    font-weight: bold;
    font-family: "Segoe UI";
    font-size: 12px;
    color: #545554;
    padding: 5px 0 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.treeview-external-drag #waitcategory {
    height: 50%;
    font-family: "Segoe UI";
    font-size: 10px;
    color: #545554;
    opacity: 0.6;
    padding-left: 10px;
    padding-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.treeview-external-drag .e-list-text,
.treeview-external-drag.e-rtl .e-list-text,
.e-bigger .treeview-external-drag .e-list-text,
.e-bigger .treeview-external-drag.e-rtl .e-list-text {
    background: white;
    border: 0.5px solid #E1E7EC;
    height: 50px;
    line-height: 15px;
    padding: 0 5px;
    width: 200px;
}

.treeview-external-drag .e-list-parent,
.treeview-external-drag.e-rtl .e-list-parent,
.e-bigger .treeview-external-drag .e-list-parent,
.e-bigger .treeview-external-drag.e-rtl .e-list-parent {
    height: 100%;
    padding: 0 2px;
}

.treeview-external-drag .e-list-item,
.e-bigger .treeview-external-drag .e-list-item {
    height: 100%;
    padding: 0 0 5px 0;
}

.treeview-external-drag .e-fullrow,
.e-bigger .treeview-external-drag .e-fullrow {
    height: 55px;
}

.treeview-external-drag .e-list-item.e-hover > .e-fullrow,
.treeview-external-drag .e-list-item.e-active > .e-fullrow,
.treeview-external-drag .e-list-item.e-active.e-hover > .e-fullrow,
.e-bigger .treeview-external-drag .e-list-item.e-hover > .e-fullrow,
.e-bigger .treeview-external-drag .e-list-item.e-active > .e-fullrow,
.e-bigger .treeview-external-drag .e-list-item.e-active.e-hover > .e-fullrow {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none !important;
}

.treeview-external-drag .e-text-content,
.e-bigger .treeview-external-drag .e-text-content,
.treeview-external-drag.e-rtl .e-text-content,
.e-bigger .treeview-external-drag.e-rtl .e-text-content {
    padding: 0;
}
.e-drag-item.e-treeview.treeview-external-drag,
.e-bigger .e-drag-item.e-treeview.treeview-external-drag {
    padding: 0 !important;
}

.e-schedule.schedule-drag-drop .e-timeline-view .e-resource-left-td,
.e-schedule.schedule-drag-drop .e-timeline-month-view .e-resource-left-td {
    width: 160px;
}

.e-schedule.schedule-drag-drop .e-resource-cells.e-parent-node .specialist-category {
    padding-left: 30px
}

.e-schedule.e-rtl.schedule-drag-drop .e-resource-cells.e-parent-node .specialist-category {
    padding-right: 30px
}

.e-schedule.schedule-drag-drop .e-resource-cells.e-child-node .specialist-category,
.e-schedule.schedule-drag-drop .e-resource-cells.e-child-node .specialist-name {
    padding: 5px
}

.e-schedule.schedule-drag-drop .e-resource-cells.e-parent-node .specialist-name {
    padding: 0 10px
}

.e-schedule.schedule-drag-drop .specialist-name {
    font-size: 13px;
}
.e-schedule.schedule-drag-drop .specialist-designation {
    font-size: 10px;
}


.e-schedule.schedule-drag-drop .specialist-image {
    width: 45px;
    height: 40px;
    float: left;
    border-radius: 50%;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-size: 45px;
}

@media (max-width: 550px) {
    /* custom code start*/
    .schedule-container {
        padding-bottom: 10px
    }
    /* custom code end*/

    .treeview-external-drag.e-treeview,
    .e-bigger .treeview-external-drag.e-treeview {
        width: 225px;
    }

    .e-bigger .treeview-external-drag.e-treeview.e-drag-item {
        position: relative !important;
    }

    .content-wrapper {
        display: block;
    }
}
</style>

<script>
    import Vue from "vue";
    import { addClass, extend, closest } from '@syncfusion/ej2-base';
    import { hospitalData, waitingList } from './datasource';
    import { SchedulePlugin, TimelineViews, TimelineMonth, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
    Vue.use(TreeViewPlugin);    

    var treeVue = Vue.component("tree-template", {
        template: '<div id="waiting"><div id="waitdetails"><div id="waitlist">{{data.Name}}</div>' +
                  '<div id="waitcategory">{{data.DepartmentName}} - {{data.Description}}</div></div></div>',
        data() {
            return {
                data: {}
            };
        }
    });

    var resourceHeaderVue = Vue.component("resource-headerTemplate", {
        template: '<div className="template-wrap"><div class="specialist-category"><div v-if=getConsultantImageName(data)><img class="specialist-image" :src="getImage" :alt="getImage"/></div><div class="specialist-name">' +
                  '{{getConsultantName(data)}}</div><div class="specialist-designation">{{getConsultantDesignation(data)}}</div></div></div>',
        data() {
            return {
                data: {}
            };
        },
        computed: {
            getImage: function() {
                return './src/schedule/images/' + this.getConsultantName(this.data).toLowerCase() + '.png';
            }
        },
        methods: {
            getConsultantName: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
            },
            getConsultantImageName: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                let resourceName = (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
                if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
                    return false;
                } else {
                    return true;
                }
            },
            getConsultantDesignation: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                var resourceName = value.resourceData[value.resource.textField];
                if (resourceName === "GENERAL" || resourceName === "DENTAL") {
                    return '';
                } else {
                    return value.resourceData.Designation;
                }
            }
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], hospitalData, null, true),
                    fields: {
                        subject: { title: 'Patient Name', name: 'Name' },
                        startTime: { title: "From", name: "StartTime" },
                        endTime: { title: "To", name: "EndTime" },
                        description: { title: 'Reason', name: 'Description' }
                    },
                },
                selectedDate: new Date(2018, 7, 1),
                currentView: 'TimelineDay',
                cssClass: 'schedule-drag-drop',
                group: {
                    enableCompactView: false,
                    resources: ['Departments', 'Consultants']
                },
                departmentDataSource: [
                    { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
                    { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
                ],
                consultantDataSource: [
                    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
                    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
                    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
                    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
                    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
                    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
                ],
                resourceHeaderTemplate: function (e) {
                    return { template: resourceHeaderVue }
                },
                treeViewFields: { dataSource: waitingList, id: 'Id', text: 'Name' },
                treeTemplate: function(e){
                    return {template: treeVue}
                },
                draggedItemId : null              
            }
        },
        methods: {
            onItemDrag: function(event) {
                let scheduleObj = this.$refs.ScheduleObj.ej2Instances;
                if (scheduleObj.isAdaptive) {
                    let classElement = document.querySelector('.e-device-hover');
                    if (classElement) {
                        classElement.classList.remove('e-device-hover');
                    }
                    if (event.target.classList.contains('e-work-cells')) {
                        addClass([event.target], 'e-device-hover');
                    }
                }
                if (document.body.style.cursor === 'not-allowed') {
                    document.body.style.cursor = '';
                }
                if (event.name == 'nodeDragging') {
                    let dragElementIcon = document.querySelectorAll('.e-drag-item .e-icon-expandable');
                    for (let i = 0; i < dragElementIcon.length; i++) {
                        dragElementIcon[i].style.display = 'none';
                    }
                }
            },
            dataFilter: function (item) { 
                return item.Id !== parseInt(this.draggedItemId, 10); 
            },
            onActionBegin: function(event) {
                if (event.requestType === 'eventCreate' && this.draggedItemId) {
                    let treeObj = document.getElementById('Tree').ej2_instances[0];
                    let treeViewdata = treeObj.fields.dataSource;
                    let filteredPeople = treeViewdata.filter(this.dataFilter);
                    treeObj.fields.dataSource = filteredPeople;
                    let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
                    for (let i = 0; i < elements.length; i++) {
                        remove(elements[i]);
                    }
                }
            },
            onTreeDragStop: function(event) {
                let treeElement = closest(event.target, '.e-treeview');
                let classElement = document.querySelector('.e-device-hover');
                if (classElement) {
                   classElement.classList.remove('e-device-hover');
                }
                if (!treeElement) {
                    event.cancel = true;
                    let scheduleElement = closest(event.target, '.e-content-wrap');
                    if (scheduleElement) {
                        let treeObj = document.getElementById('Tree').ej2_instances[0];
                        let treeviewData = treeObj.fields.dataSource;
                        if (event.target.classList.contains('e-work-cells')) {
                            let filteredData =
                            treeviewData.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
                            let scheduleObj = document.getElementById('Schedule').ej2_instances[0]
                            let cellData = scheduleObj.getCellDetails(event.target);
                            let resourceDetails = scheduleObj.getResourcesByIndex(cellData.groupIndex);
                            let eventData = {
                                Name: filteredData[0].Name,
                                StartTime: cellData.startTime,
                                EndTime: cellData.endTime,
                                IsAllDay: cellData.isAllDay,
                                Description: filteredData[0].Description,
                                DepartmentID: resourceDetails.resourceData.GroupId,
                                ConsultantID: resourceDetails.resourceData.Id
                            };
                            scheduleObj.openEditor(eventData, 'Add', true);
                            this.draggedItemId = event.draggedNodeData.id;
                        }
                    }
                }
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth, Resize, DragAndDrop]
        }
    });

</script>