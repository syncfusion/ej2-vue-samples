<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
             <p>This sample demonstrates the aggregate functionality of the Grid. In this sample, the “Energy Produced” column will displays its <code>sum</code> aggregate value in the group footer and the <code>min</code> and <code>max</code> aggregate values in group caption.</p>
             
        </div>
        <div>
            <ejs-grid ref="grid" id="group-aggregate-grid"
            :dataSource="data" :allowSorting='true' :allowMultiSorting='true' :allowFiltering='true' 
            :enableHover='false'
            :height=300
            :filterSettings='filterSettings' :groupSettings='groupSettings' :allowGrouping='true' :gridLines='gridLines' >
                <e-columns>
                    <e-column field='ID' :isPrimaryKey='true' :visible='false'></e-column>
                    <e-column field='Month' headerText='Month' width='120' textAlign='Right' clipMode='EllipsisWithTooltip' format='yMd'></e-column>
                    <e-column field='ConsumptionCategory' headerText='Category' width='130' clipMode='EllipsisWithTooltip' textAlign='left'  ></e-column>
                    <e-column :headerTemplate="'energyTemplate'"  textAlign='Center' :columns='energyColumns'></e-column>
                    <e-column field='WeatherCondition' textAlign='Left' clipMode='EllipsisWithTooltip' headerText='Weather' width='120'></e-column>
                    <e-column field='EnergyPrice' textAlign='Right' clipMode='EllipsisWithTooltip' headerText='Price ($)' width='130' format='C2'></e-column>
                </e-columns>
                <e-aggregates>
                    <e-aggregate>
                        <e-columns>
                            <e-column type="Sum" field="EnergyProduced" format="N2" :footerTemplate="sumTemplate" >
                            </e-column>
                        </e-columns>
                    </e-aggregate>
                    <e-aggregate>
                        <e-columns>
                            <e-column type="Average" field="EnergyProduced" format="N2" :footerTemplate="avgTemplate">
                            </e-column>
                        </e-columns>
                    </e-aggregate>
                    <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="EnergyProduced" format="N2" :groupFooterTemplate="sumGFTemplate" >
                        </e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column :type="['Min','Max']" field="EnergyProduced" format="N2" :groupCaptionTemplate="minMaxTemplate">
                        </e-column>
                    </e-columns>
                </e-aggregate>
                </e-aggregates>
                <template v-slot:energyTemplate="{data}">
                <div><span className="energy e-icons e-icon"></span>
                    <span> Energy (KWh)</span></div>
              </template>
            </ejs-grid>
        </div>
    
         <div id="description">
              <p>The Grid supports displaying aggregates in its footer, group footer and group caption.
    The aggregate configurations can be provided by the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#aggregates">
        aggregates
        </a></code> property.</p>
    <p>Built-in aggregates:</p>
     <ul>
        <li><code>Sum</code></li>     
        <li><code>Average</code></li>     
        <li><code>Min</code></li>     
        <li><code>Max</code></li>     
        <li><code>Count</code></li>     
        <li><code>TrueCount</code></li>     
        <li><code>FalseCount</code></li>     
        <li><code>Custom</code> - Requires the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#customaggregate">
        customAggregate
        </a></code> property to perform the aggregation.
        The custom aggregate value can be accessed inside template using the key <code>${custom}</code>.</li>     
    </ul>    
    <p>
        In this demo, the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupfootertemplate">
        groupFooterTemplate</a></code> property is used to display the group footer aggregation for the <strong><i>Energy Produced</i></strong> column and the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupcaptiontemplate">
        groupCaptionTemplate</a></code> property is used to display its group caption aggregation.
    </p>    
    <p>    To enable group footer aggregation for the <strong><i>Energy Produced</i></strong> column, use the <code>Sum</code> aggregate type by setting the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type">
        type</a></code> and set the <code><a target="_blank" class="code"
 href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#field">
        field</a></code> property to <strong><i>EnergyProduced</i></strong> which will be used to perform the aggregation.
        The aggregate value is accessed inside the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupfootertemplate">
        groupFooterTemplate</a></code> using its <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type">
        type</a></code> name (<code>${Sum}</code>).
    </p>
    <p>    To enable group caption aggregation for the <strong><i>Energy Produced</i></strong> column, the <code>max</code> and <code>min</code>aggregate types are used by setting the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type">
        type</a></code> and the <code><a target="_blank" class="code"
 href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#field">
        field</a></code> property is set to <strong><i>EnergyProduced</i></strong>, which will be used to perform the aggregation.
        The aggregate value is accessed inside the<code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupcaptiontemplate">
        groupCaptionTemplate</a></code> using its <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type">
        type</a></code> name (<code>${Max}</code> and <code>${Min}</code>).
    </p>
    <p>In this sample, we use the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupcaptiontemplate">
        groupCaptionTemplate</a></code> to show multiple aggregate values.</p>
            <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use aggregate feature, we need to inject
            <code>Aggregate</code> into the <code>provide</code> section.  Since grouping feature is required
                to show group aggreations, we also need to inject <code>Group</code> module.
        </p>
        </div>
    </div>
    </template>
    <style>
    
    .e-maximum{
        color:#008000;
        font-weight: bold;
    }
    .e-minimum{
        color:#dc3545;
        font-weight: bold;
    }
    
    .bootstrap5 .e-grid .e-icon.energy.e-icons::before,
    .bootstrap5-dark .e-grid .e-icon.energy.e-icons::before {
        content: '\e8cd';
    }
    
    .highcontrast .e-grid .e-icon.energy.e-icons::before {
        content: '\e991';
    }
    
    .tailwind .e-grid .e-icon.energy.e-icons::before,
    .tailwind-dark .e-grid .e-icon.energy.e-icons::before,
    .fluent .e-grid .e-icon.energy.e-icons::before,
    .fluent-dark .e-grid .e-icon.energy.e-icons::before,
    .fluent2 .e-grid .e-icon.energy.e-icons::before,
    .fluent2-dark .e-grid .e-icon.energy.e-icons::before,
    .fluent2-highcontrast .e-grid .e-icon.energy.e-icons::before,
    .material3 .e-grid .e-icon.energy.e-icons::before,
    .material3-dark .e-grid .e-icon.energy.e-icons::before {
        content: '\e8cd';
    }
    
    #group-aggregate-grid.e-grid tr.e-altrow .e-rowcell:not(.e-selectionbackground.e-active) {
        background-color: rgb(228 228 228 / 15%);
    }
    .e-grid-group-caption-temp {
        display: flex;
        gap: 5px;
    }
    
    </style>
    <script lang="ts">
    import  { createApp } from "vue";
    import { GridComponent, ColumnsDirective, ColumnDirective, AggregateDirective, AggregatesDirective, Aggregate, Group, Page, Sort, Filter, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";;
    import { energyData } from "./data-source";
    
    export default {
      components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'e-aggregates': AggregatesDirective,
        'e-aggregate': AggregateDirective,
      },
      data: () => {
        return {
          data: energyData,
          gridLines: 'Vertical',
          groupSettings: {showDropArea:false, columns:["ConsumptionCategory"], showGroupedColumn:true},
          filterSettings: { type: 'Excel' },
          energyColumns:[
          { field: 'EnergyConsumed', headerText: 'Consumed', width: 150, textAlign: 'Right'},
                { field: 'EnergyProduced', headerText: 'Produced', width: 300, textAlign: 'Right'},
          ],
          energyProducedRules: { required: true, min: 0 },
          energyConsumedRules: {required:true},
          toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
          sumTemplate: function() {
            return {
                template: createApp({}).component('sumTemplate', {
                template: `<div>Total Energy Produced: {{data.Sum}} KWh</div>`,
                data: function () {return {data: {data: {}}};}
                })
            }
          },
          avgTemplate: function() {
            return {
                template : createApp({}).component('avgTemplate', {
                template: `<div>Average Energy Produced: {{data.Average}} KWh</div>`, 
                data: function () {return { data: {data: {}}};}
                })
            }
          },
          sumGFTemplate: function() {
            return {
                template : createApp({}).component('sumGFTemplate', {
                template: `<div>Total Energy Produced: {{data.Sum}} KWh</div>`, 
                data: function () {return { data: {data: {}}};}
                })
            }
          },
          minMaxTemplate: function() {
            return {
                template : createApp({}).component('minMaxTemplate', {
                template: `<div className="e-grid-group-caption-temp"><span className="e-minimum">Min: {{data.Min}}</span><span>||</span> <span className="e-maximum"> Max : {{data.Max}}</span></div>`, 
                data: function () {return { data: {data: {}}};}
                })
            }
          },
        };
      },
      provide: {
          grid: [Aggregate, Page, Sort, Toolbar, Edit, Filter, Group]
      }
    };
    </script>
