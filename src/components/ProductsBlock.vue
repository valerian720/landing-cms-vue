<template>
  <section id="products" class="bg-apple-light py-5 my-5">
    <div class="container">
      <h2 class="section-title text-center w-100">🍏 Хиты продаж</h2>
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner pb-4">
          <!-- карточка 1 -->
          <template v-for="(product, index, productKey) in products.list" :key="productKey">
            <div class="carousel-item" :class="index === 0 ? 'active' : ''" v-if="index < products.displayAmount">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-5">
                  <div class="card product-card">
                    <img :src="product.img" class="card-img-top" :alt="product.name">
                    <div class="card-body text-center">
                      <h5 class="card-title fw-bold">{{ product.name }}</h5>
                      <p class="card-text text-muted">{{ product.shortDescription }}</p>
                      <div class="price-tag">{{ product.price }} {{ product.priceSymbol }}</div>
                      <a :href="product.url" class="btn btn-outline-apple mt-3">В корзину <i
                          class="bi bi-cart-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
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
          <button type="button" data-bs-target="#productCarousel" :data-bs-slide-to="index"
            class="bg-danger round-selector-dots" :class="index === 0 ? 'active' : ''" style="" :title="product.name"
            v-for="(product, index, productKey) in products.list" :key="productKey"></button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {

  props: {
    products: Object,
  }
}
</script>