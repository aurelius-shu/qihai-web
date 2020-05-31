<template>
  <div>
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
import md5 from "js-md5";

export default {
  name: "Images",
  data() {
    return {
      baseUrl: "",
      uploadImageAction: "",
      upload_info: { upload_user: this.$route.params.username },
      fileList: []
    };
  },
  async mounted() {
    this.baseUrl = this.$utils.baseUrl.call(this);
    this.uploadImageAction = `${this.baseUrl}/realm/${this.upload_info.upload_user}/manage/images`;

    const images = await this.getImages(this.upload_info.upload_user);
    for (let i = 0; i < images.data.length; i++) {
      let image = images.data[i];
      this.fileList.push({
        uid: image.id,
        name: image.filename,
        status: "done",
        url: `${this.baseUrl}${image.image}`,
        thumbUrl: `${this.baseUrl}${image.image}`
      });
    }
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "done") {
        if (!info.file.response.is_succeed) {
          info.fileList.pop();
          this.$utils.showWarningMessage.call(this, info.file.response.message);
        } else {
          this.$utils.showInfoMessage.call(this, info.file.response.message);
        }
      }
      if (info.file.status === "error") {
        this.$utils.showErrorMessage.call(this, info.file.response);
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
      return this.$http.get(`/${username}/manage/images`);
    },
    removeImages(username, image_id) {
      this.$http.defaults.baseURL = `${this.baseUrl}/realm/`;
      return this.$http.get(`/${username}/images/${image_id}/remove`);
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
