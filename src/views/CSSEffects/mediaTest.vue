<template>
  <div id="mediaTest">
    <div class="body">
      <div class="header">
        <div class="btn" @click="btnClick">
          <img src="../../assets/img/menu2.png" />
        </div>
        <ul :class="isShow == true ? 'show' : ''">
          <li v-for="(item,index) in list" :key="index" @click="test(index)">{{item.content}}</li>
        </ul>
      </div>
      <div class="content">
        <div class="conOut" v-for="(item,index) in con" :key="index">
          <div class="conIn">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mediaTest",
  data() {
    return {
      list: [
        { id: 0, content: "测试1" },
        { id: 1, content: "测试2" },
        { id: 2, content: "测试3" },
        { id: 3, content: "测试4" },
        { id: 4, content: "测试5" }
      ],
      con: [
        { title: "村上春树", content: "自行车自行车支持" },
        { title: "村上春树", content: "自行车自行车支持" },
        { title: "村上春树", content: "自行车自行车支持" }
      ],
      isShow: false
    };
  },
  methods: {
    btnClick() {
      console.log("btn");
      this.isShow = !this.isShow;
    },
    test: function(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/app.scss";
@import "../../assets/css/mediaTest.scss";
</style>