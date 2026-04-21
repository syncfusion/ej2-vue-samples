import {
    ChartTheme,
    SankeyLoadedEventArgs
  } from "@syncfusion/ej2-vue-charts";
export let loadSankeyChartTheme = (args?: SankeyLoadedEventArgs): ChartTheme => {
    let selectedTheme: string = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Tailwind3";
    let theme: ChartTheme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
      .replace(/-dark/i, "Dark")
      .replace(/light/i, "Light")
      .replace(/contrast/i, "Contrast")
      .replace(/-highContrast/i, "HighContrast") as ChartTheme;
      if (args) {
        args.chart.theme = theme;
      }
        return theme;
};
