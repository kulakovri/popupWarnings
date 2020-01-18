console.log('vueAlert is loaded')

const vueAlert = function() {
  function loadCss() {
    const fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", "/resource/customStyles")
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }

  return {
    openAlert: function(headerText, bodyText) {
      loadCss()
      const MyComponent = Vue.extend({
        template: `
<div class="popup" v-if="shouldShowModal">
    <div class="popup__overlay-background">
        <div class="popup_modal">
            <h2 class="popup__header"> {{ headerText }}</h2>
            <button class="popup__button-close" @click="close"></button>
            <p class="popup__content">
                {{ bodyText }}
            </p>
        </div>
    </div>
</div>`,
        methods: {
          close() {
            this.shouldShowModal = false
          }
        },
        data() {
          return {
            shouldShowModal: true,
            headerText: headerText,
            bodyText: bodyText
          }
        }
      })
      const component = new MyComponent().$mount()
      document.body.appendChild(component.$el)
    }
  }
}()