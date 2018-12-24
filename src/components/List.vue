<template>
  <div class="content">
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
          <div class="loading" v-if="isLoading">
            <img src="../assets/loading_circle_40b82ef.gif" alt>
          </div>
          <div class="cell" v-for="value in listsData" :key="value.id" v-else>
            <div class="cellleft">
              <a class="user_avatar pull-left" :href="value.author.loginname">
                <img :src="value.author.avatar_url" title="value.author.loginname">
              </a>
              <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">{{value.reply_count}}</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">{{value.visit_count}}</span>
              </span>
              <span
                :class="[{
              'put_good':(value.good===true),
              'put_top':(value.top === true),
              'topiclist-tab':(value.good!==true && value.top!==true)
            }]"
              >{{value | tabFormater}}</span>
              <router-link
                :to="{name:'post_content',params:{id:value.id}}"
                class="topic_title"
                title="value.title"
              >{{value.title}}</router-link>
            </div>
            <a
              class="last_time pull-right"
              href="/topic/5c19b97e76c4964062a1b295#5c1c595876c4964062a1c1fc"
            >
              <img
                class="user_small_avatar"
                src="https://avatars1.githubusercontent.com/u/3838050?v=4&amp;s=120"
              >
              <span class="last_active_time">{{value.last_reply_at | formatDate}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
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
          console.log(res);
          this.isLoading = false;
          this.listsData = res.data.data;
        })
        .catch(error => {});
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
.loading {
  width: 50px;
  margin: 10px auto;
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
.cellleft {
  max-width: 100%;
}
.cell:first-child {
  border-top: none;
}
.cell a {
  color: #778087;
}
.cell .user_avatar > img {
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
  font-size: 10px;
  margin: 0 1px;
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

.topic_list a.topic_title:visited {
  color: #888;
}
.topic_list a.topic_title {
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
  padding: 0 0 0 10px;
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
.last_time .last_active_time {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
}
.last_time {
  font-size: 11px;
  display: inline-block;
  color: #777;
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
.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
}
.topic_title_wrapper {
  white-space: nowrap;
}
@media (max-width: 768px) {
  .user_avatar,
  .reply_count,
  .last_time,
  .topiclist-tab,
  .put_good,
  .put_top {
    display: none !important;
  }
  .content {
    margin-right: 0;
  }
}
</style>