
<script setup lang="ts">
// import { onMounted } from 'vue';
import PaymentLayout from '../layouts/Payment.layout.vue';
import { useAppStore } from '@/stores/app.store';
const { setNamePage } = useAppStore()

setNamePage("Recargas")

// onUnmounted(() => {
//     setNamePage("")
// })

</script>
<template>
    <PaymentLayout>
        <div class="px-6 mt-6 lg:mt-12 lg:px-20">
            asdasd
        </div>
    </PaymentLayout>
</template>