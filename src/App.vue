<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view name="main"></router-view>
      <router-view name="slidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import SlideBar from "./components/SlideBar";

export default {
  name: "app",
  components: {
    Header,
    List,
    SlideBar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  line-height: 20px;
  font-size: 14px;
  background-color: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
p {
  margin: 0;
  padding: 0;
}
ul,
li,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.main {
  width: 95%;
  max-width: 1400px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
}
.clearfix:after,
.clearfix:before {
  display: table;
  line-height: 0;
  content: "";
}
img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
.content {
  flex: 1 1 auto;
  margin-right: 15px;
}
.loading {
  width: 50px;
  margin: 10px auto;
}
/* .cell begin */
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
.cell:hover {
  background: #f5f5f5;
}
a.topic_title:visited {
  color: #888;
}
a.topic_title {
  color: #333;
}
a.topic_title {
  max-width: 79%;
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
/* .cell end */
/* sidebar begin */
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

.user_card .user_avatar {
  vertical-align: middle;
  margin-right: 0.5em;
}
.user_card .user_avatar img {
  width: 48px;
  height: 48px;
}

.user_avatar img,
.user_big_avatar img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.user_card .user_name {
  font-size: 16px;
}

.user_name {
  max-width: 120px;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}
.panel .inner a {
  color: #778087;
}
.board {
  margin-top: 10px;
  width: 80%;
}
.big {
  font-size: 14px;
}
.signature {
  font-style: italic;
}
/* sidebar end */
</style>
