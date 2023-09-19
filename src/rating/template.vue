<template>
    <div class="col-lg-12 control-section">
        <div id="template-rating-control">
            <div class="rating-content" >
                <label>Font Icon</label><br/>
                <ejs-rating id='rating1' :emptyTemplate= "'emptyFont'" value="3.0">
                <template v-slot:emptyFont>
                    <span class='custom-font rating-icon-heart'></span>
                </template>
                </ejs-rating>
            </div>
            <div class="rating-content custom-svg">
                <label>SVG Icon</label><br/>
                <ejs-rating id='rating2' :emptyTemplate="'emptyTemplate'" :fullTemplate="'fullTemplate'" :enableAnimation='false' value="3.0">
                <template v-slot:emptyTemplate>
                    <svg width="35" height="25" class="e-rating-svg-icon">
                        <rect width="35" height="25" fill="transparent" style="stroke-width:2;stroke:rgb(173,181,189)"/>
                    </svg>
                </template>
                <template v-slot:fullTemplate="{data}">
                    <svg width="35" height="25" class="e-rating-svg-icon">
                        <defs>
                            <linearGradient :id="['grad'+data.index]" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop class="start" offset="0%" />
                                <stop class="end" offset="100%" />
                            </linearGradient>
                        </defs>
                        <rect width="35" height="25" :fill="['url(#grad'+data.index+')']" style="stroke-width:2;stroke:rgb(173,181,189)"/>
                    </svg>
                </template>
                </ejs-rating>
            </div>
            <div class="rating-content">
                <label>Emoji Icon</label><br/>
                <ejs-rating id='rating3' :emptyTemplate="'template'" :enableAnimation='false' :enableSingleSelection='true' value= "3.0">
                    <template v-slot:template="{data}">
                        <span v-if='data.index==0' class='angry emoji'>&#128545;</span>
                        <span v-else-if='data.index==1' class='disagree emoji'>&#128577;</span>
                        <span v-else-if='data.index==2' class='neutral emoji'>&#128528;</span>
                        <span v-else-if='data.index==3' class='agree emoji'>&#128578;</span>
                        <span v-else class='happy emoji'>&#128512;</span>    
                    </template>
                </ejs-rating>
            </div>
            <div class="rating-content">
                <label>Customization</label><br/>
                <ejs-rating id='rating4' cssClass="custom-icon" value="3.0" :enableAnimation='false'/>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates customization of rating items using templates in the Vue Rating component.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, rating item stars are customized using <code>emptyTemplate</code>, which defines the unrated items appearance, and <code>fullTemplate</code>, which defines the rated items appearance. 
            </p>
        </div>
    </div>
</template>
<style>
#template-rating-control .rating-content {
    width: 240px;
    margin: 15px 0;
    min-height: 75px;
    padding:0;
    text-align: center;
}
.e-bigger #template-rating-control .rating-content {
    width: 260px;
    margin: 15px 0;
    min-height: 75px;
    padding:0;
    text-align: center;
}
#template-rating-control {
    margin: 6% auto;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#template-rating-control .e-rating-container .custom-font {
    background: linear-gradient(to right, rgb(254,87,133,255) var(--rating-value), transparent var(--rating-value));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgb(254,87,133,255)
}

#template-rating-control .custom-icon .e-icons::before{
    content: "\e700";
    font-family: 'sb_rating' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
}

#template-rating-control .custom-svg .e-rating-item-container{
    padding: 0px;
}

@font-face {
font-family: 'rating';
src:
url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
font-weight: normal;
font-style: normal;
}

[class^="rating-icon-"], [class*=" rating-icon-"] {
font-family: 'rating' !important;
speak: none;
font-style: normal;
font-weight: normal;
font-variant: normal;
text-transform: none;
line-height: 1;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

.rating-icon-heart:before { content: "\e702"; }

@font-face {
font-family: 'sb_rating';
src:
url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlm4nYNCgAAAcgAAABAaGVhZCKFmE8AAADQAAAANmhoZWEIVQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAgAAAAAAHAAAAABm1heHABDQAcAAABCAAAACBuYW1ldL1RdQAAAggAAAI9cG9zdHSFYngAAARIAAAALgABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAAXRt7iF8PPPUACwQAAAAAAN+3qa0AAAAA37eprQAAAAAD+AP4AAAACAACAAAAAAAAAAEAAAACABAAAQAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAIAAAAAEAAAAAA/gD+AAPAAABFzcHFwcXJwcnBzcnNycXAgB47EPX10PseHjsQ9fXQ+wD+NdD7Hh47EPX10PseHjsQwAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAkAAQABAAAAAAACAAcACgABAAAAAAADAAkAEQABAAAAAAAEAAkAGgABAAAAAAAFAAsAIwABAAAAAAAGAAkALgABAAAAAAAKACwANwABAAAAAAALABIAYwADAAEECQAAAAIAdQADAAEECQABABIAdwADAAEECQACAA4AiQADAAEECQADABIAlwADAAEECQAEABIAqQADAAEECQAFABYAuwADAAEECQAGABIA0QADAAEECQAKAFgA4wADAAEECQALACQBOyBzYl9yYXRpbmdSZWd1bGFyc2JfcmF0aW5nc2JfcmF0aW5nVmVyc2lvbiAxLjBzYl9yYXRpbmdGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAHMAYgBfAHIAYQB0AGkAbgBnAFIAZQBnAHUAbABhAHIAcwBiAF8AcgBhAHQAaQBuAGcAcwBiAF8AcgBhAHQAaQBuAGcAVgBlAHIAcwBpAG8AbgAgADEALgAwAHMAYgBfAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAgEDAARzdGFyAAAAAA==) format('truetype');
font-weight: normal;
font-style: normal;
}

[class^="sf-rating-"], [class*=" sf-rating-"] {
font-family: 'sb_rating' !important;
speak: none;
font-style: normal;
font-weight: normal;
font-variant: normal;
text-transform: none;
line-height: 1;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

.sf-icon-star:before { content: "\e700"; }

.e-rating-item-container:not(.e-rating-selected) .emoji {
        filter: grayscale(1);
    }

.e-rating-svg-icon #grad0 .start {
    stop-color: #FF0000;
}

.e-rating-svg-icon #grad0 .end ,
.e-rating-svg-icon #grad1 .start {
    stop-color: #ff5101;
}

.e-rating-svg-icon #grad1 .end ,
.e-rating-svg-icon #grad2 .start {
    stop-color: #ffc801;
}

.e-rating-svg-icon #grad2 .end ,
.e-rating-svg-icon #grad3 .start {
    stop-color: #dbe300;
}

.e-rating-svg-icon #grad3 .end ,
.e-rating-svg-icon #grad4 .start {
    stop-color: #8bc301;
}

.e-rating-svg-icon #grad4 .end {
    stop-color: #4eaa01;
}
</style>

<script>
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";

export default {
    data:function() {    
        return {};
    },
    components: { 'ejs-rating': RatingComponent }
};
</script>
