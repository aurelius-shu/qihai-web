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
import Article from "./Article.vue";
import Aside from "./Aside.vue";

export default {
  name: "Main",
  props: {},
  components: {
    Article,
    Aside
  }
};
</script>

<style>
</style>
