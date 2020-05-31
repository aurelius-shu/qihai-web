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
                >{{new Date(`${article.publish_time}Z`).toLocaleString()}}</time>
              </a> in
              <a href>{{ article.column }}</a>
            </div>
            <a href>
              <h4 class="card-title">{{ article.title }}</h4>
            </a>
          </header>
          <a @click="goArticle(article.id)" href>
            <img class="card-img" :src="baseUrl+article.card" alt />
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
                >{{new Date(`${article.publish_time}Z`).toLocaleString()}}</time>
              </a> in
              <a href>{{ article.column }}</a>
            </div>
            <a href>
              <h4 class="card-title">{{ article.title }}</h4>
            </a>
          </header>
          <a @click="goArticle(article.id)" href>
            <img class="card-img" :src="baseUrl+article.card" alt />
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
      baseUrl: "",
      user: this.$route.params.username,
      column_id: 0,
      articles_left: [],
      articles_right: []
    };
  },
  async mounted() {
    if (this.$route.params.column_id) {
      this.column_id = this.$route.params.column_id;
    }
    this.baseUrl = this.$utils.baseUrl.call(this);
    await this.refreshArticles(1);
  },
  methods: {
    goArticle(article_id) {
      this.$router.push(`/${this.user}/articles/${article_id}`);
    },
    async refreshArticles(page_index) {
      this.$http.defaults.baseURL = this.baseUrl;
      const articlesResult = await this.$http.get(
        `/realm/${this.user}/columns/${this.column_id}/articles/1`
      );
      for (let i = 0; i < articlesResult.data.articles.length; i++) {
        if (i % 2 === 0) {
          this.articles_left.push(articlesResult.data.articles[i]);
        } else {
          this.articles_right.push(articlesResult.data.articles[i]);
        }
      }
    }
  }
};
</script>

<style>
</style>