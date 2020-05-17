<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <!-- <div style="width: 26px;"></div> -->
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import lodash from "lodash";
import marked from "marked";

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
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>