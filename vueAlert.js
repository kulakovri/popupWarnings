const vueAlert = function() {
  return {
    appendVue() {
      const MyComponent = Vue.extend({
        template: `
<div>
    <h1>Errors</h1>
    <li v-for="error in errors""> {{ error }}</li>
</div>`,
        methods: {

        },
        data() {
          return {
            rows: [1, 2, 3, 4],
            errors: ['error 1', "error 2", "error 3",  "error 4",  "error 5"]
          }
        }
      })
      const component = new MyComponent().$mount()
      document.body.appendChild(component.$el)
    }
  }
}()