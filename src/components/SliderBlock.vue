<template>
<div class="container my-5">
    <div id="promoCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner rounded-4 shadow">
        <div class="carousel-item active">
          <img src="https://dummyimage.com/1280x720/fff/aaa" class="d-block w-100" alt="яблоки урожай"
            style="height: 400px; object-fit: cover;">
          <div class="carousel-caption d-none d-md-block">
            <h3>Свежайшие яблоки с фермы</h3>
            <p>Прямая доставка из экологически чистых садов. Вкус детства!</p>
            <a href="#products" class="btn btn-apple mt-2">Выбрать сорт</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://dummyimage.com/1280x720/fff/aaa" class="d-block w-100" alt="натуральные яблоки"
            style="height: 400px; object-fit: cover;">
          <div class="carousel-caption d-none d-md-block">
            <h3>Скидка 15% на первый заказ</h3>
            <p>Подпишись на рассылку и получи промокод на корзину.</p>
            <a href="#contact" class="btn btn-apple mt-2">Узнать больше</a>
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
	}}
</script>