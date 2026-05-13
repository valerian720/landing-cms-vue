<script setup></script>

<template>
  <RouterView />
  <!-- ШАПКА -->
  <TopHeaderBlock />
  <WideHeaderBlock />

  <!-- СЛАЙДЕР (карусель с промо текстом и картинкой) -->
  <SliderBlock />

  <!-- БЛОК С ПРЕИМУЩЕСТВАМИ (эмодзи + текст) -->
  <AdvantagesBlock />

  <!-- СЛАЙДЕР С КАРТОЧКАМИ ТОВАРА -->
  <ProductsBlock />

  <!-- ОПИСАНИЕ МАГАЗИНА (h1 + текст + изображение) -->
  <AboutBlock />

  <!-- ИЗБРАННЫЕ ЗАПИСИ БЛОГА -->
  <SelectedBlogBlock />

  <!-- ПОСЛЕДНИЕ ОТЗЫВЫ -->
  <SelectedReviewsBlock />

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

export default {
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
}
</script>