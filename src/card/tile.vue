<template>
  <div class="control-section card-control-section tile_layout">
    <div class="row filter">
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
        <div class="e-float-input">
          <input type="text" required="" id="search_Card" v-on:keyup="onInputKeyup" />
          <span class="e-float-line"></span>
          <label class="e-float-text">Enter text to search</label>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 tile_search">
        <ejs-multiselect id='local' :dataSource='filterCategory' :fields='multiSelectFields' placeholder='Search by categories' :tagging='filterData' :removed='filterData'>
        </ejs-multiselect>
      </div>
    </div>
    <div class="row e-card-layout" style="text-align:center;">
      <div class="row">
        <div class="row error" v-if="cardData.length === 0 || cardData === null">
          <div class="e-error-content">
            No results found. Please try a different search.
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6" v-for="(item, index) in cardData" v-bind:key="index">
          <div class="e-card" v-bind:class="{ 'e-card-horizontal': item.isHorizontal }">
            <div class="e-card-image" v-if="item.cardImage !== null" v-bind:style="{ backgroundImage: 'url(' + item.cardImage.url + ')' }">
            </div>
            <div class="e-card-header" v-if="item.header_title !== null || item.header_subtitle !== null">
              <div class="e-card-header-caption" v-if="item.header_title !== null || item.header_subtitle !== null">
                <div class="e-card-header-title" v-if="item.header_title !== null">{{item.header_title}}</div>
                <div class="e-card-sub-title" v-if="item.header_subtitle !== null">{{item.header_subtitle}}</div>
              </div>
            </div>
            <div class="e-card-content" v-if="item.cardContent !== null"> {{item.cardContent}} </div>
            <div class="e-card-actions" v-if="item.card_action_btn !== null" v-bind:class="{ 'e-card-vertical': item.card_action_btn.isVertical }">
              <div v-for="(btn, i) of item.card_action_btn.action_btns" v-bind:key="i">
                <a v-if="btn.tag === 'a'" v-bind:href="btn.href" v-bind:target="btn.target">{{btn.text}}</a>
                <button v-else class="e-card-btn">{{btn.text}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="source_link">
      Source: <a href="https://www.syncfusion.com/ebooks/" target="_blank">https://www.syncfusion.com/ebooks</a>
    </div>
    <div id="action-description">
      <p>This sample demonstrates filter and search of the <code>card</code> based on categories, and text containing the card. You can use search box to search cards, and you can filter choosing categories in multi-select component.</p>
    </div>
    <div id="description">
      <p>Card is a small container in which user can show defined content in specific structure and it is flexible and extensible. This sample demonstrates to render the <code>Card</code> Using <a target="_blank" href="https://ej2.syncfusion.com/documentation/common/template-engine/">Template Engine</a> and it can be filtered based on <a target="_blank" href="https://ej2.syncfusion.com/documentation/data/getting-started/">data Manager</a>.</p>
      <p>More information about Card can be found in this<a href="https://ej2.syncfusion.com/vue/documentation/card/getting-started/" target="_blank"> documentation</a> section.</p>
    </div>
  </div>
</template>

<style>
  .tile_layout.card-control-section .e-float-text {
    font-size:14px;
  }

  .tile_layout.card-control-section .e-error {
    min-height:150px;
  }

  .tile_layout.card-control-section .e-error-content {
    margin:auto;
    height:inherit;
    font-size:18px;
    font-weight:500;
    color:inherit;
  }

  .tile_layout.card-control-section .row.filter .tile_search {
    justify-content: flex-end;
  }

  .tile_layout.card-control-section .row .e-card {
    text-align: left;
  }

  .tile_layout.card-control-section .control-wrapper {
    padding: 0 20px;
  }

  .tile_layout.card-control-section .row.filter {
    margin: 0;
  }

  .tile_layout.card-control-section .e-card .e-card-actions a {
    border: 1px solid;
    display: block;
    margin: auto;
    width: 100px;
    border-radius: inherit;
  }

  .tile_layout.card-control-section .e-card .e-card-header .e-card-header-caption .e-card-header-title {
    font-size: 18px;
  }

  .tile_layout.card-control-section .e-card .e-card-image {
    height: 165px;
    width: 200px;
  }

  .tile_layout.card-control-section .row.filter .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
  }

  .tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
    width: 100%;
    padding: 10px;
  }

  .card-control-section.tile_layout .e-card-layout {
    margin: auto;
    max-width: 190px;
  }

  #source_link {
    float: right;
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    #source_link {
        margin-right: 0px;
    }
  }
  @media (min-width: 960px) {
    .tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
        width: 25%;
    }
    .card-control-section.tile_layout .e-card-layout {
        max-width: 850px;
    }
  }
  @media (min-width: 540px) {
    .tile_layout.card-control-section .row.filter {
        display: flex;
    }
    .tile_layout.card-control-section .e-card .e-card-content {
        min-height: 170px;
        max-height: 170px;
    }
  }
  @media (max-width: 960px) and (min-width: 540px) {
    .tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6 {
        width: 50%;
    }
    .card-control-section.tile_layout .e-card-layout {
        max-width: 410px;
    }
  }
