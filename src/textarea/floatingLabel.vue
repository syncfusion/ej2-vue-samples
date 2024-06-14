<template>
    <div id="textarea-float" class="col-lg-8 control-section floatinglabel">
        <div class="content_wrapper">
            <div class="floatinglabel-row">
                <ejs-textarea id="floatlabel" placeholder="Enter your comments" :floatLabelType='floatLabelType' rows="5" cols="300" ></ejs-textarea>
            </div>
        </div>
    </div>  

    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" class="floatinglabel-property">
            <tr>
                <td class="left-side">Float label type </td>
                <td><ejs-dropdownlist id="float" :fields = "fields" :index = "currentIndex" :dataSource = "items" :popupHeight= "popupHeight" :change= "floatLabelHandler">
                </ejs-dropdownlist></td>
            </tr>
        </table>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the floating label functionalities of the textarea control.
            Choose the corresponding floatLabel option from the property panel to update the floating label behaviour in
            textarea.
        </p>
    </div>
    <div id="description">
        <p>The floating label is used to float the placeholder text while the user enters text or focuses on the textarea element with a value.
            In this sample, the floating label behavior can be changed using the following options:</p>
        <ul>
            <li>Choose float label types either 'Never', 'Always', or 'Auto' to control the floating behavior of the placeholder text.</li>
        </ul>
    </div>
</template>

<style scoped>
    .content_wrapper div.floatinglabel-row {
        margin: 30px 150px;
    }
    
    .floatinglabel-property .left-side {
        font-size: 14px;
        padding: 8px;
    }

    #textarea-float .e-multi-line-input {
        max-width: 100%;
    }
</style>

<script>

import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    data: function(){
        return {
        items: [
            { sizeVal: 'Auto' , sizeTxt: 'Auto' },
            { sizeVal: 'Never' , sizeTxt: 'Never' },
            { sizeVal: 'Always' , sizeTxt: 'Always' },
        ],
        fields: { text: 'sizeTxt', value: 'sizeVal' },
          popupHeight: 200,
          currentIndex: 0,
          floatLabelType: 'Auto',
          floatLabelHandler: (args) => {
            switch (args.value) {
                case 'Auto':
                    this.floatLabelType = 'Auto';
                    break;
                case 'Always':
                    this.floatLabelType = 'Always';
                    break;
                case 'Never':
                    this.floatLabelType = 'Never';
                    break;
            }
          }
        }
    },
    components: {
        'ejs-textarea': TextAreaComponent,
        'ejs-dropdownlist': DropDownListComponent
    }
};

</script>