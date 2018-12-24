<template>
  <div class="content">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading_circle_40b82ef.gif" alt>
    </div>
    <div v-else>
      <div class="panel">
        <div class="header">
          <ul class="breadcrumb">
            <li>{{userinfo.loginname}}</li>
          </ul>
        </div>
        <div class="inner userinfo">
          <div class="user_big_avatar">
            <img :src="userinfo.avatar_url" class="user_avatar" :title="userinfo.loginname">
          </div>
          <a class="dark">{{userinfo.loginname}}</a>
          <div class="user_profile">
            <ul class="unstyled">
              <span class="big">{{userinfo.score}}</span>
              积分
            </ul>
          </div>
          <p class="col_fade">注册时间 {{userinfo.create_at | formatDate}}</p>
        </div>
      </div>

      <div class="panel">
        <div class="header">
          <span class="col_fade">最近创建的话题</span>
        </div>
        <div class="cell" v-for="item in userinfo.recent_topics" :key="item.id">
          <div class="cellleft">
            <a class="user_avatar pull-left" :href="item.author.loginname">
              <img :src="item.author.avatar_url" :title="item.author.loginname">
            </a>
            <router-link
              :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}"
              class="topic_title"
              :title="item.title"
            >{{item.title}}</router-link>
          </div>
          <router-link
            :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}"
            class="last_time pull-right"
            :title="item.title"
          >
            <span class="last_active_time">{{item.last_reply_at | formatDate}}</span>
          </router-link>
        </div>

        <div class="cell more">
          <a class="dark" href="/user/lovevfp/topics">查看更多»</a>
        </div>
      </div>

      <div class="panel">
        <div class="header">
          <span class="col_fade">最近参与的话题</span>
        </div>
        <div class="cell" v-for="item in userinfo.recent_replies" :key="item.id">
          <div class="cellleft">
            <a class="user_avatar pull-left" :href="item.author.loginname">
              <img :src="item.author.avatar_url" :title="item.author.loginname">
            </a>
            <router-link
              :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}"
              class="topic_title"
              :title="item.title"
            >{{item.title}}</router-link>
          </div>
          <router-link
            :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}"
            class="last_time pull-right"
            :title="item.title"
          >
            <span class="last_active_time">{{item.last_reply_at | formatDate}}</span>
          </router-link>
        </div>
        <div class="cell more">
          <a class="dark" href="/user/lovevfp/replies">查看更多»</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      isLoading: false,
      userinfo: {}
    };
  },
  methods: {
    getUserData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          console.log(res.data.data);
          this.isLoading = false;
          this.userinfo = res.data.data;
        })
        .catch(error => {});
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getUserData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel {
  margin-bottom: 13px;
}
.panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.breadcrumb,
.typeahead {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
}
.breadcrumb {
  padding: 8px 15px;
  margin: 0 0 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb,
.pagination ul,
.span-common {
  box-shadow: none;
}
.breadcrumb {
  padding: 0;
  margin: 0;
  border: none;
  background: 0 0;
}
.breadcrumb > li {
  display: inline-block;
  text-shadow: 0 1px 0 #fff;
}
.breadcrumb > li,
.navbar .brand {
  text-shadow: none;
}
.breadcrumb a {
  color: #80bd01;
}
.breadcrumb > li > .divider {
  padding: 0 5px;
  color: #ccc;
}
.panel .inner,
.panel .inner li {
  line-height: 2em;
}
.panel .header.topic_header,
.panel .inner {
  background-color: #fff;
}
.panel .inner {
  padding: 10px;
  border-radius: 0 0 3px 3px;
}
.panel .inner.post,
.panel .inner.reply,
.panel .inner.topic,
.panel .inner.userinfo {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}
.user_big_avatar {
  float: left;
  margin-right: 10px;
}
.user_avatar img,
.user_big_avatar img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.user_big_avatar img {
  width: 40px;
  height: 40px;
}
a.dark,
a.dark:active,
a.dark:link,
a.dark:visited {
  color: #666;
  text-decoration: none;
}
.panel .inner a {
  color: #778087;
}
.user_profile {
  margin-top: 20px;
  clear: left;
}
ol.inline,
ol.unstyled,
ul.inline,
ul.unstyled {
  margin-left: 0;
  list-style: none;
}
.big {
  font-size: 14px;
}
.panel .inner,
.panel .inner li {
  line-height: 2em;
}
.fa-github:before {
  content: "\f09b";
}
.fa-fw {
  width: 1.28571429em;
}

.fa-lg {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%;
}
.fa {
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-fw,
.fa-li {
  text-align: center;
}
.fa,
.fa-stack {
  display: inline-block;
}
.fa {
  color: #000;
  opacity: 0.4;
}
.panel .inner a {
  color: #778087;
}
.col_fade {
  color: #ababab;
}
.panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.header .col_fade {
  color: #444;
}
.panel .cell {
  padding-right: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}
.cell {
  padding: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  position: relative;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>