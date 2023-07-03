<template>
<div>
    <div class="control-section">
        <div class="content-wrapper">
            <div id='chipcustomization'>
                <div class="chipcontent">
                    <h4>Chip Customization</h4>
                    <ejs-multiselect id='countries' :dataSource='colorsData' :placeholder='chipPlaceholder' :fields='chipFields' cssClass='multiselect-chip-custom' :mode='chipMode' :value='chipValue' :tagging='onTagging'></ejs-multiselect>
                </div>
            </div>
        </div>
    </div>
<div id="action-description">
    <p>This sample demonstrates the customization of selected chip element in the MultiSelect. Type a character in the MultiSelect
        element or click on the element to choose one or more items from the list.</p>
</div>
<div id="description">
    <p>The MultiSelect allows the user to customize the selected chip element through the <code>tagging</code> event. In that
        event, you can set the custom classes to chip element via the event argument of the <code>setClass</code> method.
    </p>
    <p>This sample illustrates how to use the favorite colors of data and set the favorite color text as custom class through
        <code>tagging</code> event argument of the <code>setClass</code> method.</p>
</div>

</div>
</template>
<style scoped>

    #chipcustomization {
        width: 100%;
    }

    #chipcustomization .chipcontent {
        margin: 0 auto;
        width: 50%;
    }
</style>
<style>
    .multiselect-chip-custom .e-multi-select-wrapper .e-chips {
        opacity: 0.9;
    }

    .multiselect-chip-custom .e-multi-select-wrapper .e-chips:hover {
        opacity: 1;
    }

    .multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chips-close.e-icon::before,
    .multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chipcontent,
    .multiselect-chip-custom .e-multi-select-wrapper .e-chips .e-chipcontent:hover {
        color: #ffffff;
    }
    .multiselect-chip-custom .e-chips.chocolate,
    .multiselect-chip-custom .e-chips.chocolate:hover {
        background-color: #75523C;
    }

    .multiselect-chip-custom .e-chips.darkorange,
    .multiselect-chip-custom .e-chips.darkorange:hover {
        background-color: #FF843D;
    }

    .multiselect-chip-custom .e-chips.darkred,
    .multiselect-chip-custom .e-chips.darkred:hover {
        background-color: #CA3832;
    }

    .multiselect-chip-custom .e-chips.fuchsia,
    .multiselect-chip-custom .e-chips.fuchsia:hover {
        background-color: #D44FA3;
    }

    .multiselect-chip-custom .e-chips.cadetblue,
    .multiselect-chip-custom .e-chips.cadetblue:hover {
        background-color: #3B8289;
    }

    .multiselect-chip-custom .e-chips.hotpink,
    .multiselect-chip-custom .e-chips.hotpink:hover {
        background-color: #F23F82;
    }

    .multiselect-chip-custom .e-chips.indigo,
    .multiselect-chip-custom .e-chips.indigo:hover {
        background-color: #2F5D81;
    }

    .multiselect-chip-custom .e-chips.limegreen,
    .multiselect-chip-custom .e-chips.limegreen:hover {
        background-color: #4CD242;
    }

    .multiselect-chip-custom .e-chips.orangered,
    .multiselect-chip-custom .e-chips.orangered:hover {
        background-color: #FE2A00;
    }

    .multiselect-chip-custom .e-chips.tomato,
    .multiselect-chip-custom .e-chips.tomato:hover {
        background-color: #FF745C;
    }

    .fabric .multiselect-chip-custom .e-chips.chocolate,
    .fabric .multiselect-chip-custom .e-chips.chocolate:hover {
        background-color: #3c2f27;
    }

    .fabric .multiselect-chip-custom .e-chips.darkred,
    .fabric .multiselect-chip-custom .e-chips.darkred:hover {
        background-color: #960f0a;
    }

    .fabric .multiselect-chip-custom .e-chips.cadetblue,
    .fabric .multiselect-chip-custom .e-chips.cadetblue:hover {
        background-color: #36bac7;
    }

    .fabric .multiselect-chip-custom .e-chips.indigo,
    .fabric .multiselect-chip-custom .e-chips.indigo:hover {
        background-color: #58a4df;
    }
</style>
<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './dataSource.json';

Vue.use(MultiSelectPlugin);

export default Vue.extend ({
    data: function() {
        return {
            chipFields: { text: 'Color', value: 'Code' },
            chipValue: [ '#2F5D81', '#D44FA3', '#4CD242', '#FE2A00', '#75523C'],
            chipPlaceholder: 'Favorite Colors',
            chipMode: 'Box',
            colorsData: data['colorsData'],
        };
    },
    methods: {
    onTagging: function(e) {
         // set the current selected item text as class to chip element.
            e.setClass(e.itemData.Color.toLowerCase());
  }
  }
});
</script>