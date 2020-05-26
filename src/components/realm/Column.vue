<template>
  <div id="columns">
    <Header></Header>
    <main class="main pt-4">
      <div class="container">
        <div class="row">
          <ColumnContent></ColumnContent>
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
import ColumnContent from "./ColumnContent";
import Aside from "./Aside";
import SiteNewsLetter from "./SiteNewsLetter";
import SiteInstagram from "./SiteInstagram";
import Footer from "./Footer";

export default {
  name: "Column",
  components: {
    Header,
    ColumnContent,
    Aside,
    SiteNewsLetter,
    SiteInstagram,
    Footer
  }
};
</script>

<style>
</style>