new Vue({
  el: '#registerForm',

  http: {
    headers: {
      'Accept': 'application/hal+json',
      'Content-Type': 'application/json',
    }
  },

  data: {
    registerDataJSON: {
      'osversion': 'HALL 9000',
  	  'lat': '0',
      'lng': '0',
      'registerid': 'Manolito'
    },

    userData: {
      email: 'agustincl@gmail.com',
      first_name: 'Agustin',
      last_name: 'Calderon',
      phone_number: '12341234',
      token: 'NmY5YjY1ZTBlMzg0Mzc0ZDQ4ZTE0YzEyM2YyMmU0ZTI=',
      iduser: 'f7914e2b-b903-57cb-9b37-2063ea0ed1c8'
    }
  },

  created: function () {
    this.clientRegister()
  },

  methods: {
    saveUser: function () {
      console.log('saveUser')
    },

    clientRegister: function () {
      /*const headers = {
        'Accept': 'application/hal+json',
        'Content-Type': 'application/json'
      }*/

      /*this.$http.post('http://openyapi.servotal.com/clientregister', this.registerData, {
        headers: headers
      })
        .then(function (response) {
          console.log('No error')
          console.log(response)
        })
        .catch(function (response) {
          console.log('Error')
          console.log(response)
        })*/

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('Accept', 'application/hal+json')

      const data = new FormData()
      data.append( "json", JSON.stringify(this.registerData))

      const init = {
        method: 'POST',
        headers: headers,
        body: this.registerData,
        mode: 'no-cors'
      } 

      fetch('http://openyapi.servotal.com/clientregister', init)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
})