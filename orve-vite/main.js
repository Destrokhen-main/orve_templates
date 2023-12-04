import { orveCreate } from "orve-rxjs";

import App from "./src/app.js";

const app = orveCreate();
app.createApp(App)
app.mount("#app");