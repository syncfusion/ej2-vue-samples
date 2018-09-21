<template>
<div class="control-section card-control-section tile_layout">
        <div class="row filter">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <div class="e-float-input">
                    <input type="text" required="" id="search_Card"  v-on:keyup="queryForKeywords">
                    <span class="e-float-line"></span>
                    <label class="e-float-text" style="font-size:14px">Enter text to search</label>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 tile_search">
                <input type="text" id="local">
            </div>
        </div>
        <div class="row e-card-layout" style="text-align:center;">
            <div class="row">
                <div class="row error" style="display:none;min-height:150px">
                    <div class="e-error-content" style="margin:auto;height:inherit;font-size:18px;font-weight:500;color:inherit">No results found. Please try a different search.</div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <!-- Tile View Layout  -->
                    <div id="card_sample_1" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_2" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_3" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_4" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_5" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_6" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_7" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_8" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_9" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_10" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_11" class="card_sample"></div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div id="card_sample_12" class="card_sample"></div>
                </div>
            </div>
        </div>
        <div id="source_link">
            Source: &nbsp;
            <a href="https://www.syncfusion.com/ebooks/" target="_blank">https://www.syncfusion.com/ebooks</a>
        </div>
        <script id="card_template" type="text/x-template">
    <div class="e-card ${if(isHorizontal)} e-card-horizontal ${/if}">
        ${if(cardImage)}
        <div class="e-card-image" style="background-image:url(${cardImage.url})">
            ${if(cardImage.title)}
            <div class="e-card-title"> ${cardImage.title} </div>
            ${/if}
        </div>
        ${/if} ${if(cardTitle)}
        <div class="e-card-title"> ${cardTitle} </div>
        ${/if} ${if(header_title || header_subtitle || header_img)}
        <div class="e-card-header">
            ${if(header_img)}
            <div class="e-card-header-image ${if(header_img.isRounded)} e-card-corner ${/if}" style="background-image:url(${header_img.url})"></div>
            ${/if} ${if(header_title || header_subtitle)}
            <div class="e-card-header-caption">
                ${if(header_title)}
                <div class="e-card-header-title">${header_title}</div>${/if} ${if(header_subtitle)}
                <div class="e-card-sub-title">${header_subtitle}</div>${/if}
            </div>
            ${/if}
        </div>
        ${/if} ${if(cardContent)}
        <div class="e-card-content"> ${cardContent} </div>
        ${/if} ${if(card_action_btn)}
        <div class="e-card-actions ${if(card_action_btn.isVertical)} e-card-vertical ${/if}">
            ${for(action_btn of card_action_btn.action_btns)} ${if(action_btn.tag === 'a')}
            <a href="${action_btn.href}" target="${action_btn.target}">${action_btn.text}</a>
            ${else}
            <button class="e-card-btn">${action_btn.text}</button>
            ${/if} ${/for}
        </div>
        ${/if}
    </div>
</script>
        <div id="action-description">
    <p>This sample demonstrates filter and search of the <code>card</code> based on categories, and text containing the card. You can use search box to search cards, and you can filter choosing categories in multi-select component.</p>
</div>
<div id="description">
    <p>Card is a small container in which user can show defined content in specific structure and it is flexible and extensible. This sample demonstrates to render the <code>Card</code> Using <a target="_blank" href="http://ej2.syncfusion.com/documentation/base/template-engine.html">Template Engine</a> and it can be filtered based on <a target="_blank" href="http://ej2.syncfusion.com/documentation/data/getting-started.html">data Manager</a>.</p>
    <p>More information about Card can be found in this<a href="" target="_blank"> documentation</a> section.</p>
</div>
    </div>
