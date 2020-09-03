<template>
  <div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input1" class="input-with-select" style="width:500px">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="用户名" value="1"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
      </el-input>
      按年龄区间查找
      <el-select  v-model="select1" style="width:120px" slot="prepend" placeholder="请选择" >
              <el-option label="20岁~28岁" value="01" @click.native="searchage(select1)"></el-option>
              <el-option label="29岁~37岁" value="02" @click.native="searchage(select1)"></el-option>
              <el-option label="38岁~46岁" value="03" @click.native="searchage(select1)"></el-option>  
              <el-option label="47岁~55岁" value="04" @click.native="searchage(select1)"></el-option>
        </el-select>
      <el-input placeholder="请输入最低年龄" v-model="select1min" ref="min" class="input-with-select" style="width:200px;margin-left:5px">
      </el-input>
       <el-input placeholder="请输入最高年龄" v-model="select1max" ref="max" class="input-with-select" style="width:200px">
      </el-input>
       <el-button slot="append" icon="el-icon-search" @click="searchage()"></el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="userlist"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection" width="100"></el-table-column>
      <el-table-column prop="id" label="管理员ID" width="120px"></el-table-column>
      <el-table-column label="用户头像" width="120">
        <template v-slot:default="scope">
          <!-- <template slot-scope="scope"> -->
          <!-- <el-avatar :src="scope.row.avatarUrl?scope.row.avatarUrl: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1155772843,599594265&fm=26&gp=0.jpg'"></el-avatar> -->
          <el-avatar :src="scope.row.avatarUrl?scope.row.avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"></el-avatar>
        </template>
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
        @current-change="handleCurrentChange"
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
      lis: 1,
      
      input1: '',
      select: '',
      select1:'',
      select1min:'',
      select1max:''
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
      console.log(val)
      this.userlist = data.data;
      this.page=val
    },
    async search(){
      console.log(123)
      var input1 = this.input1;
      var input = new RegExp(input1);
      var res = await this.$request.get("/manager");
      var res1 = res.data.data;
      var res2 = res1.filter(item=>input.test(item.username));
      this.userlist = res2;
    },
    async searchage(num){
      console.log(num)
      
      switch(num){
        case "01":
              this.select1min=20
              this.select1max=28
              break
        case "02":
              this.select1min=29
              this.select1max=37
              break
        case "03":
              this.select1min=38
              this.select1max=46
              break
        case "04":
              this.select1min=47
              this.select1max=55
              break
                console.log(6666666)
      }
      const {data} = await this.$request.get(`/manager/age?miage=${this.select1min}&maage=${this.select1max}`);
      this.userlist=data.data
      this.lis=this.userlist.length
      console.log(this.lis.length)
      console.log(data)
    }
  },
  async created() {
    const { data } = await this.$request.get('/manager?size=5');
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