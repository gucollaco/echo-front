<template>
  <v-app>
    <nuxt />
    <BottomNav />
  </v-app>
</template>

<script>
import BottomNav from "../components/BottomNav"

export default {
  components: { BottomNav }
}
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'
</style>
