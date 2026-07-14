<template>
  <div>
    <ArrayRedactorWrapper :section-name="sectionName">
      <!-- Слот для отображения одного элемента в списке -->
      <template #item-display="{ item }">
        <div class="col">
          {{ item.icon }} <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
        </div>
      </template>

      <!-- Слот для формы редактирования -->
      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Emoji</label>
            <input type="text" class="form-control" v-model="item.icon" />
          </div>
          <div class="mb-3">
            <label class="form-label">Заголовок</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Описание</label>
            <input type="text" class="form-control" v-model="item.description" />
          </div>
        </div>
      </template>
    </ArrayRedactorWrapper>
  </div>
</template>

<script>
import ArrayRedactorWrapper from '@/components/settings/wrappers/ArrayRedactorWrapper.vue';
export default {
  components: { ArrayRedactorWrapper },
  setup() {
    const sectionName = 'advantages';
    return { sectionName };
  }
};
</script>