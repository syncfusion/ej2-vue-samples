import { ChartTheme, IStockChartEventArgs } from "@syncfusion/ej2-vue-charts";

export let loadStockChartTheme = (args?: IStockChartEventArgs, isGradient?: Boolean): ChartTheme | string => {
    let selectedTheme: string = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Tailwind3";
    let theme: ChartTheme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
      .replace(/-dark/i, "Dark")
      .replace(/light/i, "Light")
      .replace(/contrast/i, "Contrast")
      .replace(/-highContrast/i, "HighContrast") as ChartTheme;
      if (args) {
        args.stockChart.theme = theme;
        return isGradient ? selectedTheme : args.stockChart.theme;
      }
      else if (isGradient && !args) {
        return selectedTheme;
       }
       else {
        return theme;
       }
}