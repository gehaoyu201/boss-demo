<template>
  <div>
    <h3>{{id?"编辑":"新建"}}Filter</h3>
    <el-form @submit.native.prevent="save">
      <el-form-item label="Filter名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="Filter属性(中间请用“空格”隔开)">
        <el-input v-model="model.options"></el-input>
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
      model: {},
      options: ""
    };
  },
  components: {},
  watch: {
    $route() {
      this.model = {};
    }
  },
  methods: {
    async save() {
      if (!this.id) {
        await this.$http.post("/filters/new", this.model);
        this.model = {};
        this.$message({
          type: "success",
          message: "新建Filter成功"
        });
      } else {
        await this.$http.put(`/filters/${this.id}`, this.model);
        this.$message({
          type: "success",
          message: "编辑Filter成功"
        });
        this.$router.push("/filters/list");
      }
    },
    async fetch() {
      const res = await this.$http.get(`/filters/${this.id}`);
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

