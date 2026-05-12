<template>
<section id="products" class="bg-apple-light py-5 my-5">
    <div class="container">
      <h2 class="section-title text-center w-100">🍏 Хиты продаж</h2>
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner pb-4">
          <!-- карточка 1 -->
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Гренни Смит">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Гренни Смит</h5>
                    <p class="card-text text-muted">Хрустящие, кисло-сладкие яблоки. Идеальны для пирогов.</p>
                    <div class="price-tag">199 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- карточка 2 -->
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Фуджи">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Фуджи</h5>
                    <p class="card-text text-muted">Невероятно сладкие, сочные, с медовым ароматом.</p>
                    <div class="price-tag">249 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- карточка 3 -->
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Голден">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Голден</h5>
                    <p class="card-text text-muted">Нежные, маслянистые, с лёгкой кислинкой.</p>
                    <div class="price-tag">219 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- карточка 4 -->
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-5">
                <div class="card product-card">
                  <img src="https://dummyimage.com/1280x720/fff/aaa" class="card-img-top" alt="Семеренко">
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Семеренко</h5>
                    <p class="card-text text-muted">Знаменитый советский сорт, ароматный и хрустящий.</p>
                    <div class="price-tag">179 ₽/кг</div>
                    <a href="#" class="btn btn-outline-apple mt-3">В корзину <i class="bi bi-cart-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Управление каруселью -->
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev"
          style="width: 5%;">
          <span class="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span class="visually-hidden">Пред.</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next"
          style="width: 5%;">
          <span class="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span class="visually-hidden">След.</span>
        </button>
        <div class="carousel-indicators position-relative mt-4">
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" class="active bg-danger"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" class="bg-secondary"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="2" class="bg-secondary"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="3" class="bg-secondary"
            style="width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></button>
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