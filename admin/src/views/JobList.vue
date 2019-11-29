<template>
  <div>
    <el-table :data="model">
      <el-table-column prop="name" label="Job名" width="140"></el-table-column>
      <el-table-column prop="company[0].name" label="公司名" width="140"></el-table-column>
      <el-table-column prop="company[0].city" label="公司地点" width="140"></el-table-column>
      <el-table-column prop="icon" label="公司logo" width="140">
        <template slot-scope="scope">
          <img :src="scope.row.company[0].icon" alt height="60" />
        </template>
      </el-table-column>
      <el-table-column prop="school" label="要求学历" width="140"></el-table-column>
      <el-table-column prop="jobTime" label="工作经验" width="140"></el-table-column>
      <el-table-column prop="money" label="薪资" width="140"></el-table-column>
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
      const res = await this.$http.get("/jobs/list");
      this.model = res.data;
    },
    handleEdit(id) {
      this.$router.push(`/jobs/edit/${id}`);
    },
    async handleDelete(id) {
      await this.$http.delete(`/jobs/remove/${id}`);
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
