<template>
  <div>
    <the-header/><nuxt/>
    <the-quote/>
    <the-footer/>
    <div class="fb-customerchat"
         page_id="206698393220486"
         theme_color="#0084FF">
    </div>

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
        { name:"google-site-verification", content:"A3q8TrFpCQ6wM4oYpIvFrFSffCnhAF1OUjYqsoHdpFw" }
      ],
      link: [
        { rel:"stylesheet", href:"//fonts.googleapis.com/css?family=Quattrocento|Vollkorn:400,400i,700,700i" },
        { rel:"stylesheet", href:"/css/main.min.css" },
        { rel:"apple-touch-icon", href:"/apple-touch-icon.png" }
      ]
    }
  }
</script>
