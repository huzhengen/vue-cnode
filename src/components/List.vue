<template>
  <div class="content">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading_circle_40b82ef.gif" alt>
    </div>
    <div class="panel">
      <div class="header">
        <a href="/?tab=all" class="topic-tab current-tab">全部</a>
        <a href="/?tab=good" class="topic-tab">精华</a>
        <a href="/?tab=share" class="topic-tab">分享</a>
        <a href="/?tab=ask" class="topic-tab">问答</a>
        <a href="/?tab=job" class="topic-tab">招聘</a>
        <a href="/?tab=dev" class="topic-tab">客户端测试</a>
      </div>
      <div class="inner">
        <div class="topic_list">
          <div class="cell" v-for="value in listsData" :key="value.id">
            <a class="user_avatar pull-left" :href="value.author.loginname">
              <img :src="value.author.avatar_url" title="value.author.loginname">
            </a>
            <span class="reply_count pull-left">
              <span class="count_of_replies" title="回复数">{{value.reply_count}}</span>
              <span class="count_seperator">/</span>
              <span class="count_of_visits" title="点击数">{{value.visit_count}}</span>
            </span>
            <span class="topiclist-tab">问答</span>
            <a
              class="topic_title"
              href="value.5bffb25cd6104a4f803a2dfb"
              title="value.title"
            >{{value.title}}</a>
            <a
              class="last_time pull-right"
              href="/topic/5c19b97e76c4964062a1b295#5c1c595876c4964062a1c1fc"
            >
              <img
                class="user_small_avatar"
                src="https://avatars1.githubusercontent.com/u/3838050?v=4&amp;s=120"
              >
              <span class="last_active_time">38 分钟前</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      isLoading: false,
      listsData: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20
        })
        .then(res => {
          this.isLoading = false;
          this.listsData = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  flex: 1;
  margin-right: 15px;
}
.cell:first-child {
  border-top: none;
}
.cell {
  padding: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  position: relative;
  font-size: 14px;
}
.cell a {
  color: #778087;
}
.cell > a > img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  vertical-align: middle;
}
.cell .reply_count {
  width: 70px;
  display: inline-block;
  text-align: center;
}
.cell .count_of_replies {
  color: #9e78c0;
}
.cell .count_seperator {
  margin: 0 -3px;
  font-size: 10px;
}
.cell .count_of_visits {
  font-size: 10px;
  color: #b4b4b4;
}
.last_time .user_small_avatar {
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin-right: 0.5em;
  border-radius: 3px;
}
.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
#topic_list a.topic_title:visited {
  color: #888;
}
#topic_list a.topic_title {
  color: #333;
}
a.topic_title {
  max-width: 70%;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.topic-tab {
  margin: 0 10px;
  color: #80bd01;
}
.topic-tab.current-tab {
  background-color: #80bd01;
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
}
</style>