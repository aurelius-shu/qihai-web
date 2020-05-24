<template>
  <div id="detail">
    <Header></Header>
    <main class="main pt-4">
      <div class="container">
        <div class="row">
          <Article></Article>
          <Aside></Aside>
        </div>
      </div>
    </main>
    <SiteNewsLetter></SiteNewsLetter>
    <SiteInstagram></SiteInstagram>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Article from "./Article";
import Aside from "./Aside";
import SiteNewsLetter from "./SiteNewsLetter";
import SiteInstagram from "./SiteInstagram";
import Footer from "./Footer";

export default {
  name: "Detail",
  components: {
    Header,
    Article,
    Aside,
    SiteNewsLetter,
    SiteInstagram,
    Footer
  }
};
</script>

<style>
</style>