<template>
  <div class="bottom-nav">
    <v-bottom-navigation
      v-model="bottomNav"
      grow
      fixed
      dark
      app
      background-color="primary"
      color="primary lighten-5"
    >
      <v-btn to="/food" value="food" nuxt>
        <div class="label">
          <span>{{ $t("pages.food") }}</span>
        </div>
        <v-icon>mdi-food</v-icon>
      </v-btn>

      <v-btn to="/calendar" value="calendar" nuxt>
        <div class="label">
          <span> {{ $t("pages.calendar") }} </span>
        </div>
        <v-icon>mdi-calendar-blank</v-icon>
      </v-btn>

      <!-- <v-btn to="/home" value="home" nuxt>
        <div class="label">
          <span> {{ $t("pages.home") }} </span>
        </div>
        <v-icon>mdi-home</v-icon>
      </v-btn> -->

      <v-btn to="/classes" value="classes" nuxt>
        <div class="label">
          <span> {{ $t("pages.classes") }} </span>
        </div>
        <v-icon>mdi-book-variant</v-icon>
      </v-btn>

      <v-btn to="/profile" value="profile" nuxt>
        <div class="label">
          <span> {{ $t("pages.profile") }} </span>
        </div>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<style></style>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      activeBtn: 2,
      bottomNav: "home"
    }
  }
}
</script>

<style lang="sass" scoped>
@keyframes show
  0%
    margin-left: 0vw
    opacity: 0
  20%
    opacity: 1
  80%
    opacity: 1
  99.99%
    margin-left: 0px
    opacity: 0
  100%
    margin-left: -110px

.bottom-nav
  .v-bottom-navigation::v-deep
    a.v-btn
      margin: 0 7px
      min-width: auto

      .label
        display: none

      &.v-btn--active
        border-top: 4px solid

        .label
          display: block
          position: fixed
          bottom: 56px
          text-transform: uppercase
          font-weight: 800
          padding-bottom: 4px
          font-size: 1em
          // background: map-get($grey, lighten-4)
          color: #009688

          span
            margin-left: -110vw

            animation: show 2s linear 1
</style>
