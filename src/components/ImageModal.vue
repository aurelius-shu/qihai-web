<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModalLong"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">选择图片</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Images></Images>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-outline-dark">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Images from "./Images";

export default {
  name: "ImageModal",
  components: { Images },
  props: {}
};
</script>

<style >
#exampleModalLong {
  border-radius: 4px;
}

.modal-footer .btn {
  font-family: "Consolas", courier, monospace;
  padding-top: 8px;
  border-radius: 4px;
}
</style>