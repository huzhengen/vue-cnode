<template>
  <div class="sidebar">
    <div class="panel">
      <div class="header">
        <span class="col_fade">无人回复的话题</span>
      </div>
      <div class="inner">
        <ul class="unstyled">
          <li>
            <div>
              <a
                class="dark topic_title"
                href="/topic/5c1c5edd76c4964062a1c252"
                title="Vtiger CRM 几处SQL注入漏洞分析，测试工程师可借鉴"
              >Vtiger CRM 几处SQL注入漏洞分析，测试工程师可借鉴</a>
            </div>
          </li>
          <li>
            <div>
              <a
                class="dark topic_title"
                href="/topic/5c1c5a6376c4964062a1c216"
                title="请问如何用cluster将不同http请求分发给不同进程处理"
              >请问如何用cluster将不同http请求分发给不同进程处理</a>
            </div>
          </li>
          <li>
            <div>
              <a
                class="dark topic_title"
                href="/topic/5c1c425c76c4964062a1c0ef"
                title="前端导航网址分享，觉得有帮助的可以收藏下"
              >前端导航网址分享，觉得有帮助的可以收藏下</a>
            </div>
          </li>
          <li>
            <div>
              <a
                class="dark topic_title"
                href="/topic/5c1b6ea23898674067a7688e"
                title="JavaScript基础——深入学习async/await"
              >JavaScript基础——深入学习async/await</a>
            </div>
          </li>
          <li>
            <div>
              <a
                class="dark topic_title"
                href="/topic/5c1b35b03898674067a765a7"
                title="用Nodejs+WinSCP自动build完发布到服务器上"
              >用Nodejs+WinSCP自动build完发布到服务器上</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="panel">
      <div class="header">
        <span class="col_fade">积分榜</span>
        &nbsp;
        <a class="dark" href="/users/top100">TOP 100 &gt;&gt;</a>
      </div>
      <div class="inner">
        <ol>
          <li>
            <span class="top_score">21335</span>
            <span class="user_name">
              <a href="/user/i5ting">i5ting</a>
            </span>
          </li>
          <li>
            <span class="top_score">15335</span>
            <span class="user_name">
              <a href="/user/alsotang">alsotang</a>
            </span>
          </li>
          <li>
            <span class="top_score">9350</span>
            <span class="user_name">
              <a href="/user/leapon">leapon</a>
            </span>
          </li>
          <li>
            <span class="top_score">8760</span>
            <span class="user_name">
              <a href="/user/jiyinyiyong">jiyinyiyong</a>
            </span>
          </li>
          <li>
            <span class="top_score">7590</span>
            <span class="user_name">
              <a href="/user/atian25">atian25</a>
            </span>
          </li>
          <li>
            <span class="top_score">7035</span>
            <span class="user_name">
              <a href="/user/yakczh">yakczh</a>
            </span>
          </li>
          <li>
            <span class="top_score">6725</span>
            <span class="user_name">
              <a href="/user/im-here">im-here</a>
            </span>
          </li>
          <li>
            <span class="top_score">6055</span>
            <span class="user_name">
              <a href="/user/DevinXian">DevinXian</a>
            </span>
          </li>
          <li>
            <span class="top_score">5740</span>
            <span class="user_name">
              <a href="/user/chapgaga">chapgaga</a>
            </span>
          </li>
          <li>
            <span class="top_score">5330</span>
            <span class="user_name">
              <a href="/user/magicdawn">magicdawn</a>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  flex: 0 0 290px;
  font-size: 14px;
  float: right;
  margin-bottom: 20px;
}
.sidebar .panel {
  font-size: 13px;
}
.panel {
  margin-bottom: 13px;
}
.panel .inner {
  padding: 10px;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  font-size: 13px;
}
.panel .inner a {
  color: #778087;
}
a.topic_title {
  max-width: 70%;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  line-height: 30px;
}
.sidebar .header {
  color: #51585c;
  border-radius: 3px 3px 0 0;
}
.header .col_fade {
  color: #444;
}
a.dark,
a.dark:active,
a.dark:link,
a.dark:visited {
  color: #666;
  text-decoration: none;
}
.sidebar .inner ol {
  margin: 4px 0;
  list-style: none;
}
.panel .inner,
.panel .inner li {
  line-height: 2em;
}
.top_score {
  color: gray;
  padding: 2px;
  margin-right: 10px;
}
.user_name {
  max-width: 120px;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}
.panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  color: #51585c;
  border-radius: 3px 3px 0 0;
}
.header .col_fade {
  color: #444;
}
ol.inline,
ol.unstyled,
ul.inline,
ul.unstyled {
  margin-left: 0;
  list-style: none;
}
.panel .inner,
.panel .inner li {
  line-height: 2em;
}
.panel .inner .unstyled li div,
.topic_title_wrapper,
.user_name,
a.dark,
a.topic_title {
  text-overflow: ellipsis;
}
.content .changes,
.cell,
.unstyled li div,
.user_name,
a.dark,
a.topic_title {
  overflow: hidden;
}
.sidebar .topic_title {
  max-width: 270px;
  font-size: 14px;
}
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>