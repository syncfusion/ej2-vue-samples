<template>
    <div class="control-section ">
        <div align='center' class="annotation ">
            <ejs-chart align='center' ref="chart" style='display:block;' :title='title' :primaryXAxis='primaryXAxis'
                :primaryYAxis='primaryYAxis' :load='load' :chartArea='chartArea' :tooltip='tooltip'
                :axisLabelRender='axisLabelRender' :width='width' :theme='theme' :annotations='annotations'>
                <e-series-collection>
                    <e-series :dataSource='dataSource' type='Area' xName='Distance' yName='Speed' :border='border'
                        :animation="animation">
                    </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates speed data for the Interlagos circuit.
                In area-based series, data points can be annotated using symbols.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure the annotation feature in charts. An annotation
                can hold any HTML element as its content.
                In this example, an area chart depicting speed data for the Interlagos circuit has the circuit session
                data as its annotation content.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Annotation feature,
                we need to inject
                <code>ChartAnnotationService</code> into the <code>provide</code> option.
            </p>
            <p>
                More information on the annotations can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/chart-annotations/" aria-label="Navigate to the documentation for Annotations in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
        <svg style="height: 0">
            <defs>
                <linearGradient id="gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0"
                    y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0"
                    y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                    y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                    y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
            </defs>
        </svg>
    </div>

</template>
<style>
.control-section {
    min-height: 450px;
}

#dark-gradient-chart stop {
    stop-color: rgb(247, 206, 105);
}

#gradient-chart stop {
    stop-color: rgb(247, 206, 105, 0.5);
}

.chart-gradient stop[offset="0"] {
    stop-opacity: 0.9;
}

.chart-gradient stop[offset="1"] {
    stop-opacity: 0.3;
}

div[id*=_Annotation_3] {
    transform: translate(0%, -50%) !important;
}

.annotaion ellipse[id*=_Trackball_0] {
    fill: rgb(247, 206, 105) !important;
    stroke: rgb(247, 206, 105, 0.5) !important;
}

annotaion ellipse[id*=_Trackball_1] {
    fill: rgb(247, 206, 105) !important;
    stroke-width: 1 !important;
    stroke: white !important;
}

