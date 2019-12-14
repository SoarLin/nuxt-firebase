<template>
  <section>
    <v-parallax src="plane.jpg" height="500">
      <v-layout column align-center justify-center class="white--text">
        <div class="profile-image">
          <img src="head.jpg" class="hero-head" alt="大頭照" />
        </div>
        <h1 class="white--text profile-name">Name {{ $t('Header') }}</h1>
        <div class="subheading mb-4 text-center">Job Title</div>
        <div class="contact-group">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" class="btn-line" large href="#">
                <img src="line-logo.png" alt="LINE" />
                LINE
              </v-btn>
            </template>
            <span>Add My LINE</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" class="btn-phone" color="blue" large href="#">
                <v-icon class="white--text">mdi-phone</v-icon> Phone
              </v-btn>
            </template>
            <span>Call Me</span>
          </v-tooltip>
        </div>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped></style>
