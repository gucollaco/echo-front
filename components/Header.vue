<template>
  <ech-background class="ech-header">
    <v-toolbar :prominent="superevent" :class="{ superevent: superevent }">
      <div class="image">
        <v-img
          src="/img/vector--1.png"
          contain
          aspect-ratio="1"
          :style="`transform: scale(0.95) translate(6%, 8%);`"
        ></v-img>
      </div>
      <v-btn icon class="white--text" @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title class="amber--text text--lighten-4">
        <template v-if="superevent">
          <div class="minor">Dia de</div>
          <div>Orientação Acadêmica</div>
        </template>
        <template v-else>
          <div style="color: white">Explorar</div>
        </template>
      </v-toolbar-title>
    </v-toolbar>
  </ech-background>
</template>

<script>
import BackgroundVue from "./Background.vue"
export default {
  components: {
    "ech-background": BackgroundVue
  },
  data() {
    return {
      superevent: true
    }
  }
}
</script>

<style lang="sass" scoped>

.ech-background::v-deep
  min-height: auto

  .v-toolbar
    background: transparent
    box-shadow: none
    height: auto !important
    padding-bottom: .75em

    .v-toolbar__content
      padding: 4px 8px
      padding-top: 1em

      .v-toolbar__title
        padding: 1em 0 !important
        padding-top: .25em !important
        align-self: flex-start
        white-space: normal
        opacity: 1

        div
          font-family: 'Montserrat', sans-serif
          font-weight: 600

    &.superevent
      padding-bottom: 0em

      .v-toolbar__content
        padding: 4px 8px
        padding-top: 1em
        height: auto !important

        .v-toolbar__title
          padding: 1em 0 !important
          padding-top: .5em !important
          font-size: 1.25rem !important
          align-self: center
          white-space: normal
          opacity: 1

          div
            max-width: 100%
            text-transform: uppercase
            font-size: 2.1em
            font-family: 'Montserrat', sans-serif
            font-weight: 800
            line-height: .95
            text-shadow: 0px 0px 6px rgba(0,0,0,0.2)

            &.minor
              font-weight: 400
              font-size: 1.7em
              font-family: 'Lato', sans-serif

        .image
          width: 100%
          position: absolute
          top: 0
          left: 0
          opacity: .3

          .v-image
</style>
