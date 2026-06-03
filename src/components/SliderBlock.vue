<template>
  <div class="container my-5">
    <div id="promoCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" v-for="(slide, index) in slides.list" :key="index" data-bs-target="#promoCarousel"
          :data-bs-slide-to="index" :class="index === 0 ? 'active' : ''" :aria-current="index === 0"
          :aria-label="slide.title"></button>
      </div>
      <div class="carousel-inner rounded-4 shadow">
        <div class="carousel-item" :class="index === 0 ? 'active' : ''" v-for="(slide, index) in slides.list"
          :key="index">
          <img :src="slide.image" class="d-block w-100" :alt="slide.title" style="height: 400px; object-fit: cover;">
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
            <a :href="slide.actionLink" class="btn btn-apple mt-2">{{ slide.actionText }}</a>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
  </div>
</template>


<script>
export default {

  props: {
    slides: Object
  }
}
</script>