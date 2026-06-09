<template>
  <div>
    <ArrayRedactorBlock :items="promoSlider" @add-item="store.promoSlider.add"
      @update-item="({ index, item }) => store.promoSlider.update(index, item)" @delete-item="store.promoSlider.delete">
      <!-- Слот для отображения одного элемента в списке -->
      <template #item-display="{ item }">
        <div class="col">
          <img class="w-100" :src="item.image" alt="img">
          {{ item.icon }} <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
          <p>// {{ item.actionText }} //</p>
        </div>
      </template>

      <!-- Слот для формы редактирования -->
      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Изображение</label>
            <input type="text" class="form-control" v-model="item.image" />
          </div>
          <div class="mb-3">
            <label class="form-label">Заголовок</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Описание</label>
            <textarea rows="5" class="form-control" v-model="item.description"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Название кнопки</label>
            <input type="text" class="form-control" v-model="item.actionText" />
          </div>
          <div class="mb-3">
            <label class="form-label">Ссылка</label>
            <input type="text" class="form-control" v-model="item.actionLink" />
          </div>
        </div>
      </template>
    </ArrayRedactorBlock>
  </div>
</template>

<script>
import ArrayRedactorBlock from '@/components/settings/T/TArrayRedactorBlock.vue';
import { usePageStore } from '@/stores/page';

export default {
  components: { ArrayRedactorBlock },
  setup() {
    const store = usePageStore();
    return { store };
  },
  computed: {
    promoSlider() {
      return this.store.promoSlider.list;
    }
  }
};
</script>