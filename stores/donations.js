import { ref } from "vue";
import { defineStore } from "pinia";

export const useDonations = defineStore("donationsStore", () => {
  const currentDonations = ref(0);
  const updateDonations = (value) => (currentDonations.value = value);

  return { currentDonations, updateDonations };
});
