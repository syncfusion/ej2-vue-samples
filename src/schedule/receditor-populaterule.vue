<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper recurrence-editor-wrap">
                <div style="padding-bottom:15px;">
                    Select Rule
                    <ejs-dropdownlist :dataSource='datas' :change='onChange' index="0" :fields='fields' popupHeight="200px"></ejs-dropdownlist>
                </div>
                <div class='RecurrenceEditor'>
                    <ejs-recurrenceeditor id='editor' ref="EditorObj" :selectedType="selectedType"></ejs-recurrenceeditor>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo showcases how to fill the recurrence editor fields with appropriate values based on the user-provided recurrence
                rule string.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the
                <code>setRecurrenceRule</code> method is used to populate the fields of recurrence editor based on the static
                rule options selected from the dropdown list.
            </p>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    .recurrence-editor-wrap {
        margin: 0 25%;
    }

    .rule-output-container {
        height: auto;
        border: 1px solid #969696;
    }

    #rule-output {
        padding: 8px 4px;
        text-align: center;
        min-height: 20px;
        overflow: hidden;
        overflow-wrap: break-word;
    }

    @media (max-width: 580px) {
        .recurrence-editor-wrap {
            margin: 0 5%;
        }
    }
</style>
<!-- custom code end -->
<script>
    import Vue from "vue";
    import { RecurrenceEditorPlugin, RecurrenceEditorChangeEventArgs } from "@syncfusion/ej2-vue-schedule";
    Vue.use(RecurrenceEditorPlugin);
    export default Vue.extend({
        data: function () {
            return {
                datas: [
                    { rule: 'FREQ=DAILY;INTERVAL=1' },
                    { rule: 'FREQ=DAILY;INTERVAL=2;UNTIL=20410606T000000Z' },
                    { rule: 'FREQ=DAILY;INTERVAL=2;COUNT=8' },
                    { rule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1;UNTIL=20410729T000000Z' },
                    { rule: 'FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2;INTERVAL=1;UNTIL=20410729T000000Z' },
                    { rule: 'FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2;INTERVAL=1' },
                    { rule: 'FREQ=YEARLY;BYDAY=MO;BYSETPOS=-1;INTERVAL=1;COUNT=5' }],
                fields: { text: 'rule', value: 'rule' },
                selectedType: 1
            }
        },
        mounted: function () {
            let recObject = this.$refs.EditorObj;
            recObject.selectedType = 1;
        },
        methods: {
            onChange: function (args) {
                let recObject = this.$refs.EditorObj;
                recObject.setRecurrenceRule(args.value);
            }
        }
    });

</script>