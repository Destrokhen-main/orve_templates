import { orveCreate } from "orve-rxjs";

import App from './App';

const app = orveCreate();
app.createApp(App)
app.mount("#app")

// const { ref, watch, computed } = require('orve-rxjs')

// const block = document.createElement('div');
// const button = document.createElement('button');

// button.innerText = "click";
// button.addEventListener("click", () => a.value++);

// const a = ref(1);
// const c = computed(() => a.value + 1);

// block.innerText = c.value
// watch(() => block.innerText = c.value, [c]);

// document.body.append(block, button);
