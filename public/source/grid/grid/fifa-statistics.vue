<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>In this demo, the Syncfusion DataGrid displays comprehensive FIFA World Cup records and statistics, covering the entire history of the tournament from 1930 to 2022. The FIFA World Cup statistics and data utilized in this application are sourced from <code><a href="https://en.wikipedia.org/wiki/FIFA_World_Cup_records_and_statistics" target="_blank">Wikipedia</a></code>. We sincerely thank Wikipedia for their invaluable resource, which has been instrumental in preparing this demonstration.
        </p>
    </div>
    <div class="content-wrapper">
        <ejs-tooltip
          ref="tooltip"
          cssClass="fifa_tooltip"
          target=".infotooltip"
          opensOn="Hover"
          width="275"
          :beforeRender="beforeRender"
          :beforeOpen="beforeOpen"
        >
         <div id="fifa_grid">
            <ejs-grid
              ref="gridRef"
              :dataSource="fifaData"
              gridLines="Both"
              :allowSorting="true"
              :enableStickyHeader="true"
              :allowTextWrap="true"
              :textWrapSettings="{ wrapMode: 'Content' }"
              :enableAltRow="true"
              :enableHover="false"
              :allowSelection="false"
              :queryCellInfo="queryCellInfo"
              :dataBound="dataBound"
            >
             <e-columns>
              <e-column field="Year" headerText="Year" textAlign="Right" width="100" />
              <e-column field="Host"       headerText="Organizer"        template="<div></div>" width="140" />
              <e-column field="Champions"  headerText="Champions"         template="<div></div>" width="140" />
              <e-column field="Coach"      headerText="Winning Coach"     template="<div></div>" width="185" />
              <e-column field="TopScorer"  headerText="Most Scorer(s)"    template="<div></div>" width="185" />
              <e-column field="BestPlayerAward" headerText="Player of Season" template="<div></div>" width="170" />
            </e-columns>
            </ejs-grid>
          </div>
        </ejs-tooltip>
      </div>

     <div id="description">
        <p>
          This section provides detailed information about the FIFA World Cup, including the year, host country, champion team, top scorer, best player, and winning coach. The data is enhanced with flags, icons, and hyperlinks for easy access to more details. The Grid <code><a href="https://ej2.syncfusion.com/vue/documentation/api/grid/gridColumn/#template" target="_blank">column template </a></code> feature allows custom content in grid cells, creating a rich, interactive display
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { enableRipple } from '@syncfusion/ej2-base';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  QueryCellInfoEventArgs,
  Grid
} from '@syncfusion/ej2-vue-grids';
import {
  TooltipComponent,
  TooltipEventArgs,
  Tooltip
} from '@syncfusion/ej2-vue-popups';
import {
  fifaData,
  webpfiles,
  countryInfo,
  teamInfo,
  coachInfo,
  topScorerInfo,
  bestPlayerInfo,
  FifaDetails
} from './data-source';

Grid.Inject(Sort);

