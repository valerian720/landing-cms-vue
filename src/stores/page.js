import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
  const name = ref("");
  const phone = ref("");
  const address = ref("");
  const workHours = ref("");
  const email = ref("");

  const slogan = ref({});

  const socials = ref({});
  const promoSlider = ref({});
  const advantages = ref({});
  const about = ref({});
  const blogPosts = ref({});

  const ratingThreshhold = ref(0);
  const reviews = ref({});

  const products = ref({});

  const navigationLinks = ref({});

  // ---
  function loadDefault() {
    name.value = "AppleFresh";
    slogan.value = {
      short: "AppleFresh — Магазин фермерских яблок.",
      long:
        "Свежие яблоки высшего качества с доставкой по всей России. Натуральные фермерские продукты для вашей семьи.",
    };
    phone.value = "+7 (495) 123-45-67";
    address.value = "г. Москва, ул. Яблоневая, 12";
    workHours.value = "Ежедневно: 9:00 - 21:00";
    email.value = "hello@applefresh.ru";
    socials.value = {
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
        socials.value.list.push(newItem);
      },
      update(index, item) {
        socials.value.list[index] = item;
      },
      delete(index) {
        socials.value.list.splice(index, 1);
      },
    };
    promoSlider.value = {
      list: [
        {
          image: "https://dummyimage.com/1280x720/fff/aaa",
          title: "Свежайшие яблоки с фермы!",
          description:
            "Прямая доставка из экологически чистых садов. Вкус детства!",
          actionText: "Выбрать сорт",
          actionLink: "#products",
        },
        {
          image: "https://dummyimage.com/1280x720/fff/aaa",
          title: "Скидка 15% на первый заказ",
          description: "Подпишись на рассылку и получи промокод на корзину.",
          actionText: "Узнать больше",
          actionLink: "#contact",
        },
        {
          image: "https://dummyimage.com/1280x720/fff/aaa",
          title: "Скидка 20% на второй заказ",
          description: "Подпишись на рассылку и получи промокод на корзину.",
          actionText: "Узнать больше",
          actionLink: "#contact",
        },
      ],
    };
    advantages.value = {
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
      add(element) {
        advantages.value.list.push(element);
      },
      update(index, element) {
        advantages.value.list[index] = element;
      },
      delete(index) {
        advantages.value.list.splice(index, 1);
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
    blogPosts.value = {
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
    };
    ratingThreshhold.value = 4;
    reviews.value = {
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
        reviews.value.list.push(newItem);
      },
      update(index, item) {
        reviews.value.list[index] = item;
      },
      delete(index) {
        reviews.value.list.splice(index, 1);
      },
    };

    products.value = {
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
      displayAmount: 5,
    };
    navigationLinks.value = {
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
        navigationLinks.value.list.push(newItem);
      },
      update(index, item) {
        navigationLinks.value.list[index] = item;
      },
      delete(index) {
        navigationLinks.value.list.splice(index, 1);
      },
    };
  }
  loadDefault();

  function setRatingThreshhold(newNumber, max = 5, min = 1) {
    let number = newNumber;
    number = Math.min(number, max);
    number = Math.max(number, min);
    ratingThreshhold.value = number;
  }

  return {
    name,
    slogan,
    address,
    workHours,
    phone,
    email,
    socials,
    promoSlider,
    advantages,
    about,
    blogPosts,
    ratingThreshhold,
    reviews,
    products,
    navigationLinks,
    loadDefault,
    setRatingThreshhold,
  };
});
