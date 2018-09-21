<template>
    <div class="event-tooltip">
        <div class='airline-header'>
            <div :class="['airline-logo ' + `${getAirwaysImage(data.AirlineId)}`]"></div>
            <div class='airline-name'>{{getAirwaysName(data.AirlineId)}}</div>
        </div>
        <div class='airline-details text-size'>
            <div class='airline-title'>Fare Details:</div>
            <div class='airline-fare'>${{data.Fare}} per person</div>
        </div>
        <div class='airline-flex-row text-size'>
            <div class='airline-flex-col airline-title border-right'>Arrival</div>
            <div class='airline-flex-col airline-title text-right'>Depature</div>
        </div>
        <div class='airline-flex-row text-size'>
            <div class='airline-flex-col border-right'>{{getFormattedTime(data.StartTime)}}</div>
            <div class='airline-flex-col margin-right text-right'>{{getFormattedTime(data.EndTime)}}</div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { Internationalization } from '@syncfusion/ej2-base';

    let instance: Internationalization = new Internationalization();
    export default {
        data() {
            return {
                data: {}
            }
        },
        methods: {
            getAirwaysName: function (value: number) {
                return (value === 1) ? 'Airways 1' : (value === 2) ? 'Airways 2' : 'Airways 3';
            },
            getAirwaysImage: function (value: number) {
                return (value === 1) ? 'airways-1' : (value === 2) ? 'airways-2' : 'airways-3';
            },
            getFormattedTime: function (date: Date) {
                return instance.formatDate(date, { skeleton: 'Hm' });
            }
        }
    }

</script>