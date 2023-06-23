import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const pinia = createPinia();
const app = createApp(App);

app.use(pinia); 
app.mount("#app");

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
