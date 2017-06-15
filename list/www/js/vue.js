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
    addThing: function () {
      this.thing.date = new Date()
      this.things.push(this.thing)
    },

    submitForm: function () {
      this.thing.date = new Date()
      this.things.push(this.thing)
    }
  }
})