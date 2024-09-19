<template>
  <div class="control-pane">
    <div class="control-section">
      <div class="description-container e-card">
        <div class="e-card-header-title" style="font-weight: 600">Smart Weather Prediction</div>
        <div class="e-card-content">
          <p>
            This sample demonstrates the integration of AI to automatically forecast weather conditions in the United
            States for the next five days, utilizing marker templates within the Map Component.
          </p>
        </div>
      </div>
      <div id="container">
        <ejs-maps ref="mapRef" id="Maps" :height="'630px'" :centerPosition="centerPosition" :margin="margin"
          :zoomSettings="zoomSettings" :annotations="annotations" @loaded="onMapsLoaded">
          <e-layers>
            <e-layer :urlTemplate="'https://a.tile.openstreetmap.org/level/tileX/tileY.png'"
              :tooltipSettings="tooltipSettings" :markerSettings="markerSettings">
            </e-layer>
          </e-layers>
          <e-annotations>
            <e-annotation :content="annotationContent" :x="'80%'" :y="'0%'" :zIndex="1"></e-annotation>
          </e-annotations>
        </ejs-maps>
        <br>
        <div style="display: flex; justify-content: center; align-items: center">
          <ejs-button style="margin: 5px" id="tomorrowButton" @click="getWeatherData('Tomorrow')"
            :content="'Tomorrow'"></ejs-button>
          <ejs-button style="margin: 5px" id="secondDayButton" @click="getWeatherData('Second Day')"
            :content="secondDayText"></ejs-button>
          <ejs-button style="margin: 5px" id="thirdDayButton" @click="getWeatherData('Third Day')"
            :content="thirdDayText"></ejs-button>
          <ejs-button style="margin: 5px" id="fourthDayButton" @click="getWeatherData('Fourth Day')"
            :content="fourthDayText"></ejs-button>
          <ejs-button style="margin: 5px" id="fifthDayButton" @click="getWeatherData('Fifth Day')"
            :content="fifthDayText"></ejs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapsComponent, LayerDirective, LayersDirective, Marker, MapsTooltip, Annotations, Zoom, AnnotationsDirective, AnnotationDirective } from '@syncfusion/ej2-vue-maps';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { getAzureChatAIRequest } from '../common/openai';

