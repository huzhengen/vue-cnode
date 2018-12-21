<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Header/>
    <div class="main">
      <List/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";

export default {
  name: "app",
  components: {
    Header,
    List
  }
};
</script>

<style>
body {
  height: 1000px;
  margin: 0;
  padding: 0;
  line-height: 20px;
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
}
</style>
