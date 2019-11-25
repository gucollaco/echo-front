/* eslint-disable nuxt/no-globals-in-created */
<template>
  <ech-background>
    <div class="notifications">
      <span v-if="notifications" class="label primary--text text--lighten-5">{{
        $t("home.notifications")
      }}</span>
      <v-btn text icon color="primary lighten-4" :disabled="notifications == 0">
        <v-badge v-model="notifications" overlap color="red">
          <template v-slot:badge>
            {{ notifications_count }}
          </template>
          <v-icon color="white">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </div>
    <v-container fluid fill-height class="content">
      <v-row dense>
        <div
          v-touch="{
            right: () =>
              (superevent_index =
                superevent_index === 0
                  ? superevent_index
                  : superevent_index - 1),
            left: () =>
              (superevent_index =
                superevent_index === superevents.length - 1
                  ? superevent_index
                  : superevent_index + 1)
          }"
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
        <div class="carousel">
          <div
            class="carousel-item"
            :style="`margin-left: calc((-100vw) * ${superevent_index + 1})`"
          ></div>
          <div
            v-for="(se, index) in superevents"
            :key="index"
            class="carousel-item"
          >
            <div
              v-touch="{
                right: () =>
                  (superevent_index =
                    superevent_index === 0
                      ? superevent_index
                      : superevent_index - 1),
                left: () =>
                  (superevent_index =
                    superevent_index === superevents.length - 1
                      ? superevent_index
                      : superevent_index + 1)
              }"
              class="lock-top"
            >
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
            </div>
            <div class="lock-bottom">
              <div class="events">
                <div v-if="se.events.length == 0" class="empty">
                  <span class="primary--text text--lighten-4">{{
                    $t("home.no_events")
                  }}</span>
                </div>
                <div
                  v-else
                  v-touch="{
                    right: () =>
                      (event_index =
                        event_index === 0 ? event_index : event_index - 1),
                    left: () =>
                      (event_index =
                        event_index === se.events.length - 1
                          ? event_index
                          : event_index + 1)
                  }"
                  class="slider"
                  :style="
                    `margin-left: calc(-74% - (80% + 4%) * ${event_index})`
                  "
                >
                  <div class="event invisible"></div>
                  <div
                    v-for="(event, e_index) in se.events"
                    :key="e_index"
                    class="event"
                    :class="{ active: e_index === event_index }"
                  >
                    <nuxt-link
                      v-ripple="{ class: ripple.color }"
                      tag="div"
                      :to="`/event/${1}`"
                      class="image"
                    >
                      <v-img :src="event.image" aspect-ratio="1">
                        <!-- <div class="place white--text">
                          <span>Auditório</span>
                        </div> -->
                      </v-img>
                    </nuxt-link>
                    <nuxt-link
                      v-ripple="{ class: ripple.color }"
                      tag="div"
                      :to="`/event/${1}`"
                      class="card"
                    >
                      <div class="header">
                        <div>Palestra</div>
                        <div class="time primary--text text--darken-4">
                          18:00 – 19:00
                        </div>
                      </div>
                      <div class="body">
                        <div class="title">Foro de São Paulo</div>
                        <div class="desc">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem [...]
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <div class="event invisible"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-bottom" :style="`opacity: ${scroll_opacity}`">
          <v-icon color="primary lighten-4">mdi-chevron-down</v-icon>
        </div>
      </v-row>
    </v-container>
    <img class="waves" src="~assets/svg/sound-wave.svg" />
    <div class="explore">
      <div class="title">Explore</div>
      <div class="event">
        <div v-ripple="{ class: ripple.color }" class="image">
          <v-img cover src="/img/auditorio.jpg"></v-img>
          <div class="gradient"></div>
        </div>
        <div v-ripple="{ class: ripple.color }" class="card">
          <div class="header">
            <div class="time primary--text text--darken-4">17:30</div>
            <div class="date">Quarta-Feira</div>
          </div>
          <div class="body">
            <div class="title">Inscrições abertas</div>
            <div class="meta">
              <span>Online</span><v-icon>mdi-circle-small</v-icon>
            </div>
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip [...]
            </div>
          </div>
        </div>
      </div>
    </div>
  </ech-background>
