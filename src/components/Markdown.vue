<template>
  <div id="editor">
    <div class="textarea">
      <textarea :value="input" @input="update"></textarea>
    </div>
    <div class="tool-bar">
      <a title="图片" data-toggle="modal" data-target="#imageModalLong">
        <svg
          class="bi bi-card-image"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
            clip-rule="evenodd"
          />
          <path
            d="M10.648 7.646a.5.5 0 0 1 .577-.093L15.002 9.5V13h-14v-1l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z"
          />
          <path
            fill-rule="evenodd"
            d="M4.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
    <div class="md-html" v-html="compiledMarkdown"></div>
    <ImageModal></ImageModal>
  </div>
</template>

<script>
import lodash from "lodash";
import marked from "marked";
import $ from "jquery";
import ImageModal from "./ImageModal";

export default {
  name: "Markdown",
  props: {
    input: String
  },
  data: function() {
    return {
      inputText: this.input
    };
  },
  components: {
    ImageModal
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.inputText, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.inputText = e.target.value;
      this.$emit("updateText", this.inputText);
    }, 300)
  }
};
</script>

<style>
#editor {
  /* font-family: "Helvetica Neue", Arial, sans-serif; */
  font-family: "Consolas", courier, monospace;
  color: #333;
}

#editor div {
  vertical-align: top;
  box-sizing: border-box;
}

#editor {
  padding: 0;
  position: absolute;
  width: 100%;
  display: flex;
  top: 60px;
  height: 95%;
}

.textarea {
  float: left;
  width: 48%;
  border: none;
  font-size: 13pt;
}

textarea {
  width: 100%;
  height: 100%;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  padding: 20px;
}

#editor .md-html {
  float: right;
  font-size: 13pt;
  width: 48%;
  padding-left: 15px;
}

.tool-bar {
  float: left;
  width: 26px;
  padding-left: 5px;
  cursor: pointer;
}
</style>