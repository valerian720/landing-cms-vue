import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
  const state = reactive({
    name: "",
    phone: "",
    address: "",
    workHours: "",
    email: "",
    logo: "",
    slogan: { short: "", long: "" },
    socials: [],
    promoSlider: [],
    advantages: [],
    about: {
      selectedType: "default",
      title: "",
      text: [],
      imgUrl: "",
      actionText: "",
      actionLink: "",
    },
    blogPosts: { displayLimit: 3, posts: [] },
    ratingThreshhold: { value: 0 },
    reviews: [],
    products: { displayAmount: 5, list: [] },
    navigationLinks: { displayDepthLevel: 1, list: [] },
  });

  function addItem(section, newItem) {
    if (Array.isArray(state[section])) {
      state[section].push(newItem);
    } else if (state[section]?.list && Array.isArray(state[section].list)) {
      state[section].list.push(newItem);
    } else {
      console.warn(`Section "${section}" does not support addItem`);
    }
  }

  function updateItem(section, index, newItem) {
    const target = getTargetArray(section);
    if (target && index >= 0 && index < target.length) {
      target[index] = newItem;
    }
  }

  function deleteItem(section, index) {
    const target = getTargetArray(section);
    if (target && index >= 0 && index < target.length) {
      target.splice(index, 1);
    }
  }

  function getTargetArray(section) {
    const val = state[section];
    if (Array.isArray(val)) return val;
    if (val?.list && Array.isArray(val.list)) return val.list;
    return null;
  }

  // ---
  function loadDefault() {
    state.name = "AppleFresh";
    state.logo =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktYXBwbGUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTExLjE4Mi4wMDhDMTEuMTQ4LS4wMyA5LjkyMy4wMjMgOC44NTcgMS4xOGMtMS4wNjYgMS4xNTYtLjkwMiAyLjQ4Mi0uODc4IDIuNTE2czEuNTIuMDg3IDIuNDc1LTEuMjU4Ljc2Mi0yLjM5MS43MjgtMi40M20zLjMxNCAxMS43MzNjLS4wNDgtLjA5Ni0yLjMyNS0xLjIzNC0yLjExMy0zLjQyMnMxLjY3NS0yLjc4OSAxLjY5OC0yLjg1NC0uNTk3LS43OS0xLjI1NC0xLjE1N2EzLjcgMy43IDAgMCAwLTEuNTYzLS40MzRjLS4xMDgtLjAwMy0uNDgzLS4wOTUtMS4yNTQuMTE2LS41MDguMTM5LTEuNjUzLjU4OS0xLjk2OC42MDctLjMxNi4wMTgtMS4yNTYtLjUyMi0yLjI2Ny0uNjY1LS42NDctLjEyNS0xLjMzMy4xMzEtMS44MjQuMzI4LS40OS4xOTYtMS40MjIuNzU0LTIuMDc0IDIuMjM3LS42NTIgMS40ODItLjMxMSAzLjgzLS4wNjcgNC41NnMuNjI1IDEuOTI0IDEuMjczIDIuNzk2Yy41NzYuOTg0IDEuMzQgMS42NjcgMS42NTkgMS44OTlzMS4yMTkuMzg2IDEuODQzLjA2N2MuNTAyLS4zMDggMS40MDgtLjQ4NSAxLjc2Ni0uNDcyLjM1Ny4wMTMgMS4wNjEuMTU0IDEuNzgyLjUzOS41NzEuMTk3IDEuMTExLjExNSAxLjY1Mi0uMTA1LjU0MS0uMjIxIDEuMzI0LTEuMDU5IDIuMjM4LTIuNzU4cS41Mi0xLjE4NS40NzMtMS4yODIiLz4KICA8cGF0aCBkPSJNMTEuMTgyLjAwOEMxMS4xNDgtLjAzIDkuOTIzLjAyMyA4Ljg1NyAxLjE4Yy0xLjA2NiAxLjE1Ni0uOTAyIDIuNDgyLS44NzggMi41MTZzMS41Mi4wODcgMi40NzUtMS4yNTguNzYyLTIuMzkxLjcyOC0yLjQzbTMuMzE0IDExLjczM2MtLjA0OC0uMDk2LTIuMzI1LTEuMjM0LTIuMTEzLTMuNDIyczEuNjc1LTIuNzg5IDEuNjk4LTIuODU0LS41OTctLjc5LTEuMjU0LTEuMTU3YTMuNyAzLjcgMCAwIDAtMS41NjMtLjQzNGMtLjEwOC0uMDAzLS40ODMtLjA5NS0xLjI1NC4xMTYtLjUwOC4xMzktMS42NTMuNTg5LTEuOTY4LjYwNy0uMzE2LjAxOC0xLjI1Ni0uNTIyLTIuMjY3LS42NjUtLjY0Ny0uMTI1LTEuMzMzLjEzMS0xLjgyNC4zMjgtLjQ5LjE5Ni0xLjQyMi43NTQtMi4wNzQgMi4yMzctLjY1MiAxLjQ4Mi0uMzExIDMuODMtLjA2NyA0LjU2cy42MjUgMS45MjQgMS4yNzMgMi43OTZjLjU3Ni45ODQgMS4zNCAxLjY2NyAxLjY1OSAxLjg5OXMxLjIxOS4zODYgMS44NDMuMDY3Yy41MDItLjMwOCAxLjQwOC0uNDg1IDEuNzY2LS40NzIuMzU3LjAxMyAxLjA2MS4xNTQgMS43ODIuNTM5LjU3MS4xOTcgMS4xMTEuMTE1IDEuNjUyLS4xMDUuNTQxLS4yMjEgMS4zMjQtMS4wNTkgMi4yMzgtMi43NThxLjUyLTEuMTg1LjQ3My0xLjI4MiIvPgo8L3N2Zz4=";
    state.slogan = {
      short: "AppleFresh — Магазин фермерских яблок.",
      long:
        "Свежие яблоки высшего качества с доставкой по всей России. Натуральные фермерские продукты для вашей семьи.",
    };
    state.phone = "+7 (495) 123-45-67";
    state.address = "г. Москва, ул. Яблоневая, 12";
    state.workHours = "Ежедневно: 9:00 - 21:00";
    state.email = "hello@applefresh.ru";
    state.socials = {
      list: [
        {
          type: "facebook",
          url: "//www.facebook.com/groups/5497230480378581/",
        },
        {
          type: "instagram",
          url: "//www.instagram.com/applesfresh/",
        },
        {
          type: "telegram",
          url: "///t.me/AppleFresh/",
        },
        {
          type: "whatsapp",
          url: "//wa.me/AppleFresh/",
        },
      ],

      add(newItem) {
        state.socials.list.push(newItem);
      },
      update(index, item) {
        state.socials.list[index] = item;
      },
      delete(index) {
        state.socials.list.splice(index, 1);
      },
    };
    state.promoSlider = {
      list: [
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          title: "Свежайшие яблоки с фермы!",
          description:
            "Прямая доставка из экологически чистых садов. Вкус детства!",
          actionText: "Выбрать сорт",
          actionLink: "#products",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          title: "Скидка 15% на первый заказ",
          description: "Подпишись на рассылку и получи промокод на корзину.",
          actionText: "Узнать больше",
          actionLink: "#contact",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          title: "Скидка 20% на второй заказ",
          description: "Подпишись на рассылку и получи промокод на корзину.",
          actionText: "Узнать больше",
          actionLink: "#contact",
        },
      ],

      add(newItem) {
        state.promoSlider.list.push(newItem);
      },
      update(index, item) {
        state.promoSlider.list[index] = item;
      },
      delete(index) {
        state.promoSlider.list.splice(index, 1);
      },
    };
    state.advantages = {
      list: [
        {
          icon: "🍎",
          title: "Свежий урожай",
          description: "Срываем утром, доставляем в день заказа",
        },
        {
          icon: "🌿",
          title: "Эко-продукция",
          description: "Без пестицидов, ГМО и воска",
        },
        {
          icon: "🚚",
          title: "Бесплатная доставка",
          description: "От 1500₽ по Москве и области",
        },
        {
          icon: "👍",
          title: "100% гарантия",
          description: "Вернём деньги, если не понравится",
        },
        {
          icon: "💰",
          title: "Цены от фермы",
          description: "Никаких наценок посредников",
        },
      ],
    };
    state.about = {
      selectedType: "default",
      title: "AppleFresh — яблоки, влюбляющие с первого укуса",
      text: [
        "Мы семейная ферма, которая более 15 лет выращивает яблоки в экологически чистом районе. Собираем урожай вручную, сортируем и упаковываем с любовью. Наша миссия — подарить каждому столу настоящий, сочный вкус детства без химии и лишних добавок.",
        "В наших яблоках сохраняются все витамины и минералы. Мы доставляем заказы в день сбора, чтобы вы наслаждались свежестью. Попробуйте разные сорта — от классических сладких до пикантных с кислинкой. Присоединяйтесь к сообществу здорового питания!",
      ],
      imgUrl: "https://dummyimage.com/1280x720/fff/aaa",
      actionText: "Каталог сортов",
      actionLink: "#products",
    };
    state.blogPosts = {
      displayLimit: 3,
      posts: [
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          tags: ["Рецепты"],
          title: "Шарлотка за 30 минут: секреты пышности",
          shortDescription:
            "Идеальный рецепт с кисло-сладкими яблоками. Корж получается воздушным и влажным.",
          link: "/blog/1",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          tags: ["Полезное"],
          title: "5 причин есть яблоки каждый день",
          shortDescription:
            "Иммунитет, клетчатка, молодость кожи — рассказываем о реальной пользе.",
          link: "/blog/2",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          tags: ["Советы"],
          title: "Как выбрать самые сладкие яблоки?",
          shortDescription:
            "Отличаем сорта, определяем зрелость и сохраняем свежесть на недели.",
          link: "/blog/3",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          tags: ["Советы"],
          title: "Как выбрать самые лучшие яблоки для сидра?",
          shortDescription:
            "Отличаем сорта лучше всего подходящие под ферментирование.",
          link: "/blog/4",
        },
      ],
      add(newItem) {
        state.blogPosts.posts.push(newItem);
      },
      update(index, item) {
        state.blogPosts.posts[index] = item;
      },
      delete(index) {
        state.blogPosts.posts.splice(index, 1);
      },
    };
    state.ratingThreshhold.value = 4;
    state.reviews = {
      list: [
        {
          rating: 5.0,
          text:
            "Самые сочные яблоки, которые я пробовал! Заказываю Гренни Смит для выпечки - всегда идеальная кислинка. Доставка быстрая, курьер вежливый.",
          author: {
            name: "Алексей К.",
            description: "постоянный клиент",
            avatar: "https://dummyimage.com/60x60/fff/aaa",
          },
        },
        {
          rating: 4,
          text:
            "Ребёнок обожает Фуджи - очень сладкие, без единой кислинки. Упаковано аккуратно, ни одно яблоко не помялось. Обязательно закажу ещё!",
          author: {
            name: "Елена М.",
            description: "мама двоих детей",
            avatar: "https://dummyimage.com/60x60/fff/aaa",
          },
        },
        {
          rating: 5,
          text:
            "Удивительный вкус и аромат - как из детства, когда бабушка привозила яблоки из деревни. Всем рекомендую, качество на высоте!",
          author: {
            name: "Дмитрий В.",
            description: "шеф-повар",
            avatar: "https://dummyimage.com/60x60/fff/aaa",
          },
        },
        {
          rating: 2,
          text:
            "Отвратительные яблоки, приехали помятые и с плесенью. На письма уже неделю не отвечают.",
          author: {
            name: "Иван В.",
            description: "дальнобойщик",
            avatar: "https://dummyimage.com/60x60/fff/aaa",
          },
        },
      ],

      add(newItem) {
        state.reviews.list.push(newItem);
      },
      update(index, item) {
        state.reviews.list[index] = item;
      },
      delete(index) {
        state.reviews.list.splice(index, 1);
      },
    };

    state.products = {
      list: [
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          url: "/products/1",
          name: "Гренни Смит",
          shortDescription:
            "Хрустящие, кисло-сладкие яблоки. Идеальны для пирогов.",
          price: "199",
          priceSymbol: "₽/кг",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          url: "/products/2",
          name: "Фуджи",
          shortDescription: "Невероятно сладкие, сочные, с медовым ароматом.",
          price: "249",
          priceSymbol: "₽/кг",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          url: "/products/3",
          name: "Голден",
          shortDescription: "Нежные, маслянистые, с лёгкой кислинкой.",
          price: "219",
          priceSymbol: "₽/кг",
        },
        {
          img: "https://dummyimage.com/1280x720/fff/aaa",
          url: "/products/4",
          name: "Семеренко",
          shortDescription: "Знаменитый советский сорт, ароматный и хрустящий.",
          price: "179",
          priceSymbol: "₽/кг",
        },
      ],

      add(newItem) {
        state.products.list.push(newItem);
      },
      update(index, item) {
        state.products.list[index] = item;
      },
      delete(index) {
        state.products.list.splice(index, 1);
      },
      displayAmount: 5,
    };
    state.navigationLinks = {
      list: [
        {
          title: "Преимущества",
          url: "#advantages",
        },
        {
          title: "Товары",
          url: "#products",
        },
        {
          title: "О нас",
          url: "#about",
        },
        {
          title: "Блог",
          url: "#blog",
        },
        {
          title: "Отзывы",
          url: "#reviews",
        },
        {
          title: "Контакты",
          url: "#contact",
        },
      ],
      displayDepthLevel: 1,

      add(newItem) {
        state.navigationLinks.list.push(newItem);
      },
      update(index, item) {
        state.navigationLinks.list[index] = item;
      },
      delete(index) {
        state.navigationLinks.list.splice(index, 1);
      },
    };
  }
  loadDefault();

  function setRatingThreshhold(newNumber, max = 5, min = 1) {
    let number = newNumber;
    number = Math.min(number, max);
    number = Math.max(number, min);

    state.ratingThreshhold.value = number;
  }

  return {
    ...state, //get access to states individually
    addItem,
    updateItem,
    deleteItem,
    loadDefault,
    setRatingThreshhold,
  };
});
