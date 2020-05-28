<template>
  <div>
    <Header></Header>
    <main class="main pt-4">
      <div class="container">
        <div class="card-body">
          <header>
            <h4 class="card-title">文章管理</h4>
          </header>

          <div>
            <div style="margin-bottom: 16px">
              <a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">发布</a-button>
              <span style="margin-left: 8px">
                <template v-if="hasSelected">{{ `Selected ${selectedRowKeys.length} items` }}</template>
              </span>
            </div>
            <a-table
              :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
              :columns="columns"
              :data-source="data"
            >
              <a-avatar slot="avatar" slot-scope="text" :src="text"></a-avatar>
              <a
                slot="name"
                slot-scope="text, record"
                @click="goArticle(record.key)"
                href
              >{{ text }}</a>
            </a-table>
          </div>
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
import SiteNewsLetter from "./SiteNewsLetter";
import SiteInstagram from "./SiteInstagram";
import Footer from "./Footer";

const columns = [
  {
    title: "",
    dataIndex: "avatar",
    scopedSlots: {
      customRender: "avatar"
    }
  },
  {
    title: "标题",
    dataIndex: "title",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "分类",
    dataIndex: "category"
  },
  {
    title: "简介",
    dataIndex: "comment"
  },
  {
    title: "更新时间",
    dataIndex: "update_time"
  },
  {
    title: "发布时间",
    dataIndex: "publish_time"
  }
];

export default {
  name: "ManageArticle",
  data() {
    return {
      baseUrl: "",
      user: this.$route.params.username,
      data: [],
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
  },
  async mounted() {
    this.baseUrl = "http://localhost:8000";
    this.$http.defaults.baseURL = this.baseUrl;
    const articlesResult = await this.$http.get(
      `/realm/${this.user}/articles/0`
    );
    for (let i = 0; i < articlesResult.data.length; i++) {
      this.data.push({
        key: articlesResult.data[i].id,
        avatar: `${this.baseUrl}${articlesResult.data[i].image}`,
        title: articlesResult.data[i].title,
        category: articlesResult.data[i].column,
        comment: articlesResult.data[i].comment,
        update_time: articlesResult.data[i].update_time,
        publish_time: articlesResult.data[i].publish_time
      });
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      // console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    goArticle(article_id) {
      this.$router.push(`/${this.user}/editor/${article_id}`);
    }
  },
  components: {
    Header,
    SiteNewsLetter,
    SiteInstagram,
    Footer
  }
};
</script>

<style>
</style>