.e-view.highcontrast .box-bottom, .e-view.tailwind .box-bottom, .e-view.tailwind3 .box-bottom, .e-view.fluent .box-bottom, .e-view.fluent2 .box-bottom, .e-view.material .box-bottom, .e-view.bootstrap .box-bottom,.e-view.bootstrap5 .box-bottom,.e-view.bootstrap4 .box-bottom, .e-view.fabric .box-bottom,.e-view.highcontrast .first-box-bottom,
.e-view.tailwind .first-box-bottom, .e-view.tailwind3 .first-box-bottom, .e-view.fluent .first-box-bottom, .e-view.fluent2 .first-box-bottom, .e-view.material .first-box-bottom,.e-view.bootstrap .first-box-bottom, .e-view.bootstrap5 .first-box-bottom, .e-view.bootstrap4 .first-box-bottom ,.e-view.fabric .first-box-bottom, .e-view.highcontrast .first-box-bottom,
.e-view.tailwind .first-box-bottom, .e-view.tailwind3 .first-box-bottom, .e-view.fluent .second-box-bottom, .e-view.fluent2 .second-box-bottom, .e-view.tailwind3 .second-box-bottom, .e-view.material .second-box-bottom,.e-view.bootstrap .second-box-bottom, .e-view.bootstrap5 .second-box-bottom,.e-view.bootstrap4 .second-box-bottom, .e-view.fabric .second-box-bottom, .e-view.highcontrast .third-box-bottom,
.e-view.tailwind .first-box-bottom, .e-view.tailwind3 .first-box-bottom, .e-view.fluent .third-box-bottom, .e-view.fluent2 .third-box-bottom, .e-view.tailwind3 .third-box-bottom, .e-view.material .third-box-bottom,.e-view.bootstrap .third-box-bottom,.e-view.bootstrap5 .third-box-bottom,.e-view.bootstrap4 .third-box-bottom,.e-view.fabric .third-box-bottom,.e-view.highcontrast .box-left,
.e-view.material .first-box-bottom, .e-view.tailwind .first-box-bottom, .e-view.tailwind3 .first-box-bottom, .e-view.fluent .box-left, .e-view.tailwind3 .box-left, .e-view.fluent2 .box-left, .e-view.bootstrap .box-left, .e-view.bootstrap5 .box-left, .e-view.bootstrap4 .box-left,.e-view.fabric .box-left,.e-view.material3 .box-bottom, .e-view.material3 .first-box-bottom , .e-view.material3 .second-box-bottom,.e-view.material3 .third-box-bottom, .e-view.material3 .box-left {
    position: relative;
    background: #fdf7e7;
    border: 1.5px solid black;
    padding: 2px 3px 2px 3px;
    border-radius: 0.2em;
    font-size: 12px;
    color: 'black'
}
.e-view.highcontrast .box-bottom,.e-view.material-dark .box-bottom, .e-view.tailwind-dark .box-bottom, .e-view.fluent-dark .box-bottom,  .e-view.fluent2-dark .box-bottom, .e-view.tailwind3-dark .box-bottom, .e-view.fluent2-highcontrast .box-bottom, .e-view.bootstrap-dark .box-bottom,.e-view.bootstrap5-dark .box-bottom,.e-view.fabric-dark .box-bottom,.e-view.highcontrast .first-box-bottom,
.e-view.material-dark  .first-box-bottom, .e-view.tailwind-dark .first-box-bottom, .e-view.fluent-dark .first-box-bottom, .e-view.fluent2-dark .first-box-bottom, .e-view.tailwind3-dark .first-box-bottom, .e-view.fluent2-highcontrast .first-box-bottom, .e-view.bootstrap-dark .first-box-bottom, .e-view.bootstrap5-dark .first-box-bottom ,.e-view.fabric-dark .first-box-bottom, .e-view.highcontrast .second-box-bottom,
.e-view.material-dark  .second-box-bottom, .e-view.fluent-dark .second-box-bottom, .e-view.fluent2-dark .second-box-bottom, .e-view.tailwind3-dark .second-box-bottom, .e-view.fluent2-highcontrast .second-box-bottom, .e-view.bootstrap-dark .second-box-bottom, .e-view.bootstrap5-dark .second-box-bottom, .e-view.fabric-dark .second-box-bottom, .e-view.highcontrast .third-box-bottom,
.e-view.material-dark  .third-box-bottom, .e-view.fluent-dark .third-box-bottom, .e-view.fluent2-dark .third-box-bottom, .e-view.tailwind3-dark .third-box-bottom, .e-view.fluent2-highcontrast .third-box-bottom, .e-view.bootstrap-dark .third-box-bottom,.e-view.bootstrap5-dark .third-box-bottom,.e-view.fabric-dark .third-box-bottom,.e-view.highcontrast .box-left,
.e-view.material-dark .box-left, .e-view.fluent-dark .box-left, .e-view.fluent2-dark .box-left, .e-view.tailwind3-dark .box-left, .e-view.fluent2-highcontrast .box-left, .e-view.bootstrap-dark .box-left, .e-view.bootstrap5-dark .box-left, .e-view.fabric-dark .box-left,.e-view.material3-dark .box-bottom, .e-view.material3-dark .first-box-bottom , .e-view.material3-dark .second-box-bottom,.e-view.material3-dark .third-box-bottom, .e-view.material3-dark .box-left{
    position: relative;
    background: black;
    border: 1.5px solid black;
    padding: 2px 3px 2px 3px;
    border-radius: 0.2em;
    font-size: 12px;
    color: 'white'
}
.box-bottom:after, .box-bottom:before, .first-box-bottom:after, .first-box-bottom:before, 
.second-box-bottom:after, .second-box-bottom:before, .third-box-bottom:after, .third-box-bottom:before {
    bottom: 100%;
    border: solid transparent;
    content: "";
    position: absolute;
}
.e-view.highcontrast .box-bottom:after, .e-view.tailwind .box-bottom:after, .e-view.tailwind3 .box-bottom:after, .e-view.fluent .box-bottom:after, .e-view.fluent2 .box-bottom:after, .e-view.material .box-bottom:after,.e-view.bootstrap .box-bottom:after,.e-view.bootstrap5 .box-bottom:after, .e-view.bootstrap4 .box-bottom:after, .e-view.fabric .box-bottom:after, .e-view.material3 .box-bottom:after {
    border-color: transparent;
    border-width: 6.2px;
    left: 50%;
    margin-left: -6.1px;
    margin-bottom: -1px;
    border-bottom-color: #fdf7e7;
}
.e-view.highcontrast .box-bottom:after, .e-view.tailwind-dark .box-bottom:after, .e-view.fluent-dark .box-bottom:after, .e-view.fluent2-dark .box-bottom:after, .e-view.tailwind3-dark .box-bottom:after, .e-view.fluent2-highcontrast .box-bottom:after, .e-view.material-dark .box-bottom:after,.e-view.bootstrap-dark .box-bottom:after,.e-view.bootstrap5-dark .box-bottom:after, .e-view.bootstrap4-dark .box-bottom:after, .e-view.fabric-dark .box-bottom:after, .e-view.material3-dark .box-bottom:after {
    border-color: transparent;
    border-width: 6.2px;
    left: 50%;
    margin-left: -6.1px;
    margin-bottom: -1px;
    border-bottom-color: black;
}
.box-bottom:before {
    border-color: transparent;
    border-bottom-color: black;
    border-width: 7px;
    left: 50%;
    margin-left: -7px;
    margin-bottom: 0.5px;
}
.e-view.highcontrast .first-box-bottom:after, .e-view.tailwind .first-box-bottom:after, .e-view.tailwind3 .first-box-bottom:after, .e-view.fluent .first-box-bottom:after, .e-view.fluent2 .first-box-bottom:after, .e-view.material .first-box-bottom:after,.e-view.bootstrap .first-box-bottom:after,.e-view.bootstrap5 .first-box-bottom:after,.e-view.bootstrap4 .first-box-bottom:after, .e-view.fabric .first-box-bottom:after, .e-view.material3 .first-box-bottom:after {
    border-color: transparent;
    border-width: 6.2px;
    left: 50%;
    margin-left: -6.1px;
    margin-bottom: -1px;
    border-bottom-color: #fdf7e7;
}
.e-view.highcontrast .first-box-bottom:after,.e-view.tailwind-dark .first-box-bottom:after,.e-view.fluent-dark .first-box-bottom:after, .e-view.fluent2-dark .first-box-bottom:after, .e-view.tailwind3-dark .first-box-bottom:after, .e-view.fluent2-highcontrast .first-box-bottom:after, .e-view.material-dark .first-box-bottom:after,.e-view.bootstrap-dark .first-box-bottom:after,.e-view.bootstrap5-dark .first-box-bottom:after,.e-view.bootstrap4-dark .first-box-bottom:after, .e-view.fabric-dark .first-box-bottom:after, .e-view.material3-dark .first-box-bottom:after {
    border-color: transparent;
    border-width: 6.2px;
    left: 50%;
    margin-left: -6.1px;
    margin-bottom: -1px;
    border-bottom-color: black;
}
.first-box-bottom:before {
    border-color: transparent;
    border-bottom-color: black;
    border-width: 7px;
    left: 50%;
    margin-left: -7px;
    margin-bottom: 0.5px;
}
.e-view.highcontrast .second-box-bottom:after,.e-view.tailwind .second-box-bottom:after,.e-view.tailwind3 .second-box-bottom:after,.e-view.fluent .second-box-bottom:after, .e-view.fluent2 .second-box-bottom:after, .e-view.tailwind3 .second-box-bottom:after, .e-view.material .second-box-bottom:after, .e-view.bootstrap .second-box-bottom:after, .e-view.bootstrap5 .second-box-bottom:after,.e-view.bootstrap4 .second-box-bottom:after, .e-view.fabric .second-box-bottom:after, .e-view.material3 .second-box-bottom:after {
    border-color: transparent;
    border-width: 6.2px;
    left: 50%;
    margin-left: -6.3px;
    margin-bottom: -1px;
    border-bottom-color: #fdf7e7;
}
.e-view.highcontrast .second-box-bottom:after,.e-view.tailwind-dark .second-box-bottom:after,.e-view.fluent-dark .second-box-bottom:after, .e-view.fluent2-dark .second-box-bottom:after, .e-view.tailwind3-dark .second-box-bottom:after, .e-view.fluent2-highcontrast .second-box-bottom:after, .e-view.material-dark .second-box-bottom:after, .e-view.bootstrap-dark .second-box-bottom:after, .e-view.bootstrap5-dark .second-box-bottom:after,.e-view.bootstrap4-dark .second-box-bottom:after, .e-view.fabric-dark .second-box-bottom:after, .e-view.material3-dark .second-box-bottom:after {
    border-color: transparent;
    border-width: 6.2px;
    left: 50%;
    margin-left: -6.3px;
    margin-bottom: -1px;
    border-bottom-color: black;
}
.second-box-bottom:before {
    border-color: transparent;
    border-bottom-color: black;
    border-width: 7px;
    left: 50%;
    margin-left: -7px;
    margin-bottom: 0.5px;
}
.e-view.highcontrast .third-box-bottom:after,.e-view.tailwind .third-box-bottom:after,.e-view.tailwind3 .third-box-bottom:after,.e-view.fluent .third-box-bottom:after ,.e-view.fluent2 .third-box-bottom:after, .e-view.tailwind3 .third-box-bottom:after ,.e-view.material .third-box-bottom:after ,.e-view.bootstrap .third-box-bottom:after ,.e-view.bootstrap5 .third-box-bottom:after , .e-view.bootstrap4 .third-box-bottom:after , .e-view.fabric .third-box-bottom:after,.e-view.material3 .third-box-bottom:after {
    border-color: transparent;
    border-width: 6px;
    left: 50%;
    margin-left: -6px;
    margin-bottom: -1px;
    border-bottom-color: #fdf7e7;
}
.e-view.highcontrast .third-box-bottom:after ,.e-view.tailwind-dark .third-box-bottom:after, .e-view.fluent-dark .third-box-bottom:after ,.e-view.fluent2-dark .third-box-bottom:after , .e-view.tailwind3-dark .third-box-bottom:after, .e-view.fluent2-highcontrast .third-box-bottom:after ,.e-view.material-dark .third-box-bottom:after ,.e-view.bootstrap-dark .third-box-bottom:after ,.e-view.bootstrap5-dark .third-box-bottom:after , .e-view.bootstrap4-dark .third-box-bottom:after , .e-view.fabric-dark .third-box-bottom:after, .e-view.material3-dark .third-box-bottom:after {
    border-color: transparent;
    border-width: 6px;
    left: 50%;
    margin-left: -6px;
    margin-bottom: -1px;
    border-bottom-color: black;
}
.third-box-bottom:before {
    border-color: transparent;
    border-bottom-color: black;
    border-width: 6px;
    left: 50%;
    margin-left: -6px;
    margin-bottom: 1px;
}
.box-left:after, .box-left:before {
    right: 100%;
    top: 18%;
    border: solid transparent;
    content: "";
    position: absolute;
}
.e-view.highcontrast .box-left:after,.e-view.tailwind .box-left:after,.e-view.tailwind3 .box-left:after,.e-view.fluent .box-left:after, .e-view.fluent2 .box-left:after, .e-view.tailwind3 .box-left:after, .e-view.material .box-left:after,.e-view.bootstrap .box-left:after,.e-view.bootstrap5 .box-left:after, .e-view.bootstrap4 .box-left:after, .e-view.fabric .box-left:after, .e-view.material3 .box-left:after {
    border-color: transparent;
    border-width: 6.5px;
    margin-right: -1px;
    border-right-color: #fdf7e7;
}
.e-view.highcontrast .box-left:after,.e-view.tailwind-dark .box-left:after,.e-view.fluent-dark .box-left:after, .e-view.fluent2-dark .box-left:after, .e-view.tailwind3-dark .box-left:after, .e-view.fluent2-highcontrast .box-left:after, .e-view.material-dark .box-left:after,.e-view.bootstrap-dark .box-left:after,.e-view.bootstrap5-dark .box-left:after, .e-view.bootstrap4-dark .box-left:after, .e-view.fabric-dark .box-left:after, .e-view.material3-dark .box-left:after {
    border-color: transparent;
    border-width: 6.5px;
    margin-right: -1px;
    border-right-color: black;
}
.box-left:before {
    border-color: transparent;
    border-right-color: black;
    border-width: 6.2px;
    margin-right: 1px;
}
.e-view.highcontrast .box-top,.e-view.tailwind .box-top,.e-view.tailwind3 .box-top,.e-view.fluent .box-top, .e-view.fluent2 .box-top, .e-view.material .box-top,.e-view.bootstrap .box-top,.e-view.bootstrap5 .box-top ,.e-view.bootstrap4 .box-top , .e-view.fabric .box-top,
.e-view.highcontrast .box-top-left,.e-view.tailwind .box-top,.e-view.tailwind3 .box-top,.e-view.fluent .box-top-left, .e-view.fluent2 .box-top-left, .e-view.material .box-top-left,.e-view.bootstrap .box-top-left,.e-view.bootstrap5 .box-top-left, .e-view.bootstrap4 .box-top-left, .e-view.fabric .box-top-left,.e-view.material3 .box-top, .e-view.material3 .box-top-left, .e-view.tailwind3 .box-top-left {
    position: relative;
    color: white;
    background: black;
    border: 1.5px solid black;
    padding: 2px 3px 2px 3px;
    border-radius: 0.2em;
    font-size: 12px;
    color:  white;
}
.e-view.highcontrast .box-top,.e-view.tailwind-dark .box-top,.e-view.fluent-dark .box-top, .e-view.fluent2-dark .box-top, .e-view.tailwind3-dark .box-top, .e-view.fluent2-highcontrast .box-top, .e-view.material-dark .box-top,.e-view.bootstrap-dark .box-top,.e-view.bootstrap5-dark .box-top ,.e-view.bootstrap4-dark .box-top , .e-view.fabric-dark .box-top,
.e-view.highcontrast .box-top-left,.e-view.tailwind-dark .box-top,.e-view.fluent-dark .box-top-left ,.e-view.fluent2-dark .box-top-left , .e-view.tailwind3-dark .box-top-left, .e-view.fluent2-highcontrast .box-top-left ,.e-view.material-dark .box-top-left,.e-view.bootstrap-dark .box-top-left,.e-view.bootstrap5-dark .box-top-left, .e-view.bootstrap4-dark .box-top-left, .e-view.fabric-dark .box-top-left, .e-view.material3-dark .box-top, .e-view.material3-dark .box-top-left {
    position: relative;
    color: white;
    background: #fdf7e7;
    border: 1.5px solid black;
    padding: 2px 3px 2px 3px;
    border-radius: 0.2em;
    font-size: 12px;
    color: black;
}
.box-top:after, .box-top:before, .box-top-left:after, .box-top-left:before {
    top: 100%;
    border: solid transparent;
    content: "";
    position: absolute;
}
.e-view.highcontrast .box-top:after,.e-view.tailwind .box-top:after,.e-view.tailwind3 .box-top:after,.e-view.fluent .box-top:after,.e-view.fluent2 .box-top:after, .e-view.material .box-top:after, .e-view.bootstrap .box-top:after, .e-view.bootstrap5 .box-top:after, .e-view.bootstrap4 .box-top:after, .e-view.fabric .box-top:after,.e-view.material3 .box-top:after {
    border-color: transparent;
    border-width: 7.5px;
    border-top-color:black;
    right: 50%;
    margin-right: -7.5px;
    margin-top: -1.5px;
}
.e-view.highcontrast .box-top:after,.e-view.tailwind-dark .box-top:after,.e-view.fluent-dark .box-top:after,.e-view.fluent2-dark .box-top:after, .e-view.tailwind3-dark .box-top:after, .e-view.fluent2-highcontrast .box-top:after,.e-view.material-dark .box-top:after, .e-view.bootstrap-dark .box-top:after, .e-view.bootstrap5-dark .box-top:after, .e-view.bootstrap4-dark .box-top:after, .e-view.fabric-dark .box-top:after,.e-view.material3-dark .box-top:after {
    border-color: transparent;
    border-width: 7.5px;
    border-top-color: #fdf7e7;
    right: 50%;
    margin-right: -7.5px;
    margin-top: -1.5px;
}
.e-view.highcontrast .box-top:before, .e-view.tailwind .box-top:before, .e-view.tailwind3 .box-top:before, .e-view.fluent .box-top:before,.e-view.fluent2 .box-top:before,.e-view.material .box-top:before,.e-view.bootstrap .box-top:before,.e-view.bootstrap5 .box-top:before,.e-view.bootstrap4 .box-top:before , .e-view.fabric .box-top:before, .e-view.material3 .box-top:before {
    border-color: transparent;
    border-top-color:black;
    border-width: 8px;
    right: 50%;
    margin-right: -8px;
}
.e-view.highcontrast .box-top:before,.e-view.tailwind-dark .box-top:before, .e-view.fluent-dark .box-top:before,.e-view.fluent2-dark .box-top:before, .e-view.tailwind3-dark .box-top:before, .e-view.fluent2-highcontrast .box-top:before,.e-view.material-dark .box-top:before,.e-view.bootstrap-dark .box-top:before,.e-view.bootstrap5-dark .box-top:before,.e-view.bootstrap4-dark .box-top:before , .e-view.fabric-dark .box-top:before ,.e-view.material3-dark .box-top:before{
    border-color: transparent;
    border-top-color:#fdf7e7;
    border-width: 8px;
    right: 50%;
    margin-right: -8px;
}
.e-view.highcontrast .box-top-left:after,.e-view.tailwind .box-top-left:after,.e-view.tailwind3 .box-top-left:after,.e-view.fluent .box-top-left:after, .e-view.fluent2 .box-top-left:after, .e-view.material .box-top-left:after,.e-view.bootstrap .box-top-left:after,.e-view.bootstrap5 .box-top-left:after,.e-view.bootstrap4 .box-top-left:after, .e-view.fabric  .box-top-left:after, .e-view.material3 .box-top-left:after, .e-view.tailwind3 .box-top-left:after{
    border-color: transparent;
    border-width: 7.5px;
    border-top-color: black;
    right: 20%;
    margin-right: -7.5px;
    margin-bottom: -1.5px;
}
.e-view.highcontrast .box-top-left:after,.e-view.tailwind-dark .box-top-left:after,.e-view.fluent-dark .box-top-left:after, .e-view.fluent2-dark .box-top-left:after, .e-view.tailwind3-dark .box-top-left:after, .e-view.fluent2-highcontrast .box-top-left:after, .e-view.material-dark .box-top-left:after,.e-view.bootstrap-dark .box-top-left:after,.e-view.bootstrap5-dark .box-top-left:after,.e-view.bootstrap4-dark .box-top-left:after, .e-view.fabric-dark  .box-top-left:after,.e-view.material3-dark .box-top-left:after{
    border-color: transparent;
    border-width: 7.5px;
    border-top-color: #fdf7e7;
    right: 20%;
    margin-right: -7.5px;
    margin-bottom: -1.5px;
}
.e-view.highcontrast .box-top-left:before,.e-view.tailwind .box-top-left:before,.e-view.tailwind3 .box-top-left:before,.e-view.fluent .box-top-left:before, .e-view.fluent2 .box-top-left:before, .e-view.material .box-top-left:before,.e-view.bootstrap .box-top-left:before,.e-view.bootstrap5 .box-top-left:before, .e-view.bootstrap4 .box-top-left:before , .e-view.fabric  .box-top-left:before, .e-view.material3  .box-top-left:before {
    border-color: transparent;
    border-top-color: black;
    border-width: 8px;
    right: 20%;
    margin-right: -8px;
}
.e-view.highcontrast .box-top-left:before,.e-view.tailwind-dark .box-top-left:before,.e-view.fluent-dark .box-top-left:before, e-view.fluent2-dark .box-top-left:before, e-view.fluent2-highcontrast .box-top-left:before, .e-view.material-dark .box-top-left:before,.e-view.bootstrap-dark .box-top-left:before,.e-view.bootstrap5-dark .box-top-left:before, .e-view.bootstrap4-dark .box-top-left:before , .e-view.fabric-dark  .box-top-left:before,.e-view.material3-dark  .box-top-left:before {
    border-color: transparent;
    border-top-color: #fdf7e7;
    border-width: 8px;
    right: 20%;
    margin-right: -8px;
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { annotationData } from './financial-data';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StackingColumnSeries, Category, Legend, Selection, ChartAnnotation, AreaSeries, Tooltip } from "@syncfusion/ej2-vue-charts";
 import { loadChartTheme } from "./theme-color";
