<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view name="main"></router-view>
      <SlideBar/>
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
  max-width: 90%;
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
</style>
