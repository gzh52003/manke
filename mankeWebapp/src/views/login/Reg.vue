<template>
  <van-form @submit="onSubmit" style="margin-top: 30px">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
      style="padding-left: 30px; font-size: 16px"
      @blur="onBlur"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
      style="padding-left: 30px; font-size: 16px"
    />
    <div style="padding-left: 30px;margin-top:20px; font-size: 14px">
      <span @click="login">已有账号？登录</span>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">注册</van-button>
    </div>
  </van-form>
</template>
<script>
import Vue from "vue";
import { Form, Toast } from "vant";

Vue.use(Form);

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
      var arr = [];
      for (var key in values) {
        arr.push(values[key]);
      }
      const result = await this.$request.post("/reg", {
        method: "post",
        body: {
          username: arr[0],
          password: arr[1],
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.data.code === 1) {
        this.$router.push({ name: "Login" });
      }
    },
    login() {
      this.$router.push({ name: "Login" });
    },
    async onBlur() {
      const result = await this.$request.get(`/reg/check?username=${this.username}`,{
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(result.data.code === 0){
          Toast("用户名已存在")     
      }
    },
  },
};
</script>