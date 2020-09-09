<template>
    <div>
        <van-nav-bar title="漫画小说" left-text="返回" right-text="" left-arrow @click-left="onClickLeft" />
        <van-image :src="data.src"></van-image>
        <div class="goods-info">
            <h1>{{data.name}}</h1>
            <p class="price">
                商品价格：<span>{{data.price}}</span>
            </p>
        </div>
        <van-stepper class="stepper" @change="changeQty(data._id,$event)" />
        <p class="pc" >商品总价:</p>
        <div class="button">
            <van-button class="button_1" color="#1CBB7F" size="normal" round type="info">立即购买</van-button>
            <van-button type="info" size="normal" color="#f4a213" round>加入购物车</van-button>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { NavBar, Stepper, Button} from 'vant';
    Vue.use(NavBar);
    Vue.use(Stepper);
    Vue.use(Button);

    export default {
        name: 'Detail',
        data() {
            return {
                data: {},
            };
        },
        methods: {
            changeQty(id,qty){
            this.$store.commit('changeQty',{_id:id,qty})
            // this.$store.dispatch('changeQtyAsync',{_id:id,qty})
          },
            onClickLeft() {
                this.$router.push({ name: "Novel" })
            },
            async getData(id) {
                const { data } = await this.$request.get("/goods/" + id, {
                });
                this.data = data.data;
                this.$store.commit('changeTitle', this.data.name)
                //   console.log(this.data)
            },
        },
        async created() {
            const { id } = this.$route.params;
            // console.log("$route=", this.$route);
            this.getData(id);
        },
    }

</script>
<style>
    h1 {
        font-size: 16px;
    }

    .goods-info {
        padding-left: 28px;
        padding-right: 28px;
    }

    .stepper {
        padding-left: 28px;
    }

    .pc {
        padding-left: 28px;
    }

    .button {
        padding-left: 28px;
    }

    .button_1 {
        margin-right: 38px;
    }
</style>