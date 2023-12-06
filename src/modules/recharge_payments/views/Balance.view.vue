
<script setup lang="ts">
// import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import PaymentLayout from '../layouts/Payment.layout.vue';
import { useAppStore } from '@/stores/app.store';
import { PATH } from '@/plugins/router';
const { setNamePage } = useAppStore()

setNamePage("Recargas y pagos")



// onUnmounted(() => {
//     setNamePage("")
// })

</script>
<template>
    <PaymentLayout>
        <div class="px-6 mt-6 lg:mt-12 lg:px-20">
            <span class="text-lg lg:text-xl text-[#6A7789] flex items-center gap-2 mb-4">Saldo vitual
                <div class="w-[18px] lg:w-[20px]">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#09A49E">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z"
                                fill="#09A49E"></path>
                            <path
                                d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                fill="#09A49E"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
                                fill="#09A49E"></path>
                        </g>
                    </svg>
                </div>
            </span>
            <div class="w-full grid grid-cols-[auto,1fr] overflow-hidden gap-2">
                <div class="text-[#151929] text-2xl lg:text-4xl font-bold truncate">
                    s/ 123.23sssssss
                </div>
                <div class="w-[31px] lg:w-[35px] h-full flex items-center">
                    <div class="w-full p-2 rounded-full cursor-pointer hover:animate-spin">
                        <svg fill="#09A49E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#09A49E">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M1,12A11,11,0,0,1,17.882,2.7l1.411-1.41A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707l1.128-1.128A8.994,8.994,0,0,0,3,12a1,1,0,0,1-2,0Zm21-1a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9,8.9,8.9,0,0,1-4.42-1.166l1.127-1.127A1,1,0,0,0,8,17H4a1,1,0,0,0-1,1v4a1,1,0,0,0,.617.924A.987.987,0,0,0,4,23a1,1,0,0,0,.707-.293L6.118,21.3A10.891,10.891,0,0,0,12,23,11.013,11.013,0,0,0,23,12,1,1,0,0,0,22,11Z">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <RouterLink :to="PATH.SECOND">
                    Lista de provedores
                </RouterLink>
            </div>
        </div>
    </PaymentLayout>
</template>