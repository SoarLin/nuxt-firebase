<template>
  <section>
    <v-container fluid>
      <h3 class="display-1 text-center">推薦行程</h3>
      <v-row justify="space-around">
        <v-col v-for="(trip, idx) in trips" :key="idx" cols="12" md="6">
          <h4 class="title text-center">
            {{ trip.name }}
          </h4>
          <v-timeline>
            <v-timeline-item
              v-for="(value, tIdx) in trip.timeline"
              :key="tIdx"
              :class="isTimeRight(tIdx)"
            >
              {{ value }}
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      trips: 'recommendTrip'
    })
  },
  methods: {
    isTimeRight(idx) {
      return idx % 2 === 0 ? '' : 'text-right'
    }
  }
}
</script>

<style lang="scss" scoped></style>
