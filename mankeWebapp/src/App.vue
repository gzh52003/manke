<template>
  <div id="app">
    <!-- <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar> -->
    <router-view />
    <van-tabbar v-model="active" route v-show="showTabbar">
      <van-tabbar-item
        :badge="item.name==='cart'?cartLength:''"
        :icon="item.icon"
        v-for="item in menu"
        :key="item.name"
        :to="item.path"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import {Button,Tabbar,NavBar,TabbarItem,Tag, Image, ImagePreview, Field, Checkbox,Toast,Icon,} from 'vant'
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(NavBar);
Vue.use(TabbarItem);
Vue.use(Tag);
Vue.use(Image);
Vue.use(ImagePreview);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(Toast);
Vue.use(Icon);
export default {
  data() {
    return {
      active: 0,
      // showMenu:true,
      menu: [
        {
          name: "home",
          path: "/home",
          icon: "wap-home-o",
          text: "首页",
        },
        {
          name: "sort",
          path: "/sort",
          icon: "eye-o",
          text: "分类",
        },
        {
          name: "cart",
          path: "/cart",
          icon: "shopping-cart-o",
          text: "购物车",
        },
        {
          name: "profile",
          path: "/profile",
          icon: "user-o",
          text: "我的",
        },
      ],
    };
  },
  computed: {
    cartLength() {
      // return this.$store.state.cart.goodslist.length
    },
    showTabbar() {
      return this.$store.state.common.showTabbar;
    },
  },
  methods: {
    onClickLeft() {},
  },
  created() {
    // this.$store.dispatch('getCart');
    console.log(this.$store);
  },
};
</script>
<style lang="scss">
.price {
  del {
    color: #999;
    margin-right: 5px;
    &::before {
      content: "￥";
    }
  }
  span {
    color: #f00;
    &::before {
      content: "￥";
    }
  }
}
</style>