</template>
<style>
 
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
            display: flex
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
import { compile, detach } from '@syncfusion/ej2-base';
import { MultiSelect, SelectEventArgs, RemoveEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';

export default Vue.extend({
    mounted: function() {
         window.cardBook = [
            {
                header_title: ' ASP.NET MVC',
                header_subtitle: 'Nick Harrison',
                cardImage: { url: 'src/card/images/Tile_1.png', tag: 'server' },
                cardContent: 'ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/ASPNET_MVC_Succinctly', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: ' Node.js',
                header_subtitle: 'Emanuele DelBono ',
                cardImage: { url: 'src/card/images/Tile_2.png', tag: 'client' },
                cardContent: 'Node.js is a wildly popular platform for writing web applications that has revolutionized web development in many ways.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/nodejs', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: ' React.js',
                header_subtitle: 'Dmitri Nesteruk',
                cardImage: { url: 'src/card/images/Tile_3.png', tag: 'client' },
                cardContent: 'React is a JavaScript library that has revolutionized how developers design and think about views in web applications.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/reactjs_succinctly', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: ' TypeScript',
                header_subtitle: 'Steve Fenton',
                cardImage: { url: 'src/card/images/Tile_4.png', tag: 'client' },
                cardContent: 'Microsoft TypeScript extends many familiar features of .NET programming to JavaScript.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/typescript', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: ' PHP',
                header_subtitle: 'Jose Roberto Olivas Mendoza',
                cardImage: { url: 'src/card/images/Tile_5.png', tag: 'server' },
                cardContent: 'Known for its straightforward simplicity, PHP is an open source, general-purpose scripting language oriented for web development.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/php_succinctly', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: ' CSS3',
                header_subtitle: 'Peter Shaw',
                cardImage: { url: 'src/card/images/Tile_6.png', tag: 'ui' },
                cardContent: 'In CSS3 Succinctly, author Peter Shaw provides an overview of the latest features available for custom cascading style sheets.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/css3', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: ' ASP.NET Core',
                header_subtitle: 'Simone Chiaretta and Ugo Lattanzi',
                cardImage: { url: 'src/card/images/Tile_7.png', tag: 'server' },
                cardContent: 'In ASP.NET Core Succinctly, seasoned authors Simone Chiaretta and Ugo Lattanzi update you on all the advances provided by Microsoft’s landmark framework.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/asp_net_core_succinctly', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: 'Aurelia',
                header_subtitle: 'Matthew Duffield',
                cardImage: { url: 'src/card/images/Tile_8.png', tag: 'client' },
                cardContent: 'Aurelia is a relatively new, open-source JavaScript library/framework that simplifies the creation of web-based applications.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/aurelia_succinctly', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: 'ECMAScript 6 ',
                header_subtitle: 'Matthew Duffield',
                cardImage: { url: 'src/card/images/Tile_9.png', tag: 'client' },
                cardContent: 'ECMAScript 6 (ES6), also known as ECMAScript 2015, brings new functionality and features to the table that developers have been wanting for a long time.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/ecmascript_6_succinctly', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: 'JavaScript',
                header_subtitle: 'Cody Lindley',
                cardImage: { url: 'src/card/images/Tile_10.png', tag: 'client' },
                cardContent: 'JavaScript Succinctly was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/javascript', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: 'Knockout.js',
                header_subtitle: 'Ryan Hodson',
                cardImage: { url: 'src/card/images/Tile_11.png', tag: 'client' },
                cardContent: 'Knockout.js Succinctly is intended for professional web developers who need to build dynamic, scalable user interfaces with minimal code.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/knockoutjs', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
            {
                header_title: 'Angular 2',
                header_subtitle: 'Joseph D. Booth',
                cardImage: { url: 'src/card/images/Tile_12.png', tag: 'client' },
                cardContent: 'Angular 2 is a massively popular JavaScript framework built to take advantage of component development in web apps.',
                card_action_btn: {
                    action_btns: [{ tag: 'a', href: 'https://www.syncfusion.com/ebooks/angular2_succinctly', target: '_blank', text: 'Read More' }],
                    isVertical: true
                },
                isHorizontal: false
            },
        ];
        
        this.card;
        this.cardEle;
        this.cardObj = window.cardBook;
        this.data = [];
        this.multiSelectData = [];
        this.searchData = [];
        this.searchValCount = 0;
        this.filterCategory = [{ Name: 'Client-Side', Code: 'client' }, { Name: 'Server-Side', Code: 'server' }, { Name: 'Front-End', Code: 'ui' }];
        this.emptyData = true;
        this.cardRendering(this.cardObj);
        this.multiselectComp = new MultiSelect({
            dataSource: this.filterCategory,
            fields: { text: 'Name', value: 'Code' },
            placeholder: 'Search by categories',
            tagging: this.multiSelectFun,
            removed: this.multiSelectRemove,
        });
        this.multiselectComp.appendTo('#local');
        
    },
     methods: {
       cardRendering: function(cardObj) {
         var errorContent = document.querySelector('.tile_layout .row.error');
            if (cardObj.length > 0) {
                errorContent.style.display = 'none';
                var self = this;
                cardObj.forEach(function (data, index) {
                    var card = self.cardTemplateFn(data);
                    var cardEle = document.getElementById('card_sample_' + (++index));
                    if (cardEle) {
                        cardEle.appendChild(card[0]);
                    }
                });
            }
            else {
                errorContent.style.display = 'flex';
            }
    },
    destroyAllCard: function() {
            var cards = document.querySelectorAll('.card-control-section .e-card');
            [].slice.call(cards).forEach(function (el) {
                detach(el);
            });
        },
    multiSelectRemove: function(e) {
            var cardDa = this.searchData.length > 0 ? this.searchData : (this.multiSelectData.length > 0 ? this.multiSelectData : this.cardObj);
            if (this.multiselectComp.value && this.multiselectComp.value.length === 0 && this.searchValCount === 0) {
                this.multiSelectData = cardDa;
                this.destroyAllCard();
                this.cardRendering(this.cardObj);
            }
            else if (this.multiselectComp.value.length === 0 && this.searchValCount > 0) {
                this.searchFilter(document.getElementById('search_Card').value);
            }
            else if (this.multiselectComp.value.length === 0) {
                this.destroyAllCard();
                this.multiSelectData = cardDa;
                this.cardRendering(cardDa);
            }
            else {
                var keywords = e.itemData.Code.split(',');
                var dublicate_1;
                  var self = this;
                keywords.forEach(function (key) {
                    dublicate_1 = new DataManager(self.cardObj).executeLocal(new Query().where('cardImage.tag', 'Contains', key, true));
                    dublicate_1.forEach(function (da) {
                        if (cardDa.indexOf(da) !== -1) {
                            cardDa.splice(cardDa.indexOf(da), 1);
                        }
                    });
                    self.multiSelectData = cardDa;
                });
                this.destroyAllCard();
                this.cardRendering(this.multiSelectData);
            }
        },
        multiSelectFun: function(e) {
            var keywords = e.itemData.Code.split(',');
            var dublicate;
            var cardDa = this.searchData.length > 0 ? this.searchData : this.cardObj;
            if (this.multiselectComp.value && this.multiselectComp.value.length === 0 && this.searchValCount === 0) {
                this.multiSelectData = [];
            }
               var self = this;
            keywords.forEach(function (key) {
                dublicate = new DataManager(cardDa).executeLocal(new Query().where('cardImage.tag', 'Contains', key, true));
                if (dublicate.length === 0) {
                    self.multiSelectData = [];
                    self.destroyAllCard();
                    return;
                }
                dublicate.forEach(function (da) {
                   if (self.multiSelectData.indexOf(da) === -1) {
                        self.multiSelectData.push(da);
                    }
                });
            });
            this.destroyAllCard();
            this.cardRendering(this.multiSelectData);
        },
         searchFilter: function(key) {
            this.searchValCount = key.length;
            var predicate = new Predicate('cardContent', 'Contains', key, true);
            predicate = predicate.or('cardImage.title', 'Contains', key, true).or('header_title', 'Contains', key, true).or('header_subtitle', 'Contains', key, true);
            var cardDa = (this.multiSelectData.length > 0 && this.multiselectComp.value.length > 0) ? this.multiSelectData : this.cardObj;
            this.searchData = this.data = new DataManager(cardDa).executeLocal(new Query().where(predicate));
            this.destroyAllCard();
            this.cardRendering(this.data);
        },
         cardTemplateFn : function(data) {
             return compile(document.getElementById('card_template').innerHTML.trim())(data);
         },
          queryForKeywords: function(e) {
            if (e.code === 'Tab' || e.code === 'Escape' || e.code === 'ShiftLeft' || (e.code === 'Backspace' && this.emptyData)) {
                return;
            }
            var inputVal = e.target.value;
            inputVal.length === 0 ? this.emptyData = true : this.emptyData = false;
            this.searchFilter(inputVal);
          }
     }
    
});

</script>


