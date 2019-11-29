<template>
  <div class="detail-container" v-if="model.company">
    <div class="header df">
      <a href>
        <img src="../assets/logo.png" alt />
      </a>
      <form action class="df">
        <input type="text" />
        <i></i>
      </form>
    </div>
    <div class="job-info">
      <div class="job df">
        {{model.name}}
        <div>{{model.money}}</div>
      </div>
      <div class="school">{{model.company[0].city}} | {{model.jobTime}} | {{model.school}}</div>
      <div class="skills">
        <span v-for="item in skills" :key="item._id" style="margin-right:0.4rem;">{{item.name}}</span>
      </div>
      <div class="time">更新于:{{(model.createdAt || "").split("T")[0]}}</div>
    </div>
    <div class="hr-info df">
      <img :src="(model.hr.icon || '')" alt />
      <div class="center">
        <div class="df top">
          <div>{{(model.hr.name || '')}}</div>
          <button type="button">感兴趣</button>
        </div>
        <div>{{model.company[0].name}}·{{(model.hr.work || '')}}</div>
      </div>
      <button type="button">立即沟通</button>
    </div>
    <div class="wrapper">
      <div class="job-description">
        <div class="title">职位描述</div>
        <div class="border"></div>
        <div class="job-text" v-html="model.jobInfo"></div>
      </div>
      <div class="company">
        <div class="title">公司介绍</div>
        <div class="border"></div>
        <div class="company-text">{{model.company[0].info}}</div>
      </div>
      <div class="company-info">
        <div class="title">工商信息</div>
        <div class="border"></div>
        <span style="font-size: 0.9rem;color:#7e8793;">{{model.company.allName}}</span>
        <table>
          <tr>
            <td>法人代表:胡海建</td>
            <td>注册资本:6761.748891万元人民币</td>
          </tr>
          <tr>
            <td>法人代表:胡海建</td>
            <td>注册资本:6761.748891万元人民币</td>
          </tr>
          <tr class="more">
            <td>展开</td>
          </tr>
        </table>
        <div style="margin-bottom: 0;">数据来源：企查查</div>
      </div>
    </div>

    <div class="job-company">
      <div class="title" style="margin-top: 0;">工作地址</div>
      <div class="border"></div>

      <div class="map" style="margin-bottom: 1rem;">
        <div
          style="padding:0.4rem 0;width:90%;margin:0 auto;border:1px solid #ecedef;font-size:0.6rem;color:#62687a;text-indent:1rem;border-bottom:none;background: white;"
        >{{model.company[0].address}}</div>
        <div id="map"></div>
      </div>
      <div class="info df">
        <img :src="model.company[0].image" alt />
        <div style="flex:1;">
          <div class="df">
            <div style="color: #333;font-size: 1rem;margin-bottom: 1rem;">{{model.company[0].name}}</div>
            <button type="button">关注该公司</button>
          </div>
          <div style="font-size:0.6rem;margin-bottom: 0.4rem;">{{model.company[0].allName}}</div>
          <div style="font-size:0.6rem;">
            <span>{{model.company[0].type}}</span>
            <span style="margin:0 0.4rem">{{model.company[0].bank}}</span>
            <span>{{model.company[0].people}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="job-relate">
      <div class="title" style="color:#767f96;font-size:0.8rem;">相似职位</div>
      <div></div>
      <div class="job-item df">
        <ul>
          <li>
            <a href class="df">
              <img
                src="../assets/2d2965d1392c7b201ce1e9e766c3b3f7be1bd4a3bd2a63f070bdbdada9aad826.jpg"
                alt
              />
              <div class="text" style="flex:1;">
                <div class="title df">
                  <div>web前端</div>
                  <div class="money">7-12k</div>
                </div>
                <div class="company df">
                  <div style="font-size: 0.6rem;">美团点评 | 北京</div>
                  <button type="button">立即沟通</button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="job-item df">
        <ul>
          <li>
            <a href class="df">
              <img
                src="../assets/2d2965d1392c7b201ce1e9e766c3b3f7be1bd4a3bd2a63f070bdbdada9aad826.jpg"
                alt
              />
              <div class="text" style="flex:1;">
                <div class="title df">
                  <div>web前端</div>
                  <div class="money">7-12k</div>
                </div>
                <div class="company df">
                  <div style="font-size: 0.6rem;">美团点评 | 北京</div>
                  <button type="button">立即沟通</button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="job-item df">
        <ul>
          <li>
            <a href class="df">
              <img
                src="../assets/2d2965d1392c7b201ce1e9e766c3b3f7be1bd4a3bd2a63f070bdbdada9aad826.jpg"
                alt
              />
              <div class="text" style="flex:1;">
                <div class="title df">
                  <div>web前端</div>
                  <div class="money">7-12k</div>
                </div>
                <div class="company df">
                  <div style="font-size: 0.6rem;">美团点评 | 北京</div>
                  <button type="button">立即沟通</button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="job-item df">
        <ul>
          <li>
            <a href class="df">
              <img
                src="../assets/2d2965d1392c7b201ce1e9e766c3b3f7be1bd4a3bd2a63f070bdbdada9aad826.jpg"
                alt
              />
              <div class="text" style="flex:1;">
                <div class="title df">
                  <div>web前端</div>
                  <div class="money">7-12k</div>
                </div>
                <div class="company df">
                  <div style="font-size: 0.6rem;">美团点评 | 北京</div>
                  <button type="button">立即沟通</button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bread">
      <a href>北京招聘 &gt;</a>
      <a href>移动web前端招聘 &gt;</a>
      <a href>北京移动web前端招聘 &gt;</a>
      <a href>跨越速运web前端招聘</a>
    </div>
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=PeAaIlF9VRgiWwgHeCCHK7w8lMygGPYu"></script>

<script>
export default {
  data() {
    return {
      model: {},
      skills: [],
      i: 0
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(
        `/jobs/${
          (this.$route.path || "").split("/")[
            this.$route.path.split("/").length - 1
          ]
        }`
      );
      this.model = res.data;
      this.fetchSkills();
    },
    initMap() {
      var map = new BMap.Map("map");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      function myFun(result) {
        var cityName = result.name;
        map.setCenter(cityName);
      }
      var myCity = new BMap.LocalCity();
      myCity.get(myFun);
    },
    async fetchSkills() {
      for (var i of this.model.skills) {
        const res = await this.$http.get(`/skills/${i}`);
        this.skills.push(res.data);
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style scope>
</style>
