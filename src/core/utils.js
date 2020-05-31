"use strict";

const utils = {
  baseUrl() {
    return "http://localhost:8000";
  }, router_push(path) {
    if (this.$route.path != path) {
      this.$router.push(path);
    }
  },
  showMessage(type, message, description, duration) {
    this.$notification[type]({
      message: message,
      description: description,
      duration: duration,
    });
    console.log(`${type}${message}${description}${duration}`);
  },
  showSuccessMessage(description, duration = 3) {
    this.$utils.showMessage.call(this, "success", "成功", description, duration);
  },
  showInfoMessage(description, duration = 3) {
    this.$utils.showMessage.call(this, "info", "提示", description, duration);
  },
  showWarningMessage(description, duration = 3) {
    this.$utils.showMessage.call(this, "warning", "警告", description, duration);
  },
  showErrorMessage(description, duration = 3) {
    this.$utils.showMessage.call(this, "error", "错误", description, duration);
  },

};

export default utils;
