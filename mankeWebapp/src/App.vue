<template>
  <div id="app">
    <!-- 吸顶导航 -->
    <van-sticky offset-top="0" v-model="active">
      <van-nav-bar
        class="title-class"
        :title="$store.state.common.navTitle"
        left-text
        right-text="按钮"
        left-arrow
        @click-left="goBack"
        @click-right="goSearch"
      >
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </van-sticky>

    <router-view />
    <van-tabbar v-model="active" route v-show="showTabbar" id="tabbar" @change="tabbarChange">
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
// document.querySelector("#navBar").scrollTop = document.body.scrollTop
// window.onscroll=function(){
//   console.log(document.body.scrollTop);

// }
// console.log(document.body.scrollTop);

import Vue from "vue";
import {
  Button,
  Tabbar,
  TabbarItem,
  Tag,
  Image,
  ImagePreview,
  Field,
  Checkbox,
  NavBar,
  Sticky,
} from "vant";
Vue.use(Image);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tag);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(NavBar);
Vue.use(Sticky);
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
          icon: "cluster-o",
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
    tabbarChange(e) {
      console.log(e);
    },
    goBack() {
      this.$router.back(-1)
      console.log(1234556);
    },
    goSearch() {
      console.log(1234556);
    },
  },
  created() {
    // this.$store.dispatch('getCart');
    console.log(this.$store);
  },
};
</script>
<style lang="scss">
.title-class {
  height: 32px;
  .van-nav-bar__title {
    font-size: 18px;
  }
  .van-nav-bar__arrow {
    font-size: 24px;
  }
  .van-nav-bar__right {
    font-size: 24px;
  }
}
#navBar {
  height: 32px;
}
#tabbar {
  position: flex;
  bottom: 0;
}
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

