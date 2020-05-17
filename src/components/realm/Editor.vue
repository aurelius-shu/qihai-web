<template>
  <div class="layout-editor">
    <div class="layout-edit-title">
      <a title="文章管理" class="btn-goback" style="cursor:pointer">
        <svg
          class="bi bi-caret-left"
          width="32px"
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
        <input v-model="message" class="article-title-input" placeholder="输入文章标题" />
      </div>

      <button class="btn btn-outline-dark">保存草稿</button>
      <button class="btn btn-secondary">发布文章</button>
    </div>

    <Markdown style="height: 100%" :input="inputText" @updateText="updateText"></Markdown>
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
      message: "",
      inputText: "# Hello"
    };
  },
  methods: {
    updateText(text) {
      this.inputText = text;
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
