<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item>
        <img v-lazy="data.src" />]
      </van-swipe-item>
    </van-swipe>
    <van-panel title status id="goodsname">
      <span class="line">
        <span style="font-size:20px">{{data.name}}</span>
        <span class="iLike">
          <van-icon name="star-o" />收藏
        </span>
      </span>
      <br />
      <span style="border-bottom: 1px solid #f5f6f7;">
        本店价:
        <span class="pic">{{data.price}}</span>市场价:
        <del>{{data.price}}</del>
      </span>

      <br />
      <span>库存:{{data.count}}</span>
    </van-panel>
  </div>
</template>



<script>
import Vue from "vue";
import { Swipe, Panel } from "vant";
Vue.use(Swipe);
Vue.use(Panel);

export default {
  name: "Detail",
  data() {
    return {
      data: {},
    };
  },
  components: {},
  methods: {
    async getData(id) {
      const data = await this.$request.get("/goods/" + id);
      this.data = data.data.data;
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
  font-size: 14px;
  padding-left: 10px;
  .line {
    display: block;
    border-bottom: 1px solid #f5f6f7;
  }
  .iLike {
    float: right;
    margin-right: 10px;
    color: red;
  }
  .pic {
    font-size: 18px;
    color: red;
  }
}
</style>