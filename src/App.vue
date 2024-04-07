<template>
    <div class="app-container">
        <OrgTree />
        <UserTable />
    </div>
</template>

<script setup lang="ts">
    import OrgTree from './components/OrgTree.vue';
    import UserTable from './components/UserTable.vue';

</script>

<style>
    /* 全局样式 */
    .app-container {
        display: flex;
        gap: 20px;
    }
</style>