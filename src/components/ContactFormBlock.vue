<template>
  <section id="contact" class="container my-5 py-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="card-body p-4 p-md-5">
            <h2 class="text-center mb-4 fw-bold text-success">Свяжитесь с нами</h2>
            <p class="text-center text-muted mb-4">Остались вопросы? Напишите, и мы ответим в течение часа!</p>

            <!-- Уведомление об успехе/ошибке с анимацией -->
            <transition name="fade">
              <div v-if="notification.show"
                :class="['alert', notification.type === 'success' ? 'alert-success' : 'alert-danger', 'alert-dismissible', 'mb-4', 'fade', 'show']"
                role="alert">
                {{ notification.message }}
                <button type="button" class="btn-close" @click="closeNotification" aria-label="Close"></button>
              </div>
            </transition>

            <form @submit.prevent="handleSubmit">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Ваше имя *</label>
                  <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }"
                    placeholder="Иван Петров" v-model="form.name" required>
                  <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email *</label>
                  <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }"
                    placeholder="ivan@example.com" v-model="form.email" required>
                  <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                </div>
                <div class="col-12">
                  <label class="form-label">Телефон (необязательно)</label>
                  <input type="tel" class="form-control" placeholder="+7 999 123 45 67" v-model="form.phone">
                </div>
                <div class="col-12">
                  <label class="form-label">Сообщение *</label>
                  <textarea class="form-control" :class="{ 'is-invalid': errors.message }" rows="4"
                    placeholder="Напишите, какой сорт вас интересует или задайте вопрос..." v-model="form.message"
                    required></textarea>
                  <div class="invalid-feedback" v-if="errors.message">{{ errors.message }}</div>
                </div>
                <div class="col-12 text-center mt-4">
                  <button type="submit" class="btn btn-apple px-5 py-2" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status"
                      aria-hidden="true"></span>
                    <i v-else class="bi bi-send me-2"></i>
                    {{ loading ? 'Отправка...' : 'Отправить' }}
                  </button>
                  <p class="small text-muted mt-3">Нажимая на кнопку, вы соглашаетесь с политикой обработки данных.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactFormBlock',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      loading: false,
      notification: {
        show: false,
        message: '',
        type: 'success'
      },
      notificationTimeout: null
    }
  },
  methods: {
    // Валидация формы
    validateForm() {
      let isValid = true;

      // Очищаем предыдущие ошибки
      this.errors = {
        name: '',
        email: '',
        message: ''
      };

      // Валидация имени
      if (!this.form.name.trim()) {
        this.errors.name = 'Пожалуйста, укажите ваше имя';
        isValid = false;
      } else if (this.form.name.trim().length < 2) {
        this.errors.name = 'Имя должно содержать минимум 2 символа';
        isValid = false;
      }

      // Валидация email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim()) {
        this.errors.email = 'Пожалуйста, укажите ваш email';
        isValid = false;
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Введите корректный email адрес';
        isValid = false;
      }

      // Валидация сообщения
      if (!this.form.message.trim()) {
        this.errors.message = 'Пожалуйста, напишите сообщение';
        isValid = false;
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Сообщение должно содержать минимум 10 символов';
        isValid = false;
      }

      return isValid;
    },

    // Показать уведомление
    showNotification(message, type = 'success') {
      // Очищаем предыдущий таймер
      if (this.notificationTimeout) {
        clearTimeout(this.notificationTimeout);
      }

      this.notification = {
        show: true,
        message: message,
        type: type
      };

      // Автоматически скрыть через 5 секунд
      this.notificationTimeout = setTimeout(() => {
        this.closeNotification();
      }, 5000);
    },

    // Закрыть уведомление
    closeNotification() {
      this.notification.show = false;
      if (this.notificationTimeout) {
        clearTimeout(this.notificationTimeout);
        this.notificationTimeout = null;
      }
    },

    // Сброс формы
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
      this.errors = {
        name: '',
        email: '',
        message: ''
      };
    },

    // Отправка данных на сервер (mock)
    async submitToServer(formData) {
      // Эмулируем задержку сети (500-1500ms)
      const delay = Math.random() * 1000 + 500;
      await new Promise(resolve => setTimeout(resolve, delay));

      // Mock-запрос на /form
      const response = await fetch('/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Имитируем успешный ответ (в реальном проекте проверяем response.ok)
      // Для демонстрации всегда возвращаем успех, но с вероятностью 10% ошибки
      // чтобы показать обработку ошибок
      if (Math.random() < 0.9) { // 90% успеха
        return { success: true, message: 'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.' };
      } else {
        throw new Error('Сервер временно недоступен. Пожалуйста, попробуйте позже.');
      }
    },

    // Обработчик отправки формы
    async handleSubmit() {
      // Валидация
      if (!this.validateForm()) {
        this.showNotification('Пожалуйста, исправьте ошибки в форме', 'danger');
        return;
      }

      // Блокируем форму и показываем анимацию загрузки
      this.loading = true;

      try {
        // Подготавливаем данные для отправки
        const dataToSend = {
          name: this.form.name.trim(),
          email: this.form.email.trim(),
          phone: this.form.phone.trim() || null,
          message: this.form.message.trim(),
          timestamp: new Date().toISOString()
        };

        // Отправляем запрос
        const result = await this.submitToServer(dataToSend);

        // Успех - показываем уведомление и сбрасываем форму
        this.showNotification(result.message, 'success');
        this.resetForm();

      } catch (error) {
        // Ошибка - показываем сообщение об ошибке
        console.error('Ошибка отправки:', error);
        this.showNotification(
          error.message || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.',
          'danger'
        );
      } finally {
        // Разблокируем форму независимо от результата
        this.loading = false;
      }
    }
  },
  beforeUnmount() {
    // Очищаем таймер при уничтожении компонента
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.is-invalid {
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  75% {
    transform: translateX(5px);
  }
}
</style>