<template>
  <div>
    <van-nav-bar title="商品分类" 
    left-text="" right-text="" 
    left-arrow
    @click-left="onClickLeft" />
    <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex"
      @click-item='onitemclick' @click-nav='onnavclick' />
  </div>
</template>
<script>
  import Vue from "vue";
  import { TreeSelect, NavBar, Toast } from 'vant';
  Vue.use(TreeSelect);
  Vue.use(NavBar);
  Vue.use(Toast);
  export default {
    name: 'Sort',
    data() {
      return {
        items: [
          {
            // 导航名称
            text: '小说',
            // 导航名称右上角徽标，2.5.6 版本开始支持
            // badge: 3,
            // 是否在导航名称右上角显示小红点
            // dot: false,
            // 导航节点额外类名
            className: 'my-class',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '全部小说',
                // id，作为匹配选中状态的标识符
                id: 1,
                // 禁用选项
                // disabled: true,
              },
              {
                text: '诗词散文',
                id: 2,
              },
            ],
          }, {
            text: '杂志',
            // badge: 3,
            // dot: true,
            className: 'my-class',
            children: [
              {
                text: '知音漫客',
                id: 1,
                // disabled: true,
              },
              {
                text: '漫客绘心',
                id: 2,
              }, {
                text: '漫客绘意',
                id: 3
              }, {
                text: '漫客小说绘',
                id: 4,
              }
            ],
          }, {
            text: '绘本',
            // badge: 3,
            // dot: true,
            className: 'my-class',
            children: [
              {
                text: '全部绘本',
                id: 1,
                // disabled: true,
              },
              {
                text: '国学经典',
                id: 2,
              },
            ],
          }, {
            text: '周边',
            // badge: 3,
            // dot: true,
            className: 'my-class',
            children: [
              {
                text: '勇者是女孩',
                id: 1,
                // disabled: true,
              },
              {
                text: '哑舍',
                id: 2,
              }, {
                text: '偷星九月天',
                id: 3,
              }, {
                text: '斗破苍穹',
                id: 4,
              },
            ],
          }, {
            text: '漫画',
            // badge: 3,
            // dot: true,
            className: 'my-class',
            children: [
              {
                text: '浪漫小说',
                id: 1,
                // disabled: true,
              },
              {
                text: '偷星九月天',
                id: 2,
              },
            ],
          },
        ],
        activeId: 1,
        activeIndex: 0,
      }
    },
    methods: {
      onitemclick() {
        this.$router.push({ name: "Novel" })
      },
      onnavclick() {

      },
      onClickLeft() {
        this.$router.push({ name: "Home" })
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>