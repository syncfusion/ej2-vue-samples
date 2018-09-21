<template>
    <div>
        <ejs-dropdownlist id='scheduletimezone'  value='' 
                    placeholder = 'Event Type' >
        </ejs-dropdownlist>
    </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(DropDownListPlugin);
    export default {
        data() {
            return {
                data: {
                }
            }
        },
    }

</script>