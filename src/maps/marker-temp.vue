<template>
<div id="template">
    <div class="toolback">
        <div class="listing2">
            <center>
                {{data.name}}
            </center>
        </div>
        <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">                    
        <div>
            <span class="listing1">Country : </span><span class="listing2">{{data.Country}}</span>
        </div>
        <div>
            <span class="listing1">Population : </span><span class="listing2">{{data.population}}</span>
        </div> 
    </div>        
</div>
</template>
<style>
    .toolback {
        border-radius: 4px;
        border: 1px #abb9c6;
        background: rgba(53, 63, 76, 0.90);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        width: 165px;
    }
    .listing1 {
        font-size:13px;
        color:#cccccc
    }
    .listing2 {
        font-size:13px;
        color:#ffffff;
        font-weight: 500;
    }
</style>

<script>

import { topPopulation } from './map-data/marker-location';

export default {
  data () {
    return {
        data: {}
    }
  },
}
</script>
