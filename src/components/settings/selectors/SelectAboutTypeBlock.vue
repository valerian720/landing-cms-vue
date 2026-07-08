<template>
  <div>
    <div class="mb-3">
      <label for="" class="form-label">Тип</label>
      <select v-model="selectedType" class="form-control">
        <option :value="val" v-for="(name, val) in types" :key="val">{{ name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { usePageStore } from '@/stores/page';
import { aboutComponents } from '@/components/about';

export default {
  setup() {
    const store = usePageStore();
    return { store };
  },
  computed: {
    selectedType: {
      get() {
        return this.store.about.selectedType;
      },
      set(value) {
        this.store.about.selectedType = value;
      }
    },
    types: {
      get() {
        return Object.fromEntries(Object.entries(aboutComponents).map(([key, type]) => [key, type.name]));
      },
    }
  }
}
</script>