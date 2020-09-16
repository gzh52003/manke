
import request from '../utils/request'
import {Notify} from 'vant'

const cart = {
    // 添加命名空间
    // namespaced:true,
    // 共享的数据：类似组件中的data
    state:{
        goodslist:'',                            
    },

    // 定义修改state的事件
    // 调用：this.$store.commit('add')
    mutations:{
        initCart(state,data){
            state.goodslist = data;
            console.log("goodslength:",state.goodslist);
        },
        
        
    },

    actions:{
        // 根据库存数量来判断是否允许更改购物车商品数量
        async changeQtyAsync(context,{_id,qty}){
            console.log('context=',context);
            // 发起ajax请求，获取当前商品的库存数量
            // 库存>=qty：允许修改购物车商品数量
            // 库存<qty：不允许增加购物车商品数量
            const {data} = await request.get(`/goods/${_id}/kucun`)
            const kucun = data.data;
            console.log('kucun=',kucun)

            if(kucun<qty){
                Notify({ type: 'danger', message: '库存不足' })
                qty = kucun;
            }
            context.commit('changeQty',{_id,qty})
        },
        async getCart(){
            const {data} = await request.get(`/cart`);
            context.commit('initCart',data.data)

        }
    }
}

export default cart;