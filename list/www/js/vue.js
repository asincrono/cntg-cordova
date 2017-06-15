new Vue({
  el: "#things",
  data: {
    thing: {
      name: 'no name',
      description: 'no description',
      date: 'no date'
    },
    things: []
  },
  methods: {
    addThing: function (event) {
      if(event) event.preventDefault()
      console.log('Love is in the air')
    },

    submitForm: function () {
      console.log('Form submitted')
    }
  }
})