<template>
  <div>
    <h3>{{id?"编辑":"新建"}}分类</h3>
    <el-form @submit.native.prevent="save">
      <el-form-item label="分类名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="分类图标">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      model: {}
    };
  },
  watch: {
    $route() {
      this.model = {};
    }
  },
  components: {},
  methods: {
    handleAvatarSuccess(res) {
      this.$set(this.model, "icon", res.url);
    },
    async save() {
      if (!this.id) {
        await this.$http.post("/categories/new", this.model);
        this.model = {};
        this.$message({
          type: "success",
          message: "新建分类成功"
        });
      } else {
        await this.$http.put(`/categories/${this.id}`, this.model);
        this.$message({
          type: "success",
          message: "编辑分类成功"
        });
        this.$router.push("/categories/list");
      }
    },
    async fetch() {
      const res = await this.$http.get(`/categories/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    if (this.id) {
      this.fetch();
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
