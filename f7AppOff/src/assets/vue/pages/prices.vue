<template>
  <f7-page>
    <f7-list>
      <f7-list-item v-for="station in stations">
        <p v-for="(value, key) in station">{{ key }}: {{ value }}</p>
      </f7-list-item>
    </f7-list>
  </f7-page>

</template>

<script>
  export default {
    data() {
      return {
        stations: []
      }
    },
    created() {
      console.log('Created')
      fetch('http://openyapi.servotal.com/price', {
        method: 'get'
      })
      .then(response => response.json())
      .then(jsonData => {
        this.stations = jsonData
      })
    }
  }
</script>