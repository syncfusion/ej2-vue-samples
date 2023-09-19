<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>
                This sample demonstrates how frequently Grid cells are updated in real-time data at a set interval.
            </p>
        </div>
        <div>
            <div style="padding-bottom: 10px;">
                <h4 style="display: inline-block; font-size: 14px">Feed Delay(ms):</h4>
                <ejs-numerictextbox ref="feeddelay" :value="value" format="N0" :min="min" :max="max" :step="step"
                    :width="width" style="margin-left: 7px;"></ejs-numerictextbox>
                <ejs-button ref="updatebtn" id="update" v-on:click="updateClick" style="margin-left: 10px;">Start Data Update</ejs-button>
                 <ejs-button ref="clearbtn" id="clear" v-on:click="clearClick" style="margin-left: 10px;">Stop Data Update</ejs-button>
            </div>
            <ejs-grid ref='livestreamgrid' id='livestreamgrid' :dataSource="getTradeData" :allowSelection='false'
                :enableVirtualization='true' rowHeight=38 :queryCellInfo='queryCellInfo' height=500 :enableHover='false'
                :enableVirtualMaskRow='false' :dataBound='dataBound' :destroyed='destroyClear'>
                <e-columns>
                    <e-column field="id" headerText="ID" width="140" :isPrimaryKey='true' :visible='false'></e-column>
                    <e-column field="CountryCode" headerText="Ticker" width="70"></e-column>
                    <e-column field="Change" headerText="Change % 1D" width="100" format="N0" textAlign="Right"></e-column>
                    <e-column field="Net" headerText="Net" width="100" format="C2" type="number"
                        textAlign="Right"></e-column>
                    <e-column field="Rating" width="150" headerText="Technical Rating 1D"></e-column>
                    <e-column field="NetIncome" headerText="Net Income" width="150" format="C2" type="number"
                        textAlign="Right"></e-column>
                    <e-column field="Sector" width="160" headerText="Sector"></e-column>
                    <e-column field="EmployeeCount" width="130" headerText="Employee Count" textAlign="Right"></e-column>
                </e-columns>
            </ejs-grid>
        </div>

        <div id="description">
            <p> The updating of Grid cells can be done without any performance lagging by using the <code>setCellValue</code> method.
                The style of Grid cells can be customized using the <code>queryCellInfo</code> event.</p>
            <p>In this demo,</p>
            <ul>
                <li> Clicking the start update button triggers automatic updates of Grid cells at the interval set in the feed delay
                    text box which is a milliseconds format.</li>
                <li> Clicking the stop update button will halt the automatic updating of Grid cells.</li>
            </ul>
            <p>
                More information on the queryCellInfo can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, VirtualScroll, Selection, QueryCellInfoEventArgs } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { getTradeData } from "./data-source";

