<template>
  <div>
    <van-nav-bar title="商品分类" 
    left-text="" right-text="" 
    left-arrow
    @click-left="onClickLeft" />
    <van-tree-select :items="items" 
    :active-id.sync="items.activeId" 
    :main-active-index.sync="items.activeId"
    @click-item='()=>{onitemclick(items.id)}' 
    @click-nav='onnavclick' />
  </div>
</template>
<script>
  import Vue from "vue";
  import { TreeSelect, NavBar, Toast } from 'vant';
  Vue.use(TreeSelect);
  Vue.use(NavBar);
  Vue.use(Toast);
  export default {
    // name: 'code',
    data() {
      return {
        items: [
          {
            // code: 1,
            text: '小说',
            className: 'my-class',
            // 该导航下所有的可选项
            children: [
              {
                text: '全部小说',
 
                id: 11,
              },
              {
                text: '诗词散文',
                id: 12,
              },
            ],
          }, {
            // code: 2,
            text: '杂志',
            // badge: 3,
            // dot: true,
            className: 'my-class',
            children: [
              {
                text: '知音漫客',
                id: 21,
              },
              {
                text: '漫客绘心',
                id: 22,
              }, {
                text: '漫客绘意',
                id: 23
              }, {
                text: '漫客小说绘',
                id: 24,
              }
            ],
          }, {
            // code: 3,
            text: '绘本',
            // badge: 3,
            // dot: true,
            className: 'my-class',
            children: [
              {
                text: '全部绘本',
                id: 31,
              },
              {
                text: '国学经典',
                id: 32,
              },
            ],
          }, {
            // code: 4,
            text: '周边',
            className: 'my-class',
            children: [
              {
                text: '勇者是女孩',
                id: 41,
              },
              {
                text: '哑舍',
                id: 42,
              }, {
                text: '偷星九月天',
                id: 43,
              }, {
                text: '斗破苍穹',
                id: 44,
              },
            ],
          }, {
            // code: 5,
            text: '漫画',
            className: 'my-class',
            children: [
              {
                text: '浪漫小说',
                id: 51,
              },
              {
                text: '偷星九月天',
                id: 52,
              },
            ],
          },
        ],
        activeId: 1,
        activeIndex: 0,
      }
      this.items.push({
              // activeId:code,
              text:text
      })
    },
    methods: {
      onnavclick(index) {
        // let code = this.items[index].code //这是通过index获取到当前点击的值
        // this.requestList() //这是请求右侧列表的请求通过activeId去请求  
      },
      onitemclick(data){
        // console.log(data)
       
        this.$router.push({
          path:'/novel/',
          query:{data}
         })
      },
      onClickLeft() {
        this.$router.push({ name: "Home" })
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>