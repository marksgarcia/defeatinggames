import { ref } from "vue";
import { defineStore } from "pinia";

export const useStreamers = defineStore("streamersStore", () => {
  const currentStreamers = ref([]);
  const updateStreamers = (value) => (currentStreamers.value = [...value]);

  return { currentStreamers, updateStreamers };
});
