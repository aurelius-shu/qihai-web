<template>
  <div class="layout-editor">
    <div class="layout-edit-title">
      <a class="btn-goback" @click="manage_articles" title="文章管理">
        <svg
          class="bi bi-caret-left"
          width="26px"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <div class="article-title-input-box">
        <input v-model="article.title" class="article-title-input" placeholder="输入文章标题" />
      </div>

      <button class="btn btn-outline-dark" @click="saveArticle">保存草稿</button>
      <button class="btn btn-secondary" @click="publishArticle">发布文章</button>
    </div>

    <Markdown :input="article.content" @updateText="updateText"></Markdown>
  </div>
</template>

<script>
import Markdown from "../Markdown";
export default {
  name: "Editor",
  components: {
    Markdown
  },
  data: function() {
    return {
      baseUrl: "",
      user: this.$route.params.username,
      article_id: 0,
      article: {
        title: "",
        content: "# Hello",
        card: ""
      }
    };
  },
  async mounted() {
    this.baseUrl = this.$utils.baseUrl.call(this);
    if (this.$route.params.article_id) {
      this.article_id = this.$route.params.article_id;
    }

    if (this.article_id != 0) {
      await this.init_article(this.article_id);
    }

    // this.image_md5_key = "73831253f3d3521659d137b818535d1b";
  },
  methods: {
    updateText(text) {
      this.article.content = text;
    },
    manage_articles() {
      this.$utils.router_push.call(this, `/${this.user}/manage/articles`);
    },
    async init_article(article_id) {
      this.$http.defaults.baseURL = this.baseUrl;
      const articleDetail = await this.$http.get(
        `${this.baseUrl}/realm/${this.user}/articles/${this.article_id}`
      );
      this.article = articleDetail.data;
    },
    async saveArticle() {
      this.$http.defaults.baseURL = this.baseUrl;
      const saveResult = await this.$http.post(
        `/realm/${this.user}/manage/articles`,
        article
      );
      if (saveResult.data) {
        this.$utils.showSuccessMessage.call(this, saveResult.data);
        this.article_id = saveResult.data.article_id;
        this.article.id = saveResult.data.article_id;
      } else {
        this.$utils.showErrorMessage.call(this, saveResult.data);
      }
    },
    async publishArticle() {
      // 发布时，先保存文章
      await this.saveArticle();

      this.$http.defaults.baseURL = this.baseUrl;
      const publishResult = await this.$http.get(
        `/realm/${this.user}/manage/articles/${this.article_id}/publish`
      );
      if (publishResult.data) {
        this.$utils.showSuccessMessage.call(this, publishResult.data);
        this.$utils.router_push.call(this, `/${this.user}/columns/0`);
      } else {
        this.$utils.showErrorMessage.call(this, publishResult.data);
      }
    }
  }
};
</script>

<style>
.layout-editor {
  display: flex;
  flex-direction: column;
}

.layout-edit-title {
  height: 56px;
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
}

.btn-goback {
  margin-left: 10px;
  cursor: pointer;
}

.article-title-input-box {
  height: 42px;
  padding-left: 24px;
  box-sizing: border-box;
  width: 100%;
  margin: 8px 16px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

.article-title-input {
  height: 36px;
  border: 0;
  outline: none;
  padding: 3px 12px;
  background-color: rgba(0, 0, 0, 0);
}

.layout-edit-title .btn {
  height: 36px;
  white-space: nowrap;
  border-radius: 4px;
  margin-right: 16px;
}

input {
  width: 100%;
}
</style>
