<template>
  <div>
     <div class="panecontent">
        <label class="h4">JavaScript</label>
        <div class="code-preview">
            <span>var</span> image = document.getElementById("custom-image");
            <div>image.addEventListener("click", function() {</div>
            <div style="padding-left: 20px;"> Code block for click action</div>
            <span> }</span>
        </div>
    </div>
</div>
</template>
<style>
.panecontent .h4 {
        font-size: 16px;
        margin: 0 0 10px;
        font-weight: bold;
    }
</style>
<script>
export default {
    data() {
        return {
            data: {}
        }
    }
}
</script>