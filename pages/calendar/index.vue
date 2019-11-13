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
    <v-card color="primary darken-1" dark>
      <v-card-title>
        Interação Humano-Computador
      </v-card-title>
      <v-card-subtitle>
        Sala 404<br />
        Qua 19:00 - 23:00
      </v-card-subtitle>
      <v-card-actions class="mt-n6">
        <v-spacer></v-spacer>
        <v-icon>mdi-book-variant</v-icon>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: "menu",
  data: () => ({
    picker2: new Date().toISOString().substr(0, 10)
  })
}
</script>

<style></style>
