<template>
  <div>
    <ArrayRedactorWrapper :section-name="sectionName">
      <template #item-display="{ item }">
        <div class="col">
          <img class="w-100" :src="item.img" alt="img">
          {{ item.icon }} <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
          <p>// {{ item.actionText }} //</p>
        </div>
      </template>

      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Изображение</label>
            <ImageFieldBlock v-model="item.img" />
            <input type="text" class="form-control" v-model="item.img" />
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
    </ArrayRedactorWrapper>
  </div>
</template>

<script>
import ImageFieldBlock from '@/components/fields/ImageFieldBlock.vue';
import ArrayRedactorWrapper from '@/components/settings/wrappers/ArrayRedactorWrapper.vue';


export default {
  components: { ArrayRedactorWrapper, ImageFieldBlock },
  setup() {
    const sectionName = 'slider';
    return { sectionName };
  },
};
</script>