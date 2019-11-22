<template>
  <v-app>
    <v-container fluid class="pa-0 screen" fill-height>
      <div class="background-image" :class="{ blur: is_focused }"></div>
      <v-row justify="center" no-gutters>
        <v-col lg="4" md="6" sm="12" class="main-column">
          <div class="display-3 mb-8 justify-center logo-wrapper">
            <v-img
              src="/img/prototype-1--white.png"
              aspect-ratio="1"
              max-width="254"
              max-height="125"
            ></v-img>
          </div>
          <v-form ref="form" v-model="form_valid" lazy-validation>
            <v-col
              class="my-8 white--text"
              style="padding: 56px 48px !important; margin-bottom: 64px !important;"
            >
              <v-text-field
                v-model="email"
                dark
                :rules="emailRules"
                :label="$t('login.email')"
                required
                @blur="set_blur('email')"
                @focus="focus.email = true"
              ></v-text-field>
              <v-text-field
                v-model="password"
                dark
                :rules="passwordRules"
                type="password"
                :label="$t('login.password')"
                required
                @blur="set_blur('password')"
                @focus="focus.password = true"
              ></v-text-field>
              <br />
              <p class="text-center">
                <v-btn text color="white">Esqueci minha senha</v-btn>
              </p>
            </v-col>

            <v-btn
              :disabled="!is_valid"
              block
              dark
              tile
              class="font-weight-bold"
              color="primary darken-2"
              to="/calendar"
              nuxt
              x-large
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
import _ from "lodash"

export default {
  data() {
    return {
      form_valid: false,
      email: "",
      emailRules: [v => !!v || this.$t("login.rules.email")],
      password: "",
      passwordRules: [v => !!v || this.$t("login.rules.password")],
      focus: {
        email: false,
        password: false
      }
    }
  },
  computed: {
    is_valid() {
      return this.form_valid && this.email !== "" && this.password !== ""
    },
    is_focused() {
      return this.focus.email || this.focus.password
    }
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log("oi")
      }
    },
    set_blur: _.debounce(function(field) {
      const still_focused = Object.keys(this.focus)
        .filter(key => key !== field)
        .reduce((acc, key) => acc || this.focus[key], false)

      if (!still_focused) this.focus[field] = false
    }, 500)
  }
}
</script>

<style lang="sass" scoped>
.screen::v-deep
  position: relative
  display: flex
  height: 100vh

  .background-image
    $blur-size: 5px
    background-image: url("/img/framed-unifesp.png")
    background-size: cover
    background-position: center
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    -webkit-transition: background 2s
    transition: background 2s

    // TODO: Adicionar transicao para o blur

    &.blur
      background-image: url("/img/blured-unifesp.png")
      -webkit-transition: background 2s
      transition: background 2s

    &::before
      content: ""
      background-color:  rgb(96,80,115)
      background-image: linear-gradient(153deg, rgba(96,80,115,1) 0%, rgba(15,98,85,1) 100%)
      background-blend-mode: multiply
      top: 0
      left: 0
      width: 100%
      height: 100%
      display: block
      position: absolute
      opacity: 0.52

  .main-column
    display: flex
    flex-direction: column
    justify-content: center

    .logo-wrapper
      display: flex

      > .v-image
        position: relative

        &::before
          content: ""
          background-color:  black
          top: 0
          left: 0
          width: 100%
          height: 100%
          display: block
          position: absolute
          opacity: 0.1

    .submit-button
</style>
