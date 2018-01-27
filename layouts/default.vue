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
      meta: [
        { charset: 'utf-8' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel:"stylesheet", href:"//fonts.googleapis.com/css?family=Quattrocento|Vollkorn:400,400i,700,700i" },
        { rel:"stylesheet", href:"/css/main.css" },
        { rel:"apple-touch-icon", href:"/apple-touch-icon.png" },
        { rel:"icon", type:"image/png",  href:"/touch-icon.png", sizes:"192x192" },
        { rel:"icon", type: "image/png", href:"/images/favicon.png" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      ]
    }
  }
</script>

<style>
</style>
