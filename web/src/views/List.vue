<template>
  <div class="list-container">
    <div class="search df">
      <img src="../assets/icon-home.png" alt />
      <form action class="df">
        <div class="df">
          <input type="text" v-model="value" style="color:#aeaeae" />
          <span @click="value=''">&times;</span>
        </div>
        <router-link tag="button" :to="`list?wd=${value}`" type="submit">搜索</router-link>
      </form>
    </div>
    <div class="filter df">
      <dl
        :class="{'active':filterIndex===i}"
        @click="filterIndex===i?filterIndex=null : filterIndex=i"
        v-for="(item,i) in filters"
        :key="item._id"
      >
        <dt>{{item.name}}</dt>
        <dd>
          <ul>
            <li
              :class="{'active':index===i}"
              @click="index=i"
              v-for="(n,i) in item.options.toString().split(' ')"
              :key="i"
            >{{item.options.toString().split(" ")[i]}}</li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="job-list df">
      <ul>
        <li v-for="item in jobs" :key="item._id">
          <router-link
            tag="a"
            :to="`/detail/${item._id}`"
            class="job-item df"
            v-for="company in item.company"
            :key="company._id"
          >
            <img :src="company.icon" alt />
            <div class="text">
              <div class="title df">
                {{item.name}}
                <span class="money">{{item.money}}</span>
              </div>
              <div class="company">{{company.name}}</div>
              <div class="props">
                <span>{{company.city}}</span>
                <span>{{item.jobTime}}</span>
                <span>{{item.school}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [],
      index: 0,
      filterIndex: null,
      jobs: [],
      value: this.$route.query.wd
    };
  },
  watch: {
    $route(to) {
      // window.console.log(to);
      // window.console.log(from);
      this.value = to.query.wd;
      this.jobs = [];
      this.fetchJob();
    }
  },
  components: {},
  methods: {
    // refresh() {
    //   this.$router.go(0);
    // },
    async fetchFilter() {
      const res = await this.$http.get("/filters/list");
      this.filters = res.data;
    },
    async fetchJob() {
      const res = await this.$http.get(`/jobs/list`);
      window.console.log(this.$route.query.wd);
      for (let item of res.data) {
        // if (item.name.toUpperCase() == this.$route.query.wd.toUpperCase()) {
        //   this.jobs.push(item);
        //   break;
        // }
        if (
          item.name.toUpperCase().indexOf(this.$route.query.wd.toUpperCase()) !=
          -1
        ) {
          this.jobs.push(item);
        }
      }
    }
  },
  created() {
    this.fetchFilter();
    this.fetchJob();
  }
};
</script>

<style scope>
</style>
