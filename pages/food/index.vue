<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card color="primary darken-3" dark>
          <v-card-title>{{ credits }} créditos</v-card-title>
          <v-card-subtitle v-text="lastUpdate"></v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary lighten-4" @click="loading = true">
              Atualizar
            </v-btn>
          </v-card-actions>
          <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            bottom
            height="6"
            color="teal accent-4"
          ></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-3" no-gutters>
      <v-col cols="12">
        <v-carousel hide-delimiters :show-arrows="false">
          <v-carousel-item v-for="day in days" :key="day.name">
            <v-card
              color="primary darken-3"
              dark
              style="border-radius: 5px 5px 0px 0px"
            >
              <v-card-title v-text="day.name"></v-card-title>
            </v-card>
            <v-card
              light
              color="primary darken-3"
              style="border-radius: 0px 0px 5px 5px"
            >
              <v-list
                subheader
                style="border-radius: 0px 0px 0px 0px"
                color="primary lighten-4"
              >
                <v-subheader>Almoço</v-subheader>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{
                      day.lunch.basic
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      day.lunch.main
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      day.lunch.garnish
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      day.lunch.dessert
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list
                subheader
                style="border-radius: 0px 0px 5px 5px"
                color="primary lighten-4"
              >
                <v-subheader>Janta</v-subheader>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>{{
                      day.dinner.basic
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      day.dinner.main
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      day.dinner.garnish
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      day.dinner.dessert
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "menu",
  data() {
    return {
      credits: 2,
      loading: false,
      lastUpdate: "Última atualização: 20 de Março, às 22:00",
      days: [
        {
          name: "Segunda-feira (11/11/2019)",
          lunch: {
            basic: "Arroz e Feijão",
            main: "Filé suíno",
            garnish: "Purê",
            dessert: "Doce ou Fruta"
          },
          dinner: {
            basic: "Arroz e Feijão",
            main: "Isca de Frango",
            garnish: "Farofa",
            dessert: "Doce ou Fruta"
          }
        },
        {
          name: "Terça-feira (12/11/2019)",
          lunch: {
            basic: "Arroz e Feijão",
            main: "Filé grelhado",
            garnish: "Mandioca",
            dessert: "Doce ou Fruta"
          },
          dinner: {
            basic: "Arroz e Feijão",
            main: "Isca de Peixe",
            garnish: "Farofa Doce",
            dessert: "Doce ou Fruta"
          }
        },
        {
          name: "Quarta-feira (13/11/2019)",
          lunch: {
            basic: "Arroz e Feijão",
            main: "Peixe grelhado",
            garnish: "Purê de cenoura",
            dessert: "Doce ou Fruta"
          },
          dinner: {
            basic: "Arroz e Feijão",
            main: "Isca Suína",
            garnish: "Farofa de Banana",
            dessert: "Doce ou Fruta"
          }
        },
        {
          name: "Quinta-feira (14/11/2019)",
          lunch: {
            basic: "Arroz e Feijão",
            main: "Filé a milanesa",
            garnish: "Batata sautê",
            dessert: "Doce ou Fruta"
          },
          dinner: {
            basic: "Arroz e Feijão",
            main: "Carne moída",
            garnish: "Cenoura",
            dessert: "Doce ou Fruta"
          }
        },
        {
          name: "Sexta-feira (15/11/2019)",
          lunch: {
            basic: "Arroz e Feijão",
            main: "Filé bovino",
            garnish: "Batata frita",
            dessert: "Doce ou Fruta"
          },
          dinner: {
            basic: "Arroz e Feijão",
            main: "Frango em cubos",
            garnish: "Mandioca",
            dessert: "Doce ou Fruta"
          }
        }
      ]
    }
  },
  watch: {
    loading(val) {
      if (!val) return

      setTimeout(() => {
        this.loading = false
        this.lastUpdate = `Última atualização: 13 de Novembro, às 21:00`
        this.credits = 3
      }, 3000)
    }
  },
  methods: {
    bla() {
      console.log("oi")
    }
  }
}
</script>

<style></style>
