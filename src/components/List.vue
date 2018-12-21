<template>
  <div class="content">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading_circle_40b82ef.gif" alt>
    </div>
    <div class="panel">
      <div class="header"></div>
      <div class="topic_list">
        <div class="cell"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    msg: String
  },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  justify-content: center;
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
</style>