<template v-if="${getCellContent(data)} !== '' ">
    <span class="template-wrap" v-html=getCellContent(data)></span>
</template>

<script lang='ts'>
    export default {
        data() {
            return {
                data: {}
            }
        },
        methods: {
            /* tslint:disable */
            getCellContent: function (e: any) {
                return '<span class="tempwrap sb-icon-neutral pv-icons"></span>';
            }
        }
    }

</script>