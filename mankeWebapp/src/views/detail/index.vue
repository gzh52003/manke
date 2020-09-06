<template>
  <div>
    详情页面
 
      <div>
        <van-image :src="data.img_url" @click="showBig"></van-image>
        <div class="goods-info">
          <!-- <h1>{{data.goods_name}}</h1> -->
          <van-tag plain type="primary">{{data.name}}</van-tag>
          <p class="price">
     
            <span>{{data.price}}</span>
          </p>
        </div>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

export default {
  name:'Detail',
  data() {
    return {
      data: {},
      recommend:[]
    };
  },
    methods:{
          //   async getData(id){
          //   // this.goodsRequestSource = this.$request.source;
          //   console.log('source=',this.$request.source)
          //   const  data = await this.$request.get("/goods/" + id,{
          //     // cancelToken:this.goodsRequestSource.token
          //   });
          //   this.data = data;
          //   console.log("data=", data);
          // },
          showBig() {
          console.log(this.data);
          
          ImagePreview({
            images: [
              this.data.img_url,
              "/img/1553744756023691406.jpg",
              "/img/1563864459158190036.jpg",
              "/img/1381_thumb_G_1570695875118.jpg",
            ],
            closeable: true,
          });
        },
      },
    async created() {
    const {id} = this.$route.params;
    console.log("$route=", this.$route);
    console.log("this=", this);

    this.getData(id);
    // this.getRecommend()
    
  },
  mounted(){
    // 控制菜单显示
    // this.$parent.showMenu = false;
    // console.log('goods.created',this.$parent.showMenu)
    this.$store.commit('displayTabbar',false);
  },
      
}
</script>