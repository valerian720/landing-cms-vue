<template>
  <div>
    <ArrayRedactorWrapper key="" :section-name="sectionName">
      <template #item-display="{ item }">
        <div class="col">
          <p class="overflow-auto">
            <img :src="item.img" alt="img" class="w-100">
          </p>
          <p class="overflow-auto">{{ item.title }}</p>
          <p class="overflow-auto">{{ item.shortDescription }}</p>
          <p class="overflow-auto">теги: {{ item.tags.join(', ') }}</p>
          <p class="overflow-auto">{{ item.link }}</p>
        </div>
      </template>

      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Изображение</label>
            <ImageFieldBlock v-model="item.img" />
            <input type="text" class="form-control pt-1" v-model="item.img" />
          </div>
          <div class="mb-3">
            <label class="form-label">заголовок</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Короткое описание</label>
            <input type="text" class="form-control" v-model="item.shortDescription" />
          </div>
          <div class="mb-3">
            <label class="form-label">Теги через запятую</label>
            <input type="text" class="form-control" id="csvInput" :value="item.tags.join(', ')"
              @change="setItemTags($event.target.value, item)">
          </div>
          <div class="mb-3">
            <label class="form-label">Ссылка</label>
            <input type="text" class="form-control" v-model="item.link" />
          </div>
        </div>
      </template>
    </ArrayRedactorWrapper>
  </div>
</template>

<script>
import ArrayRedactorWrapper from '@/components/settings/wrappers/ArrayRedactorWrapper.vue';
import ImageFieldBlock from '@/components/fields/ImageFieldBlock.vue';

export default {
  components: { ArrayRedactorWrapper, ImageFieldBlock },
  data() {
    return {
    };
  },
  setup() {
    const sectionName = 'blog';
    return { sectionName };
  },
  methods: {
    setItemTags(newValue, item) {
      const parsedArray = newValue
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0);
      item.tags = parsedArray;
    },
    test(...a) {
      console.log(a);
    }

  },
};
</script>