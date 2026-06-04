<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="adminSettingsPanel"
    aria-labelledby="adminSettingsPanelLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="adminSettingsPanelLabel">Настройки</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <h2 class="" data-bs-toggle="collapse" data-bs-target="#collapseShopSettings" aria-expanded="true"
        aria-controls="collapseShopSettings" type="button">Настройки магазина <i
          class="bi bi-chevron-down ms-2 collapse-icon d-inline-flex small-text "></i></h2>
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

      <h2>Настройки ссылок</h2>
      <SocialsArrayRedactorBlock />
      <h2>Настройки карусели</h2>
      <p>TODO</p>
      <h2>Настройки преимуществ</h2>
      <AdvantagesArrayRedactorBlock />
      <h2>Настройки товаров</h2>
      <p>TODO</p>
      <h2>Настройки блога</h2>
      <p>TODO</p>
      <h2>Настройки отзывов</h2>
      <p>TODO</p>
      <!-- <button type="button" name="save-btn" id="save-btn" class="btn btn-apple mx-1">
        Сохранить
      </button> -->
      <button type="button" name="save-btn" id="save-btn" class="btn btn-apple mx-1" @click="pageStore.loadDefault()">
        Сбросить
      </button>

      <p>raw data in store:</p>
      <p>{{ pageStore }}</p>
    </div>
  </div>
</template>

<script>
import { usePageStore } from '@/stores/page'
import AdvantagesArrayRedactorBlock from '@/components/settings/AdvantagesArrayRedactorBlock.vue'
import SocialsArrayRedactorBlock from '@/components/settings/SocialsArrayRedactorBlock.vue'

export default {
  components: { AdvantagesArrayRedactorBlock, SocialsArrayRedactorBlock },
  props: {},
  data() {
    return { pageStore: usePageStore() }
  },
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
