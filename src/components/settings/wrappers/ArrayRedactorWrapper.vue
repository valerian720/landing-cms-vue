<template>
  <div>
    <ArrayRedactorBlock :items="items" :store="store" :section-name="sectionName" :create-empty-item="createEmptyItem"
      @add-item="addItem" @update-item="updateItem" @delete-item="deleteItem">
      <template #item-display="{ item }">
        <slot name="item-display" :item="item" />
      </template>
      <template #edit-form="{ item }">
        <slot name="edit-form" :item="item" />
      </template>
    </ArrayRedactorBlock>
  </div>
</template>

<script>
import { computed } from "vue";
import ArrayRedactorBlock from '@/components/settings/T/TArrayRedactorBlock.vue';

import { usePageStore } from '@/stores/page';

export default {
  components: { ArrayRedactorBlock },
  props: {
    sectionName: {
      type: String,
      required: true
    },
    createEmptyItem: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const store = usePageStore();
    // automaticly get section to process from store by name
    const items = computed(() => {
      const section = store[props.sectionName];
      return Array.isArray(section) ? section : section?.list || [];
    });

    return { store, items };
  },
  methods: {
    addItem: function (newItem) {
      this.store.addItem(this.sectionName, newItem);
    },
    updateItem: function (e) {
      const index = e.index;
      const item = e.item;
      this.store.updateItem(this.sectionName, index, item);
    },
    deleteItem: function (index) {
      this.store.deleteItem(this.sectionName, index);
    },
  },
};
</script>