export default defineComponent({
  name: 'FifaGrid',
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-tooltip': TooltipComponent
  },
  provide: {
    grid: [Sort],
    popup: [Tooltip]
  },

  data() {
    return {
      fifaData,
      webpfiles,
      countryInfo,
      teamInfo,
      coachInfo,
      topScorerInfo,
      bestPlayerInfo,
      gridRef: null as GridComponent | null,
      tooltipRef: null as TooltipComponent|null,
      isVertical: false
    };
  },

   mounted() {
    enableRipple(true);
    this.gridRef = this.$refs.gridRef as GridComponent;
    this.tooltipRef = this.$refs.tooltip    as TooltipComponent;
  },
  methods: {
    beforeRender(args: any) {
      this.isVertical = false;
      const grid = this.gridRef?.ej2Instances;
      if (!grid) return;

      const td = (args.target as HTMLElement)?.closest('td');
      if (!td) return;

      const rowInfo = grid.getRowInfo(td);
      const field = (rowInfo.column as { field?: string })?.field;

      let value: any = null;
      if (field && rowInfo.rowData) {
        const rowData = rowInfo.rowData as Record<string, any>;
        value = rowData[field];
      }

      let src = '';
      let html = '';
      let hide = false;
      if(value){
        switch (field) {
          case 'Host':
            value = args.target.title;
            src = `src/grid/images/FifaStatistics/country/${
              this.webpfiles.includes(value) ? value + '.webp' : value + '.png'
            }`;
            html = this.countryInfo[0][value.replace(/ /g, '_')];
            break;
          case 'Champions':
            src = `src/grid/images/FifaStatistics/team/${value}.png`;
            html = this.teamInfo[0][value.replace(/ /g, '_')];
            break;
          case 'Coach':
            if (args.target.tagName === 'IMG') {
              if (rowInfo.rowData && 'Champions' in rowInfo.rowData) {
                  const rowData = rowInfo.rowData as Record<string, any>;
                  value = rowData['Champions'];
                  src = `src/grid/images/FifaStatistics/country/${
                    this.webpfiles.includes(value) ? value + '.webp' : value + '.png'
                  }`;
                  html = this.countryInfo[0][value.replace(/ /g, '_')];
              }
            } else {
              if (value === 'Juan López') hide = true;
              src = `src/grid/images/FifaStatistics/coach/${
                value
              }${value === 'Aymoré Moreira' ? '.png' : '.jpg'}`;
              html = this.coachInfo[0][value.replace(/ /g, '_')];
            }
            break;
          case 'TopScorer':
            value = args.target.title;
            if (args.target.tagName === 'IMG') {
              if (value === 'Croatia') hide = true;
              src = `src/grid/images/FifaStatistics/team/${value}.png`;
              html = this.teamInfo[0][value.replace(/ /g, '_')];
            } else {
              src = `src/grid/images/FifaStatistics/top_scorer/${value}.jpg`;
              html = this.topScorerInfo[0][value.replace(/ /g, '_')];
            }
            break;
          case 'BestPlayerAward':
            if (args.target.tagName === 'IMG') {
              if (rowInfo.rowData && 'BestPlayerCountry' in rowInfo.rowData) {
                const rowData = rowInfo.rowData as Record<string, any>;
                value = rowData['BestPlayerCountry'];
                
                if (value === 'Croatia') hide = true;
                src = `src/grid/images/FifaStatistics/team/${value}.png`;
                html = this.teamInfo[0][value.replace(/ /g, '_')];
              }
            } else {
                  src = `src/grid/images/FifaStatistics/best_player/${value}.jpg`;
                  html = this.bestPlayerInfo[0][value.replace(/ /g, '_')];
                }
            break;
        }

        const wrapper = document.createElement('div');
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        img.alt = '';
        img.src = src;
        img.decoding = 'async';
        img.title = value;
        img.classList.add('mw-file-element');
        img.setAttribute('dataFileWidth', '945');
        img.setAttribute('dataFileHeight', '630');

        const textDiv = document.createElement('div');
        textDiv.innerHTML = html;

        if ((args.target.tagName === 'IMG' && field === 'Coach') || field === 'Host') {
          this.isVertical = true;
          imgDiv.style.borderBottom = '1px solid #e0e0e0';
          img.width = 275;
          img.height = 175;
          textDiv.style.padding = '12px';
        } else {
          this.isVertical = false;
          wrapper.style.display = 'inline';
          imgDiv.style.display = hide ? 'none' : 'inline';
          imgDiv.style.float = 'right';
          imgDiv.style.borderLeft = '1px solid #e0e0e0';
          imgDiv.style.margin = '0 0 0 12px';
          img.width = 190;
          img.height = 245;
          textDiv.style.padding = '12px 0 12px 12px';
        }

        imgDiv.appendChild(img);
        wrapper.appendChild(imgDiv);
        wrapper.appendChild(textDiv);
        args.content = wrapper;
        const tooltipObj = this.tooltipRef!.ej2Instances as Tooltip;
        tooltipObj.width = this.getTooltipWidth();
        tooltipObj.content = wrapper;
        tooltipObj.dataBind();
      }
    },

    beforeOpen: function(args: TooltipEventArgs) {
      const width = this.getTooltipWidth(); 
      args.element.style.maxWidth = width;
      args.element.style.width = width;
    },

    getTooltipWidth(): string {
      return this.isVertical ? '275px' : '425px';
    },

    queryCellInfo: function(args: QueryCellInfoEventArgs) {
      const field = args.column?.field as keyof FifaDetails;
      if (['Host', 'Champions', 'Coach', 'TopScorer', 'BestPlayerAward'].includes(field)) {
        const cell = args.cell!.childNodes[0] as HTMLElement;
        const raw = (args.data as any)[field] as string;
        const values = raw.split(',');
        const countries = ((args.data as FifaDetails).TopScorerCountry || '').split(',');
        const rows: FifaDetails[] = [];

        values.forEach((val, idx) => {
          const obj = { ...(args.data as FifaDetails) };
          (obj as any)[field] = val;
          if (field === 'TopScorer') obj.TopScorerCountry = countries[idx];
          rows.push(obj);
        });

        values.forEach((val, idx) => {
          const div = document.createElement('div');
          const span = document.createElement('span');
          if (!(field === 'TopScorer' && val.includes('Players')) && val !== 'Not awarded') {
            span.appendChild(this.renderImage(rows[idx], field));
          }
          let link: HTMLElement;
          if (
            (field === 'TopScorer' && (val.includes('Players') || val.includes('Ronaldo'))) ||
            (field === 'BestPlayerAward' && ['Not awarded', 'Mario Kempes', 'Paolo Rossi', 'Salvatore Schillaci'].includes(val))
          ) {
            link = document.createElement('span');
            link.textContent = val;
          } else {
            const a = document.createElement('a');
            a.href = 'https://ej2.syncfusion.com/';
            a.textContent = val;
            a.target = '_blank';
            a.classList.add('infotooltip');
            a.title = val;
            a.onclick = e => e.preventDefault();
            link = a;
          }
          div.appendChild(span);
          div.appendChild(link);
          cell.appendChild(div);
        });

        if (field === 'TopScorer') {
          cell.appendChild(this.renderScoreIcons(args.data as FifaDetails));
        }

        if (field === 'BestPlayerAward') {
          const idx = parseInt(args.cell!.getAttribute('index')!, 10);
          args.rowSpan = this.calculateRowspan(args, idx);
        }
      }
    },

    calculateRowspan: function(args: QueryCellInfoEventArgs, rowIndex: number): number {
      let span = 1;
      const data = this.gridRef!.ej2Instances.currentViewData as any[];
      const field = args.column!.field as keyof FifaDetails;
      for (let i = rowIndex + 1; i < data.length; i++) {
        if ((args.data as any)[field] !== data[i][field]) break;
        span++;
      }
      return span;
    },

    renderImage: function(row: FifaDetails, field: keyof FifaDetails): HTMLElement {
      let val = '';
      switch (field) {
        case 'Host': val = row.Host; break;
        case 'Champions':
        case 'Coach': val = row.Champions; break;
        case 'TopScorer': val = row.TopScorerCountry; break;
        case 'BestPlayerAward': val = row.BestPlayerCountry; break;
      }
      const img = document.createElement('img');
      img.alt = '';
      img.src = `src/grid/images/FifaStatistics/country/${
        this.webpfiles.includes(val) ? val + '.webp' : val + '.png'
      }`;
      img.decoding = 'async';
      img.title = val;
      img.width = 23;
      img.height = 15;
      if (['Coach', 'TopScorer', 'BestPlayerAward'].includes(field)) {
        img.classList.add('infotooltip');
      }
      img.setAttribute('dataFileWidth', '945');
      img.setAttribute('dataFileHeight', '630');
      return img;
    },

    renderScoreIcons: function(rowDetails: FifaDetails): HTMLElement {
      const div = document.createElement('div');
      for (let i = 0; i < rowDetails.TotalGoal; i++) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'goal');
        svg.setAttribute('width', '14');
        svg.setAttribute('height', '14');
        svg.setAttribute('viewBox', '0 0 14 14');
        svg.setAttribute('fill', 'none');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill-rule', 'evenodd');
        path.setAttribute('clip-rule', 'evenodd');
        path.setAttribute(
            "d",
            "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM9.45103 9.48743L11.9038 9.65149C12.3112 8.95696 12.5764 8.16672 12.6584 7.32454L10.5776 6.01477C10.46 5.93821 10.3698 5.82336 10.326 5.68938C10.2823 5.5554 10.2877 5.41047 10.3397 5.27922L11.253 2.99875C10.7088 2.38625 10.0334 1.89133 9.27329 1.55774L7.38384 3.13274C7.2772 3.22297 7.13774 3.27219 6.99829 3.27219C6.85884 3.27219 6.72212 3.22297 6.61274 3.13274L4.72329 1.55774C3.96313 1.89133 3.28774 2.38625 2.7436 2.99875L3.65415 5.27922C3.7061 5.41047 3.71157 5.5554 3.66782 5.68938C3.62407 5.82336 3.53657 5.93821 3.41626 6.01477L1.33813 7.32454C1.41743 8.16672 1.6854 8.95696 2.09282 9.65149L4.54556 9.48743C4.68774 9.47922 4.82993 9.51751 4.94204 9.60227C5.05415 9.68704 5.13618 9.80735 5.17173 9.94407L5.77329 12.3284C6.16978 12.4132 6.5772 12.4597 6.99829 12.4597C7.41938 12.4597 7.82954 12.4159 8.22329 12.3284L8.82485 9.94407C8.85767 9.80462 8.9397 9.68704 9.05454 9.60227C9.16938 9.51751 9.30884 9.47922 9.45103 9.48743ZM5.30298 5.81516L6.61274 4.86633C6.84243 4.69954 7.15415 4.69954 7.38384 4.86633V4.8636L8.6936 5.81516C8.92329 5.98196 9.01899 6.27727 8.93149 6.54797L8.4311 8.08743C8.3436 8.35813 8.09204 8.54133 7.80767 8.54133H6.18892C5.90454 8.54133 5.65298 8.35813 5.56548 8.08743L5.06509 6.54797C4.97759 6.27727 5.07329 5.98196 5.30298 5.81516Z"
        );
        svg.appendChild(path);
        div.appendChild(svg);
      }
      return div;
    },

    dataBound: function() {
      if (this.gridRef?.ej2Instances) {
        const tbl = this.gridRef.ej2Instances.element.querySelector('.e-gridcontent table');
        if (tbl) { tbl.classList.add('tournament'); }
      }
    }
  }
});
</script>
<style>
    .fifa_tooltip.e-tooltip-wrap {
        border-radius: 15px;
    }

    .fifa_tooltip.e-tooltip-wrap .e-tip-content {
        padding: 0;
        line-height: 20px;
        font-size: 14px;
    }

    #fifa_grid .e-rowcell img {
        margin: 0 3px;
    }

    /* Grid */

    #fifa_grid .e-gridcontent,
    #fifa_grid .e-gridcontent .e-content,
    #fifa_grid .e-gridcontent table {
        background: transparent;
    }

    #fifa_grid .goal {
        margin-right: 3px;
        margin-top: 5px;
        opacity: 0.6;
    }

    #fifa_grid .goal path {
        fill: #000000;
    }

    .fluent-dark #fifa_grid .goal path,
    .fluent2-dark #fifa_grid .goal path,
    .tailwind-dark #fifa_grid .goal path,
    .tailwind3-dark #fifa_grid .goal path,
    .bootstrap5\.3-dark #fifa_grid .goal path,
    .material-dark #fifa_grid .goal path,
    .material3-dark #fifa_grid .goal path,
    .fabric-dark #fifa_grid .goal path,
    .bootstrap-dark #fifa_grid .goal path,
    .bootstrap4-dark #fifa_grid .goal path,
    .bootstrap5-dark #fifa_grid .goal path,
    .highcontrast #fifa_grid .goal path {
        fill: #D3D8D4;
    }

    #fifa_grid .e-gridcontent table.tournament::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(../../src/grid/images/FifaStatistics/WorldCup.png);
        background-size: auto;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.1;
        pointer-events: none;
    }
</style>