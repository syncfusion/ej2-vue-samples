<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
          <ejs-daterangepicker :placeholder="waterMarkText">
            <e-presets>
                <e-preset :label="presetLabels[0]" :start='weekStartDate' :end='weekEndDate'></e-preset>
                <e-preset :label="presetLabels[1]" :start='monthStartDate' :end='monthEndDate'></e-preset>
                <e-preset :label="presetLabels[2]" :start='lastMonthStartDate' :end='lastMonthEndDate'></e-preset>
                <e-preset :label="presetLabels[3]" :start='lastYearStartDate' :end='lastYearEndDate'></e-preset>
            </e-presets>
        </ejs-daterangepicker>
    </div>
    <div id="action-description">
    <p>
       Click/Touch the DateRangePicker popup icon to view and select the list of custom preset ranges. Select the custom range option which is provided at the end of this list to open date range picker popup calendar for selecting custom ranges.
    </p>
</div>
<div id="description">
    <p>
        The <code>DateRangePicker</code> component has presets support to display the collection of required ranges in the popup element. User can select a required range from the list and the selected range value will be updated in the component.
    </p>
    <p>More information on the DateRangePicker instantiation can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/customization.html#preset-ranges" target="_blank"> documentation section</a>.</p>

</div>
</div>
</template>

<script>

import { DateRangePickerComponent, PresetDirective, PresetsDirective } from '@syncfusion/ej2-vue-calendars';

export default {
    data: function(){
        const today = new Date();

        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - ((today.getDay() + 7) % 7));

        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);

        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

        const lastYearStart = new Date(today.getFullYear() - 1, 0, 1);
        const lastYearEnd = new Date(today.getFullYear() - 1, 11, 31);

        return {
           waterMarkText : 'Selct a Range',
           presetLabels: ['This Week', 'This Month', 'Last Month', 'Last Year'],
           weekStartDate: weekStart,
           weekEndDate: weekEnd,
           monthStartDate: monthStart,
           monthEndDate: monthEnd,
           lastMonthStartDate: lastMonthStart,
           lastMonthEndDate: lastMonthEnd,
           lastYearStartDate: lastYearStart,
           lastYearEndDate: lastYearEnd,
            labelsByLanguage: {
                en: ['This Week', 'This Month', 'Last Month', 'Last Year'],
                de: ['Diese Woche', 'Dieser Monat', 'Letzter Monat', 'Letztes Jahr'],
                'fr-CH': ['Cette semaine', 'Ce mois-ci', 'Le mois dernier', 'L\'année dernière'],
                ar: ['هذا الأسبوع', 'هذا الشهر', 'الشهر الماضي', 'السنة الماضية'],
                zh: ['本周', '本月', '上个月', '去年']
            }
        };
    },
    methods: {
        updatePresetLabels(languageCode) {
            // Update the preset labels based on the selected language
            this.presetLabels = this.labelsByLanguage[languageCode] || this.labelsByLanguage['en'];
        }
    },
    mounted() {
        const cultureElement = document.getElementById("sb-setting-culture_hidden") || null;
        if (cultureElement) {
            cultureElement.addEventListener('change', (event) => {
                const selectedLanguage = event.target.value;
                this.updatePresetLabels(selectedLanguage);
            });
        }
    },
    components: { 
        'ejs-daterangepicker': DateRangePickerComponent,
        'e-presets': PresetsDirective,
        'e-preset': PresetDirective
    }
};
</script>



<style scoped>
#wrapper {
        max-width: 246px;
        margin: 30px auto;
        padding-top: 15px;
    }
</style>
