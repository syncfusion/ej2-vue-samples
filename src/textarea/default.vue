<template>
    <div class="col-lg-12 control-section">
        <div id="textarea-default"  class="content_wrapper">
            <div class="row material">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Outlined and Filled</b></div>
            </div>
            <div class="row material">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <ejs-textarea floatLabelType="Auto" cssClass="e-outline" placeholder="Outlined" rows="5" cols="250"></ejs-textarea>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <ejs-textarea floatLabelType="Auto" cssClass="e-filled" placeholder="Filled" rows="5" cols="250"></ejs-textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Please leave a comment</b></div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                    <ejs-textarea id="default" placeholder="Enter your comments" floatLabelType="Auto" rows="5" cols="500"></ejs-textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Validation States</b></div>
            </div>
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                    <div class="e-input-group e-success">
                        <textarea class="e-input" placeholder="Success" rows="5" cols="250"></textarea>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                    <div class="e-input-group e-warning">
                        <textarea class="e-input" placeholder="Warning" rows="5" cols="250"></textarea>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                    <div class="e-input-group e-error">
                        <textarea class="e-input" placeholder="Error" rows="5" cols="250"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the default functionalities of the <code>TextArea</code> control. Type a character in the TextArea element or focus-in to the TextArea for floating the label text. The label will be positioned back to TextArea on focus-out without value.
        </p>
    </div>
    <div id="description">
        <p>
            A TextArea is an input element that allows users to input multiple lines of text. It can be used for editing or displaying text data.
        </p>
        <br>
        <table style="width:100%">
            <tr>
                <th>Types</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>Outlined & Filled textarea</td>
                <td>You can render the following two types of text fields in the material theme by adding <b>e-outline</b> and <b>e-filled</b> class to cssClass API.
                    <ul>
                        <li>Filled text fields</li>
                        <li>Outlined text fields</li>
                    </ul> </td>
            </tr>
            <tr>
                <td>Default TextArea</td>
                <td>
                    <div style="padding-bottom: 10px"> You can render textarea by adding class as <b>e-input</b>. You can also render textarea as group by adding
                        parent element with <b>e-input-group</b> class added.
                    </div>
                </td>
            </tr>
            <tr>
                <td>Validation states</td>
                <td>
                    <div style="padding-bottom: 10px">You can apply validation states success, warning, error to the textarea with the corresponding classes added
                        to the input element such as <b>e-success</b>, <b>e-warning</b>, <b>e-error</b>.</div>
                </td>
            </tr>
        </table>
        <br>
    </div>
</template>

<style>
    #textarea-default .e-multi-line-input {
        max-width: 100%;
    }
</style>

<style scoped>
    .content_wrapper {
        width: 90%;
        margin: 0 auto;
        min-width: 185px;
    }
    
    .content_wrapper div.row {
        padding: 15px 0px;
    }
    
    .control-label {
        padding: 24px 0px 0px 0px;
        font-size: 12px;
        opacity: 0.54;
    }
    
    @media only screen and (max-width: 480px) {
        .content_wrapper {
            width: 92%;
        }
        .col-xs-6,
        .col-xs-4,
        .col-xs-12 {
            padding: 10px 5px;
            width: 100%;
        }
        .content_wrapper div.row {
            padding: 0px;
        }
    }
    
    #description td {
        vertical-align: top;
    }
    .e-outline.e-control-wrapper {
        margin-top: 0;
    }
    .fabric .row.material,
    .bootstrap .row.material,
    .bootstrap4 .row.material,
    .highcontrast .row.material,
    .tailwind .row.material,
    .bootstrap5 .row.material,
    .bootstrap5-dark .row.material,
    .bootstrap5.3 .row.material,
    .bootstrap5.3-dark .row.material,
    .tailwind-dark .row.material,
    .fabric-dark .row.material,
    .bootstrap-dark .row.material,
    .fluent .row.material,
    .fluent-dark .row.material,
    .fluent2 .row.material,
    .fluent2-dark .row.material {
        display: none;
    }

    .fluent .e-control-wrapper.e-filled,
    .fluent-dark .e-control-wrapper.e-filled {
        margin-top: 0px;
    }
</style>

<script>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    data: function() {
        return { }
    },
    components: { 'ejs-textarea': TextAreaComponent },
    mounted: function() {
        let input = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group textarea');
        let localObj = this;
        for (let index = 0; index < input.length; index++) {
            //Focus Event binding for textarea component
            input[index].addEventListener('focus', function() {
               localObj.getParentNode(input[index]).classList.add('e-input-focus');
            });
            //Blur Event binding for textarea component
            input[index].addEventListener('blur', function() {
                localObj.getParentNode(input[index]).classList.remove('e-input-focus');
            });
        }
    },
    methods: {
        getParentNode: function(element) {
            let parentNode = element.parentNode;
            if (parentNode.classList.contains('e-input-in-wrap')) {
                return parentNode.parentNode;
            }
            return parentNode;
        }
    }
};
</script>
