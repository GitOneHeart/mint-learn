<template>
  <div class="MyPage"> 
      <mt-header fixed title="固定在顶部"></mt-header>
      <router-view></router-view>
      <!-- 底部菜单栏开始 -->
      <mt-tab-container v-model="active">
        <mt-tabbar v-model="selected">
          <mt-tab-item id="首页">
            <img slot="icon" src="../static/img/home.png">
              <router-link :to = "{ name:'home' }">首页</router-link>
          </mt-tab-item>
          <mt-tab-item id="订单">
            <img slot="icon" src="../static/img/order.png">
            <router-link :to = "{ name:'order' }">订单</router-link>
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" src="../static/img/search.png">
           <router-link :to = "{ name:'search' }">发现</router-link>
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" src="../static/img/mine.png">
             <router-link :to = "{ name:'mine' }">我的</router-link>
          </mt-tab-item>
        </mt-tabbar>
      </mt-tab-container>
      <!-- 底部菜单栏结束 -->
  </div>
</template>
<script>
  export default {
    data() {
      return  {
        active:'',
        selected:'',
        imgs:[]
      }
    },
    created() {
      // this.$axios.get
    }
  }
</script>
<style scoped>
  .MyPage {padding-top: 40px;padding-bottom: 50px;}
  .mint-tab-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #cccccc;
    z-index: 1;
  }
</style>