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
import FooterBlock from '@/components/FooterBlock.vue'
import ContactFormBlock from '@/components/ContactFormBlock.vue'
import SelectedReviewsBlock from '@/components/SelectedReviewsBlock.vue'
import SelectedBlogBlock from '@/components/SelectedBlogBlock.vue'
import AboutBlock from '@/components/AboutBlock.vue'
import ProductsBlock from '@/components/ProductsBlock.vue'
import AdvantagesBlock from '@/components/AdvantagesBlock.vue'
import SliderBlock from '@/components/SliderBlock.vue'
import WideHeaderBlock from '@/components/WideHeaderBlock.vue'
import TopHeaderBlock from '@/components/TopHeaderBlock.vue'

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
<style>
body {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  scroll-behavior: smooth;
}

/* двухуровневая шапка */
.top-bar {
  background: #2c5e2e;
  color: #f9f3e2;
  font-size: 0.9rem;
  padding: 8px 0;
}

.top-bar a {
  color: #f9f3e2;
  text-decoration: none;
  transition: opacity 0.2s;
}

.top-bar a:hover {
  opacity: 0.8;
  color: #ffdd99;
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.7rem;
  color: #2c5e2e;
}

.navbar-brand i {
  color: #e03a3a;
}

.nav-link {
  font-weight: 500;
  color: #2c5e2e !important;
}

.nav-link:hover {
  color: #e03a3a !important;
}

.btn-apple {
  background-color: #e03a3a;
  color: white;
  border-radius: 50px;
  padding: 8px 24px;
  font-weight: 600;
  transition: 0.2s;
}

.btn-apple:hover {
  background-color: #b52e2e;
  color: white;
}

.btn-outline-apple {
  border: 2px solid #e03a3a;
  color: #e03a3a;
  border-radius: 50px;
  padding: 6px 20px;
  font-weight: 600;
}

.btn-outline-apple:hover {
  background-color: #e03a3a;
  color: white;
}

.carousel-item {
  background: #fef5e7;
  border-radius: 24px;
  overflow: hidden;
}

.carousel-caption {
  background: rgba(44, 94, 46, 0.75);
  border-radius: 24px;
  bottom: 20px;
  left: 10%;
  right: 10%;
  padding: 1rem;
}

.advantage-card {
  background: #ffffff;
  border-radius: 32px;
  padding: 20px 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  height: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.advantage-emoji {
  font-size: 3.2rem;
}

.product-card {
  border: none;
  border-radius: 28px;
  transition: 0.2s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
}

.product-card img {
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  height: 220px;
  object-fit: cover;
}

.price-tag {
  font-size: 1.6rem;
  font-weight: 700;
  color: #e03a3a;
}

.testimonial-card {
  background: #fff9ef;
  border-radius: 24px;
  padding: 20px;
  height: 100%;
  border: 1px solid #ffe1b3;
}

.blog-card {
  border-radius: 24px;
  overflow: hidden;
  transition: 0.2s;
  height: 100%;
}

.blog-card img {
  height: 180px;
  object-fit: cover;
}

.footer-links a {
  text-decoration: none;
  color: #cfdfc9;
  transition: 0.2s;
}

.footer-links a:hover {
  color: #ffd966;
  text-decoration: underline;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #2c5e2e;
  border-radius: 50%;
  padding: 20px;
}

.bg-apple-light {
  background-color: #fef6e6;
}

.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #2c5e2e;
}

.section-title:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 60px;
  height: 3px;
  background: #e03a3a;
  border-radius: 3px;
}

hr {
  opacity: 0.3;
}
</style>
