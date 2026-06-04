<template>
  <div>
    <ArrayRedactorBlock :items="socials" @add-item="store.socials.add"
      @update-item="({ index, item }) => store.socials.update(index, item)" @delete-item="store.socials.delete">
      <!-- Слот для отображения одного пользователя в списке -->
      <template #item-display="{ item }">
        <div class="col">
          {{ item.type }}
          <p class="overflow-auto">{{ item.url }}</p>
        </div>
      </template>

      <!-- Слот для формы редактирования -->
      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">Тип соцсети</label>
            <input type="text" class="form-control" list="datalistSocials" v-model="item.type" />

            <datalist id="datalistSocials">
              <option :value="network" v-for="network in suggestedSocialNetworks" :key="network" />
            </datalist>
          </div>
          <div class="mb-3">
            <label class="form-label">Ссылка</label>
            <input type="email" class="form-control" v-model="item.url" />
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
    socials() {
      return this.store.socials.list;
    },
    suggestedSocialNetworks() {
      return ['facebook', 'instagram', 'telegram', 'whatsapp'];
    }
  }
};
</script>