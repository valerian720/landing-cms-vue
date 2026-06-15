<template>
  <div>
    <ArrayRedactorBlock :items="blogPosts" @add-item="store.blogPosts.add"
      @update-item="({ index, item }) => store.blogPosts.update(index, item)" @delete-item="store.blogPosts.delete">
      <!-- Слот для отображения одного элемента в списке -->
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

      <!-- Слот для формы редактирования -->
      <template #edit-form="{ item }">
        <div class="row">
          <div class="mb-3">
            <label class="form-label">img</label>
            <input type="text" class="form-control" v-model="item.img" />
          </div>
          <div class="mb-3">
            <label class="form-label">title</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="mb-3">
            <label class="form-label">shortDescription</label>
            <input type="text" class="form-control" v-model="item.shortDescription" />
          </div>
          <div class="mb-3">
            <label class="form-label">tags</label>
            <input type="text" class="form-control" id="csvInput" :value="item.tags.join(', ')"
              @change="setItemTags($event.target.value, item)">
          </div>
          <div class="mb-3">
            <label class="form-label">link</label>
            <input type="text" class="form-control" v-model="item.link" />
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
  data() {
    return {
    };
  },
  setup() {
    const store = usePageStore();
    return { store };
  },
  computed: {
    blogPosts() {
      return this.store.blogPosts.posts;
    },
  },
  methods: {
    setItemTags(newValue, item) {
      console.log(newValue, item);

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