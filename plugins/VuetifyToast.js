import Vue from "vue"
import VuetifyToast from "vuetify-toast-snackbar"

Vue.use(VuetifyToast, {
  x: "right", // default
  y: "bottom", // default
  color: "grey darken-3", // info
  icon: "", // info
  iconColor: "", // default
  classes: ["text-center"],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: "", // default
  closeIcon: "close", // default
  closeColor: "", // default
  slot: [], // default
  shorts: {
    custom: {
      color: "purple"
    }
  },
  property: "$toast" // default
})
