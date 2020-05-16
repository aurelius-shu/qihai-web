<template>
  <div>
    <input v-model="message" placeholder="Ariticle Title" />
    <Markdown :input="inputText" @updateText="updateText"></Markdown>
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
</style>
