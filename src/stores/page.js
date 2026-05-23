import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
  // const doubleCount = computed(() => count.value * 2);
  // ---
  const name = ref("");
  const phone = ref("");
  const email = ref("");

  const socials = ref({});
  const promoSlider = ref({});
  const advantages = ref({});
  const about = ref({});

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
    promoSlider.value = {
      "1": {
        image: "https://dummyimage.com/1280x720/fff/aaa",
        title: "Свежайшие яблоки с фермы!",
        description:
          "Прямая доставка из экологически чистых садов. Вкус детства!",
        actionText: "Выбрать сорт",
        actionLink: "#products",
      },
      "2": {
        image: "https://dummyimage.com/1280x720/fff/aaa",
        title: "Скидка 15% на первый заказ",
        description: "Подпишись на рассылку и получи промокод на корзину.",
        actionText: "Узнать больше",
        actionLink: "#contact",
      },
      "3": {
        image: "https://dummyimage.com/1280x720/fff/aaa",
        title: "Скидка 20% на второй заказ",
        description: "Подпишись на рассылку и получи промокод на корзину.",
        actionText: "Узнать больше",
        actionLink: "#contact",
      },
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
    about.value = {
      title: "AppleFresh — яблоки, влюбляющие с первого укуса",
      text: [
        "Мы семейная ферма, которая более 15 лет выращивает яблоки в экологически чистом районе. Собираем урожай вручную, сортируем и упаковываем с любовью. Наша миссия — подарить каждому столу настоящий, сочный вкус детства без химии и лишних добавок.",
        "В наших яблоках сохраняются все витамины и минералы. Мы доставляем заказы в день сбора, чтобы вы наслаждались свежестью. Попробуйте разные сорта — от классических сладких до пикантных с кислинкой. Присоединяйтесь к сообществу здорового питания!",
      ],
      imgUrl: "https://dummyimage.com/1280x720/fff/aaa",
      actionText: "Каталог сортов",
      actionLink: "#products",
    };
  }
  loadDefault();

  return {
    name,
    phone,
    email,
    socials,
    promoSlider,
    advantages,
    about,
    loadDefault,
  };
});
