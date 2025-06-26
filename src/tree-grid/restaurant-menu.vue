<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
        This demo shows how the Tree Grid can be used to create a visually rich and interactive food menu. The demo meets
            different viewer preferences, such as vegetarian and bestseller dishes. It uses a food dataset that includes
            details for categories like salads, pizza, burgers, hot-dogs, chowmein, and desserts, with descriptions, prices and
            ratings.
    </p>
    </div>
    <div>
    <div class="control-section">
    <div class="content-wrapper">
    <div class="treegrid-center-container">
    <div class="resmenu-toolbar-search">
    <input id="search-autocomplete" type="text" placeholder="Search for Dishes" />
    <span class="e-input-group-icon e-search-icon"></span>
    </div>
        <ejs-treegrid
        :dataSource="data"
         ref="treegrid"
         id='restaurant-sample'
        :idMapping="'FoodId'"
        :allowKeyboard="false"
        :parentIdMapping="'CategoryId'"
        :treeColumnIndex="0"
        :rowTemplate="'rowTemplate'"
        :height="400"
        :rowDataBound='rowDataBound'
        :toolbar='toolbarOptions'
      >
        <e-columns>
          <e-column
            field="FoodName"
            headerText="Explore Our Menu"
            width="180"
          ></e-column>
        </e-columns>
        <template v-slot:rowTemplate="{ data }">
          <tr>
            <td
              v-if="
                data.FoodName === data.FoodCategory || data.CategoryId == null
              "
              class="resmenu-cell resmenu-parentfoodname"
              colspan="3"
            >
              <span class="resmenu-title">
                {{ data.FoodName }}
                <span
                  >({{ (data.vegCount || 0) + (data.nonvegCount || 0) }})</span
                >
              </span>
            </td>

            <template v-else>
              <td class="resmenu-cell">
                <div class="resmenu-card">
                  <div class="foodname-row" style=" display: flex;">
                    <span
                      v-if="data.FoodType === 'Veg'"
                      class="resmenu-FoodCategory_icon_veg"
                    >
                      <span class="resmenu-veg-icon"></span>
                    </span>
                    <span v-else class="resmenu-FoodCategory_icon_nonveg">
                      <span class="resmenu-nonveg-icon"></span>
                    </span>
                    <span class="resmenu-foodname">{{ data.FoodName }}</span>
                  </div>

                  <div class="resmenu-rating">
                    <span>
                      <span class="resmenu-rating-thumbsup">👍</span>
                      <span class="resmenu-rating-value">{{
                        data.Rating
                      }}</span>
                      <span class="resmenu-rating-count">({{ data.TotalReviews }})</span>
                    </span>
                  </div>

                  <div class="resmenu-fooddesc">
                    {{ data.FoodDescription }}
                  </div>
                  <div class="resmenu-info-separator">
                    <ejs-chiplist
                      id="ingredientsList"
                      :chips="data.ingredients"
                      cssClass="e-outline"
                    ></ejs-chiplist>
                  </div>
                </div>
              </td>

              <td class="resmenu-cell">
                <div class="resmenu-price-section">
                  <template v-if="data.originalPrice > data.newPrice">
                    <span class="resmenu-price">${{ data.newPrice }} &nbsp;&nbsp;</span>
                    <span class="price-direction"> <-- </span>
                    <span class="resmenu-old-price"
                      >${{ data.originalPrice }}</span
                    >
                  </template>
                  <template v-else>
                    <span class="resmenu-price">${{ data.newPrice }}</span>
                  </template>
                </div>
              </td>

              <td class="resmenu-cell">
                <div class="menu-right">
                  <div class="resmenu-image-wrap">
                    <img
                            class="resmenu-image"
                            :src="`${data.Image}.png`"
                            :alt="data.FoodName"
                    />
                    <div class="resmenu-count">
                    <input id="food-numeric" class="resmenu-food-count" type="text" />
                  </div>
                  </div>
                </div>
              </td>
            </template>
          </tr>
        </template>
      </ejs-treegrid>
      <div id="cartDialog"></div>
      </div>
  </div>
