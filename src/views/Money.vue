<template>
    <div>
        <Layout>
            <p>Money.vue</p>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default {
        name: 'Money'
    }
</script>

<style lang="scss" scoped>
    .nav-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content {
        overflow: auto;
        flex-grow: 1;
    }
</style>