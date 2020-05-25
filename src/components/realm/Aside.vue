<template>
  <div class="col-md-3 ml-auto">
    <aside class="sidebar">
      <div class="card mb-4">
        <div class="card-body">
          <h4 class="card-title">About</h4>
          <p class="card-text">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
            <a href="#">
              semper
              libero
            </a>, sit amet adipiscing sem neque sed ipsum.
          </p>
        </div>
      </div>
      <!-- /.card -->
    </aside>

    <aside class="sidebar sidebar-sticky">
      <div class="card mb-4">
        <div class="card-body">
          <h4 class="card-title">专栏</h4>
          <a
            class="btn btn-light btn-sm mb-1"
            v-for="column in columns"
            :key="column.id"
            @click="goColumn(column.id)"
          >{{ column.name }}</a>
        </div>
      </div>
      <!-- /.card -->
      <div class="card mb-4">
        <div class="card-body">
          <h4 class="card-title">Popular stories</h4>

          <a href="post-image.html" class="d-inline-block">
            <h4 class="h6">The blind man</h4>
            <img class="card-img" src="../../assets/images/articles/2.jpg" alt />
          </a>
          <time class="timeago" datetime="2019-10-03 20:00" timeago-id="6">7 months ago</time>
          in Lifestyle
          <a href="post-image.html" class="d-inline-block mt-3">
            <h4 class="h6">Crying on the news</h4>
            <img class="card-img" src="../../assets/images/articles/3.jpg" alt />
          </a>
          <time class="timeago" datetime="2019-07-16 20:00" timeago-id="7">10 months ago</time>
          in Work
        </div>
      </div>
      <!-- /.card -->
    </aside>
  </div>
</template>

<script>
export default {
  name: "Aside",
  props: {},
  data: function() {
    return {
      baseUrl: "",
      user: "aurelius",
      columns: []
    };
  },
  async beforeMount() {
    this.baseUrl = "http://127.0.0.1:8000";

    this.$http.defaults.baseURL = this.baseUrl;
    const columnsResult = await this.$http.get("/realm/columns");
    this.columns = columnsResult.data;
  },
  methods: {
    goColumn(key) {
      console.log(key);
    }
  }
};
</script>

<style>
</style>
