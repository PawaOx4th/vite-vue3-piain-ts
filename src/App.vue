<template>
  <div class="title">Lorem ipsum dolor sit amet.</div>
  <input type="number" v-model="input" @keydown.enter="handleIncrement()" />
  <pre>{{ count }}</pre>
  <pre>{{ getCount }}</pre>
  <button @click="handleIncrement()">HANDLEINCREMENT</button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { Store } from "./store/index";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const store = Store();

    const input = ref<number>(0);
    const count = computed(() => store.count);
    const getCount = computed(() => store.getCount);
    function handleIncrement() {
      const data: number = input.value;

      // const response = parseInt(data);
      store.increment(data);
      input.value = 0;
    }

    return {
      count,
      input,
      getCount,
      handleIncrement,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 3rem;
  margin-top: 60px;
}

.title {
  font-weight: bold;
}
</style>
