<template>
  <v-container fluid class="calendar">
    <v-row dense>
      <div class="header">Agenda</div>
      <div class="months">
        <div>Outubro</div>
        <div class="active">Novembro</div>
        <div>Dezembro</div>
      </div>
      <v-date-picker
        v-model="picker2"
        full-width
        color="primary darken-3"
        header-color="primary"
        locale="pt-br"
      ></v-date-picker>
      <div class="date-bar"></div>
    </v-row>

    <v-row dense class="events">
      <v-card
        v-for="(aula, index) in appointments(picker2)"
        :key="index"
        class="mt-5"
        color="white"
      >
        <v-sheet
          color="grey lighten-4"
          class="overline"
          style="width: 100%; padding: 5px 0; padding-left: 15px; margin-bottom: -10px; font-weight: 500;"
        >
          <v-icon :color="`${aula._color || 'primary'}`"
            >mdi-circle-medium</v-icon
          >
          {{ aula._object }}
        </v-sheet>
        <v-card-title style="display: flex; justify-content: space-between;">
          <strong>{{ aula.name }}</strong>
          <label class="body-2">{{ parseTime(aula.date[0]) }}</label>
        </v-card-title>
        <v-card-subtitle>
          <div v-if="'class' in aula">
            <strong>{{ aula.class }}</strong>
          </div>
          <div v-if="'room' in aula">
            Sala <strong>{{ aula.room }}</strong>
          </div>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <!-- <v-btn
      color="primary darken-3"
      dark
      absolute
      bottom
      right
      fab
      style="bottom: calc(56px + 28px) !important"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn> -->
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { parseDate, parseTime } from "@/utils/class"

export default {
  layout: "menu",
  data: () => ({
    picker2: new Date().toISOString().substr(0, 10),
    selected: false
  }),
  computed: {
    ...mapGetters("user", ["appointments"]),

    normalized_appointments() {
      return this.appointments(this.picker2).map(a => {
        const obj = {
          name: a.name,
          date: a.date,
          properties: []
        }

        for (const prop in [
          {
            name: "class",
            label: ""
          },
          {
            name: "room",
            label: "Sala"
          }
        ]) {
          if (prop.name in a) {
            obj.properties.append({
              label: prop.label,
              value: a[prop.name]
            })
          }
        }

        return obj
      })
    }
  },
  methods: {
    parseTime
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/styles.sass'
// .outer-card
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)

//   .v-card::v-deep
//     border: none
.calendar
  padding: 0

  > .row::v-deep

    > div.header
      height: 5em
      padding: 1em
      display: flex
      flex-direction: column
      justify-content: flex-end
      align-items: center
      text-align: center
      width: 100%
      font-family: 'Arial'
      font-size: 0.75em
      font-weight: 700
      color: white
      background: map-get($primary, base)
      text-transform: uppercase

    > div.months
      width: 100%
      background: map-get($primary, darken-4)
      color: white
      text-transform: uppercase
      display: flex
      flex-direction: row
      justify-content: space-between
      padding: .5em 2em
      font-family: 'Montserrat', sans-serif
      font-size: 0.75em

      > div
        font-weight: 400
        opacity: .75

        &.active
          opacity: 1
          font-weight: 700

    > .v-picker--date
      box-shadow: none

      .v-picker__title
        &.primary
          display: none

      .v-picker__body
        .v-date-picker-table
          height: auto

    > div.date-bar
      width: 100%
      padding-top: 1.5em
      padding-bottom: 2em
      background: white
      border-bottom-left-radius: 3em
      border-bottom-right-radius: 3em
      box-shadow: 0px 3px 3px rgba(black, 0.1)

      &::before
        content: ''
        display: block
        height: 2px
        background: map-get($primary, lighten-3)
        width: 50%
        margin: 0 auto
</style>
