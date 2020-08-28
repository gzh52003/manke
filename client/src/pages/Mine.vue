<template>
  <el-container style="margin: 50px">
    <div>
      <img
        :src="avatar?avatar:'http://img.netbian.com/file/2019/0917/9236d7fc8fe490e9b23acd25cb992200.jpg'"
        style="width: 300px;height:260px;display:block;margin-bottom:20px"
      />
      <input type="file" class="form-control-file" @change="avatarChange" />
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
          <el-option label="保密" value="baomi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">修改</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (value < 18) {
        // 如果输入的值不符合规则，则提示信息
        return callback(new Error("未满18"));
      } else {
        // 规则通过后的回掉
        callback();
      }
    };
    return {
      managerid: "",
      ruleForm: {
        username: "",
        password: "",
        gender: "",
        age: "",
      },
      imageUrl: "",
      avatar:"",
      _id: "",
      rules: {
        age: [
          { type: "number", message: "只能输入数字", trigger: "change" },
          // 自定义校验规则
          {
            validator: checkAge,
            trigger: "change",
          },
        ],
        password: [
          {
            min: 3,
            max: 12,
            message: "密码长度必须在 3 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(async (valid) => {
        // valid为校验结果，全部校验通过是值为true,否则为false
        if (valid) {
          let currentUser = localStorage.getItem("currentUser");
          currentUser = JSON.parse(currentUser);
          let _id = currentUser.data[0]._id;
          this._id = _id;
          const { ruleForm } = this;
          const { data } = await this.$request.put("/manager/" + _id, {
            ...ruleForm,
          });
          if (data.code === 1) {
            this.$message({
              type: "success",
              message: "修改成功",              
            });
            
            this.$router.push("/login")
          }
        } else {
          return false;
        }
      });
    },
    async avatarChange(e) {
      let currentUser = localStorage.getItem("currentUser");
      currentUser = JSON.parse(currentUser);
      const id = currentUser.data[0]._id;
      const data = new FormData();
      data.set("_id", id);
      data.set("avatar", e.target.files[0]);
     
      const result = await this.$request.post("/upload/avatar", data, {
        contentType: false,
      }); 

      this.avatar = result.data.data.avatarUrl;
      // 更新本地存储数据
      if (id === currentUser._id) {
        currentUser.avatarUrl = result.data.avatarUrl;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      }

    },
  },
  async created() {
    let currentUser = localStorage.getItem("currentUser");
    currentUser = JSON.parse(currentUser);
    this.ruleForm.username = currentUser.data[0].username;
    this.ruleForm.age = currentUser.data[0].age;
    this.ruleForm.gender = currentUser.data[0].gender;
    this.avatar = currentUser.data[0].avatarUrl;
  },
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>