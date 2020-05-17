<template>
  <main class="main pt-4">
    <div class="container">
      <div class="row">
        <Article></Article>
        <Aside></Aside>
      </div>
    </div>
  </main>
</template>

<script>
import Article from "./Article";
import Aside from "./Aside";

export default {
  name: "DetailsMain",
  props: {},
  components: {
    Article,
    Aside
  }
};
</script>

<style>
</style>
