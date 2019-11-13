<template>
  <v-card color="primary darken-3" dark style="border-radius: 5px 5px 5px 5px">
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
  </v-card>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Unknown"
    }
  }
}
</script>

<style lang="sass" scoped></style>
