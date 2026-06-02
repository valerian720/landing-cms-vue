<template>
  <div>
    <ArrayRedactorBlock :items="advantages" @add-item="store.advantages.addAdvantage"
      @update-item="({ index, item }) => store.advantages.updateAdvantage(index, item)"
      @delete-item="store.advantages.deleteAdvantage">
      <!-- Слот для отображения одного пользователя в списке -->
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
            <input type="email" class="form-control" v-model="item.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Описание</label>
            <input type="email" class="form-control" v-model="item.description" />
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
    advantages() {
      return this.store.advantages.list;
    }
  }
};
</script>