// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const theme = {
  defaultTheme: "dark",
  variations: {
    colors: ["primary", "secondary"],
    lighten: 1,
    darken: 2,
  },
  themes: {
    light: {
      colors: {
        surface: "#F5F5F5",
        primary: "#2A3E72",
        secondary: "#0DCCC2",
        heading: "#2A3E72",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
    },
    dark: {
      colors: {
        surface: "#030303",
        primary: "#00fffa",
        secondary: "#03DAC6",
        heading: "#042070",
        error: "#B00020",
        info: "#00fffa",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
    },
  },
};
export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: theme,
  });

  nuxt.vueApp.use(vuetify);
});
