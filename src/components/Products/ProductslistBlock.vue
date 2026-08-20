<template>
  <section id="products" class="py-5 my-5">
    <div class="container">
      <h2 class="section-title text-center w-100">🍏 Хиты продаж</h2>

      <div class="row justify-content-center g-4">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(product, index) in displayProducts" :key="index">
          <div class="card product-card h-100">
            <img :src="product.img" class="card-img-top" :alt="product.name" loading="lazy">
            <div class="card-body text-center d-flex flex-column">
              <h5 class="card-title fw-bold">{{ product.name }}</h5>
              <p class="card-text text-muted flex-grow-1">{{ product.shortDescription }}</p>
              <div class="price-tag mt-2">{{ product.price }} {{ product.priceSymbol }}</div>
              <a :href="product.url" class="btn btn-outline-main mt-3 w-100">
                В корзину <i class="bi bi-cart-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-4" v-if="showLoadMore">
        <button class="btn btn-outline-main" @click="loadMore">
          Показать еще
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true,
      default: () => ({
        list: [],
        displayAmount: 8
      })
    }
  },

  data() {
    return {
      currentDisplay: this.products.displayAmount || 8
    }
  },

  computed: {
    displayProducts() {
      if (!this.products.list || !Array.isArray(this.products.list)) {
        return []
      }
      return this.products.list.slice(0, this.currentDisplay)
    },

    showLoadMore() {
      return this.products.list &&
        this.products.list.length > this.currentDisplay
    }
  },

  methods: {
    loadMore() {
      this.currentDisplay += 4
    }
  },

  watch: {
    'products.displayAmount'(newVal) {
      this.currentDisplay = newVal
    }
  }
}
</script>

<style scoped>
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.product-card .card-img-top {
  height: 200px;
  object-fit: cover;
}

.price-tag {
  font-size: 1.25rem;
  font-weight: 700;
}

.btn-outline-main {
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  background: transparent;
  transition: all 0.3s ease;
}

.btn-outline-main:hover {
  background: var(--secondary-color);
  ;
  color: white;
  border-color: var(--secondary-color);
  ;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.8rem;
  }

  .product-card .card-img-top {
    height: 150px;
  }
}
</style>