export default {
  name: 'WeatherPrediction',
  components: {
    'ejs-maps': MapsComponent,
    'e-layer': LayerDirective,
    'e-layers': LayersDirective,
    'e-annotation': AnnotationDirective,
    'e-annotations': AnnotationsDirective,
    'ejs-button': ButtonComponent
  },
  data() {
    const todayDate = new Date();
    const secondDayDate = new Date(todayDate);
    secondDayDate.setDate(todayDate.getDate() + 2);
    const thirdDayDate = new Date(todayDate);
    thirdDayDate.setDate(todayDate.getDate() + 3);
    const fourthDayDate = new Date(todayDate);
    fourthDayDate.setDate(todayDate.getDate() + 4);
    const fifthDayDate = new Date(todayDate);
    fifthDayDate.setDate(todayDate.getDate() + 5);

    return {
      markerDataSource: [],
      centerPosition: {
        latitude: 35.07653392014242,
        longitude: -95.40586193773237
      },
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      zoomSettings: {
        enable: false,
        maxZoom: 19,
        zoomFactor: 5,
        toolbarSettings: {
          buttonSettings: {
            toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
          }
        }
      },
      tooltipSettings: {
        visible: true,
        valuePath: 'name'
      },
      markerSettings: [{
        visible: true,
        template: '<div style="display:flex; transform:translate(-50%, -50%)">' +
          '<div style="background-color:black; opacity:0.8; align-content:center; padding-left:5px;padding-right:5px">' +
          '<img class="markerTemplate" src="${weatherImage}" alt="Weather" height="35px" width="35px" />' +
          '</div>' +
          '<div style="background-color:#fff; opacity:0.8; padding-left:5px;padding-right:5px">' +
          '<span style="font-size:12px;font-weight:bold">${city_name}</span><br />' +
          '<span style="font-size:16px;font-weight:bold">${temperature} °C</span>' +
          '</div>' +
          '</div>',
        dataSource: [],
        animationDuration: 0,
      }],
      annotations: [{
        content: '<div style="display: flex">' +
          '<div style="background-color: dodgerblue; color:white; font-size: 16px; padding:5px 10px 5px; width: max-content;">Weather Forecast</div>' +
          '<div style="background-color: white; color:black; font-size: 16px; padding:5px 10px 5px">Today</div>' +
          '</div>',
        x: '80%',
        y: '0%',
        zIndex: '1'
      }],
      annotationContent: '<div style="display: flex">' +
        '<div style="background-color: dodgerblue; color:white; font-size: 16px; padding:5px 10px 5px; width: max-content;">Weather Forecast</div>' +
        '<div style="background-color: white; color:black; font-size: 16px; padding:5px 10px 5px">Today</div>' +
        '</div>',
      secondDayText: secondDayDate.toLocaleDateString('en-US', { weekday: 'long' }),
      thirdDayText: thirdDayDate.toLocaleDateString('en-US', { weekday: 'long' }),
      fourthDayText: fourthDayDate.toLocaleDateString('en-US', { weekday: 'long' }),
      fifthDayText: fifthDayDate.toLocaleDateString('en-US', { weekday: 'long' }),
    };
  },
  methods: {
    onMapsLoaded() {
      if (this.markerDataSource.length === 0) {
        this.getWeatherData('Today');
      }
    },
    async getWeatherData(day) {
      let weatherDataRequest;
      let offset = 0;
      let buttonContent = 'Today';

      if (['Tomorrow', 'Second Day', 'Third Day', 'Fourth Day', 'Fifth Day'].includes(day)) {
        offset = ['Tomorrow', 'Second Day', 'Third Day', 'Fourth Day', 'Fifth Day'].indexOf(day) + 1;
        buttonContent = day === 'Tomorrow' ? 'Tomorrow' : this[`${day.toLowerCase().replace(' ', '')}Text`];
        const dateTime = new Date();
        dateTime.setDate(dateTime.getDate() + offset);
        const date = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;
        weatherDataRequest = this.generateWeatherRequest(date);
      } else {
        weatherDataRequest = this.generateWeatherRequest('today');
      }

      const data = await weatherDataRequest;
      if (data) {
        let cleanedData = data;
        if (data.indexOf('```json') > -1) {
          cleanedData = data.split('```json')[1].trim().split("```")[0].trim();
        }
        const parsedData = JSON.parse(cleanedData);
        this.markerDataSource = parsedData.map(marker => ({
          ...marker,
          weatherImage: this.getWeatherImage(marker.weather_condition)
        }));
        this.$refs.mapRef.layers[0].markerSettings[0].dataSource = this.markerDataSource;
        this.annotationContent = `<div style="display: flex">
          <div style="background-color: dodgerblue; color:white; font-size: 16px; padding:5px 10px 5px; width: max-content;">Weather Forecast</div>
          <div style="background-color: white; color:black; font-size: 16px; padding:5px 10px 5px">${buttonContent}</div>
        </div>`;
      }
    },
    generateWeatherRequest(date) {
      const prompt = `Generate ${date}'s temperature in Celsius for 15 important cities in USA as a JSON object, with fields such as "city_name", "temperature", "latitude", "longitude" and "weather_condition". The weather conditions must be sunny day, rainy day, cloudy day, snowy day and foggy day based on the temperature of the state. Strictly provide flat JSON object list alone without nested objects.`;
      return getAzureChatAIRequest({ messages: [{ role: 'user', content: prompt }] });
    },
    getWeatherImage(condition) {
      const conditions = {
        'sunny day': 'https://ej2.syncfusion.com/demos/src/maps/images/weather-clear.png',
        'snowy day': 'weather-snow.svg',
        'foggy day': 'weather-foggy.svg',
        'cloudy day': 'https://ej2.syncfusion.com/demos/src/maps/images/weather-clouds.png',
        'rainy day': 'https://ej2.syncfusion.com/demos/src/maps/images/weather-rain.png'
      };
      return conditions[condition.toLowerCase()] || 'weather-unknown';
    }
  },
  provide: {
    maps: [Marker, MapsTooltip, Zoom, Annotations]
  }
};
</script>