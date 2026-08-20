<template>
  <div>
    <div class="mb-3">
      <label for="selectedType" class="form-label">Тип</label>
      <select v-model="selectedType" id="selectedTypeProducts" class="form-select">
        <option :value="val" v-for="(name, val) in types" :key="val">{{ name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { usePageStore } from '@/stores/page';
import { productsComponents } from '@/components/products';

export default {
  setup() {
    const store = usePageStore();
    return { store };
  },
  computed: {
    selectedType: {
      get() {
        return this.store.products.selectedType;
      },
      set(value) {
        this.store.products.selectedType = value;
      }
    },
    types: {
      get() {
        return Object.fromEntries(Object.entries(productsComponents).map(([key, type]) => [key, type.name]));
      },
    }
  }
}
</script>