<template>
  <v-app-bar app height="70">
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(locale, index) in $i18n.locales"
          :key="index"
          @click="changeLanguage(locale.code)"
        >
          <v-list-item-title>{{ locale.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'MyLogo'
    }
  },
  methods: {
    changeLanguage(localeCode) {
      this.$i18n.locale = localeCode
    }
  }
}
</script>

<style lang="scss" scoped></style>
