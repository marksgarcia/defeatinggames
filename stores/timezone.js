import { ref } from "vue";
import { defineStore } from "pinia";

export const useTimezone = defineStore("timezoneStore", () => {
  const isEST = ref(true);
  const updateTZ = () => (isEST.value = !isEST.value);

  const eventIsComplete = ref(false);
  const updateEventIsComplete = (value) => eventIsComplete.value = value

  return { isEST, updateTZ, eventIsComplete, updateEventIsComplete };
});
