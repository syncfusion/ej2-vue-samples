
<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>
                This sample demonstrates how frequently Tree Grid cells are updated in real-time data at a set interval.
            </p>
        </div>
        <div>
            <div id="treegrid-buttons" style="padding-bottom: 10px;">
                <h4 style="display: inline-block; font-size: 14px">Feed Delay(ms):</h4>
                <ejs-numerictextbox ref="feeddelay" :value="value" format="N0" :min="min" :max="max" :step="step"
                    :width="width" style="margin-left: 7px;" aria-label="Feed Delay in milliseconds"></ejs-numerictextbox>
                <ejs-button ref="updatebtn" id="update" v-on:click.native="updateClick" style="margin-left: 10px;" aria-label="Start Data update">Start
                    Data Update</ejs-button>
                <ejs-button ref="clearbtn" id="clear" v-on:click.native="clearClick" style="margin-left: 10px;" aria-label="Stop Data update">Stop Data
                    Update</ejs-button>
            </div>
            <ejs-treegrid ref='livedata' id="livedata"
                :enableHover="false" :dataSource="getTradeData" :queryCellInfo='queryCellInfo' height="350" :dataBound= 'dataBound'
                childMapping='subtasks' :allowSelection="false" :destroyed='destroyClear' :treeColumnIndex='1'>
                <e-columns>
                    <e-column field="id" headerText="ID" width="140" :isPrimaryKey='true' :visible='false'></e-column>
                    <e-column field='indexfunds' headerText='Index Funds' width='200'></e-column>
                    <e-column field='Ltp' headerText='Last Traded Price' width='150' format='C2' type='number'
                        textAlign='Right'></e-column>
                    <e-column field='Change' headerText='Change' width='100' format='C2' type='number'
                        textAlign='Right'></e-column>
                    <e-column field='PercentageChange' headerText='% Change' width='110' format='N0'
                        textAlign='Right'></e-column>
                    <e-column field='Open' headerText='Open Price' width='150'></e-column>
                    <e-column field='High' headerText='High Price' width='150'></e-column>
                    <e-column field='Low' headerText='Low Price' width='150'></e-column>
                    <e-column field='Weekhigh' headerText='52W H' width='130' textAlign='Right'></e-column>
                    <e-column field='Weeklow' headerText='52W L' width='130' textAlign='Right'></e-column>
                </e-columns>
            </ejs-treegrid>
            <br>
            <p>
                <b>
                    Disclaimer :
                </b>The index fund data showcased in this sample is for demonstration purposes only and does not reflect
                actual or
                real-time data.
            </p>
        </div>
        <div id="description">
            <p> The updating of Tree Grid cells can be done without any performance lagging by using the 
                <a target="_blank" href="https://ej2.syncfusion.com/documentation/api/treegrid/#setcellvalue">setCellValue
                </a> method.
                The style of Tree Grid cells can be customized using the <a target="_blank" href="https://ej2.syncfusion.com/documentation/api/treegrid/#querycellinfo">queryCellInfo</a> event.
            </p>
            <p>In this demo,</p>
            <ul>
                <li> Clicking the start update button triggers automatic updates of Tree Grid cells at the interval set in the
                    feed
                    delay
                    text box which is a milliseconds format.</li>
                <li> Clicking the stop update button will halt the automatic updating of Tree Grid cells.</li>
            </ul>
            <p>
            More information on the Tree Grid instantiation can be found in this
            <a target="_blank" 
                href="https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started/">
               documentation section</a>.
        </p>
        </div>
