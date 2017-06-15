new Vue({
  el: "#things",
  data: {
    thing: {
      name: '',
      description: '',
      date: ''
    },
    updating: false,
    updatingIndex: null,
    things: []
  },

  beforeCreate: function () {
    console.log('Before create')
  },

  created: function () {
    this.things = JSON.parse(localStorage.getItem('savedThings')) || []
    console.log('Before create')
  },

  beforeMount: function () {
/*    const things = JSON.parse(localStorage.getItem('savedThings')) || []
    this.$set(this, 'things', things)*/
    console.log('Before mount')
  },

  mounted: function () {
    console.log('Mounted')
  },

  methods: {
    addThing: function () {
      this.thing.date = new Date()
      /*const thing = {
        name: this.thing.name,
        description: this.thing.description,
        date: this.thing.date
      }*/
      this.things.push(this.thing)
      this.saveToStorage()
      this.thing = { name: '', description: '', date: '' }
    },

    saveToStorage: function () {
      localStorage.setItem('savedThings', JSON.stringify(this.things))
    },

    updateValue: function () {
      this.things.splice(this.updatingIndex, 1, this.thing)
      this.saveToStorage()
    },

    submitForm: function () {
      this.addThing()
    },

    deleteThing: function (index) {
      // this.things.splice(index, 1)
      Vue.delete(this.things, index)
      this.saveToStorage()
    },

    updateThing: function (index) {
      /*const thing = {
        name: this.thing.name,
        description: this.thing.description,
        date: this.thing.date
      }*/
      this.$set(this, 'updating', true)
      this.thing = this.things[index]
      this.updatingIndex = index
    }
  }
})