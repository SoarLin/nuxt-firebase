<template>
  <section>
    <v-layout column wrap class="my-12" align-center>
      <v-flex xs12 sm4 class="my-4">
        <div class="text-center">
          <h2 class="headline">
            {{ $t('提供服務') }}
          </h2>
          <span class="subheading">優質司機兼導遊，為您提供服務</span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large class="blue--text text--lighten-2">
                    mdi-airplane-takeoff
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center">
                    {{ $t('機場接送') }}
                  </div>
                </v-card-title>
                <v-card-text>
                  桃園機場往返台北市區接送方便快捷。不用提著行李等候計程車，或是轉乘機場捷運、巴士，一出機場即有專人接送至市區，可自行指定台北市上車地點，方便又彈性！
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large class="blue--text text--lighten-2">
                    mdi-file-document-edit-outline
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">
                    {{ $t('行程規劃') }}
                  </div>
                </v-card-title>
                <v-card-text>
                  自助行程怎麼規劃？除了上網搜尋，翻旅遊書外，行程規劃讓司機根據您個人喜好，為你制定專屬的旅遊行程。帶你探索台灣各地美景、各處美食。
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large class="blue--text text--lighten-2">
                    mdi-car-hatchback
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center">
                    {{ $t('包車旅遊') }}
                  </div>
                </v-card-title>
                <v-card-text>
                  選擇包車旅遊，你不用像參加旅遊團那樣東奔西走、顧此失彼、疲憊不堪。也不用拎著行李大包小包的四處搭車、隨時要注意交通時刻，深怕錯過班次。輕鬆包車暢遊台灣。
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
