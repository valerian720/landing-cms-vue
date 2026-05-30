<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
    <div class="container">
      <a class="navbar-brand" :href="$route.fullPath">
        <i class="bi bi-apple"></i> {{ name }}
      </a>
      <ShowSettingsBtnBlock />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain"
        aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
          <li class="nav-item"><a class="nav-link" href="#advantages">Преимущества</a></li>
          <li class="nav-item"><a class="nav-link" href="#products">Товары</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">О нас</a></li>
          <li class="nav-item"><a class="nav-link" href="#blog">Блог</a></li>
          <li class="nav-item"><a class="nav-link" href="#reviews">Отзывы</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Контакты</a></li>
        </ul>
        <a href="#" class="btn btn-apple ms-lg-3">Корзина <i class="bi bi-bag-check"></i></a>
      </div>
    </div>
  </nav>
</template>


<script>
import ShowSettingsBtnBlock from "@/components/ShowSettingsBtnBlock.vue";

export default {
  components: {
    ShowSettingsBtnBlock
  },
  props: {
    name: String
  }
}
</script>