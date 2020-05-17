<template>
  <main class="main pt-4">
    <div class="container">
      <div class="row">
        <ColumnsContent></ColumnsContent>
        <Aside></Aside>
      </div>
    </div>
  </main>
</template>

<script>
import ColumnsContent from "./ColumnsContent";
import Aside from "./Aside";

export default {
  name: "ColumnsMain",
  components: {
    ColumnsContent,
    Aside
  }
};
</script>

<style>
</style>