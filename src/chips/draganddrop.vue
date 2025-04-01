<template>
    <div>
        <div class="control-section">
          <div id="chip-draganddrop-wrapper">
              <div id="chips" class="chips-headers">Customize your order with add-ons</div>
    
              <div class="sample-padding">
                  <ejs-chiplist id="choice-container" aria-labelledby="choice-chips" :allowDragAndDrop=true>
                      <e-chips>
                          <e-chip text="Extra cheese" cssClass="e-info"></e-chip>
                          <e-chip text="Spicy Level: Medium" cssClass="e-danger"></e-chip>
                          <e-chip text="Spicy Level: Low" cssClass="e-success"></e-chip>
                          <e-chip text="Fast Delivery" cssClass="e-warning"></e-chip>
                          <e-chip text="Gift Wrapping" cssClass="e-primary"></e-chip>
                          <e-chip text="Eco-Friendly Packaging" cssClass="e-success"></e-chip>
                      </e-chips>
                  </ejs-chiplist>

                  <ejs-chiplist id="selection-container" aria-labelledby="selection-chips" :allowDragAndDrop=true></ejs-chiplist>
              </div>
          </div>
        </div>
        <div id="action-description">
           <p>This Vue Chips sample demonstrates the drag and drop functionality of Chips. To drag and drop a chip element, select and drag the desired chip and drop it at the target index within the required container.</p>
        </div>
        <div id="description">
             <p>
                The <code>Chips</code> component allows users to drag any chip and drop it on any index in a container using <code>allowDragAndDrop</code> property. Additionally, it supports dropping a chip to an external chips container.
            </p>
        </div>
    </div>
    </template>
    
    <script>
    import { ChipListComponent, ChipDirective, ChipsDirective } from "@syncfusion/ej2-vue-buttons";
    
    export default {
      components: {
        'ejs-chiplist': ChipListComponent,
        'e-chip': ChipDirective,
        'e-chips': ChipsDirective
      },
    }
    </script>
    
<style>
    #chip-draganddrop-wrapper .sample-padding {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chips-headers {
        font-size: 12px;
        text-align: center;
        padding-top: 10px;
    }

    #choice-container {
        width: 400px;
        min-height: 100px;
        min-width: 150px;
        border: 2px solid #2C3E50;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-right: 30px;
    }

    #selection-container {
        width: 400px;
        min-height: 100px;
        min-width: 150px;
        border: 2px solid #8E44AD;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>