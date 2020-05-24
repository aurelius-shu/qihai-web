<template>
  <div>
    <!-- action="https://www.mocky.io/v2/5cc8019d300000980a055e76" -->

    <a-upload
      :action="uploadImageAction"
      :beforeUpload="beforeUpload"
      :data="upload_info"
      :defaultFileList="fileList"
      :remove="remove"
      @change="handleChange"
      list-type="picture"
    >
      <a-button>
        <a-icon type="upload" />上传图片
      </a-button>
    </a-upload>
    <br />
  </div>
</template>

<script>
import Vue from "vue";
import Upload from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import md5 from "js-md5";

Vue.use(Upload);

export default {
  name: "Images",
  data() {
    return {
      baseUrl: "",
      uploadImageAction: "",
      upload_info: { upload_user: "aurelius" },
      fileList: []
    };
  },
  async beforeMount() {
    this.baseUrl = "http://127.0.0.1:8000";
    this.uploadImageAction = `${this.baseUrl}/realm/${this.upload_info.upload_user}/images/upload`;

    const images = await this.getImages(this.upload_info.upload_user);
    for (let i = 0; i < images.data.length; i++) {
      let image = images.data[i];
      this.fileList.push({
        uid: image.uid,
        name: image.name,
        status: "done",
        url: `${this.baseUrl}${image.url}`,
        thumbUrl: `${this.baseUrl}${image.url}`
      });
    }
  },
  methods: {
    showMessage(type, message, description, duration = 3) {
      this.$notification[type]({
        message: message,
        description: description,
        duration: duration
      });
    },
    handleChange(info) {
      if (info.file.status === "done") {
        if (!info.file.response.is_succeed) {
          info.fileList.pop();
          this.showMessage("warning", "警告", info.file.response.message);
        } else {
          this.showMessage("info", "提示", info.file.response.message);
        }
      }
      if (info.file.status === "error") {
        this.showMessage("error", "错误", info.file.response);
      }
    },
    beforeUpload(file) {
      if (file.size / 1024 / 1024 > 6) {
        alert("图片大小不能超过6MB!");
        return false;
      }
      this.getImageMd5Key(file, resource => {
        this.upload_info.image_md5_key = md5(resource);
      });
      return this.timeout(1000).then(() => true);
    },
    remove(file) {
      this.removeImages(this.upload_info.upload_user, file.uid);
    },
    getImageMd5Key(file, callBack) {
      const reader = new FileReader();
      reader.addEventListener("load", () => callBack(reader.result));
      reader.readAsDataURL(file);
    },
    timeout(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    },
    getImages(username) {
      this.$http.defaults.baseURL = `${this.baseUrl}/realm/`;
      return this.$http.get(`/${username}/images`);
    },
    removeImages(username, uid) {
      this.$http.defaults.baseURL = `${this.baseUrl}/realm/`;
      return this.$http.get(`/${username}/images/remove/${uid}`);
    }
  }
};
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline >>> .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline >>> .ant-upload-animate-enter {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline >>> .ant-upload-animate-leave {
  animation-name: uploadAnimateInlineOut;
}
</style>
