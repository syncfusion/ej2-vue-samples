<template>
  <div>
    <div class="pane1content">
        <h3 class="h3">HTML</h3>
        <div class="code-preview">                        
            &lt;<span>!DOCTYPE html></span>
            <div>&lt;<span>html></span></div>
            <div>&lt;<span>body></span></div>
            &lt;<span>div</span> id="custom-image">
            <div style="margin-left: 5px">&lt;<span>img</span> src="src/albert.png" alt="albert"></div>
            <div>&lt;<span>div</span>&gt;</div>
            <div>&lt;<span>/body></span></div>
            <div>&lt;<span>/html></span></div>
        </div>
    </div>
</div>
</template>
<style>
    .panecontent {
        width: auto;
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
