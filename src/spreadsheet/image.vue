<template>
  <div class="control-section">
    <div id="spreadsheet-image">
        <ejs-spreadsheet  ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :showRibbon="false" :showFormulaBar="false" :created="created">
            <e-sheets>
                <e-sheet name="Weekly Diet Planner" :showGridLines="false" selectedRange="B4">
                    <e-rows>
                        <e-row :height="20">
                        </e-row>
                        <e-row :height="150">
                            <e-cells>
                                <e-cell index=1 :image="image"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="20">
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="Weekly Diet Planner"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="20">
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=2 value="BREAKFAST"></e-cell>
                                <e-cell value="LUNCH"></e-cell>
                                <e-cell value="DINNER"></e-cell>
                                <e-cell value="SNACKS"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="S"></e-cell>
                                <e-cell value="Bacon, Eggs, and Toast"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="M"></e-cell>
                                <e-cell value="Strawberry waffles"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="T"></e-cell>
                                <e-cell value="Pancakes and Maple Syrup"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="W"></e-cell>
                                <e-cell value="Sausage and Egg Sandwich"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="T"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="F"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row :height="50">
                            <e-cells>
                                <e-cell index=1 value="S"></e-cell>
                            </e-cells>
                        </e-row>
                    </e-rows>
                    <e-columns>
                        <e-column :width="20"></e-column>
                        <e-column :width="100"></e-column>
                        <e-column :width="208"></e-column>
                        <e-column :width="200"></e-column>
                        <e-column :width="200"></e-column>
                        <e-column :width="200"></e-column>
                    </e-columns>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
     <div id="action-description">
        <p>
           This sample explains about the image feature by using weekly diet planner as an example. You can change the height and width of the picture by resizing and move it to another position by drag and drop.
        </p>
        </div>
        <div id="description">
        <p>
           In this demo, the image has been inserted in the specific cell position by using the <code>image</code> property in the cell object. You can also insert an image by using the <code>insertImage</code> method.
           To enable or disable this feature use the <code>allowImage</code> property in Spreadsheet.
        </p>
        <p>
           This sample is configured with import and export options. Use <b>Ctrl + O</b> to open an excel file and <b>Ctrl + S</b> to save an excel file with a picture.
        </p>
        <p>
           More information about the Spreadsheet component can be found in this
           <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/illustrations/#image">
            documentation</a> section.
        </p>
     </div>
     <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>

    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }

    #spreadsheet-image {
      height: 550px;
    }

    .ej2-new .control-section {
        height: 550px;
    }
    .e-spreadsheet .e-main-panel .e-main-content{
        margin-left: 0 !important;
    }
</style>
<!-- custom code end -->
<script>
import { SpreadsheetComponent, SheetDirective, SheetsDirective, RowDirective, RowsDirective, CellDirective, CellsDirective, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-spreadsheet";
import dataSource from './image-data.json';

export default {
   components: {
    'ejs-spreadsheet': SpreadsheetComponent,
    'e-sheet': SheetDirective,
    'e-sheets': SheetsDirective,
    'e-row': RowDirective,
    'e-rows': RowsDirective,
    'e-cell': CellDirective,
    'e-cells': CellsDirective,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
   },
   data: () => {
    return {
        //To insert image in a cell
        image: [{src: dataSource.base64Image,
        height: 149, width: 907, top:20, left: 20}],
         openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
         saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save'
    }
  },
  methods: {
    //Application level customization
    created: function() {
            var spreadsheet = this.$refs.spreadsheet;
            spreadsheet.merge('B2:F2');
            spreadsheet.merge('B4:F4');
            spreadsheet.cellFormat({ fontSize: '28pt', fontFamily: 'Arial', color: '#3a3838', verticalAlign: 'middle', textAlign: 'center' }, 'B4');
            spreadsheet.cellFormat({ fontSize: '16pt', fontFamily: 'Calibri', color: '#757171', verticalAlign: 'middle' }, 'B6:F6');
            spreadsheet.cellFormat({ fontSize: '14pt', fontFamily: 'Calibri', color: '#757171', verticalAlign: 'middle', textAlign: 'center' }, 'B7:B13');
            spreadsheet.cellFormat({ fontSize: '14pt', color: '#000000', verticalAlign: 'middle' }, 'C7:F13');
            spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'B7:F13', 'Horizontal');
            }
  }
}
</script>