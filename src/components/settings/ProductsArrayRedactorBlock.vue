<template>
  <div>
    <ArrayRedactorBlock :items="products" @add-item="store.products.add"
      @update-item="({ index, item }) => store.products.update(index, item)" @delete-item="store.products.delete">
      <!-- Слот для отображения одного элемента в списке -->
      <template #item-display="{ item }">
        <div class="col">
          <p class="overflow-auto">
            <img :src="item.img" alt="img" class="w-100">
          </p>
          <p class="overflow-auto"><b>{{ item.name }}</b></p>
          <p class="overflow-auto">{{ item.shortDescription }}</p>
          <p class="overflow-auto">{{ item.price }} {{ item.priceSymbol }}</p>
        </div>
      </template>

      <!-- Слот для формы редактирования -->
      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Изображение</label>
            <input type="text" class="form-control" v-model="item.img" />
          </div>
          <div class="mb-3">
            <label class="form-label">Ссылка</label>
            <input type="text" class="form-control" v-model="item.url" />
          </div>
          <div class="mb-3">
            <label class="form-label">Наименование</label>
            <input type="text" class="form-control" v-model="item.name" />
          </div>
          <div class="mb-3">
            <label class="form-label">Короткое описание</label>
            <input type="text" class="form-control" v-model="item.shortDescription" />
          </div>
          <div class="mb-3">
            <label class="form-label">Цена</label>
            <input type="text" class="form-control" v-model="item.price" />
          </div>
          <div class="mb-3">
            <label class="form-label">Символ цены</label>
            <input type="text" class="form-control" v-model="item.priceSymbol" />
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
    products() {
      return this.store.products.list;
    },
  }
};
</script>