</div>
    </div>
    <div id="description">
    <p>
            The sample shows how dynamic, customizable row templates and custom cell rendering make the menu more informative
            and attractive. The Tree Grid row template adds visual elements like images, ratings, and price comparisons
            right in the cells. With its flexibility and easy customization, the Tree Grid is a great tool for creating
            interesting and engaging food menu presentations.
        </p>
        <p>
            More information about TreeGrid can be found in the
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started">documentation section</a>.
        </p>
</div>

</div>
</template>

<style>
    .treegrid-center-container .e-gridheader .e-headercelldiv {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2.45px !important;
}

:root {
  --green: #27ae60;
  --red: #e74c3c;
  --radius: 12px;
  --grey-line: #e5e7eb;
}


.resmenu-veg-icon,
.resmenu-nonveg-icon
.resmenu-e-veg-icon,
.resmenu-nonveg-icon {
  display: inline-block;
  border-radius: 50%;
}

.resmenu-veg-icon,
.resmenu-nonveg-icon
{
  width: 12px;
  height: 12px;
  margin: 0 0 4px 2px;
}

.material3 .resmenu-veg-icon,
.material3 .resmenu-nonveg-icon ,
.tailwind3 .resmenu-veg-icon,
.tailwind3 .resmenu-nonveg-icon
{
  margin: 0 0 2px 2px;
}

.resmenu-veg-icon {
  background: green;
}

.resmenu-nonveg-icon {
  background: red;
}

.resmenu-FoodCategory_icon_veg,
.resmenu-FoodCategory_icon_nonveg {
  width: 20px;
  height: 20px;
  border: 2px solid;
}

.resmenu-FoodCategory_icon_veg {
  border-color: green;
}

.resmenu-FoodCategory_icon_nonveg {
  border-color: red;
}
.material3-dark #search-autocomplete {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
  padding-left: 13px;
}
.resmenu-e-veg-icon,
.resmenu-e-nonveg-icon {
  border: 2px solid;
  border-radius: 4px;
  background: #fff;
  position: relative;
}

.resmenu-e-veg-icon {
  border-color: var(--green);
}

.resmenu-e-nonveg-icon {
  border-color: var(--red);
}

.resmenu-e-veg-icon::after,
.resmenu-e-nonveg-icon::after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
}

.resmenu-e-veg-icon::after {
  background: var(--green);
}

.resmenu-e-nonveg-icon::after {
  background: var(--red);
}

.resmenu-price {
  font-weight: bold;
}

.resmenu-old-price {
  font-size: 12px;
  text-decoration: line-through;
  margin: 3px;
}

.resmenu-card {
  width: 25vw;
  padding: 10px;
  margin-bottom: 50px;
}

.resmenu-info-separator {
  margin: 20px 0 0 0;
}

.resmenu-cell {
  border-bottom: 1px solid var(--grey-line);
}

.resmenu-image {
  width: 110px;
  height: 110px;
  float: right;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: var(--radius);
  margin: 20px;
  transition: transform 0.3s;
}

.resmenu-image-wrap {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.resmenu-image-wrap:hover .resmenu-image {
  transform: scale(1.2);
}

.resmenu-count {
  margin: 10px 30px 0 0;
}

.resmenu-food-count {
  width: 60px;
  text-align: center;
  margin-top: 10px;
}

.resmenu-price-section {
  text-align: right;
  width: 25vw;
}

.resmenu-rating-thumbsup{
	position: relative;
    top: -2px;
	}

.resmenu-rating {
  padding: 15px 0;
  font-size: 13px;
  font-weight: 400;
}

.resmenu-rating-value {
  font-weight: 600;
  font-size: 15px;
}

.resmenu-rating-thumbsup,
.resmenu-rating-count {
  font-size: 15px;
}

.resmenu-foodname {
  font-weight: 600;
  font-size: 18px;
  margin-left: 7px;
}

.resmenu-fooddesc {
  font-weight: 400;
  letter-spacing: 0.45px;
}

.resmenu-title {
  float: right;
  margin: 5px 0 0 5px;
  font-weight: bold;
}

.resmenu-parentfoodname {
  height: 48px;
  font-weight: 800;
  font-size: 18px;
}

#restaurant-sample .e-toolbar-right {
  right: 20px !important;
}

#CartUpdate {
  font-weight: 400;
  font-size: 10px;
}

