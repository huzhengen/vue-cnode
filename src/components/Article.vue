<template>
  <div class="content">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading_circle_40b82ef.gif" alt>
    </div>
    <div v-else>
      <div class="panel">
        <div class="header topic_header">
          <span class="topic_full_title">{{post.title}}</span>
          <div class="changes">
            <span>发布于 {{post.create_at | formatDate}}</span>
            <span>作者
              <router-link
                to="{name:'user_info',params:{name:post.author.loginname}}"
              >{{post.author.loginname}}</router-link>
            </span>
            <span>{{post.visit_count}} 次浏览</span>
            
            <span>来自 {{post | tabFormater}}</span>
          </div>
        </div>
        <div class="inner topic">
          <div class="topic_content" v-html="post.content"></div>
        </div>
      </div>

      <div class="panel">
        <div class="header">
          <span class="col_fade">{{post.reply_count}} 回复</span>
        </div>
        <div
          class="cell reply_area reply_item"
          :reply_id="post.id"
          :id="post.id"
          v-for="(reply, index) in post.replies"
          :key="index"
        >
          <div class="author_content">
            <router-link
              class="user_avatar"
              :to="{name:'user_info',params:{name:reply.author.loginname}}"
            >
              <img :src="reply.author.avatar_url" :title="reply.author.loginname">
            </router-link>
            <div class="user_info">
              <router-link
                class="dark reply_author"
                :to="{name:'user_info',params:{name:reply.author.loginname}}"
              >{{reply.author.loginname}}</router-link>
              <a class="reply_time">{{index+1}}楼•{{reply.create_at | formatDate}} 天前</a>
            </div>
            <div class="user_action">
              <span>
                <i class="fa up_btn fa-thumbs-o-up" title="喜欢" v-if="reply.ups.length > 0">赞</i>
                <span class="up-count" v-if="reply.ups.length > 0">{{reply.ups.length}}</span>
              </span>
              <span></span>
            </div>
          </div>
          <div class="reply_content from-zlyuanteng" v-html="reply.content"></div>
          <div class="clearfix">
            <div class="reply2_area"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../bus/index";
export default {
  name: "List",
  data() {
    return {
      isLoading: false,
      post: {}
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          this.isLoading = false;
          this.post = res.data.data;
          console.log(this.post.author.loginname);
          bus.$emit("loginname", this.post.author.loginname);
        })
        .catch(error => {});
    }
  },
  watch: {
    $route(to, from) {
      // 通过 id 获取文章详情
      this.getArticleData();
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getArticleData();
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
.panel .header.topic_header,
.panel .inner {
  background-color: #fff;
}

.content .topic_full_title {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
}
.content .changes,
.cell,
.unstyled li div,
.user_name,
a.dark,
a.topic_title {
  overflow: hidden;
}
.content .changes {
  font-size: 12px;
  color: #838383;
}
.content .changes span {
  padding-right: 5px;
}
.content .changes span:before {
  content: "•";
}
.content .changes a {
  color: inherit;
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
.topic_content {
  margin: 0 10px;
}
.markdown-text p,
.preview p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0;
}
.preview p,
.reply_content p,
.reply_form p,
.topic_content p {
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
}
.markdown-text > :last-child,
.preview > :last-child,
textarea#title {
  margin-bottom: 1em;
}
.markdown-text > :first-child,
.preview > :first-child {
  margin-top: 0;
}
.cell {
  position: relative;
  padding: 10px 0 10px 10px;
  font-size: 14px;
}
.panel .cell {
  padding-right: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}
.author_content .user_avatar {
  display: inline-block;
  float: left;
}
.user_avatar img,
.user_big_avatar img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.user_info {
  margin-left: 10px;
  display: inline-block;
}
.reply_time {
  font-size: 11px;
  padding-left: 5px;
}
.user_action {
  float: right;
  margin-left: 20px;
  font-size: 15px;
}

.fa {
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa,
.fa-stack {
  display: inline-block;
}
.up_btn {
  cursor: pointer;
  opacity: 0.4;
}
.fa {
  color: #000;
  opacity: 0.4;
}
.user_action .up-count {
  color: gray;
}
.reply_content {
  padding-left: 50px;
  color: #333;
}
.panel .markdown-text a {
  color: #08c;
}
a.dark,
a.dark:active,
a.dark:link,
a.dark:visited {
  color: #666;
  text-decoration: none;
}
a {
  color: #08c;
  text-decoration: none;
}
div pre.prettyprint {
  font-size: 14px;
  border-radius: 0;
  padding: 0 15px;
  border: none;
  margin: 20px -10px;
  border-width: 1px 0;
  background: #f7f7f7;
  -o-tab-size: 4;
  -moz-tab-size: 4;
  tab-size: 4;
}
pre code {
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
}
fieldset,
legend,
pre code {
  padding: 0;
  border: 0;
}
.clo,
.opn,
.pun {
  color: #660;
}
.pln {
  color: #000;
}
blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #eee;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
}
</style>