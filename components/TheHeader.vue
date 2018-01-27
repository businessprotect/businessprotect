<template>
  <header style="background-image: url('/building.jpg');">
    <div class="container">
      <h1><a href="/">NPC<br/>Business<br/>Protect</a></h1>
      <nav>
        <ul>
          <li><a v-bind:class="{ active: isHome }" href="/">Acasă</a></li>
          <li><a v-bind:class="{ active: isServices }" href="/services/">Servicii</a></li>
          <li><a v-bind:class="{ active: isContact }" href="/contact/">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import TheFooter from '~/components/TheFooter.vue'
  import TheHeader from '~/components/TheHeader.vue'
  import TheQuote from '~/components/TheQuote.vue'

  export default {
    data: function () {
      return {
        isHome: this.$route.name == 'index',
        isServices: this.$route.name === 'services',
        isContact: this.$route.name === 'contact'
      }
    }
  }
</script>
