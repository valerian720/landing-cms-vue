<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="adminSettingsPanel"
    aria-labelledby="adminSettingsPanelLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="adminSettingsPanelLabel">Настройки</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <h2>Настройки магазина</h2>
      <p>TODO</p>
      <h2>Настройки ссылок</h2>
      <p>TODO</p>
      <h2>Настройки карусели</h2>
      <p>TODO</p>
      <h2>Настройки преимуществ</h2>
      <p>TODO</p>
      <h2>Настройки товаров</h2>
      <p>TODO</p>
      <h2>Настройки блога</h2>
      <p>TODO</p>
      <h2>Настройки отзывов</h2>
      <p>TODO</p>
      <button type="button" name="save-btn" id="save-btn" class="btn btn-apple">
        Сохранить
      </button>

      <p>raw data in store:</p>
      <p>{{ pageStore }}</p>
    </div>
  </div>
</template>


<script>
import { usePageStore } from '@/stores/page'


export default {

  props: {
  },
  data() {
    return { pageStore: usePageStore() }
  },
}
</script>