<template>
  <div>
    <the-header/>
    <nuxt/>
    <the-quote/>
    <the-footer/>
  </div>
</template>

<script>
  import TheFooter from '~/components/TheFooter.vue'
  import TheHeader from '~/components/TheHeader.vue'
  import TheQuote from '~/components/TheQuote.vue'

  export default {
    components: {
      TheFooter,
      TheHeader,
      TheQuote
    },
    head: {
      link: [
        { rel:"stylesheet", href:"//fonts.googleapis.com/css?family=Quattrocento|Vollkorn:400,400i,700,700i" },
        { rel:"stylesheet", href:"/css/main.css" },
        { rel:"apple-touch-icon", href:"/apple-touch-icon.png" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      ]
    }
  }
</script>
