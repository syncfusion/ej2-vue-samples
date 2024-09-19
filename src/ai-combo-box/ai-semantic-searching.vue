<template>
    <div class='control-pane'>
      <div class='control-section'>
        <div class="description-container e-card">
          <div class='e-card-header-title' style="font-weight: 600">Semantic Search in ComboBox using Local Embeddings</div>
          <div class='e-card-content'>
            <p>
              This demo showcases the ComboBox's Semantic Search feature, which improves search accuracy by understanding the meaning and context of queries. Instead of relying on exact matches, it delivers relevant results based on user intent, enhancing search efficiency and responsiveness in applications.
            </p>
          </div>
        </div>
        <div id='container' style="margin: 50px; text-align: center; align-content: center; flex-wrap: wrap">
          <p style="font-weight: 600">Select a Product</p>
          <ejs-combobox
            id='combo-box'
            :dataSource="products"
            :fields="{ text: 'Name', value: 'ID' }"
            placeholder="Select a product"
            popupHeight="300px"
            width="250px"
            :allowFiltering="true"
            noRecordsTemplate='<div><div id="nodata"> No matched item</div>'
            @filtering="filteringData"
          >
          </ejs-combobox>
        </div>
      </div>
    </div>
</template>

<script>
import { ComboBoxComponent } from '@syncfusion/ej2-vue-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { cosineSimilarity } from "../common/cosine-similarity";
import { embeddingModel } from "../common/embedding-model";

export default {
    name: 'ComboBoxSemanticSearch',
    components: {
      'ejs-combobox': ComboBoxComponent
    },
    data() {
      return {
        products: [
          { ID: 1, Name: "iPhone 13", Category: "Electronics", Brand: "Apple", Description: "A15 Bionic chip" },
          { ID: 2, Name: "Galaxy S21", Category: "Electronics", Brand: "Samsung", Description: "Flagship phone" },
          { ID: 3, Name: "PlayStation 5", Category: "Gaming", Brand: "Sony", Description: "Next-gen gaming" },
          { ID: 4, Name: "MacBook Pro", Category: "Computers", Brand: "Apple", Description: "laptop with M1 chip" },
          { ID: 5, Name: "Surface Pro 7", Category: "Computers", Brand: "Microsoft", Description: "2-in-1 laptop" },
          { ID: 6, Name: "Nintendo Switch", Category: "Gaming", Brand: "Nintendo", Description: "Hybrid console" },
          { ID: 7, Name: "Echo Dot", Category: "Smart Home", Brand: "Amazon", Description: "smart speaker" },
          { ID: 8, Name: "Roomba i7", Category: "Home Appliances", Brand: "iRobot", Description: "robot vacuum" },
          { ID: 9, Name: "OLED TV", Category: "Electronics", Brand: "LG", Description: "4K OLED TV" },
          { ID: 10, Name: "AirPods Pro", Category: "Accessories", Brand: "Apple", Description: "wireless earbuds" },
          { ID: 11, Name: "Galaxy Watch 4", Category: "Wearables", Brand: "Samsung", Description: "Smartwatch" },
          { ID: 12, Name: "Kindle Paperwhite", Category: "Electronics", Brand: "Amazon", Description: "E-reader" },
          { ID: 13, Name: "Dyson V11", Category: "Home Appliances", Brand: "Dyson", Description: "vacuum cleaner" },
          { ID: 14, Name: "GoPro HERO9", Category: "Cameras", Brand: "GoPro", Description: "Action camera" },
          { ID: 15, Name: "Fitbit Charge 5", Category: "Wearables", Brand: "Fitbit", Description: "Fitness tracker" },
          { ID: 16, Name: "Nest Thermostat", Category: "Smart Home", Brand: "Google", Description: "Smart thermostat" },
          { ID: 17, Name: "Sony WH-1000XM4", Category: "Accessories", Brand: "Sony", Description: "wireless headphones" },
          { ID: 18, Name: "Instant Pot Duo", Category: "Home Appliances", Brand: "Instant Pot", Description: "pressure cooker" },
          { ID: 19, Name: "Roku Streaming Stick+", Category: "Electronics", Brand: "Roku", Description: "4K HDR streaming device" },
          { ID: 20, Name: "Bose SoundLink", Category: "Accessories", Brand: "Bose", Description: "Bluetooth speaker" }
        ],
        productEmbeddings: {}
      }
    },
    mounted() {
      this.getEmbeddingsData();
    },
    methods: {
      async getEmbeddingsData() {
        try {
          for (let product of this.products) {
            let data = await embeddingModel(
              product.Name + " " + product.Category + " " + product.Brand + " " + product.Description
            );
            this.productEmbeddings[product.ID] = data;
          }
        } catch (error) {
          console.error("Error in getEmbeddingsData:", error);
        }
      },
      async filteringData(e) {
        if (e.text.length > 0) {
          try {
            let queryVector = await embeddingModel(e.text);
            const similarityThreshold = 0.83;
            const outputData = this.products.filter((country) => {
              const similarity = cosineSimilarity(
                this.productEmbeddings[country.ID],
                queryVector
              );
              if (similarity > similarityThreshold) {
                return country;
              }
            });
            if (outputData.length > 0) {
              let query = new Query();
              e.updateData(outputData, query);
            }
          } catch (error) {
            console.error("Error in filteringData:", error);
          }
        }
      }
    }
}
</script>