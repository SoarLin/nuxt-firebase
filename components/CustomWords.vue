<template>
  <section class="custom-section">
    <v-carousel
      cycle
      height="400"
      show-arrors-on-hover
      hide-delimiter-background
    >
      <v-carousel-item>
        <v-row class="fill-height px-12" align="center" justify="center">
          <div :style="getHead('head.jpg')" class="custom-head custom1"></div>
          <div class="custom-word">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            illo vel nam beatae, sunt incidunt esse quod! Esse nobis architecto
            est doloribus, dolorem hic cum culpa! Voluptas voluptatum hic
            dolore?
          </div>
        </v-row>
      </v-carousel-item>
      <v-carousel-item>
        <v-row
          class="fill-height px-12"
          align="center"
          justify="center"
          light="false"
        >
          <div class="custom-word">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            illo vel nam beatae, sunt incidunt esse quod! Esse nobis architecto
            est doloribus, dolorem hic cum culpa! Voluptas voluptatum hic
            dolore?
          </div>
          <div :style="getHead('head.jpg')" class="custom-head custom1" />
        </v-row>
      </v-carousel-item>
      <v-carousel-item>
        <v-row class="fill-height px-12" align="center" justify="center">
          <div :style="getHead('head.jpg')" class="custom-head custom1" />
          <div class="custom-word">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            illo vel nam beatae, sunt incidunt esse quod! Esse nobis architecto
            est doloribus, dolorem hic cum culpa! Voluptas voluptatum hic
            dolore?
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    baseRouter() {
      return process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt-firebase/' : '/'
    }
  },
  methods: {
    getHead(headImg) {
      return `background-image: url(${this.baseRouter}${headImg})`
    }
  }
}
</script>

<style lang="scss" scoped></style>
