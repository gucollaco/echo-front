<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card color="primary darken-3" dark>
          <v-card-title v-text="card.title"></v-card-title>
          <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
          <v-card-text v-text="card.text"></v-card-text>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "menu",
  data: () => ({
    cards: [
      {
        title: "Boa noite!",
        flex: 12
      },
      {
        title: "IHC",
        subtitle: "Aula",
        text: "Agora",
        flex: 6
      },
      {
        title: "PCD",
        subtitle: "Prova",
        text: "Amanhã",
        flex: 6
      },
      {
        title: "Compiladores",
        subtitle: "Prova",
        text: "Amanhã",
        flex: 6
      },
      {
        title: "PAA",
        subtitle: "Prova",
        text: "Sexta-feira",
        flex: 6
      }
    ]
  })
}
</script>

<style></style>