.treegrid-center-container,
.resmenu-toolbar-search {
  width: 800px;
  margin: 32px auto;
}

.resmenu-toolbar-search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

#ingredientsList .e-chip.e-outline  {
  color: #222 !important;
  border-color: #ccc !important;
  background: #d3d3d3 !important;
  box-shadow: none !important;
  cursor: default !important;
  transition: none !important;
}

@media (max-width: 1200px) {
  .treegrid-center-container,
  .resmenu-toolbar-search {
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
  }
}

#cartDialog_title {
  text-align: center;
}

.treegrid-center-container .e-treegridexpand,
.treegrid-center-container .e-treegridcollapse {
  vertical-align: middle !important;
  margin-left: 7px;
}

.treegrid-center-container .e-toolbar {
  height: 60px !important;
}

.resmenu-emptyRecord {
  font-style: italic;
  font-size: 20px;
}


.treegrid-center-container .e-toolbar-right {
  right: 20px !important;
}

#search-autocomplete{
  width: 100%;
  padding: 25px 12px;
  border-radius: 8px;
  font-size: 16px;
}
.material3 #search-autocomplete,
.material3-dark #search-autocomplete {
      padding-left: 13px;
}

material3-dark [class*="veg-icon"] {
  margin: 0 0 3px 2px;
}

.material3 #search-autocomplete,
.material3-dark #search-autocomplete {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
@media (max-width: 450px) {
  .resmenu-image {
    width: 60px;
    height: 60px;
  }
 
  .resmenu-count {
    margin: 0 5px 0 0;
  }
 
  .resmenu-price-section {
    text-align: left;
  }
}
@media print {
  body {
    font-family: sans-serif;
  }

  ul {
    margin-bottom: 16px;
  }

  div {
    margin-bottom: 4px;
  }
}
.sample-order{
      display: flex;   
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15px;
  }
  .resmenu-order-no , .resmenu-order-date{
      font-weight: bold;
  }
  .resmenu-order-no{
      font-size: medium;
  }
  .resmenu-thank-note{
      font-weight: bold;
      font-style: italic;
      margin: 30px;
      justify-items: center;
      font-size: medium;
  }
  #dialog-container td{
      padding: 5px 0;
  }
</style>

<script lang="ts">
import * as Vue from 'vue';
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
} from '@syncfusion/ej2-vue-treegrid';
import { ChipListComponent } from '@syncfusion/ej2-vue-buttons';
import { foodMenu } from './data-source';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { AutoComplete, ChangeEventArgs as AutoCompleteChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Dialog } from '@syncfusion/ej2-popups';

