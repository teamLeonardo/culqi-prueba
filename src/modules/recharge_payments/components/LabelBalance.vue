<script setup lang="ts">
import useSWRV from 'swrv';
import { GetBalance } from '../services/payment.service';
import { utils } from '@/shared/utils';

const { data , isValidating } = useSWRV('/getActualBalance', GetBalance)
</script>
<template>
    <div class="w-full grid grid-cols-[auto,1fr] overflow-hidden gap-2">
        <div class="text-2xl lg:text-4xl font-bold truncate">
            {{ isValidating ? utils.formatPEN(Number(data?.balanceCommerce)) : "" }}
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
</template>