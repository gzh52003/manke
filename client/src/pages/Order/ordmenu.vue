<template>
    <div >
       <!-- 面包屑导航区 -->
     <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
     </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-row > 
        <el-col :span="8">
          <el-input placeholder="请输入内容"  v-model="search" @change="searchBtn"   >
            <el-button slot="append" icon="el-icon-search"  ></el-button>
          </el-input>
          
        </el-col>
      </el-row>

            <!-- 订单列表 -->
        <el-table :data="orderList" border stripe :span="24">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="订单编号" prop="_id" show-overflow-tooltip></el-table-column>
        <el-table-column label="订单价格" >1000</el-table-column>
        <el-table-column label="是否付款" >
          <template v-slot:default="scope">
            <el-tag type="danger" size="mini" v-if="scope.row.status">未付款</el-tag>
            <el-tag type="success" size="mini" v-else>已付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="发货地址" prop="cadd" show-overflow-tooltip></el-table-column>
        <el-table-column label="下单时间" prop="date" show-overflow-tooltip></el-table-column>
        <el-table-column label="联系电话" prop="phone" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
             
            <el-button  type="primary" size="mini" icon="el-icon-edit" @click="showEditDialog(scope.row._id)"></el-button>
            <el-button
              
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="showProgressDialog(scope.row._id)"
             
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
     
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.page"
        
        :page-sizes="[5, 10, 15, 20]"
        :page-size="query.size"
        layout=" sizes, prev, pager, next, jumper"
         
      ></el-pagination>
    </el-card>
    
     <el-dialog
      title="修改地址"
      :visible.sync="addressDialogVisible"
      width="50%"
      @close="addressDialogClosed"
       >
      <el-form
        :model="addressForm"
        :rules="addressFormRules"
        status-icon
        ref="addressFormRef"
        label-width="100px"
      >
         <el-form-item label="省市区/县" prop="address1">
          <el-cascader
            v-model="addressForm.address1"
            :options="cityData"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address2">
          <el-input v-model="addressForm.address2"></el-input>
        </el-form-item>
         </el-form>
       <span slot="footer" class="dialog-footer">
        <el-button @click="addressDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible">确 定</el-button>
        </span>
    </el-dialog>
     <!-- <el-dialog title="查看物流进度" :visible.sync="progressDialogVisible" width="50%">
   
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in progressInfo"
          :key="index"
          :timestamp="activity.time"
        >{{activity.context}}</el-timeline-item>
      </el-timeline>
    </el-dialog> -->
    </div>
</template>
<script>
import cityData from './citydata.js'
// import axios from 'axios'
export default {
 
  data () {
    return {
      // 订单列表查询参数
      query: {
        query: '',
        page: 1,
        size: 10
      },
      currenID : 0,
       cadd:'',
      search:'',
      searchdata:'',
      total: 0,
      cityData,
      // 订单列表
      orderList: [],
      // 修改地址对话框
      addressDialogVisible: false,
      addressForm: {
        address1: [],
        address2: ''
      },
      addressFormRules: {
        address1: [
          { required: true, message: '请选择省市区县', trigger: 'blur' }
        ],
        address2: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ]
      },
   
      // 物流进度对话框
      // progressDialogVisible: false,
      // 物流进度
      // progressInfo: []
    }
  },
  created () {
    this.getOrderList()
    //  this.dialogVisible()
  },
  updated(){
    
  
     
  },
  mouted(){
    
  },
  methods: {
    
    //查找订单
    async searchBtn(){
     let search = this.search;
     let searchlist = new RegExp(search)
     const {data} = await this.$request.get('/order',{})
  
      this.orderList = this.orderList.filter(item=>searchlist.test(item.phone));

    },
    async getOrderList () {
      const { data: res } = await this.$request.get('/order', {
        params: this.query
      })
  
      // if (data.status !== 200) {
      //   return '获取订单列表失败！'
      // }
      // this.total = res
      // console.log(total)
        // const datanum = res.length;
        // console.log(datanum)
      // console.log(res,789)
      // console.log(res.data)
      this.orderList = res.data
      
   
    },
    // 分页
    handleSizeChange (newSize) {
      this.query.size = newSize
      this.getOrderList()
    },
    handleCurrentChange (newSize) {
      this.query.page = newSize
      this.getOrderList()
    },
    showEditDialog (id) {
      this.addressDialogVisible = true;
    
      this.currenID = id;
    },
     async dialogVisible(id){
      
       this.$refs["addressFormRef"].validate(async (valid) => {
        // valid为校验结果，全部校验通过是值为true,否则为false
        if (valid) {
          this.addressDialogVisible = false;
            let orderdata = (this.addressForm.address1).join('');
            let orderdatas = this.addressForm.address2;
            let cadd = orderdata+orderdatas;
      
              const data = await this.$request.put("/order/"+ this.currenID,{
                   cadd
                 });
             console.log(data)
          if(data.status === 200){
            this.getOrderList()
              this.$message({
                type: "success",
                message: "更新成功",
            });
          }
        } else {
          console.log("error");
          return false;
        }
      });
    
       
      //  let orderdata = (this.addressForm.address1).join('');
      //  let orderdatas = this.addressForm.address2;
      //  let cadd = orderdata+orderdatas;
      //  console.log(cadd)
      //  const data = await this.$request.put("/order/"+ this.currenID,{
      //         cadd
      //     });
      //     console.log(data)
      //     this.addressDialogVisible = false;
     },

    addressDialogClosed () {
      this.$refs.addressFormRef.resetFields()
    },
    
    //删除操作
    async showProgressDialog(id){
      this.$confirm("你确认要删除这条数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        
        const  data  = await this.$request.delete("/order/" +id);
        //  console.log(data)
        if (data.data === "success") {
          this. orderList = this. orderList.filter((item) => item._id !== id);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        }
      });
    },
    //更新订单数据
    
    }
  }



</script>
<style lang="scss" scoped>

</style>