<template>
  <section>
    <v-parallax src="hero.jpeg" height="600">
      <v-layout column align-center justify-center class="white--text">
        <div class="profile-image">
          <a href="#">
            <img src="head.jpg" class="hero-head" alt="大頭照" />
          </a>
        </div>
        <h1 class="white--text profile-name">Name {{ $t('Header') }}</h1>
        <div class="subheading mb-4 text-center">Job Title</div>
        <div class="contact-group">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" class="btn-line" large href="#">
                LINE
              </v-btn>
            </template>
            <span>Add My LINE</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" class="btn-phone" color="blue" large href="#">
                Phone
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

<style lang="sass" scoped>
@keyframes pulsate
  0%
    transform: scale(0.6, 0.6)
    opacity: 0.0
  50%
    opacity: 1.0
  100%
    transform: scale(1, 1)
    opacity: 0.0

.profile-image
  img
    position: relative
    border-radius: 50%
    height: 180px
    width: 180px
    padding: 0
    margin: 0
    border: 15px solid transparent
    z-index: 9999
    transition: all .3s ease-out

  a
    position: relative
    touch-action: manipulation
    text-decoration: none

    &:before
      content: ''
      border: 15px solid rgba(#1976d2, 0.6)
      border-radius: 50%
      height: 180px
      width: 180px
      position: absolute
      left: 0
      animation: pulsate 1.6s ease-out
      animation-iteration-count: infinite
      opacity: 0.0
      z-index: 99

.profile-name
  font-weight: 800
  font-size: 2.5em
  margin: 30px auto

.subheading
  margin-top: -25px

.contact-group
  margin-top: 30px
  display: flex
  width: 280px
  justify-content: space-around

  .btn-line, .btn-phone
    font-size: 1em
    font-weight: 900
    color: white

  .btn-line
    background-color: #09B900 !important
</style>
