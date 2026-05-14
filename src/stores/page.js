import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
  // const doubleCount = computed(() => count.value * 2);
  // ---
  const name = ref("");
  const phone = ref("");
  const email = ref("");
  // ---
  function loadDefault() {
    name.value = "AppleFresh!";
    phone.value = "+7 (495) 123-45-67";
    email.value = "hello@applefresh.ru";
  }
  loadDefault();

  return { name, phone, email, loadDefault };
});
