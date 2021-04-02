import { defineStore } from "pinia";

export type StoreType = number;

export const Store = defineStore({
  id: "Store",
  //   state () {
  //     return {
  //       count: 0,
  //     };
  //   },
  state: () => ({
    count: 0 as number,
  }),
  getters: {
    getCount() {
      return this.count;
    },
  },
  actions: {
    increment(input: number) {
      if (typeof input === "string") {
        input = parseInt(input);
      }

      let a = 0;
      if (input !== 0) {
        a = this.count + input;
      }

      this.count = a;
    },
  },
});
