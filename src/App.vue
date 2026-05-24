<script setup></script>

<template>
  <RouterView />
  <!-- ШАПКА -->
  <TopHeaderBlock :phone="pageStore.phone" :email="pageStore.email" :socials="pageStore.socials" />
  <WideHeaderBlock :name="pageStore.name" />

  <!-- СЛАЙДЕР (карусель с промо текстом и картинкой) -->
  <SliderBlock :slides="pageStore.promoSlider" />

  <!-- БЛОК С ПРЕИМУЩЕСТВАМИ (эмодзи + текст) -->
  <AdvantagesBlock :advantages="pageStore.advantages" />

  <!-- СЛАЙДЕР С КАРТОЧКАМИ ТОВАРА -->
  <ProductsBlock />

  <!-- ОПИСАНИЕ МАГАЗИНА (h1 + текст + изображение) -->
  <AboutBlock :about="pageStore.about" />

  <!-- ИЗБРАННЫЕ ЗАПИСИ БЛОГА -->
  <SelectedBlogBlock />

  <!-- ПОСЛЕДНИЕ ОТЗЫВЫ -->
  <div class="m-3 col-4 d-none">
    <h3>Rating threshhold</h3>
    <input type="range" class="form-range" min="1" max="5" id="ratingThreshhold" :value="pageStore.ratingThreshhold"
      @change="e => { pageStore.setRatingThreshhold(e.target.value) }">
    <div class="d-flex justify-content-between">
      <span v-for="index in 5" :key="index">{{ index }}</span>
    </div>
  </div>
  <SelectedReviewsBlock :reviews="pageStore.reviews" :ratingThreshhold="pageStore.ratingThreshhold" />

  <!-- ФОРМА ОБРАТНОЙ СВЯЗИ -->
  <ContactFormBlock />

  <!-- ФУТЕР С ССЫЛКАМИ -->
  <FooterBlock />

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
  },
  data() {
    return { pageStore: usePageStore() }
  },
}
</script>