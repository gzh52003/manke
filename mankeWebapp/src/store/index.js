import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart'
import common from './common'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        getters:{
            //计算商品总价
            totalPrice(state, getters, rootState, rootGetters){
                // console.log('getters=',state, getters, rootState, rootGetters)
                return this.goodsdata.reduce((pre,item)=>pre+(item.price*item.qty)*100,0)
                
                
            },
            test(){
                return 'cart'
            }
        },
       
    },
    mutations:{
        // 修改数量
        // changeQty(state,{_id,qty}){
        //     state.goodsdata = state.goodsdata.map(item=>{
        //         if(item._id === _id){
        //             item.qty = qty;
        //         }
        //         return item;
        //     });

        //     // console.log(state.goodsdata)
        // },

        // // 删除商品
        // remove(state,_id){
        //     state.goodsdata = state.goodsdata.filter(item=>item._id!==_id)
        // },

        // // 清空购物车
        // clear(state){
        //     state.goodsdata = []
        // }
        
    },
    // store模块化
    modules:{
        cart,
        common,
    },
     
})

export default store;