<template>
  <div class="sidebar">
    <div class="panel" v-if="userinfo.loginname">
      <div class="header">
        <span class="col_fade">个人信息</span>
      </div>
      <div class="inner">
        <div class="user_card">
          <div>
            <router-link
              class="user_avatar"
              :to="{name:'user_info',params:{name:userinfo.loginname}}"
            >
              <img :src="userinfo.avatar_url" :title="userinfo.loginname">
            </router-link>
            <span class="user_name">
              <router-link
                class="dark"
                :to="{name:'user_info',params:{name:userinfo.loginname}}"
              >{{userinfo.loginname}}</router-link>
            </span>
            <div class="board clearfix">
              <div class="floor">
                <span class="big">积分: {{userinfo.score}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" v-if="userinfo.recent_topics">
      <div class="header">
        <span class="col_fade">作者最近创建的主题</span>
      </div>
      <div class="inner">
        <ul class="unstyled">
          <li v-for="list in topicLimit" :key="list.id">
            <div>
              <router-link
                :to="{name:'post_content',params:{id:list.id,name:list.author.loginname}}"
                class="dark topic_title"
                :title="list.title"
              >{{list.title}}</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="panel" v-if="userinfo.recent_replies">
      <div class="header">
        <span class="col_fade">作者最近回复的主题</span>
      </div>
      <div class="inner">
        <ul class="unstyled">
          <li v-for="list in replyTopicLimit" :key="list.id">
            <div>
              <router-link
                :to="{name:'post_content',params:{id:list.id,name:list.author.loginname}}"
                class="dark topic_title"
                :title="list.title"
              >{{list.title}}</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="panel">
      <div class="header">
        <span class="col_fade">无人回复的话题</span>
      </div>
      <div class="inner">
        <ul class="unstyled">
          <li v-for="value in noReply" :key="value.id">
            <div>
              <router-link
                :to="{name:'post_content',params:{id:value.id,name:value.author.loginname}}"
                class="dark topic_title"
                :title="value.title"
              >{{value.title}}</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../bus/index";
export default {
  name: "SlideBar",
  data() {
    return {
      noReply: [],
      userinfo: {}
    };
  },
  computed: {
    topicLimit() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5);
      }
    },
    replyTopicLimit() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      }
    }
  },
  methods: {
    getNoReplyData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 5,
          limit: 20
        })
        .then(res => {
          let allData = res.data.data;
          for (let value in allData) {
            if (allData[value].reply_count === 0) {
              this.noReply.push(allData[value]);
            }
          }
        })
        .catch(error => {});
    }
  },
  beforeMount() {
    this.getNoReplyData();
    let self = this;
    if (this.$route.fullPath.indexOf("user") !== -1) {
      let value = this.$route.params.name;
      self.$http
        .get(`https://cnodejs.org/api/v1/user/${value}`)
        .then(res => {
          self.userinfo = res.data.data;
        })
        .catch(error => {});
    } else {
      bus.$on("loginname", function(value) {
        self.$http
          .get(`https://cnodejs.org/api/v1/user/${value}`)
          .then(res => {
            self.userinfo = res.data.data;
          })
          .catch(error => {});
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>