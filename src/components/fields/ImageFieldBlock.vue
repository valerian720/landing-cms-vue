<template>
  <div class="image-uploader">
    <div class="card">
      <div class="card-body text-center">
        <!-- -->
        <div v-if="imagePreview" class="preview-wrapper mb-3">
          <img :src="imagePreview" alt="Preview" class="img-fluid rounded" style="max-height: 250px" />
        </div>
        <div v-else class="preview-placeholder mb-3 text-muted">
          <i class="bi bi-image" style="font-size: 3rem;"></i>
          <p class="mt-1">Изображение не выбрано</p>
        </div>

        <!-- -->
        <div class="d-flex justify-content-center gap-2 flex-wrap">
          <button class="btn btn-apple" @click="selectFile">
            <i class="bi bi-upload me-1"></i> Выбрать
          </button>
          <button v-if="imagePreview" class="btn btn-warning  rounded-5" @click="removeImage">
            <i class="bi bi-trash me-1"></i> Удалить
          </button>
        </div>

        <!-- -->
        <input type="file" ref="fileInput" class="d-none" accept="image/*" @change="onFileChange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      imagePreview: this.modelValue || null
    };
  },
  watch: {
    modelValue(newVal) {
      this.imagePreview = newVal || null;
    }
  },
  methods: {
    selectFile() {
      this.$refs.fileInput.click();
    },

    onFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        alert('Пожалуйста, выберите изображение.');
        event.target.value = ''; // сброс
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        this.imagePreview = base64;
        this.$emit('update:modelValue', base64);
      };
      reader.onerror = () => {
        alert('Не удалось прочитать файл.');
      };
      reader.readAsDataURL(file);

      event.target.value = '';
    },

    // Очистка изображения
    removeImage() {
      this.imagePreview = null;
      this.$emit('update:modelValue', '');
    }
  }
};
</script>

<style scoped>
.image-uploader .preview-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  background-color: #f8f9fa;
  border-radius: 0.375rem;
  border: 1px dashed #dee2e6;
}
</style>