<template>
  <v-app light>
    <my-header></my-header>
    <v-content>
      <hero-banner></hero-banner>

      <about-me></about-me>

      <services></services>

      <attractions></attractions>

      <itinerary></itinerary>

      <section>
        <v-parallax src="section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">
              客製化旅遊行程
            </div>
            <em>多天行程包車旅遊，跨縣市包車旅行</em>
            <v-btn class="mt-12" color="blue lighten-2" dark large href="#">
              與我聯繫
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <custom-words></custom-words>

      <!--
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
                  tincidunt ornare. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Nullam
                  in aliquet odio. Aliquam eu est vitae tellus bibendum
                  tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
                  tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2"
                        >mdi-phone</v-icon
                      >
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>777-867-5309</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2"
                        >mdi-map-marker</v-icon
                      >
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Chicago, US</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2"
                        >mdi-email</v-icon
                      >
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      -->

      <v-footer color="blue darken-2">
        <v-row align="center" justify="end" class="white--text pr-4">
          Copyright &copy; {{ year }},&nbsp;&nbsp;
          <a class="white--text" href="https://soarlin.github.io">
            <v-icon class="white--text">mdi-github-circle</v-icon>
            Soar Lin
          </a>
        </v-row>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import MyHeader from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import AboutMe from '@/components/About'
import Services from '@/components/Services'
import CustomWords from '@/components/CustomWords'
import Attractions from '@/components/Attractions'
import Itinerary from '@/components/Itinerary'

export default {
  components: {
    MyHeader,
    HeroBanner,
    AboutMe,
    Services,
    Attractions,
    Itinerary,
    CustomWords
  },
  data() {
    return {}
  },
  computed: {
    year() {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped></style>