export default {
    components: {
        'ejs-grid': GridComponent,
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
            min: 10,
            step: 1,
            value: 1000,
            width: '150px'
        };
    },
    methods: {
        queryCellInfo: function (args) {
            if (args.column.field === 'NetIncome') {
                if (args.data['Net'] < 0) {
                    args.cell.classList.remove('e-increase');
                    args.cell.classList.add('e-decrease');
                } else if (args.data['Net'] > 0) {
                    args.cell.classList.remove('e-decrease');
                    args.cell.classList.add('e-increase');
                }
            } else if (args.column.field === 'Change') {
                if (args.data.Change < 0) {
                    updateCellDetails(args.cell, 'below-0');
                } else {
                    updateCellDetails(args.cell, 'above-0');
                }
            } else if (args.column.field === 'Net') {
                if (args.data.Net < 0) {
                    updateCellDetails(args.cell, 'below-0');
                } else {
                    updateCellDetails(args.cell, 'above-0');
                }
            } else if (this.isDataBound) {
                if (args.column.field === 'Rating') {
                    args.cell.innerHTML = '';
                    var span = document.createElement('span');
                    var span2 = document.createElement('span');
                    if (args.data.Change === 0) {
                        span.classList.add('e-icons');
                        span.classList.add('e-intermediate-state-2');
                        span.classList.add('neutral');
                        span.classList.add('ic');
                        span.classList.add('side-space');
                        span2.classList.add('neutral');
                        span2.innerText = 'Neutral';
                        args.cell.appendChild(span);
                        args.cell.appendChild(span2);
                    } else if (args.data.Change < -2 && args.data.Net < 0) {
                        span.classList.add('e-negc');
                        span.classList.add('e-icons');
                        span.classList.add('e-chevron-down-double');
                        span.classList.add('below-0');
                        span.classList.add('ic');
                        span.classList.add('side-space');
                        span2.classList.add('below-0');
                        span2.innerText = 'Strongly Sell';
                        args.cell.appendChild(span);
                        args.cell.appendChild(span2);
                    } else if (args.data.Net < 0) {
                        span.classList.add('e-negc');
                        span.classList.add('e-icons');
                        span.classList.add('e-chevron-down');
                        span.classList.add('below-0');
                        span.classList.add('ic');
                        span.classList.add('side-space');
                        span2.classList.add('below-0');
                        span2.innerText = 'Sell';
                        args.cell.appendChild(span);
                        args.cell.appendChild(span2);
                    } else if (args.data.Change > 5 && args.data.Net > 10) {
                        span.classList.add('e-posc');
                        span.classList.add('e-icons');
                        span.classList.add('e-chevron-up-double');
                        span.classList.add('above-0');
                        span.classList.add('ic');
                        span.classList.add('side-space');
                        span2.classList.add('above-0');
                        span2.innerText = 'Strongly Buy';
                        args.cell.appendChild(span);
                        args.cell.appendChild(span2);
                    } else {
                        span.classList.add('e-posc');
                        span.classList.add('e-icons');
                        span.classList.add('e-chevron-up');
                        span.classList.add('above-0');
                        span.classList.add('ic');
                        span.classList.add('side-space');
                        span2.classList.add('above-0');
                        span2.innerText = 'Buy';
                        args.cell.appendChild(span);
                        args.cell.appendChild(span2);
                    }
                }
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
                this.timerID = setInterval(this.updateCellValues, feedDelayInput.value);
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
            var oldValue;
            var newValue;
            let grid = this.$refs.livestreamgrid.ej2Instances;
            for (var i = 0; i < grid.currentViewData.length; i++) {
                if (grid.currentViewData[i] === undefined) {
                    return;
                }
                var num = Math.floor(Math.random() * 99) + 1;
                num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
                oldValue = grid.currentViewData[i]['Net'];
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
                grid.setCellValue(
                    grid.currentViewData[i]['id'],
                    'Net',
                    parseFloat(num.toFixed(2))
                );
                this.isDataBound = true;
                newValue = parseFloat(
                    (grid.currentViewData[i]['Net'] - oldValue).toString().substring(0, 2)
                );
                grid.setCellValue(
                    grid.currentViewData[i]['id'],
                    'Change',
                    parseFloat(newValue.toFixed(2))
                );
                this.isDataBound = true;
                var ratingValue = grid.currentViewData[i]['Net'] < 0 ? 'Sell' : 'Buy';
                grid.setCellValue(
                    grid.currentViewData[i]['id'],
                    'Rating',
                    ratingValue
                );
                var val = num + newValue;
                grid.setCellValue(
                    grid.currentViewData[i]['id'],
                    'NetIncome',
                    val
                );
            }
        }
    },
    provide: {
        grid: [Selection, VirtualScroll]
    }
};
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
.e-grid .e-rowcell.e-poscell {
    color: green;
}

.e-intermediate-state-2:before {
    content: '\e87f';
}

.e-chevron-up:before {
    content: '\e910';
}

.e-chevron-down:before {
    content: '\e652';
}

.e-chevron-down-double:before {
    content: '\e304';
}

.e-chevron-up-double:before {
    content: '\e306';
}

.ic {
    height: 14px;
    width: 14px;
    margin-left: 3px;
}

.fluent .e-grid .e-rowcell.e-increase,
.bootstrap5 .e-grid .e-rowcell.e-increase,
.tailwind .e-grid .e-rowcell.e-increase,
.material .e-grid .e-rowcell.e-increase,
.fabric .e-grid .e-rowcell.e-increase,
.bootstrap4 .e-grid .e-rowcell.e-increase,
.bootstrap .e-grid .e-rowcell.e-increase,
.highcontrast .e-grid .e-rowcell.e-increase,
.fluent .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5 .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.material .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap4 .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.highcontrast .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.e-grid .e-rowcell.e-increase,
.e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd) {
    background-color: #DFFFE2;
    color: #00A653;
}

.fluent-dark .e-grid .e-rowcell.e-increase,
.bootstrap5-dark .e-grid .e-rowcell.e-increase,
.tailwind-dark .e-grid .e-rowcell.e-increase,
.material-dark .e-grid .e-rowcell.e-increase,
.fabric-dark .e-grid .e-rowcell.e-increase,
.bootstrap-dark .e-grid .e-rowcell.e-increase,
.fluent-dark .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5-dark .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind-dark .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.material-dark .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric-dark .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap-dark .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd) {
    background-color: #315C35;
    color: #38FF9C;
}

.material3-dark .e-grid .e-rowcell.e-increase,
.material3-dark .e-grid .e-rowcell.e-increase:not(.e-editedbatchcell):not(.e-updatedtd) {
    background-color: #143E17;
    color: #8EDA94;
}

