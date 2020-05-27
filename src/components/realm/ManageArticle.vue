<template>
  <div>
    <Header></Header>
    <main class="main pt-4">
      <div class="container">
        <article class="card card-outline mb-4">
          <div class="card-body">
            <header>
              <h4 class="card-title">文章管理</h4>
            </header>

            <div>
              <div style="margin-bottom: 16px">
                <a-button
                  type="primary"
                  :disabled="!hasSelected"
                  :loading="loading"
                  @click="start"
                >Reload</a-button>
                <span style="margin-left: 8px">
                  <template v-if="hasSelected">{{ `Selected ${selectedRowKeys.length} items` }}</template>
                </span>
              </div>
              <a-table
                :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                :columns="columns"
                :data-source="data"
              />
            </div>
          </div>
        </article>
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
    dataIndex: "image"
  },
  {
    title: "标题",
    dataIndex: "title"
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

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    image: "",
    title: `Edward King ${i}`,
    category: 32,
    comment: `London, Park Lane no. ${i}`
  });
}

export default {
  name: "ManageArticle",
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
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
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
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