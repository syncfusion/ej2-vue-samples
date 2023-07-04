<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the overview of basic Tree Grid features such as sorting, filtering, conditional formatting, column template and scrolling.</p>
    </div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='states' :height='400' :allowReordering='true' :allowFiltering='true'
        :allowSorting='true' :filterSettings='filterSettings' :queryCellInfo='queryCellInfo' >
            <e-columns>
                <e-column field='name' headerText='Province' width='195' :template="flagtemplate"></e-column>
                <e-column field='population' headerText='Population (Million)' width='188' textAlign='Right'></e-column>
                <e-column field='gdp' headerText='GDP Rate %' :template='gdpTemplate' width='150'></e-column>
                <e-column field='rating' headerText='Credit Rating' width='150' :template='ratingTemplate' :allowFiltering='false'></e-column>
                <e-column field='unemployment' headerText='Unemployment Rate' :allowFiltering='false' width='170' :template='unemploymentTemplate'></e-column>
                <e-column field='coordinates' headerText='Coordinates' width='220' :allowSorting='false' :template='locationTemplate'></e-column>
                <e-column field='area' headerText='Area' width='140' :template='areaTemplate'></e-column>
                <e-column field='timezone' headerText='Time Zone' width='150' :template='timezoneTemplate'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

     <div id="description">
        <p>
            The Tree Grid is used to represent the hierarchical data in a tabular format, combining the visual representation of Grid and TreeView controls. 
            It represents the data from datasource such as an array of JSON objects, OData web services, or DataManager binding data fields to columns or self-referential datasource.
        </p>
        <p>
            In this demo, Tree Grid features such as <code>sorting, filtering, conditional formatting, column template and scrolling</code> are used.
        </p>
        <p>
            More information on the Tree Grid instantiation can be found in this
            <a target="_blank" 
                href="https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started/">
               documentation section</a>.
        </p>
    </div>

</div>
</template>
<style scoped>
 /deep/ .e-image {
        height: 13px;
        width: 14px;
        vertical-align: middle;
    }

    /deep/ .statustemp {
        position: relative;
        border-radius: 15px;
        text-align: center;
        background-color: #C3F1D0;
        color: #00752F;
        width: 47px;
    }
     /deep/ .material3-dark .rating .star.checked, .material3 .rating .star.checked {
        color: #6750A4;
    }

     /deep/ .material3-dark #myBar, .material3 #myBar {
        background-color: #53CA17;
    }

    /deep/ .material3-dark #myBar.progressdisable, .material3 #myBar.progressdisable {
        background-color: rgba(242, 184, 181, 1);
    }
    
    /deep/ .e-bigger.tailwind .e-grid .statustemp, .e-bigger.tailwind-dark .e-grid .statustemp,
    .e-bigger.bootstrap5 .e-grid .statustemp, .e-bigger.bootstrap5-dark .e-grid .statustemp{
        padding-top: 1px;
    }

    /deep/ .statustemp.e-lowgdp {
        background-color: #FFDBDB;
        color: #BD0000;

    }

    /deep/ td.e-rowcell .statustxt {
        color: #398120;
        position: relative;
    }

    /deep/ td.e-rowcell .statustxt.e-lowgdp {
        color: #e60000;
        position: relative;
    }

    /deep/ .rating .star {
        font-size: 132%;
        color: lightgrey;
    }

    /deep/ .rating .star.checked {
        color: #EE9E54;
    }

    /deep/ .rating .star:before {
        content: '★';
    }
    /deep/ .negativeTimeZone {
        transform: rotate(180deg);
    }
    /deep/ #myBar {
        position: absolute;
        width: 10%;
        height: 100%;
        background-color: #00b300;
    }

    /deep/ #myBar.progressdisable {
        background-color: #df2222;
    }

    /deep/ #treegridlabel {
        position: relative;
        left: 10px;
        line-height: 18px;
        font-size: 10px;
        color: white;
    }
    /deep/ .highcontrast .e-grid #myProgress {
        background-color: whitesmoke;
    }
    /deep/ #myProgress {
        position: relative;
        height: 18px;
        width: 10em;
        text-align: left;
        background-color: whitesmoke;
    }
    /deep/ #myBar.progressdisable {
        background-color: #df2222;
    }
    /deep/ .tailwind .e-grid #coordinates.e-checkbox-wrapper .e-label, .e-css.e-checkbox-wrapper .e-label,
    .tailwind-dark .e-grid #coordinates.e-checkbox-wrapper .e-label, .e-css.e-checkbox-wrapper .e-label {
        display: inline;
    }
    /deep/ #coordinates .e-image {
        filter: brightness(180%);
    }
    .e-bigger .e-grid .e-rowcell {
        line-height: 24px;
    }
