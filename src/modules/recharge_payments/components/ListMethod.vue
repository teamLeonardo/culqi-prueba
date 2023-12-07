
<script setup lang="ts">
import { PATH } from '@/plugins/router';
</script>
<template>
    <div class="w-full mt-5 grid gap-4 text-[#151929]">
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
        <div class="w-full cursor-pointer bg-slate-100 grid grid-cols-[auto,1fr] gap-4 px-4 py-4 rounded-lg ">
            <div class="bg-[#EB6F25] h-[40px] w-[40px] p-2 rounded-lg">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <defs class="fill-none stroke-[#ffffff] [stroke-linecap:round] [stroke-linejoin:round]">
                        </defs>
                        <path class="a"
                            d="M37.2133,17.7292A13.2133,13.2133,0,1,0,16.5058,28.5958a4.0061,4.0061,0,0,1,1.6648,3.315v4.7315H29.8294V31.907A4.0511,4.0511,0,0,1,31.532,28.57,13.1741,13.1741,0,0,0,37.2133,17.7292Z">
                        </path>
                        <line class="a" x1="19.4437" y1="38.9282" x2="28.5563" y2="38.9282"></line>
                        <line class="a" x1="19.3782" y1="41.2141" x2="28.4908" y2="41.2141"></line>
                        <line class="a" x1="21.5213" y1="43.5" x2="26.4787" y2="43.5"></line>
                        <polyline class="a" points="26.011 36.642 26.011 29.583 27.66 26.085"></polyline>
                        <polyline class="a" points="21.989 36.642 21.989 29.583 20.34 26.085"></polyline>
                    </g>
                </svg>
            </div>

            <span class="flex items-center font-bold text-lg">
                Pagos de servicios
            </span>
        </div>
        <div class="w-full cursor-pointer bg-slate-100 grid grid-cols-[auto,1fr] gap-4 px-4 py-4 rounded-lg ">
            <div class="bg-[#EB6F25] w-[40px] h-[40px] p-2 rounded-lg">
                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z">
                        </path>
                    </g>
                </svg>
            </div>
            <span class="flex items-center font-bold text-lg w-[200px] ">
                Historias de ganancias y operaciones
            </span>
        </div>
    </div>
</template>