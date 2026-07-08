<template>
  <div class="row align-items-center gy-5">
    <div class="col-12 order-lg-2">
      <img :src="about.imgUrl" :alt="about.title" :title="about.title" class="img-fluid rounded-4 shadow">
    </div>
    <div class="col-12 order-lg-1">
      <h1 class="display-5 fw-bold text-main">{{ about.title }}</h1>
      <p class="lead mt-3" v-for="(row, key) in about.text" :key="key">
        {{ row }}
      </p>
      <a :href="about.actionLink" class="btn btn-apple mt-2">{{ about.actionText }}</a>
    </div>
  </div>
</template>


<script>
export default {

  props: {
    about: Object,
  }
}
</script>