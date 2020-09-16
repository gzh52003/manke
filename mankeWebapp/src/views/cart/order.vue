<template>
   <div>
        <van-steps :active="active">
      <van-step>购物车</van-step>
      <van-step>确认订单</van-step>
      <van-step>付款</van-step>
      <van-step>购买完成</van-step>
      </van-steps>
      <!-- <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        add-button-text=""
      
        /> -->
       <van-card
       :price="item.price"
      :title="item.name"
      :thumb="item.img_url"
      v-for="item in goodsdata"
      :key="item._id"
       @click-thumb="gotoDetail(item._id)"
      >
      <template #top>
          <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        add-button-text=""
      
        />
        </template>
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
      <van-submit-bar  button-text="提交订单" >
      <van-checkbox >全选</van-checkbox>
     
    </van-submit-bar>
     
       
   </div>
</template>

<script>
import Vue from "vue";
import { AddressList ,Step,Steps,Toast ,Card, Checkbox, Button, SubmitBar} from 'vant';

Vue.use(AddressList);
Vue.use(Step)
Vue.use(Steps)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(SubmitBar)




export default {
    name:"order",
    data(){
        return{
             active:1,
             chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000010000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
      ],
    };
    },
     created(){
        //  console.log(this.$store.state.cart.goodsdata)
        //  console.log(this.$store.state.goodsdata)
    },
    methods:{
    //      onEdit(item, index) {
    //   Toast('编辑地址:' + index);
    
    //     },
            removeItem(id){
                    this.$store.commit('remove',id)
                },
           changeQty(id,qty){
            this.$store.commit('changeQty',{_id:id,qty})
            // this.$store.dispatch('changeQtyAsync',{_id:id,qty})
          },
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
    }
}
</script>