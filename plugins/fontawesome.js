// For Nuxt 3
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fass } from "@fortawesome/sharp-solid-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fab, fas, fad, fass);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
