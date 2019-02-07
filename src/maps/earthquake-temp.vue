<template>
    <div id="template">
        <div class="pulse-container">
            <div class="pulse-box">
                <div class="pulse-css"></div>
            </div>                   
        </div>
    </div>
</template>
<style>
    .pulse-css {
    width: 20px;
    height: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background:#E94430;
    position: relative;
    }
    .pulse-css:before, .pulse-css:after {
    content: '';
    width: 20px;
    height: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: #E94430;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transform: scale(0.5);
    transform-origin: center center;
    animation: pulse-me 3s linear infinite;
    }
    .pulse-css:after {
    animation-delay: 2s;
    }
    @keyframes pulse-me {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    50% {
        opacity: 0.3;
    }
    70% {
        opacity: 0.1;
    }
    100% {
        transform: scale(5);
        opacity: 0;
    }
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