let selectedTheme = loadChartTheme(null, true);
let theme = loadChartTheme();
let themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentdark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
let borderColor = ['#FD7E14', '#FD7E14', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113', '#6200EE', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            dataSource: annotationData,
            //Initializing dataSource
            linePoints: [
                { Distance: 1.70, Speed: 258 },
                { Distance: 1.62, Speed: 275 },
                { Distance: 0.7, Speed: null },
                { Distance: 2.95, Speed: 225 },
                { Distance: 2.75, Speed: 250 },
            ],
            //Initializing Primary X Axis
            primaryXAxis: {
                title: 'Distance',
                labelFormat: 'N2',
                majorGridLines: { width: 0 }
            },
            primaryYAxis: {
                title: 'Speed (KM/H)',
                minimum: 50, maximum: 400,
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            border: {
                width: 2.5,
                color: '#000000'
            },
            tooltip: {
                enable: true,
                header: '',
                enableMarker: true,
                format: 'Distance: ${point.x} KM <br> ${point.y} KM/H',
                fill: 'white',
                border: { color: 'rgb(247, 206, 105)', width: 2 },
                textStyle: { color: '#000000' }
            },
            animation: true,
            width: Browser.isDevice ? '100%' : '75%',
            //Initializing Primary Y Axis
            title: 'Speed Data Plot for Interlagos Circuit',
            highlightmode: 'series',
            annotations: [
                { content: '<div class="first-box-bottom" > Senna S </div>', x: '0.360', y: '80', coordinateUnits: 'Point' },
                { content: '<div class="second-box-bottom" > Descida do Lego </div>', x: '1.400', y: '130', coordinateUnits: 'Point' },
                { content: '<div class="third-box-bottom" > Ferradura </div>', x: '2.100', y: '200', coordinateUnits: 'Point' },
                { content: '<div class="box-left" > Curva do Sol </div>', x: '0.85', y: '155', coordinateUnits: 'Point' },
                { content: '<div class="box-top-left" > Reta Oposta </div>', x: '0.700', y: '292', coordinateUnits: 'Point' },
                { content: '<div class="box-bottom" > Bico de Pato </div>', x: '2.750', y: '80', coordinateUnits: 'Point' },
                { content: '<div class="box-top" > Mergulho </div>', x: '3.136', y: '284', coordinateUnits: 'Point' },
                { content: Browser.isDevice ? '' : '<div class="third-box-bottom" > Junção </div>', x: '3.270', y: '98', coordinateUnits: 'Point' },
                { content: Browser.isDevice ? '' : '<div class="box-top" > Subida dos <br /> Boxes </div>', x: '3.800', y: '312', coordinateUnits: 'Point' },
                { content: Browser.isDevice ? '' : '<div style="font-family: sans-serif" > Max, accelertion <br /> 5.00 g at 5th gear </div>', x: '1.65', y: '300', coordinateUnits: 'Point' },
                { content: Browser.isDevice ? '' : '<div style="font-family: sans-serif" > Max, accelertion <br /> 4.58 g at 5th gear </div>', x: '2.60', y: '250', coordinateUnits: 'Point' }
            ],
        };
    },
    provide: {
        chart: [StackingColumnSeries, Category, Legend, Selection, ChartAnnotation, AreaSeries, Tooltip]
    },
    methods: {
        load: function (args) {
            loadChartTheme(args);
            if (args.chart.theme.includes('Dark') || args.chart.theme === 'HighContrast') {
                args.chart.series[0].fill = "url(#" + "dark-gradient-chart)";
            }
            else {
                args.chart.series[0].fill = "url(#" + "gradient-chart)";
            }
        },
        axisLabelRender: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                args.text = args.text + ' KM';
            }
        },
    },
    updated: function () {
        this.$nextTick(function () {
            this.$refs.chart.ej2Instances.refresh();
        });
    }
}; 
</script>