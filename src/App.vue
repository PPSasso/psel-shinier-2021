<template>
  <div>
    <my-header></my-header>
    <my-sidebar></my-sidebar>
  </div>
  
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MySidebar from './components/MySidebar.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MySidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