</style>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Filter, TreeGridComponent, Sort, Reorder, ITreeData } from "@syncfusion/ej2-vue-treegrid";
import { QueryCellInfoEventArgs, Column, getObject, ActionEventArgs } from '@syncfusion/ej2-grids';
import { addClass, isNullOrUndefined } from '@syncfusion/ej2-base';
import { countries } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: countries,
      filterSettings: { type: 'Excel' },
      unemploymentTemplate: function () {
        return {
            template: Vue.component('unemploymentTemplate', {
                template: `<div id="myProgress" class="pbar">
                                <div id="myBar" class="bar">
                            <div id="treegridlabel" class="barlabel"></div>
                              </div>
                    </div>`,
            data: function() {
                    return {
                        data: {},
                    }
                }
          })
        }
    },
    flagtemplate: function () {
        return {
            template: Vue.component('flagtemplate', {
                template: `<div class="image" style="display: inline"><img class="e-image" :alt="data.name"> &nbsp {{data.name }}</img></div>`,
            data: function () { return { data: { } }; },
            })
        }
    },
    ratingTemplate: function () {
        return {
            template: Vue.component('ratingTemplate', {
                template: '<div id="status" class="rating">\
                    <span v-for="i in item" :class="{checked: i <= data.rating, star: true}"></span>\
            </div>',
            data: function () { return { data: {}, item: [1, 2, 3, 4, 5] }; }
            })
        }
    },
    locationTemplate: function () {
        return {
            template: Vue.component('locationTemplate', {
                template: '<div id="coordinates"><img src="source/tree-grid/images/Map.png" class="e-image" :alt="data.coordinates"/> &nbsp <a target="_blank" href="https://www.google.com/maps/place/${data.coordinates}">{{data.coordinates}}</a></div>',
            data: function() { return { data: {} }; },
            })
        }
    },
    gdpTemplate: function() {
        return {
            template: Vue.component('gdpTemplate', {
                template: `<div class="statustemp">
                <span class="statustxt">{{data.gdp}} %</span>
            </div>`,
            data: function() {
                    return {
                        data: {}
                    }
                },
            })
        }
    },
    timezoneTemplate: function() {
        return {
            template: Vue.component('timezoneTemplate', {
                template: `<div><img src="source/tree-grid/images/__Normal.png" class="e-img"> &nbsp {{data.timezone}}</img></div>`,
            data: function() {
                    return {
                        data: {}
                    }
                },
            })
        }
    },
    areaTemplate: function() {
      return {
            template: Vue.component('areaTemplate', {
                template: `<span>{{data.area}} km <sup>2</sup>
                </span>`,
            data: function() {
                    return {
                        data: {}
                    }
                },
            })
        }
    }
   };
  },
  provide: {
      treegrid: [ Filter, Sort, Reorder ]
   },
   methods:{
    queryCellInfo:function (args: QueryCellInfoEventArgs) {
        if ((args.column as Column).field === 'gdp') {
            let data: number = getObject('gdp', args.data);
            if (data < 2) {
                let status = (args.cell as Element).querySelector('.statustxt');
                (status as Element).classList.add('e-lowgdp');
                let statustemp = (args.cell as Element).querySelector('.statustemp');
                (statustemp as Element).classList.add('e-lowgdp');
            }
        }

        if ((args.column as Column).field === 'unemployment') {
           let employmentData: number = getObject('unemployment', args.data);
           let barElement; let barlabelElement;
           if (employmentData <= 4) {
               barElement = (args.cell as Element).querySelector('.bar');
               addClass([barElement as Element], ['progressdisable']);
           }
           barElement = (args.cell as Element).querySelector('.bar');
           (barElement as HTMLElement).style.width = employmentData * 10 + '%';
           barlabelElement = (args.cell as Element).querySelector('.barlabel');
           (barlabelElement as Element).textContent = employmentData + '%';
        }

        if ((args.column as Column).field === 'name') {
           let parentItem: ITreeData = getObject('parentItem', args.data);
           let imageElement = (args.cell as Element).querySelector('.e-image') as HTMLImageElement;
           if (isNullOrUndefined(parentItem)) {
               let name: string = getObject('name', args.data);
               imageElement.src = "source/tree-grid/images/" + name + ".png";
           } else {
               let name: string = getObject('name', parentItem);
               imageElement.src = "source/tree-grid/images/" + name + ".png";
           }
        }

        if ((args.column as Column).field === 'rating') {
           let rating: number = getObject('rating', args.data); let ratingElement;
           if (isNullOrUndefined(rating)) {
              ratingElement = (args.cell as Element).querySelector('.rating');
              addClass([ratingElement as Element], ['e-hide']);
           }
        }

        if ((args.column as Column).field === 'timezone') {
            let imageElement = (args.cell as Element).querySelector('.e-img') as HTMLImageElement;
            imageElement.style.filter = "brightness(150%)";
            let timeZone: string = getObject('timezone', args.data);
            if (timeZone.indexOf('-')!== -1) {
                imageElement.className = 'negativeTimeZone';
            }
        }
    },
  },
});
</script>

