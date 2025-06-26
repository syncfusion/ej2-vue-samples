<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the overview of basic Tree Grid features such as sorting, filtering, conditional formatting, column template and scrolling.</p>
    </div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='states' :height='400' :allowReordering='true' :allowFiltering='true'
        :allowSorting='true' :filterSettings='filterSettings' :queryCellInfo='queryCellInfo' >
            <e-columns>
                <e-column field='name' headerText='Province' width='210' :template="flagtemplate" :filter="{ type:'Excel', itemTemplate:flagtemplate }"></e-column>
                <e-column field='population' headerText='Population (Million)' width='250' textAlign='Right'></e-column>
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
 /deep/ .e-treeoverview {
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
        background-color: inherit !important;
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
    
    /deep/ .e-bigger.tailwind3 .e-grid .statustemp, .e-bigger.tailwind3-dark .e-grid .statustemp,
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
    /deep/ .tailwind3 .e-grid #coordinates.e-checkbox-wrapper .e-label, .e-css.e-checkbox-wrapper .e-label,
    .tailwind3-dark .e-grid #coordinates.e-checkbox-wrapper .e-label, .e-css.e-checkbox-wrapper .e-label {
        display: inline;
    }
    /deep/ #coordinates .e-treeoverview {
        filter: brightness(180%);
    }
    /deep/ .e-bigger .e-grid .e-rowcell {
        line-height: 24px;
    }
    /deep/ td.e-rowcell .statustxt {
        color: #00cc00;
        position: relative;
        background: #c3f1d0;
        border-radius: 18px;
        padding: 1px 5px 3px 7px;
    }
    /deep/ td.e-rowcell .statustxt.e-lowgdp {
        color: #e60000;
        position: relative;
        background: #ffd7cc;
        border-radius: 18px;
        padding: 1px 5px 3px 7px;
    }
    /deep/ .tailwind3 .statustxt,
    .tailwind3-dark .statustxt,
    .material .statustxt,
    .material3 .statustxt,
    .material-dark .statustxt,
    .material3-dark .statustxt,
    .bootstrap4 .statustxt,
    .bootstrap .statustxt,
    .bootstrap-dark .statustxt {
        color: #00cc00;
        position: relative;
        background: #c3f1d0;
        border-radius: 18px;
        padding: 2px 5px 2px 7px;
    }
    /deep/ .tailwind3 .statustxt.e-lowgdp,
    .tailwind3-dark .statustxt.e-lowgdp,
    .material .statustxt.e-lowgdp,
    .material-dark .statustxt.e-lowgdp,
    .bootstrap4 .statustxt.e-lowgdp,
    .bootstrap .statustxt.e-lowgdp,
    .bootstrap-dark .statustxt.e-lowgdp {
        color: #e60000;
        position: relative;
        background: #ffd7cc;
        border-radius: 18px;
        padding: 2px 5px 2px 7px;
    }
</style>
<script lang="ts">
import { createApp } from "vue";
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Filter, Sort, Reorder, ITreeData } from "@syncfusion/ej2-vue-treegrid";
import { QueryCellInfoEventArgs, Column, getObject, ActionEventArgs } from '@syncfusion/ej2-grids';
import { addClass, isNullOrUndefined } from '@syncfusion/ej2-base';
import { countries } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },  
  data: () => {
    return {
      data: countries,
      filterSettings: { type: 'Excel' },
      unemploymentTemplate: function () {
        return {
            template: createApp({}).component('unemploymentTemplate', {
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
            template: createApp({}).component('flagtemplate', {
                template: `<div class="flagimage" style="display: inline"><img :src="getFlagPath(data)" class="e-image e-treeoverview" :alt="data.name" aria-label="Flag template" :style="{ height: '14px', width: '14px', marginRight: '8px' }"></div><div style="display: inline; vertical-align: middle;">{{ data.name }}</div>`,
            data: function () {
                 return { data: { } }; },
                methods: {
                    getFlagPath(data:any) {
                        const basePath = location.href.includes("stackblitz") 
                                         ? 'https://ej2.syncfusion.com/vue/demos/' 
                                         : '';
                        return `${basePath}source/tree-grid/images/${data.parentItem ? data.parentItem.name : data.name}.png`;
                    }
                }
            })
        }
    },
    ratingTemplate: function () {
        return {
            template: createApp({}).component('ratingTemplate', {
                template: '<div id="status" class="rating" aria-label="Rating template">\
                    <span v-for="i in item" :class="{checked: i <= data.rating, star: true}"></span>\
            </div>',
            data: function () { return { data: {}, item: [1, 2, 3, 4, 5] }; }
            })
        }
    },
    locationTemplate: function () {
        return {
            template: createApp({}).component('locationTemplate', {
                template: '<div id="coordinates"><img :src="getLocationPath(data)" class="e-treeoverview" :alt="data.coordinates" aria-label="Location template"/> &nbsp <a target="_blank" href="https://www.google.com/maps/place/${data.coordinates}">{{data.coordinates}}</a></div>',
            data: function() { return { data: {} }; },
            methods: {
                getLocationPath(data:any) {
                    const basePath = location.href.includes("stackblitz") 
                                     ? 'https://ej2.syncfusion.com/vue/demos/' 
                                     : '';
                    return `${basePath}source/tree-grid/images/Map.png`;
                }
            }
            })
        }
    },
    gdpTemplate: function() {
        return {
            template: createApp({}).component('gdpTemplate', {
                template: `<div class="statustemp" aria-label="gdp template">
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
            template: createApp({}).component('timezoneTemplate', {
                template: `<div><img src="source/tree-grid/images/__Normal.png" alt="TimeZone template" class="e-img" aria-label="Timezone template"> &nbsp {{data.timezone}}</div>`,
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
            template: createApp({}).component('areaTemplate', {
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
           let imageElement = (args.cell as Element).querySelector('.e-treeoverview') as HTMLImageElement;
           if (isNullOrUndefined(parentItem)) {
               let name: string = getObject('name', args.data);
               imageElement.src = "source/tree-grid/images/" + name + ".png";
               imageElement.alt = name; 
           } else {
               let name: string = getObject('name', parentItem);
               imageElement.src = "source/tree-grid/images/" + name + ".png";
               imageElement.alt = name; 
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
            imageElement.alt = "Timezone"; 
            let timeZone: string = getObject('timezone', args.data);
            if (timeZone.indexOf('-')!== -1) {
                imageElement.className = 'negativeTimeZone';
            }
        }
    },
  },
}
</script>

