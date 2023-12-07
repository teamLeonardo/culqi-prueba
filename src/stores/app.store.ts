import { defineStore } from "pinia"
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {
    const namePage = ref<string>("");
  
    function setNamePage(newPage: string) {
        namePage.value = newPage
    };

    return {
        namePage,
        setNamePage
    }

});