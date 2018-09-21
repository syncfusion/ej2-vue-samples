<template>
<div>
<div class="control-section">
    <div id="spark-container" class="row" align="center">
        <div class="cols-sample-area">
            <div style="width: 400px; text-align: center; font-size: 17px">
                Population comparision between various countries
            </div>
            <div style="width: 380px; text-align: center; font-size: 12.5px;">
               (From 2005 to 2014)
            </div><br><br>
             <table class="cols-sample-area row" style="width: 100%;">
                <tr>
                    <td align="center"></td>
                    <td>
                        <div id="population" style="width:150px; height: 50px;text-align: center"><b>Population</b></div>
                    </td>
                    <td>
                        <div id="density" style="width:150px; height: 50px;text-align: center"><b>Population Density</b></div>
                    </td>
                    <td>
                        <div id="growth" style="width:150px; height: 50px;text-align: center"><b>Population Growth Rate</b></div>
                    </td>
                    <td>
                        <div id="birth" style="width:150px; height: 50px;text-align: center"><b>Birth Rate</b></div>
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>Australia</b></td>
                    <td>
                        <ejs-sparkline id='p-australia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type' :valueType='valueType' :fill='fill' :negativePointColor='negativePointColor' :format='format' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource' :tooltipSettings='tooltipSettings'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-australia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type2' :valueType='valueType2' :fill='fill2' :opacity='opacity2' :border='border2' :negativePointColor='negativePointColor2' :dataSource='dataSource2' :tooltipSettings='tooltipSettings2'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-australia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type3' :valueType='valueType3' :fill='fill3' :negativePointColor='negativePointColor3' :dataSource='dataSource3' :tooltipSettings='tooltipSettings3'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-australia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type4' :valueType='valueType4' :fill='fill4' :negativePointColor='negativePointColor4' :dataSource='dataSource4' :axisSettings='axisSettings4' :tooltipSettings='tooltipSettings4'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>Canada</b></td>
                    <td>
                        <ejs-sparkline id='p-canada' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type5' :valueType='valueType5' :fill='fill5' :negativePointColor='negativePointColor5' :format='format' :useGroupingSeparator='useGroupingSeparator' :dataSource='dataSource5' :tooltipSettings='tooltipSettings5'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-canada' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type6' :valueType='valueType6' :fill='fill6' :opacity='opacity6' :border='border6' :negativePointColor='negativePointColor6' :dataSource='dataSource6' :tooltipSettings='tooltipSettings6'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-canada' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type7' :valueType='valueType7' :fill='fill7' :negativePointColor='negativePointColor7' :dataSource='dataSource7' :tooltipSettings='tooltipSettings7'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-canada' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type8' :valueType='valueType8' :fill='fill8' :negativePointColor='negativePointColor8' :dataSource='dataSource8' :axisSettings='axisSettings8' :tooltipSettings='tooltipSettings8'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>China</b></td>
                    <td>
                        <ejs-sparkline id='p-china' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type9' :valueType='valueType9' :fill='fill9' :negativePointColor='negativePointColor9' :dataSource='dataSource9' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings9'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-china' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type10' :valueType='valueType10' :fill='fill10' :opacity='opacity10' :border='border10' :negativePointColor='negativePointColor10' :dataSource='dataSource10' :tooltipSettings='tooltipSettings10'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-china' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type11' :valueType='valueType11' :fill='fill11' :negativePointColor='negativePointColor11' :dataSource='dataSource11' :tooltipSettings='tooltipSettings11'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-china' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type12' :valueType='valueType12' :fill='fill12' :negativePointColor='negativePointColor12' :dataSource='dataSource12' :axisSettings='axisSettings12' :tooltipSettings='tooltipSettings12'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>France</b></td>
                    <td>
                        <ejs-sparkline id='p-france' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type13' :valueType='valueType13' :fill='fill13' :negativePointColor='negativePointColor13' :dataSource='dataSource13' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings13'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-france' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type14' :valueType='valueType14' :fill='fill14' :opacity='opacity14' :border='border14' :negativePointColor='negativePointColor14' :dataSource='dataSource14' :tooltipSettings='tooltipSettings10'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-france' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type15' :valueType='valueType15' :fill='fill15' :negativePointColor='negativePointColor15' :dataSource='dataSource15' :tooltipSettings='tooltipSettings15'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-france' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type16' :valueType='valueType16' :fill='fill16' :negativePointColor='negativePointColor16' :dataSource='dataSource16' :axisSettings='axisSettings16' :tooltipSettings='tooltipSettings16'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>Germany</b></td>
                    <td>
                        <ejs-sparkline id='p-germany' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type17' :valueType='valueType17' :fill='fill17' :negativePointColor='negativePointColor17' :dataSource='dataSource17' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings17'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-germany' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type18' :valueType='valueType18' :fill='fill18' :opacity='opacity18' :border='border18' :negativePointColor='negativePointColor18' :dataSource='dataSource18' :tooltipSettings='tooltipSettings18'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-germany' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type19' :valueType='valueType19' :fill='fill19' :negativePointColor='negativePointColor19' :dataSource='dataSource19' :tooltipSettings='tooltipSettings19'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-germany' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type20' :valueType='valueType20' :fill='fill20' :negativePointColor='negativePointColor20' :dataSource='dataSource20' :axisSettings='axisSettings20' :tooltipSettings='tooltipSettings20'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>India</b></td>
                    <td>
                        <ejs-sparkline id='p-india' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type21' :valueType='valueType21' :fill='fill21' :negativePointColor='negativePointColor21' :dataSource='dataSource21' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings21'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-india' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type22' :valueType='valueType22' :fill='fill22' :opacity='opacity22' :border='border22' :negativePointColor='negativePointColor22' :dataSource='dataSource22' :tooltipSettings='tooltipSettings22'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-india' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type23' :valueType='valueType23' :fill='fill23' :negativePointColor='negativePointColor23' :dataSource='dataSource23' :tooltipSettings='tooltipSettings23'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-india' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type24' :valueType='valueType24' :fill='fill24' :negativePointColor='negativePointColor24' :dataSource='dataSource24' :axisSettings='axisSettings24' :tooltipSettings='tooltipSettings24'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>Russia</b></td>
                    <td>
                        <ejs-sparkline id='p-russia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type25' :valueType='valueType25' :fill='fill25' :negativePointColor='negativePointColor25' :dataSource='dataSource25' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings25'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-russia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type26' :valueType='valueType26' :fill='fill26' :opacity='opacity26' :border='border26' :negativePointColor='negativePointColor26' :dataSource='dataSource26' :tooltipSettings='tooltipSettings26'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-russia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type27' :valueType='valueType27' :fill='fill27' :negativePointColor='negativePointColor27' :dataSource='dataSource27' :tooltipSettings='tooltipSettings27'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-russia' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type28' :valueType='valueType28' :fill='fill28' :negativePointColor='negativePointColor28' :dataSource='dataSource28' :axisSettings='axisSettings28' :tooltipSettings='tooltipSettings28'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>Sweden</b></td>
                    <td>
                        <ejs-sparkline id='p-sweden' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type29' :valueType='valueType29' :fill='fill29' :negativePointColor='negativePointColor29' :dataSource='dataSource29' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings29'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-sweden' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type30' :valueType='valueType30' :fill='fill30' :opacity='opacity30' :border='border30' :negativePointColor='negativePointColor30' :dataSource='dataSource30' :tooltipSettings='tooltipSettings30'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-sweden' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type31' :valueType='valueType31' :fill='fill31' :negativePointColor='negativePointColor31' :dataSource='dataSource31' :tooltipSettings='tooltipSettings31'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-sweden' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type32' :valueType='valueType32' :fill='fill32' :negativePointColor='negativePointColor32' :dataSource='dataSource32' :axisSettings='axisSettings32' :tooltipSettings='tooltipSettings32'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>United Kingdom</b></td>
                    <td>
                        <ejs-sparkline id='p-uk' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type33' :valueType='valueType33' :fill='fill33' :negativePointColor='negativePointColor33' :dataSource='dataSource33' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings33'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-uk' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type34' :valueType='valueType34' :fill='fill34' :opacity='opacity34' :border='border34' :negativePointColor='negativePointColor34' :dataSource='dataSource34' :tooltipSettings='tooltipSettings34'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-uk' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type35' :valueType='valueType35' :fill='fill35' :negativePointColor='negativePointColor35' :dataSource='dataSource35' :tooltipSettings='tooltipSettings35'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-uk' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type36' :valueType='valueType36' :fill='fill36' :negativePointColor='negativePointColor36' :dataSource='dataSource36' :axisSettings='axisSettings36' :tooltipSettings='tooltipSettings36'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
                <tr style="height: 80px">
                    <td align="center"><b>United Sates</b></td>
                    <td>
                        <ejs-sparkline id='p-us' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type37' :valueType='valueType37' :fill='fill37' :negativePointColor='negativePointColor37' :dataSource='dataSource37' :format='format' :useGroupingSeparator='useGroupingSeparator' :tooltipSettings='tooltipSettings37'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='d-us' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type38' :valueType='valueType38' :fill='fill38' :opacity='opacity38' :border='border38' :negativePointColor='negativePointColor38' :dataSource='dataSource38' :tooltipSettings='tooltipSettings38'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='g-us' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type39' :valueType='valueType39' :fill='fill39' :negativePointColor='negativePointColor39' :dataSource='dataSource39' :tooltipSettings='tooltipSettings39'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                    <td>
                        <ejs-sparkline id='b-us' :load='load' style="width:150px; height: 50px" :height='height' :width='width' :lineWidth='lineWidth' :type='type40' :valueType='valueType40' :fill='fill40' :negativePointColor='negativePointColor40' :dataSource='dataSource40' :axisSettings='axisSettings40' :tooltipSettings='tooltipSettings40'  xName='xval' yName='yval'></ejs-sparkline>                        
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://www.indexmundi.com/g/g.aspx?v=21&v=21000&v=24&v=25&v=27&c=as&c=ch&c=fr&c=gm&c=in&c=rs&c=sn&c=sz&c=uk&c=us&l=en/"
            target="_blank"> www.indexmundi.com</a>
    </div>
    <div id="action-description">
        <p>
            This sample visualizes population, population density, population growth rate, and birth rate of various countries from 2005
            to 2014.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, you can see how to render a sparkline in a table. The color and type of the sparklines have been customized.
            Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over the data points or tap
            on a data point in touch enabled devices.
        </p>
        <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Sparkline component features are segregated into individual feature-wise modules. To use a tooltip, inject the
            <code>SparklineTooltip</code> module using the
            <code>Sparkline.Inject(SparklineTooltip)</code> method.
        </p>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);
