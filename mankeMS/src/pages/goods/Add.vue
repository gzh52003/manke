<template>
  <div>
    <h1>添加商品</h1>
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
        <el-date-picker v-model="ruleForm.time" align="right" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
      <el-form-item label="图片地址" prop="src">
        <el-input v-model="ruleForm.src"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          price: '',
          weight: '',
          counts: '',
          time: '',
          src:''
        },
        rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
          ],
          price: [
            { required: true, message: '请输入商品价格', trigger: 'blur' },
          ],
          weight: [
            { required: true, message: '请输入商品重量', trigger: 'blur' },
          ],
          counts: [
            { required: true, message: '请输入商品数量', trigger: 'blur' },
          ],
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      }
    },
    methods: {
      submitForm() {
        this.$refs['ruleForm'].validate(async (valid) => {
          if (valid) {
            const { ruleForm } = this;
            console.log(ruleForm)
            const { data } = await this.$request.post("/goods/", {
              ...ruleForm
            });
            alert('添加成功');
          } else {
            return false;
            alert('请重新添加');
          }
        })
        this.$router.push({ name: 'Goodslist' })
      },
    }
  }
</script>

<style>

</style>