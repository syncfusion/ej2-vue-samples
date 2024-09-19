<template>
    <div>
        <ejs-spreadsheet ref="spreadsheet" :height="'708px'" :created="onCreated">
            <e-sheets>
                <e-sheet :name="'Gross Pay'" :ranges="ranges" :rows="rows" :columns="columns"></e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
        <ejs-sidebar ref="sidebar" :width="'500px'" :target="'.maincontent'" :position="'Right'"
            :closeOnDocumentClick="false" :showBackdrop="false">
            <div id="defaultAIAssistView"></div>
        </ejs-sidebar>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-spreadsheet';
import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-vue-interactive-chat';
import { getAzureChatAIRequest } from '../common/openai';
import { grossPay } from './data-source';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

export default defineComponent({
    name: 'App',
    components: {
        'ejs-spreadsheet': SpreadsheetComponent,
        'e-sheets': SheetsDirective,
        'e-sheet': SheetDirective,
        'e-ranges': RangesDirective,
        'e-range': RangeDirective,
        'e-rows': RowsDirective,
        'e-row': RowDirective,
        'e-cells': CellsDirective,
        'e-cell': CellDirective,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-sidebar': SidebarComponent
    },
    data() {
        return {
            prompts: [
                { prompt: '', response: '' }
            ],
            aiinstance: null as AIAssistView | null,
            ranges: [{
                dataSource: grossPay,
                startCell: 'A3'
            }],
            rows: [
                {
                    cells: [{
                        value: 'Gross Pay Calculation',
                        style: {
                            fontSize: '20pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#B3FFB3',
                            verticalAlign: 'middle'
                        }
                    }]
                },
                {
                    index: 3, cells: [{
                        index: 9, formula: '=B4+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 4, cells: [{
                        index: 9, formula: '=B5+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 5, cells: [{
                        index: 9, formula: '=B6+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 6, cells: [{
                        index: 9, formula: '=B7+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 7, cells: [{
                        index: 9, formula: '=B8+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 8, cells: [{
                        index: 9, formula: '=B9+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 9, cells: [{
                        index: 9, formula: '=B10+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 10, cells: [{
                        index: 9, formula: '=B11+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 11, cells: [{
                        index: 9, formula: '=B12+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 12, cells: [{
                        index: 9, formula: '=B13+6',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                },
                {
                    index: 13,
                    cells: [{
                        index: 7, value: 'Total Gross',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    },
                    {
                        index: 8, formula: '=Sum(I4:I13)', format: '$#,##0.00',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }, {
                        index: 9, formula: '=Sum(J4:J13)',
                        style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }
                    }]
                }
            ],
            columns: [
                { width: 88 }, { width: 120 }, { width: 106 }, { width: 98 }, { width: 110 },
                { width: 110 }, { width: 110 }, { width: 98 }, { width: 130 }
            ]
        };
    },
    methods: {
        onCreated(): void {
            const spreadsheet = (this.$refs.spreadsheet as SpreadsheetComponent).ej2Instances;
            spreadsheet.merge('A1:I2');
            spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, 'A1:I13');
            spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle' }, 'A3:I13');
            spreadsheet.cellFormat({ backgroundColor: '#B3FFB3', fontWeight: 'bold' }, 'A3:I3');
            spreadsheet.numberFormat('$#,##0.00', 'H4:I13');
            spreadsheet.wrap('H3:I3');
            spreadsheet.addRibbonTabs([{
                header: { text: 'AI Assistant' }, content: [
                    {
                        text: 'Full Sheet Analysis', tooltipText: 'Full Sheet Analysis',
                        click: (): void => {
                            this.fullSheetAnalysis();
                        }
                    },
                    {
                        text: 'Validate', tooltipText: 'Validate formulae',
                        click: (): void => {
                            this.formulaValidate();
                        }
                    },
                    {
                        text: 'Generate Formula', tooltipText: 'Generate Formula',
                        click: (): void => {
                            this.generateFormula();
                        }
                    }
                ]
            }]);

            spreadsheet.addDataValidation({ type: 'Time', operator: 'LessThan', value1: '9:00:00 AM', ignoreBlank: false }, 'E4:E13');
            spreadsheet.addDataValidation({ type: 'Time', operator: 'LessThan', value1: '6:00:00 PM', ignoreBlank: false }, 'F4:F13');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '10', ignoreBlank: false }, 'G4:G13');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '250', ignoreBlank: false }, 'H4:H13');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '300', ignoreBlank: false }, 'I4:I13');
        },

        fullSheetAnalysis(): void {
            const spreadsheet = (this.$refs.spreadsheet as SpreadsheetComponent).ej2Instances;
            spreadsheet.saveAsJson().then((data: any) => {
                const processedString: string = this.processDataSource(data);
                let query: string = 'Analyze the full data in this data. ' + processedString;
                let aiOutput: any = getAzureChatAIRequest({ messages: [{ role: 'user', content: query }] });
                aiOutput.then((result: any) => {
                    result = this.markdownToPlainText(result);
                    this.renderAssistView(result);
                    (this.$refs.sidebar as SidebarComponent).show();
                });
            });
        },

        formulaValidate(): void {
            const spreadsheet = (this.$refs.spreadsheet as SpreadsheetComponent).ej2Instances;
            const selectedCell: string = spreadsheet.sheets[spreadsheet.activeSheetIndex].selectedRange as string;
            let isFormulaAvailable: boolean = false;
            if (!isNullOrUndefined(selectedCell)) {
                spreadsheet.getData(selectedCell).then((data: any) => {
                    const currentCells: string[] = Array.from(data.keys());
                    let query: string = 'Validate the below formulae and provide me the problem in it. Strictly provide the data for each validated response in a flat JSON with fields `cell` to hold the spreadsheet cell value and `response` to hold the problem and solution.';
                    for (let a = 0; a < currentCells.length; a++) {
                        const cellFormula: string = data.get(currentCells[a]).formula;
                        if (!isNullOrUndefined(cellFormula)) {
                            isFormulaAvailable = true;
                            query += 'Spreadsheet cell - ' + currentCells[a] + ' - Formula - ' + cellFormula + ' - ' + this.processString(cellFormula);
                        }
                    }
                    if (isFormulaAvailable) {
                        let aiOutput: any = getAzureChatAIRequest({ messages: [{ role: 'user', content: query }] });
                        aiOutput.then((result: any) => {
                            let cleanedResponseText = result.split('')[1].trim();
                            cleanedResponseText = cleanedResponseText.split("")[0].trim();
                            const responseJson: any[] = JSON.parse(cleanedResponseText);
                            for (let a = 0; a < responseJson.length; a++) {
                                spreadsheet.updateCell({ notes: (responseJson[a] as any).response }, (responseJson[a] as any).cell);
                            }
                        });
                    }
                });
            }
        },

        generateFormula(): void {
            this.renderAssistViewForFormula(this.prompts);
            (this.$refs.sidebar as SidebarComponent).show();
        },

        renderAssistViewForFormula(response: any): void {
            if (isNullOrUndefined(this.aiinstance)) {
                this.aiinstance = new AIAssistView({
                    promptPlaceholder: "Type your prompt for assistance...",
                    prompts: this.prompts,
                    promptRequest: this.promptHandler
                });
                this.aiinstance.appendTo('#defaultAIAssistView');
            } else {
                this.aiinstance.promptRequest = this.promptHandler;
                this.aiinstance.prompts = this.prompts;
            }
        },

        promptHandler(args: PromptRequestEventArgs): void {
            let prompt: string = args.prompt as string;
            const spreadsheet = (this.$refs.spreadsheet as SpreadsheetComponent).ej2Instances;
            spreadsheet.saveAsJson().then((data: any) => {
                const processedString: string = this.processDataSource(data);
                let query: string = prompt + '. Strictly provide the excel formula for the Excel sheet data which is provided as JSON below. /n' + processedString;
                let aiOutput: any = getAzureChatAIRequest({ messages: [{ role: 'user', content: query }] });
                aiOutput.then((result: any) => {
                    if (result) {
                        let cleanedResponseText = result.split('')[1].trim();
                        cleanedResponseText = cleanedResponseText.split('')[0].trim();
                        this.prompts.push({ prompt: prompt, response: cleanedResponseText });
                        this.aiinstance!.prompts = this.prompts;
                    }
                });
            });
        },

        removeKeys(array: any[], keysToRemove: string[], cellsKeys?: string[]): any[] {
            array.forEach(obj => {
                keysToRemove.forEach((key: string) => {
                    if (key === 'cells') {
                        if (obj && obj.cells && obj.cells.length > 0) {
                            this.removeKeys(obj.cells, (cellsKeys as string[]));
                        }
                    } else {
                        if (obj && obj[key]) {
                            delete obj[key];
                        }
                    }
                });
            });
            return array;
        },

        processDataSource(data: any): string {
            const spreadsheet = (this.$refs.spreadsheet as SpreadsheetComponent).ej2Instances;
            const dataSource: any = this.removeKeys(data.jsonObject.Workbook.sheets[spreadsheet.activeSheetIndex].rows, ['height', 'cells'], ['style', 'wrap', 'validation', 'colSpan', 'rowSpan']);
            const processedString: string = JSON.stringify(dataSource);
            return (processedString as any).replaceAll('{}', null);
        },

        renderAssistView(response: any): void {
            if (isNullOrUndefined(this.aiinstance)) {
                this.aiinstance = new AIAssistView({
                    promptPlaceholder: "Type your prompt for assistance...",
                    prompts: [{ prompt: '', response: response }]
                });
                this.aiinstance.appendTo('#defaultAIAssistView');
            } else {
                this.aiinstance.prompts = [{ prompt: '', response: response }];
            }
        },

        processString(forumlaString: string): string {
            let processedString: string = '';
            const regex = /\(([^)]+)\)/g;
            let matches: any[] = [];
            let match;
            while ((match = regex.exec(forumlaString)) !== null) {
                let text = match[1];
                matches = text.split(/[:+\-*=/]/).map(s => s.trim()).filter(s => s !== '');
            }
            if (isNullOrUndefined(matches) || matches.length <= 0) {
                matches = forumlaString.split(/[:+\-*=/]/).map(s => s.trim()).filter(s => s !== '');
            }
            if (matches.length > 0) {
                for (let i: number = 0; i < matches.length; i++) {
                    let { rowIndex, columnIndex } = this.cellAddressToIndexes(matches[i]);
                    if (rowIndex != null && columnIndex != null) {
                        const spreadsheet = (this.$refs.spreadsheet as SpreadsheetComponent).ej2Instances;
                        processedString += 'Value of the cell ' + matches[i] + ' is ' + spreadsheet.sheets[spreadsheet.activeSheetIndex].rows[rowIndex].cells[columnIndex].value + '/n';
                    }
                }
            }
            return processedString;
        },

        cellAddressToIndexes(cellAddress: string): { rowIndex: number | null, columnIndex: number | null } {
            const match = cellAddress.match(/^([A-Z]+)(\d+)$/);
            if (!match) {
                return { rowIndex: null, columnIndex: null };
            }
            const columnLetters = match[1];
            const rowNumber = parseInt(match[2], 10);
            let columnIndex = 0;
            for (let i = 0; i < columnLetters.length; i++) {
                columnIndex = columnIndex * 26 + (columnLetters.charCodeAt(i) - 'A'.charCodeAt(0));
            }
            const rowIndex = rowNumber - 1;
            return { rowIndex, columnIndex };
        },

        markdownToPlainText(markdown: string): string {
            markdown = markdown.replace(/^###### (.+)$/gm, '<h6>$1</h6>');
            markdown = markdown.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
            markdown = markdown.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
            markdown = markdown.replace(/^### (.+)$/gm, '<h3>$1</h3>');
            markdown = markdown.replace(/^## (.+)$/gm, '<h2>$1</h2>');
            markdown = markdown.replace(/^# (.+)$/gm, '<h1>$1</h1>');
            markdown = markdown.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            markdown = markdown.replace(/\*(.+?)\*/g, '<em>$1</em>');
            markdown = markdown.replace(/^\* (.+)$/gm, '<ul><li>$1</li></ul>');
            markdown = markdown.replace(/^\d+\. (.+)$/gm, '<ol><li>$1</li></ol>');
            markdown = markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
            markdown = markdown.replace(/\n/g, '<br>');
            markdown = '<p>' + markdown + '</p>';
            return markdown;
        }
    }
});
</script>