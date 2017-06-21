<template>
  <f7-page>
    <f7-list form>
      <f7-list-item>
        <f7-label>User</f7-label>
        <f7-input type="text" v-model="userLogin.user"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" v-model="userLogin.password"></f7-input>
      </f7-list-item>
    </f7-list>
    <f7-grid>
      <f7-col>
        <f7-button @click="login">Login</f7-button>
      </f7-col>
    </f7-grid>
  </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        userLogin: {
          username: 'agustincldevel@gmail.com',
          password: 'zaqweszz',
          grant_type: 'password',
          client_id: localStorage.getItem('privatekey')
        }
      }
    },
    methods: {
      login() {
        console.log('Login in')
        const options = {
          method: 'post',
          headers: {
            'Accept': 'application/hal+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.userLogin)
        }
        fetch('http://openyapi.servotal.com/oauth', options)
          .then(response => response.json())
          .then(jsonData => {
            console.log(jsonData)
            localStorage.setItem('acess_token', jsonData.access_token)
            localStorage.setItem('refresh_token', jsonData.refresh_token)
            localStorage.setItem('expires_in', jsonData.expires_in)
            setInterval(() => {
              const options = {
                method: 'post',
                headers: {
                  'Accept': 'application/hal+json',
                  'Content-Type': 'application/json'
                },
                body: {
                  grant_type: 'refresh_token',
                  client_id: 'Manolito',
                  refresh_token: localStorage.getItem('refresh_token')
                }
              }
              fetch('http://openyapi.servotal.com/oauth', options)
              .then(response => response.json())
              .then(jsonData => {
                localStorage.setItem('access_token', jsonData.access_token)
                localStorage.setItem('refresh_token', jsonData.refresh_token)
              })
              .catch(error => console.log(error))
            }, jsonData.expires_in * 1000)
          })
          .catch(error => console.log())
      }
    }
  }
</script>