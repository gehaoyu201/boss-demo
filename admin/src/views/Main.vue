<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">Home</template>
            <el-menu-item index="/categories/new">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">Skill</template>
            <el-menu-item index="/skills/new">新建Skill</el-menu-item>
            <el-menu-item index="/skills/list">Skill列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">Filter</template>
            <el-menu-item index="/filters/new">新建Filter</el-menu-item>
            <el-menu-item index="/filters/list">Filter列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">Job</template>
            <el-menu-item index="/jobs/new">新建Job</el-menu-item>
            <el-menu-item index="/jobs/list">Job列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{username}}</span>
      </el-header>

      <el-main>
        <router-view :key="$router.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      username: JSON.parse(localStorage.token).username
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "logout") {
        localStorage.token = "";
        this.$router.push("/login");
      }
    }
  }
  // watch: {
  //   $route(to) {
  //     window.console.log(to);
  //   }
  // }
};
</script>