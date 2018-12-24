<template>
  <div class="sidebar">
    <div class="panel">
      <div class="header">
        <span class="col_fade">个人信息</span>
      </div>
      <div class="inner">
        <div class="user_card">
          <div>
            <a class="user_avatar" href="/user/afacode">
              <img
                src="https://avatars3.githubusercontent.com/u/24989232?v=4&amp;s=120"
                title="afacode"
              >
            </a>
            <span class="user_name">
              <a class="dark" href="/user/afacode">afacode</a>
            </span>

            <div class="board clearfix">
              <div class="floor">
                <span class="big">积分: 95</span>
              </div>
            </div>
            <div class="space clearfix"></div>
            <span class="signature">
              “
              比较懒,有点爱折腾
              ”
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="header">
        <span class="col_fade">无人回复的话题</span>
      </div>
      <div class="inner">
        <ul class="unstyled">
          <li v-for="value in noReply" :key="value.id">
            <div>
              <a
                class="dark topic_title"
                href="/topic/5c1c5edd76c4964062a1c252"
                title="Vtiger CRM 几处SQL注入漏洞分析，测试工程师可借鉴"
              >{{value.title}}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  data() {
    return {
      noReply: []
    };
  },
  methods: {
    getNoReplyData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20
        })
        .then(res => {
          console.log(res);
          let allData = res.data.data;
          for (let value in allData) {
            if (allData[value].reply_count === 0) {
              this.noReply.push(allData[value]);
            }
          }
        })
        .catch(error => {});
    }
  },
  beforeMount() {
    this.getNoReplyData();
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