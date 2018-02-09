<template>
  <div>
    <the-header/>
    <nuxt/>
    <the-quote/>
    <the-footer/>
    <div class="fb-customerchat"
         page_id="npc.business.protect"
         ref="<OPTIONAL_WEBHOOK_PARAM>"
         theme_color="<HEX_COLOR_CODE>"
         logged_in_greeting="<GREETING_MESSAGE_FOR_LOGGED_IN_USERS>"
         logged_out_greeting="<GREETING_MESSAGE_FOR_LOGGED_OUT_USERS>">
    </div>
    <div
      class="fb-like"
      data-share="true"
      data-width="450"
      data-show-faces="true">
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
