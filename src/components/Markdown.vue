<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
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
</style>