<template>
  <div id="columns">
    <Header></Header>
    <main class="main pt-4">
      <div class="container">
        <div class="row">
          <ColumnsContent></ColumnsContent>
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
import ColumnsContent from "./ColumnsContent";
import Aside from "./Aside";
import SiteNewsLetter from "./SiteNewsLetter";
import SiteInstagram from "./SiteInstagram";
import Footer from "./Footer";

export default {
  name: "Columns",
  components: {
    Header,
    ColumnsContent,
    Aside,
    SiteNewsLetter,
    SiteInstagram,
    Footer
  }
};
</script>

<style>
</style>