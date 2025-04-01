<template>
    <div class="control-section "  align='center'>
        <div align='center'>
            <ejs-chart ref="chart" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :annotations="annotations"
                :zoomSettings="zoomSettings" :height="height" :width="width" id="container" :chartArea="chartArea"
                :annotationRender='annotationRender' :legendSettings='legend' :load='load' :resized="onResized" :chartMouseClick="onChartMouseClick" :theme='theme' >
                <e-series-collection>
                    <e-series :dataSource='chartData' type='SplineArea' xName='xValue' yName='y' opacity=0.5 :border='border'
                        width=2 :marker='marker'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div align='center' id="chart-button-container">
            <button id="friday" class="chart-custom-button active">
                <div class="day">Friday</div>
                <img src="./images/sunny_image.png" alt="Friday">
                <div class="temp">2°C - 12°C</div>
            </button>
            <button id="saturday" class="chart-custom-button">
                <div class="day">Saturday</div>
                <img src="./images/sunny_image.png" alt="Saturday">
                <div class="temp">6°C - 16°C</div>
            </button>
            <button id="sunday" class="chart-custom-button">
                <div class="day">Sunday</div>
                <img src="./images/cloudy.png" alt="Sunday">
                <div class="temp">15°C - 18°C</div>
            </button>
            <button id="monday" class="chart-custom-button">
                <div class="day">Monday</div>
                <img src="./images/cloudy.png" alt="Monday">
                <div class="temp">12°C - 16°C</div>
            </button>
            <button id="tuesday" class="chart-custom-button">
                <div class="day">Tuesday</div>
                <img src="./images/rainy.png" alt="Tuesday">
                <div class="temp">14°C - 18°C</div>
            </button>
        </div>
        <svg style="height: 0">
        <defs>
          <linearGradient id="material-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="fabric-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="bootstrap-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="bootstrap4-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="highcontrast-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="tailwind-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="bootstrap5-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="materialdark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="fabricdark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="bootstrapdark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="tailwinddark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="tailwind3-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="tailwind3dark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="bootstrap5dark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="fluent-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="fluentdark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="material3-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="material3dark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="fluent2-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="fluent2highcontrast-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
          <linearGradient id="fluent2dark-gradient-chart" style=" opacity: 0.75 " class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
        <div id="action-description">
            <p>
                Explore an interactive weather chart with pagination using buttons. Each button represents a different day, allowing you to navigate dynamically through daily weather data within the chart.
            </p>
        </div>

        <div id="description">
            <p>This example demonstrates how to view the next set of data through panning. You can swipe left or right, or click on the days at the bottom to navigate through the data. Enable animation during panning by using the <code>enableAnimation</code> property in <code>zoomSettings</code>.
        </p>
        <p>
          Chart component features are divided into individual, feature-specific modules. To enable zooming, you need to inject the <code>Zoom</code> module into <code>services</code>.</p>
            <p>
                More information on zooming and panning can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/documentation/chart/zooming/"
                    aria-label="Navigate to the documentation for Zooming in TypeScript Chart control">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
  
