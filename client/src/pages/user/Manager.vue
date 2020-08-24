<template>
  <div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="用户名" value="1"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
      </el-input>
    </div>
    <el-table
      ref="multipleTable"
      :data="userlist"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="100"></el-table-column>
      <el-table-column type="index" label="#" width="60"></el-table-column>
      <el-table-column label="用户头像" width="120">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column prop="gender" label="性别" width="150" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="150">
        <template v-slot:default="scope">
          <el-button
            size="small"
            plain
            type="success"
            icon="el-icon-edit"
            circle
            @click="goto(scope.row._id)"
          ></el-button>

          <el-button
            size="small"
            plain
            type="danger"
            icon="el-icon-delete"
            circle
            @click="deleteUser(scope.row._id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="lis"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userlist: [],
      currentId: "",
      lis: "",
      input1: '',
      select: '',
    };
  },
  methods: {
    async deleteUser(id) {
      this.$confirm("你确认要删除这条数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const { data } = await this.$request.delete("/manager/" + id);
        if (data.code === 1) {
          this.userlist = this.userlist.filter((item) => item._id !== id);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        }
      });
    },
    goto(id) {
      this.$router.push({
        name: "managerEdit",
        params: { id }
      });
    },
    async handleCurrentChange(val) {
      const { data } = await this.$request.get(`/manager?size=5&page=${val}`);
      this.userlist = data.data;
    },
    async search(){
      var input1 = this.input1;
      var input = new RegExp(input1);
      var res = await this.$request.get("/manager");
      var res1 = res.data.data;
      var res2 = res1.filter(item=>input.test(item.username));
      this.userlist = res2;
    }
  },
  async created() {
    const { data } = await this.$request.get("/manager?size=5&page=1");
    this.userlist = data.data;
    var l = await this.$request.get("/manager");
    var lis = l.data.data.length;
    this.lis = lis;
  },
};
</script>
<style lang="scss">
.block {
  margin-top: 10px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>