export default Vue.extend({
data:function(){
return{
        format: 'n',
        useGroupingSeparator: true,
        height: '50px',
        width: '90%',
        lineWidth: 2,
        type: 'Line',
        valueType: 'Category',
        fill: '#3C78EF',
        negativePointColor: '#fc5070',
        useGroupingSeparator: true,
        dataSource: [
            { x: 0, xval: '2005', yval: 20090440 },
            { x: 1, xval: '2006', yval: 20264080 },
            { x: 2, xval: '2007', yval: 20434180 },
            { x: 3, xval: '2008', yval: 21007310 },
            { x: 4, xval: '2009', yval: 21262640 },
            { x: 5, xval: '2010', yval: 21515750 },
            { x: 6, xval: '2011', yval: 21766710 },
            { x: 7, xval: '2012', yval: 22015580 },
            { x: 8, xval: '2013', yval: 22262500 },
            { x: 9, xval: '2014', yval: 22507620 },
        ],
        tooltipSettings: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type2: 'Area',
        valueType2: 'Category',
        fill2: '#3C78EF',
        opacity2: 1,
        border2: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor2: '#fc5070',
        dataSource2: [
            { x: 0, xval: '2005', yval: 2.61 },
            { x: 1, xval: '2006', yval: 2.64 },
            { x: 2, xval: '2007', yval: 2.66 },
            { x: 3, xval: '2008', yval: 2.73 },
            { x: 4, xval: '2009', yval: 2.75 },
            { x: 5, xval: '2010', yval: 2.78 },
            { x: 6, xval: '2011', yval: 2.81 },
            { x: 7, xval: '2012', yval: 2.84 },
            { x: 8, xval: '2013', yval: 2.88 },
            { x: 9, xval: '2014', yval: 2.91 },
        ],
        tooltipSettings2: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type3: 'WinLoss',
        valueType3: 'Category',
        fill3: '#3C78EF',
        negativePointColor3: '#fc5070',
        dataSource3: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: -1 },
            { x: 2, xval: '2007', yval: -1 },
            { x: 3, xval: '2008', yval: 1 },
            { x: 4, xval: '2009', yval: -1 },
            { x: 5, xval: '2010', yval: -1 },
            { x: 6, xval: '2011', yval: -1 },
            { x: 7, xval: '2012', yval: -1 },
            { x: 8, xval: '2013', yval: -1 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings3: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type4: 'Column',
        valueType4: 'Category',
        fill4: '#3C78EF',
        negativePointColor4: '#fc5070',
        dataSource4: [
            { x: 0, xval: '2005', yval: 12.26 },
            { x: 1, xval: '2006', yval: 12.14 },
            { x: 2, xval: '2007', yval: 12.02 },
            { x: 3, xval: '2008', yval: 12.55 },
            { x: 4, xval: '2009', yval: 12.47 },
            { x: 5, xval: '2010', yval: 12.39 },
            { x: 6, xval: '2011', yval: 12.33 },
            { x: 7, xval: '2012', yval: 12.28 },
            { x: 8, xval: '2013', yval: 12.23 },
            { x: 9, xval: '2014', yval: 12.19 },
        ],
        axisSettings4: {
            minY: 12
        },
        tooltipSettings4: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type5: 'Line',
        valueType5: 'Category',
        fill5: '#3C78EF',
        negativePointColor5: '#fc5070',
        dataSource5: [
            { x: 0, xval: '2005', yval: 32805040 },
            { x: 1, xval: '2006', yval: 33098930 },
            { x: 2, xval: '2007', yval: 33390140 },
            { x: 3, xval: '2008', yval: 33212700 },
            { x: 4, xval: '2009', yval: 33487210 },
            { x: 5, xval: '2010', yval: 33759740 },
            { x: 6, xval: '2011', yval: 34030590 },
            { x: 7, xval: '2012', yval: 34300080 },
            { x: 8, xval: '2013', yval: 34568210 },
            { x: 9, xval: '2014', yval: 34834840 },

        ],
        tooltipSettings5: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: 'fc5070',
                width: 2
            }
        },
        type6: 'Area',
        valueType6: 'Category',
        fill6: '#3C78EF',
        opacity6: 1,
        border6: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor6: '#fc5070',
        dataSource6: [
            { x: 0, xval: '2005', yval: 3.29 },
            { x: 1, xval: '2006', yval: 3.31 },
            { x: 2, xval: '2007', yval: 3.34 },
            { x: 3, xval: '2008', yval: 3.33 },
            { x: 4, xval: '2009', yval: 3.35 },
            { x: 5, xval: '2010', yval: 3.38 },
            { x: 6, xval: '2011', yval: 3.41 },
            { x: 7, xval: '2012', yval: 3.44 },
            { x: 8, xval: '2013', yval: 3.46 },
            { x: 9, xval: '2014', yval: 3.49 },
        ],
        tooltipSettings6: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type7: 'WinLoss',
        valueType7: 'Category',
        fill7: '#3C78EF',
        negativePointColor7: '#fc5070',
        dataSource7: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: -1 },
            { x: 2, xval: '2007', yval: -1 },
            { x: 3, xval: '2008', yval: -1 },
            { x: 4, xval: '2009', yval: -1 },
            { x: 5, xval: '2010', yval: -1 },
            { x: 6, xval: '2011', yval: -1 },
            { x: 7, xval: '2012', yval: -1 },
            { x: 8, xval: '2013', yval: -1 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings7: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type8: 'Column',
        valueType8: 'Category',
        fill8: '#3C78EF',
        negativePointColor8: '#fc5070',
        dataSource8: [
            { x: 0, xval: '2005', yval: 10.84 },
            { x: 1, xval: '2006', yval: 10.78 },
            { x: 2, xval: '2007', yval: 10.75 },
            { x: 3, xval: '2008', yval: 10.29 },
            { x: 4, xval: '2009', yval: 10.28 },
            { x: 5, xval: '2010', yval: 10.28 },
            { x: 6, xval: '2011', yval: 10.28 },
            { x: 7, xval: '2012', yval: 10.28 },
            { x: 8, xval: '2013', yval: 10.28 },
            { x: 9, xval: '2014', yval: 10.29 },
        ],
        axisSettings8: {
            minY: 10.20
        },
        tooltipSettings8: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type9: 'Line',
        valueType9: 'Category',
        fill9: '#3C78EF',
        negativePointColor9: '#fc5070',
        dataSource9: [
            { x: 0, xval: '2005', yval: 1306314000 },
            { x: 1, xval: '2006', yval: 1313974000 },
            { x: 2, xval: '2007', yval: 1321852000 },
            { x: 3, xval: '2008', yval: 1330045000 },
            { x: 4, xval: '2009', yval: 1338613000 },
            { x: 5, xval: '2010', yval: 1330141000 },
            { x: 6, xval: '2011', yval: 1336718000 },
            { x: 7, xval: '2012', yval: 1343240000 },
            { x: 8, xval: '2013', yval: 1349586000 },
            { x: 9, xval: '2014', yval: 1355693000 },
        ],
        tooltipSettings9: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type10: 'Area',
        valueType10: 'Category',
        fill10: '#3C78EF',
        opacity10: 1,
        border10: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor10: '#fc5070',
        dataSource10: [
            { x: 0, xval: '2005', yval: 136.12 },
            { x: 1, xval: '2006', yval: 136.92 },
            { x: 2, xval: '2007', yval: 137.74 },
            { x: 3, xval: '2008', yval: 138.59 },
            { x: 4, xval: '2009', yval: 139.48 },
            { x: 5, xval: '2010', yval: 138.6 },
            { x: 6, xval: '2011', yval: 139.29 },
            { x: 7, xval: '2012', yval: 139.97 },
            { x: 8, xval: '2013', yval: 140.63 },
            { x: 9, xval: '2014', yval: 141.26 },
        ],
        tooltipSettings10: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type11: 'WinLoss',
        valueType11: 'Category',
        fill11: '#3C78EF',
        negativePointColor11: '#fc5070',
        dataSource11: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: 1 },
            { x: 2, xval: '2007', yval: 1 },
            { x: 3, xval: '2008', yval: 1 },
            { x: 4, xval: '2009', yval: 1 },
            { x: 5, xval: '2010', yval: -1 },
            { x: 6, xval: '2011', yval: 0 },
            { x: 7, xval: '2012', yval: -1 },
            { x: 8, xval: '2013', yval: -1 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings11: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type12: 'Column',
        valueType12: 'Category',
        fill12: '#3C78EF',
        negativePointColor12: '#fc5070',
        dataSource12: [
            { x: 0, xval: '2005', yval: 13.14 },
            { x: 1, xval: '2006', yval: 13.25 },
            { x: 2, xval: '2007', yval: 13.45 },
            { x: 3, xval: '2008', yval: 13.71 },
            { x: 4, xval: '2009', yval: 14 },
            { x: 5, xval: '2010', yval: 12.17 },
            { x: 6, xval: '2011', yval: 12.29 },
            { x: 7, xval: '2012', yval: 12.31 },
            { x: 8, xval: '2013', yval: 12.25 },
            { x: 9, xval: '2014', yval: 12.17 },
        ],
        axisSettings12: {
            minY: 12
        },
        tooltipSettings12: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type13: 'Line',
        valueType13: 'Category',
        fill13: '#3C78EF',
        negativePointColor13: '#fc5070',
        dataSource13: [
            { x: 0, xval: '2005', yval: 60656180 },
            { x: 1, xval: '2006', yval: 60876140 },
            { x: 2, xval: '2007', yval: 63713930 },
            { x: 3, xval: '2008', yval: 64057790 },
            { x: 4, xval: '2009', yval: 64057790 },
            { x: 5, xval: '2010', yval: 64768390 },
            { x: 6, xval: '2011', yval: 65312250 },
            { x: 7, xval: '2012', yval: 65630690 },
            { x: 8, xval: '2013', yval: 65951610 },
            { x: 9, xval: '2014', yval: 66259010 },
        ],
        tooltipSettings13: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type14: 'Area',
        valueType14: 'Category',
        fill14: '#3C78EF',
        opacity14: 1,
        border14: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor14: '#fc5070',
        dataSource14: [
            { x: 0, xval: '2005', yval: 110.88 },
            { x: 1, xval: '2006', yval: 111.28 },
            { x: 2, xval: '2007', yval: 99.02 },
            { x: 3, xval: '2008', yval: 99.56 },
            { x: 4, xval: '2009', yval: 99.56 },
            { x: 5, xval: '2010', yval: 100.66 },
            { x: 6, xval: '2011', yval: 101.45 },
            { x: 7, xval: '2012', yval: 101.94 },
            { x: 8, xval: '2013', yval: 102.44 },
            { x: 9, xval: '2014', yval: 102.92 },
        ],
        tooltipSettings14: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type15: 'WinLoss',
        valueType15: 'Category',
        fill15: '#3C78EF',
        negativePointColor15: '#fc5070',
        dataSource15: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: -1 },
            { x: 2, xval: '2007', yval: 1 },
            { x: 3, xval: '2008', yval: -1 },
            { x: 4, xval: '2009', yval: -1 },
            { x: 5, xval: '2010', yval: -1 },
            { x: 6, xval: '2011', yval: -1 },
            { x: 7, xval: '2012', yval: 0 },
            { x: 8, xval: '2013', yval: -1 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings15: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type16: 'Column',
        valueType16: 'Category',
        fill16: '#3C78EF',
        negativePointColor16: '#fc5070',
        dataSource16: [
            { x: 0, xval: '2005', yval: 12.15 },
            { x: 1, xval: '2006', yval: 11.99 },
            { x: 2, xval: '2007', yval: 12.91 },
            { x: 3, xval: '2008', yval: 12.73 },
            { x: 4, xval: '2009', yval: 12.57 },
            { x: 5, xval: '2010', yval: 12.43 },
            { x: 6, xval: '2011', yval: 12.29 },
            { x: 7, xval: '2012', yval: 12.72 },
            { x: 8, xval: '2013', yval: 12.6 },
            { x: 9, xval: '2014', yval: 12.6 },
        ],
        axisSettings16: {
            minY: 11.5
        },
        tooltipSettings16: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type17: 'Line',
        valueType17: 'Category',
        fill17: '#3C78EF',
        negativePointColor17: '#fc5070',
        dataSource17: [
            { x: 0, xval: '2005', yval: 82431390 },
            { x: 1, xval: '2006', yval: 82422300 },
            { x: 2, xval: '2007', yval: 82400990 },
            { x: 3, xval: '2008', yval: 82369550 },
            { x: 4, xval: '2009', yval: 82329760 },
            { x: 5, xval: '2010', yval: 82282990 },
            { x: 6, xval: '2011', yval: 81471830 },
            { x: 7, xval: '2012', yval: 81305860 },
            { x: 8, xval: '2013', yval: 81147260 },
            { x: 9, xval: '2014', yval: 80996690 },
        ],
        tooltipSettings17: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type18: 'Area',
        valueType18: 'Category',
        fill18: '#3C78EF',
        opacity18: 1,
        border18: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor18: '#fc5070',
        dataSource18: [
            { x: 0, xval: '2005', yval: 230.89 },
            { x: 1, xval: '2006', yval: 230.86 },
            { x: 2, xval: '2007', yval: 230.8 },
            { x: 3, xval: '2008', yval: 230.71 },
            { x: 4, xval: '2009', yval: 230.6 },
            { x: 5, xval: '2010', yval: 230.47 },
            { x: 6, xval: '2011', yval: 228.2 },
            { x: 7, xval: '2012', yval: 227.73 },
            { x: 8, xval: '2013', yval: 227.29 },
            { x: 9, xval: '2014', yval: 226.87 },
        ],
        tooltipSettings18: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type19: 'WinLoss',
        valueType19: 'Category',
        fill19: '#3C78EF',
        negativePointColor19: '#fc5070',
        dataSource19: [
            { x: 0, xval: '2005', yval: 0 },
            { x: 1, xval: '2006', yval: 1 },
            { x: 2, xval: '2007', yval: -1 },
            { x: 3, xval: '2008', yval: -1 },
            { x: 4, xval: '2009', yval: -1 },
            { x: 5, xval: '2010', yval: -1 },
            { x: 6, xval: '2011', yval: 1 },
            { x: 7, xval: '2012', yval: 1 },
            { x: 8, xval: '2013', yval: 1 },
            { x: 9, xval: '2014', yval: 1 },
        ],
        tooltipSettings19: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type20: 'Column',
        valueType20: 'Category',
        fill20: '#3C78EF',
        negativePointColor20: '#fc5070',
        dataSource20: [
             { x: 0, xval: '2005', yval: 8.33 },
            { x: 1, xval: '2006', yval: 8.25 },
            { x: 2, xval: '2007', yval: 8.2 },
            { x: 3, xval: '2008', yval: 8.18 },
            { x: 4, xval: '2009', yval: 8.18 },
            { x: 5, xval: '2010', yval: 8.21 },
            { x: 6, xval: '2011', yval: 8.3 },
            { x: 7, xval: '2012', yval: 8.33 },
            { x: 8, xval: '2013', yval: 8.37 },
            { x: 9, xval: '2014', yval: 8.42 },
        ],
        axisSettings20: {
            minY: 8
        },
        tooltipSettings20: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type21: 'Line',
        valueType21: 'Category',
        fill21: '#3C78EF',
        negativePointColor21: '#fc5070',
        dataSource21: [
           { x: 0, xval: '2005', yval: 1080264000 },
            { x: 1, xval: '2006', yval: 1095352000 },
            { x: 2, xval: '2007', yval: 1129866000 },
            { x: 3, xval: '2008', yval: 1147996000 },
            { x: 4, xval: '2009', yval: 1166079000 },
            { x: 5, xval: '2010', yval: 1173108000 },
            { x: 6, xval: '2011', yval: 1189173000 },
            { x: 7, xval: '2012', yval: 1205074000 },
            { x: 8, xval: '2013', yval: 1220800000 },
            { x: 9, xval: '2014', yval: 1236345000 },
        ],
        tooltipSettings21: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type22: 'Area',
        valueType22: 'Category',
        fill22: '#3C78EF',
        opacity22: 1,
        border22: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor22: '#fc5070',
        dataSource22: [
            { x: 0, xval: '2005', yval: 328.59 },
            { x: 1, xval: '2006', yval: 333.18 },
            { x: 2, xval: '2007', yval: 343.68 },
            { x: 3, xval: '2008', yval: 349.19 },
            { x: 4, xval: '2009', yval: 354.73 },
            { x: 5, xval: '2010', yval: 356.86 },
            { x: 6, xval: '2011', yval: 361.75 },
            { x: 7, xval: '2012', yval: 366.59 },
            { x: 8, xval: '2013', yval: 371.37 },
            { x: 9, xval: '2014', yval: 376.1 },
        ],
        tooltipSettings22: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type23: 'WinLoss',
        valueType23: 'Category',
        fill23: '#3C78EF',
        negativePointColor23: '#fc5070',
        dataSource23: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: -1 },
            { x: 2, xval: '2007', yval: 1 },
            { x: 3, xval: '2008', yval: -1 },
            { x: 4, xval: '2009', yval: -1 },
            { x: 5, xval: '2010', yval: -1 },
            { x: 6, xval: '2011', yval: -1 },
            { x: 7, xval: '2012', yval: -1 },
            { x: 8, xval: '2013', yval: -1 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings23: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type24: 'Column',
        valueType24: 'Category',
        fill24: '#3C78EF',
        negativePointColor24: '#fc5070',
        dataSource24: [
            { x: 0, xval: '2005', yval: 22.32 },
            { x: 1, xval: '2006', yval: 22.01 },
            { x: 2, xval: '2007', yval: 22.69 },
            { x: 3, xval: '2008', yval: 22.22 },
            { x: 4, xval: '2009', yval: 21.76 },
            { x: 5, xval: '2010', yval: 21.34 },
            { x: 6, xval: '2011', yval: 20.97 },
            { x: 7, xval: '2012', yval: 20.6 },
            { x: 8, xval: '2013', yval: 20.24 },
            { x: 9, xval: '2014', yval: 19.89 },
        ],
        axisSettings24: {
            minY: 19
        },
        tooltipSettings24: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type25: 'Line',
        valueType25: 'Category',
        fill25: '#3C78EF',
        negativePointColor25: '#fc5070',
        dataSource25: [
            { x: 0, xval: '2005', yval: 143420300 },
            { x: 1, xval: '2006', yval: 142893500 },
            { x: 2, xval: '2007', yval: 141377800 },
            { x: 3, xval: '2008', yval: 140702100 },
            { x: 4, xval: '2009', yval: 140041200 },
            { x: 5, xval: '2010', yval: 139390200 },
            { x: 6, xval: '2011', yval: 138739900 },
            { x: 7, xval: '2012', yval: 142517700 },
            { x: 8, xval: '2013', yval: 142500500 },
            { x: 9, xval: '2014', yval: 142470300 },
        ],
        tooltipSettings25: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type26: 'Area',
        valueType26: 'Category',
        fill26: '#3C78EF',
        opacity26: 1,
        border26: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor26: '#fc5070',
        dataSource26: [
            { x: 0, xval: '2005', yval: 8.4 },
            { x: 1, xval: '2006', yval: 8.37 },
            { x: 2, xval: '2007', yval: 8.28 },
            { x: 3, xval: '2008', yval: 8.24 },
            { x: 4, xval: '2009', yval: 8.19 },
            { x: 5, xval: '2010', yval: 8.15 },
            { x: 6, xval: '2011', yval: 8.11 },
            { x: 7, xval: '2012', yval: 8.34 },
            { x: 8, xval: '2013', yval: 8.33 },
            { x: 9, xval: '2014', yval: 8.33 },
        ],
        tooltipSettings26: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type27: 'WinLoss',
        valueType27: 'Category',
        fill27: '#3C78EF',
        negativePointColor27: '#fc5070',
        dataSource27: [
             { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: 0 },
            { x: 2, xval: '2007', yval: -1 },
            { x: 3, xval: '2008', yval: 1 },
            { x: 4, xval: '2009', yval: 0 },
            { x: 5, xval: '2010', yval: 0 },
            { x: 6, xval: '2011', yval: 0 },
            { x: 7, xval: '2012', yval: -1 },
            { x: 8, xval: '2013', yval: 1 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings27: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type28: 'Column',
        valueType28: 'Category',
        fill28: '#3C78EF',
        negativePointColor28: '#fc5070',
        dataSource28: [
            { x: 0, xval: '2005', yval: 9.8 },
            { x: 1, xval: '2006', yval: 9.95 },
            { x: 2, xval: '2007', yval: 10.92 },
            { x: 3, xval: '2008', yval: 11.03 },
            { x: 4, xval: '2009', yval: 11.1 },
            { x: 5, xval: '2010', yval: 11.11 },
            { x: 6, xval: '2011', yval: 11.05 },
            { x: 7, xval: '2012', yval: 10.94 },
            { x: 8, xval: '2013', yval: 12.11 },
            { x: 9, xval: '2014', yval: 11.87 },
        ],
        axisSettings28: {
            minY: 9.5
        },
        tooltipSettings28: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type29: 'Line',
        valueType29: 'Category',
        fill29: '#3C78EF',
        negativePointColor29: '#fc5070',
        dataSource29: [
            { x: 0, xval: '2005', yval: 9001774 },
            { x: 1, xval: '2006', yval: 9016596 },
            { x: 2, xval: '2007', yval: 9031088 },
            { x: 3, xval: '2008', yval: 9045389 },
            { x: 4, xval: '2009', yval: 9059651 },
            { x: 5, xval: '2010', yval: 9074055 },
            { x: 6, xval: '2011', yval: 9074055 },
            { x: 7, xval: '2012', yval: 9103788 },
            { x: 8, xval: '2013', yval: 9119423 },
            { x: 9, xval: '2014', yval: 9723809 },
        ],
        tooltipSettings29: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type30: 'Area',
        valueType30: 'Category',
        fill30: '#3C78EF',
        opacity30: 1,
        border30: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor30: '#fc5070',
        dataSource30: [
            { x: 0, xval: '2005', yval: 20.01 },
            { x: 1, xval: '2006', yval: 20.04 },
            { x: 2, xval: '2007', yval: 20.07 },
            { x: 3, xval: '2008', yval: 20.1 },
            { x: 4, xval: '2009', yval: 20.12 },
            { x: 5, xval: '2010', yval: 20.15 },
            { x: 6, xval: '2011', yval: 20.18 },
            { x: 7, xval: '2012', yval: 20.22 },
            { x: 8, xval: '2013', yval: 20.25 },
            { x: 9, xval: '2014', yval: 21.59 },
        ],
        tooltipSettings30: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type31: 'WinLoss',
        valueType31: 'Category',
        fill31: '#3C78EF',
        negativePointColor31: '#fc5070',
        dataSource31: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: -1 },
            { x: 2, xval: '2007', yval: 0 },
            { x: 3, xval: '2008', yval: 0 },
            { x: 4, xval: '2009', yval: 0 },
            { x: 5, xval: '2010', yval: 0 },
            { x: 6, xval: '2011', yval: 0 },
            { x: 7, xval: '2012', yval: 1 },
            { x: 8, xval: '2013', yval: 1 },
            { x: 9, xval: '2014', yval: 1 },
        ],
        tooltipSettings31: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type32: 'Column',
        valueType32: 'Category',
        fill32: '#3C78EF',
        negativePointColor32: '#fc5070',
        dataSource32: [
            { x: 0, xval: '2005', yval: 10.36 },
            { x: 1, xval: '2006', yval: 10.27 },
            { x: 2, xval: '2007', yval: 10.2 },
            { x: 3, xval: '2008', yval: 10.15 },
            { x: 4, xval: '2009', yval: 10.13 },
            { x: 5, xval: '2010', yval: 10.14 },
            { x: 6, xval: '2011', yval: 10.18 },
            { x: 7, xval: '2012', yval: 10.24 },
            { x: 8, xval: '2013', yval: 10.33 },
            { x: 9, xval: '2014', yval: 11.92 },
        ],
        axisSettings32: {
            minY: 10
        },
        tooltipSettings32: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type33: 'Line',
        valueType33: 'Category',
        fill33: '#3C78EF',
        negativePointColor33: '#fc5070',
        dataSource33: [
            { x: 0, xval: '2005', yval: 60441460 },
            { x: 1, xval: '2006', yval: 60609150 },
            { x: 2, xval: '2007', yval: 60776240 },
            { x: 3, xval: '2008', yval: 60943910 },
            { x: 4, xval: '2009', yval: 61113200 },
            { x: 5, xval: '2010', yval: 62348450 },
            { x: 6, xval: '2011', yval: 62698360 },
            { x: 7, xval: '2012', yval: 63047160 },
            { x: 8, xval: '2013', yval: 63395580 },
            { x: 9, xval: '2014', yval: 63742980 },
        ],
        tooltipSettings33: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type34: 'Area',
        valueType34: 'Category',
        fill34: '#3C78EF',
        opacity34: 1,
        border34: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor34: '#fc5070',
        dataSource34: [
            { x: 0, xval: '2005', yval: 246.88 },
            { x: 1, xval: '2006', yval: 247.57 },
            { x: 2, xval: '2007', yval: 248.25 },
            { x: 3, xval: '2008', yval: 248.93 },
            { x: 4, xval: '2009', yval: 250.86 },
            { x: 5, xval: '2010', yval: 255.94 },
            { x: 6, xval: '2011', yval: 257.37 },
            { x: 7, xval: '2012', yval: 258.8 },
            { x: 8, xval: '2013', yval: 260.23 },
            { x: 9, xval: '2014', yval: 261.66 },
        ],
        tooltipSettings34: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type35: 'WinLoss',
        valueType35: 'Category',
        fill35: '#3C78EF',
        negativePointColor35: '#fc5070',
        dataSource35: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: 0 },
            { x: 2, xval: '2007', yval: 0 },
            { x: 3, xval: '2008', yval: 0 },
            { x: 4, xval: '2009', yval: 0 },
            { x: 5, xval: '2010', yval: 1 },
            { x: 6, xval: '2011', yval: 0 },
            { x: 7, xval: '2012', yval: -1 },
            { x: 8, xval: '2013', yval: 0 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings35: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type36: 'Column',
        valueType36: 'Category',
        fill36: '#3C78EF',
        negativePointColor36: '#fc5070',
        dataSource36: [
           { x: 0, xval: '2005', yval: 10.78 },
            { x: 1, xval: '2006', yval: 10.71 },
            { x: 2, xval: '2007', yval: 10.67 },
            { x: 3, xval: '2008', yval: 10.65 },
            { x: 4, xval: '2009', yval: 10.65 },
            { x: 5, xval: '2010', yval: 12.34 },
            { x: 6, xval: '2011', yval: 12.29 },
            { x: 7, xval: '2012', yval: 12.27 },
            { x: 8, xval: '2013', yval: 12.26 },
            { x: 9, xval: '2014', yval: 12.22 },
        ],
        axisSettings36: {
            minY: 10
        },
        tooltipSettings36: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type37: 'Line',
        valueType37: 'Category',
        fill37: '#3C78EF',
        negativePointColor37: '#fc5070',
        dataSource37: [
             { x: 0, xval: '2005', yval: 295734100 },
            { x: 1, xval: '2006', yval: 298444200 },
            { x: 2, xval: '2007', yval: 301139900 },
            { x: 3, xval: '2008', yval: 303824600 },
            { x: 4, xval: '2009', yval: 307212100 },
            { x: 5, xval: '2010', yval: 310232900 },
            { x: 6, xval: '2011', yval: 313232000 },
            { x: 7, xval: '2012', yval: 313847500 },
            { x: 8, xval: '2013', yval: 316668600 },
            { x: 9, xval: '2014', yval: 318892100 },
        ],
        tooltipSettings37: {
            visible: true,
            format: '${xval} : ${yval}',
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        type38: 'Area',
        valueType38: 'Category',
        fill38: '#3C78EF',
        opacity38: 1,
        border38: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor38: '#fc5070',
        dataSource38: [
            { x: 0, xval: '2005', yval: 30.71 },
            { x: 1, xval: '2006', yval: 30.99 },
            { x: 2, xval: '2007', yval: 30.65 },
            { x: 3, xval: '2008', yval: 30.92 },
            { x: 4, xval: '2009', yval: 31.26 },
            { x: 5, xval: '2010', yval: 31.57 },
            { x: 6, xval: '2011', yval: 31.88 },
            { x: 7, xval: '2012', yval: 31.94 },
            { x: 8, xval: '2013', yval: 32.23 },
            { x: 9, xval: '2014', yval: 32.45 },
        ],
        tooltipSettings38: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type39: 'WinLoss',
        valueType39: 'Category',
        fill39: '#3C78EF',
        negativePointColor39: '#fc5070',
        dataSource39: [
            { x: 0, xval: '2005', yval: 1 },
            { x: 1, xval: '2006', yval: -1 },
            { x: 2, xval: '2007', yval: -1 },
            { x: 3, xval: '2008', yval: -1 },
            { x: 4, xval: '2009', yval: 1 },
            { x: 5, xval: '2010', yval: -1 },
            { x: 6, xval: '2011', yval: -1 },
            { x: 7, xval: '2012', yval: -1 },
            { x: 8, xval: '2013', yval: -1 },
            { x: 9, xval: '2014', yval: -1 },
        ],
        tooltipSettings39: {
            visible: true,
            format: '${xval} : ${yval}',
        },
        type40: 'Column',
        valueType40: 'Category',
        fill40: '#3C78EF',
        negativePointColor40: '#fc5070',
        dataSource40: [
            { x: 0, xval: '2005', yval: 14.14 },
            { x: 1, xval: '2006', yval: 14.14 },
            { x: 2, xval: '2007', yval: 14.16 },
            { x: 3, xval: '2008', yval: 14.18 },
            { x: 4, xval: '2009', yval: 13.82 },
            { x: 5, xval: '2010', yval: 13.83 },
            { x: 6, xval: '2011', yval: 13.83 },
            { x: 7, xval: '2012', yval: 13.68 },
            { x: 8, xval: '2013', yval: 13.66 },
            { x: 9, xval: '2014', yval: 13.42 },
        ],
        axisSettings40: {
            minY: 13
        },
        tooltipSettings40: {
            visible: true,
            format: '${xval} : ${yval}',
        }
}
},
provide:{
    sparkline:[SparklineTooltip]
},
methods:{
    load:function(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    }
}
})
</script>
