<script setup lang="ts">
import { useAppStore } from '@/stores/app.store';
import LabelBalance from '../components/LabelBalance.vue';
import LoadLabel from '../components/LoadLabel.vue';
import PaymentLayout from '../layouts/Payment.layout.vue';
import ListMethod from '../components/ListMethod.vue';

const { setNamePage } = useAppStore();

setNamePage("Recargas y pagos")

</script>
<template>
    <PaymentLayout>
        <div class="text-[#151929] px-6 mt-6 lg:mt-12 lg:px-20">
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
            <div class="w-full min-h-[40px] flex overflow-hidden gap-2">
                <Suspense>
                    <LabelBalance />
                    <template #fallback>
                        <LoadLabel />
                    </template>
                </Suspense>
            </div>

            <div class="w-full my-6">
                <div class="w-fit 
                py-1 
                px-7 
                cursor-pointer 
                border 
                border-gray-500 
                text-gray-500 
                rounded-3xl 
                transition ease-in-out
                hover:scale-[1.02]
                lg:text-lg">
                    ¿Como cargar mi saldo virtual?
                </div>
            </div>
            <div class="w-full my-5 flex gap-2">
                <span>
                    Codigo para cargar tu codigo:
                </span>
                <div class="text-[#22a7a2] font-semibold" aria-hidden="true">
                    {12345678901}
                </div>
            </div>
            <hr>
            <ListMethod />
        </div>
    </PaymentLayout>
</template>