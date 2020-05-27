<template>
  <div class="col-md-9">
    <div class="row">
      <div class="col-md-6">
        <article class="card mb-4" v-for="article in articles_left" :key="article.id">
          <header class="card-header">
            <div class="card-meta">
              <a href>
                <time
                  class="timeago"
                  :datetime="article.publish_time"
                  :timeago-id="article.id"
                >6 months ago</time>
              </a> in
              <a href>{{ article.column }}</a>
            </div>
            <a href>
              <h4 class="card-title">{{ article.title }}</h4>
            </a>
          </header>
          <a @click="goArticle(article.id)" href>
            <img class="card-img" :src="baseUrl+article.image" alt />
          </a>
          <div class="card-body">
            <p class="card-text">{{ article.comment }}</p>
          </div>
        </article>
      </div>
      <div class="col-md-6">
        <article class="card mb-4" v-for="article in articles_right" :key="article.id">
          <header class="card-header">
            <div class="card-meta">
              <a href>
                <time
                  class="timeago"
                  :datetime="article.publish_time"
                  :timeago-id="article.id"
                >6 months ago</time>
              </a> in
              <a href>{{ article.column }}</a>
            </div>
            <a href>
              <h4 class="card-title">{{ article.title }}</h4>
            </a>
          </header>
          <a @click="goArticle(article.id)" href>
            <img class="card-img" :src="baseUrl+article.image" alt />
          </a>
          <div class="card-body">
            <p class="card-text">{{ article.comment }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColumnContent",
  props: {},
  data: function() {
    return {
      baseUrl: "http://localhost:8000",
      user: this.$route.params.username,
      cid:
        typeof this.$route.params.cid == "undefined" ||
        this.$route.params.cid === null
          ? 0
          : this.$route.params.cid,
      imageUrl: "",
      articles_left: [],
      articles_right: []
    };
  },
  async beforeMount() {
    this.$http.defaults.baseURL = this.baseUrl;
    const articlesResult = await this.$http.get(
      `/realm/${this.user}/articles/${this.cid}`
    );
    for (let i = 0; i < articlesResult.data.length; i++) {
      if (i % 2 === 0) {
        this.articles_left.push(articlesResult.data[i]);
      } else {
        this.articles_right.push(articlesResult.data[i]);
      }
    }
  },
  methods: {
    goArticle(aid) {
      this.$router.push(`/${this.user}/article/${aid}`);
    }
  }
};
</script>

<style>
</style>