<template>
  <section class="quote-section">
    <p v-if="isContact" class="container editable">
      Află mai multe despre <nuxt-link to="/services" exact>Serviciile</nuxt-link> oferite cu succes clienților noștri.
    </p>
    <p class="container editable" v-else>
      <nuxt-link to="/contact" exact>Contactează-ne</nuxt-link> acum să afli cum te putem ajuta. Prima consultație este gratuită.
    </p>
  </section>
</template>

<script>
  export default {
    computed: {
      isContact: function () {
        return this.$route.name === 'contact' || this.$route.name === 'success'
      }
    }
  }
</script>
