<template>
  <div id="maps-annotation">
      <div id="annotation">
          <div>
              <p style="margin-left:10px;font-size:13px;font-weight:500">Facts about Africa</p>
          </div>
          <hr style="margin-top:-3px;margin-bottom:10px;border:0.5px solid #DDDDDD">
          <div>
              <ul style="list-style-type:disc; margin-left:-20px;margin-bottom:2px; font-weight:400">
                  <li>Africa is the second largest and second most populated continent in the world.</li>
                  <li style="padding-top:5px;">Africa has 54 sovereign states and 10 non-sovereign territories.</li>
                  <li style="padding-top:5px;">Algeria is the largest country in Africa, where as Mayotte is the smallest.</li>
              </ul>
          </div>
      </div>
  </div>
</template>
<style>
    #annotation {
        color: #DDDDDD;
		font-size: 12px;
		font-family: Roboto;
        background: #3E464C;
        margin: 20px;
        padding: 10px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        width: 300px;
        -moz-box-shadow: 0px 2px 5px #666;
        -webkit-box-shadow: 0px 2px 5px #666;
        box-shadow: 0px 2px 5px #666;
    }
    .country-label {
        color: white;
        font-size: 25px;
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