<template>
  <v-app light>
    <my-header></my-header>
    <v-content>
      <hero-banner></hero-banner>

      <about-me></about-me>

      <services></services>

      <section>
        <v-container fluid>
          <h3 class="display-1 text-center">景點介紹</h3>
          <v-row justify="center">
            <v-col cols="12" sm="10" md="8">
              <v-chip-group
                column
                active-class="primary--text"
                class="city-group"
              >
                <v-chip v-for="tag in tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="i in 10" :key="i" cols="12" md="4" sm="6" xs="12">
              <v-card>
                <v-img src="plane.jpg"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <custom-words></custom-words>

      <section>
        <v-parallax src="section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">
              Web development has never been easier
            </div>
            <em>Kick-start your application today</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              href="/pre-made-themes"
              >Get Started</v-btn
            >
          </v-layout>
        </v-parallax>
      </section>

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

      <v-footer color="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-4">
              Made with
              <v-icon class="red--text">mdi-heart</v-icon>by
              <a
                class="white--text"
                href="https://vuetifyjs.com"
                target="_blank"
                >Vuetify</a
              >
              and
              <a class="white--text" href="https://github.com/vwxyzjn"
                >Costa Huang</a
              >
            </div>
          </v-flex>
        </v-layout>
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

export default {
  components: {
    MyHeader,
    HeroBanner,
    AboutMe,
    Services,
    CustomWords
  },
  data() {
    return {
      tags: [
        'ALL',
        '台北',
        '台中',
        '嘉義',
        '台南',
        '高雄',
        '宜蘭',
        '花蓮',
        '台東'
      ]
    }
  }
}
</script>

<style lang="sass" scoped></style>
