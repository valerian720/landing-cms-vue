<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="adminSettingsPanel"
    aria-labelledby="adminSettingsPanelLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="adminSettingsPanelLabel">Настройки</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <h2 class="" data-bs-toggle="collapse" data-bs-target="#collapseShopSettings" aria-expanded="true"
        aria-controls="collapseShopSettings" type="button">Настройки магазина
        <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
      </h2>
      <div class="row p-2 border-bottom show" id="collapseShopSettings">
        <h4>Название</h4>
        <input type="text" class="form-control" id="shopName" :value="pageStore.name"
          @change="(e) => (pageStore.name = e.target.value)" />
        <h4>Телефон</h4>
        <input type="text" class="form-control" id="shopPhone" :value="pageStore.phone"
          @change="(e) => (pageStore.phone = e.target.value)" />
        <h4>Почта</h4>
        <input type="text" class="form-control" id="shopEmail" :value="pageStore.email"
          @change="(e) => (pageStore.email = e.target.value)" />
        <h4>Адрес</h4>
        <input type="text" class="form-control" id="shopAddress" :value="pageStore.address"
          @change="(e) => (pageStore.address = e.target.value)" />
        <h4>Часы работы</h4>
        <input type="text" class="form-control" id="shopWorkHours" :value="pageStore.workHours"
          @change="(e) => (pageStore.workHours = e.target.value)" />
      </div>

      <div>
        <p>Цвет сайта: {{ mainColor }} / {{ secondaryColor }} / {{ ternaryColor }}</p>
        <p>{{ textColor }}</p>
        <input type="color" class="form-control form-control-color" v-model="mainColor" />
        <input type="color" class="form-control form-control-color" v-model="secondaryColor" />
        <input type="color" class="form-control form-control-color" v-model="ternaryColor" />
        <input type="color" class="form-control form-control-color" v-model="ternaryColor" />
        <hr>
        <input type="color" class="form-control form-control-color" v-model="textColor" />
      </div>

      <h2 data-bs-target="#collapseShopLinks" data-bs-toggle="collapse" aria-expanded="true"
        aria-controls="collapseShopLinks" type="button">Настройки ссылок
        <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
      </h2>
      <div class="row p-2 border-bottom show" id="collapseShopLinks">
        <SocialsArrayRedactorBlock />
        <NavigationArrayRedactorBlock />
      </div>
      <h2 data-bs-target="#collapseShopSlider" data-bs-toggle="collapse" aria-expanded="true"
        aria-controls="collapseShopSlider" type="button">Настройки карусели
        <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
      </h2>
      <div class="row p-2 border-bottom show" id="collapseShopSlider">
        <PromoSliderArrayRedactorBlock />
      </div>
      <h2 data-bs-target="#collapseShopAdvantages" data-bs-toggle="collapse" aria-expanded="true"
        aria-controls="collapseShopAdvantages" type="button">Настройки преимуществ
        <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
      </h2>
      <div class="row p-2 border-bottom show" id="collapseShopAdvantages">
        <AdvantagesArrayRedactorBlock />
      </div>
      <h2 data-bs-target="#collapseShopProducts" data-bs-toggle="collapse" aria-expanded="true"
        aria-controls="collapseShopProducts" type="button">Настройки товаров
        <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
      </h2>
      <div class="row p-2 border-bottom show" id="collapseShopProducts">
        <ProductsArrayRedactorBlock />
      </div>
      <h2 data-bs-target="#collapseBlogPosts" data-bs-toggle="collapse" aria-expanded="true"
        aria-controls="collapseBlogPosts" type="button">Настройки блога
        <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
      </h2>
      <div class="row p-2 border-bottom show" id="collapseBlogPosts">
        <BlogpostsArrayRedactorBlock />
      </div>
      <h2 data-bs-target="#collapseShopReviews" data-bs-toggle="collapse" aria-expanded="true"
        aria-controls="collapseShopReviews" type="button">Настройки отзывов
        <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
      </h2>
      <div class="row p-2 border-bottom show" id="collapseShopReviews">
        <ReviewsArrayRedactorBlock />

        <div class="m-3">
          <h3>Минимальный рейтинг отзыва</h3>
          <input type="range" class="form-range" min="1" max="5" id="ratingThreshhold"
            :value="pageStore.ratingThreshhold" @change="
              (e) => {
                pageStore.setRatingThreshhold(e.target.value)
              }
            " />
          <div class="d-flex justify-content-between">
            <span v-for="index in 5" :key="index">{{ index }}</span>
          </div>
        </div>
      </div>

      <!-- <button type="button" name="save-btn" id="save-btn" class="btn btn-apple mx-1">
        Сохранить
      </button> -->
      <button type="button" name="save-btn" id="save-btn" class="btn btn-apple mx-1" @click="pageStore.loadDefault()">
        Сбросить
      </button>
      <div v-if="appMode == 'development'">
        <h3 data-bs-target="#collapseRawData" data-bs-toggle="collapse" aria-controls="collapseRawData" type="button"
          class="collapsed" aria-expanded="false">
          Raw data:
          <i class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i>
        </h3>
        <div class="row p-2 border-bottom collapse" id="collapseRawData">
          <p class="select-all">{{ appMode == 'development' ? pageStore : [] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePageStore } from '@/stores/page'
import AdvantagesArrayRedactorBlock from '@/components/settings/AdvantagesArrayRedactorBlock.vue'
import SocialsArrayRedactorBlock from '@/components/settings/SocialsArrayRedactorBlock.vue'
import NavigationArrayRedactorBlock from '@/components/settings/NavigationArrayRedactorBlock.vue'
import ReviewsArrayRedactorBlock from '@/components/settings/ReviewsArrayRedactorBlock.vue';
import PromoSliderArrayRedactorBlock from '@/components/settings/PromoSliderArrayRedactorBlock.vue';
import BlogpostsArrayRedactorBlock from '@/components/settings/BlogpostsArrayRedactorBlock.vue';
import ProductsArrayRedactorBlock from '@/components/settings/ProductsArrayRedactorBlock.vue';

export default {
  components: {
    AdvantagesArrayRedactorBlock,
    SocialsArrayRedactorBlock,
    NavigationArrayRedactorBlock,
    ReviewsArrayRedactorBlock,
    PromoSliderArrayRedactorBlock,
    BlogpostsArrayRedactorBlock,
    ProductsArrayRedactorBlock,
  },
  props: {},
  data() {
    return {
      pageStore: usePageStore(),
      mainColor: '#2c5e2e',
      secondaryColor: '#e03a3a',
      ternaryColor: '#fef6e6',
      textColor: '#f9f3e2',
      appMode: import.meta.env.MODE,
    }
  },
  watch: {
    mainColor(newColor) {
      document.documentElement.style.setProperty('--main-color', newColor);
    },
    secondaryColor(newColor) {
      document.documentElement.style.setProperty('--secondary-color', newColor);
    },
    ternaryColor(newColor) {
      document.documentElement.style.setProperty('--ternary-color', newColor);
    },
    textColor(newColor) {
      document.documentElement.style.setProperty('--text-color', newColor);
    },
  },
  mounted() {
    document.documentElement.style.setProperty('--main-color', this.mainColor);
    document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
    document.documentElement.style.setProperty('--ternary-color', this.ternaryColor);
    document.documentElement.style.setProperty('--text-color', this.textColor);
  }
}
</script>
<style scoped>
.collapse-icon {
  transition: transform 0.3s ease;
}

.collapsed .collapse-icon {
  transform: rotate(-90deg);
}

.small-text {
  font-size: 0.5em;
}
</style>
