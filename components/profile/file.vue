<template>
  <!-- <v-card color="primary darken-3" dark style="border-radius: 5px 5px 5px 5px">
    <v-card-title>{{ label }}</v-card-title>
    <v-card-text class="text-center">
      <v-btn icon>
        <v-icon size="36">mdi-file-document</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="primary lighten-4">
        {{ $t("general.download") }}
      </v-btn>
    </v-card-actions>
  </v-card> -->
  <v-card>
    <v-img
      class="white--text"
      cover
      aspect-ratio="2"
      height="180px"
      :src="`/img/${random_image(2)}`"
      gradient="to top, rgba(100,115,201,.17), rgba(26, 29, 46, 0.9)"
    >
      <v-card-title>{{ value.label }}</v-card-title>
      <div style="width: 100%; text-align: center;">
        <v-btn icon style="height: calc(60px + 12px); width: (60px + 12px);">
          <v-icon
            color="primary lighten-5"
            size="60"
            :style="`opacity: ${discreet ? 0.5 : 1}`"
          >
            mdi-download
          </v-icon>
        </v-btn>
      </div>
    </v-img>

    <v-card-subtitle class="text-center">
      <strong :class="{ 'primary--text': discreet }">{{ formatDate() }}</strong>
      <div class="caption">Última Atualização</div>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import { formatDate } from "@/utils/format"

export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        label: "Unknown",
        date: new Date(),
        interval: 30
      })
    }
  },
  computed: {
    discreet() {
      const now = new Date()
      const date = this.$props.value.date

      return (
        Math.ceil(Math.abs(date - now) / (1000 * 60 * 60 * 24)) <
        this.$props.value.interval
      )
    }
  },
  methods: {
    random(max = 2) {
      return Math.floor(Math.random() * max) + 1
    },
    random_image(max = 2) {
      const n = this.random(max)

      return `unifesp${n === 1 ? "" : "_" + n}.jpg`
      // return "placeholder.jpg"
    },
    formatDate() {
      return formatDate(this.$moment(this.$props.value.date))
    }
  }
}
</script>

<style lang="sass" scoped></style>
