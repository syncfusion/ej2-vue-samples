<template>
    <div class="col-lg-8 control-section resize">
        <div class="content_wrapper">
            <div class="resize-row">
                <ejs-textarea id="resize" placeholder="Enter your comments" floatLabelType='Auto' :resizeMode='resizeMode'></ejs-textarea>
            </div>
        </div>
    </div>  

    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" class="resize-property">
            <tr>
                <td class="left-side">Resize Mode </td>
                <td><ejs-dropdownlist id="resizedropdown" :fields = "fields" :index = "currentIndex" :dataSource = "items" :popupHeight= "popupHeight" :change= "resizeHandler">
                </ejs-dropdownlist></td>
            </tr>
        </table>
    </div>
    <div id="action-description">
    <p>
        This example demonstrates the resize functionalities of the textarea control.
        Choose the corresponding resizeMode option from the property panel to update the resize behavior in the textarea.
    </p>
    </div>
    <div id="description">
        <p>The textarea can be resized vertically, horizontally, or in both directions by selecting the following corresponding options:</p>
        <ul>
            <li>Choose resizeMode options such as 'Both', 'Vertical', 'Horizontal', or 'None' to control the resize behavior of the textarea.</li>
        </ul>
    </div>
</template>

<style scoped>
    .content_wrapper div.resize-row {
        margin: 30px 150px;
    }

    .resize-property .left-side {
        font-size: 14px;
        padding: 8px;
    }
</style>

<script>

import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    data: function(){
        return {
        items: [
            { sizeVal: 'Vertical' , sizeTxt: 'Vertical' },
            { sizeVal: 'Horizontal' , sizeTxt: 'Horizontal' },
            { sizeVal: 'Both' , sizeTxt: 'Both' },
            { sizeVal: 'None' , sizeTxt: 'None' }
        ],
        fields: { text: 'sizeTxt', value: 'sizeVal' },
          popupHeight: 200,
          currentIndex: 0,
          resizeMode: 'Vertical',
          resizeHandler: (args) => {
            switch (args.value) {
                case 'Both':
                    this.resizeMode = 'Both';
                    break;
                case 'Vertical':
                    this.resizeMode = 'Vertical';
                    break;
                case 'Horizontal':
                    this.resizeMode = 'Horizontal';
                    break;
                case 'None':
                    this.resizeMode = 'None';
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