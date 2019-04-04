<template>
<div>
    <div class="control-section">
        <div class="content-wrapper">
            <div id='chipcustomization'>
                <div class="chipcontent">
                    <h4>Chip Customization</h4>
                    <ejs-multiselect id='countries' :dataSource='colorsData' :placeholder='chipPlaceholder' :fields='chipFields' :mode='chipMode' :value='chipValue' :tagging='onTagging'></ejs-multiselect>
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
<style>

    #chipcustomization {
        width: 100%;
    }

    #chipcustomization .chipcontent {
        margin: 0 auto;
        width: 50%;
    }

    #chipcustomization .e-multi-select-wrapper .e-chips {
        opacity: 0.9;
    }

    #chipcustomization .e-multi-select-wrapper .e-chips:hover {
        opacity: 1;
    }

    #chipcustomization .e-multi-select-wrapper .e-chips .e-chips-close.e-icon::before,
    #chipcustomization .e-multi-select-wrapper .e-chips .e-chipcontent,
    #chipcustomization .e-multi-select-wrapper .e-chips .e-chipcontent:hover {
        color: #ffffff;
    }
    #chipcustomization .e-chips.chocolate,
    #chipcustomization .e-chips.chocolate:hover {
        background-color: #75523C;
    }

    #chipcustomization .e-chips.darkorange,
    #chipcustomization .e-chips.darkorange:hover {
        background-color: #FF843D;
    }

    #chipcustomization .e-chips.darkred,
    #chipcustomization .e-chips.darkred:hover {
        background-color: #CA3832;
    }

    #chipcustomization .e-chips.fuchsia,
    #chipcustomization .e-chips.fuchsia:hover {
        background-color: #D44FA3;
    }

    #chipcustomization .e-chips.cadetblue,
    #chipcustomization .e-chips.cadetblue:hover {
        background-color: #3B8289;
    }

    #chipcustomization .e-chips.hotpink,
    #chipcustomization .e-chips.hotpink:hover {
        background-color: #F23F82;
    }

    #chipcustomization .e-chips.indigo,
    #chipcustomization .e-chips.indigo:hover {
        background-color: #2F5D81;
    }

    #chipcustomization .e-chips.limegreen,
    #chipcustomization .e-chips.limegreen:hover {
        background-color: #4CD242;
    }

    #chipcustomization .e-chips.orangered,
    #chipcustomization .e-chips.orangered:hover {
        background-color: #FE2A00;
    }

    #chipcustomization .e-chips.tomato,
    #chipcustomization .e-chips.tomato:hover {
        background-color: #FF745C;
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