</template>

<script>
import { mapState } from "vuex"
import BackgroundVue from "../../components/Background.vue"
export default {
  components: {
    "ech-background": BackgroundVue
  },
  layout: "menu",
  data() {
    return {
      notifications: 1,
      superevent_index: 0,
      event_index: 0,
      superevents: [
        {
          image: {
            path: "/img/vector--1.png",
            css: "transform: scale(0.95) translate(6%, -13%);"
          },
          title: {
            value: ["Dia de", "Orientação Acadêmica"],
            css: "margin-top: -7.5em"
          },
          owner: ["NAE"],
          events: [
            {
              image: "/img/auditorio.jpg"
            },
            {
              image: "/img/quadra.jpg"
            },
            {
              image: "/img/auditorio_2.jpg"
            }
          ]
        },
        {
          image: {
            path: "/img/vector--2.png",
            css: "transform: scale(1.4) translate(-3%, -17%);"
          },
          title: {
            value: ["", "Carnaval"],
            css: "margin-top: -5.5em"
          },
          holiday: true,
          events: []
        }
      ]
    }
  },
  computed: {
    ...mapState("ui", ["scroll", "ripple"]),
    scroll_opacity() {
      return 1 + Math.min(50, this.scroll) / -50
    },
    notifications_count() {
      return this.notifications >= 10 ? "10+" : this.notifications
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
      font-size: 0.7em

    .v-badge
      .v-badge__badge
        font-size: .8em
        min-width: 18px
        height: 18px
        top: -6px
        right: -6px

  .container.content
    flex: 1
    justify-content: flex-start
    flex-direction: column
    padding-bottom: 0
    min-height: calc(100vh - 56px - 60px)

    > .row
      margin: 0 -12px
      max-width: calc(100% + 2* 12px)
      width: calc(100% + 2* 12px)
      overflow-x: hidden
      flex-direction: column
      justify-content: flex-start

      .carousel
        flex-grow: 1
        display: flex
        flex-direction: row
        align-items: stretch
        max-width: 100%
        overflow-x: hidden

        .carousel-item
          min-width: 100vw
          max-width: 100vw
          overflow-x: hidden
          display: flex
          flex-direction: column
          justify-content: space-between
          transition: margin 0.25s ease-in-out

          div.lock-top
            position: relative

            > div
              padding-left: 24px

            div.background
              padding-left: 0
              z-index: 1
              position: relative

              .v-image
                height: auto
                // transform: scale(1.1) translate(6%, -3%)

            div.arrows
              position: absolute
              width: calc(100%)
              top: 8em
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
                font-size: 2.1em
                font-family: 'Montserrat', sans-serif
                font-weight: 800
                line-height: .95
                text-shadow: 0px 0px 6px rgba(0,0,0,0.2)

                &.minor
                  font-weight: 400
                  font-size: 1.7em
                  font-family: 'Lato', sans-serif

            div.subtitle
              margin-top: 1.2em

              span
                font-family: 'Open Sans', sans-serif
                font-size: 0.70em
                font-weight: 700
                line-height: 1.4

              .owner
                display: flex
                flex-direction: column

                .name
                  font-size: 1.1em
                  font-weight: 700

          div.lock-bottom
            position: relative
            flex-grow: 1
            display: flex
            flex-direction: column
            justify-content: flex-end

            div.events
              text-align: center
              flex-grow: 1
              display: flex
              flex-direction: column
              justify-content: center
              max-height: 12em

              .empty
                font-style: italic
                font-size: 0.75em

              .slider
                height: 10em
                width: 100%
                max-width: 100%
                display: flex
                flex-direction: row
                // margin-left: -8.5%
                z-index: 2
                transition: margin 0.25s ease-in-out

                .event
                  opacity: 0.5
                  flex-grow: 0
                  flex-shrink: 0
                  min-width: 80%
                  height: 10em
                  margin: 0 2%
                  cursor: pointer

                  display: flex
                  flex-direction: row
                  align-items: flex-end
                  transition: opacity 0.25s ease-in-out

                  &:first-of-type
                    margin-left: 0

                  &:last-of-type
                    margin-right: 0

                  &.active
                    opacity: 1

                  &.invisible
                    pointer-events: none
                    opacity: 0

                  .image
                    height: 7em
                    width: 5em
                    margin-bottom: 1em
                    border-radius: 10px
                    overflow: hidden
                    box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.2)
                    z-index: 1

                    .v-image
                      height: 100%

                    .v-responsive__content
                      position: relative

                      .place
                        text-transform: uppercase
                        font-size: 0.625em
                        position: absolute
                        bottom: 7.5px
                        width: 100%
                        text-align: center
                        font-family: 'Open Sans', sans-serif
                        font-weight: 600
                        letter-spacing: 0.065em

                  .card
                    flex-grow: 1
                    height: 100%
                    background: white
                    border-radius: 20px
                    margin-left: -2.5em
                    overflow: hidden
                    display: flex
                    flex-direction: column

                    .header
                      padding: 1.5em
                      padding-bottom: .75em
                      width: 100%
                      display: flex
                      flex-direction: row
                      justify-content: space-between
                      font-size: 0.625em
                      line-height: 1
                      align-self: center
                      font-family: 'Late', sans-serif

                      div
                        display: flex
                        flex-direction: row
                        justify-content: space-between

                        &.time
                          font-family: 'Open Sans', sans-serif
                          font-size: 1em
                          font-weight: 700

                    .body
                      flex-grow: 1
                      padding: 1em
                      padding-top: 0
                      padding-left: 3.25em
                      max-width: 100%
                      display: flex
                      flex-direction: column

                      .title
                        font-family: 'Montserrat', sans-serif !important
                        font-size: 1em !important
                        font-weight: 700
                        text-align: left

                      .desc
                        font-size: 0.75em
                        word-break: break-all
                        word-wrap: break-word
                        overflow-wrap: break-word
                        width: 220.797px
                        flex-grow: 1
                        text-align: justify
                        line-height: 1.4

      div.scroll-bottom
        cursor: pointer
        text-align: center
        background: rgb(0,0,0)
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)

        .v-icon
          font-size: 42px


      div.delimiters
        margin-bottom: 1em
        height: 12.5px
        width: 100%
        max-width: 100%
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

          transition: background 0.25s ease-in-out

          &:first-of-type
            margin-left: 0

          &:last-of-type
            margin-right: 0

          &.active
            background: white !important

          &.invisible
            pointer-events: none
            opacity: 0

  .waves
    margin-bottom: -4em

  .explore
    background: white
    padding: 0 1em
    padding-bottom: 5em

    > .title
      font-family: 'Roboto', sans-serif
      font-weight: 600
      margin-left: 1em
      margin-bottom: 2em

    .event
      .image
        height: 6em
        position: relative
        border-radius: 10px
        overflow: hidden
        box-shadow: 7px 7px 20px 0px rgba(0,0,0,0.33)
        margin-bottom: -4em
        margin-left: 2em
        z-index: 1

        .v-image
          height: 6em

        .gradient
          background: rgb(0,0,0)
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          opacity: .3

        &
          &, .v-image
            width: 6em

        &.once
          &, .v-image
            width: 9em

        &.twice
          &, .v-image
            width: 12em

      .card
        background: #eeeeee
        border-radius: 20px
        padding: 2em
        font-family: 'Montserrat', sans-serif

        .header
          width: 100%
          text-align: right
          font-weight: 600
          font-size: 0.7em
          text-transform: uppercase
          line-height: 1
          margin-bottom: 3em

          .time
            font-size: 1.2em

          .date
            opacity: .75

        .title
          font-size: 1em
          font-weight: 700
          line-height: .4

        .meta
          font-family: 'Open Sans', sans-serif
          font-size: 0.75em
          margin-bottom: 1em
          margin-top: 5px

          span
            opacity: 0.5
            font-weight: 600

            &.main
              opacity: 1
              font-weight: 700
              color: map-get($primary, darken-4)

          i
            height: 1em !important
            width: 1em !important

        .text
          font-size: .75em
          font-family: 'Lato', sans-serif
          line-height: 1.4
          opacity: 0.8
</style>
