<template>
  <section>
    <v-container fluid>
      <h3 class="display-1 text-center">推薦行程</h3>
      <v-row justify="space-around">
        <v-col cols="12" md="6">
          <h4 class="title text-center">東北角一日遊</h4>
          <v-timeline>
            <v-timeline-item>timeline item</v-timeline-item>
            <v-timeline-item class="text-right">timeline item</v-timeline-item>
            <v-timeline-item>timeline item</v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col cols="12" md="6">
          <h4 class="title text-center">台中一日遊</h4>
          <v-timeline>
            <v-timeline-item>timeline item</v-timeline-item>
            <v-timeline-item class="text-right">timeline item</v-timeline-item>
            <v-timeline-item>timeline item</v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
