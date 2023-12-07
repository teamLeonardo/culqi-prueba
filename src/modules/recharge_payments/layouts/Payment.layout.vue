<script setup lang="ts">
import HeaderUi from '../components/Header.ui.vue';
</script>
<template>
    <div class="w-screen h-screen overflow-auto">
        <div class="max-w-3xl m-auto h-full">
            <Suspense>
                <HeaderUi />
            </Suspense>
            <slot></slot>

        </div>
    </div>
</template>