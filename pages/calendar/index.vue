<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-date-picker
          v-model="picker2"
          full-width
          color="primary darken-3"
          header-color="primary"
          locale="pt-br"
        ></v-date-picker>
      </v-col>
    </v-row>

    <v-card
      v-for="(aula, index) in appointments(picker2)"
      :key="index"
      class="mt-5"
      color="white"
      @click="selected = selected !== aula._id ? aula._id : false"
    >
      <v-sheet
        :color="
          `${aula._color || 'primary'} ${
            selected !== aula._id ? 'lighten-5' : ''
          }`
        "
        class="overline"
        :class="{ 'white--text': selected === aula._id }"
        style="width: 100%; text-align: center; padding: 5px 0; margin-bottom: -10px;"
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
      <!-- <v-card-actions
        v-if="selected === aula._id"
        style="display: flex; flex-direction: row; justify-content: center;"
      >
        <v-btn icon>
          <v-icon large>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-card-actions> -->
    </v-card>

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

<style></style>
