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
      _id: 234367886,
      name: "IHC",
      icon: "book-variant",
      room: "404",
      date: [
        {
          day: "2019-11-25",
          time: ["19:00", "21:00"]
        }
      ]
    },
    {
      _id: 54566765,
      name: "IHC",
      icon: "book-variant",
      room: "404",
      date: [
        {
          day: "2019-11-25",
          time: ["21:00", "23:00"]
        }
      ]
    },
    {
      _id: 123213544,
      name: "Calculo Numerico",
      icon: "book-variant",
      room: "208",
      date: [
        {
          day: "2019-11-26",
          time: ["10:00", "12:00"]
        }
      ]
    },
    {
      _id: 34534,
      name: "Compiladores",
      icon: "book-variant",
      room: "303",
      date: [
        {
          day: "2019-11-26",
          time: ["15:30", "17:30"]
        }
      ]
    },
    {
      _id: 123123,
      name: "PAA",
      icon: "book-variant",
      room: "307",
      date: [
        {
          day: "2019-11-26",
          time: ["19:00", "21:00"]
        }
      ]
    }
  ],
  events: [
    {
      _id: 61255,
      name: "Hi-Fi Prototype",
      class: "IHC",
      date: [
        {
          day: "2019-11-25",
          time: ["19:00", "23:00"]
        }
      ],
      _object: "trabalho",
      _color: "amber"
    },
    {
      _id: 6235,
      name: "P1",
      class: "Compiladores",
      room: 303,
      date: [
        {
          day: "2019-11-26",
          time: ["15:30", "17:30"]
        }
      ],
      _object: "prova",
      _color: "red"
    },
    {
      _id: 655,
      name: "Aula de Exercicio",
      class: "PAA",
      room: 405,
      date: [
        {
          day: "2019-11-26",
          time: ["19:00", "21:00"]
        }
      ],
      _color: "blue"
    }
  ],
  events2: []
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
      state.classes
        .filter(c => c.date.filter(d => d.day === date).length > 0)
        .map(c => ({ _object: "aula", ...c }))
  },
  events(state) {
    return date =>
      state.events
        .filter(c => c.date.filter(d => d.day === date).length > 0)
        .map(c => ({ _object: "event", ...c }))
  },
  appointments(state, getters) {
    return date => {
      const classes = getters.classes(date)
      const events = getters.events(date)

      return [...classes, ...events]
    }
  }
}

export const mutations = {
  // SET_AULA(state, args...) {
  // }
}