</style>

<script>
import Vue from "vue";
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';
import * as data from "./data.json";

Vue.use(MultiSelectPlugin);

export default Vue.extend({
  mounted: function() {
    this.emptyData = true;
    this.categoryResult = [];
    this.searchEle = document.getElementById('search_Card');
    this.multiselectComp = document.getElementById('local').ej2_instances[0];
  },
  data: function() {
    return {
      cardData: data.cardBook,
      multiSelectFields: { text: 'Name', value: 'Code' },
      filterCategory: [
        { Name: 'Client-Side', Code: 'client' },
        { Name: 'Server-Side', Code: 'server' },
        { Name: 'Front-End', Code: 'ui' }
      ]
    }
  },
  methods: {
    onInputKeyup: function(e) {
      if (e.code === 'Tab' || e.code === 'Escape' || e.code === 'ShiftLeft' || (e.code === 'Backspace' && this.emptyData)) {
        return;
      }
      var inputVal = e.target.value;
      inputVal.length === 0 ? this.emptyData = true : this.emptyData = false;
      this.filterData()
    },
    filterData: function() {
      var self = this;
      var result = [];
      this.categoryResult = [];
      if (this.multiselectComp.value !== null && this.multiselectComp.value.length > 0) {
        var categoryData = this.multiselectComp.value.toString();
        var category = categoryData.split(',');
        category.forEach(function (key) {
          var datas = new DataManager(data.cardBook).executeLocal(new Query().where('cardImage.tag', 'Contains', key, true));
          if (datas.length === 0) { return; }
          datas.forEach(function (item) {
            self.categoryResult.push(item);
          });
        });
        result = this.categoryResult;
      } 
      if (this.searchEle.value.length > 0) {
        var predicate = new Predicate('cardContent', 'Contains', this.searchEle.value, true);
        predicate = predicate.or('cardImage.title', 'Contains', this.searchEle.value, true).or('header_title', 'Contains', this.searchEle.value, true).or('header_subtitle', 'Contains', this.searchEle.value, true);
        var datas = new DataManager((this.multiselectComp.value === null || this.multiselectComp.value.length === 0) ? data.cardBook : this.categoryResult).executeLocal(new Query().where(predicate));
        if (datas.length === 0) {
          result = [];
        } else {
          this.categoryResult = [];
          datas.forEach(function (item) {
            self.categoryResult.push(item);
          });
          result = this.categoryResult;
        }
      }
      if ((this.multiselectComp.value === null || this.multiselectComp.value.length === 0) && this.searchEle.value.length === 0) {
        result = data.cardBook;
      }
      this.cardData = result;
    }
  }
});
</script>