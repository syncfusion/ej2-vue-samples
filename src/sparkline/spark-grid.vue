<template>
<div>
<div class="control-section">
    <div id="sparkline" class="row">
        <div class="cols-sample-area">
            <ejs-grid id='Grid' :dataSource='dataSource' :allowSelection='allowSelection' :enableHover='enableHover' height=400>
                    <e-columns>
                        <e-column field="EmployeeID" headerText="ID" width=40 textAlign="Right" />
                        <e-column field="CustomerID" headerText="Name" width=60 />
                        <e-column field="OrderDate" headerText="Order Date" width=65 textAlign="Right" format="yMd" />
                        <e-column field="ShipCountry" headerText="Ship Country" width=70 />
                        <e-column headerText="Tax per annum" width=100 textAlign="Center" :template='cTemplate' />
                        <e-column headerText="One Day Index" width=100 textAlign="Center" :template='gTemplate' />
                        <e-column headerText="Year GR" width=100 textAlign="Center" :template='zTemplate' />
                    </e-columns>
            </ejs-grid>
        </div>
    </div>
</div>
<div id="action-description">
    <p>
        This sample demonstrates rendering sparklines in data grid control.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render sparkline inside the data grid control.
    </p>
</div>
</div>
</template>
<style>
    .e-headertext{
        font-weight: bolder;
    }
</style>
<script>
import Vue from 'vue';
import { GridPlugin, Selection } from '@syncfusion/ej2-vue-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { orderdata } from './datasource';
import sparkgridVue from "./spark-grid-one.vue";
import sparkgridVue2 from "./spark-grid-two.vue";
import sparkgridVue3 from "./spark-grid-three.vue";
import { SparklinePlugin, Sparkline } from '@syncfusion/ej2-vue-charts';
import { line, column } from "./grid";
Vue.use(GridPlugin);
Vue.use(SparklinePlugin);
let lineData = line;
let columnData = column;
let winloss = () => {
    let windata = [];
    let r;
    for (let i = 1; i <= 12; i++) {
        r = Math.random();
        if (r <= 0.2) {
            windata.push(-Math.random() * 10);
        } else {
            windata.push(Math.random() * 10);
        }
    }
    return windata;
};
export default Vue.extend({
data:function(){
    return{
        dataSource: new DataManager(orderdata).executeLocal(new Query().take(20)),
        allowSelection: false,        
        enableHover: true,
        cTemplate: function () {
                return {
                    template: sparkgridVue
                }
            },
        gTemplate: function () {
                return {
                    template: sparkgridVue2
                }
            },
        zTemplate: function(){
            return {
                template: sparkgridVue3
            }
        }
    }
},
mounted:function(){
     setTimeout(() => {
         for (let i = 1; i < 21; i++) {
            let line = new Sparkline({
                height: '50px',
                width: '150px', 
                lineWidth: 2,
                valueType: 'Numeric',
                fill: '#3C78EF',
                load:load,
                dataSource: getSparkData('line', i)
            });
            line.appendTo('#spkline' + i);
            let column = new Sparkline({
                height: '50px',
                width: '150px', 
                type: 'Column',
                valueType: 'Numeric',
                fill: '#3C78EF',
                load:load,
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', i)
            });
            column.appendTo('#spkarea' + i);
            let winloss = new Sparkline({
                height: '50px',
                width: '150px',
                type: 'WinLoss',
                valueType: 'Numeric',
                fill: '#3C78EF',
                load:load,
                tiePointColor: 'darkgray',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', i)
            });
            winloss.appendTo('#spkwl' + i);
        }
     }, 100);
     /* custom code start */
 function load(args){
        let theme = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
    }
    /* custom code end */
function getSparkData(type, count){
    if (type === 'line') {
        return lineData[count];
    } else {
        return columnData[count];
    }
}
},
provide: {
    grid: [Selection]
}
})
</script>
