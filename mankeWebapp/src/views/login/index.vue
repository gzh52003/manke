<template>
  <van-form @submit="onSubmit" style="margin-top: 30px">
    <van-field
      v-model="formdata.username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
      style="padding-left: 30px; font-size: 16px"
    />
    <van-field
      v-model="formdata.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
      style="padding-left: 30px; font-size: 16px"
    />
    <van-field
      v-model="formdata.vcode"
      name="验证码"
      label="验证码"
      placeholder="验证码"
      :rules="[{ required: true, message: '请填写验证码' }]"
      style="padding-left: 30px; font-size: 16px"
    />
    <div class="form-group" style="padding:0 30px;height: 60px; font-size: 16px; margin-top:20px">
      <label for="mdl">
        <input type="checkbox" id="mdl" v-model="checked" />
        <span>7天免登陆</span>
      </label>
      <span class="input-group-text" style="float:right" v-html="svgcode"></span>
    </div>
    <div style="padding-left: 30px;margin-top:20px; font-size: 14px">
      <span @click="register">新用户？注册</span>
      <span style="float:right; margin-right:30px">忘记密码</span>
    </div>

    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">登录</van-button>
    </div>
  </van-form>
</template>
<script>
import Vue from "vue";
import { Form } from "vant";
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Form);

export default {
  data() {
    return {
      formdata: {
        username: "",
        password: "",
        vcode: "",
      },
      checked: true,
      svgcode: "",
    };
  },
  methods: {
    async onSubmit() {
      if (
        this.formdata.username !== "" &&
        this.formdata.password !== "" &&
        this.formdata.vcode !== ""
      ) {
        const result = await this.$request.get(
          `/login/user?username=${this.formdata.username}&password=${this.formdata.password}&vcode=${this.formdata.vcode}&mdl=${this.checked}`
        );
        console.log(result)
        if (result.data.code === 1) {
          localStorage.setItem("currentUser", JSON.stringify(result.data.data));
          const { redirectTo="/profile" } = this.$route.query;
          this.$router.replace(redirectTo);
        } else if (result.data.code === 0) {
          Toast("用户名或密码错误")
        }else if (result.data.code === 10) {
          Toast("验证码错误")
        }
      }
    },
    register() {
      this.$router.push({ name: "Reg" });
    },
    async getVcode() {
      const result = await this.$request.get("/vcode?");
      if (result.data.code === 1) {
        this.svgcode = result.data.data;
      }
    },
  },
  async created() {
    this.getVcode();
  },
};
</script>