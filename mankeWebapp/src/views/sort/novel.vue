<template>
  <div>
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" background="skyblue" shape="round"
        @search="onSearch(value)" @cancel="onCancel" />
    </form>
    <div class="LR">
      <van-icon name="apps-o" color="red" size="30" class="icon" /><span class="sort">分类浏览</span>
    </div>
    <ul class="box">
      <span>上市</span>
      <span>价格</span>
      <span>人气</span>
    </ul>
    <van-grid :border="false" :column-num="2" class="goodslist" :center="false">
      <van-grid-item v-for="item in datalist" :key="item._id" @click="gotoDetail(item._id)">
        <van-image :src="item.src" />
        <h4 class="table-content">{{item.name}}</h4>
        <p class="price">
          <span class="left">{{item.price}}</span>
          <van-icon class="right" name="shopping-cart-o" />
        </p>
      </van-grid-item>
    </van-grid>
    <van-pagination class="pagination" v-model="currentPage" :total-items="res" :show-page-size="3" :items-per-page="4"
      force-ellipses @change="pageChange" />
  </div>
</template>
<script>
  import Vue from "vue";
  import { Grid, GridItem, Image, Search, Icon, Toast, Pagination } from "vant";
  Vue.use(Grid);
  Vue.use(GridItem);
  Vue.use(Image);
  Vue.use(Search);
  Vue.use(Icon);
  Vue.use(Toast);
  Vue.use(Pagination);

  export default {
    name: 'Novel',
    data() {
      return {
        goodslist: [],
        value: '',
        currentPage: 1,
        res: 1,
        data: {},
        code: '',
        datalist: []
      };
    },
    components: {},
    methods: {
      async onSearch(value) {
        Toast(value);
        var val = this.value;
        var input = new RegExp(value);
        const { data } = await this.$request.get('/goods', {
        })
        var res = data;
        this.datalist = res.filter(item => input.test(item.name))
        console.log(this.goodslist)
      },
      onCancel() {
        Toast('取消');
      },
      async pageChange(currentPage) {
        const { data } = await this.$request.get(`/goods?size=4&page=${currentPage}`)
        this.datalist = data;
        console.log(data)
      },
      gotoDetail(id) {
        this.$router.push({
          name: 'Detail',
          query: {
            id
          }
        })
      },
    },
    async created() {
      // 分类
      const lis = await this.$request.get("/goods")
      var response = lis.data;
      const { id } = this.$route.query;
      this.datalist = response.filter((item) => item.id == id)

      const res = lis.data.length
      this.res = res
      // console.log(res)
      // 列表数据
      const goodslist = await this.$request.get("/goods?size=4&page=1");
      this.goodslist = goodslist.data;
      // console.log(lis)
    }
  }
</script>
<style lang="scss" scoped>
  h4 {
    font-size: 14px;
    color: #333;
  }

  .left {
    float: left;
    color: orange;
  }

  .right {
    float: right;
    color: orange;
  }

  .table-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .pagination {
    margin-bottom: 65px;
  }

  .icon {
    margin-top: 10px;
    margin-right: 8px;
    float: left;
  }

  body {
    background: #F5F5F5;
  }

  .box {
    padding-left: 30px;
    margin-top: 10px;

    span {
      margin-right: 78px;
    }
  }

  .LR {
    height: 45px;
  }

  .sort {
    display: block;
    font-size: 16px;
    float: right;
    margin-top: 15px;
    margin-right: 245px;
  }
</style>