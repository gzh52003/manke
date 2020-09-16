<template>
  <div id="home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="item in recommend" :key="item._id">
        <img v-lazy="item" />
      </van-swipe-item>



      
    </van-swipe>

    <van-button @click="back" style="position:fixed;right:0;bottom:100px;color:#cccccc;z-index:99">
      <van-icon name="arrow-up" />
    </van-button>

    <!-- 商品类别 -->
    <van-grid column-num="4">
      <van-grid-item :key="item.name" v-for="item in categray">
        <van-image :src="item.url"/>
        <span>{{item.name}}</span>
      </van-grid-item>
    </van-grid>

    <!-- 商品列表 -->
    <van-grid :border="false" :column-num="2" class="goodslist">
      <van-grid-item
        v-for="item in goodslist"
        :key="item._id"
        @click="gotoDetail(item._id)"
        style="boder:1px solid gray"
      >
        <van-image :src="item.src" />
        <h4>{{item.name}}</h4>
        <p class="price">
          <!-- <del>{{item.price}}</del> -->
          <span>{{item.price}}</span>
          <van-icon @click="addCart" style="float:right;font-size:24px;color:red" name="shopping-cart-o" />
        </p>
      </van-grid-item>
      <van-pagination class="pagination" v-model="currentPage" :total-items="res" :show-page-size="3"
      :items-per-page="4" force-ellipses @change="pageChange"  style="position:relative;left:65px"/>
    </van-grid>

    
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, Grid, GridItem, Image, Icon,Pagination } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Pagination);

// function dealStr(data) {
//   let { str, begin, end } = data;
//   return parseInt(str.slice(begin, end));
// }

export default {
  name: "Home",
  data() {
    return {
      recommend: [
        "https://gdp.alicdn.com/imgextra/i3/3032658020/TB2N5ZfdmfD8KJjSszhXXbIJFXa_!!3032658020.jpg",
        "https://img.alicdn.com/imgextra/i4/3032658020/TB2_EiWlsnI8KJjSspeXXcwIpXa_!!3032658020.jpg",
        "https://img.alicdn.com/imgextra/i2/3032658020/O1CN011zX5yr297D2sB99dv_!!3032658020.jpg",
        "https://img.alicdn.com/imgextra/i1/3032658020/O1CN01E4E39l297D0lLz8Bt_!!3032658020.jpg",
      ],
      categray: [
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783146.jpg",
          name: "周边",
        },
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783236.jpg",
          name: "杂志",
        },
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783170.jpg",
          name: "绘本",
        },
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783188.jpg",
          name: "漫画",
        },
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783325.jpg",
          name: "小说",
        },
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783358.jpg",
          name: "更多商品",
        },
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1510293782.jpg",
          name: "优惠活动",
        },
        {
          url:
            "http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1550644668.jpg",
          name: "积分商城",
        },
      ],
      goodslist: [],
      currentPage:1,
      res:1,
    };
  },
  components: {},
  
  methods: {
    addCart(e){
      console.log(e.target);
    },
    gotoDetail(id) {
      this.$router.push({path:'/detail',query:{id}});
    },

    back() {
      //window.scrollY = 0;
      var timer = setInterval(function () {
          if (scrollY <= 0) {
            clearInterval(timer);
          }
          scrollTo({ top: scrollY - 500 });
        }, 100);
    },

    async pageChange(currentPage) {
        const { data } = await this.$request.get(`/goods?size=4&page=${currentPage}`)
        this.goodslist = data;
        console.log(data)
      },
  },

  async created() {
    // 列表数据
    // const data = await this.$request.get("/goods");
    const data = await this.$request.get("/goods?size=18&page=1");
      
      const lis = await this.$request.get('/goods')
      const res = lis.data.length
      this.res = res
      const { id } = this.$route.params;
    this.goodslist = data.data;
    console.log(this.goodslist);
  },
};
</script>
<style lang="scss" scoped>
#home {
  margin-bottom: 45px;
  border-bottom: 1px solid gray;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 192px;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
.goodslist {
  .price{
    width: 100%;
    float: left;
    color: red;
    font-weight: 800;
  }
  h4 {
    margin-bottom: 0;
    font-size: 14px;
  }
}
</style>
