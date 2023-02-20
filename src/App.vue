<template>
  <Header :links="links"/>
  <router-view/>
</template>
<script>
import Header from './components/Header.vue';
import '@/assets/css/main.css'
export default {
    components: { Header },
    data() {
      return {
        links:[
          {title:'Home', url: '/'},
          {title:'About', url: '/about'},
          {title:'Portfolio', url: '/portfolio'},
          {title:'Contact', url: '/contact'},
          {title:'Blog', url: '/blog'},
        ]
      }
    },
}
</script>
<style lang="scss">
  
</style>