</div>
</template>
<script>
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Selection } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { getTradeData } from "./data-source";
export default {
    components: {
        'ejs-treegrid': TreeGridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-button': ButtonComponent,
        'ejs-numerictextbox': NumericTextBoxComponent 
    },
    data: () => {
        return {
            isDataBound: true,
            timerID: undefined,
            initial: true,
            getTradeData: getTradeData,
            max: 5000,
            min: 100,
            step: 1,
            value: 1000,
            width: '150px'
        };
    },
    methods: {
        queryCellInfo: function (args) {
        if (args.column.field === 'Ltp') {
            if (args.data['Ltp'] < 3000) {
                args.cell.classList.remove('e-increase');
                args.cell.classList.add('e-decrease');
            } else if (args.data['Ltp'] > 3000) {
                args.cell.classList.remove('e-decrease');
                args.cell.classList.add('e-increase');
            }
        } else if (args.column.field === 'PercentageChange') {
            if (args.data['PercentageChange'] < 0) {
                updateCellDetails(args.cell, 'below-0');
            } else {
                updateCellDetails(args.cell, 'above-0');
            }
        } else if (args.column.field === 'Change') {
            if (args.data['Change'] < 0) {
                updateCellDetails(args.cell, 'below-0');
            } else {
                updateCellDetails(args.cell, 'above-0');
            }
        } else if (args.column.field === 'indexfunds' && args.data['hasChildRecords']) {
            args.cell.getElementsByClassName('e-treecell')[0].classList.add('e-parent');
        }
            this.isDataBound = true;
        },
        destroyClear: function () {
            if (this.timerID) {
                clearInterval(this.timerID);
                this.timerID = undefined;
            }
        },
        dataBound: function () {
            let updateButton = this.$refs.updatebtn.ej2Instances;
            let feedDelayInput = this.$refs.feeddelay.ej2Instances;
            if (this.initial) {
                updateButton.element.click();
                this.initial = false;
                feedDelayInput.element.addEventListener('keypress', (e) => {
                    if (e && e.key === 'Enter' && feedDelayInput.element.parentElement.classList.contains('e-input-focus')) {
                        feedDelayInput.value = parseInt(feedDelayInput.element.value);
                        feedDelayInput.focusOut();
                        updateButton.element.click();
                    }
                });
            }
        },
        updateClick: function () {
            let clearButton = this.$refs.clearbtn.ej2Instances;
            let updateButton = this.$refs.updatebtn.ej2Instances;
            let feedDelayInput = this.$refs.feeddelay.ej2Instances;
            if (!this.timerID) {
                updateButton.disabled = true;
                feedDelayInput.enabled = false;
                clearButton.disabled = false;
                this.timerID = setInterval(this .updateCellValues, feedDelayInput.value);
            }
        },
        clearClick: function () {
            let clearButton = this.$refs.clearbtn.ej2Instances;
            let updateButton = this.$refs.updatebtn.ej2Instances;
            let feedDelayInput = this.$refs.feeddelay.ej2Instances;
            if (this.timerID) {
                updateButton.disabled = false;
                feedDelayInput.enabled = true;
                clearButton.disabled = true;
                clearInterval(this.timerID);
                this.timerID = undefined;
            }
        },
        updateCellValues: function () {
            if (this.$refs && this.$refs.livedata) {
                let treegrid = this.$refs.livedata.ej2Instances.grid;
                for (let i = 0; i < treegrid.currentViewData.length; i++) {
                    if (treegrid.currentViewData[i] === undefined) {
                        return;
                    }
                    let num = Math.floor(Math.random() * 40) + 1;
                    num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
                    if (i % 2 === 0) {
                        num = num * 0.25;
                    } else if (i % 3 === 0) {
                        num = num * 0.83;
                    } else if (i % 5 === 0) {
                        num = num * 0.79;
                    } else if (i % 4 === 0) {
                        num = num * 0.42;
                    } else {
                        num = num * 0.51;
                    }
                    this.isDataBound = true;
                    const maxChange = 2 - treegrid.currentViewData[i]['Change'];
                    const minChange = -2 - treegrid.currentViewData[i]['Change'];
                    const newChange = Math.max(Math.min(num, maxChange), minChange);
                    treegrid.setCellValue(
                        treegrid.currentViewData[i]['id'],
                        'Change',
                        parseFloat(newChange.toFixed(2))
                    );
                    this.isDataBound = true;
                    let newPercentageChange;
                    if (treegrid.currentViewData[i]['indexfunds'] === "NIFTY 50") {
                        newPercentageChange = Math.max(Math.min(newChange, 2), -2);
                    } else if (treegrid.currentViewData[i]['indexfunds'] === "NIFTY BANK") {
                        newPercentageChange = Math.max(Math.min(newChange, 4), -4);
                    } else {
                        const maxPercentageChange = 2 - treegrid.currentViewData[i]['PercentageChange'];
                        const minPercentageChange = -2 - treegrid.currentViewData[i]['PercentageChange'];
                        newPercentageChange = Math.max(Math.min(newChange, maxPercentageChange), minPercentageChange);
                    }
                    treegrid.setCellValue(
                        treegrid.currentViewData[i]['id'],
                        'PercentageChange',
                        parseFloat(newPercentageChange.toFixed(2))
                    );
                    this.isDataBoundisDataBound = true;
                    const val = treegrid.currentViewData[i]['Ltp'] + newPercentageChange;
                    treegrid.setCellValue(treegrid.currentViewData[i]['id'], 'Ltp', val);
                }
            }
        }
    },
    provide: {
        treegrid: [Selection]
    }
}
function updateCellDetails(cell, className) {
    var div = document.createElement('div');
    var span1 = document.createElement('span');
    span1.classList.add('rowcell-left');
    div.classList.add(className);
    span1.innerHTML = cell.innerHTML;
    cell.innerHTML = '';
    div.appendChild(span1);
    cell.appendChild(div);
}
</script>
<style>

