<template>
  <section id="about" class="container my-5">
    <component :is="currentAboutComponent.block" :about="about" />
  </section>
</template>


<script>
import { aboutComponents } from '@/components/about';
export default {
  props: {
    about: Object,
  },
  computed: {
    currentAboutComponent() {
      return aboutComponents[this.about.selectedType] || aboutComponents.default
    }
  },
}
</script>