<template>
    <div>
        <!-- 面包屑导航 -->
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb> -->
        <el-input placeholder="请输入内容" icon="search" clearable v-model="input"
         style="width:38%">    
         <el-button slot="append" icon="el-icon-search" @click="getGoodsList" style="color:#fff;background:#409EFF"></el-button>
        </el-input>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="goAddPage">添加商品</el-button>
        <!-- 表格数据 -->
        <el-table ref="multipleTable" :data="goodlist" tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="#" type="index" width="55">
            </el-table-column>
            <el-table-column label="商品图片" prop="src" width="100">
                <template v-slot:default="scope">
                    <img :src="scope.row.src?scope.row.src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3496432758,2225654888&fm=11&gp=0.jpg'
                    " style="width:80px;height:80px;"/>
                </template>
            </el-table-column>
            <el-table-column label="商品名称" prop="name" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="price" label="商品价格（元）" width="80">
            </el-table-column>
            <el-table-column prop="counts" label="商品数量" width="80">
            </el-table-column>
            <el-table-column prop="weight" width="100" label="商品重量">
            </el-table-column>
            <el-table-column prop="time" label="创建时间" width="160">
            </el-table-column>
            <el-table-column label="操作" width="100">
                <!-- 获取数据id -->
                <template v-slot:default="scope">
                    <el-button size="small" plain type="success" icon="el-icon-edit" circle
                        @click="goto(scope.row._id)">
                    </el-button>
                    <el-button size="small" plain type="danger" icon="el-icon-delete" circle
                        @click="deleteGoods(scope.row._id)">
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页效果 -->
        <el-pagination @current-change="handleCurrentChange"
            :page-size="6" layout="prev, pager, next, jumper" :total="res">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // 查询参数对象
                input:"",
                goodlist: [],
                res:1,
                currentId: "",
            }
        },
        // 调用获取数据列表的函数
        created() {
            this.getGoodsList()
        },
        methods: {
            async getGoodsList() {
                var input = this.input;
                var input1 = new RegExp(input);
                const { data} = await this.$request.get('/goods', {       
                })
                console.log(data)
                var res = data;
                this.goodlist=res.filter(item=>input1.test(item.name))
            },
            // 分页
            async handleCurrentChange(val) {
                const { data } = await this.$request.get(`/goods?size=6&page=${val}`)
                this.goodlist = data;              
            },
            // 删除数据
            async deleteGoods(id) {
                this.$confirm("你确认要删除这条数据吗", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                }).then(async () => {
                    const  {data} = await this.$request.delete("/goods/" + id);

                    if (data === "success") {
                        
                        this.goodlist = this.goodlist.filter((item) => item._id !== id);
                        this.$message({
                            type: "success",
                            message: "删除成功!",
                        });
                    }
                });
            },
            // 跳转路由传参 编辑
            goto(id) {
                this.$router.push({
                    name: 'goodsEdit',
                    params: { id },
                    query: {
                        a: 10, b: 20
                    }
                })
            },
            goAddPage() {
                this.$router.push('/goods/add')
            }
        },
        // 请求数据
        async created() {

            const { data } = await this.$request.get('/goods?size=6&page=1')
            //console.log(data);
            this.goodlist = data;

            const lis = await this.$request.get('/goods')

            const res = lis.data.length
            // console.log(res)
            this.res = res
        }
    }
</script>
<style>

</style>