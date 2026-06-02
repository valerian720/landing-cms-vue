<template>
  <section id="advantages" class="container my-5 pt-4">
    <h2 class="section-title text-center w-100">Почему выбирают нас</h2>
    <div class="row gy-4 mt-2 justify-content-center text-center">
      <div class="col-6 col-md-4 col-lg-2" v-for="(advantage, key) in advantages.list" :key="key">

        <div class="advantage-card">
          <div class="advantage-emoji">{{ advantage.icon }}</div>
          <h5 class="mt-2">{{ advantage.title }}</h5>
          <p class="text-muted">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {

  props: {
    advantages: Object
  }
}
</script>