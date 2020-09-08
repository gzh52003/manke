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
      <van-grid-item v-for="item in goodslist" :key="item._id" @click="gotoDetail(item._id)">
        <van-image :src="item.src" />
        <h4 class="table-content">{{item.name}}</h4>
        <p class="price">
          <span class="left">{{item.price}}</span>
          <van-icon class="right" name="shopping-cart-o" @click.stop="addCart" />
        </p>
      </van-grid-item>
      <van-pagination class="pagination" v-model="currentPage" :total-items="res" :show-page-size="3"
      :items-per-page="4" force-ellipses @change="pageChange" />
    </van-grid>
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
        data: {}
      };
    },
    components: {},
    computed: {
      cartlist() {
        return this.$store.state.cart.goodslist;
      }
    },
    methods: {
      async onSearch(value) {
        Toast(value);
        var val = this.value;
        var input = new RegExp(value);
        const { data } = await this.$request.get('/goods', {
        })
        var res = data;
        this.goodslist = res.filter(item => input.test(item.name))
        console.log(this.goodslist)
      },
      onCancel() {
        Toast('取消');
        // const goodslist = await this.$request.get("/goods");
        // this.goodslist = goodslist.data;
      },
      async pageChange(currentPage) {
        const { data } = await this.$request.get(`/goods?size=4&page=${currentPage}`)
        this.goodslist = data;
        console.log(data)
      },
      async getData(id) {
        // console.log('source=', this.$request.source)
        const { data } = await this.$request.get("/goods/" + id, {
        });
        this.data = data.data;
      },
      addCart() {
        console.log(1)
        // 添加当前商品到购物车;
        // 判断当前商品是否已经存在购物车中
        // 存在：数量+1
        // 不存在：添加到购物车
        const { _id } = this.data;
        console.log(this.data)
        const current = this.cartlist.filter(item => item._id === _id)[0]
        if (current) {
          this.$store.commit('changeQty', { _id, qty: current.qty + 1 })
        } else {
          const goods = {
            ...this.data,
            qty: 1
          }
          // 调用mutation方法
          this.$store.commit('add', goods);
        }
      },
      gotoDetail(id) {
        this.$router.push({
          name: 'Detail',
          params: {
            id
          }
        }) 
      },
    },
    async created() {
      // 列表数据
      const goodslist = await this.$request.get("/goods?size=4&page=1");
      this.goodslist = goodslist.data;
      const lis = await this.$request.get('/goods')
      const res = lis.data.length
      this.res = res
      const { id } = this.$route.params;
      // console.log("$route=", this.$route);
      // console.log("this=", this);
      this.getData(id);
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