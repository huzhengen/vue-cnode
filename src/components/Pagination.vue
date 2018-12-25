<template>
  <div class="pagination">
    <ul>
      <li>
        <a @click="changePagination">«</a>
      </li>

      <li v-if="currentPage>4" class="disabled">
        <a>...</a>
      </li>
      <li v-for="value in pagination" :key="value.id" :class="[{active:currentPage === value}]">
        <a @click="changePagination(value)">{{value}}</a>
      </li>
      <li class="disabled">
        <a>...</a>
      </li>
      <li>
        <a @click="changePagination">»</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      pagination: [1, 2, 3, 4, 5],
      currentPage: 1
    };
  },
  methods: {
    changePagination(page) {
      if (typeof page !== "number") {
        switch (page.target.innerText) {
          case "«":
            this.currentPage -= 1;
            if (this.currentPage < 1) {
              this.currentPage = 1;
            }
            break;
          case "首页":
            this.currentPage = 1;
            break;
          case "»":
            this.currentPage += 1;
            break;
          case "尾页":
            this.currentPage = 33;
            break;
          default:
            break;
        }
      } else {
        this.currentPage = page;
      }

      if (this.currentPage === this.pagination[4]) {
        this.pagination.shift();
        this.pagination.splice(4, 0, this.pagination[3] + 1);
      } else if (
        this.currentPage === this.pagination[0] &&
        this.currentPage !== 1
      ) {
        this.pagination.unshift(this.pagination[0] - 1);
        this.pagination.splice(5, 1);
      } else if (this.currentPage === 1) {
        this.pagination = [1, 2, 3, 4, 5];
      }
      this.$emit("handleList", this.currentPage);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination {
  margin: 10px 0 0 10px;
}
.pagination ul {
  display: inline-block;
  margin-bottom: 0;
  margin-left: 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.breadcrumb,
.pagination ul,
.span-common {
  box-shadow: none;
}
.pagination ul > li {
  display: inline;
}
.pagination ul > li > a {
  cursor: pointer;
}
.pagination ul > li:first-child > a,
.pagination ul > li:first-child > span {
  border-left-width: 1px;
  -webkit-border-bottom-left-radius: 4px;
  border-bottom-left-radius: 4px;
  -webkit-border-top-left-radius: 4px;
  border-top-left-radius: 4px;
  -moz-border-radius-bottomleft: 4px;
  -moz-border-radius-topleft: 4px;
}
.pagination ul > .disabled > a,
.pagination ul > .disabled > a:focus,
.pagination ul > .disabled > a:hover,
.pagination ul > .disabled > span {
  color: #999;
  cursor: default;
  background-color: transparent;
}
.pagination ul > li > a,
.pagination ul > li > span {
  float: left;
  padding: 4px 12px;
  line-height: 20px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-left-width: 0;
}
.pagination li.active a {
  color: #80bd01;
}
</style>