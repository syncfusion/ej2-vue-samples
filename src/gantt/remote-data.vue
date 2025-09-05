<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">

                <div style="display: flex;">
                    <div style="width: 250px; padding-bottom: 10px;">
                        <ejs-dropdownlist :dataSource="DLData" :fields="dropdownFields" :value="recordCount"
                            :placeholder="rowMark" @change="onChange">
                        </ejs-dropdownlist>

                    </div>
                    <span style="padding-left: 20px; font-size: 15px; margin-top: 5px;">
                        <b>Data initial load time: </b>{{ loadTime }} sec
                    </span>
                </div>
                <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :height="height" :rowHeight="46"
                    :taskbarHeight="25" :taskFields="taskFields" :columns="columns" :treeColumnIndex="1"
                    :allowSelection="true" :gridLines="gridLines" :highlightWeekends="true"
                    :timelineSettings="timelineSettings" :labelSettings="labelSettings" :includeWeekend="true"
                    :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :enableVirtualization="true"
                    :enableTimelineVirtualization="true" @dataBound="load">
                </ejs-gantt>
            </div>

        </div>

        <div id="action-description">
            <p>This sample demonstrates the way of binding data to Gantt Chart with remote service. The Gantt Chart data
                source
                is bound to remote data using DataManager. This sample data helps to visualize the various phases of
                Barley
                harvesting.</p>
        </div>

        <div id="description">
            <p>
                The <code>dataSource</code> property in Gantt Chart can be assigned with the instance of
                <code>DataManager</code> to bind remote data.
                The DataManager, which will act as an interface between the service endpoint and the Gantt Chart, will
                require
                the below minimal information to interact with service endpoint properly.
            <ul>
                <li><code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
                <li><code>DataManager->adaptor</code> - Defines the adaptor option. By default, ODataAdaptor is used for
                    remote
                    binding.</li>
            </ul>
            Adaptor is responsible for processing response and request from/to the service endpoint.
            <code>@syncfusion/ej2-data</code>
            package provides some predefined adaptors which are designed to interact with particular service endpoints.
            They
            are,
            <ul>
                <li><code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all
                    remote
                    based adaptors.</li>
                <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
                <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
                <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
                <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
            </ul>
            In this demo, remote data is bound by assigning service data as an instance of <code>DataManager</code> to
            the
            <code>dataSource</code>
            property.
            More information on the data binding can be found in this documentation section.
            </p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use a selection
                support, inject the
                <code>Selection</code> module.
            </p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers, VirtualScroll } from "@syncfusion/ej2-vue-gantt";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    components: {
        'ejs-gantt': GanttComponent,
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function () {
        return {
            recordCount: '1000',
            rowMark: '1,000 Rows',
            loadTime: '',
            startLoadTime: null,
            endLoadTime: null,
            shouldCalculateLoadTime: true,
            DLData: [
                { Text: '1,000 Rows', Value: '1000' },
                { Text: '2,500 Rows', Value: '2500' },
                { Text: '5,000 Rows', Value: '5000' }
            ],
            dropdownFields: { text: 'Text', value: 'Value' },
            height: '650px',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID: 'ParentId',
                dependency: 'Predecessor'

            },
            columns: [
                { field: 'TaskId' },
                { field: 'TaskName', headerText: 'Project Activity', width: '250', clipMode: 'EllipsisWithTooltip' },
                { field: 'StartDate', headerText: 'Planned Start Date' },
                { field: 'Duration', headerText: 'Estimated Duration' },
                { field: 'Progress', headerText: 'Completion (%)' }

            ],
            gridLines: 'Horizontal',
            timelineSettings: {
                timelineUnitSize: 50,
                topTier: { unit: 'Week', format: 'MMM dd, y' },
                bottomTier: { unit: 'Day', format: 'dd' }
            },
            labelSettings: {
                rightLabel: 'TaskName',
                taskLabel: 'Progress'

            },
            projectStartDate: new Date('12/28/2024'),
            projectEndDate: new Date('03/19/2025')
        };
    },

    mounted() {
        this.loadGanttData();
    },

    methods: {
        loadGanttData() {
            this.data = new DataManager({
                url: `https://ej2services.syncfusion.com/vue/development/api/GanttWebApiRemoteData?count=${this.recordCount}`,
                adaptor: new WebApiAdaptor(),
                crossDomain: true
            });
            this.startLoadTime = new Date();
        },
        onChange(event) {
            this.recordCount = event.value;
            this.shouldCalculateLoadTime = true;
            this.loadGanttData();
        },
        load() {
            if (this.shouldCalculateLoadTime) {
                this.endLoadTime = new Date();
                const diff = (this.endLoadTime.getTime() - this.startLoadTime.getTime()) / 1000;
                this.loadTime = diff.toFixed(3);
                this.shouldCalculateLoadTime = false;
            }
        }
    },

    provide: {
        gantt: [Selection, DayMarkers, VirtualScroll]
    }
}
</script>