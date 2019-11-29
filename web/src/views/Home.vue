<template>
  <div class="home-container" id="app">
    <div class="banner">
      <img src="../assets/home-search-text.png" alt />
      <div class="search">
        <form action>
          <input type="text" placeholder="搜索职位/公司" v-model="value" />
          <router-link tag="button" :to="`list?wd=${value}`" type="submit">搜索</router-link>
        </form>
      </div>
    </div>
    <div class="main">
      <div class="category">
        <dl v-for="item in categories" :key="item._id">
          <dt>
            <img :src="item.icon" alt />
            <div>{{item.name}}</div>
          </dt>
          <dd>
            <a
              href="#"
              v-for="skill in skills"
              v-show="skill.category.name == item.name"
              :key="skill._id"
              style="font-size:0.6rem"
            >{{skill.name}}</a>
          </dd>
        </dl>
      </div>
    </div>
    <div class="footer">
      <p>违法和不良信息举报邮箱：jubao@kanzhun.com</p>
      <p>企业服务热线和举报投诉：400 065 5799</p>
      <p>
        <a href="#">人力资源服务许可证</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      skills: [],
      value: ""
    };
  },
  components: {},
  methods: {
    async fetch() {
      const resCat = await this.$http.get("/categories/list");
      const resSkill = await this.$http.get("/skills/list");
      this.categories = resCat.data;
      this.skills = resSkill.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>
