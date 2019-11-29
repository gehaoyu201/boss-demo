<template>
  <div>
    <el-card style="width:400px;height:400px;margin:100px auto;">
      <h3>注册界面</h3>
      <el-form @submit.native.prevent="register">
        <el-form-item label="username">
          <el-input type="text" v-model.trim="model.username"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input type="password" v-model.trim="model.password"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">Register</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  components: {},
  methods: {
    async register() {
      if (!this.model.username || !this.model.password) {
        this.$message({
          type: "danger",
          message: "用户名或密码不能为空"
        });
        return false;
      }
      var patrn = /^(\w){6,20}$/;
      if (!patrn.exec(this.model.password)) {
        this.$message({
          type: "danger",
          message: "只能输入6-20个字母、数字、下划线"
        });
        return false;
      }
      const res = await this.$http.post(
        "http://localhost:3000/register",
        this.model
      );
      if (res.data.status != 418 && res.data.status != 416) {
        this.$message({
          type: "success",
          message: "注册成功"
        });
        this.$router.push("/login");
      } else if (res.data.status == 416) {
        this.$message({
          type: "danger",
          message: "用户名已存在"
        });
      } else {
        this.$message({
          type: "danger",
          message: "注册失败"
        });
      }
    }
  }
};
</script>

<style scope>
</style>
