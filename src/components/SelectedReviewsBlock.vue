<template>
  <section id="reviews" class="bg-apple-light py-5 my-4">
    <div class="container">
      <h2 class="section-title text-center w-100">Отзывы</h2>
      <div class="row g-4 mt-3" :key="ratingThreshhold">
        <template v-for="(review, key) in reviews.list" :key="key">
          <div class="col-md-4" v-if="review.rating >= ratingThreshhold">
            <div class="testimonial-card">
              <i class="bi bi-star-fill text-warning" v-for="index in review.rating" :key="index"></i>
              <i class="bi bi-star text-warning" v-for="index in 5 - review.rating" :key="index"></i>
              <p class="mt-3 fst-italic">“{{ review.text }}”</p>
              <div class="d-flex align-items-center mt-3">
                <img :src="review.author.avatar" class="rounded-circle me-3" width="48" height="48" alt="avatar">
                <div>
                  <strong>{{ review.author.name }}</strong><br>
                  <small class="text-muted">{{ review.author.description }}</small>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>


<script>
export default {

  props: {
    reviews: Object,
    ratingThreshhold: Number,
  }
}
</script>