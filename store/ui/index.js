export const state = () => ({
  scroll: 0,
  ripple: {
    color: "primary--text text--lighten-4"
  }
})

export const mutations = {
  SCROLL(state, offset) {
    state.scroll = offset
  }
}
