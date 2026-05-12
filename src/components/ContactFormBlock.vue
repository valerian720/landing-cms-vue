<template>
<section id="contact" class="container my-5 py-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div class="card-body p-4 p-md-5">
            <h2 class="text-center mb-4 fw-bold text-success">Свяжитесь с нами</h2>
            <p class="text-center text-muted mb-4">Остались вопросы? Напишите, и мы ответим в течение часа!</p>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Ваше имя *</label>
                  <input type="text" class="form-control" placeholder="Иван Петров" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email *</label>
                  <input type="email" class="form-control" placeholder="ivan@example.com" required>
                </div>
                <div class="col-12">
                  <label class="form-label">Телефон (необязательно)</label>
                  <input type="tel" class="form-control" placeholder="+7 999 123 45 67">
                </div>
                <div class="col-12">
                  <label class="form-label">Сообщение *</label>
                  <textarea class="form-control" rows="4"
                    placeholder="Напишите, какой сорт вас интересует или задайте вопрос..."></textarea>
                </div>
                <div class="col-12 text-center mt-4">
                  <button type="submit" class="btn btn-apple px-5 py-2">Отправить <i class="bi bi-send"></i></button>
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

	props: {
	}}
</script>