export const state = () => ({
  scroll: 0,
  ripple: {
    color: "primary--text text--lighten-4"
  },
  event: {
    header: false
  }
})

export const mutations = {
  SCROLL(state, offset) {
    state.scroll = offset
  },
  SET_PREVIOUS_HEADER(state, value) {
    if (value === false) {
      state.event.header = value
    } else {
      const { home } = value

      state.event.header = {
        home
      }
    }
  }
}
