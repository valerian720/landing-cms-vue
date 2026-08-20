<template>
  <section id="reviews" class="p-0 m-0">
    <component :is="currentComponent.block" :reviews="reviews" :ratingThreshhold="ratingThreshhold" />
  </section>
</template>


<script>
import { reviewsComponents } from '@/components/reviews';
export default {
  props: {
    reviews: Object,
    ratingThreshhold: Number,
  },
  computed: {
    currentComponent() {
      return reviewsComponents[this.reviews.selectedType] || reviewsComponents.default
    }
  },
}
</script>