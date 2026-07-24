<template>
  <div>
    <ArrayRedactorWrapper :section-name="sectionName">
      <template #item-display="{ item }">
        <div class="col">
          {{ item.type }}
          <p class="overflow-auto">{{ item.url }}</p>
        </div>
      </template>

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
            <input type="text" class="form-control" v-model="item.url" />
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
    const sectionName = 'socials';
    return { sectionName };
  },
  computed: {
    suggestedSocialNetworks() {
      return ['facebook', 'instagram', 'telegram', 'whatsapp'];
    }
  }
};
</script>