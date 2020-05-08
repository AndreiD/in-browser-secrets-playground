import colors from "vuetify/es5/util/colors";

// blackish background: #231F20
// yellow: #fdb914
// white: #F2F2F2

export default {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#F2F2F2',
        secondary: '#fdb914',
        secondaryLight: colors.indigo.lighten2,
        third: colors.teal.darken1,
        thirdLight: colors.teal.lighten1,
        grey: colors.grey.darken1,
        red: colors.red.lighten2,
        accent: '#fdb914',
        error: '#ff4444',
        info: '#33b5e5',
        success: '#00C851',
        warning: '#ffbb33',
        edgeColor: '#3A87AD'
      }
    }
  }
};
