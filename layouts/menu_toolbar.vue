<template>
  <v-app>
    <ech-header></ech-header>
    <div ref="content" class="content">
      <nuxt />
    </div>
    <BottomNav />
  </v-app>
</template>

<script>
import { mapMutations } from "vuex"
import BottomNav from "../components/BottomNav"
import HeaderVue from "../components/Header.vue"

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { BottomNav, "ech-header": HeaderVue },
  data() {
    return {}
  },
  mounted() {
    this.$refs.content.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    this.$refs.content.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    ...mapMutations("ui", ["SCROLL"]),
    handleScroll(event) {
      this.SCROLL(event.target.scrollTop)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/styles.sass'

.v-application--wrap::v-deep
  > div.content
</style>
