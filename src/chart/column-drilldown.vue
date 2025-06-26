<template>
    <div class="control-section">
      <div id="link">
            <a id="category" :style="{ visibility: categoryVisibility, display: 'inline-block' }" @click="resetChart">Population</a>
            <p :style="{ visibility: categoryVisibility, display: 'inline-block' }" id="symbol">&nbsp;&gt;&gt;&nbsp;</p>
            <p id="text" :style="{ visibility: categoryVisibility, display: 'inline-block' }">{{ selectedRegion }}</p>
      </div>
      <div id="drilldown" align="center">
        <ejs-chart
          ref="chart"
          :id="'drilldown'"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :chartArea="chartArea"
          :title="title"
          :subTitle="subTitle"
          :tooltip="tooltip"
          :width="width"
          :legendSettings="legendSettings"
          :theme="theme"
          :axisLabelClick="onAxisLabelClick"
          :chartMouseClick="onChartMouseClick"
          :pointRender="onPointRender"
          :pointClick="pointClick"
          :load="load"
          :loaded="loaded"
          :tooltipRender="tooltipRender"
        >
          <e-series-collection>
            <e-series
              :dataSource="seriesData"
              type="Column"
              xName="drilldown"
              yName="y"
              name="Population"
              :marker="marker"
              :width="2"
              :cornerRadius="{ topLeft: 5, topRight: 5 }"
            ></e-series>
          </e-series-collection>
        </ejs-chart>
      </div>
    
    <div id="action-description">
      <p>
        This drilldown column chart example visualizes the population distribution across different continents. Users
        can click on the columns to explore further details, allowing for an interactive analysis of population
        statistics by country within each continent.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a drilldown column chart. Each column represents a
        continent, and users can drill down to view detailed population statistics by country upon selection. This
        functionality enhances data exploration and provides a clearer understanding of demographic distributions.
      </p>
      <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in
        touch-enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
     </p>
      <p>
        More information on the column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column"
          aria-label="Navigate to the documentation for Column Chart in Vue Chart component">documentation section</a>.
      </p>
    </div>
    </div>
  </template>
  
  <script>
  import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, Legend, DataLabel, Tooltip, Highlight } from '@syncfusion/ej2-vue-charts';
  import { Browser } from '@syncfusion/ej2-base';
  import { loadChartTheme } from './theme-color';
  import { pointFabricColors, pointMaterialDarkColors,  pointMaterialColors, pointBootstrap5DarkColors, pointBootstrap5Colors, pointBootstrapColors, pointHighContrastColors, pointFluentDarkColors, pointFluentColors, pointTailwindDarkColors,  pointTailwindColors,  pointMaterial3Colors, pointMaterial3DarkColors, pointFluent2Colors,  pointFluent2HighContrastColors, pointFluent2DarkColors, pointTailwind3Colors, pointTailwind3DarkColors } from './theme-color'
  export default {
    components: {
      'ejs-chart': ChartComponent,
      'e-series-collection': SeriesCollectionDirective,
      'e-series': SeriesDirective
    },
    data() {
      return {
        seriesData: [
          { y: 4778, drilldown: 'Asia' },
          { y: 1481, drilldown: 'Africa' },
          { y: 746, drilldown: 'Europe' },
          { y: 379, drilldown: 'North America' },
          { y: 46, drilldown: 'Oceania' }
        ],
        primaryXAxis: {
          valueType: 'Category',
          labelStyle: { color: 'blue' },
          interval: 1,
          majorGridLines: { width: 0 },
          labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate90',
          labelRotation: Browser.isDevice ? -45 : 0,
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 }
        },
        primaryYAxis: {
          interval:1000,
          title: 'Population (in Millions)',
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        tooltip: {
          enable: true,
          header: "<b>Population - 2023</b>",
          format: '${point.x}: ${point.y}M'
        },
        width: Browser.isDevice ? '100%' : '75%',
        title: 'Top Populated Continents of 2023',
        subTitle: 'A Look at Population Rankings and Trends in 2023',
        legendSettings: { visible: false },
        theme: 'Fluent2',
        clicked: false,
        categoryVisibility: 'hidden',
        selectedRegion: '',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Outer'
        }
      },

      fluent2Colors: ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#66CD15", "#F3A93C", "#107C10", "#C19C00"]
      };
    },
    provide: {
      chart: [ColumnSeries, DataLabel, Category, Legend, Tooltip, Highlight]
    },
    methods: {
        tooltipRender: function (args) {
            args.text = args.text.replace(/\d+/g, function (num) {
                return Number(num).toLocaleString('en-US');
            });
        },
      load(args) {
           loadChartTheme(args);
       },
      loaded() {
        if (this.clicked) {
          for (let i = 0; i <= 6; i++) {
            let axisLabel = document.getElementById(`drilldown0_AxisLabel_${i}`);
            if (axisLabel) {
              axisLabel.classList.add('no-underline');
            }
              const seriesElement = document.getElementById(`drilldown_Series_0_Point_${i}`);
              if (seriesElement) {
                  seriesElement.classList.add('no-underline');
              }
          }
        }
      },
      pointClick(args) {
            args.series.fill = args.point.color;
            if (args.point.index !== 6) {
                args.series.yAxis.interval = null;
                if (!args.series.chart.theme.includes('Dark') && args.series.chart.theme !== 'HighContrast' && args.series.chart.theme !== 'Fluent2HighContrast') {
                    args.series.chart.primaryXAxis.labelStyle.color = "black";
                }
                else if (args.series.chart.theme === 'Material3Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#CAC4D0";
                }
                else if (args.series.chart.theme === 'FluentDark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#C8C6C4";
                }
                else if (args.series.chart.theme === 'Fluent2Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#ADADAD";
                }
                else if (args.series.chart.theme === 'Bootstrap5Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#DEE2E6";
                }
                else if (args.series.chart.theme === 'TailwindDark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#9CA3AF";
                }
                else if (args.series.chart.theme === 'Tailwind3Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#D1D5DB";
                }
                else if (args.series.chart.theme === 'HighContrast') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#969696";
                }
                else if (args.series.chart.theme === 'Fluent2HighContrast') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#FFFFFF";
                }
                if (!this.clicked) {
                    document.getElementById("text").innerHTML = args.point.x;
                    document.getElementById("category").style.visibility = "visible";
                    document.getElementById("symbol").style.visibility = "visible";
                    document.getElementById("text").style.visibility = "visible";
                    if (args.point.index === 0) {
                        args.series.chart.title = "Top Populated Countries of Asia - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        this.clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 1422,
                                drilldown: 'China'
                            },
                            {
                                y: 1438,
                                drilldown: 'India'
                            },
                            {
                                y: 278,
                                drilldown: 'Indonesia'
                            },
                            {
                                y: 240,
                                drilldown: 'Pakistan'
                            },
                            {
                                y: 173,
                                drilldown: 'Bangladesh'
                            },
                            {
                                y: 125,
                                drilldown: 'Japan'
                            },
                            {
                                y: 117,
                                drilldown: 'Philippines'
                            },
                            {
                                y: 99,
                                drilldown: 'Vietnam'
                            }
                        ];
                    }
                    if (args.point.index === 1) {
                        args.series.chart.title = "Top Populated Countries of Africa - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        this.clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 223,
                                drilldown: 'Nigeria'
                            },
                            {
                                y: 126,
                                drilldown: 'Ethiopia'
                            },
                            {
                                y: 113,
                                drilldown: 'Egypt'
                            },
                            {
                                y: 68,
                                drilldown: 'Tanzania'
                            },
                            {
                                y: 60,
                                drilldown: 'South Africa'
                            },
                            {
                                y: 55,
                                drilldown: 'Kenya'
                            },
                            {
                                y: 48,
                                drilldown: 'Uganda'
                            }
                        ];
                    }
                    if (args.point.index === 2) {
                        args.series.chart.title = "Top Populated Countries of Europe - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        this.clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 143,
                                drilldown: 'Russia'
                            },
                            {
                                y: 84,
                                drilldown: 'Germany'
                            },
                            {
                                y: 67,
                                drilldown: 'United Kingdom'
                            },
                            {
                                y: 65,
                                drilldown: 'France'
                            },
                            {
                                y: 59,
                                drilldown: 'Italy'
                            },
                            {
                                y: 47,
                                drilldown: 'Spain'
                            }
                        ];
                    }
                    if (args.point.index === 3) {
                        args.series.chart.title = "Top Populated Countries of North America - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        this.clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 339,
                                drilldown: 'United States'
                            },
                            {
                                y: 127,
                                drilldown: 'Mexico'
                            },
                            {
                                y: 39,
                                drilldown: 'Canada'
                            },
                            {
                                y: 19,
                                drilldown: 'Guatemala'
                            },
                            {
                                y: 10,
                                drilldown: 'Honduras'
                            },
                            {
                                y: 6,
                                drilldown: 'El Salvador'
                            },
                            {
                                y: 6,
                                drilldown: 'Nicaragua'
                            },
                            {
                                y: 5,
                                drilldown: 'Costa Rica'
                            }
                        ];
                    }
                    if (args.point.index === 4) {
                        args.series.chart.title = "Top Populated Countries of Oceania - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        this.clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 26,
                                drilldown: 'Australia'
                            },
                            {
                                y: 9,
                                drilldown: 'Papua New Guinea'
                            },
                            {
                                y: 5,
                                drilldown: 'New Zealand'
                            }
                        ];
                    }
                }
            }
        },
      onPointRender(args) {
        if (!this.clicked) {
                let selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'material';
                if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
                    args.fill = pointFabricColors[args.point.index % 10];
                } else if (selectedTheme === 'material-dark') {
                    args.fill = pointMaterialDarkColors[args.point.index % 10];
                } else if (selectedTheme === 'material') {
                    args.fill = pointMaterialColors[args.point.index % 10];
                } else if (selectedTheme === 'bootstrap5-dark') {
                    args.fill = pointBootstrap5DarkColors[args.point.index % 10];
                } else if (selectedTheme === 'bootstrap5') {
                    args.fill = pointBootstrap5Colors[args.point.index % 10];
                } else if (selectedTheme === 'bootstrap') {
                    args.fill = pointBootstrapColors[args.point.index % 10];
                } else if (selectedTheme === 'bootstrap4') {
                    args.fill = pointBootstrapColors[args.point.index % 10];
                } else if (selectedTheme === 'bootstrap-dark') {
                    args.fill = pointBootstrapColors[args.point.index % 10];
                } else if (selectedTheme === 'highcontrast') {
                    args.fill = pointHighContrastColors[args.point.index % 10];
                } else if (selectedTheme === 'fluent-dark') {
                    args.fill = pointFluentDarkColors[args.point.index % 10];
                } else if (selectedTheme === 'fluent') {
                    args.fill = pointFluentColors[args.point.index % 10];
                } else if (selectedTheme === 'tailwind-dark') {
                    args.fill = pointTailwindDarkColors[args.point.index % 10];
                } else if (selectedTheme === 'tailwind') {
                    args.fill = pointTailwindColors[args.point.index % 10];
                }
                else if (selectedTheme === 'material3') {
                    args.fill = pointMaterial3Colors[args.point.index % 10];
                }
                else if (selectedTheme === 'material3-dark') {
                    args.fill = pointMaterial3DarkColors[args.point.index % 10];
                }
                else if (selectedTheme === 'fluent2') {
                    args.fill = pointFluent2Colors[args.point.index % 10];
                }
                else if (selectedTheme === 'fluent2-highcontrast') {
                    args.fill = pointFluent2HighContrastColors[args.point.index % 10];
                }
                else if (selectedTheme === 'fluent2-dark') {
                    args.fill = pointFluent2DarkColors[args.point.index % 10];
                }
                else if (selectedTheme === 'tailwind3-dark') {
                    args.fill = pointTailwind3DarkColors[args.point.index % 10];
                } 
                else if (selectedTheme === 'tailwind3') {
                    args.fill = pointTailwind3Colors[args.point.index % 10];
                }
            }
      },
      onChartMouseClick(args) {
        if (args.target.indexOf('category') > -1) {
          this.seriesData = this.initialData;
        }
      },
 
      onAxisLabelClick(args) {
      if (args.axis.name === "primaryXAxis") {
                args.chart.series[0].fill = (args.chart.series[0]).points[args.index].color;

                if (args.index !== 6) {
                    args.chart.primaryYAxis.interval = null;

                    if (!args.chart.theme.includes('Dark') && args.chart.theme !== 'HighContrast' && args.chart.theme !== 'Fluent2HighContrast') {
                        args.chart.primaryXAxis.labelStyle.color = "black";
                    }
                    else if (args.chart.theme === 'Material3Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#CAC4D0";
                    }
                    else if (args.chart.theme === 'FluentDark') {
                        args.chart.primaryXAxis.labelStyle.color = "#C8C6C4";
                    }
                    else if (args.chart.theme === 'Fluent2Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#ADADAD";
                    }
                    else if (args.chart.theme === 'Bootstrap5Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#DEE2E6";
                    }
                    else if (args.chart.theme === 'TailwindDark') {
                        args.chart.primaryXAxis.labelStyle.color = "#9CA3AF";
                    }
                    else if (args.chart.theme === 'Tailwind3Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#D1D5DB";
                    }
                    else if (args.chart.theme === 'HighContrast') {
                        args.chart.primaryXAxis.labelStyle.color = "#969696";
                    }
                    else if (args.chart.theme === 'Fluent2HighContrast') {
                        args.chart.primaryXAxis.labelStyle.color = "#FFFFFF";
                    }
                    if (!this.clicked) {
                        document.getElementById("text").innerHTML = args.text;
                        document.getElementById("category").style.visibility = "visible";
                        document.getElementById("symbol").style.visibility = "visible";
                        document.getElementById("text").style.visibility = "visible";

                        if (args.index === 0) {
                            args.chart.title = "Top Populated Countries of Asia - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            this.clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 1422,
                                drilldown: 'China'
                            },
                            {
                                y: 1438,
                                drilldown: 'India'
                            },
                            {
                                y: 278,
                                drilldown: 'Indonesia'
                            },
                            {
                                y: 240,
                                drilldown: 'Pakistan'
                            },
                            {
                                y: 173,
                                drilldown: 'Bangladesh'
                            },
                            {
                                y: 125,
                                drilldown: 'Japan'
                            },
                            {
                                y: 117,
                                drilldown: 'Philippines'
                            },
                            {
                                y: 99,
                                drilldown: 'Vietnam'
                            }
                            ]
                        }
                        if (args.index === 1) {
                            args.chart.title = "Top Populated Countries of Africa - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            this.clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 223,
                                drilldown: 'Nigeria'
                            },
                            {
                                y: 126,
                                drilldown: 'Ethiopia'
                            },
                            {
                                y: 113,
                                drilldown: 'Egypt'
                            },
                            {
                                y: 68,
                                drilldown: 'Tanzania'
                            },
                            {
                                y: 60,
                                drilldown: 'South Africa'
                            },
                            {
                                y: 55,
                                drilldown: 'Kenya'
                            },
                            {
                                y: 48,
                                drilldown: 'Uganda'
                            }
                            ]
                        }
                        if (args.index === 2) {
                            args.chart.title = "Top Populated Countries of Europe - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            this.clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 143,
                                drilldown: 'Russia'
                            },
                            {
                                y: 84,
                                drilldown: 'Germany'
                            },
                            {
                                y: 67,
                                drilldown: 'United Kingdom'
                            },
                            {
                                y: 65,
                                drilldown: 'France'
                            },
                            {
                                y: 59,
                                drilldown: 'Italy'
                            },
                            {
                                y: 47,
                                drilldown: 'Spain'
                            }
                            ]
                        }
                        if (args.index === 3) {
                            args.chart.title = "Top Populated Countries of North America - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            this.clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 339,
                                drilldown: 'United States'
                            },
                            {
                                y: 127,
                                drilldown: 'Mexico'
                            },
                            {
                                y: 39,
                                drilldown: 'Canada'
                            },
                            {
                                y: 19,
                                drilldown: 'Guatemala'
                            },
                            {
                                y: 10,
                                drilldown: 'Honduras'
                            },
                            {
                                y: 6,
                                drilldown: 'El Salvador'
                            },
                            {
                                y: 6,
                                drilldown: 'Nicaragua'
                            },
                            {
                                y: 5,
                                drilldown: 'Costa Rica'
                            }
                            ]
                        }
                        if (args.index === 4) {
                            args.chart.title = "Top Populated Countries of Oceania - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            this.clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 26,
                                drilldown: 'Australia'
                            },
                            {
                                y: 9,
                                drilldown: 'Papua New Guinea'
                            },
                            {
                                y: 5,
                                drilldown: 'New Zealand'
                            }
                            ]
                        }

                    }
                }
            }
    },
    resetChart(event) {
        

        this.$refs.chart.ej2Instances.title = "Top Populated Continents of 2023";
        this.$refs.chart.ej2Instances.subTitle = "A Look at Population Rankings and Trends in 2023";
        this.$refs.chart.ej2Instances.primaryXAxis.labelStyle.color = "blue";
        this.$refs.chart.ej2Instances.primaryYAxis.interval = 1000;
        this.$refs.chart.ej2Instances.series[0].dataSource = this.initialData;
        this.clicked = false;
        (event.target ).style.visibility = 'hidden';
        (document.getElementById('symbol') ).style.visibility = 'hidden';
        (document.getElementById('text') ).style.visibility = 'hidden';
    }
    },
    mounted() {
      this.initialData = [...this.seriesData];
    }
  };
  </script>
  
  <style >
  #control-container {
    padding: 0px !important;
  }
  .no-underline {
        text-decoration: none !important;

    }

    #drilldown0_AxisLabel_0,
    #drilldown0_AxisLabel_1,
    #drilldown0_AxisLabel_2,
    #drilldown0_AxisLabel_3,
    #drilldown0_AxisLabel_4,
    #drilldown_Series_0_Point_0,
    #drilldown_Series_0_Point_1,
    #drilldown_Series_0_Point_2,
    #drilldown_Series_0_Point_3,
    #drilldown_Series_0_Point_4,
    #drilldown0_AxisLabel_5 {
        text-decoration: underline;
        cursor: pointer;

    }

    #category:hover {
        cursor: pointer;
    }
</style>