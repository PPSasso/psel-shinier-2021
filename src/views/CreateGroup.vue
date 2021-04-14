<template>
  <div>
    <my-header PageName="Cadastrar Novo Grupo"
               ButtonLabel="Salvar"></my-header>
    <div class="flex">
      <my-sidebar></my-sidebar>
      <group-creation></group-creation>
      
    </div>
  </div>
</template>

<script>
import GroupCreation from '../components/GroupCreation.vue'
import MyHeader from '../components/MyHeader.vue'
import MySidebar from '../components/MySidebar.vue'

export default {
  name: 'GroupList',
  components: {
    MyHeader,
    MySidebar,
    GroupCreation
  }
}
</script>