<template>
  <f7-page>
    <f7-grid>
      <f7-col>
        <f7-button @click="register">Register</f7-button>
      </f7-col>
    </f7-grid>
  </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        registerData: {
          osversion: 'Linux',
          lat: '41',
          lng: '2',
          registerid: 'Manolito'
        }
      }
    },

    methods: {
      register() {
        //const self = this
        if (localStorage.getItem('privatekey')) {
          this.$router.load({url: '/login/'})
        } else {
          console.log('Register')
          const config = {
            headers: {
              'Accept': 'application/hal+json',
              'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(this.registerData)
          }
          fetch('http://openyapi.servotal.com/clientregister', config)
            .then(response => response.json())
            .then(jsonData => {
              console.log('key retrieved')
              localStorage.setItem('publickey', jsonData.publickey)
              localStorage.setItem('privatekey', jsonData.privatekey)
              console.log(self)
              self.$router.load({ url: '/login/' })
            })
            .catch(error => console.log(error))
        }
      }
    }
  }

</script>