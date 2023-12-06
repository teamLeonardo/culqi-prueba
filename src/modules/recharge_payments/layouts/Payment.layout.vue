<script setup lang="ts">
import HeaderUi from '../components/Header.ui.vue';
</script>
<template>
    <div class="w-screen h-screen overflow-auto">
        <div class="max-w-3xl m-auto h-full">
            <HeaderUi />
            <slot></slot>

        </div>
    </div>
</template>