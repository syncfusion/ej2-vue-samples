<template>
<div id="markercircle">
    <svg width="30" height="30">
        <circle class="svgcircle" cx=15 cy=15 r=6 stroke='rgba(77, 77, 77, 0.8)'  fill='rgba(0, 77, 153, 0.8)'/>
    </svg>
</div>
</template>
<style>	
	.svgcircle{
        -webkit-animation: opac 1.5s ease-out infinite;
        animation: opac 1.5s ease-out infinite;
    }
</style>