<template>
  <el-container style="height:100%">
    <el-header class="header">
      <el-row>
        <el-col :span="12" class="logo">
          <i class="el-icon-connection"></i>漫客商城后台管理系统
        </el-col>
        <el-col :span="12" style="text-align:right">
          <el-button type="text">欢迎登录,{{name}}</el-button>
          <el-link href="/login" type="warning" :underline="false" style="padding-left: 10px">退出</el-link>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu
          style="height:100%"
          :default-active="activeIndex"
          mode="vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ff0"
          @select="changeMenu"
          :default-openeds="openMenu"
          router
        >
          <template v-for="item in menu">
            <el-menu-item :index="item.path" :key="item.path" v-if="!item.submenu">
              <i :class="item.icon" style="color:#fff"></i>
              {{item.text}}
            </el-menu-item>
            <el-submenu :key="item.path" :index="item.path" v-else>
              <template v-slot:title>
                <i :class="item.icon" style="color:#fff"></i>
                {{item.text}}
              </template>
              <el-menu-item
                :key="sub.path"
                :index="item.path+sub.path"
                v-for="sub in item.submenu"
              >{{sub.text}}</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <div style="padding:15px 0;">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/manger/Manger",
      openMenu: [],
      menu: [
        {
          text:"管理员",
          path:"/manger/Manger",
          icon:"el-icon-key"
        },
        {
          text: "用户管理",
          path: "/user/List",
          icon: "el-icon-user-solid"
        },
        {
          text: "商品管理",
          path: "/goods",
          icon: "el-icon-grape",
        },
        {
          text: "订单管理",
          path: "/order",
          icon: "el-icon-s-order",
        },
        {
          text: "个人中心",
          path: "/mine",
          icon: "el-icon-edit",
        },
      ],
      currentIndex: 0,
      name: "",
    };
  },
  methods: {
    goto(path, idx) {
      console.log(this.$router);
      this.$router.push(path);
      this.currentIndex = idx;
    },
    back() {
      this.$router.back();
    },
    changeMenu(path) {
      this.activeIndex = path;
    }
  },
  created() {
    var data = JSON.parse(localStorage.getItem("currentUser"));
    var name = data.data[0].username;
    this.name = name;
  },
  components: {},
};
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
.header {
  line-height: 60px;
  color: #fff;
  background-color: rgba(84, 92, 100, 0.9);
  .logo {
    font-size: 24px;
    color: #fc0;
    i {
      font-size: 40px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
.is-active {
  i {
    color: inherit !important;
  }
}
</style>