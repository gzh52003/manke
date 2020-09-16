<template>
  <div>
    <!-- 图片展示 -->
    <van-swipe class="my-swipe">
      <van-swipe-item>
        <img v-lazy="data.src" />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品内容 -->
    <van-panel title status id="goodsname">
      <span class="line">
        <span style="font-size:20px">{{data.name}}</span>
      </span>
      <br />
      <span style="border-bottom: 1px solid #f5f6f7;">
        本店价:
        <span class="pic">{{data.price}}</span>市场价:
        <del>{{data.price}}</del>
      </span>
      <span class="iLike">
        <van-icon name="star-o" />收藏
      </span>
      <br />
      <span style="display:block;padding-top:10px">库存:{{data.count}}</span>
    </van-panel>
    <!-- <Title :aaa="abc"></Title> -->
    <span style="margin-left:10px;padding-top:10px;display:block">数量</span>
    <van-stepper
      v-model="num"
      id="stepper"
      input-width="60px"
      button-size="60px"
      style="padding-left:10px;margin:5px 0"
    />

    <van-goods-action>
      <van-goods-action-icon icon="home-o" text="首页" color="#07c160" @click="goHome" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
      <van-goods-action-icon icon="chat-o" text="客服" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="()=>{addCart(data._name)}" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>



<script>
import Vue from "vue";
import {
  Swipe,
  Panel,
  Button,
  Stepper,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from "vant";
import Title from "./title";
Vue.use(Title);
Vue.use(Swipe);
Vue.use(Panel);
Vue.use(Button);
Vue.use(Stepper);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

export default {
  name: "Detail",
  data() {
    return {
      user:"",
      num: 1,
      // abc: "asfdasfsafasfafsdfsdgfsd",
      data: {},
    };
  },
  components: {
    Title,
  },
  computed: {
    totalPrice() {
      return this.data.price * this.data.qty;
      //  return this.goodsdata.reduce((pre,item)=>pre+(item.price*item.qty)*100,0)
      //  return  this.$store.getters.totalPrice
    },
  },
  methods: {
    async addCart(name) {
      console.log("id:", this.data._id);
      const back = await this.$request.get(`./cart?id=${this.data._id}`);
      console.log("length:", back.data.length);
      console.log("this.num",this.num);
      if (back.data.length !== 0) {
        console.log("由内容");
        console.log("back.data[0].count:",back.data[0].count);
        const count = back.data[0].count*1 + this.num;
        // console.log("data.count:",back.data[0].count);
        console.log("count",count);
        await this.$request.put("./cart", { id:this.data._id, count: count ,goodsId:true});
      } else {
        console.log("没有内容");
        const a= await this.$request.post("./cart", {
          username:`${this.user.username}`,
          id:`${this.data._id}`,
          name: `${this.data.name}`,
          price: `${this.data.price}`,
          src: `${this.data.src}`,
          count: `${this.num}`,
        });
        // console.log("a:",a);
        console.log("添加");
      }
    },
    // changeQty(id, qty) {
    //   this.$store.commit("changeQty", { _id: id, qty });
    //   // this.$store.dispatch('changeQtyAsync',{_id:id,qty})
    // },
    async getData(id) {
      const data = await this.$request.get("/goods/" + id);
      this.data = data.data.data;
      this.$store.commit("changeTitle", this.data.name);
    },
    goHome() {
      // console.log(this.$route);
      return this.$router.push("../home");
    },
    goCart() {
      return this.$router.push("../cart");
    },
  },

  async created() {
    console.log("$route=", this.$route.query);
    this.user=JSON.parse(localStorage.getItem("currentUser"))
    console.log("this.user.username",this.user.username);
    const { id } = this.$route.query;
    console.log(id);
    this.getData(id);
  },
  mounted() {
    this.$store.commit("displayTabbar", false);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  },
};
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 320px;
  img {
    width: 100%;
  }
}
#title {
  padding-left: 5px;
}

#goodsname {
  font-size: 16px;
  padding-left: 10px;
  .line {
    display: block;
    border-bottom: 1px solid #f5f6f7;
  }
  .iLike {
    font-size: 20px;
    float: right;
    margin-right: 10px;
    color: red;
  }
  .pic {
    font-size: 18px;
    color: red;
  }
}

#stepper {
  font-size: 30px;
}

.goods-info {
  padding-left: 28px;
  padding-right: 28px;
}

.pc {
  padding-left: 28px;
}

.button {
  padding-left: 10px;
}

.button_1 {
  margin-right: 38px;
}
</style>