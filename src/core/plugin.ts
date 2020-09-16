export default {
  install(app, options) {
    app.__proto__.$toast =function () {
      console.log('I am toast')
    }
  }
}
