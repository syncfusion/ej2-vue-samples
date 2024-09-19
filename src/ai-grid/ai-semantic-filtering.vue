<template>
    <div class="control-pane">
        <div class="control-section">
            <div class="description-container e-card">
                <div class="e-card-header-title" style="font-weight: 600">
                    Semantic Search in Syncfusion Vue DataGrid Using Local Embeddings
                </div>
                <div class="e-card-content">
                    <p>
                        This example shows how the DataGrid presents medical report data. Using Semantic Search, you can
                        find relevant information without needing to use the exact terms. For instance, searching for
                        "stomach" will still bring up reports about "Abdominal pain." The grid updates search results
                        dynamically using local embeddings.
                    </p>
                </div>
            </div>
            <div id="container">
                <ejs-grid id="SemanticGrid" ref="gridInstance" :toolbar="toolbarOptions" :dataSource="MedicalRecords"
                    :enableAltRow="true" :allowTextWrap="true">
                    <e-columns>
                        <e-column field="RecordID" headerText="Record ID" width="90" textAlign="Right"></e-column>
                        <e-column field="PatientID" headerText="Patient ID" width="90" textAlign="Right"></e-column>
                        <e-column field="Symptoms" headerText="Symptoms" width="140"></e-column>
                        <e-column field="Diagnosis" headerText="Diagnosis" width="100"></e-column>
                        <e-column field="DoctorDetails" headerText="Doctor Information" width="140"></e-column>
                    </e-columns>
                </ejs-grid>
            </div>
        </div>
    </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar } from '@syncfusion/ej2-vue-grids';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { embeddingModel } from '../common/embedding-model';
import { cosineSimilarity } from '../common/cosine-similarity';
import { MedicalRecords } from './data-source';
import { Query, Predicate } from '@syncfusion/ej2-data';
import { createApp } from 'vue';

export default {
    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-textbox': TextBoxComponent,
        'ejs-button': ButtonComponent,
    },
    data() {
        return {
            MedicalRecords: MedicalRecords,
            toolbarOptions: [{
                template: function () {
                    return {
                        template: createApp().component('toolbarTemplate', {
                            template: `
                            <ejs-textbox id='smart_search_input' placeholder='Search here' width="200" />
                            <ejs-button id="toolbarButton" :isPrimary="true" @click='smartSearch'>Smart Search</ejs-button>`,
                            components: { 'ejs-button': ButtonComponent, 'ejs-textbox': TextBoxComponent, },
                            data() { return {} }
                        })
                    }
                }, text: 'Smart Search'
            }],
            productEmbeddings: {},
        };
    },
    provide: {
        grid: [Page, Toolbar]
    },
    mounted() {
        this.getEmbeddingsData();
    },
    methods: {
        getEmbeddingsData: async function () {
            for (let record of this.MedicalRecords) {
                let data = await embeddingModel(
                    record.DoctorDetails + ' ' + record.PatientID + ' ' + record.Symptoms + ' ' + record.Diagnosis
                );
                this.productEmbeddings[record.RecordID] = data;
            }
        },
        smartSearch: function () {
            const gridInstance =  this.$refs.gridInstance.ej2Instances;
            if (gridInstance) {
                let searchEle = this.$refs.gridInstance.ej2Instances.$el.querySelector('#smart_search_input');
                if (searchEle) {
                    let searchValue = searchEle.value.trim();
                    if (searchValue) {
                        gridInstance.showSpinner();
                        this.ExecutePrompt(searchValue);
                    } else {
                        gridInstance.query = new Query();
                    }
                }
            }
        },
        ExecutePrompt: async function (searchValue) {
            let queryVector = await embeddingModel(searchValue);
            const similarityThreshold = 0.8;
            const outputData = this.MedicalRecords.filter((record) => {
                const similarity = cosineSimilarity(
                    this.productEmbeddings[record.RecordID],
                    queryVector
                );
                return similarity > similarityThreshold;
            });
            this.$refs.gridInstance.ej2Instances.hideSpinner();
            if (outputData.length > 0) {
                this.$refs.gridInstance.ej2Instances.query = new Query().where(this.generatePredicate(outputData));
            } else {
                this.$refs.gridInstance.ej2Instances.query = new Query().take(0);
            }
        },
        generatePredicate: function (filteredData) {
            let predicates = [];
            for (let i = 0; i < filteredData.length; i++) {
                predicates.push(new Predicate('Symptoms', 'contains', filteredData[i].Symptoms));
            }
            return Predicate.or(predicates);
        }
    },
};
</script>

<style>
 #SemanticGrid .e-row.e-altrow {
    background-color: #FAFAFA;
}

.fluent-dark  #SemanticGrid .e-row.e-altrow,
.fluent2-dark #SemanticGrid .e-row.e-altrow,
.tailwind-dark #SemanticGrid .e-row.e-altrow,
.material-dark #SemanticGrid .e-row.e-altrow,
.material3-dark #SemanticGrid .e-row.e-altrow,
.fabric-dark #SemanticGrid .e-row.e-altrow,
.bootstrap-dark #SemanticGrid .e-row.e-altrow,
.bootstrap4-dark #SemanticGrid .e-row.e-altrow,
.bootstrap5-dark #SemanticGrid .e-row.e-altrow,
.highcontrast #SemanticGrid .e-row.e-altrow {
    background-color: #353839;
}

#smart_search_button {
    margin-left: 8px;
}
</style>
