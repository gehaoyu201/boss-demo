<template>
  <div>
    <el-card style="width:400px;height:400px;margin:100px auto;">
      <h3>登陆界面</h3>
      <el-form @submit.native.prevent="login">
        <el-form-item label="username">
          <el-input type="text" v-model.trim="model.username"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input type="password" v-model.trim="model.password"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">Login</el-button>
        <router-link tag="el-button" to="/register">Register</router-link>
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
    async login() {
      if (!this.model.username || !this.model.password) {
        this.$message({
          type: "danger",
          message: "用户名或密码不能为空"
        });
        return false;
      }
      const res = await this.$http.post(
        "http://localhost:3000/login",
        this.model
      );
      if (res.data.status == 418) {
        this.$message({
          type: "danger",
          message: "用户名不存在，请注册"
        });
        this.$router.push("/register");
      } else if (res.data.status == 417) {
        this.$message({
          type: "danger",
          message: "密码错误，请重新输入"
        });
      } else {
        this.$message({
          type: "success",
          message: "登陆成功"
        });
        var obj = {
          username: res.data.username,
          token: res.data.token
        };
        obj = JSON.stringify(obj);
        localStorage.setItem("token", obj);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scope>
</style>
