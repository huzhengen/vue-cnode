<template>
  <div class="header">
    <div class="navbar">
      <div class="container">
        <router-link class="brand" :to="{name:'root'}">
          <img src="../assets/cnodejs_light.svg" alt>
        </router-link>
        <ul>
          <li>
            <a href="https://github.com/huzhengen/vue-cnode" target="_blank">源码</a>
          </li>
          <li>
            <a href="https://cnodejs.org/api" target="_blank">API</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #444;
}
.navbar {
  width: 90%;
  margin: auto;
  padding: 5px;
}
.container {
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
}
.brand {
  width: 120px;
  padding: 3px 20px;
  height: 34px;
  line-height: 34px;
  color: #ccc;
  font-weight: 700;
  margin-left: -20px;
  text-shadow: none;
  display: flex;
}
img {
  vertical-align: initial;
  height: auto;
  max-width: 100%;
  border: 0;
}
ul {
  display: flex;
}
ul > li > a {
  text-shadow: none;
  color: #ccc;
  padding: 10px 15px;
  text-decoration: none;
  display: flex;
  font-size: 13px;
}
ul > li > a:focus {
  color: #3f82c4;
  text-decoration: none;
  background-color: transparent;
}
ul > li > a:hover {
  color: #fff;
}
</style>