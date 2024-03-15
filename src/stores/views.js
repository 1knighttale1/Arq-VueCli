import { ref } from "vue";
import { defineStore } from "pinia";

export const useViewsStore = defineStore("view", ()=>{
    const view = ref({
        name: "",
        isGalery: true,
    });
    const chanceView = (newView) => {
        view.value.name = newView;
    };

    return { view, chanceView };
});