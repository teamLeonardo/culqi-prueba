<script setup lang="ts">
import HeaderUi from '../components/Header.ui.vue';
</script>
<template>
    <div class="w-screen h-screen overflow-auto">
        <div class="max-w-3xl m-auto border border-red-600 h-full">
            <HeaderUi />
            <slot></slot>

        </div>
    </div>
</template>