/* Color varying based on theme so need to adjust that */
    .fluent .e-treegrid .e-rowcell.e-increase,
    .fluent2 .e-treegrid .e-rowcell.e-increase,
    .fluent2-highcontrast .e-treegrid .e-rowcell.e-increase,
    .bootstrap5 .e-treegrid .e-rowcell.e-increase,
    .tailwind .e-treegrid .e-rowcell.e-increase,
    .material .e-treegrid .e-rowcell.e-increase,
    .fabric .e-treegrid .e-rowcell.e-increase,
    .bootstrap4 .e-treegrid .e-rowcell.e-increase,
    .bootstrap .e-treegrid .e-rowcell.e-increase,
    .highcontrast .e-treegrid .e-rowcell.e-increase,
    .fluent .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2 .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-highcontrast .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5 .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .material .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap4 .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .highcontrast .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-treegrid .e-rowcell.e-increase,
    .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #DFFFE2;
        color: #00A653;
    }
    .fluent-dark .e-treegrid .e-rowcell.e-increase,
    .fluent2-dark .e-treegrid .e-rowcell.e-increase,
    .bootstrap5-dark .e-treegrid .e-rowcell.e-increase,
    .tailwind-dark .e-treegrid .e-rowcell.e-increase,
    .material-dark .e-treegrid .e-rowcell.e-increase,
    .fabric-dark .e-treegrid .e-rowcell.e-increase,
    .bootstrap-dark .e-treegrid .e-rowcell.e-increase,
    .fluent-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .material-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #315C35;
        color: #38FF9C;
    }
    .material3-dark .e-treegrid .e-rowcell.e-increase,
    .material3-dark .e-treegrid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #143E17;
        color: #8EDA94;
    }
    .fluent .e-treegrid .e-rowcell.e-decrease,
    .fluent2 .e-treegrid .e-rowcell.e-decrease,
    .fluent2-highcontrast .e-treegrid .e-rowcell.e-decrease,
    .bootstrap5 .e-treegrid .e-rowcell.e-decrease,
    .tailwind .e-treegrid .e-rowcell.e-decrease,
    .material .e-treegrid .e-rowcell.e-decrease,
    .fabric .e-treegrid .e-rowcell.e-decrease,
    .bootstrap4 .e-treegrid .e-rowcell.e-decrease,
    .bootstrap .e-treegrid .e-rowcell.e-decrease,
    .highcontrast .e-treegrid .e-rowcell.e-decrease,
    .fluent .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2 .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-highcontrast .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5 .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .material .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap4 .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .highcontrast .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-treegrid .e-rowcell.e-decrease,
    .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #FFEBE9;
        color: #FF3740;
    }
    .fluent-dark .e-treegrid .e-rowcell.e-decrease,
    .fluent2-dark .e-treegrid .e-rowcell.e-decrease,
    .bootstrap5-dark .e-treegrid .e-rowcell.e-decrease,
    .tailwind-dark .e-treegrid .e-rowcell.e-decrease,
    .material-dark .e-treegrid .e-rowcell.e-decrease,
    .fabric-dark .e-treegrid .e-rowcell.e-decrease,
    .bootstrap-dark .e-treegrid .e-rowcell.e-decrease,
    .fluent-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .fluent2-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap5-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .tailwind-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .material-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .fabric-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
    .bootstrap-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #55241E;
        color: #FF9CA0;
    }
    .material3-dark .e-treegrid .e-rowcell.e-decrease,
    .material3-dark .e-treegrid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd) {
        background-color: #3A1618;
        color: #FF7B81;
    }
    #livedata .e-headercelldiv {
        height: 43px;
        line-height: 39px;
    }
    .fluent .above-0,
    .fluent2 .above-0,
    .fluent2-highcontrast .above-0,
    .bootstrap5 .above-0,
    .tailwind .above-0,
    .material .above-0,
    .fabric .above-0,
    .bootstrap4 .above-0,
    .bootstrap .above-0,
    .highcontrast .above-0,
    .fluent .e-rowcell .e-icons.above-0,
    .fluent2 .e-rowcell .e-icons.above-0,
    .fluent2-highcontrast .e-rowcell .e-icons.above-0,
    .bootstrap5 .e-rowcell .e-icons.above-0,
    .tailwind .e-rowcell .e-icons.above-0,
    .material .e-rowcell .e-icons.above-0,
    .fabric .e-rowcell .e-icons.above-0,
    .bootstrap4 .e-rowcell .e-icons.above-0,
    .bootstrap .e-rowcell .e-icons.above-0,
    .highcontrast .e-rowcell .e-icons.above-0,
    .above-0,
    .e-rowcell .e-icons.above-0 {
        color: #00A653;
    }
    .fluent-dark .above-0,
    .fluent2-dark .above-0,
    .bootstrap5-dark .above-0,
    .tailwind-dark .above-0,
    .material-dark .above-0,
    .fabric-dark .above-0,
    .bootstrap-dark .above-0,
    .fluent-dark .e-rowcell .e-icons.above-0,
    .fluent2-dark .e-rowcell .e-icons.above-0,
    .bootstrap5-dark .e-rowcell .e-icons.above-0,
    .tailwind-dark .e-rowcell .e-icons.above-0,
    .material-dark .e-rowcell .e-icons.above-0,
    .fabric-dark .e-rowcell .e-icons.above-0,
    .bootstrap-dark .e-rowcell .e-icons.above-0 {
        color: #38FF9C;
    }
    .fluent .below-0,
    .fluent2 .below-0,
    .fluent2-highcontrast .below-0,
    .bootstrap5 .below-0,
    .tailwind .below-0,
    .material .below-0,
    .fabric .below-0,
    .bootstrap4 .below-0,
    .bootstrap .below-0,
    .highcontrast .below-0,
    .fluent .e-rowcell .e-icons.below-0,
    .fluent2 .e-rowcell .e-icons.below-0,
    .fluent2-highcontrast .e-rowcell .e-icons.below-0,
    .bootstrap5 .e-rowcell .e-icons.below-0,
    .tailwind .e-rowcell .e-icons.below-0,
    .material .e-rowcell .e-icons.below-0,
    .fabric .e-rowcell .e-icons.below-0,
    .bootstrap4 .e-rowcell .e-icons.below-0,
    .bootstrap .e-rowcell .e-icons.below-0,
    .highcontrast .e-rowcell .e-icons.below-0,
    .below-0,
    .e-rowcell .e-icons.below-0 {
        color: #FF3740;
    }
    .fluent-dark .below-0,
    .fluent2-dark .below-0,
    .bootstrap5-dark .below-0,
    .tailwind-dark .below-0,
    .material-dark .below-0,
    .fabric-dark .below-0,
    .bootstrap-dark .below-0,
    .fluent-dark .e-rowcell .e-icons.below-0,
    .fluent2-dark .e-rowcell .e-icons.below-0,
    .bootstrap5-dark .e-rowcell .e-icons.below-0,
    .tailwind-dark .e-rowcell .e-icons.below-0,
    .material-dark .e-rowcell .e-icons.below-0,
    .fabric-dark .e-rowcell .e-icons.below-0,
    .bootstrap-dark .e-rowcell .e-icons.below-0 {
        color: #FF9CA0;
    }
    .fluent .e-treegrid .e-treecell.e-parent,
    .fluent2 .e-treegrid .e-treecell.e-parent,
    .fluent2-highcontrast .e-treegrid .e-treecell.e-parent,
    .fabric .e-treegrid .e-treecell.e-parent,
    .bootstrap4 .e-treegrid .e-treecell.e-parent,
    .bootstrap .e-treegrid .e-treecell.e-parent,
    .tailwind .e-treegrid .e-treecell.e-parent,
    .material .e-treegrid .e-treecell.e-parent,
    .bootstrap5 .e-treegrid .e-treecell.e-parent {
        color: #0278d7;
    }
    .fluent-dark .e-treegrid .e-treecell.e-parent,
    .fluent2-dark .e-treegrid .e-treecell.e-parent,
    .bootstrap5-dark .e-treegrid .e-treecell.e-parent {
        color: #0d6efd;
    }
    .tailwind-dark .e-treegrid .e-treecell.e-parent {
        color: rgb(34, 211, 238);
    }
    .material-dark .e-treegrid .e-treecell.e-parent {
        color: #56a4fd;
    }
    .material3 .e-treegrid .e-treecell.e-parent {
        color: #6750a4;
    }
    .material3-dark .e-treegrid .e-treecell.e-parent {
        color: rgb(208, 188, 255);
    }
    .fabric-dark .e-treegrid .e-treecell.e-parent {
        color: #0074cc;
    }
    .bootstrap-dark .e-treegrid .e-treecell.e-parent {
        color: #0070f0;
    }
    .highcontrast .e-treegrid .e-treecell.e-parent {
        color: #ffd939;
    }
    .side-space {
        padding: 0 5px;
    }
    .fluent2-highcontrast #treegrid-buttons #update {
        color: #3ff23f !important;
    }
</style>
