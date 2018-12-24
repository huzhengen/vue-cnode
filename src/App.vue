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
</style>
