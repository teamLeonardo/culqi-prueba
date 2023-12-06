import { defineStore } from "pinia"
import { ref } from "vue";
// import { computed, ref } from "vue"

export const useAppStore = defineStore('app', () => {
    //   const list = ref([])
    const namePage = ref<string>("");
    //   const summary = computed(() => {
    //     // return `Hi ${user.name}, you have ${list.value.length} items in your cart. It costs ${price.value}.`
    //   })

    // function purchase() {
    //     // return apiPurchase(user.id, this.list)
    // }
    function setNamePage(newPage: string) {
        namePage.value = newPage
    };

    return {
        namePage,
        setNamePage
    }

});