<script>
import { ChartComponent, SeriesDirective, Category, SeriesCollectionDirective, SplineAreaSeries, Zoom, DataLabel, ChartAnnotation } from '@syncfusion/ej2-vue-charts';
import { Browser } from '@syncfusion/ej2-base';

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            image: 'sunny_image',
            count: 12,
            day: 'Friday',
            rainfalls: 0,
            moistureLevels: 30,
            breezeSpeeds: 5,
            weather: 'Sunny',
            temperatureData: [
                { celsius: 12, fahrenheit: 54 },
                { celsius: 16, fahrenheit: 61 },
                { celsius: 18, fahrenheit: 64 },
                { celsius: 16, fahrenheit: 61 },
                { celsius: 18, fahrenheit: 64 }
            ],
            buttonRanges: {
                celsius: [
                    { min: 2, max: 12 },
                    { min: 6, max: 16 },
                    { min: 15, max: 18 },
                    { min: 12, max: 16 },
                    { min: 14, max: 18 }
                ],
                fahrenheit: [
                    { min: 36, max: 54 },
                    { min: 43, max: 61 },
                    { min: 59, max: 64 },
                    { min: 54, max: 61 },
                    { min: 57, max: 64 }
                ]
            },
            isFahrenheit: false,
            buttonIndex: 0,
            
            chartData: [
            { x: 1, xValue: '1 am', y: 6, datalabel: '6', datalabel1: '43' },
            { x: 2, xValue: '4 am', y: 4, datalabel: '4', datalabel1: '39' },
            { x: 3, xValue: '7 am', y: 2, datalabel: '2', datalabel1: '36' },
            { x: 4, xValue: '10 am', y: 8, datalabel: '8', datalabel1: '46' },
            { x: 5, xValue: '1 pm', y: 12, datalabel: '12', datalabel1: '54' },
            { x: 6, xValue: '4 pm', y: 11, datalabel: '11', datalabel1: '52' },
            { x: 7, xValue: '1 am', y: 6, datalabel: '6', datalabel1: '43' },
            { x: 8, xValue: '4 am', y: 7, datalabel: '7', datalabel1: '45' },
            { x: 9, xValue: '7 am', y: 9, datalabel: '9', datalabel1: '48' },
            { x: 10, xValue: '10 am', y: 14, datalabel: '14', datalabel1: '57' },
            { x: 11, xValue: '1 pm', y: 16, datalabel: '16', datalabel1: '61' },
            { x: 12, xValue: '4 pm', y: 15, datalabel: '15', datalabel1: '59' },
            { x: 13, xValue: '1 am', y: 15, datalabel: '15', datalabel1: '59' },
            { x: 14, xValue: '4 am', y: 16, datalabel: '16', datalabel1: '61' },
            { x: 15, xValue: '7 am', y: 17, datalabel: '17', datalabel1: '63' },
            { x: 16, xValue: '10 am', y: 18, datalabel: '18', datalabel1: '64' },
            { x: 17, xValue: '1 pm', y: 18, datalabel: '18', datalabel1: '64' },
            { x: 18, xValue: '4 pm', y: 15, datalabel: '15', datalabel1: '59' },
            { x: 19, xValue: '1 am', y: 14, datalabel: '14', datalabel1: '57' },
            { x: 20, xValue: '4 am', y: 13, datalabel: '13', datalabel1: '55' },
            { x: 21, xValue: '7 am', y: 12, datalabel: '12', datalabel1: '54' },
            { x: 22, xValue: '10 am', y: 14, datalabel: '14', datalabel1: '57' },
            { x: 23, xValue: '1 pm', y: 16, datalabel: '16', datalabel1: '61' },
            { x: 24, xValue: '4 pm', y: 15, datalabel: '15', datalabel1: '59' },
            { x: 25, xValue: '1 am', y: 15, datalabel: '15', datalabel1: '59' },
            { x: 26, xValue: '4 am', y: 14, datalabel: '14', datalabel1: '57' },
            { x: 27, xValue: '7 am', y: 16, datalabel: '16', datalabel1: '61' },
            { x: 28, xValue: '10 am', y: 18, datalabel: '18', datalabel1: '64' },
            { x: 29, xValue: '1 pm', y: 16, datalabel: '16', datalabel1: '61' },
            { x: 30, xValue: '4 pm', y: 17, datalabel: '17', datalabel1: '63' },
            ],
            primaryXAxis: {
                interval: 1,
                zoomFactor: 0.175,
                zoomPosition: 0,
                majorGridLines: { width: 0 },
                enableAutoIntervalOnZooming: false,
                labelPlacement: 'OnTicks',
                labelRotation: Browser.isDevice ? -90 : 0,
                valueType: 'Category',
                edgeLabelPlacement: 'Shift',
                isIndexed: true
            },
            primaryYAxis: {
                majorGridLines: { width: 0 },
                visible: false,
                maximum: 30
            },
            annotations: [
                {
                    content: '<div id="chart_image"><img src="src/chart/images/cloudy.png" alt="Cloud Picture" style="width: 70px; height: 70px"/></div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: 20,
                    y: 40
                },
                {
                content: '<div id="temperature" style="font-size: 50px;">12</div>',
                coordinateUnits: 'Pixel',
                region: 'Chart',
                x: 90,
                y: 30
                },
                {
                    content: '<div id="celsius" style="font-size: 17px; vertical-align: super; opacity: 1;">°C | </div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: 140,
                    y: 20
                },
                {
                    content: '<div id="fahrenheit" style="font-size: 17px; vertical-align: super; opacity: 0.5;">°F</div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    y: 20
                },
                {
                    content: '<div id="chartdays" style="font-size: 15px; text-align:right;">Friday</div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: 800,
                    y: 34
                },
                {
                    content: '<div id="chartweather" style="font-size: 15px; text-align:right;">Sunny</div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: 800,
                    y: 53
                },
                {
                    content: '<div id="title" style="font-size: 20px; font-weight: 600">USA, Texas</div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: 800,
                    y: 12
                },
                {
                    content: '<div id="text" style="font-size: 11px;"></div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: 190,
                    y: 14
                }
            ],
            zoomSettings: {
                enableSelectionZooming: false,
                toolbarItems: [],
                mode: 'X',
                enablePan: true,
                enableAnimation: true
            },
            height: '70%',
            width: Browser.isDevice ? '100%' : '75%',
            legend: {visible: false},
            chartArea: { border: { width: 0 } },

            border: { width: 2 },
            marker: {
                visible: true, isFilled: true, width: 8, height: 8,
                dataLabel: { visible: true, name: 'datalabel', position: 'Top', font: { fontWeight: "Bold" } }
            },
        };
    },
    provide: {
        chart: [SplineAreaSeries, Category, Zoom, DataLabel, ChartAnnotation]
    },
    methods: {
        load(args) {
            let selectedTheme = loadChartTheme(args);
            const themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentdark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
            const borderColor = ['#FD7E14', '#FD7E14', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
            const isDarkTheme = /dark/i.test(selectedTheme) || /contrast/i.test(selectedTheme);
            args.chart.series[0].fill = 'url(#' + selectedTheme.toLowerCase() + '-gradient-chart)';
            args.chart.series[0].border = { width: 4, color: borderColor[themes.indexOf(args.chart.theme.toLowerCase())] };
            args.chart.series[0].marker = { fill: borderColor[themes.indexOf(args.chart.theme.toLowerCase())] };
            args.chart.annotations[3].x = selectedTheme.indexOf('Tailwind') !== -1 ? 167 : 163;
            const buttons = document.querySelectorAll('.chart-custom-button');
            const buttonContainer = document.getElementById('chart-button-container');
            buttons.forEach(button => {
                if (isDarkTheme) {
                    button.classList.add('dark-theme-bg');
                    button.classList.remove('light-theme-bg');
                    buttonContainer.style.backgroundColor = '#333';
                } else {
                    button.classList.add('light-theme-bg');
                    button.classList.remove('dark-theme-bg');
                    buttonContainer.style.backgroundColor = 'rgb(237, 236, 236)';
                }
            });
            if (Browser.isDevice) {
                buttonContainer.style.width = '97%';
            } else {
                buttonContainer.style.width = '75%';
            }
      },
      onChartMouseClick(args) {
        if (this.$refs.chart.ej2Instances) {
          const activeButton = document.querySelector('.chart-custom-button.active');
          const index = Array.from(document.querySelectorAll('.chart-custom-button')).indexOf(activeButton);
    
          if (index !== -1 && this.temperatureData[index]) {
            let celsius;
            let fahrenheit ;
              if (this.temperatureData[index]) {
                const tempData = this.temperatureData[index];
                celsius = tempData.celsius;
                fahrenheit = tempData.fahrenheit;
              }
            const temperatureElement = document.getElementById('temperature');
            const celsiusElement = document.getElementById('celsius');
            const fahrenheitElement = document.getElementById('fahrenheit');
    
            if (args.target === 'celsius' && temperatureElement) {
              temperatureElement.innerHTML = `<b style="font-size: 50px">${celsius}</b>`;
              this.isFahrenheit = false;
              if (celsiusElement) {
                celsiusElement.style.opacity = '1';
              }
              if (fahrenheitElement) {
                fahrenheitElement.style.opacity = '0.5';
              }
              this.$refs.chart.ej2Instances.series[0].marker.dataLabel.name = 'datalabel';
            } else if (args.target === 'fahrenheit' && temperatureElement) {
              temperatureElement.innerHTML = `<b style="font-size: 50px">${fahrenheit}</b>`;
              this.isFahrenheit = true;
              if (celsiusElement) {
                celsiusElement.style.opacity = '0.5';
              }
              if (fahrenheitElement) {
                fahrenheitElement.style.opacity = '1';
              }
              this.$refs.chart.ej2Instances.series[0].marker.dataLabel.name = 'datalabel1';
            }
        }
        const buttons = document.querySelectorAll('.chart-custom-button .temp');
        buttons.forEach((buttonTempElement, idx) => {
            let minTemp;
            let maxTemp;

            if (args.target === 'fahrenheit') {
            minTemp = this.buttonRanges.fahrenheit[idx].min;
            maxTemp = this.buttonRanges.fahrenheit[idx].max;
            buttonTempElement.textContent = `${minTemp}°F - ${maxTemp}°F`;
            } else {
            minTemp = this.buttonRanges.celsius[idx].min;
            maxTemp = this.buttonRanges.celsius[idx].max;
            buttonTempElement.textContent = `${minTemp}°C - ${maxTemp}°C`;
            }
      });
    }
      },
      onResized(args) {
            const maxAnnotationX = args.chart.availableSize.width;
            args.chart.annotations[4].x = maxAnnotationX - 50;
            args.chart.annotations[5].x = maxAnnotationX - 50;
            args.chart.annotations[6].x = maxAnnotationX - 50;
        },
        annotationRender(args) {
            if (args.content.id === 'container_Annotation_0') {
                args.content.innerHTML = '<div id="chart_cloud" align="center"><img src="src/chart/images/' + this.image + '.png" alt="Cloud Picture" style="width: 70px; height: 70px; margin-right: 10px;"/></div>';
            }
            else if (args.content.id === 'container_Annotation_1') {
                var tempDisplay = this.isFahrenheit ? this.temperatureData[this.buttonIndex].fahrenheit : this.temperatureData[this.buttonIndex].celsius;
                args.content.innerHTML = '<div id="temperature"><b align="center" style="font-size: 50px">' + tempDisplay + '<b></div>';
            }
            else if (args.content.id === 'container_Annotation_2') {
                args.content.innerHTML = '<div id="celsius" style="font-size: 17px; vertical-align: super; cursor: pointer; opacity: 1;">°C | </div>';
            }
            else if (args.content.id === 'container_Annotation_3') {
                args.content.innerHTML = '<div id="fahrenheit" style="font-size: 17px; vertical-align: super; cursor: pointer; opacity: 0.5;">°F</div>';
            }
            else if (args.content.id === 'container_Annotation_4') {
                args.content.innerHTML = Browser.isDevice ? '<div id="chartdays" style="text-align: right; font-size: 9px; opacity: 0.7;">' + this.day + '</div>' : '<div id="chartdays" style="text-align: right; font-size: 15px; opacity: 0.7;">' + this.day + '</div>';
            }
            else if (args.content.id === 'container_Annotation_5') {
                args.content.innerHTML = '<div id="chartweather" style="text-align: right; font-size: 15px; opacity: 0.7;">' + this.weather + '</div>';
            }
            else if (args.content.id === 'container_Annotation_6') {
                args.content.innerHTML = Browser.isDevice ? "<div id=\"title\" style=\"font-size: 16px; font-weight: 600\">USA, Texas</div>" : "<div id=\"title\" style=\"font-size: 20px; font-weight: 600\">USA, Texas</div>";
            }
            else {
                args.content.innerHTML = '<div style="text-align:left; opacity: 0.7;">' + 'Rainfall: ' + this.rainfalls + ' mm/hr<br>' + 'Moisture: ' + this.moistureLevels + '%<br>' + 'Breeze: ' + this.breezeSpeeds + ' km/hr' + '</div>';
            }
        },
        updateChart(buttonId, img, tempCount, chartDay, zoomPos, zoomFactor, rainfall, moistureLevel, breezeSpeed, weatherCondition, buttonIndex) {
            this.image = img;
            this.count = tempCount;
            this.day = chartDay;
            this.rainfalls = rainfall;
            this.moistureLevels = moistureLevel;
            this.breezeSpeeds = breezeSpeed;
            this.weather = weatherCondition;
            this.buttonIndex = buttonIndex;
            this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = zoomPos;
            this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = zoomFactor;
            this.$refs.chart.ej2Instances.duration = 600;
            const buttons = document.querySelectorAll('.chart-custom-button');
            buttons.forEach(button => button.classList.remove('active'));
            const selectedButton = document.getElementById(buttonId);
            if (selectedButton) {
                selectedButton.classList.add('active');
            }
        }
    },
    mounted() {
        document.getElementById('friday').onclick = () => this.updateChart('friday', 'sunny_image', 12, 'Friday', 0, 0.175, 0, 30, 5, 'Sunny', 0);
        document.getElementById('saturday').onclick = () => this.updateChart('saturday', 'sunny_image', 16, 'Saturday', 0.206, 0.175, 0, 35, 6, 'Sunny', 1);
        document.getElementById('sunday').onclick = () => this.updateChart('sunday', 'cloudy', 18, 'Sunday', 0.413, 0.175, 1, 40, 4, 'Cloudy', 2);
        document.getElementById('monday').onclick = () => this.updateChart('monday', 'cloudy', 16, 'Monday', 0.620, 0.175, 2, 45, 5, 'Cloudy', 3);
        document.getElementById('tuesday').onclick = () => this.updateChart('tuesday', 'rainy', 18, 'Tuesday', 0.827, 0.175, 5, 50, 6, 'Rainy', 4);
    }
};
</script>
  