let cartCount = 0;
let foodorderDetails: { foodName: string; price: number; count: number }[] = [];
let cartDialog: any = null;

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-chiplist': ChipListComponent,
  },
  data() {
    return {
      data: foodMenu,
      toolbarOptions: [
        {
        template: `
            <div style="display:flex;align-items:center;cursor:auto;">
                <img src="src/tree-grid/images/male.png" alt="avatar" style="width:40px;height:40px;border-radius:50%;margin-right:14px;">
                <div>
                    <div style="font-size:20px;font-weight:600;line-height:1.2;">Hi, <span style="color:#ff9800;font-weight:700;">Susan</span></div>
                    <div style="font-size:13px;color:#888;line-height:1.2;">Morrisville, USA</div>
                </div>
            </div>
            `,
        align: 'Left',
        id: 'customerDetails'
    },
        {
          template:
            '<div class="e-btn-group e-custom-button"><button id="CartUpdate" class="e-btn">VIEW CART<span id="cartbadge" class="e-cart-badge e-badge e-badge-primary e-badge-notification e-badge-overlap">0</span></button></div>',
          id: 'cartButton',
          align: 'Right',
        },
      ],
    };
  },
  methods: {
    rowDataBound(args: any) {
      const { CategoryId, FoodName } = args.data;
      if (CategoryId) {
        const foodItem = foodorderDetails.find(item => item.foodName?.toLowerCase() === FoodName?.toLowerCase());

        new NumericTextBox({
          value: foodItem?.count || 0,
          min: 0,
          max:10,
          step: 1,
          format: 'N',
          width: '110px',
          change: this.foodCountChangeFn,
        }).appendTo(args.row.querySelector('.resmenu-food-count'));
      }
    },
    foodCountChangeFn(args: any) {
      if (!args.event || !args.event.srcElement) {
        return;
      }
      const currentRow = args.event.srcElement.closest('tr');
      const foodName = currentRow.querySelector('.resmenu-foodname').textContent;
      const price = parseFloat(
        currentRow.querySelector('.resmenu-price').textContent.replace(/[^0-9.]/g, '')
      );
      const count = args.value;
      if (args.previousValue < args.value) {
          cartCount += (count - (args.previousValue || 0));
      } else if (args.previousValue > args.value) {
        cartCount -= (args.previousValue || 0) - count;
      }
      document.getElementsByClassName('e-cart-badge')[0].textContent = cartCount.toString();
      const existingFood = foodorderDetails.find((item) => item.foodName === foodName);
      if (existingFood) {
        existingFood.count = count;
        existingFood.price = price;
      } else {
        foodorderDetails.push({
          foodName: foodName,
          price: price,
          count: count,
        });
      }
    },
    clearCart() {
      foodorderDetails.forEach((item) => {
        item.count = 0;
      });
      cartCount = 0;
      document.getElementsByClassName('e-cart-badge')[0].textContent = cartCount.toString();
      const numericBoxes = document.querySelectorAll('.resmenu-food-count.e-numerictextbox');
      numericBoxes.forEach((box) => {
        const instance = (box as any).ej2_instances && (box as any).ej2_instances[0];
        if (instance) instance.value = 0;
      });
      if (cartDialog) {
        cartDialog.content = this.getCartTableHtml([]);
        cartDialog.hide();
      }
    },
   printCartDialogContent() {
  const treeGridElement = (document.getElementById('restaurant-sample') as any).ej2_instances[0];
  if (!treeGridElement.element) {
    console.error('TreeGrid element not found.');
    return;
  }
  const rect = treeGridElement.element.getBoundingClientRect();
  const windowWidth = 400;
  const windowHeight = 600;
  const leftPosition = rect.left + window.scrollX + (rect.width / 2) - (windowWidth / 2);
  const topPosition = rect.top + window.scrollY + (rect.height / 2) - (windowHeight / 2);
  const dialogContent = document.querySelector('#cartDialog .e-dlg-content');
  if (!dialogContent) {
    console.error('Cart dialog content not found.');
    return;
  }
  const printContents = dialogContent.innerHTML;
  const printWindow = window.open('', '', `height=${windowHeight},width=${windowWidth},left=${leftPosition},top=${topPosition}`);
  if (!printWindow) {
    console.error('Failed to open print window. It may have been blocked by the browser.');
    return;
  }
  printWindow.document.write(printContents);
  printWindow.focus();
  printWindow.addEventListener('afterprint', () => {
    printWindow.close();
    this.clearCart();
  });
  printWindow.print();
},
    getCartTableHtml(cartItems: any[]) {
      if (!cartItems.length) {
        return '<div style="padding:20px;text-align:center;">No items in cart.</div>';
      }
      const rows = cartItems
        .filter((i: any) => i.count > 0)
        .map(
          (item: any) => `
        <tr>
          <td>${item.foodName}</td>
          <td>$${item.price}</td>
          <td style="text-align:center;">${item.count}</td>
          <td style="text-align:right;">$${(item.price * item.count).toFixed(2)}</td>
        </tr>`
        )
        .join('');
      const total = Math.round(
        cartItems.reduce((sum: number, item: any) => sum + item.price * item.count, 0)
      );
      const delivery = 3.6;
      const gst = Math.round(total * 0.12 * 100) / 100;
      const toPay = Math.round((total + delivery + gst) * 100) / 100;
      return `
      <div class="sample-order">
            <div  class="resmenu-order-no"><span > Order No: </span>${Math.floor(Math.random() * (99 - 10 + 1)) + 100}</div>
            <div  ><span class="resmenu-order-date">Date: </span>${new Date().toLocaleDateString()}</div>
        </div>
      <div id="dialog-container">
        <div style="max-height:220px;overflow-y:auto;margin-bottom:12px;">
          <table style="width:100%;border-collapse:collapse;">
            <thead>
              <tr style="border-bottom: 2px solid #e0e0e0;">
                <th style="text-align:left;">Dish</th>
                <th style="text-align:left;">Price</th>
                <th style="text-align:center;">Qty</th>
                <th style="text-align:right;">Total</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="border-top:2px solid #eee;padding-top:12px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span>Item Total</span><span>$${total}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span>Delivery Fee</span><span>$${delivery}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span>TAX & Other Charges</span><span>$${gst}</span>
          </div>
          <div style="border-top:2px solid #beb5b5;display:flex;justify-content:space-between;font-weight:bold;font-size:18px;margin-top:10px;">
            <span>TO PAY</span><span>$${toPay}</span>
          </div>
        </div>
         <div class="resmenu-thank-note">
            <div >Thank you for your order!</div>
          </div>
      </div>`;
    },
    initializeComponents() {
      (this as any).initializeAutoComplete();
      (this as any).initializeDialog();
    },
    initializeAutoComplete() {
      const autoCompleteElement = document.getElementById('search-autocomplete');
      if (autoCompleteElement) {
        const dishNames = Array.from(
          new Set((this as any).data.map((item: any) => item.FoodName))
        ) as string[];
        new AutoComplete({
          dataSource: dishNames,
          placeholder: 'Search for dishes',
          width: 800,
          highlight: true,
          filterType: 'Contains',
          change: (args: any) => {
            const value = args.value ? args.value.toLowerCase() : '';
            let searchedData = (this as any).data.filter(function (item: any) {
              return (
                item.FoodName.toLowerCase().includes(value) ||
                item.FoodCategory.toLowerCase().includes(value) ||
                !item.CategoryId
              );
            });
            searchedData.forEach(function (parent: any) {
              if (!parent.CategoryId) {
                const childItems = searchedData.filter(function (item: any) {
                  return item.CategoryId === parent.FoodId;
                });
                parent.vegCount = childItems.filter(function (item: any) {
                  return item.FoodType === 'Veg';
                }).length;
                parent.nonvegCount = childItems.filter(function (item: any) {
                  return item.FoodType === 'Non-veg';
                }).length;
              }
            });
             searchedData = searchedData.filter(function (item:any) {
                var foodcount = item.vegCount + item.nonvegCount;
                return (foodcount === 0 && item.CategoryId) || (foodcount > 0 && !item.CategoryId);
            });
            ((this as any).$refs.treegrid as any).ej2Instances.dataSource = searchedData;
          },
        }).appendTo(autoCompleteElement);
      }
    },
    initializeDialog() {
      if (!cartDialog) {
        cartDialog = new Dialog({
          header: 'Bill Summary',
          content: '',
          visible: false,
          width: '400px',
          showCloseIcon: true,
          isModal: true,
          buttons: [
            {
              click: this.clearCart,
              buttonModel: { content: 'Cancel', cssClass: 'e-danger' },
            },
            {
              click: this.printCartDialogContent,
              buttonModel: { content: 'Print', isPrimary: true },
            },
          ],
          beforeOpen: function (args) {
            const itemsInCart = foodorderDetails.filter((item) => item.count > 0);
            if(itemsInCart.length <4){
                args.maxHeight = '500px';
            }
            else{
                args.maxHeight = '600px';
            }
            if (itemsInCart.length === 0) {
              cartDialog.buttons[1].buttonModel.disabled = true;
              cartDialog.refresh();
            } else {
              cartDialog.buttons[1].buttonModel.disabled = false;
              cartDialog.refresh();
            }
          },
        });
        cartDialog.appendTo('#cartDialog');
      }
    },
    openCartDialog() {
      const itemsInCart = foodorderDetails.filter((item) => item.count > 0);
      if (cartDialog) {
        cartDialog.content = this.getCartTableHtml(itemsInCart);
        cartDialog.show();
      }
    },
  },
  mounted() {
    (this as any).initializeComponents();
    const cartButton = document.getElementById('CartUpdate');
    if (cartButton) {
      cartButton.addEventListener('click', (this as any).openCartDialog);
    }
  },
  provide: {
    treegrid: [Toolbar],
  },
};
</script>