import {
    ChartTheme,
    ISparklineLoadEventArgs,
    SparklineTheme
  } from "@syncfusion/ej2-vue-charts";
export let loadSparkLineTheme = (args?: ISparklineLoadEventArgs): SparklineTheme => {
    let selectedTheme: string = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Tailwind3";
    let theme: SparklineTheme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
      .replace(/-dark/i, "Dark")
      .replace(/light/i, "Light")
      .replace(/contrast/i, "Contrast")
      .replace(/-highContrast/i, "HighContrast") as ChartTheme;
      if (args) {
        args.sparkline.theme = theme;
      }
        return theme;
};