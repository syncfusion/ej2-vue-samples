<template>
    <div>
        <div class="treeviewdiv">
            <div style="float:left">
                <span class="treeName">{{data.name}}</span>
            </div>
            <div v-if="data.count" style="margin-right: 5px; float:right">
                <span class="treeCount e-badge e-badge-primary">{{data.count}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {}
            };
        }
    };

</script>