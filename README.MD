# FRONT-SERVICES
Front-end microservices is real and very simple for use.

First-step: install front-services.
```
yarn add -D front-services || npm i --save-dev front-services
```

Second-step: use it! For example:

````
import FronsServices from 'front-services'

const Services = new FronsServices([
  { name: 'vue', src: 'https://ru.vuejs.org/js/vue.js', type: 'dynamic' }
])

Services.load('vue').then(({ Vue }) =>  {
    const vm = new Vue({
      el: '#app',
      template: `
      <div>
          <h1 @click="countUp">Hello From vue {{ count }}</h1>
          <div id="test"></div>
      </div>
      `,
      data() {
        return {
          count: 0
        }
      },
      methods: {
        countUp() {
          this.count++
        }
      }
  })
})
````

try for any solution
