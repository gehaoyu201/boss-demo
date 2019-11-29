<template>
  <div>
    <h3>{{id?"编辑":"新建"}}skill</h3>
    <el-form @submit.native.prevent="save">
      <el-form-item label="skill名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-select v-model="model.category">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
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
      model: {
        category: { required: true }
      },
      categories: []
    };
  },
  watch: {
    $route() {
      this.model = {
        category: { required: true }
      };
    }
  },
  components: {},
  methods: {
    async save() {
      if (!this.id) {
        await this.$http.post("/skills/new", this.model);
        this.model = {};
        this.$message({
          type: "success",
          message: "新建成功"
        });
      } else {
        await this.$http.put(`/skills/${this.id}`, this.model);
        this.$message({
          type: "success",
          message: "编辑成功"
        });
        this.$router.push("/skills/list");
      }
    },
    async fetchCategories() {
      const res = await this.$http.get("/categories/list");
      this.categories = res.data;
    },
    async fetch() {
      const res = await this.$http.get(`/skills/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetchCategories();
    if (this.id) {
      this.fetch();
    }
  }
};
</script>

<style scope>
</style>