<style>
#control-container {
    padding: 0px !important;
}

#chart-button-container {
    padding: 5px;
    /* Remove padding around the container */
    width: 75%;
    background-color: rgb(237, 236, 236);
    /* Same color as the button background */
    display: flex;
    justify-content: space-between;
    /* Ensure buttons take up the full width */
    align-items: center;
    /* Align items in the center vertically */
    border-radius: 10px;
    /* Optional: for rounded corners */
}

.chart-custom-button {
    flex-grow: 1;
    /* Make buttons grow to fill the container */
    flex-basis: 0;
    /* Ensure all buttons have the same width */
    height: 35%;
    /* Set a fixed height for the buttons */
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    /* Remove the border for seamless alignment */
    border-radius: 5px;
    /* Remove the border-radius for no gaps */
    justify-content: center;
    /* Center content within the button */
    background-color: rgb(237, 236, 236);
    /* Button background */
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    /* Smooth transition for background color and shadow */
    position: relative;
    /* To position the line correctly */
}

/* Add the line after every button except the last one */
.chart-custom-button:not(:last-child):not(.active)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 2px;
    /* Width of the line */
    height: 80%;
    /* Height of the line, adjust as needed */
    background-color: rgba(0, 0, 0, 0.2);
    /* Light shadow color */
}

