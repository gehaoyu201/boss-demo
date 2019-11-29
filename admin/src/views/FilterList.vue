<template>
  <div>
    <el-table :data="model">
      <el-table-column prop="name" label="Filter名" width="140"></el-table-column>
      <el-table-column prop="options" label="Filter Options" width="420"></el-table-column>
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
      const res = await this.$http.get("/filters/list");
      this.model = res.data;
    },
    handleEdit(id) {
      this.$router.push(`/filters/edit/${id}`);
    },
    async handleDelete(id) {
      await this.$http.delete(`/filters/remove/${id}`);
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
