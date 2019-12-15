<template>
  <section>
    <v-container fluid>
      <h3 class="display-1 text-center">景點介紹</h3>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-chip-group column active-class="primary--text" class="city-group">
            <v-chip
              v-for="(tag, idx) in tags"
              :key="idx"
              @click="chooseTag(tag.value)"
            >
              {{ tag.text }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in 10" :key="i" cols="12" lg="3" md="4" sm="6" xs="12">
          <v-card class="attraction-card">
            <v-img class="white--text align-end" src="plane.jpg">
              <v-card-title class="attraction-card__title">
                Attraction Name
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { text: 'ALL', value: 'All' },
        { text: '台北', value: 'Taipei' },
        { text: '台中', value: 'Taichung' },
        { text: '嘉義', value: 'Chiayi' },
        { text: '台南', value: 'Tainan' },
        { text: '高雄', value: 'Kaohsiung' },
        { text: '宜蘭', value: 'Yilan' },
        { text: '花蓮', value: 'Hualien' },
        { text: '台東', value: 'Taitung' }
      ],
      currentTag: null
    }
  },
  methods: {
    chooseTag(value) {
      this.currentTag = value
      console.log(this.currentTag)
    }
  }
}
</script>

<style lang="scss" scoped></style>
