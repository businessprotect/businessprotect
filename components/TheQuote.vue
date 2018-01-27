<template>
  <section class="quote-section">
    <p v-if="isContact" class="container editable">
      Află mai multe despre <a href="/services/">Serviciile</a> oferite cu succes clienților noștri.
    </p>
    <p class="container editable" v-else>
      <a href="/contact/">Contactează-ne</a> acum să afli cum te putem ajuta. Prima consultație este gratuită.
    </p>
  </section>
</template>

<script>

  export default {
    data: function () {
      return {
        isContact: this.$route.name === 'contact' || this.$route.name === 'success'
      }
    }
  }
</script>
