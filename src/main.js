import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";

// Router
import router from "./routes";
// Vuex
import store from "./store";
// FontAwesom Icons
import { useFontAwesomFun } from "./FontAwesome/fontAwesome.js";
const { FontAwesomeIcon } = useFontAwesomFun();
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
// Sweet Alert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// Filter String
import * as filters from "./filters";

const app = createApp(App);

// Vuex
app.use(store);
// Bootstrap CSS
app.use(bootstrap);
// Sweet Alert2
app.use(VueSweetalert2);
// FontAwesome Icons
app.component("font-awesome-icon", FontAwesomeIcon);
//  App Routing
app.use(router);
// Default App Mount
app.mount("#app");
// Filter String
app.config.globalProperties.$filters = filters;
