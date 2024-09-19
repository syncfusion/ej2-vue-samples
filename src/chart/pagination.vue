<template>
    <div class="control-section "  align='center'>
        <div align='center'>
            <ejs-chart ref="chart" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :annotations="annotations"
                :zoomSettings="zoomSettings" :height="height" :width="width" id="container" :chartArea="chartArea"
                :annotationRender='annotationRender' :legendSettings='legend' :load='load' :theme='theme' >
                <e-series-collection>
                    <e-series :dataSource='chartData' type='SplineArea' xName='xValue' yName='y' opacity=0.5 :border='border'
                        width=2 :marker='marker'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div align='center' id="button-container">
            <button id="friday" class="custom-button active">
                <div class="day">Fri</div>
                <img src="./images/sunny_image.png" alt="Friday">
                <div class="temp">24°C - 19°C</div>
            </button>
            <button id="saturday" class="custom-button">
                <div class="day">Sat</div>
                <img src="./images/sunny_image.png" alt="Saturday">
                <div class="temp">20°C - 25°C</div>
            </button>
            <button id="sunday" class="custom-button">
                <div class="day">Sun</div>
                <img src="./images/cloudy.png" alt="Sunday">
                <div class="temp">18°C - 24°C</div>
            </button>
            <button id="monday" class="custom-button">
                <div class="day">Mon</div>
                <img src="./images/cloudy.png" alt="Monday">
                <div class="temp">14°C - 19°C</div>
            </button>
            <button id="tuesday" class="custom-button">
                <div class="day">Tue</div>
                <img src="./images/rainy.png" alt="Tuesday">
                <div class="temp">14°C - 18°C</div>
            </button>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the panning feature of the charts.
            </p>
        </div>

        <div id="description">
            <p>This example shows how to view the next set of data through panning. You can swipe from left to right or vice
                versa, and you can also click on the days at the bottom to view the next set of data.</p>
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
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
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
            count: 25,
            day: 'Friday',
            chartData: [
                { x: 1, xValue: '1 am', y: 20 }, { x: 2, xValue: '4 am', y: 20 }, { x: 3, xValue: '7 am', y: 20 },
                { x: 4, xValue: '10 am', y: 21 }, { x: 5, xValue: '1 pm', y: 21 }, { x: 6, xValue: '4 pm', y: 24 },
                { x: 7, xValue: '1 am', y: 19 }, { x: 8, xValue: '4 am', y: 20 }, { x: 9, xValue: '7 am', y: 20 },
                { x: 10, xValue: '10 am', y: 21 }, { x: 11, xValue: '1 pm', y: 24 }, { x: 12, xValue: '4 pm', y: 24 },
                { x: 13, xValue: '1 am', y: 21 }, { x: 14, xValue: '4 am', y: 21 }, { x: 15, xValue: '7 am', y: 21 },
                { x: 16, xValue: '10 am', y: 22 }, { x: 17, xValue: '1 pm', y: 23 }, { x: 18, xValue: '4 pm', y: 24 },
                { x: 19, xValue: '1 am', y: 20 }, { x: 20, xValue: '4 am', y: 19 }, { x: 21, xValue: '7 am', y: 19 },
                { x: 22, xValue: '10 am', y: 18 }, { x: 23, xValue: '1 pm', y: 19 }, { x: 24, xValue: '4 pm', y: 19 },
                { x: 25, xValue: '1 am', y: 16 }, { x: 26, xValue: '4 am', y: 15 }, { x: 27, xValue: '7 am', y: 14 },
                { x: 28, xValue: '10 am', y: 15 }, { x: 29, xValue: '1 pm', y: 16 }, { x: 30, xValue: '4 pm', y: 18 }
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
                maximum: 32
            },
            annotations: [
                {
                    content: '<div id="chart_image"><img src="src/chart/images/cloudy.png" alt="Cloud Picture" style="width: 41px; height: 41px"/></div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: Browser.isDevice ? '6%' : '3%',
                    y: '9%'
                },
                {
                    content: '<div id="days" style="font-size: 11px;">Friday, 01:00 am</div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: Browser.isDevice ? '87%' : '94%',
                    y: Browser.isDevice ? '10%' : '11%',
                },
                {
                    content: '<div id="title" style="font-size: 20px; font-weight: 600">USA, Texas</div>',
                    coordinateUnits: 'Pixel',
                    region: 'Chart',
                    x: Browser.isDevice ? '88%' : '93%',
                    y: Browser.isDevice ? '4%' : '3%'
                }
            ],
            zoomSettings: {
                enableSelectionZooming: true,
                toolbarItems: [],
                mode: 'X'
            },
            height: '70%',
            width: Browser.isDevice ? '100%' : '75%',
            legend: {visible: false},
            chartArea: { border: { width: 0 } },

            border: { width: 2 },
            marker: {
                visible: false,
                dataLabel: { visible: true, format: '{value}°C', position: 'Top' }
            },
        };
    },
    provide: {
        chart: [SplineAreaSeries, Category, Zoom, DataLabel, ChartAnnotation]
    },
    methods: {
        load()
      {
        const isDarkTheme = /dark/i.test(selectedTheme) || /contrast/i.test(selectedTheme);
            const buttons = document.querySelectorAll('.custom-button');
            const buttonContainer = document.getElementById('button-container');
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
        annotationRender(args) {
            if (args.content.id === 'container_Annotation_0') {
                args.content.innerHTML = `<div id="chart_cloud" align="center"><img src="src/chart/images/${this.image}.png" alt="Cloud Picture" style="width: 41px; height: 41px; margin-right: 10px;"/><b align="center" style="font-size: 23px">${this.count} <span style="font-size: 12px; vertical-align: super;">°C | °F</span></b></div>`;
            } else if (args.content.id === 'container_Annotation_1') {
                args.content.innerHTML = Browser.isDevice ? `<div  id="days" style="font-size: 9px;">${this.day}, 01:00 am</div>` : `<div  id="days" style="font-size: 11px;">${this.day}, 01:00 am</div>`;
                if (this.day === 'Saturday' || this.day === 'Tuesday') {
                    Browser.isDevice ? args.location.x -= 8 : args.location.x -= 12;
                } else if (this.day === 'Sunday') {
                    Browser.isDevice ? args.location.x -= 5 : args.location.x -= 8;
                } else if (this.day === 'Monday') {
                    args.location.x -= 10
                }
            } else {
                args.content.innerHTML = Browser.isDevice ? `<div id="title" style="font-size: 16px; font-weight: 600">USA, Texas</div>` : `<div id="title" style="font-size: 20px; font-weight: 600">USA, Texas</div>`;
            }
        },
        updateChart(buttonId, img, tempCount, chartDay, zoomPos, zoomFactor) {
            this.image = img;
            this.count = tempCount;
            this.day = chartDay;
            this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = zoomPos;
            this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = zoomFactor;
            this.$refs.chart.ej2Instances.duration = 600;
            const buttons = document.querySelectorAll('.custom-button');
            buttons.forEach(button => button.classList.remove('active'));
            const selectedButton = document.getElementById(buttonId);
            if (selectedButton) {
                selectedButton.classList.add('active');
            }
        }
    },
    mounted() {
        document.getElementById('friday').onclick = () => this.updateChart('friday', 'sunny_image', 25, 'Friday', 0, 0.175);
        document.getElementById('saturday').onclick = () => this.updateChart('saturday', 'sunny_image', 25, 'Saturday', 0.206, 0.175);
        document.getElementById('sunday').onclick = () => this.updateChart('sunday', 'cloudy', 24, 'Sunday', 0.413, 0.175);
        document.getElementById('monday').onclick = () => this.updateChart('monday', 'cloudy', 19, 'Monday', 0.620, 0.175);
        document.getElementById('tuesday').onclick = () => this.updateChart('tuesday', 'rainy', 18, 'Tuesday', 0.827, 0.175);
    }
};
</script>
  
<style>
#control-container {
    padding: 0px !important;
}

#button-container {
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

.custom-button {
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
.custom-button:not(:last-child):not(.active)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    /* Width of the line */
    height: 80%;
    /* Height of the line, adjust as needed */
    background-color: rgba(0, 0, 0, 0.2);
    /* Light shadow color */
}

/* Specifically remove the line from the Tuesday button */
.custom-button.no-line::after {
    display: none;
}

.custom-button img {
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


.custom-button.active {
    box-shadow: 0 0 0 2px rgb(237, 236, 236);
    /* Create an outward border effect */
    z-index: 2;
    /* Ensure the selected button is above other buttons and lines */
}
</style>
  