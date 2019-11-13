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
      v-for="(aula, index) in classes(picker2)"
      :key="index"
      class="mt-2"
      color="primary"
      dark
    >
      <v-card-title>
        {{ aula.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ aula.room }}<br />
        {{ parseDate(aula.date[0]) }}
      </v-card-subtitle>
      <v-card-actions class="mt-n6">
        <v-spacer></v-spacer>
        <v-icon>mdi-{{ aula.icon }}</v-icon>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { parseDate } from "@/utils/class"

export default {
  layout: "menu",
  data: () => ({
    picker2: new Date().toISOString().substr(0, 10)
  }),
  computed: {
    ...mapGetters("user", ["classes"])
  },
  methods: {
    parseDate
  }
}
</script>

<style></style>