/* Specifically remove the line from the Tuesday button */
.chart-custom-button.no-line::after {
    display: none;
}

.chart-custom-button img {
    width: 30px;
    height: 30px;
}


.day,
.temp {
    font-size: 13px;
}

.light-theme-bg {
        background-color: rgb(237, 236, 236) !important;
    }

    .light-theme-bg.active {
        background-color: white !important;
    }

    .light-theme-bg:hover {
        background-color: #dbdada !important;
    }

    .dark-theme-bg {
        background-color: #333 !important;
    }

    .dark-theme-bg.active {
        background-color: #7b7b7b !important;
        box-shadow: 0 0 0 2px #7b7b7b !important;
    }

    .dark-theme-bg:hover {
        background-color: #7b7b7b !important;
    }


.chart-custom-button.active {
    box-shadow: 0 0 0 2px rgb(237, 236, 236);
    /* Create an outward border effect */
    z-index: 2;
    /* Ensure the selected button is above other buttons and lines */
}

    #material-gradient-chart stop {
    stop-color: #00bdae;
    }
    #fabric-gradient-chart stop {
        stop-color: #4472c4;
    }
    #bootstrap-gradient-chart stop {
        stop-color: #a16ee5;
    }
    #bootstrap4-gradient-chart stop {
        stop-color: #a16ee5;
    }
    #fluent-gradient-chart stop {
        stop-color: #1AC9E6;
    }
    #fluentdark-gradient-chart stop {
        stop-color: #1AC9E6;
    }
    #highcontrast-gradient-chart stop {
        stop-color: #79ECE4;
    }
    #tailwind-gradient-chart stop {
        stop-color: #5A61F6;
    }
    #tailwind3-gradient-chart stop {
        stop-color: #2F4074;
    }
    #bootstrap5-gradient-chart stop {
        stop-color: #FD7E14;
    }
    #materialdark-gradient-chart stop {
        stop-color: #9ECB08;
    }
    #fabricdark-gradient-chart stop {
        stop-color: #4472c4;
    }
    #bootstrapdark-gradient-chart stop {
        stop-color: #a16ee5;
    }
    #tailwinddark-gradient-chart stop {
        stop-color: #8B5CF6;
    }
    #tailwind3dark-gradient-chart stop {
        stop-color: #8029F1;
    }
    #bootstrap5dark-gradient-chart stop {
        stop-color: #FD7E14;
    }
    #material3-gradient-chart stop {
        stop-color: #6355C7;
    }
    #material3dark-gradient-chart stop {
        stop-color: #4EAAFF;
    }
    #fluent2-gradient-chart stop {
        stop-color: #6200EE;
    }
    #fluent2highcontrast-gradient-chart stop {
        stop-color: #9BB449;
    }
    #fluent2dark-gradient-chart stop {
        stop-color: #9BB449;
    }
    .chart-gradient stop[offset="0"] {
        stop-opacity: 0.9;
    }
    .chart-gradient stop[offset="1"] {
        stop-opacity: 0.3;
    }
    #chartdays, #chartweather {
        font-size: 15px;
        opacity: 0.7;
        position: relative;
        right: 0;
        width: 85px;
    }
</style>
  
