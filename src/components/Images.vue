<template>
  <div>
    <!-- action="https://www.mocky.io/v2/5cc8019d300000980a055e76" -->
    <a-upload
      :action="uploadImageAction"
      list-type="picture"
      :default-file-list="fileList"
      @change="handleUploadChange"
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

Vue.use(Upload);

export default {
  name: "Images",
  data() {
    return {
      uploadImageAction: "http://127.0.0.1:8000/realm/upload/image",
      fileList: []
    };
  },
  beforeMount() {
    this.fileList = [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      },
      {
        uid: "-2",
        name: "yyy.png",
        status: "done",
        url:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      }
    ];
  },
  mounted() {
    // this.$http.defaults.baseURL = "http://127.0.0.1:8000/realm/";
  },
  methods: {
    handleUploadChange(info) {
      if (info.file.status === "uploading") {
        return;
      }
      if (info.file.status === "done") {
      }
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
