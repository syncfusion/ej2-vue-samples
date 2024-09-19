<template>
    <div id="page-title" style="margin: 10px; text-align: center;">
        <h3>Sentiment Analysis - Based on Customer Feedback</h3>
    </div>
    <div id="ai-button" style="margin: 10px">
        <ejs-progressbutton ref="sentiment" id="sentiment" content='Check Customer Sentiments' :enableProgress='false'
            :begin="begin"></ejs-progressbutton>
    </div>
    <div class="control-section">
        <div class="control_wrapper">
            <ejs-kanban ref="kanban" :dataSource='dataSource' keyField='Category' :columns="columns"
                :cardSettings="cardSettings" :dialogSettings="dialogSettings" :dialogClose="onDialogClose"
                :dialogOpen="onDialogOpen">
                <template #cardTemplate="{ data }">
                    <div class='card-template'>
                        <div class='card-template-wrap'>
                            <table class='card-template-wrap'>
                                <colgroup>
                                    <col style="width:55px">
                                    <col>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class='e-image'>
                                            <img :src="data.ImageURL" alt="">
                                        </td>
                                        <td class='e-title'>
                                            <div class="e-card-stacked">
                                                <div class='e-card-header'>
                                                    <div class='e-card-header-caption'>
                                                        <div class='e-card-header-title e-tooltip-text'>{{ data.Title }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="e-card-content" style="line-height:2.75em">
                                                    <table class='card-template-wrap'>
                                                        <tbody>
                                                            <tr class='e-tooltip-text'>
                                                                <template
                                                                    v-if='data.Category === "Menu" || data.Category === "Order" || data.Category === "Ready to Serve"'>
                                                                    <td colspan="2">
                                                                        <div class='e-description'>
                                                                            {{ (data.Category === 'Menu') ?
                                                                                data.Description : data.OrderID }}
                                                                        </div>
                                                                    </td>
                                                                </template>
                                                                <template v-else>
                                                                    <td>
                                                                        <div class='e-description'>{{ data.OrderID }}
                                                                        </div>
                                                                    </td>
                                                                    <td><span class='e-icons e-done'></span></td>
                                                                </template>
                                                            </tr>
                                                            <tr>
                                                                <template v-if="data.Category !== 'Menu'">
                                                                    <template v-if="data.Category !== 'Order'">
                                                                        <td>
                                                                            <div class='e-preparingText e-tooltip-text'>
                                                                                Preparing
                                                                            </div>
                                                                        </td>
                                                                        <td class='e-prepare'>
                                                                            <div class='e-time e-tooltip-text'>
                                                                                <div class='e-icons e-clock'></div>
                                                                                <div class='e-mins'>15 mins</div>
                                                                            </div>
                                                                        </td>
                                                                    </template>
                                                                    <template v-if="data.Category !== 'Ready to Serve'">
                                                                        <td>
                                                                            <div class='e-readyText e-tooltip-text'>
                                                                                Ready to Serve
                                                                            </div>
                                                                        </td>
                                                                        <td class='e-prepare'>
                                                                            <div class='e-time e-tooltip-text'>
                                                                                <div class='e-icons e-clock'></div>
                                                                                <div class='e-mins'>5 mins</div>
                                                                            </div>
                                                                        </td>
                                                                    </template>
                                                                </template>
                                                            </tr>
                                                            <template
                                                                v-if="data.Category === 'Delivered' || data.Category === 'Served'">
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <label class="e-date">Deliver:</label>
                                                                        <span class="e-kanban-date">{{ data.Date }}</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class='e-deliveredText e-tooltip-text'>
                                                                            Delivered</div>
                                                                    </td>
                                                                    <template v-if="data.Emoji">
                                                                        <td class="e-prepare">
                                                                            <div class="e-emoji e-tooltip-text">
                                                                                <div class="e-emoji">{{ data.Emoji }}
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </template>
                                                                </tr>
                                                            </template>
                                                            <template v-else>
                                                                <tr>
                                                                    <td>
                                                                        <div class='e-size e-tooltip-text'>{{ data.Size }}
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div class='e-price e-tooltip-text'>
                                                                            {{ data.Price }}
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </template>
                <template #dialogTemplate="{ data }">
                    <table>
                        <tbody>
                            <tr>
                                <td class="e-label">ID</td>
                                <td>
                                    <input id="Id" name="Id" type="text" class="e-field" :value="data.Id" disabled
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Category</td>
                                <td>
                                    <input type="text" name="Category" id="Category" class="e-field"
                                        :value='data.Category' required />
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Title</td>
                                <td>
                                    <input type="text" name="Title" id="Title" class="e-field" :value='data.Title' />
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Size</td>
                                <td>
                                    <input type="text" name="Size" id="Size" class="e-field" :value='data.Size' />
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Description</td>
                                <td>
                                    <textarea type="text" name="Description" id="Description" class="e-field"
                                        :value='data.Description'>{{ data.Description }}</textarea>
                                    <span class="e-float-line"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Deliver</td>
                                <td>
                                    <input type="text" id="datepicker" :value='data.Date' />
                                </td>
                            </tr>
                            <template v-if="data.Category === 'Delivered'">
                                <tr>
                                    <td class="e-label">Feedback</td>
                                    <td>
                                        <input type="text" id="feedback" :value='data.Feedback' />
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </template>
            </ejs-kanban>
        </div>
    </div>
    <ejs-toast ref="toast" id="toast" :position="{ X: 'Right', Y: 'Top' }" :showCloseButton='true'
        target='#Kanban'></ejs-toast>
</template>

<script>
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { NumericTextBox, TextBox } from '@syncfusion/ej2-vue-inputs';
import { DialogEventArgs, KanbanComponent } from '@syncfusion/ej2-vue-kanban';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { ProgressButtonComponent } from '@syncfusion/ej2-vue-splitbuttons';
import { ToastComponent } from '@syncfusion/ej2-vue-notifications';
import { pizzaData } from './data-source';
import { OpenAiModel } from '../common/openai-model';

export default {
    components: {
        'ejs-progressbutton': ProgressButtonComponent,
        'ejs-toast': ToastComponent,
        'ejs-kanban': KanbanComponent
    },
    data() {
        return {
            isAiChecked: false,
            dataSource: pizzaData,
            columns: [
                { headerText: 'Menu', keyField: 'Menu' },
                { headerText: 'Order', keyField: 'Order' },
                { headerText: 'Ready to Serve', keyField: 'Ready to Serve' },
                { headerText: 'Delivered', keyField: 'Delivered,Served' }
            ],
            cardSettings: {
                headerField: 'Id',
                template: 'cardTemplate'
            },
            dialogSettings: {
                template: 'dialogTemplate'
            },
            categoryData: ['Menu', 'Order', 'Ready to Serve', 'Delivered', 'Served']
        }
    },
    methods: {
        getScore: function (): void {
            const kanbanObj = this.$refs.kanban.ej2Instances;
            const toast = this.$refs.toast.ej2Instances;
            try {
                let pizzaJson = JSON.stringify(this.dataSource);
                let description = "Provide a SentimentScore out of 5 (whole numbers only) based on the Feedback. If the feedback is null, do not give a SentimentScore. Use the dataset provided below to make recommendations. NOTE: Return the data in JSON format with all fields included, and return only JSON data, no explanatory text. Don't change the dataset formart. Just update the sentiment scrore given dataset field (fieldName: SentimentScore)" + pizzaJson;
                this.getResponseFromOpenAI(description).then((response) => {
                    try {
                        const jsonArrayPattern = /\[\s*{[\s\S]*?}\s*\]/;
                        let result = response.match(jsonArrayPattern);
                        if (result && result[0]) {
                            let data = result[0].replace("```json", "").replace("```", "").replace("\r", "").replace("\n", "").replace("\t", "").trim();
                            this.dataSource = JSON.parse(data);
                            this.dataSource.forEach(item => {
                                if (item.SentimentScore !== undefined) {
                                    if (item.SentimentScore > 0 && item.SentimentScore <= 2) {
                                        item.Emoji = "😢";
                                    } else if (item.SentimentScore > 3 && item.SentimentScore <= 5) {
                                        item.Emoji = "😀";
                                    } else if (item.SentimentScore === 3) {
                                        item.Emoji = "😐";
                                    }
                                }
                            });
                            kanbanObj.dataSource = this.dataSource;
                            kanbanObj.dataBind();
                            this.isAiChecked = true;
                        } else {
                            this.isAiChecked = true;
                            toast.content = "An error occurred during the AI process, Please try again."
                            toast.show();
                        }
                    } catch {
                        this.isAiChecked = true;
                        toast.content = "An error occurred during the AI process, Please try again."
                        toast.show();
                    }
                });
            } catch {
                this.isAiChecked = true;
                toast.content = "An error occurred during the AI process, Please try again."
                toast.show();
            }
        },
        getResponseFromOpenAI: async function (promptQuery: string): Promise<string> {
            const content = await OpenAiModel('', promptQuery);
            return content ? content as string : '';
        },
        onDialogOpen: function (args: DialogEventArgs): void {
            if (args.requestType !== 'Delete') {
                let curData: { [key: string]: Object } = args.data as { [key: string]: Object };
                let filledTextBox: TextBox = new TextBox({});
                filledTextBox.appendTo(args.element?.querySelector('#Id') as HTMLInputElement);
                let numericObj: NumericTextBox = new NumericTextBox({
                    value: curData.Estimate as number, placeholder: 'Estimate'
                });
                numericObj.appendTo(args.element?.querySelector('#Estimate') as HTMLInputElement);

                let categoryDropObj: DropDownList = new DropDownList({
                    value: curData.Category as string, popupHeight: '300px',
                    dataSource: this.categoryData, fields: { text: 'Category', value: 'Category' }, placeholder: 'Category'
                });
                categoryDropObj.appendTo(args.element?.querySelector('#Category') as HTMLInputElement);

                let titleObj: TextBox = new TextBox({
                    placeholder: 'Title',

                });
                titleObj.appendTo(args.element?.querySelector('#Title') as HTMLInputElement);

                let sizeObj: TextBox = new TextBox({
                    placeholder: 'Size',
                });
                sizeObj.appendTo(args.element?.querySelector('#Size') as HTMLInputElement);

                let textareaObj: TextBox = new TextBox({
                    placeholder: 'Description',
                    multiline: true
                });
                textareaObj.appendTo(args.element?.querySelector('#Description') as HTMLInputElement);

                let datepicker: DatePicker = new DatePicker({
                    value: curData.Date as Date,
                    format: 'MM/dd/yyyy',
                });
                datepicker.appendTo(args.element?.querySelector('#datepicker') as HTMLInputElement);

                let feedback: TextBox = new TextBox({
                    placeholder: 'Feedback',
                    multiline: true
                });
                feedback.appendTo(args.element?.querySelector('#feedback') as HTMLInputElement);
            }
        },
        onDialogClose: function (args: DialogEventArgs) {
            if (args.element?.querySelector('#datepicker') as any) {
                args.data.Date = (args.element?.querySelector('#datepicker') as any).ej2_instances[0].value.toLocaleString('es-PR').split(",")[0];
            }
        },
        begin: function () {
            const sentiment = this.$refs.sentiment.ej2Instances;
            sentiment.content = "Progressing...";
            sentiment.dataBind();
            const checkTasksGenerated = () => {
                if (this.isAiChecked) {
                    sentiment.content = "Check Customer Sentiments";
                    sentiment.dataBind();
                    this.isAiChecked = false;
                } else {
                    setTimeout(checkTasksGenerated, 100);
                }
            };
            checkTasksGenerated();
        },
        progressBtnClick: function () {
            this.isAiChecked = false;
            this.getScore();
        }
    }
}

</script>
<style>
.e-kanban .e-prepare,
.e-kanban .e-price {
    text-align: right;
}

.e-kanban .e-card table {
    table-layout: fixed;
}

.e-kanban .e-time {
    display: inline-flex;
}

.e-kanban .e-kanban-date {
    padding-left: 4px;
}

.e-kanban .e-size {
    color: #b8860b
}

.e-kanban .e-date {
    display: contents;
}

.e-kanban .e-mins {
    padding-left: 3px;
}

.e-kanban .e-clock {
    padding-top: 2px;
}

.e-kanban .e-clock::before {
    content: '\e20c';
    color: #ffa500;
    font-size: 10px;
}

.e-kanban .e-done::before {
    content: '\ea84';
    color: #008000;
    font-size: 16px;
}

.e-kanban .e-label {
    width: 90px;
}

.fabric .e-kanban .e-clock::before {
    content: '\e97f';
}

.bootstrap .e-kanban .e-clock::before {
    content: '\e93e';
}

.bootstrap4 .e-kanban .e-clock::before {
    content: '\e7c7';
}

.bootstrap4 .e-kanban .e-done::before {
    content: '\e7d9';
}

.highcontrast .e-kanban .e-clock::before {
    content: '\e97f';
}

.e-kanban .card-template-wrap {
    line-height: normal;
    font-size: 12px;
    width: 100%;
}

.e-kanban .e-card .e-emoji {
    color: white;
    font-size: 1.2em;
}

.e-kanban .card-template-wrap td {
    background: none !important;
    border: none !important;
    height: auto !important;
    line-height: 1.6;
}

.e-kanban .e-image img {
    background: #ececec;
    border-radius: 50%;
    width: 45px;
    height: 45px;
}

.e-kanban .e-image {
    padding-right: 5px;
    padding-left: 10px;
}

.e-kanban .card-header {
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
}

.e-kanban .e-card .card-content {
    display: flex;
    justify-content: space-between;
}

.e-kanban .e-description {
    padding-top: 5px;
    padding-bottom: 10px;
}

.e-kanban .e-card .e-done {
    padding-top: 5px;
    padding-bottom: 10px;
    position: absolute;
    right: 15px;
}

.e-kanban .e-readyText {
    color: #008000;
}

.e-kanban .e-preparingText {
    color: #9ACD32;
    animation: blinker 1.5s linear infinite;
}

.e-kanban .e-deliveredText {
    padding-top: 5px;
    color: #ff0000;
}

.e-kanban-dialog .e-kanban-form-wrapper table .e-label {
    padding-right: 15px;
}

.e-kanban-dialog .e-kanban-form-wrapper table .e-label,
.e-kanban-dialog .e-kanban-form-container table .e-label {
    width: 80px;

}

@keyframes blinker {
    50% {
        opacity: 0.5;
    }
}
</style>