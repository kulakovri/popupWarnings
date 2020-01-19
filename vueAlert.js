const vueAlert = function() {
  return {
    appendVue() {
      const MyComponent = Vue.extend({
        template: `
<div>
    <h1>Message</h1>
    <li v-for="message in listOfMessages"> {{ message }}</li>
    <br>
    <input v-model="inputMessage">
    <button @click="addAnotherMessage">Add another message</button>
</div>`,
        data() {
          return {
            listOfMessages: ['message 1', "message 2", "message 3",  "message 4",  "message 5"],
            inputMessage: ""
          }
        },
        methods: {
          addAnotherMessage() {
            this.listOfMessages.push(this.inputMessage)
          }
        }
      })
      const component = new MyComponent().$mount()
      document.body.appendChild(component.$el)
    }
  }
}()