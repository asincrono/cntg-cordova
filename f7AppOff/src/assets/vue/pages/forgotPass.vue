<template>
  <f7-page>
    <h1>Molvidé el pasbuord</h1>
    <f7-button @click="test">Back</f7-button>
  </f7-page>
</template>

<script>
  export default {
    methods: {
      test() {
        const self = this
        console.log('test')
        setTimeout(function() {
          self.$router.load({url: '/login'})
        }, 3000)
        
      }
    }
  }

</script>