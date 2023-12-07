<script setup lang="ts">
import useSWRV from 'swrv';
import { GetProviders } from '../services/payment.service';
import { useRouter } from 'vue-router';
import { PATH } from '@/plugins/router';
import img from "@/assets/noImg.jpg"

function replaceByDefault(e: any) {
    e.target.src = img
}

const { push } = useRouter()


const { data, mutate, error } = useSWRV('/getProviders', GetProviders)


await mutate()

if (error && !data) {
    push(PATH.ERROR)
}

</script>
<template>
    <div v-for="provider of data" :key="provider._id" class="pr-4 gap-1 hover:bg-slate-200 rounded-lg cursor-pointer">
        <div class="grid grid-cols-[50px,1fr,auto] py-5 border-b border-slate-300 w-full lg:w-[350px] m-auto">
            <div class="flex justify-center items-center">
                <img @error="replaceByDefault" class="w-[30px]" :src="provider.image" :alt="provider.company">
            </div>
            <div class="flex items-center font-semibold text-lg">{{ provider.company }}</div>
            <div class="flex items-center">
                <svg class="-ms-1 me-1.5 h-5 w-5" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    fill="#ffffff" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>start-favorite</title>
                        <desc>Created with Sketch Beta.</desc>
                        <defs>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                            <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-152.000000, -879.000000)"
                                fill="#919191">
                                <path
                                    d="M168,903.21 L160.571,907.375 L161.989,898.971 L155.594,892.442 L164.245,891.317 L168,883.313 L171.722,891.317 L180.344,892.54 L174.011,899.002 L175.335,907.406 L168,903.21 L168,903.21 Z M184,891.244 L172.962,889.56 L168,879 L163.038,889.56 L152,891.244 L159.985,899.42 L158.095,911 L168,905.53 L177.905,911 L176.015,899.42 L184,891.244 L184,891.244 Z"
                                    id="start-favorite" sketch:type="MSShapeGroup"> </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>