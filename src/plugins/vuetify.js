import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2196f3',
        secondary: '#9c27b0',
        accent: '#8bc34a',
        error: '#ffc107',
        warning: '#ff5722',
        info: '#607d8b',
        success: '#4caf50'
      },
    },
  },
})
