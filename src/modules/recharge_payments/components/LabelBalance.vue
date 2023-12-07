<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';

import { utils } from '@/shared/utils';
import { PATH } from '@/plugins/router';

import { GetBalance } from '../services/payment.service';
import LoadLabel from './LoadLabel.vue';

const { push } = useRouter()

const clickLoad = ref(false)

const { data: balance, mutate, error, isValidating } = useSWRV('/getActualBalance', GetBalance, {
    cache: new LocalStorageCache('swrv'),
    shouldRetryOnError: false
})

const data = ref(balance)

await mutate()

if (error && !data.value?.balanceCommerce) {
    push(PATH.ERROR)
}

const reloadData = async () => {
    clickLoad.value = true
    data.value = undefined
    await mutate()
    clickLoad.value = false
};
</script>
<template>
    <template v-if="isValidating && clickLoad">
        <LoadLabel></LoadLabel>
    </template>
    <template v-else>
        <div class="text-2xl lg:text-4xl font-bold truncate">
            {{ Number(data?.balanceCommerce) ? utils.formatPEN(Number(data?.balanceCommerce)) : "" }}
        </div>
        <div @click="reloadData" class="w-[31px] lg:w-[35px] h-full flex items-center">
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
    </template>
</template>