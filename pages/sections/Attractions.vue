<template>
  <section>
    <v-container fluid>
      <h3 class="display-1 text-center">景點介紹</h3>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-chip-group column active-class="primary--text" class="city-group">
            <v-chip v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="i in 10" :key="i" cols="12" lg="3" md="4" sm="6" xs="12">
          <v-card>
            <v-img src="plane.jpg"></v-img>
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

<style lang="scss" scoped></style>
