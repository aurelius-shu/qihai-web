<template>
  <div id="detail">
    <Header></Header>
    <main class="main pt-4">
      <div class="container">
        <div class="row">
          <ArticleContent></ArticleContent>
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
import ArticleContent from "./ArticleContent";
import Aside from "./Aside";
import SiteNewsLetter from "./SiteNewsLetter";
import SiteInstagram from "./SiteInstagram";
import Footer from "./Footer";

export default {
  name: "Article",
  components: {
    Header,
    ArticleContent,
    Aside,
    SiteNewsLetter,
    SiteInstagram,
    Footer
  }
};
</script>

<style>
</style>