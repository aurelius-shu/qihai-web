<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Header></Header>
    <Main></Main>
    <SiteNewsLetter></SiteNewsLetter>
    <SiteInstagram></SiteInstagram>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/realm/Header.vue";
import Main from "./components/realm/Main.vue";
import SiteNewsLetter from "./components/realm/SiteNewsLetter.vue";
import SiteInstagram from "./components/realm/SiteInstagram.vue";
import Footer from "./components/realm/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Main,
    SiteNewsLetter,
    SiteInstagram,
    Footer
  }
};
</script>

<style>
/* #app {} */
</style>