.fluent .e-grid .e-rowcell.e-decrease,
.bootstrap5 .e-grid .e-rowcell.e-decrease,
.tailwind .e-grid .e-rowcell.e-decrease,
.material .e-grid .e-rowcell.e-decrease,
.fabric .e-grid .e-rowcell.e-decrease,
.bootstrap4 .e-grid .e-rowcell.e-decrease,
.bootstrap .e-grid .e-rowcell.e-decrease,
.highcontrast .e-grid .e-rowcell.e-decrease,
.fluent .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5 .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.material .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap4 .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.highcontrast .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.e-grid .e-rowcell.e-decrease,
.e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd) {
    background-color: #FFEBE9;
    color: #FF3740;
}

.fluent-dark .e-grid .e-rowcell.e-decrease,
.bootstrap5-dark .e-grid .e-rowcell.e-decrease,
.tailwind-dark .e-grid .e-rowcell.e-decrease,
.material-dark .e-grid .e-rowcell.e-decrease,
.fabric-dark .e-grid .e-rowcell.e-decrease,
.bootstrap-dark .e-grid .e-rowcell.e-decrease,
.fluent-dark .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap5-dark .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.tailwind-dark .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.material-dark .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.fabric-dark .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd),
.bootstrap-dark .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd) {
    background-color: #55241E;
    color: #FF9CA0;
}

.material3-dark .e-grid .e-rowcell.e-decrease,
.material3-dark .e-grid .e-rowcell.e-decrease:not(.e-editedbatchcell):not(.e-updatedtd) {
    background-color: #3A1618;
    color: #FF7B81;
}

#livestreamgrid .e-headercelldiv {
    height: 43px;
    line-height: 39px;
}

#livestreamgrid .e-rowcell .e-icons {
    line-height: 0;
}

.fluent .above-0,
.bootstrap5 .above-0,
.tailwind .above-0,
.material .above-0,
.fabric .above-0,
.bootstrap4 .above-0, 
.bootstrap .above-0,
.highcontrast .above-0,
.fluent .e-rowcell .e-icons.above-0,
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
.bootstrap5-dark .above-0,
.tailwind-dark .above-0,
.material-dark .above-0,
.fabric-dark .above-0,
.bootstrap-dark .above-0,
.fluent-dark .e-rowcell .e-icons.above-0,
.bootstrap5-dark .e-rowcell .e-icons.above-0,
.tailwind-dark .e-rowcell .e-icons.above-0,
.material-dark .e-rowcell .e-icons.above-0,
.fabric-dark .e-rowcell .e-icons.above-0,
.bootstrap-dark .e-rowcell .e-icons.above-0 {
    color: #38FF9C;
}

.fluent .below-0,
.bootstrap5 .below-0,
.tailwind .below-0,
.material .below-0,
.fabric .below-0,
.bootstrap4 .below-0,
.bootstrap .below-0,
.highcontrast .below-0,
.fluent .e-rowcell .e-icons.below-0,
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
.bootstrap5-dark .below-0,
.tailwind-dark .below-0,
.material-dark .below-0,
.fabric-dark .below-0,
.bootstrap-dark .below-0,
.fluent-dark .e-rowcell .e-icons.below-0,
.bootstrap5-dark .e-rowcell .e-icons.below-0,
.tailwind-dark .e-rowcell .e-icons.below-0,
.material-dark .e-rowcell .e-icons.below-0,
.fabric-dark .e-rowcell .e-icons.below-0,
.bootstrap-dark .e-rowcell .e-icons.below-0 {
    color: #FF9CA0;
}

.fluent .neutral,
.bootstrap5 .neutral,
.tailwind .neutral,
.material .neutral,
.fabric .neutral,
.bootstrap4 .neutral,
.bootstrap .neutral,
.highcontrast .neutral,
.fluent .e-rowcell .e-icons.neutral,
.bootstrap5 .e-rowcell .e-icons.neutral,
.tailwind .e-rowcell .e-icons.neutral,
.material .e-rowcell .e-icons.neutral,
.fabric .e-rowcell .e-icons.neutral,
.bootstrap4 .e-rowcell .e-icons.neutral,
.bootstrap .e-rowcell .e-icons.neutral,
.highcontrast .e-rowcell .e-icons.neutral,
.neutral,
.e-rowcell .e-icons.neutral {
    color: #888888;
}

.fluent-dark .neutral,
.bootstrap5-dark .neutral,
.tailwind-dark .neutral,
.material-dark .neutral,
.fabric-dark .neutral,
.bootstrap-dark .neutral,
.fluent-dark .e-rowcell .e-icons.neutral,
.bootstrap5-dark .e-rowcell .e-icons.neutral,
.tailwind-dark .e-rowcell .e-icons.neutral,
.material-dark .e-rowcell .e-icons.neutral,
.fabric-dark .e-rowcell .e-icons.neutral,
.bootstrap-dark .e-rowcell .e-icons.neutral {
    color: #CCCCCC;
}

.side-space {
    padding: 0 5px;
}
</style>
