<template>
  <v-app>
    <v-container fluid class="pa-0 screen">
      <v-row justify="center" no-gutters>
        <v-col lg="4" md="6" sm="12" class="main-column">
          <div
            class="display-3 primary--text font-weight-medium text-center mb-8"
          >
            ECHO
          </div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col
              class="my-8 primary lighten-5"
              style="padding: 56px 48px !important; margin-bottom: 64px !important;"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('login.email')"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                type="password"
                :label="$t('login.password')"
                required
              ></v-text-field>
            </v-col>

            <v-btn
              :disabled="!valid"
              block
              tile
              color="primary"
              to="/calendar"
              nuxt
              @click="validate"
            >
              {{ $t("login.signin") }}
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [v => !!v || this.$t("login.rules.email")],
      password: "",
      passwordRules: [v => !!v || this.$t("login.rules.password")]
    }
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log("oi")
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.screen::v-deep
  display: flex
  height: 100vh

  .main-column
    display: flex
    flex-direction: column
    justify-content: center
</style>
