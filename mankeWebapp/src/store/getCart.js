//关于购物车的接口
import request from '../utils/request'
import {Notify} from 'vant'
const cart1 ={
   //获取购物车信息
            // state:{
            //     goodsdata:[
            //             {
            //             _id : "5f48bfcc79796a244c8ae5d3",
            //             name : "勇者是女孩11-12 鸠也 知音漫客漫画单行本",
            //             price : "30.00 ",
            //             counts : 66,
            //             weight : 10,
            //             time : "2020-8-21 16:59:00",
            //             img_url: "/img/1553495307649306503.jpg",
            //             qty: 1,
            //             checked:false,
            //         }
            //         ,
            //         {
            //             _id :"5f48bfcc79796a244c8ae5d5",
            //             name : "哑舍漫画版11-12册 知音漫客漫画单行本",
            //             price : "23.60 ",
            //             counts : 66,
            //             weight : 10,
            //             time : "2020-8-21 16:59:00",
            //             img_url: "/img/1124_thumb_G_1536564320165.jpg",
            //             qty: 5,
            //             checked:false,
            //         }    
            //         ,
            //         {
            //             _id : "5f48bfcc79796a244c8ae5d7",
            //             name : "哑舍叁漫画版1 赠特典海报 玄色/晓泊 知音漫客漫画单行本",
            //             price : "28.80 ",
            //             counts : 66,
            //             weight : 10,
            //             time : "2020-8-21 16:59:00",
            //             img_url: "/img/1356_thumb_G_1566455509605.jpg",
            //             qty: 15,
            //             checked:false,
            //         } 
            //     ]
            // // getGoodlist(){
            // //     return request.get()
            // //           }
            //         },

            mutations:{
                add(){
        
                },
                changeQty(state,{_id,qty}){
                state.goodsdata = state.goodsdata.map(item =>{
                    if(item._id === _id){
                        item.qty = qty
                    }
                    return item
                })
                
            }, 
    }
 }
export default cart1