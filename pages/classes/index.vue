<template>
  <v-container fluid>
    <v-card color="primary darken-3" dark>
      <v-card-title>
        Interação Humano-Computador
      </v-card-title>
      <v-card-subtitle>
        Sala 404<br />
        Qua 19:00 - 23:00
      </v-card-subtitle>
      <v-card-actions>
        <v-chip class="mx-1" color="light-green darken-3">
          Apresentação
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn icon @click="show1 = !show1">
          <v-icon>{{ show1 ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show1">
          <v-divider></v-divider>

          <v-card-text>
            <ul>
              <li>Professor Tiago Silva</li>
              <li>13/11/2019 - Apresentação Hi-Fi</li>
            </ul>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card color="primary darken-3" dark class="mt-2">
      <v-card-title>
        Cálculo Numérico
      </v-card-title>
      <v-card-subtitle>
        Sala 205<br />
        Qui 10:00 - 12:00<br />
        Sex 10:00 - 12:00<br />
      </v-card-subtitle>
      <v-card-actions>
        <v-chip class="mx-1" color="light-green darken-2">
          Prova
        </v-chip>
        <v-chip class="mx-1" color="light-green darken-3">
          Atividade
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn icon @click="show2 = !show2">
          <v-icon>{{ show2 ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show2">
          <v-divider></v-divider>

          <v-card-text>
            <ul>
              <li>Professor Erwin</li>
              <li>14/11/2019 - Prova</li>
              <li>14/11/2019 - Apresentação</li>
            </ul>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card color="primary darken-3" dark class="mt-2">
      <v-card-title>
        Compiladores
      </v-card-title>
      <v-card-subtitle>
        Sala 404<br />
        Ter 15:30 - 17:30<br />
        Qui 15:30 - 17:30<br />
      </v-card-subtitle>
      <v-card-actions>
        <v-chip class="mx-1" color="light-green darken-2">
          Prova
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn icon @click="show3 = !show3">
          <v-icon>{{ show3 ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show3">
          <v-divider></v-divider>

          <v-card-text>
            <ul>
              <li>Professor Galvão</li>
              <li>14/11/2019 - Prova</li>
            </ul>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: "menu",
  data: () => ({
    show1: false,
    show2: false,
    show3: false
  })
}
</script>

<style></style>
