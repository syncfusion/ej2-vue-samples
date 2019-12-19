<template>
    <div id="template">
        <div class="toolback">
            <div class="listing2">
                <center>
                    {{data.country}}                                        
                </center>
            </div>
            <hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">
            <div>
                <span class="listing1">Finalist : </span><span class="listing2">{{data.value1}}</span>
            </div> 
            <div>
                <span class="listing1">Win : </span><span class="listing2">{{data.value2}}</span>
            </div>
        </div>    
    </div>
</template>

<style>
   .toolback {
       width: 100px;
       border-radius: 4px;
       border: 1px #abb9c6;
       background: rgba(53, 63, 76, 0.90);
       box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);
       padding-bottom: 5px;
       padding-top: 10px;
       padding-left: 10px;
       padding-right: 10px
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

export default {
  data () {
    return {
        data: {}
    }
  },
}

</script>