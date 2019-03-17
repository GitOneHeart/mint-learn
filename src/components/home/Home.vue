<template>
    <div>
        <!-- 轮播图开始 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <a href="javascript:;">
                    <img src="../../static/img/banner1.jpg" alt="轮播图1">
                </a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="javascript:;">
                    <img src="../../static/img/banner2.jpg" alt="轮播图2">
                </a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="javascript:;">
                    <img src="../../static/img/banner3.jpg" alt="轮播图3">
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 轮播图结束 -->
        <!-- 九宫格开始 -->
        <div>
            <Grid-Nine-ul>
                <Grid-Nine-li v-for="(homeIcon,index) in GridIcons" :key="index">
                    <router-link :to="{ name:homeIcon.routerName }">
                        <div :class=" 'grid-img ' + homeIcon.className"></div>
                        {{ homeIcon.title }}
                    </router-link>
                </Grid-Nine-li>
            </Grid-Nine-ul>
        </div>
        <!-- 九宫格结束 -->
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            imgs:[],
            GridIcons:[
                {title:'新闻列表',className:'shop-list1',routerName:'newslist'},
                {title:'图文详情',className:'shop-list2',routerName:'graphicdetail'},
                {title:'商品展示',className:'shop-list3',routerName:'shopshow'},
                {title:'留言反馈',className:'shop-list4',routerName:'messagefeedback'},
                {title:'搜索资讯',className:'shop-list5',routerName:'searchinfomation'},
                {title:'联系我们',className:'shop-list6',routerName:'contactus'}
            ]
        };
    },
    computed: {

    },
    created() {
        // this.$axios.get('banner_list.do')
        // .then (res=>{
        //     console.log(res)
        // })
        // .catch (err =>{
        //     console.log(err)
        // })
    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
        
    },
};
</script>

<style scoped>
    .mint-swipe {
        height: 260px;
    }
    .mint-swipe img {
        width: 100%;
        height: 100%;
    }
    /* 九宫格相关的背景图 */
    .grid-img {
        width: 60px;
        height: 60px;
        background-repeat: no-repeat;
        background-size: 100%;
        margin: 0 auto;
        padding: 5px 0;
    }   
    .shop-list1 {
        background-image: url('../../static/img/g1.png');
    }
    .shop-list2 {
        background-image: url('../../static/img/g2.png');
    }
    .shop-list3 {
        background-image: url('../../static/img/g3.png');
    }
    .shop-list4 {
        background-image: url('../../static/img/g4.png');
    }
    .shop-list5 {
        background-image: url('../../static/img/g5.png');
    }
    .shop-list6 {
        background-image: url('../../static/img/g6.png');
    }

    .shop-list7 {
        background-image: url('../../static/img/g7.png');
    }
    .shop-list8 {
        background-image: url('../../static/img/g8.png');
    }
    .shop-list9 {
        background-image: url('../../static/img/g9.png');
    }

  /* 九宫格结束 */
</style>
