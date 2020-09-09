<template>
  <div>
    <!-- 图片展示 -->
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item>
        <img v-lazy="data.src" />]
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
    <Title :aaa="abc"></Title>
    <van-stepper id="stepper" @change="changeQty(data._id,$event)" />
    <div class="button">
      <van-button class="button_1" color="#1CBB7F" size="normal" round type="info">立即购买</van-button>
      <van-button type="info" size="normal" color="#f4a213" round>加入购物车</van-button>
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import { Swipe, Panel, Button, Stepper } from "vant";
import Title from "./title";
Vue.use(Title);
Vue.use(Swipe);
Vue.use(Panel);
Vue.use(Button);
Vue.use(Stepper);

export default {
  name: "Detail",
  data() {
    return {
      abc: "asfdasfsafasfafsdfsdgfsd",
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
    changeQty(id, qty) {
      this.$store.commit("changeQty", { _id: id, qty });
      // this.$store.dispatch('changeQtyAsync',{_id:id,qty})
    },
    async getData(id) {
      const data = await this.$request.get("/goods/" + id);
      this.data = data.data.data;
      this.$store.commit("changeTitle", this.data.name);
    },
  },

  async created() {
    console.log("$route=", this.$route.query);
    const { id } = this.$route.query;
    console.log(id);
    this.getData(id);
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

#stepper{
.van-stepper__plus,.van-stepper__minus, .van-stepper__input{
  height: 100px;
  width: 100px;
}
}

.goods-info {
  padding-left: 28px;
  padding-right: 28px;
}

.pc {
  padding-left: 28px;
}

.button {
  padding-left: 28px;
}

.button_1 {
  margin-right: 38px;
}
</style>