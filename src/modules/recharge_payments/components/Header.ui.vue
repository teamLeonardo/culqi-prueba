<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import { useRouter } from 'vue-router';

const { namePage } = useAppStore()

const router = useRouter()

const backPage = () => {
    router.back()
}
</script>
<template>
    <div
        class="w-full h-[10%] sticky top-0 z-50 lg:max-h-[65px] bg-[#141414] text-white rounded-bl-2xl rounded-br-2xl grid grid-cols-1 place-content-center">
        <div class="w-full text-center relative h-full">
            <div @click="backPage"
                class="w-[50px] absolute top-1/2 transform -translate-y-1/2 left-[0.6rem] cursor-pointer active:scale-90 p-2 rounded-full hover:bg-[#444444]">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="0.144"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
            <h1 class="text-lg font-semibold">
                {{ namePage || "..." }}
            </h1>
        </div>
    </div>
</template>