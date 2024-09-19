<template>
    <div class='control-pane'>
        <div class='control-section'>
            <div class="description-container e-card">
                <div class='e-card-header-title' style="font-weight: 600">AI-Driven Anomaly Detection in DataGrid</div>
                <div class='e-card-content'>
                    <p>
                        In this example, the DataGrid shows Machine ID, Voltage, Pressure, Temperature, Motor Speed, and
                        Production Rate. AI detects anomalies in this data and explains the reasons.
                    </p>
                </div>
            </div>
            <div id='container'>
                <ejs-grid id='Grid' ref="gridInstance" :dataSource="machineDataList" :toolbar="toolbar"
                    :queryCellInfo="CustomizeCell" :enableHover="false" :enableStickyHeader="true" :allowTextWrap="true"
                    :rowHeight="75" :height="450">
                    <e-columns>
                        <e-column field='MachineID' isPrimaryKey="true" headerText='Machine ID' textAlign='Right'
                            width="85" />
                        <e-column field='Temperature' headerText='Temperature (C)' textAlign='Right' width="120" />
                        <e-column field='Pressure' headerText='Pressure (psi)' textAlign='Right' width="100" />
                        <e-column field='Voltage' headerText='Voltage (V)' textAlign='Right' width="100" />
                        <e-column field='MotorSpeed' headerText='Motor Speed (rpm)' textAlign='Right' width="140" />
                        <e-column field='ProductionRate' headerText='Production Rate (units/hr)' textAlign='Right'
                            width="140" />
                        <e-column field='AnomalyDescription' :visible="false" headerText='Anomaly Description'
                            width="290" />
                    </e-columns>
                </ejs-grid>
            </div>
        </div>
    </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Page } from '@syncfusion/ej2-vue-grids';
import { machineDataList } from './data-source';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { getAzureChatAIRequest } from '../common/openai';

export default {
    name: 'AnomalyDetection',
    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-button': ButtonComponent
    },
    data() {
        return {
            machineDataList: machineDataList,
            AIgeneratedData: [],
            toolbar: [
                "<ejs-button id='anomaly' isPrimary={true} onClick={this.DetectAnomalyData}>Detect Anomaly Data</ejs-button>"
            ]
        }
    },
    methods: {
        DetectAnomalyData() {
            this.$refs.gridInstance.showSpinner();
            this.DetectAnomalyDataInternal();
        },
        DetectAnomalyDataInternal() {
            const gridReportJson = JSON.stringify(this.$refs.gridInstance.dataSource);
            const userInput = this.generatePrompt(gridReportJson);
            let aiOutput = getAzureChatAIRequest({ messages: [{ role: 'user', content: userInput }] });
            aiOutput.then((result) => {
                result = result.replace('', '').replace('', '');
                this.AIgeneratedData = JSON.parse(result);
                this.$refs.gridInstance.hideSpinner();
                if (this.AIgeneratedData.length) {
                    this.$refs.gridInstance.showColumns(['Anomaly Description']);
                    for (let i = 0; i < this.AIgeneratedData.length; i++) {
                        const item = this.AIgeneratedData[i];
                        this.$refs.gridInstance.setRowData(item.MachineID, item);
                    }
                }
            });
        },
        generatePrompt(data) {
            return `Given the following datasource are bounded in the Grid table\n\n${data}.\n Return the anomaly data rows (ie. pick the ir-relevant datas mentioned in the corresponding table) present in the table mentioned above as like in the same format provided do not change the format. Example: Watch out the production rate count and the factors that is used to acheive the mentioned production rate(Temprature, Pressure, Motor Speed) If the production rate is not relevant to the concern factors mark it as anomaly Data. If it is anomaly data then due to which column data it is marked as anomaly that particular column name should be updated in the AnomalyFieldName. Also Update the AnomalyDescription stating that due to which reason it is marked as anomaly a short description. Example if the data is marked as anomaly due to the Temperature column, Since the mentioned temperature is too high than expected, it is marked as anomaly data.\n\nGenerate an output in JSON format only and Should not include any additional information or contents in response`;
        },
        CustomizeCell(args) {
            if (this.AIgeneratedData != null && this.AIgeneratedData.length > 0) {
                let isAnomalyData = false;
                this.AIgeneratedData.map((e) => {
                    if (!isNullOrUndefined(e.AnomalyFieldName) && e.MachineID === args.data.MachineID &&
                        (e.AnomalyFieldName === args.column?.field || args.column?.field === 'AnomalyDescription')) {
                        isAnomalyData = true;
                    }
                });
                if (isAnomalyData) {
                    args.cell?.classList.add('anomaly-cell');
                    args.cell?.classList.remove('normal-cell');
                }
            }
            else if (args.column?.field === 'AnomalyDescription') {
                args.cell?.classList.add('normal-cell');
            }
        }
    },
    provide: {
        grid: [Toolbar, Page]
    }
}
</script>

<style>
.anomaly-cell {
    background-color: #B8595A;
}

.fluent-dark .anomaly-cell,
.fluent2-dark .anomaly-cell,
.tailwind-dark .anomaly-cell,
.material-dark .anomaly-cell,
.material3-dark .anomaly-cell,
.fabric-dark .anomaly-cell,
.bootstrap-dark .anomaly-cell,
.bootstrap4-dark .anomaly-cell,
.bootstrap5-dark .anomaly-cell,
.highcontrast .anomaly-cell {
    background-color: #55241E;
}

.e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd) {
    color: #FFFFFF;
}

.fluent-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.fluent2-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.material-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.material3-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap4-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5-dark .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.highcontrast .e-grid .e-rowcell.anomaly-cell:not(.e-editedbatchcell):not(.e-updatedtd) {
    color: #FF9CA0;
}

.normal-cell {
    background-color: #AAF38C;
}

.fluent-dark .normal-cell,
.fluent2-dark .normal-cell,
.tailwind-dark .normal-cell,
.material-dark .normal-cell,
.material3-dark .normal-cell,
.fabric-dark .normal-cell,
.bootstrap-dark .normal-cell,
.bootstrap4-dark .normal-cell,
.bootstrap5-dark .normal-cell,
.highcontrast .normal-cell {
    background-color: #315C35;
}

.fluent-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.fluent2-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.material-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.material3-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap4-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5-dark .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd),
.highcontrast .e-grid .e-rowcell.normal-cell:not(.e-editedbatchcell):not(.e-updatedtd) {
    color: #38FF9C;
}
</style>