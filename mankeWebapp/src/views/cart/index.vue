<template >
<div>
  <!-- 未登录页面 -->
  <div v-if="!inCart" >
   <van-nav-bar title="购物车" size="25" left-arrow border @click-left="onLeftBack" > 
       <template #right>
          <van-icon name="search" size="25" @click="search" />
        </template>    
   </van-nav-bar>
   
   <div class="cartbody" >
   <van-icon name="cart-o" class="nocart" />
    <h3 class="cartlist">购物车还是空的</h3>
    <p class="center">现在就去选购吧</p>
    <van-button type="primary" class="button" @click="gologin">去逛逛</van-button>
   </div>
   <van-submit-bar class="footerCart" :price="0" button-text="去结算" @submit="gologin">

   </van-submit-bar>
   </div>
   <!-- 登录页面 -->
    <div v-if="inCart" >
      <van-steps :active="active">
      <van-step>购物车</van-step>
      <van-step>确认订单</van-step>
      <van-step>付款</van-step>
      <van-step>购买完成</van-step>
      </van-steps>
      <van-card
       :price="item.price"
      :title="item.name"
      :thumb="item.img_url"
      v-for="item in goodsdata"
      :key="item._id"
       @click-thumb="gotoDetail(item._id)"
      >
        <template #tag>
          <van-checkbox v-model="item.checked"></van-checkbox>
        </template>
        <template #price>
         
        <p class="price">
          
          <span>{{item.price}}</span>
          <van-stepper :value="item.qty" input-width="20px" button-size="20px" theme="round" async-change integer   @change="changeQty(item._id,$event)" />
          <!-- async-change: 点击按钮时不会直接修改数量，而是根据value的值来显示 -->
        </p>
        </template>
        <template #footer>
          <van-button size="mini" type="danger" icon="close" plain @click.stop="removeItem(item._id)"></van-button>
          
        </template>
      </van-card>
      <div style="padding:10px">
      <van-button plain type="danger" size="small"  @click="clearCart" >清空购物车</van-button>
      </div>
     <van-submit-bar :price="totalPrice" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span> 
      </template> -->
    </van-submit-bar>
    
  
   
   </div>
</div>
</template>
<script> 
import Vue from "vue";
import { Card, Step, Steps, SubmitBar, Stepper,NavBar, Icon, Button ,Toast} from "vant";
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

Vue.use(Card);
Vue.use(Step);
Vue.use(Steps);
Vue.use(SubmitBar)
Vue.use(Stepper)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Toast)


export default {
  name: "Cart",
  data(){
    return{
        inCart:true,
        // checkAll:false,
        active:0,
        selected:[],
        
             
              // tokenState:false,
                }
              } ,
  methods:{
          onSubmit(){
            this.$router.push('/order')
          },
          removeItem(id){
            this.$store.commit('remove',id)
          },
          clearCart(){
              this.$store.commit('clear')
          },
           changeQty(id,qty){
            this.$store.commit('changeQty',{_id:id,qty})
            // this.$store.dispatch('changeQtyAsync',{_id:id,qty})
          },
          onLeftBack(){
              this.$router.push('/home')
          },
          gotoDetail(id){
              this.$router.push('/detail/'+id);
            },
          gologin(){
            Toast({
              duration: 500,
            message: '请先登录',
            icon: 'warning-o',
            });
            setTimeout(()=>{
              this.$router.push('/profile')
            },500)
                  },
              search(){
                this.$router.push('/home')
              },
              // goCart(){
              //    if(tokenState){
              //       setTimeout(()=>{
              //     this.$router.push('/profile')
              //   },2000)
              //    }else{
              //      this.inCart = true;
              //    }
              // },
                },
    created(){
        //  console.log(this.$store.state.cart.goodsdata)
        //  console.log(this.$store.state.goodsdata)
    },
    computed:{
        totalPrice(){
         return this.goodsdata.reduce((pre,item)=>pre+(item.price*item.qty)*100,0)
        //  return  this.$store.getters.totalPrice
      
        },
        checkAll:{
          get(){
            return this.goodsdata.every(item=>item.checked);
          },
          set(val){
            this.goodsdata = this.goodsdata.map(item=>{
              item.checked = val;
              return item;
            });
          }
        },
    goodsdata(){
      // return this.$store.state.cart.goodslist
      return this.$store.state.goodsdata
    },

    // 把vuex中state数据映射到组件的computed
    // ...mapState(['goodslist']), // 等效于：goodslist()=>this.$store.state.goodslist
    // ...mapState({
    //   // cartlist:'goodslist', // 等效于：cartlist()=>this.$store.state.goodslist

    //   // 映射模块化后的数据
    //   goodsdata(state){
    //     console.log('mapState=',state)
    //     return state.cart.goodsdata
    //   }
    //        })
      }
      
};
</script>

<style lang="scss" scoped>
 .box{
   clear: both;
   width:100%;
  height:100%;
   background-color: red;
 }

.cartbody{
            
            width:100%;
            position: absolute;
            height:90%;
            background-color:#eee;
}

.cartlist{
  margin:10px 0;
   text-align: center;
}
.nocart{
   position: relative;
   padding:0 30px;
    font-size: 20rem;
   
    color: #666;
    width:200px;
    height:200px;
    text-align: center;  
}
.center{
    margin:10px 0;
  top:5px;
  text-align: center;
}
.button{
      display: block;
    background: #1cbb7f;
    font-size: 2.3rem;
    line-height: 40px;
   top:2px;
    color: #fff;
    width: 60%;
    margin: auto;
    border-radius: 2px;
    font-family: "微软雅黑";
    text-align: center;
}
</style>