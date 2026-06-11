<script setup></script>

<template>
  <RouterView />
  <!-- ШАПКА -->
  <TopHeaderBlock :phone="pageStore.phone" :email="pageStore.email" :socials="pageStore.socials" />
  <WideHeaderBlock :name="pageStore.name" :navigationLinks="pageStore.navigationLinks" />

  <!-- СЛАЙДЕР (карусель с промо текстом и картинкой) -->
  <SliderBlock :slides="pageStore.promoSlider" />

  <!-- БЛОК С ПРЕИМУЩЕСТВАМИ (эмодзи + текст) -->
  <AdvantagesBlock :advantages="pageStore.advantages" />

  <!-- СЛАЙДЕР С КАРТОЧКАМИ ТОВАРА -->
  <ProductsBlock :products="pageStore.products" />

  <!-- ОПИСАНИЕ МАГАЗИНА (h1 + текст + изображение) -->
  <AboutBlock :about="pageStore.about" />

  <!-- ИЗБРАННЫЕ ЗАПИСИ БЛОГА -->
  <SelectedBlogBlock :posts="pageStore.blogPosts" />

  <!-- ПОСЛЕДНИЕ ОТЗЫВЫ -->
  <SelectedReviewsBlock :reviews="pageStore.reviews" :ratingThreshhold="pageStore.ratingThreshhold" />

  <!-- ФОРМА ОБРАТНОЙ СВЯЗИ -->
  <ContactFormBlock />

  <SettingsPanelBlock />

  <!-- ФУТЕР С ССЫЛКАМИ -->
  <FooterBlock :phone="pageStore.phone" :email="pageStore.email" :address="pageStore.address"
    :workHours="pageStore.workHours" :name="pageStore.name" :slogan="pageStore.slogan" :socials="pageStore.socials" />
</template>

<script>

import TopHeaderBlock from '@/components/TopHeaderBlock.vue'
import WideHeaderBlock from '@/components/WideHeaderBlock.vue'
import SliderBlock from '@/components/SliderBlock.vue'
import AdvantagesBlock from '@/components/AdvantagesBlock.vue'
import ProductsBlock from '@/components/ProductsBlock.vue'
import AboutBlock from '@/components/AboutBlock.vue'
import SelectedBlogBlock from '@/components/SelectedBlogBlock.vue'
import SelectedReviewsBlock from '@/components/SelectedReviewsBlock.vue'
import ContactFormBlock from '@/components/ContactFormBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import SettingsPanelBlock from '@/components/SettingsPanelBlock.vue'

import { usePageStore } from '@/stores/page'

export default {
  props: [],
  components: {
    TopHeaderBlock,
    WideHeaderBlock,
    SliderBlock,
    AdvantagesBlock,
    ProductsBlock,
    AboutBlock,
    SelectedBlogBlock,
    SelectedReviewsBlock,
    ContactFormBlock,
    FooterBlock,
    SettingsPanelBlock,
  },
  data() {
    return { pageStore: usePageStore() }
  },
}
</script>
