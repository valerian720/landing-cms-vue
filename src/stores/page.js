import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
  // const doubleCount = computed(() => count.value * 2);
  // ---
  const name = ref("");
  const phone = ref("");
  const email = ref("");
  const socials = ref({});
  const advantages = ref({});

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
    advantages.value = {
      "1": {
        icon: "🍎",
        title: "Свежий урожай",
        description: "Срываем утром, доставляем в день заказа",
      },
      "2": {
        icon: "🌿",
        title: "Эко-продукция",
        description: "Без пестицидов, ГМО и воска",
      },
      "3": {
        icon: "🚚",
        title: "Бесплатная доставка",
        description: "От 1500₽ по Москве и области",
      },
      "4": {
        icon: "👍",
        title: "100% гарантия",
        description: "Вернём деньги, если не понравится",
      },
      "5": {
        icon: "💰",
        title: "Цены от фермы",
        description: "Никаких наценок посредников",
      },
    };
  }
  loadDefault();

  return { name, phone, email, socials, advantages, loadDefault };
});
