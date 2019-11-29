<template>
  <div v-if="model.hr">
    <h3>{{id?"编辑":"新建"}}Job</h3>
    <el-form @submit.native.prevent="save">
      <el-form-item label="发布人名字">
        <el-input v-model="model.hr.name"></el-input>
      </el-form-item>
      <el-form-item label="发布人照片">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/upload"
          :show-file-list="false"
          :on-success="handleHrSuccess"
        >
          <img v-if="model.hr.icon" :src="model.hr.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="发布人所任职位">
        <el-input v-model="model.hr.work"></el-input>
      </el-form-item>
      <el-form-item label="发布Job名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="要求学历">
        <el-input v-model="model.school"></el-input>
      </el-form-item>
      <el-form-item label="工作经验">
        <el-input v-model="model.jobTime"></el-input>
      </el-form-item>
      <el-form-item label="薪资">
        <el-input v-model="model.money"></el-input>
      </el-form-item>
      <el-form-item label="需会技能">
        <el-select v-model="model.skills" multiple>
          <el-option v-for="item in skills" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="job详细要求">
        <el-input type="textarea" v-model="model.jobInfo"></el-input>
      </el-form-item>
      <el-form-item label="公司名">
        <el-input v-model="model.company[i].name" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司全称">
        <el-input v-model="model.company[i].allName" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司经营类型">
        <el-input v-model="model.company[i].type" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司规模">
        <el-input v-model="model.company[i].people" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司融资情况">
        <el-input v-model="model.company[i].bank" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司所在城市">
        <el-input v-model="model.company[i].city" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司详细地址">
        <el-input v-model="model.company[i].address" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司详细信息">
        <el-input type="textarea" v-model="model.company[i].info" v-for="(n,i) in 1" :key="i"></el-input>
      </el-form-item>
      <el-form-item label="公司logo">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="model.company[0].icon" :src="model.company[0].icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="公司图片">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/upload"
          :show-file-list="false"
          :on-success="handleImageSuccess"
        >
          <img v-if="model.company[0].image" :src="model.company[0].image" class="avatar" />
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
      model: {
        company: [
          {
            name: "",
            city: "",
            icon: ""
          }
        ],
        hr: {}
      },
      options: "",
      name: "",
      city: "",
      skills: []
    };
  },
  components: {},
  watch: {
    $route: function() {
      this.model = {
        company: [
          {
            name: "",
            city: "",
            icon: ""
          }
        ],
        hr: {}
      };
    }
  },
  methods: {
    async save() {
      if (!this.id) {
        await this.$http.post("/jobs/new", this.model);
        this.model = {};
        this.$message({
          type: "success",
          message: "新建成功"
        });
        this.$router.push("/jobs/list");
      } else {
        await this.$http.put(`/jobs/${this.id}`, this.model);
        this.$message({
          type: "success",
          message: "编辑成功"
        });
        this.$router.push("/jobs/list");
      }
    },
    async fetch() {
      const res = await this.$http.get(`/jobs/${this.id}`);
      this.model = res.data;
    },
    handleAvatarSuccess(res) {
      this.$set(this.model.company[0], "icon", res.url);
    },
    handleImageSuccess(res) {
      this.$set(this.model.company[0], "image", res.url);
    },
    handleHrSuccess(res) {
      this.$set(this.model.hr, "icon", res.url);
    },
    async fetchSkills() {
      const res = await this.$http.get("/skills/list");
      this.skills = res.data;
    }
  },
  created() {
    if (this.id) {
      this.fetch();
    }
    this.fetchSkills();
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
