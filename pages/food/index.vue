<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card
          color="primary darken-3"
          dark
          style="border-radius: 5px 5px 5px 5px"
        >
          <v-card-title class="headline">2 créditos</v-card-title>
          <v-card-subtitle v-text="test"></v-card-subtitle>
          <v-card-actions>
            <v-btn text color="light-blue lighten-4">
              Atualizar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-3" no-gutters>
      <v-col cols="12">
        <v-carousel
          hide-delimiters
          :show-arrows="false"
          style="border-radius: 5px 5px 5px 5px"
        >
          <v-carousel-item v-for="day in days" :key="day">
            <v-sheet color="primary lighten-5" height="100%" tile>
              <v-card
                color="primary darken-3"
                dark
                style="border-radius: 5px 5px 0px 0px"
              >
                <v-card-title
                  class="headline text-center"
                  v-text="day"
                ></v-card-title>
              </v-card>
              <v-card
                color="primary lighten-4"
                style="border-radius: 0px 0px 0px 0px"
              >
                <v-card-text style="color: black">Almoço</v-card-text>
                <v-card-text style="color: black"
                  >Arroz<br />Bife<br />Alface<br
                /></v-card-text>
              </v-card>
              <v-card
                color="primary lighten-4"
                style="border-radius: 0px 0px 0px 0px"
              >
                <v-card-text style="color: black">Janta</v-card-text>
                <v-card-text style="color: black"
                  >Arroz<br />Frango grelhado<br />Cenoura<br
                /></v-card-text>
              </v-card>
              <!-- <div class="display-3">Slide {{ i + 1 }}</div> -->
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "menu",
  data: () => ({
    test: "Última atualização: 20 de Março, às 22:00",
    days: [
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira"
    ]
  })
}
</script>

<style></style>
