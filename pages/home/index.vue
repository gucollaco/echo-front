<template>
  <ech-background>
    <div class="notifications">
      <span v-if="notifications" class="label primary--text text--lighten-5">{{
        $t("home.notifications")
      }}</span>
      <v-badge v-model="notifications" overlap color="red">
        <template v-slot:badge>
          {{ notifications_count }}
        </template>
        <v-icon :color="notifications ? 'white' : 'primary lighten-4'"
          >mdi-bell</v-icon
        >
      </v-badge>
    </div>
    <v-container fluid fill-height class="content">
      <v-row dense>
        <div
          class="delimiters"
          :style="
            `margin-left: calc(-8.5% - (33.3333333% + 8.5%) * ${superevent_index})`
          "
        >
          <div class="delimiter invisible"></div>
          <div
            v-for="(se, index) in superevents"
            :key="index"
            class="delimiter amber lighten-4"
            :class="{ active: index === superevent_index }"
            @click="
              superevent_index +=
                index < superevent_index
                  ? -1
                  : index === superevent_index
                  ? 0
                  : 1
            "
          ></div>
          <div class="delimiter invisible"></div>
        </div>
        <v-carousel
          v-model="superevent_index"
          :show-arrows="false"
          :hide-delimiters="true"
          :cycle="false"
          :continuous="false"
        >
          <v-carousel-item v-for="(se, index) in superevents" :key="index">
            <div class="background">
              <v-img
                :src="se.image.path"
                :style="se.image.css"
                contain
                aspect-ratio="1"
              ></v-img>
            </div>
            <div class="arrows">
              <div class="left" :class="{ invisible: index === 0 }">
                <v-btn
                  text
                  x-large
                  icon
                  color="amber lighten-4"
                  @click="superevent_index--"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </div>
              <div
                class="right"
                :class="{ invisible: index === superevents.length - 1 }"
              >
                <v-btn
                  text
                  x-large
                  icon
                  color="amber lighten-4"
                  @click="superevent_index++"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </div>
            <div
              class="title amber--text text--lighten-4"
              :style="se.title.css"
            >
              <div class="minor">{{ se.title.value[0] }}</div>
              <div>{{ se.title.value[1] }}</div>
            </div>
            <div class="subtitle">
              <div v-if="se.owner" class="owner">
                <span class="primary--text text--lighten-4">{{
                  $t("home.curated_by")
                }}</span>
                <span class="name">{{ (se.owner || []).join(", ") }}</span>
              </div>
              <div v-if="se.holiday" class="holiday">
                <span class="primary--text text--lighten-4">{{
                  $t("home.holiday")
                }}</span>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </ech-background>
</template>

<script>
import BackgroundVue from "../../components/Background.vue"
export default {
  components: {
    "ech-background": BackgroundVue
  },
  layout: "menu",
  data() {
    return {
      notifications: 100,
      superevent_index: 0,
      superevents: [
        {
          image: {
            path: "/img/vector--1.png",
            css: "transform: translate(6%, -10%);"
          },
          title: {
            value: ["Dia de", "Orientação Acadêmica"],
            css: "margin-top: -5em"
          },
          owner: ["NAE"],
          events: []
        },
        {
          image: {
            path: "/img/vector--2.png",
            css: "transform: scale(1.55) translate(-3%, -6%);"
          },
          title: {
            value: ["", "Carnaval"],
            css: "margin-top: 2.5em"
          },
          holiday: true,
          events: []
        }
      ]
    }
  },
  computed: {
    notifications_count() {
      return this.notifications >= 10 ? "9+" : this.notifications
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/styles.sass'

.ech-background::v-deep
  .notifications
    padding-top: 24px
    padding-right: 32px
    text-align: right

    .label
      font-family: 'Open Sans', sans-serif
      font-weight: 700
      text-transform: uppercase
      font-size: 1em

    .v-badge
      .v-badge__badge
        font-size: .8em
        min-width: 18px
        height: 18px
        top: -6px
        right: -6px

  .container.content
    > .row
      margin: 0 -12px
      max-width: calc(100% + 2* 12px)
      overflow-x: hidden

      .v-carousel
        .v-responsive__content
          position: relative

          > div
            padding-left: 24px

          div.background
            padding-left: 0
            z-index: 1
            position: relative

            .v-image
              // transform: scale(1.1) translate(6%, -3%)

          div.arrows
            position: absolute
            width: calc(100%)
            top: 12em
            z-index: 2
            padding: 0 1em
            display: flex
            flex-direction: row
            justify-content: space-between

            > div
              .v-icon
                font-size: 72px
                opacity: .75

              &.invisible
                opacity: 0
                pointer-events: none

          div.title
            position: relative
            z-index: 2
            // margin-top: -5em

            div
              text-transform: uppercase
              font-size: 2.2em
              font-family: 'Montserrat', sans-serif
              font-weight: 800
              line-height: .9
              text-shadow: 0px 0px 6px rgba(0,0,0,0.2)

              &.minor
                font-weight: 400
                font-size: 1.8em
                font-family: 'Lato', sans-serif

          div.subtitle
            margin-top: 1.2em

            span
              font-family: 'Open Sans', sans-serif
              font-size: 1.1em
              font-weight: 700
              line-height: 1.3

            .owner
              display: flex
              flex-direction: column

              .name
                font-size: 1.3em
                font-weight: 700

      div.delimiters
        margin: 10px 0
        height: 12.5px
        width: 100%
        max-width: 100%
        flex-grow: 1
        display: flex
        flex-direction: row
        margin-left: -8.5%
        z-index: 2
        transition: margin 0.25s ease-in-out

        .delimiter
          flex-grow: 0
          flex-shrink: 0
          min-width: 33.333333%
          height: 12.5px
          border-radius: 20px
          margin: 0 4.25%
          cursor: pointer

          &:first-of-type
            margin-left: 0

          &:last-of-type
            margin-right: 0

          &.active
            background: white !important

          &.invisible
            pointer-events: none
            opacity: 0
</style>
