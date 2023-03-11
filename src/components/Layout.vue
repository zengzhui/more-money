<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot />
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default {
        name: 'Layout'
    }
</script>

<style scoped>

</style>