import { ChartTheme, ILoadedEventArgs, IRangeLoadedEventArgs } from "@syncfusion/ej2-vue-charts";


export let loadRangeNavigatorTheme = (args?: ILoadedEventArgs | IRangeLoadedEventArgs, isGradient?: boolean): ChartTheme | string => {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'tailwind3';

    const formattedTheme: string = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

    if (args) {
        if ('chart' in args) {
            args.chart.theme = formattedTheme as ChartTheme;
            return isGradient ? selectedTheme : args.chart.theme;
        }
        else if ('rangeNavigator' in args) {
            args.rangeNavigator.theme = formattedTheme as ChartTheme;
            return isGradient ? selectedTheme : args.rangeNavigator.theme;
        }
    }

    else if (isGradient && !args) {
        return selectedTheme;
    }

    return formattedTheme;
}