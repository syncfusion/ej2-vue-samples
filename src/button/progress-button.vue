<template>
<div class="control-section">
    <div class="sb-progress-button-section">
        <div id="sb-progress-button-control">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Spin Left" :isPrimary="true"></ejs-progressbutton>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Spin Right" :isPrimary="true" :spinSettings="spinRight"></ejs-progressbutton>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Spin Top" :isPrimary="true" :spinSettings="spinTop"></ejs-progressbutton>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Spin Bottom" :isPrimary="true" :spinSettings="spinBottom"></ejs-progressbutton>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton id="roundbtn" :spinSettings="spinCenter" :animationSettings="zoomOut" cssClass="e-round e-small e-success"
                            iconCss="e-btn-sb-icons e-play-icon"></ejs-progressbutton>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton id="contract" ref="contractBtn" content="Contract" :enableProgress="true" cssClass="e-success e-small" :begin="contractBegin"
                            :end="contractEnd"></ejs-progressbutton>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Slide Left" :enableProgress="true" :spinSettings="spinCenter" :animationSettings="slideLeft"
                            cssClass="e-flat e-success"></ejs-progressbutton>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Slide Right" :enableProgress="true" :spinSettings="spinCenter" :animationSettings="slideRight"
                            cssClass="e-outline e-success"></ejs-progressbutton>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton id="zoomin" content="Zoom In" :enableProgress="true" :spinSettings="spinCenter" :animationSettings="zoomIn"
                            cssClass="e-round-corner e-danger"></ejs-progressbutton>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Zoom Out" :enableProgress="true" :spinSettings="spinCenter" :animationSettings="zoomOut"
                            cssClass="e-small e-danger"></ejs-progressbutton>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Download" :enableProgress="true" duration=4000 cssClass="e-hide-spinner e-progress-top"
                            iconCss="e-btn-sb-icons e-download-icon"></ejs-progressbutton>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-progressbutton content="Disabled" :disabled="true"></ejs-progressbutton>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the default functionalities of a progress button. Clicking that button will display a spinner
        and a progress indicator.</p>
</div>
<div id="description">
    <p>
        The progress button visualizes the progression of an operation to indicates the user that a process is happening in the background.
        The progress can be shown with graphics accompanied by a textual representation.
    </p>
    <p>
        In this sample, the progress button contains the content, spinner, progress indicator, and a list of related features that
        can be achieved using
        <code>
                    <a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/progress-button/#content">content,
                    </a>
        </code>
        <code>
                    <a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/progress-button/#cssClass">cssClass,
                    </a>
        </code>and
        <code>
                <a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/progress-button/#enableProgress">enableProgress
                </a>
        </code>property.
    </p>
    <p>
        More information about progress button can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/progress-button/getting-started">
            documentation section</a>.
    </p>
</div>
</div>
</template>

<style>
/* ProgressButton sample icons */
@font-face {
  font-family: "progress-button-icons";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

#sb-progress-button-control .e-btn-sb-icons {
  font-family: "progress-button-icons";
  line-height: 1;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* custom code start */
#sb-progress-button-control {
    width: 100%;
    margin: 6% 0;
    text-align: center;
}

@media only screen and (max-width: 500px) {
    #sb-progress-button-control {
        margin-left: -11%;
    }
}

.sb-progress-button-section {
    width: 80%;
    margin: auto;
}

#sb-progress-button-control .col-xs-12 {
    margin: 18px 0;
}

#contract.e-progress-active .e-btn-content {
    display: none;
}

.material3 #roundbtn .e-play-icon,
.material3-dark #roundbtn .e-play-icon {
    margin-top: -4px;
    margin-left: 2px;
}

.e-bigger .material3 #roundbtn .e-play-icon,
.e-bigger .material3-dark #roundbtn .e-play-icon {
    margin-top: -4px;
    margin-left: 2px;
}
/* custom code end */

#contract {
    transition: all .3s cubic-bezier(.175, .885, .32, 1) 100ms;
}

#sb-progress-button-control .e-play-icon::before {
    content: '\e701';
    font-size: 12px;
}

.e-bigger #sb-progress-button-control .e-play-icon::before {
    font-size: 14px;
}

#sb-progress-button-control .e-download-icon::before {
    content: '\e702';
}

.material #roundbtn .e-play-icon, .material-dark #roundbtn .e-play-icon {
	margin-top: 0px;
	margin-left: 4px; 
}
.e-bigger.material #roundbtn .e-play-icon,
.e-bigger.material-dark #roundbtn .e-play-icon {
	margin-top: 0;
	margin-left: 3px; 
}
.e-bigger.fluent #roundbtn .e-play-icon,
.e-bigger.fluent-dark #roundbtn .e-play-icon
{
	margin-top: -7px;
	margin-left: 5px; 
}

.e-bigger.bootstrap5 #roundbtn .e-play-icon,
.e-bigger.bootstrap5-dark #roundbtn .e-play-icon {
	margin-top: -6px;
	margin-left: 4px;
}

.fluent #roundbtn .e-play-icon,
.fluent-dark #roundbtn .e-play-icon,
.bootstrap5 #roundbtn .e-play-icon,
.bootstrap5-dark #roundbtn .e-play-icon {
	margin-top: -4px;
	margin-left: 3px; 
} 

.tailwind #roundbtn .e-play-icon,
.tailwind-dark #roundbtn .e-play-icon {
	margin-top: -3px;
	margin-left: 3px;
}
.fabric #roundbtn .e-play-icon,
.fabric-dark #roundbtn .e-play-icon,
.highcontrast #roundbtn .e-play-icon {
	margin-top: 0px;
	margin-left: 3px;
}

.e-bigger.fabric #roundbtn .e-play-icon, 
.e-bigger.fabric-dark #roundbtn .e-play-icon {
	margin-top: -2px;
	margin-left: 1px;
}

.bootstrap4 #roundbtn .e-play-icon,
.bootstrap4-dark #roundbtn .e-play-icon
.e-bigger.bootstrap4 #roundbtn .e-play-icon,
.e-bigger.bootstrap4-dark #roundbtn .e-play-icon {
	margin-top: 1px;
	margin-left: 4px;
}

.e-bigger.tailwind #roundbtn .e-play-icon,
.e-bigger.tailwind-dark #roundbtn .e-play-icon,
.bootstrap #roundbtn .e-play-icon,
.bootstrap-dark #roundbtn .e-play-icon,
.e-bigger.bootstrap #roundbtn .e-play-icon,
.e-bigger.bootstrap-dark #roundbtn .e-play-icon{
	margin-top: -2px;
	margin-left: 3px;
}
</style>

<script>
import Vue from 'vue';
import { ProgressButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";

Vue.use(ProgressButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
            spinRight : { position: 'Right' },
            spinTop : { position: 'Top' },
            spinBottom : { position: 'Bottom' },
            spinCenter : { position: 'Center' },
            zoomOut : { effect: 'ZoomOut' },
            slideLeft : { effect: 'SlideLeft' },
            slideRight : { effect: 'SlideRight' },
            zoomIn : { effect: 'ZoomIn' }
        }
    },
    methods: {
        contractBegin: function() {
            this.$refs.contractBtn.ej2Instances.element.classList.add('e-round');
        },
        contractEnd: function() {
            this.$refs.contractBtn.ej2Instances.element.classList.remove('e-round');
        }
    }
});
</script>
