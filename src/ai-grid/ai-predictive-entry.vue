<template>
    <div class="control-pane">
      <div class="control-section">
        <div class="description-container e-card">
          <div class="e-card-header-title" style="font-weight: 600">
            AI Driven Predictive Analysis in DataGrid
          </div>
          <div class="e-card-content">
            <p>
              This sample demonstrates how the Syncfusion Vue DataGrid, integrated with AI, can predict data based on the grid's existing entries.
            </p>
          </div>
        </div>
        <div id="container">
          <ejs-grid
            ref="grid"
            :dataSource="predictiveData"
            :toolbar="toolbarOptions"
            :queryCellInfo="CustomizeCell"
            :enableHover="false"
          >
            <e-columns>
              <e-column field="StudentID" isPrimaryKey="true" headerText="Student ID" textAlign="Right" width="100"></e-column>
              <e-column field="StudentName" headerText="Student Name" width="100"></e-column>
              <e-column field="FirstYearGPA" textAlign="Center" headerText="First Year GPA" width="100"></e-column>
              <e-column field="SecondYearGPA" headerText="Second Year GPA" headerTextAlign="Center" textAlign="Center" width="100"></e-column>
              <e-column field="ThirdYearGPA" headerText="Third Year GPA" headerTextAlign="Center" textAlign="Center" width="100"></e-column>
              <e-column field="FinalYearGPA" headerText="Final Year GPA" :visible="false" headerTextAlign="Center" textAlign="Center" width="100"></e-column>
              <e-column field="TotalGPA" headerText="Total GPA" :visible="false" headerTextAlign="Center" textAlign="Center" width="100"></e-column>
              <e-column field="TotalGrade" headerText="Total Grade" :visible="false" headerTextAlign="Center" textAlign="Center" width="100"></e-column>
            </e-columns>
          </ejs-grid>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Page } from '@syncfusion/ej2-vue-grids';
  import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
  import { predictiveData } from './data-source';
  import { getAzureChatAIRequest } from '../common/openai';
  
  export default {
    name: 'PredictiveDataEntry',
    components: {
      'ejs-grid': GridComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective,
      'ejs-button': ButtonComponent
    },
    data() {
      return {
        predictiveData: predictiveData,
        toolbarOptions: [
          { text: 'Calculate Grade', prefixIcon: 'e-add', id: 'calculate_Grade', align: 'Right' }
        ]
      }
    },
    methods: {
      CalculateGrade() {
        this.$refs.grid.showSpinner();
        this.ExecutePrompt();
      },
      delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      },
      ExecutePrompt() {
        const prompt = 'Final year GPA column should updated based on GPA of FirstYearGPA, SecondYearGPA and ThirdYearGPA columns. Total GPA should update based on average of all years GPA. Total Grade update based on total GPA. Updated the grade based on following details, 0 - 2.5 = F, 2.6 - 2.9 = C, 3.0 - 3.4 = B, 3.5 - 3.9 = B+, 4.0 - 4.4 = A, 4.5 - 5 = A+. average value decimal should not exceed 1 digit.';
        const gridReportJson = JSON.stringify(this.$refs.grid.dataSource);
        const userInput = this.generatePrompt(gridReportJson, prompt);
        getAzureChatAIRequest({ messages: [{ role: 'user', content: userInput }] })
          .then((result) => {
            try {
              result = result.replace('```json', '').replace('```', '');
              const generatedData = JSON.parse(result);
              this.$refs.grid.hideSpinner();
              if (generatedData.length) {
                this.$refs.grid.showColumns(['FinalYearGPA', 'TotalGPA', 'TotalGrade']);
                this.updateRows(generatedData);
              }
            } catch (error) {
              console.error('Error parsing AI response:', error);
              this.$refs.grid.hideSpinner();
            }
          })
          .catch((error) => {
            console.error('Error with AI request:', error);
            this.$refs.grid.hideSpinner();
          });
      },
      async updateRows(generatedData) {
        await this.delay(300);
        for (let i = 0; i < generatedData.length; i++) {
          const item = generatedData[i];
          this.$refs.grid.setRowData(item.StudentID, item);
          await this.delay(300);
        }
      },
      CustomizeCell(args) {
        if (args.column.field === 'FinalYearGPA' || args.column.field === 'TotalGPA') {
          if (args.data.FinalYearGPA > 0) {
            args.cell.classList.add('e-PredictiveColumn');
          } else if (args.data.TotalGPA > 0) {
            args.cell.classList.add('e-PredictiveColumn');
          }
        }
        if (args.column.field === 'TotalGrade') {
          if (args.data.TotalGPA <= 2.5) {
            args.cell.classList.add('e-inactivecolor');
          } else if (args.data.TotalGPA >= 4.5) {
            args.cell.classList.add('e-activecolor');
          } else if (args.data.TotalGPA > 0) {
            args.cell.classList.add('e-PredictiveColumn');
          }
        }
      },
      generatePrompt(data, userInput) {
        return `Given the following datasource are bounded in the Grid table\n\n${data}.\n Return the newly prepared datasource based on following user query: ${userInput}\n\nGenerate an output in JSON format only and Should not include any additional information or contents in response`;
      }
    },
    provide: {
      grid: [Page, Toolbar]
    }
  }
  </script>
  
  <style>
.e-inactivecolor {
    background-color: indianred;
    width: 100%;
}

.fluent-dark .e-inactivecolor,
.fluent2-dark .e-inactivecolor,
.tailwind-dark .e-inactivecolor,
.material-dark .e-inactivecolor,
.material3-dark .e-inactivecolor,
.fabric-dark .e-inactivecolor,
.bootstrap-dark .e-inactivecolor,
.bootstrap4-dark .e-inactivecolor,
.bootstrap5-dark .e-inactivecolor,
.highcontrast .e-inactivecolor {
    background-color: #55241E;
}

.e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd) {
    color: #FFFFFF;
}

.fluent-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.fluent2-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.material-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.material3-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap4-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5-dark .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.highcontrast .e-grid .e-rowcell.e-inactivecolor:not(.e-editedbatchcell):not(.e-updatedtd) {
    color: #FF9CA0;
}

.e-activecolor {
    background-color: lightgreen;
    width: 100%;
}

.fluent-dark .e-activecolor,
.fluent2-dark .e-activecolor,
.tailwind-dark .e-activecolor,
.material-dark .e-activecolor,
.material3-dark .e-activecolor,
.fabric-dark .e-activecolor,
.bootstrap-dark .e-activecolor,
.bootstrap4-dark .e-activecolor,
.bootstrap5-dark .e-activecolor,
.highcontrast .e-activecolor {
    background-color: #315C35;
}

.fluent-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.fluent2-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.material-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.material3-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap4-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5-dark .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd),
.highcontrast .e-grid .e-rowcell.e-activecolor:not(.e-editedbatchcell):not(.e-updatedtd) {
    color: #38FF9C;
}

.e-PredictiveColumn {
    background-color: lightblue
}

.fluent-dark .e-PredictiveColumn,
.fluent2-dark .e-PredictiveColumn,
.tailwind-dark .e-PredictiveColumn,
.material-dark .e-PredictiveColumn,
.material3-dark .e-PredictiveColumn,
.fabric-dark .e-PredictiveColumn,
.bootstrap-dark .e-PredictiveColumn,
.bootstrap4-dark .e-PredictiveColumn,
.bootstrap5-dark .e-PredictiveColumn,
.highcontrast .e-PredictiveColumn {
    background-color: #001F3F;
}
  </style>
  