<template>
  <div>
    <my-header PageName="Grupos com acesso a plataforma"
               ButtonLabel="Criar grupo"></my-header>
    <div class="flex">
      <my-sidebar></my-sidebar>
      <main-div></main-div>
    </div>
  </div>
</template>

<script>
import MainDiv from '../components/MainDiv'
import MyHeader from '../components/MyHeader.vue'
import MySidebar from '../components/MySidebar.vue'

export default {
  name: 'GroupList',
  components: {
    MyHeader,
    MySidebar,
    MainDiv
  }
}
</script>