<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the aggregate functionality of the Grid. In this sample, the aggregate values for the columns
       are displayed in the column footer.</p>
        </div>
        <div>
            <ejs-grid id="default-aggregate-grid" :dataSource="data" :enableHover='false' height="300" :gridLines='lines' :allowSorting='true' :allowMultiSorting='true' :allowFiltering='true' :filterSettings='filterSettings' >
                <e-columns>
                    <e-column field='Month' headerText='Time Stamp' width='140' clipMode='EllipsisWithTooltip' textAlign='Left' :isPrimaryKey='true'></e-column>
                    <e-column field='Sales' headerText='Sales' textAlign='Right' width='150' format='C2'></e-column>
                    <e-column field='MarketingSpend' headerText='Marketing Spend' clipMode='EllipsisWithTooltip' textAlign='Right' width='190' format='C2'></e-column>
                    <e-column field='NewCustomers' headerText='New Customers' width='180' clipMode='EllipsisWithTooltip' textAlign='Right'></e-column>
                    <e-column field='ReturningCustomers' headerText='Returning Customers' clipMode='EllipsisWithTooltip' width='220' textAlign='Right'></e-column>
                    <e-column field='WebTraffic' headerText='Web Traffic' textAlign='Right' clipMode='EllipsisWithTooltip' width='160'></e-column>
                </e-columns>
                <e-aggregates>
                    <e-aggregate>
                        <e-columns>
                            <e-column type="Sum" field="Sales" format="C2" :footerTemplate="sumTemplate" >
                            </e-column>
                            <e-column type="Sum" field="MarketingSpend" format="C2" :footerTemplate="sumTemplate" >
                          </e-column>
                          <e-column type="Sum" field="NewCustomers" format="N" :footerTemplate="newCustomersTemplate" >
                        </e-column>
                        <e-column type="Sum" field="ReturningCustomers" format="N" :footerTemplate="returningCustomersTemplate" >
                      </e-column>
                        </e-columns>
                    </e-aggregate>
                    <e-aggregate>
                        <e-columns>
                            <e-column type="Average" field="Sales" format="C2" :footerTemplate="avgTemplate">
                            </e-column>
                            <e-column type="Average" field="MarketingSpend" format="C2" :footerTemplate="avgTemplate">
                          </e-column>
                          <e-column type="Max" field="WebTraffic" format="N" :footerTemplate="maxTemplate">
                        </e-column>
                        </e-columns>
                    </e-aggregate>
                    <e-aggregate>
                    <e-columns>
                    <e-column type="Min" field="WebTraffic" format="N" :footerTemplate="minTemplate" >
                  </e-column>
                    </e-columns>
                </e-aggregate>
                </e-aggregates>
            </ejs-grid>
        </div>
    
         <div id="description">
            <p>The Grid supports displaying aggregates in its footer, group footer and group caption.
       The aggregate configurations can be provided by the <code><a aria-label="API link for documentation" target="_blank" class="code"
               href="http://ej2.syncfusion.com/vue/documentation/api/grid/#aggregates">
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
       <li><code>Custom</code> - Requires the <code><a aria-label="API link for documentation" target="_blank" class="code"
                   href="http://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#customaggregate">
                   customAggregate
               </a></code> property to perform aggregation.
           The custom aggregate value can be accessed inside template using the key <code>${custom}</code>.</li>
   </ul>
   <p>
       In this demo, the <code><a aria-label="API link for documentation" target="_blank" class="code"
               href="http://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#footertemplate">
               footerTemplate</a></code> property is used to display four different aggregates (<code>${Sum}</code>, <code>${Average}</code>, <code>${Max}</code> and <code>${Min}</code>) in the Grid footer.
               Each aggregate type is specified using the <code><a aria-label="API link for documentation" target="_blank"
               class="code" href="http://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#type">
               type</a></code> and <code><a aria-label="API link for documentation" target="_blank" class="code"
               href="http://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#field">
               field</a></code> properties accessed in the footerTemplate with its type name.
       The aggregate value will be formatted based on its <code><a aria-label="API link for documentation" target="_blank" class="code"
               href="http://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#format">
               format</a></code> value (<strong><i>N2</i></strong> or <strong><i>C2</i></strong>) before being displayed.
   </p>
            <p>
            More information on the stacked header configuration can be found in this 
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/aggregates/footer-aggregate">documentation section</a>.
        </p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Grid component features are segregated into individual feature-wise modules. To use aggregate feature, we need to inject
                <code>Aggregate</code> into the <code>provide</code> section.
            </p>
        </div>
    
    </div>
    </template>
    <style>
      #default-aggregate-grid.e-grid tr.e-altrow .e-rowcell:not(.e-selectionbackground.e-active) {
          background-color: rgb(228 228 228 / 15%);
      }
    </style>
    <script lang="ts">
    import { createApp } from "vue";
    import { GridComponent, ColumnsDirective, ColumnDirective, AggregateDirective, AggregatesDirective, Aggregate, Page, Sort, Toolbar, Edit, Filter } from "@syncfusion/ej2-vue-grids";
    import { OverallData } from "./data-source";
    
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
          data: OverallData,
          lines: 'Vertical',
          filterSettings: { type: 'Excel' },
          sumTemplate: function() {
            return {
                template: createApp({}).component('sumTemplate', {
                template: `<span>Total: {{data.Sum}}</span>`,
                data: function () {return {data: {data: {}}};}
                })
            }
          },
          newCustomersTemplate: function() {
            return {
                template: createApp({}).component('newCustomersTemplate', {
                template: `<span>New Customers: {{data.Sum}}</span>`,
                data: function () {return {data: {data: {}}};}
                })
            }
          },
          returningCustomersTemplate: function() {
            return {
                template: createApp({}).component('returningCustomersTemplate', {
                template: `<span>Returning Customers: {{data.Sum}}</span>`,
                data: function () {return {data: {data: {}}};}
                })
            }
          },
          avgTemplate: function() {
            return {
                template : createApp({}).component('avgTemplate', {
                template: `<span>Average: {{data.Average}}</span>`, 
                data: function () {return { data: {data: {}}};}
                })
            }
          },
          minTemplate: function() {
            return {
                template : createApp({}).component('minTemplate', {
                template: `<span>Min: {{data.Min}}</span>`, 
                data: function () {return { data: {data: {}}};}
                })
            }
          },
          maxTemplate: function() {
            return {
                template : createApp({}).component('avgTemplate', {
                template: `<span>Max: {{data.Max}}</span>`, 
                data: function () {return { data: {data: {}}};}
                })
            }
          }
        };
      },
      provide: {
          grid: [Aggregate, Page, Sort, Toolbar, Edit, Filter]
      }
    };
    </script>
