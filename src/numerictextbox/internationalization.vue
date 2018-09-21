<template>
<div>
    <div class="col-lg-8 control-section">
        <div class="content-wrapper">
            <ejs-numerictextbox id="numeric" format="n2" value="10" :locale="locale" :placeholder="numericWatermark" floatLabelType='Always'></ejs-numerictextbox>
            <ejs-numerictextbox id="percent" format="p2" value="0.5" :locale="locale" :placeholder="percentWatermark" floatLabelType='Always' min="0" max="1" step="0.01"></ejs-numerictextbox>
            <ejs-numerictextbox id="currency" format="c2" value="100" :locale="locale" :placeholder="currencyWatermark" floatLabelType='Always' :currency="currency"></ejs-numerictextbox>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties">
            <tbody>
                <tr>
                    <td>
                        <div>Culture</div>
                    </td>
                    <td>
                        <div>
                            <!-- Drop down option to switch cultures -->
                            <ejs-dropdownlist id="cultures" text="de" :change="changeLocale" :dataSource="cultureData" :fields="cultureField">
                            </ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the globalization support of the Numeric TextBox. Change the locale values from culture drop-down to change the currency symbol, decimal separator, and group separators format of Numeric TextBox.</p>
    </div>
    <div id="description">
        <p>
            The NumericTextBox comes with built-in internationalization support to adapt based on the culture. You can change the culture of the component using the locale property, that format the currency symbol, decimal separator, and group separators.
        </p>
        <p>
            In this demo, NumericTextBox control renders with the German culture.
        </p>
        <p>
            More information about NumericTextBox can be found in this
            <a target="_blank"
               href="http://ej2.syncfusion.com/aspnet/documentation/numerictextbox/internationalization.html?syntax=tag">
                documentation section
            </a>.
        </p>
    </div>
</div>
</template>
<style>
    .property-panel-content {
        padding: 0 10px 10px 0;
    }
    .content-wrapper {
        width: 50%;
        margin: 0 auto;
        min-width: 185px;
    }
    .e-float-input.e-numeric.e-input-group {
        margin-top: 40px;
    }
</style>
<script>
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { loadCldr, Ajax, L10n } from "@syncfusion/ej2-base";

Vue.use(NumericTextBoxPlugin);
Vue.use(DropDownListPlugin);
L10n.load({
    'en': {
        'numerictextbox': { incrementTitle: 'Increment value', decrementTitle: 'Decrement value' }
    },
    'de': {
        'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert' }
    },
    'zh': {
        'numerictextbox': { incrementTitle: '增值', decrementTitle: '遞減值' }
    }
});

function loadCultureFiles(name) {
    var files = ['currencies.json', 'numbers.json'];
    if (name === 'zh') {
        files.push('currencyData.json');
    }
    var loader = loadCldr;
    var loadCulture = function () {
        var val, ajax;
        if (name === 'zh' && prop === files.length - 1) {
            ajax = new Ajax(location.origin + location.pathname + 'src/common/cldr-data/supplemental/' + files[prop], 'GET', false);
        } else {
            ajax = new Ajax(location.origin + location.pathname + 'src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
        }
        ajax.onSuccess = function (value) {
            val = value;
        };
        ajax.send();
        loader(JSON.parse(val));
    };
    for (var prop = 0; prop < files.length; prop++) {
        loadCulture();
    }
}
loadCultureFiles('de');

export default Vue.extend ({
    data: function() {
        return {
            locale: 'de',
            numericWatermark: 'Geben Sie den Wert ein',
            percentWatermark: 'Geben Sie den Prozentsatz ein',
            currencyWatermark: 'Geben Sie die Währung ein',
            currency: 'EUR',
            cultureField: { text: 'CultureName' },
            cultureData: [
                { CultureName: "de" },
                { CultureName: "zh" },
                { CultureName: "en" }
            ],
        };
    },
    methods: {
        changeLocale: function(e) {
            var culture = e.value;
            this.locale = culture;
             if (culture != 'en') {
                loadCultureFiles(culture);
            }
            if (culture === 'zh') {
                this.currency = 'CNY';
                this.numericWatermark = '输入值';
                this.currencyWatermark = '输入货币';
                this.percentWatermark = '输入百分比';
            }
            else if (culture === 'de') {
                this.currency = 'EUR';
                this.numericWatermark = 'Geben Sie den Wert ein';
                this.currencyWatermark = 'Geben Sie die Währung ein';
                this.percentWatermark = 'Geben Sie den Prozentsatz ein';
            }
            else {
                this.currency = 'USD';
                this.numericWatermark = 'Enter the value';
                this.currencyWatermark = 'Enter the currency';
                this.percentWatermark = 'Enter the percentage';
            }
        }
    }
});
</script>