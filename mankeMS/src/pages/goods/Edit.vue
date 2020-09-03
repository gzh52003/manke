<template>
    <div>
        <h1>商品编辑</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
                <el-input type="" v-model="ruleForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
                <el-input type="" v-model.number="ruleForm.price" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="weight">
                <el-input v-model.number="ruleForm.weight"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="counts">
                <el-input v-model.number="ruleForm.counts"></el-input>
            </el-form-item>
            <div class="block" style="margin-bottom:20px;">
                <span class="demonstration"></span>
                <el-date-picker v-model="ruleForm.time" align="right" type="date" value-format="yyyy-MM-dd"
                    placeholder="选择日期" :picker-options="pickerOptions1">
                </el-date-picker>
            </div>
            <el-form-item label="图片地址" prop="src">
                <el-input v-model="ruleForm.src"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submitForm('ruleForm')">修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                goodsid: "",
                ruleForm: {
                    name: '',
                    price: '',
                    weight: '',
                    counts: '',
                    time: '',
                    src:''
                }
            }
        },
        methods: {
            submitForm() {
                this.$refs["ruleForm"].validate(async (valid) => {
                    // valid为校验结果，全部校验通过是值为true,否则为false
                    if (valid) {
                        const { goodsid, ruleForm } = this;
                        const { data } = await this.$request.put("/goods/" + goodsid, {
                            ...ruleForm
                        });
                        console.log(data)
                        if (data.code === 1) {
                            this.$message({
                                type: "success",
                                message: "修改成功",
                            });
                        }
                     }
                     else {
                        return false;
                    }
                });
                this.$router.push({name:'Goodslist'})
            }
        },
        async created() {
            const { id } = this.$route.params;
            const { data } = await this.$request.get("/goods/" + id);
            // console.log(data)
            this.goodsid = id;
            Object.assign(this.ruleForm, data.data);
        }
    }
</script>