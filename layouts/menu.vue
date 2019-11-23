<template>
  <v-app>
    <div class="content">
      <nuxt />
    </div>
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
@import '~assets/styles.sass'

.v-app
  > div.content
    overflow-y: auto
    height: calc(100vh - 56px)

*
  font-size: 9pt
</style>
