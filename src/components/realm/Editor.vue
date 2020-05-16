<template>
  <Markdown :input="inputText" @updateText="updateText"></Markdown>
</template>

<script>
import Markdown from "./components/Markdown.vue";
export default {
  data: function() {
    return {
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
</style>
