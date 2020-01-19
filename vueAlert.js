const vueAlert = function() {
  return {
    appendVue() {
      const MainComponent = Vue.extend({
        template: `
<div>
    <h1>Message</h1>
    <li v-for="message in listOfMessages"> {{ message }}</li>
    <br>
    <input v-model="inputMessage">
    <button @click="addAnotherMessage">Add another message</button>
    <button-counter></button-counter>
</div>`,
        data() {
          return {
            listOfMessages: ["message 1", "message 2", "message 3", "message 4", "message 5"],
            inputMessage: ""
          }
        },
        methods: {
          addAnotherMessage() {
            this.listOfMessages.push(this.inputMessage)
          }
        }
      })

      Vue.component("button-counter", {
        data: function() {
          return {
            count: 0
          }
        },
        template: `
        <div class="block">
        <div class="block__square block__square-pink" onclick="alertPink()"></div>
        <div class="block__square block__square-red" onclick="alertRed()"></div>
        <div class="block__square block__square-blue" onclick="alertBlue()"></div>
        <div class="block__square block__square-green" onclick="alertGreen()"></div>
        <div class="block__square block__square-yellow" onclick="alertYellow()"></div>
    </div>
        `
      })
      const component = new MainComponent().$mount()
      document.body.appendChild(component.$el)
    }
  }
}()