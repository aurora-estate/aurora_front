import { defineStore } from "pinia";




export const useStore = defineStore("main", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      visible: false,
      dataHeader: null,
      dataMain: null,
      dataYour: null,
      dataOrder: null,
      dataConfig: null
    };
  },
  getters: {
    getVisible: (state) => state.visible,
  },
  actions: {
    setVisible(args) {
      console.log("setQueryArgs -> ", args);
      this.visible = args;
    },

    setDataHeader(args) {
      console.log("setQueryArgs -> ", args);
      this.dataHeader = args;
    },
    setDataMain(args) {
      console.log("setQueryArgs -> ", args);
      this.dataHeader = args;
    },
    setDataYour(args) {
      console.log("setQueryArgs -> ", args);
      this.dataHeader = args;
    },
    setDataConfig(args) {
      console.log("setQueryArgs -> ", args);
      this.dataHeader = args;
    },
  },
  // persist: {
  //   storage: persistedState.localStorage,
  // },
});

