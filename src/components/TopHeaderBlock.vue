<template>
  <div class="top-bar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <i class="bi bi-telephone-fill me-1"></i> {{ phone }} &nbsp;&nbsp;
          <i class="bi bi-envelope-fill me-1"></i> {{ email }}
        </div>
        <div class="col-md-6 text-center text-md-end">
          <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
          <a href="#" class="me-3"><i class="bi bi-instagram"></i></a>
          <a href="#" class="me-3"><i class="bi bi-telegram"></i></a>
          <a href="#"><i class="bi bi-whatsapp"></i></a>
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
  }
}
</script>