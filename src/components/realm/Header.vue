<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-white absolute-top">
      <div class="container">
        <button
          class="navbar-toggler order-2 order-md-1"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbar-left navbar-right"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse order-3 order-md-2" id="navbar-left">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >专栏</a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a
                  class="dropdown-item"
                  v-for="column in columns"
                  @click="goColumn(column.id)"
                  :key="column.id"
                >{{ column.name }}</a>
              </div>
            </li>
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown02"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >后台</a>
              <div class="dropdown-menu" aria-labelledby="dropdown02">
                <a class="dropdown-item" @click="manage_articles">管理文章</a>
                <a class="dropdown-item" @click="edit(0)">编辑文章</a>
                <a class="dropdown-item" href="post-image.html">Image</a>
                <a class="dropdown-item" href="post-video.html">Video</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown03"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Components</a>
              <div class="dropdown-menu" aria-labelledby="dropdown03">
                <a class="dropdown-item" href="doc-alerts.html">Alerts</a>
                <a class="dropdown-item" href="doc-buttons.html">Buttons</a>
                <a class="dropdown-item" href="doc-cards.html">Cards</a>
                <a class="dropdown-item" href="doc-forms.html">Forms</a>
                <a class="dropdown-item" href="doc-icons.html">Icons</a>
                <a class="dropdown-item" href="doc-pagination.html">Pagination</a>
                <a class="dropdown-item" href="doc-tables.html">Tables</a>
                <a class="dropdown-item" href="doc-typography.html">Typography</a>
              </div>
            </li>
          </ul>
        </div>

        <a class="navbar-brand mx-auto order-1 order-md-3" href="index.html">ThreeFish</a>

        <div class="collapse navbar-collapse order-4 order-md-4" id="navbar-right">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="page-about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="page-contact.html">Contact</a>
            </li>
          </ul>
          <form class="form-inline" role="search">
            <input
              class="search js-search form-control form-control-rounded mr-sm-2"
              type="text"
              title="Enter search query here.."
              placeholder="Search.."
              aria-label="Search"
            />
          </form>
          <a-avatar :src="avatar" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  // props: {
  // 	msg: String
  // },
  data: function() {
    return {
      baseUrl: "",
      user: this.$route.params.username,
      avatar: "",
      columns: []
    };
  },
  async beforeMount() {
    this.baseUrl = "http://localhost:8000";
    this.avatar = `${this.baseUrl}/media/realm/2d8bd71b96612e7caf4ee4d79a474b39.png`;
    this.$http.defaults.baseURL = this.baseUrl;
    const columnsResult = await this.$http.get(`/realm/${this.user}/columns`);
    this.columns = columnsResult.data;
  },
  methods: {
    manage_articles() {
      this.$router.push(`/${this.user}/article/manage`);
    },
    edit(aid) {
      this.$router.push(`/${this.user}/editor/${aid}`);
    },
    goColumn(cid) {
      this.$router.push(`/${this.user}/column/${cid}`);
    }
  }
};
</script>

<style></style>
