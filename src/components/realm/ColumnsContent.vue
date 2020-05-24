<template>
  <div class="col-md-9">
    <div class="row">
      <div class="col-md-6">
        <article class="card mb-4">
          <header class="card-header">
            <div class="card-meta">
              <a href="#">
                <time class="timeago" datetime="2019-10-26 20:00" timeago-id="1">6 months ago</time>
              </a> in
              <a href="page-category.html">Journey</a>
            </div>
            <a href="post-image.html">
              <h4 class="card-title">How can we sing about love?</h4>
            </a>
          </header>
          <a @click="detail" href="">
            <img class="card-img" src="../../assets/images/articles/22.jpg" alt />
          </a>
          <div class="card-body">
            <p
              class="card-text"
            >Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
        </article>
        <!-- /.card -->

        <article class="card mb-4">
          <header class="card-header">
            <div class="card-meta">
              <a href="#">
                <time class="timeago" datetime="2019-10-03 20:00" timeago-id="2">7 months ago</time>
              </a> in
              <a href="page-category.html">Lifestyle</a>
            </div>
            <a href="post-image.html">
              <h4 class="card-title">Oh, I guess they have the blues</h4>
            </a>
          </header>
          <a href="post-image.html">
            <img class="card-img" src="../../assets/images/articles/18.jpg" alt />
          </a>
          <div class="card-body">
            <p
              class="card-text"
            >Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
        </article>
        <!-- /.card -->

        <article class="card mb-4">
          <header class="card-header">
            <div class="card-meta">
              <a href="#">
                <time class="timeago" datetime="2019-07-16 20:00" timeago-id="3">10 months ago</time>
              </a> in
              <a href="page-category.html">Work</a>
            </div>
            <a href="post-image.html">
              <h4 class="card-title">How can we, how can we sing about ourselves?</h4>
            </a>
          </header>
          <a href="post-image.html">
            <img class="card-img" src="../../assets/images/articles/12.jpg" alt />
          </a>
          <div class="card-body">
            <p
              class="card-text"
            >Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
        </article>
        <!-- /.card -->
      </div>
      <div class="col-md-6">
        <article class="card mb-4">
          <header class="card-header">
            <div class="card-meta">
              <a href="#">
                <time class="timeago" datetime="2019-10-15 20:00" timeago-id="4">7 months ago</time>
              </a> in
              <a href="page-category.html">Lifestyle</a>
            </div>
            <a href="post-image.html">
              <h4 class="card-title">The king is made of paper</h4>
            </a>
          </header>
          <a href="post-image.html">
            <img class="card-img" src="../../assets/images/articles/5.jpg" alt />
          </a>
          <div class="card-body">
            <p
              class="card-text"
            >Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
        </article>
        <!-- /.card -->

        <article class="card mb-4">
          <header class="card-header">
            <div class="card-meta">
              <a href="#">
                <time class="timeago" datetime="2019-08-24 20:00" timeago-id="5">8 months ago</time>
              </a> in
              <a href="page-category.html">Work</a>
            </div>
            <a href="post-image.html">
              <h4 class="card-title">Crying on the news</h4>
            </a>
          </header>
          <a href="post-image.html">
            <img class="card-img" src="../../assets/images/articles/13.jpg" alt />
          </a>
          <div class="card-body">
            <p
              class="card-text"
            >Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
        </article>
        <!-- /.card -->

        <article class="card mb-4">
          <header class="card-header">
            <div class="card-meta">
              <a href="#">
                <time class="timeago" datetime="2019-05-08 20:00" timeago-id="6">1 year ago</time>
              </a> in
              <a href="page-category.html">Journey</a>
            </div>
            <a href="post-image.html">
              <h4 class="card-title">How can you not sing about love?</h4>
            </a>
          </header>
          <a href="post-image.html">
            <img class="card-img" src="../../assets/images/articles/1.jpg" alt />
          </a>
          <div class="card-body">
            <p
              class="card-text"
            >Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
        </article>
        <!-- /.card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColumnsContent",
  props: {},
  methods: {
    detail() {
      this.$router.push("/detail/1");
    }
  }
};
</script>

<style>
</style>