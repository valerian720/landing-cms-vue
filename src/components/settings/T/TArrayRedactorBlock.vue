<template>
  <div class="container mt-4">
    <!-- Кнопка добавления -->
    <button class="btn btn-apple mb-3" @click="openCreateModal">Добавить</button>

    <!-- Список элементов -->
    <div v-if="items.length === 0" class="alert alert-info">Нет данных</div>
    <div v-else class="list-group col">
      <div v-for="(item, idx) in items" :key="idx"
        class="list-group-item justify-content-between align-items-center col">
        <!-- Слот для отображения элемента – передаётся родителем -->
        <div class="row">
          <slot name="item-display" :item="item" :index="idx">
            <!-- fallback: просто выведем JSON -->
            {{ JSON.stringify(item) }}
          </slot>
        </div>

        <div class="row">
          <button class="btn btn-sm btn-outline-secondary rounded-5 col me-2"
            @click="openEditModal(item, idx)">Изменить</button>
          <button class="btn btn-sm btn-outline-danger rounded-5 col" @click="deleteItem(idx)">Удалить</button>
        </div>
      </div>
    </div>

    <!-- Модальное окно для создания/редактирования -->
    <div class="modal" tabindex="-1" :class="{ 'd-block': modalVisible }" style="background-color: rgba(0,0,0,0.5)"
      v-if="modalVisible">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditMode ? 'Редактировать' : 'Добавить' }}</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <!-- Слот для формы редактирования. Передаём текущий редактируемый объект и функцию сохранения -->
            <slot name="edit-form" :item="editingItem" :save="saveItem" :cancel="closeModal"></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary rounded-5" @click="closeModal">Отмена</button>
            <button type="button" class="btn btn-apple" @click="saveItem">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // массив объектов (может быть из стора или от родителя)
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modalVisible: false,
      isEditMode: false,
      editingItem: null,      // текущий объект в форме
      editingIndex: -1        // для редактирования: индекс в массиве
    };
  },
  methods: {
    openCreateModal() {
      this.isEditMode = false;
      // Создаём пустой объект – шаблон зависит от типа, лучше передавать через проп "emptyItem"
      // Для универсальности предположим, что родитель передаёт через слот форму, которая сама создаёт копию.
      // Но для удобства можно передать проп "createEmptyItem" – функция.
      // Упростим: родитель сам инициализирует editingItem через watch или передаёт готовую фабрику.
      // Здесь мы просто установим null и будем ожидать, что родительский компонент сам задаст editingItem через слот?
      // Лучше: передать через проп "defaultItem" или функцию.
      if (this.createEmptyItem) {
        this.editingItem = this.createEmptyItem();
      } else {
        this.editingItem = {};
      }
      this.modalVisible = true;
    },
    openEditModal(item, index) {
      this.isEditMode = true;
      // Создаём копию, чтобы не мутировать оригинал до сохранения
      this.editingItem = { ...item };
      this.editingIndex = index;
      this.modalVisible = true;
    },
    saveItem() {
      if (this.isEditMode) {
        // Обновляем элемент в массиве
        this.$emit('update-item', { index: this.editingIndex, item: this.editingItem });
      } else {
        // Добавляем новый
        this.$emit('add-item', this.editingItem);
      }
      this.closeModal();
    },
    deleteItem(index) {
      if (confirm('Удалить?')) {
        this.$emit('delete-item', index);
      }
    },
    closeModal() {
      this.modalVisible = false;
      this.editingItem = null;
      this.isEditMode = false;
      this.editingIndex = -1;
    }
  }
};
</script>