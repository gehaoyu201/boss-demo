<template>
  <div>
    <el-table :data="model">
      <el-table-column prop="name" label="分类名" width="140"></el-table-column>
      <el-table-column prop="icon" label="分类图标" width="140">
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt height="60" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row._id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: []
    };
  },
  components: {},
  methods: {
    async fetch() {
      const res = await this.$http.get("/categories/list");
      this.model = res.data;
    },
    handleEdit(id) {
      this.$router.push(`/categories/edit/${id}`);
    },
    async handleDelete(id) {
      await this.$http.delete(`/categories/remove/${id}`);
      this.$message({
        type: "success",
        message: "删除成功"
      });
      this.fetch();
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style scope>
</style>
