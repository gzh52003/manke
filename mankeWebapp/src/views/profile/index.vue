<template>
  <div class="mine" style="padding: 0 6px">
    <van-row style="text-align:center">
      <van-col span="10">
        <van-image
          round
          width="10rem"
          height="10rem"
          :src="avatar?avatar:'https://img.yzcdn.cn/vant/cat.jpeg'"
          style="margin:20px auto"
        />
      </van-col>
      <van-col span="14">
        <div style="font-size:18px; margin: 50px 0 20px 0">{{username}}</div>
        <span style="font-size:14px">您的等级：注册用户</span>
      </van-col>
    </van-row>
    <div style="height: 150px; padding:5px 0;">
      <van-row style="height: 50px">
        <van-col span="2">
          <van-icon name="orders-o" size="28" />
        </van-col>
        <van-col span="20" style="font-size:18px">我的订单</van-col>
        <van-col span="2">
          <van-icon name="arrow" size="24" />
        </van-col>
      </van-row>
      <van-row style="text-align:center">
        <van-col span="8">
          <van-icon name="failure" size="50" />
          <span style="display: block">待付款</span>
        </van-col>
        <van-col span="8">
          <van-icon name="logistics" size="50" />
          <span style="display: block">待收货</span>
        </van-col>
        <van-col span="8">
          <van-icon name="completed" size="50" />
          <span style="display: block">已完成</span>
        </van-col>
      </van-row>
    </div>
    <van-row style="height: 50px">
      <van-col span="2">
        <van-icon name="like-o" size="28" />
      </van-col>
      <van-col span="20" style="font-size:18px">我的收藏</van-col>
      <van-col span="2">
        <van-icon name="arrow" size="24" />
      </van-col>
    </van-row>
    <van-row style="height: 50px" @click="goEdit">
      <van-col span="2">
        <van-icon name="edit" size="28" />
      </van-col>
      <van-col span="20" style="font-size:18px">修改信息</van-col>
      <van-col span="2">
        <van-icon name="arrow" size="24" />
      </van-col>
    </van-row>
    <van-row style="height: 50px"  @click="address">
      <van-col span="2">
        <van-icon name="location-o" size="28" />
      </van-col>
      <van-col span="20" style="font-size:18px">收货地址</van-col>
      <van-col span="2">
        <van-icon name="arrow" size="24" />
      </van-col>
    </van-row>
    <van-button round block type="info" @click="logout">退出</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);

export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    goEdit() {
      this.$router.push({ name: "Edit" });
    },
    logout(){
      this.$router.push({ name: "Login" });
      localStorage.removeItem("currentUser");
    },
    address(){
       this.$router.push({ name: "Address" });
    }
  },
  created() {
    const res = JSON.parse(localStorage.getItem("currentUser"));
    this.username = res.username;
    this.avatar = res.avatarUrl;
  },
};
</script>
<style lang="scss">
</style>