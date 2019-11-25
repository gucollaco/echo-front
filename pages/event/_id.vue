<template>
  <div class="event-wrapper" :class="{ superevent }">
    <div class="event">
      <div class="header">
        <div class="left">
          <v-btn depressed tile class="tag">Palestra</v-btn>
        </div>
        <div class="right">
          <v-btn
            icon
            class="reminder"
            :color="reminders ? 'primary' : 'grey'"
            @click="reminders = !reminders"
          >
            <v-icon>mdi-bell-{{ reminders ? "ring" : "off" }}</v-icon>
          </v-btn>
          <v-btn
            v-if="!following"
            depressed
            tile
            class="tag icon special"
            @click="follow()"
          >
            <span>Seguir</span>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
          <v-btn
            v-else
            depressed
            tile
            class="tag icon special primary"
            @click="unfollow()"
          >
            <span>Seguindo</span>
            <v-icon>mdi-bookmark-off</v-icon>
          </v-btn>
          <!-- <v-btn depressed tile class="tag icon special secondary">
            <span>Deixe sua opinião</span>
            <v-icon>mdi-star</v-icon>
          </v-btn> -->
        </div>
      </div>
      <div class="body">
        <div class="header">
          <div class="title">Foro de São Paulo</div>
          <div class="meta">
            <div class="time">19:00 – 21:00</div>
            <div class="date">20/11/2019, QUA</div>
          </div>
        </div>
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div class="divider"></div>
      <div class="place">
        <div class="header">
          <div>
            <div class="title">Auditório</div>
            <div class="subtitle">ICT, Quarto Andar</div>
          </div>
          <v-btn small text dense tile color="primary" class="see-more"
            >Ver mais</v-btn
          >
        </div>
        <div class="image">
          <v-img src="/img/auditorio.jpg" cover aspect-ratio="1"></v-img>
          <div class="gradient"></div>
        </div>
      </div>
      <div v-ripple="{ class: 'red--text text--darken-1' }" class="report">
        <v-icon color="red darken-1">mdi-alert</v-icon>
        <span class="red--text text--darken-1"
          >Notou alguma informação errada? <br />Nos informe!</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "../../components/Header.vue"
import BackgroundVue from "../../components/Background.vue"
export default {
  layout: "menu_toolbar",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      superevent: true,

      reminders: false,
      following: false
    }
  },
  methods: {
    follow() {
      this.$toast("Seguindo evento...")
      this.following = true
    },
    unfollow() {
      this.$toast("Deixar de seguir evento...")
      this.following = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/styles.sass'

.event-wrapper
  &::before
    content: ""
    background: #259B8F
    height: 4em
    width: 100%
    display: block
    position: absolute

  &.superevent
    &::before
      background: #26a69a

  .event
    height: auto
    border-top-right-radius: 4em
    background: $ice
    padding: 2em
    padding-top: 2.5em
    z-index: 10
    position: relative

    .tag
      display: inline-block
      font-family: 'Montserrat', sans-serif
      font-size: 0.75em
      padding: 1em 1.25em
      background: map-get($grey, lighten-3)
      text-transform: none
      height: auto

      &.icon
        padding: 0.75em 1em

        .v-icon
          margin-left: .25em

      &.special
        color: map-get($grey, lighten-3)
        background: rgba(black, .5)
        box-shadow: 0px 0px 5px rgba(black, 0.333) !important
        border: none
        outline: none

        &.primary
          backgrund: map-get($primary, darken-1)
          box-shadow: 0px 0px 5px rgba(map-get($primary, darken-1), 0.333) !important

        &.secondary
          color: #333
          backgrund: map-get($secondary, darken-1)
          box-shadow: 0px 0px 5px rgba(map-get($secondary, darken-1), 0.333) !important

    > .header
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      margin-bottom: 1.5em

      .reminder
        margin-right: .5em

    > .body
      > .header
        display: flex
        flex-direction: row
        justify-content: space-between
        width: 100%
        font-family: 'Montserrat', sans-serif
        margin-bottom: 1em

        .title
          flex: 1 0 50%
          max-width: 50%
          font-size: 2em !important
          font-family: 'Montserrat', sans-serif !important
          font-weight: 700
          color: black

        .meta
          text-align: right
          display: flex
          flex-direction: column
          justify-content: center
          align-items: flex-end
          font-weight: 600

          .time
            font-size: 1em
            opacity: .7

          .date
            font-size: 0.75em
            text-transform: uppercase
            opacity: .5
      .text
        font-family: 'Lato', sans-serif
        font-size: 0.875em
        opacity: .9
        line-height: 1.4
        text-align: justify

    > .divider
      height: 1px
      width: 70%
      background: rgba(black, .2)
      margin: 2em auto

    > .place
      > .header
        font-family: 'Montserrat', sans-serif
        font-weight: 600
        display: flex
        flex-direction: row
        justify-content: space-between
        margin-bottom: 1em

        .title
          font-size: 1.125em !important
          font-weight: 600 !important
          line-height: 1.2 !important
          font-family: 'Montserrat', sans-serif !important

        .subtitle
          line-height: 1.2
          opacity: .6

        .see-more
          text-transform: none
          font-weight: 600

      > .image
        width: 100vw
        margin-left: -2em
        position: relative

        .v-image
          height: 10em
          width: 100%

        .gradient
          position: absolute
          width: 100%
          height: 100%
          top: 0
          left: 0
          background: linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%)
          opacity: .4

    > .report
      margin-top: 2em
      margin-bottom: 0em
      padding: 1em
      text-align: center
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
</style>
