<template>
  <div class="col-md-9">
    <article class="card mb-4">
      <header class="card-header text-center">
        <div class="card-meta">
          <a>
            <time class="timeago" :datetime="publish_time" timeago-id="1">{{ publish_time }}</time>
          </a> -
          <a>{{ article.column }}</a>
        </div>
        <a>
          <h1 class="card-title">{{ article.title }}</h1>
        </a>
      </header>
      <a>
        <img class="card-img" :src="baseUrl+article.card" alt />
      </a>
      <div class="card-body">
        <div class="md-html" v-html="compiledMarkdown"></div>

        <hr />

        <h3>4 comments</h3>

        <div class="media mb-3">
          <div class="text-center">
            <img
              class="mr-3 rounded-circle"
              src="../../assets/images/avatars/3.png"
              alt="Lucy"
              width="100"
              height="100"
            />
            <h6 class="mt-1 mb-0 mr-3">Lucy</h6>
          </div>
          <div class="media-body">
            <p class="mt-3 mb-2">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
              sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
            <time class="timeago text-muted" datetime="2019-12-03 20:00" timeago-id="2">5 months ago</time>
            <a class="float-right" href="#">
              <svg
                class="svg-inline--fa fa-reply fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fa"
                data-icon="reply"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg
              >
                <path
                  fill="currentColor"
                  d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"
                />
              </svg>
              <!-- <span class="fa fa-reply"></span> -->
              Reply
            </a>

            <div class="media mt-3">
              <div class="pr-3 text-center">
                <img
                  class="mr-3 rounded-circle"
                  src="../../assets/images/avatars/2.png"
                  alt="John"
                  width="100"
                  height="100"
                />
                <h6 class="mt-1 mb-0 mr-3">John</h6>
              </div>
              <div class="media-body">
                <p class="mt-3 mb-2">
                  Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
                <time
                  class="timeago text-muted"
                  datetime="2019-12-14 19:00"
                  timeago-id="3"
                >5 months ago</time>
                <a class="float-right" href="#">
                  <svg
                    class="svg-inline--fa fa-reply fa-w-16"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fa"
                    data-icon="reply"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"
                    />
                  </svg>
                  <!-- <span class="fa fa-reply"></span> -->
                  Reply
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="media mb-3">
          <div class="text-center">
            <img
              class="mr-3 rounded-circle"
              src="../../assets/images/avatars/1.png"
              alt="Kim"
              width="100"
              height="100"
            />
            <h6 class="mt-1 mb-0 mr-3">Kim</h6>
          </div>
          <div class="media-body">
            <p class="mt-3 mb-2">
              Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis
              vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec
              mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis.
            </p>
            <time class="timeago text-muted" datetime="2019-11-20 20:00" timeago-id="4">5 months ago</time>
            <a class="float-right" href="#">
              <svg
                class="svg-inline--fa fa-reply fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fa"
                data-icon="reply"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg
              >
                <path
                  fill="currentColor"
                  d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"
                />
              </svg>
              <!-- <span class="fa fa-reply"></span> -->
              Reply
            </a>
          </div>
        </div>

        <div class="media mb-3">
          <div class="text-center">
            <img
              class="mr-3 rounded-circle"
              src="../../assets/images/avatars/4.png"
              alt="Paula"
              width="100"
              height="100"
            />
            <h6 class="mt-1 mb-0 mr-3">Paula</h6>
          </div>
          <div class="media-body">
            <p class="mt-3 mb-2">
              Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
              iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut,
              mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
            </p>
            <time class="timeago text-muted" datetime="2019-11-05 20:00" timeago-id="5">6 months ago</time>
            <a class="float-right" href="#">
              <svg
                class="svg-inline--fa fa-reply fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fa"
                data-icon="reply"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg
              >
                <path
                  fill="currentColor"
                  d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"
                />
              </svg>
              <!-- <span class="fa fa-reply"></span> -->
              Reply
            </a>
          </div>
        </div>

        <div class="mt-5">
          <h5>Write a response</h5>
          <div class="row">
            <div class="col-md-6">
              <input type="text" class="form-control" id="name" name="name" placeholder="Your name" />
            </div>
            <div class="col-md-6">
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Your email"
              />
            </div>
          </div>
          <textarea class="form-control mt-3" rows="3" placeholder="Write a response.."></textarea>
          <a href="#" class="btn btn-success mt-3">Publish</a>
        </div>
      </div>
    </article>
    <!-- /.card -->
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "ArticleContent",
  data: function() {
    return {
      baseUrl: "",
      user: this.$route.params.username,
      article_id: "0",
      article: {}
    };
  },
  props: {},
  computed: {
    compiledMarkdown: function() {
      if (this.article.content) {
        return marked(this.article.content);
      }
    },
    publish_time: function() {
      return new Date(`${this.article.publish_time}Z`).toLocaleString();
    }
  },
  async mounted() {
    this.baseUrl = this.$utils.baseUrl.call(this);
    if (this.$route.params.article_id) {
      this.article_id = this.$route.params.article_id;
    }

    await this.refresh_articles();
  },
  methods: {
    async refresh_articles() {
      this.$http.defaults.baseURL = this.baseUrl;
      const articleDetail = await this.$http.get(
        `${this.baseUrl}/realm/${this.user}/articles/${this.article_id}`
      );
      this.article = articleDetail.data;
    }
  }
};
</script>

<style>
</style>
