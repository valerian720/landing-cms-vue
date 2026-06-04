<template>
  <div class="top-bar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <i class="bi bi-telephone-fill me-1"></i>
          <a :href="'tel:' + phone.replace(/\D/g, '').substring(0, 10)">
            {{ phone }}
          </a>
          &nbsp;&nbsp;
          <i class="bi bi-envelope-fill me-1"></i>
          <a :href="'mailto:' + email">
            {{ email }}
          </a>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <a v-for="(social, index) in socials.list" :key="index" :href="social.url" target="blank" class="me-3">
            <i class="bi" :class="'bi-' + social.type"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    phone: String,
    email: String,
    socials: Object,
  },

}
</script>