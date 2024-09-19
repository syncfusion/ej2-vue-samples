<template>
    <div id="app">
        <ejs-pivotview ref="pivotObj" id="pivotTable" :dataSourceSettings="dataSourceSettings" width="100%" height="500"
            :toolbarRender="toolbarRender" :toolbar="toolbarOptions" :showToolbar="true"
            :allowConditionalFormatting="true" :allowPdfExport="true" :allowCalculatedField="true" :showFieldList="true"
            :displayOption="{ view: 'Both' }" :chartSettings="chartSettings"></ejs-pivotview>
        <ejs-dialog ref="dialog" id="pivotDialog" :minHeight="'200px'" :showCloseIcon="true" :visible="false"
            header="AI Assist" :buttons="dialogButtons" target="#pivotTable">
            <div id="dialogContent"></div>
        </ejs-dialog>
    </div>
</template>

<script>
import {
    PivotViewComponent,
    FieldList,
    CalculatedField,
    Toolbar,
    ConditionalFormatting,
    NumberFormatting,
} from "@syncfusion/ej2-vue-pivotview";
import { enableRipple } from "@syncfusion/ej2-base";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
import { DropDownListComponent, MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ChipListComponent } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { pivotData } from "./data-source";

enableRipple(true);

export default {
    name: "App",
    components: {
        'ejs-pivotview': PivotViewComponent,
        'ejs-dialog': DialogComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-multiselect': MultiSelectComponent,
        'ejs-chiplist': ChipListComponent,
        'ejs-textbox': TextBoxComponent,
    },
    data() {
        return {
            dropdownData: ["2025", "2026", "2027", "2028", "2029"],
            description: "",
            dataSourceSettings: {
                enableSorting: true,
                columns: [{ name: "Year" }, { name: "Quarter" }],
                values: [
                    { name: "Sold", caption: "Units Sold" },
                    { name: "Amount", caption: "Sold Amount" },
                ],
                dataSource: pivotData,
                rows: [{ name: "Country", expandAll: true }, { name: "Products" }],
                formatSettings: [{ name: "Amount", format: "C0" }],
                filterSettings: [
                    {
                        name: "Products",
                        type: "Include",
                        items: ["Bikes", "Road Bikes", "Helmets", "Bottles and Cages"],
                    },
                ],
            },
            toolbarOptions: ["Grid", "Chart", "SubTotal", "GrandTotal", "ConditionalFormatting", "FieldList"],
            chartSettings: {
                value: "Amount",
                enableExport: true,
                chartSeries: { type: "Column", animation: { enable: false } },
                enableMultipleAxis: false,
            },
            dialogButtons: [
                {
                    click: this.onSubmit,
                    buttonModel: { content: "Submit", isPrimary: true },
                },
            ],
        };
    },
    methods: {
        toolbarRender(args) {
            args.customToolbar.splice(5, 0, { type: "Separator" });
            args.customToolbar.splice(6, 0, {
                text: "AI Assist",
                tooltipText: "AI Assist",
                click: this.toolbarClicked,
            });
        },
        toolbarClicked() {
            this.$refs.dialog.show();
        },
        onSubmit() {
            this.$refs.dialog.hide();
        },
        createDialogContent(container) {
            let categoryTitle1 = document.createElement("p");
            categoryTitle1.className = "category-title";
            categoryTitle1.innerText = "Pick a Suggested Query:";
            container.appendChild(categoryTitle1);

            let chipContainer = document.createElement("div");
            chipContainer.className = "chip-container";
            const chip = {
                chips: [
                    { text: "Predictive Analytics & Modeling" },
                    { text: "Intelligent Report Aggregation" },
                    { text: "Adaptive Filter Suggestions" },
                ],
                selection: "Single",
                selectedChips: [0],
            };
            this.$refs.chipList.setProperties(chip);
            this.$refs.chipList.$on('click', this.onChipSelectionChange);
            chipContainer.appendChild(this.$refs.chipList.$el);
            container.appendChild(chipContainer);

            // Prompt section
            let categoryTitle2 = document.createElement("p");
            categoryTitle2.className = "category-title";
            categoryTitle2.innerText = "Prompt:";
            container.appendChild(categoryTitle2);

            let inlineDiv = document.createElement("div");
            inlineDiv.className = "inline";
            inlineDiv.id = "inlineContent";
            container.appendChild(inlineDiv);

            // Initial Content Based on Default Selection
            this.updateContentBasedOnSelection(0);
        },
        updateContentBasedOnSelection(selectedChipIndex) {
            let inlineDiv = document.getElementById("inlineContent");
            if (inlineDiv) {
                inlineDiv.innerHTML = "";

                if (selectedChipIndex === 0) {
                    let yearInput = document.createElement("input");
                    yearInput.id = "yearInput";
                    let textSpan = document.createElement("span");
                    textSpan.id = "contentText";
                    textSpan.className = "dropdown-size";
                    textSpan.innerHTML = "Provide future data points up to the year ";
                    textSpan.appendChild(yearInput);
                    textSpan.innerHTML += " along with the existing data.";
                    inlineDiv.appendChild(textSpan);
                    let yearDropdown = new DropDownListComponent({
                        placeholder: "Select a Year",
                        width: "80px",
                        popupHeight: "200px",
                        popupWidth: "140px",
                        index: 0,
                        dataSource: this.dropdownData,
                    });
                    yearDropdown.appendTo("#yearInput");
                } else if (selectedChipIndex === 1) {
                    // Logic for second chip
                } else if (selectedChipIndex === 2) {
                    // Logic for third chip
                }
            }
        },
        onChipSelectionChange() {
            this.updateContentBasedOnSelection(this.$refs.chip.selectedChips);
        },
    },
    mounted() {
        this.createDialogContent(document.getElementById("dialogContent"));
    },
};
</script>

<style scoped>
.category-title {
    font-weight: bold;
    margin-bottom: 10px;
}

.chip-container {
    margin-bottom: 20px;
}

.inline {
    display: flex;
    align-items: center;
}

.dropdown-size {
    margin-right: 10px;
}
</style>