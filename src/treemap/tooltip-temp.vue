<template>
    <div id="Tooltip">
        <div id='displayAirports'>
            <div id="airplaneicon" style="float:left;height:32px;width:32px;">
            </div>
            <div id="value" style="float:left;">
                <span id="label" style="margin-left: -5px;">Airports:</span>
                <b style="margin-left: 5px">{{data.Count}}</b>
            </div>
        </div>
    </div>
</template>

<style>
    #airplaneicon {
        background-image: url("./image/airplane.svg");
        background-repeat: no-repeat;
    }
    #displayAirports {
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 6px;
        padding-top: 6px;
        background: #EFEFEF;
        height: 45px;
        width: 140px;
        border: 1px #919191;
        box-shadow: 0px, 2px;
    }
    #value {
        margin-top: 5px;
        color: #585C60;
        font-family: Roboto-Bold;
        font-size: 16px;
    }
    #label {
        padding-left: 8px;
        color: #5D5D5D;
        font-family: Roboto-Regular;
        font-size: 16px;
    }
</style>

<script>

export default {
  data () {
    return {
        data: {}
    }
  },
}

</script>