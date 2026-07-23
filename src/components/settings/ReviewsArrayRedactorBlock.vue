<template>
  <div>
    <ArrayRedactorWrapper :section-name="sectionName">
      <!-- Слот для отображения одного элемента в списке -->
      <template #item-display="{ item }">
        <div class="col">
          <i class="bi bi-star-fill text-warning" v-for="indexFull in parseInt(item.rating)" :key="indexFull"></i>
          <i class="bi bi-star text-warning" v-for="indexEmpty in 5 - item.rating" :key="indexEmpty"></i>
          <p class="overflow-auto">{{ item.text }}</p>
          <p class="overflow-auto">{{ item.author.name }} ( {{ item.author.description }} )</p>
        </div>
      </template>

      <!-- Слот для формы редактирования -->
      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Оценка</label>
            <div class="m-3">
              <input type="range" class="form-range" min="1" max="5" id="ratingThreshhold" v-model="item.rating" />
              <div class="d-flex justify-content-between">
                <span v-for="index in 5" :key="index">{{ index }}</span>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Текст</label>
            <textarea class="form-control" rows="5" v-model="item.text"></textarea>
          </div>


          <div class="mb-3">
            <label class="form-label">Имя покупателя</label>
            <input type="text" class="form-control" v-model="item.author.name" />
          </div>
          <div class="mb-3">
            <label class="form-label">Описание</label>
            <input type="text" class="form-control" v-model="item.author.description" />
          </div>
          <div class="mb-3">
            <label class="form-label">Аватар</label>
            <ImageFieldBlock v-model="item.author.avatar" />
            <input type="text" class="form-control" v-model="item.author.avatar" />
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
    const sectionName = 'reviews';
    return { sectionName };
  },
};
</script>