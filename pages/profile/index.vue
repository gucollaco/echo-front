<template>
  <v-container fluid>
    <v-row class="mb-n12">
      <v-app-bar-nav-icon
        class="ml-2"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list subheader class="mt-2">
          <v-subheader
            >{{ $t("profile.hello") }} <strong class="px-2">{{ name }}</strong
            >!</v-subheader
          >
        </v-list>
        <v-divider></v-divider>
        <v-list subheader two-line flat>
          <v-subheader>{{ $t("profile.settings.name") }}</v-subheader>

          <v-list-item-group v-model="settings" multiple>
            <v-list-item>
              <template v-slot:default="{ toggle }">
                <v-list-item-action>
                  <!-- TODO: 'v-model' directives cannot update the iteration variable 'active' itself  vue/valid-v-model  -->
                  <v-checkbox color="primary" @click="toggle"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="capitalize">{{
                    $tc("general.notification", 1)
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    $t("profile.settings.allow_notifications")
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-subheader>{{ $tc("general.other", 1) }}</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-help</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{
                  $t("profile.settings.about")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group color="primary">
            <v-list-item to="/" nuxt>
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{
                  $t("profile.settings.signout")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-row>
    <v-row justify="center" class="mt-4">
      <v-avatar color="primary" size="196">
        <span>
          <v-btn icon>
            <v-icon size="72">mdi-account</v-icon>
          </v-btn>
        </span>
      </v-avatar>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="6"> <file :value="certificate"/></v-col>
      <v-col cols="6">
        <file :value="history" />
      </v-col>
    </v-row>
    <v-row class="mt-2" align="center">
      <v-col cols="6">
        <div class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :value="course().progress * 100"
            color="teal"
          >
            {{ course().progress * 100 }}%
          </v-progress-circular>
        </div>
      </v-col>
      <v-col cols="6">
        {{ $t("unifesp.courses." + course()._id) }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import fileVue from "../../components/profile/file.vue"
import { randomDate } from "@/utils/mock"
import { formatDate } from "@/utils/format"

export default {
  components: {
    file: fileVue
  },
  layout: "menu",
  data() {
    return {
      lastUpdate: "Última atualização: 20 de Março, às 22:00",
      drawer: false,
      settings: [],

      certificate: {
        label: this.$t("profile.certificate"),
        date: this.randomDate(),
        interval: 30
      },
      history: {
        label: this.$t("profile.history"),
        date: this.randomDate(),
        interval: 30 * 6
      }
    }
  },
  computed: {
    ...mapState("user", ["name"]),
    ...mapGetters("user", ["course"])
  },
  methods: {
    randomDate
  }
}
</script>

<style></style>
