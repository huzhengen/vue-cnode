<template>
  <div id="app">
    <Header/>
    <div class="main">
      <List/>
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
  height: 1000px;
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
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
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
</style>
