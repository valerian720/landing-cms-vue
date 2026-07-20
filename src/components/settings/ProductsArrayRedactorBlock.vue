<template>
  <div>
    <ArrayRedactorWrapper :section-name="sectionName">
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
            <ImageFieldBlock v-model="item.img" />
            <input type="text" class="form-control pt-1" v-model="item.img" />
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
    </ArrayRedactorWrapper>
  </div>
</template>

<script>
import ImageFieldBlock from '@/components/fields/ImageFieldBlock.vue';
import ArrayRedactorWrapper from '@/components/settings/wrappers/ArrayRedactorWrapper.vue';

export default {
  components: { ArrayRedactorWrapper, ImageFieldBlock },
  setup() {
    const sectionName = 'products';
    return { sectionName };
  },
};
</script>