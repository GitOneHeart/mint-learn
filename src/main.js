import Vue from 'vue'

//mintUi开始
import MintUI from 'mint-ui'
//mintui的css
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//mintUi结束

//axios 开始
import Axios from 'axios'
//设置baseUrl
Axios.defaults.baseURL = 'https://small.dangapp.com/wide/';
Axios.interceptors.request.use((config)=>{
  //打开loadding图标
  MintUI.Indicator.open({
    text: '玩命加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});

Axios.interceptors.response.use((config)=>{
  //打开loadding图标
  MintUI.Indicator.close();
  return config;
})
Vue.prototype.$axios = Axios
//axios结束

//css样式引入
//公共csss
import './static/css/reset.css'
//css样式引入结束

//App及vue的相关组件
import App from './components/App.vue'
import Home from './components/home/Home.vue'
import Order from './components/order/Order.vue'
import Search from './components/search/Search.vue'
import Mine from './components/Mine/Mine.vue'
//App及vue的相关组件结束
//九宫格组件开始
import NewsList from './components/GridChild/NewsList.vue' //新闻列表
import ContactUs from './components/GridChild/ContactUs.vue' //联系我们
import GraphicDetail from './components/GridChild/GraphicDetail.vue' //图文详情
import MessageFeedback from './components/GridChild/MessageFeedback.vue' //留言反馈
import SearchInfomation from './components/GridChild/SearchInfomation.vue' //搜索资讯
import ShopShow from './components/GridChild/ShopShow.vue' //商品展示
//九宫格组件结束
//路由开始
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter()
//配置路由规则
router.addRoutes([
  {  path:'/',redirect:{ name:'home'} },
  //底部tab菜单栏
  { name:'home',path:'/home',component:Home },
  { name:'order',path:'/order',component:Order },
  { name:'search',path:'/search',component:Search },
  { name:'mine',path:'/mine',component:Mine },
  //九宫格的相关组件
  { name:'newslist',path:'/newslist',component:NewsList }, //新闻列表
  { name:'contactus',path:'/contactus',component:ContactUs }, //联系我们
  { name:'graphicdetail',path:'/graphicdetail',component:GraphicDetail }, //图文详情
  { name:'messagefeedback',path:'/messagefeedback',component:MessageFeedback }, //留言反馈
  { name:'searchinfomation',path:'/searchinfomation',component:SearchInfomation }, //搜索资讯
  { name:'shopshow',path:'/shopshow',component:ShopShow } //商品展示
])
//路由结束
// 九宫格全局组件开始
import GridNineUl from './components/GridNine/GridNineUl.vue'
Vue.component('Grid-Nine-ul',GridNineUl)
import GridNineLi from './components/GridNine/GridNineLi.vue'
Vue.component('Grid-Nine-li',GridNineLi)
// 九宫格全局组件结束
new Vue({
  el: '#app',
  router,
  render:c=>c(App)
})