
<script setup lang="ts">
import ListProvider from '../components/ListProvider.vue';
import PaymentLayout from '../layouts/Payment.layout.vue';
import { useAppStore } from '@/stores/app.store';
const { setNamePage } = useAppStore()

setNamePage("Recargas")

</script>
<template>
    <PaymentLayout>
        <div class="text-[#151929] px-6 mt-4 lg:mt-10 lg:px-20 overflow-auto">
            <span class="font-semibold text-sm lg:text-lg">
                Buscar empresa
            </span>
            <div class="relative">
                <label for="Search" class="sr-only"> Search </label>

                <input type="text" id="Search" placeholder="ej. Culqi"
                    class="w-full rounded-md bg-[#F4F5F6] outline-[#EB6F25] border-gray-200 py-2.5 px-2 pe-10 shadow-sm text-lg" />

                <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button type="button" class="text-[#EB6F25] ">
                        <span class="sr-only">Search</span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </span>
            </div>
            <div class="relative w-full inline-flex my-3 gap-3">
                <span
                    class="inline-flex cursor-pointer min-w-[80px] items-center justify-center rounded-full border border-[#EB6F25] px-4 py-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="whitespace-nowrap text-xs">Todas</p>
                </span>
                <span
                    class="inline-flex cursor-pointer min-w-[80px] items-center justify-center rounded-full border px-4 py-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="whitespace-nowrap text-xs">Favoritas</p>
                </span>
                <span
                    class="inline-flex cursor-pointer min-w-[80px] items-center justify-center rounded-full border px-4 py-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="whitespace-nowrap text-xs">Telefonia</p>
                </span>
            </div>
            <div class="relative w-full min-h-full flex flex-col overflow-auto">
                <Suspense>
                    <ListProvider />
                    <template #fallback>
                        <div class="animate-pulse w-full min-h-[300px] relative bg-slate-200 rounded">
                        </div>
                    </template>
                </Suspense>
            </div>

        </div>
    </PaymentLayout>
</template>