<template>
  <van-form @submit="onSubmit" style="margin-top: 30px">
    <div style="text-align:center">
      <van-image
        round
        width="10rem"
        height="10rem"
        :src="avatar?avatar:'../vant/cat.jpeg'"
      />
      <input type="file" class="form-control-file" @change="avatarChange" style="width:220px" />
    </div>
    <van-field
      v-model="this.username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      style="padding-left: 30px;margin-top:30px; font-size: 16px"
      disabled
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      style="padding-left: 30px; font-size: 16px"
    />
    <van-field
      v-model="age"
      name="年龄"
      label="年龄"
      placeholder="年龄"
      style="padding-left: 30px; font-size: 16px"
    />
    <van-field
      style="padding-left: 30px"
      readonly
      clickable
      label="性别"
      :value="gender"
      placeholder="选择"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <div style="margin: 26px 16px;">
      <van-button round block type="info" native-type="submit">修改</van-button>
    </div>
  </van-form>
</template>
<script>
import Vue from "vue";
import { Form } from "vant";
import { Picker } from "vant";
import { Popup } from "vant";
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Form);

export default {
  data() {
    return {
      username: "",
      password: "",
      age: "",
      gender: "",
      showPicker: false,
      columns: ["男", "女", "保密"],
      imageUrl: "",
      avatar: "",
      _id: "",
    };
  },
  methods: {
    onConfirm(value) {
      this.gender = value;
      this.showPicker = false;
    },
    async onSubmit() {
      let currentUser = localStorage.getItem("currentUser");
      currentUser = JSON.parse(currentUser);
      let _id = currentUser._id;
      this._id = _id;
      const { data } = await this.$request.put("/user/" + _id, {
        params: {
          username: this.username,
          password: this.password,
          age: this.age,
          gender: this.gender
        },
      });
      if (data.code === 1) {
        this.$router.push("/login");
      }
    },
    async avatarChange(e) {
      let currentUser = localStorage.getItem("currentUser");
      currentUser = JSON.parse(currentUser);
      const id = currentUser._id;
      const data = new FormData();
      data.set("_id", id);
      data.set("avatar", e.target.files[0]);

      const result = await this.$request.post("/upload/user", data, {
        contentType: false,
      });

      this.avatar = result.avatarUrl;
      // 更新本地存储数据
      if (id === currentUser._id) {
        currentUser.avatarUrl = result.avatarUrl;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      }
    },
  },
  created() {
    const res = JSON.parse(localStorage.getItem("currentUser"));
    this.username = res.username;
    this.gender = res.gender;
    this.age = res.age;
    this.avatar = res.avatarUrl;
  },
};
</script>