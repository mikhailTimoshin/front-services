import Container, { StaticTypes } from "@src/lib/Container";
const modules = new Container([{ name: 'vue', src: 'https://ru.vuejs.org/js/vue.js'}])
void modules.mount('vue', StaticTypes.dynamic)
