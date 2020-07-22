<template>
    <div>
        <div class="treeviewdiv">
            <div class="nodetext">
                <span class="treeName">{{data.name}}</span>
            </div>
            <div v-if="data.count" class="nodebadge">
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