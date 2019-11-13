export const state = () => ({
  name: "Joao Carlos Martins",
  courses: [
    {
      _id: "bcc",
      progress: 0.7
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
  }
}
