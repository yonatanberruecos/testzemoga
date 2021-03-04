<template>
  <main id="app">
    <HeaderPage/>
    <router-view/>
    <FooterPage/>
  </main>
</template>
<script type="text/javascript">
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
export default {
  name: 'app',
  components:{
    HeaderPage,
    FooterPage
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;700&display=swap');
body {
  font-family: 'Lato', sans-serif !important;
  background-color: #ffffff !important;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1,h2,h3,h4 {
  font-weight: bold; 
}
</style>
