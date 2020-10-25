import Services from '@src/lib/Services'
import {StaticTypes} from '@src/types/frame.types'
const Service = new Services([
    { name: 'vue', src: 'https://ru.vuejs.org/js/vue.min.js', type: StaticTypes.dynamic },
    { name: 'vue-dev', src: 'https://ru.vuejs.org/js/vue.js', type: StaticTypes.static }
    ])
void Service.load('vue-dev').then((res) => {
    console.log(res)
})
void Service.load('vue').then((res) => {
    console.log(res)
})
