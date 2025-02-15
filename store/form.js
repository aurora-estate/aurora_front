import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            isModalVisible: false,
        };
    },
    actions: {
        closeOrderModal() {
            this.isModalVisible = false;
            console.log('isModalVisible', this.isModalVisible);
        },
        openOrderModal() {
            this.isModalVisible = true;
            console.log('isModalVisible', this.isModalVisible);
            
        },
    },
});
