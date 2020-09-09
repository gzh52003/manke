<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>漫客后台管理系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="handleLodin()">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLodin() {
      if (this.formdata.username !== "" && this.formdata.password !== "") {
        const result = await this.$request.get(
          `/login/manager?username=${this.formdata.username}&password=${this.formdata.password}`
        )
        if (result.data.code === 1) {
          localStorage.setItem("currentUser", JSON.stringify(result.data));
          this.$message({
            showClose: true,
            message: "登录成功",
            type: "success",
          }); 
          this.$router.push({ path: "/home" });
        } else if (result.data.code === 0) {
          this.$message({
            message: "登录用户名或密码错误",
            type: "fail",
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "用户名和密码不能为空",
          type: "error",
        });
      }
    },
  },
};
</script>
<style scoped>
.login-wrap {
  height: 100%;
  background: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
</style>