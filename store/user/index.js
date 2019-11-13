export const state = () => ({
  name: "Joao Carlos Martins",
  courses: [
    {
      _id: "bcc",
      progress: 0.7
    }
  ],
  classes: [
    {
      name: "IHC",
      icon: "book-variant",
      room: "404",
      date: [
        {
          day: "2019-11-13",
          time: ["19:00", "23:00"]
        }
      ]
    },
    {
      name: "Compiladores",
      icon: "book-variant",
      room: "303",
      date: [
        {
          day: "2019-11-14",
          time: ["15:30", "17:30"]
        }
      ]
    }
  ]
})

export const getters = {
  current_course(state) {
    return state.courses.length > 0
      ? state.courses[state.courses.length - 1]
      : undefined
  },
  course(state, getters) {
    return course => {
      if (course !== undefined) {
        const course_exists = state.courses.filter(
          c => c._id === course || c === course
        )

        if (course_exists.length > 0) {
          return course_exists[0]
        }
      } else {
        return getters.current_course
      }

      return undefined
    }
  },
  classes(state) {
    return date =>
      state.classes.filter(c => c.date.filter(d => d.day === date).length > 0)
  }
}

export const mutations = {
  // SET_AULA(state, args...) {
  // }
}
