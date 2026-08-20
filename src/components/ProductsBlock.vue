<template>
  <section id="products" class="p-0 m-0">
    <component :is="currentComponent.block" :products="products" />
  </section>
</template>


<script>
import { productsComponents } from '@/components/products';
export default {
  props: {
    products: Object,
  },
  computed: {
    currentComponent() {
      return productsComponents[this.products.selectedType] || productsComponents.default
    }
  },
}
</script>