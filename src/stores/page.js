import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
  // const doubleCount = computed(() => count.value * 2);
  // ---
  const name = ref("");
  const phone = ref("");
  const email = ref("");
  const socials = ref({});
  // ---
  function loadDefault() {
    name.value = "AppleFresh";
    phone.value = "+7 (495) 123-45-67";
    email.value = "hello@applefresh.ru";
    socials.value = {
      facebook: "//www.facebook.com/groups/5497230480378581/",
      instagram: "//www.instagram.com/applesfresh/",
      telegram: "//t.me/AppleFresh/",
      whatsapp: "//wa.me/AppleFresh/",
    };
  }
  loadDefault();

  return { name, phone, email, socials, loadDefault };
});
