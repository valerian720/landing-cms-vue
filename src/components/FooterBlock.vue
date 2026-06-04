<template>
  <footer class="bg-dark text-white pt-5 pb-4 mt-5">
    <div class="container">
      <div class="row gy-4">
        <div class="col-md-4">
          <div class="d-flex align-items-center">
            <i class="bi bi-apple fs-1 text-success me-2"></i>
            <h4 class="fw-bold mb-0">{{ name }}</h4>
          </div>
          <p class="mt-3 text-light-50">{{ slogan.long }}</p>
          <div class="mt-3">
            <a v-for="(social, index) in socials.list" :key="index" :href="social.url" target="blank"
              class="text-white me-3">
              <i class="fs-5 bi" :class="'bi-' + social.type"></i>
            </a>
          </div>
        </div>
        <div class="col-md-2 footer-links">
          <h5 class="fw-bold">Магазин</h5>
          <ul class="list-unstyled">
            <li><a href="#products" class="text-white-50">Каталог</a></li>
            <li><a href="#" class="text-white-50">Акции</a></li>
            <li><a href="#" class="text-white-50">Оплата</a></li>
            <li><a href="#" class="text-white-50">Доставка</a></li>
          </ul>
        </div>
        <div class="col-md-3 footer-links">
          <h5 class="fw-bold">Информация</h5>
          <ul class="list-unstyled">
            <li><a href="#about" class="text-white-50">О компании</a></li>
            <li><a href="#blog" class="text-white-50">Блог</a></li>
            <li><a href="#reviews" class="text-white-50">Отзывы</a></li>
            <li><a href="#" class="text-white-50">Контакты</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="fw-bold">Контакты</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-geo-alt-fill me-2"></i>{{ address }}</li>
            <li><i class="bi bi-telephone-fill me-2"></i>{{ phone }}</li>
            <li><i class="bi bi-envelope-fill me-2"></i> {{ email }}</li>
            <li><i class="bi bi-clock-fill me-2"></i>{{ workHours }}</li>
          </ul>
        </div>
      </div>
      <hr class="mt-4 opacity-25">
      <div class="text-center pt-2">
        <small>© {{ new Date().getFullYear() }} {{ slogan.short }} Все права защищены.</small>
      </div>
    </div>
  </footer>
</template>


<script>
export default {

  props: {
    phone: String,
    email: String,
    address: String,
    workHours: String,
    name: String,
    slogan: Object,
    socials: Object,
  }
}
</script>