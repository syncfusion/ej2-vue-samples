<template>
  <div id="weather_card" class="e-card" tabindex="0" role="button">
    <div class="e-card-header">
      <div class="e-card-header-caption">
        <div class="e-card-header-title">Today</div>
        <div class="e-card-sub-title">New York - Scattered Showers.</div>
      </div>
    </div>
    <div class="e-card-header weather_report">
      <div class="e-card-header-image"></div>
      <div class="e-card-header-caption">
        <div class="e-card-header-title">1º / -4º</div>
        <div class="e-card-sub-title">Chance for snow: 100%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard"
};
</script>

<style scoped>
#weather_card.e-card {
  background-image: url('https://ej2.syncfusion.com/javascript/demos/src/card/images/weather.png');
  width: 420px;
  border-radius: 8px;
  overflow: hidden;
}

#weather_card.e-card .e-card-header-caption .e-card-header-title,
#weather_card.e-card .e-card-header-caption .e-card-sub-title {
  color: white;
}

#weather_card.e-card .weather_report .e-card-header-caption {
  text-align: right;
}

#weather_card.e-card .e-card-header.weather_report .e-card-header-image {
  background-image: url('https://ej2.syncfusion.com/javascript/demos/src/card/images/rainy.svg');
  width: 70px;
  height: 70px;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>