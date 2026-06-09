<template>
  <div>
    <ArrayRedactorBlock :items="navigationLinks" @add-item="store.navigationLinks.add"
      @update-item="({ index, item }) => store.navigationLinks.update(index, item)"
      @delete-item="store.navigationLinks.delete">
      <!-- Слот для отображения одного элемента в списке -->
      <template #item-display="{ item }">
        <div class="col">
          {{ item.title }}
          <p class="overflow-auto">{{ item.url }}</p>
        </div>
      </template>

      <!-- Слот для формы редактирования -->
      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Заголовок ссылки</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Ссылка</label>
            <input type="text" class="form-control" v-model="item.url" />
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
    navigationLinks() {
      return this.store.navigationLinks.list;
    },
  }
};
</script>