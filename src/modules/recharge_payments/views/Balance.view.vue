<script setup lang="ts">
import { PATH } from '@/plugins/router';
import { useAppStore } from '@/stores/app.store';
import LabelBalance from '../components/LabelBalance.vue';
import LoadLabel from '../components/LoadLabel.vue';
import PaymentLayout from '../layouts/Payment.layout.vue';
const { setNamePage } = useAppStore()

setNamePage("Recargas y pagos")

// const LabelBalance = () => import("../components/LabelBalance.vue")

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
                <div class="text-[#09A49E] font-semibold">
                    {12345678901}
                </div>
            </div>
            <hr>
            <div class="w-full mt-5 grid gap-4">
                <RouterLink :to="PATH.SECOND">
                    <div class="w-full bg-slate-100 grid grid-cols-[auto,1fr] gap-4 px-4 py-4 rounded-lg ">
                        <div class="bg-[#EB6F25] w-[40px] h-[40px] p-2 rounded-lg">
                            <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 34.999" xml:space="preserve"
                                stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M23.628,14.77l-0.886,0.885c-2.892-2.891-7.595-2.891-10.487,0l-0.885-0.885C14.75,11.391,20.25,11.39,23.628,14.77z M12.9,16.3l0.885,0.886c2.047-2.048,5.379-2.048,7.427,0l0.885-0.886C19.562,13.765,15.437,13.765,12.9,16.3z M14.479,17.879 l0.885,0.885c1.177-1.177,3.092-1.177,4.269,0l0.886-0.885C18.853,16.214,16.146,16.214,14.479,17.879z M27.666,2.364v30.271 c0,1.301-1.062,2.364-2.364,2.364H9.697c-1.3,0.001-2.364-1.062-2.364-2.363V2.364C7.333,1.064,8.397,0,9.697,0h15.604 C26.601,0,27.666,1.063,27.666,2.364z M14.717,1.99c0,0.158,0.128,0.286,0.286,0.286h4.992c0.158,0,0.286-0.128,0.286-0.286 c0-0.158-0.128-0.287-0.286-0.287h-4.992C14.846,1.704,14.717,1.832,14.717,1.99z M18.681,32.636c0-0.653-0.529-1.182-1.182-1.182 s-1.182,0.528-1.182,1.182s0.529,1.183,1.182,1.183S18.681,33.289,18.681,32.636z M26.021,3.749H8.979v26.876h17.042V3.749z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <span class="flex items-center font-bold text-lg">
                            Recargas
                        </span>
                    </div>
                </RouterLink>
                <div class="w-full bg-slate-100 grid grid-cols-[auto,1fr] gap-4 px-4 py-4 rounded-lg ">
                    <div class="bg-[#EB6F25] h-[40px] w-[40px] p-2 rounded-lg">
                        <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 34.999" xml:space="preserve"
                            stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                        d="M23.628,14.77l-0.886,0.885c-2.892-2.891-7.595-2.891-10.487,0l-0.885-0.885C14.75,11.391,20.25,11.39,23.628,14.77z M12.9,16.3l0.885,0.886c2.047-2.048,5.379-2.048,7.427,0l0.885-0.886C19.562,13.765,15.437,13.765,12.9,16.3z M14.479,17.879 l0.885,0.885c1.177-1.177,3.092-1.177,4.269,0l0.886-0.885C18.853,16.214,16.146,16.214,14.479,17.879z M27.666,2.364v30.271 c0,1.301-1.062,2.364-2.364,2.364H9.697c-1.3,0.001-2.364-1.062-2.364-2.363V2.364C7.333,1.064,8.397,0,9.697,0h15.604 C26.601,0,27.666,1.063,27.666,2.364z M14.717,1.99c0,0.158,0.128,0.286,0.286,0.286h4.992c0.158,0,0.286-0.128,0.286-0.286 c0-0.158-0.128-0.287-0.286-0.287h-4.992C14.846,1.704,14.717,1.832,14.717,1.99z M18.681,32.636c0-0.653-0.529-1.182-1.182-1.182 s-1.182,0.528-1.182,1.182s0.529,1.183,1.182,1.183S18.681,33.289,18.681,32.636z M26.021,3.749H8.979v26.876h17.042V3.749z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span class="flex items-center font-bold text-lg">
                        Pagos de servicios
                    </span>
                </div>
                <div class="w-full bg-slate-100 grid grid-cols-[auto,1fr] gap-4 px-4 py-4 rounded-lg ">
                    <div class="bg-[#EB6F25] w-[40px] h-[40px] p-2 rounded-lg">
                        <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 34.999" xml:space="preserve"
                            stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                        d="M23.628,14.77l-0.886,0.885c-2.892-2.891-7.595-2.891-10.487,0l-0.885-0.885C14.75,11.391,20.25,11.39,23.628,14.77z M12.9,16.3l0.885,0.886c2.047-2.048,5.379-2.048,7.427,0l0.885-0.886C19.562,13.765,15.437,13.765,12.9,16.3z M14.479,17.879 l0.885,0.885c1.177-1.177,3.092-1.177,4.269,0l0.886-0.885C18.853,16.214,16.146,16.214,14.479,17.879z M27.666,2.364v30.271 c0,1.301-1.062,2.364-2.364,2.364H9.697c-1.3,0.001-2.364-1.062-2.364-2.363V2.364C7.333,1.064,8.397,0,9.697,0h15.604 C26.601,0,27.666,1.063,27.666,2.364z M14.717,1.99c0,0.158,0.128,0.286,0.286,0.286h4.992c0.158,0,0.286-0.128,0.286-0.286 c0-0.158-0.128-0.287-0.286-0.287h-4.992C14.846,1.704,14.717,1.832,14.717,1.99z M18.681,32.636c0-0.653-0.529-1.182-1.182-1.182 s-1.182,0.528-1.182,1.182s0.529,1.183,1.182,1.183S18.681,33.289,18.681,32.636z M26.021,3.749H8.979v26.876h17.042V3.749z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span class="flex items-center font-bold text-lg">
                        Historias de ganancias y <br>
                        operaciones
                    </span>
                </div>
            </div>
        </div>
    </PaymentLayout>
</template>