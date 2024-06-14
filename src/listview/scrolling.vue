<template>
    <div class="col-lg-12 control-section">
        <p class="displayText">Food Items</p>
        <ejs-listview id='list_scrolling' ref="list" :dataSource='data' :cssClass='cssClass' :height="'500px'" :template="'loadTemplate'" :scroll='onListScroll' >
            <template v-slot:loadTemplate="{data}">
                <div v-if='!isDevice' class="e-list-wrapper" style="border-bottom: inset;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; white-space: normal; padding: 10px;">
                        <div style="display: flex; align-items: center;">
                            <img class="e-avatar" :src="'src/listview/images/' + data.src" :alt="data.alText" style="background:#BCBCBC; width: 100px; height: 100px; border-radius: 4px;" />
                            <div style="margin-left: 20px; text-align: left; max-width: 600px; display: flex; flex-direction: column;">
                                <div style="display: flex; align-items: center;">
                                    <span style="font-size: 18px; font-weight: 600; padding-bottom: 3px;" class="e-headertext">{{data.text}}</span>
                                    <svg width="12" height="12" :style="{ marginLeft: '15px', marginTop: '-2px' }" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1H10C10.5523 1 11 1.44771 11 2V10C11 10.5523 10.5523 11 10 11H2C1.44771 11 1 10.5523 1 10V2C1 1.44771 1.44771 1 2 1ZM0 2C0 0.895432 0.895432 0 2 0H10C11.1046 0 12 0.895432 12 2V10C12 11.1046 11.1046 12 10 12H2C0.895432 12 0 11.1046 0 10V2ZM4 3C3.44771 3 3 3.44771 3 4V8C3 8.55229 3.44771 9 4 9H8C8.55229 9 9 8.55229 9 8V4C9 3.44771 8.55229 3 8 3H4Z" :fill="data.type === 'veg' ? '#006400' : '#FF0000'"/>
                                    </svg>
                                </div>
                                <span style="font-size: 16px; padding-bottom: 3px;">{{ data.price }}</span>
                                <div id="id-description" class="e-text-content" style="font-size: 15px;">{{ data.description }}</div>
                                <div class="rating-content">
                                    <ejs-rating :id="ratingId" class="ratings" :showTooltip=false :readOnly=true :value="data.rating"></ejs-rating>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="e-list-wrapper e-list-multi-line e-list-avatar" style="padding-left: 122px; padding-right: 1.0666em; border-bottom: inset">
                    <img class="e-avatar" :src="'src/listview/images/' + data.src" :alt="data.alText" />
                    <span class="e-list-item-header e-headertext" style="font-size: 14px;">{{ data.text }}</span>
                    <svg width="12" height="12" :style="{ backgroundColor: data.type === 'veg' ? '#98E16E' : '#FF4B4B', right: '10px', marginTop: '-15px', position: 'absolute' }" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1H10C10.5523 1 11 1.44771 11 2V10C11 10.5523 10.5523 11 10 11H2C1.44771 11 1 10.5523 1 10V2C1 1.44771 1.44771 1 2 1ZM0 2C0 0.895432 0.895432 0 2 0H10C11.1046 0 12 0.895432 12 2V10C12 11.1046 11.1046 12 10 12H2C0.895432 12 0 11.1046 0 10V2ZM4 3C3.44771 3 3 3.44771 3 4V8C3 8.55229 3.44771 9 4 9H8C8.55229 9 9 8.55229 9 8V4C9 3.44771 8.55229 3 8 3H4Z" :fill="data.type === 'veg' ? '#006400' : '#FF0000'"/>
                    </svg>
                    <div style="font-size: 12px;">{{ data.price }}</div>
                    <span class="e-list-content e-text-overflow" style="font-size: 11px;" >{{ data.description }}</span>
                </div>
            </template>
        </ejs-listview>

        <div id="action-description">
            <p>This sample demonstrates the functionalities of infinite scrolling. When user scrolls to the bottom, new data is fetched and added to the existing list through scroll event. This creates an infinite scrolling effect, enhancing the user experience by loading new data dynamically as needed.
            </p>
        </div>
        <div id="description">
            <p>The Listview control scroll event allows users to load data using a load on demand concept, where buffered data is fetched only when the scrollbar reaches the end of the scroller. Scroll event provides the necessary details to dynamically add the new data to the ListView.</p>
        </div>
    </div>
</template>

<style>
    #list_scrolling {
        margin: auto;
        max-width: 800px;
    }

    #list_scrolling.e-listview.e-list-template .e-list-wrapper.e-list-multi-line.e-list-avatar .e-avatar {
        background: transparent;
        width: 85px;
        height: 85px;
        top: 50%;
        transform: translateY(-50%);
    }
    .displayText {
        text-align: center;
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.1;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>

<script>
import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { enableRipple, Browser } from '@syncfusion/ej2-base';
import { foodData, foodItems } from './listData';
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";

enableRipple(false);

export default {
    computed: {
        isDevice() {
            return Browser.isDevice
        },
        ratingId() {
            return this.$refs.list.$el.ej2_instances[0].getUniqueID('rating');
        }
    },
    components: {
      'ejs-listview': ListViewComponent,
      'ejs-rating': RatingComponent,
    },
    data: function() {
        return {
            cssClass: 'e-list-template',
            data: foodData,
            height: 500
        };
    },
    methods: {
        onListScroll: function(args) {
            var newData = [];
            if (args.scrollDirection === "Bottom") {
                if (args.distanceY < 100) {
                    for (var i = 0; i <= foodItems.length - 1; i++) {
                        var newId = this.$refs.list.$el.ej2_instances[0].getUniqueID('list');
                        newData.push({ text: foodItems[i].text, id: newId, price: foodItems[i].price, src: foodItems[i].src, description: foodItems[i].description, type: foodItems[i].type, rating: foodItems[i].rating });
                    }
                    this.$refs.list.$el.ej2_instances[0].addItem(newData);
                }
            }
        }
    }
}
</script>
