<template>
  <div class="container-fl">
    <!-- 1楼扫货区域 -->
    <!-- 商品products -->
    <div class="products clearfix">
      <!-- 商品菜单 -->
      <div class="products-menu">
        <ul class="clearfix">
          <li v-for="(item,index) of products" :key="index">
            <a href="javascript:;" @click="change" :class="aStyle">{{item.title}}</a>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aStyle: {
        selected: false,
      },
      products: [
        { title: "蓝球鞋" },
        { title: "休闲鞋" },
        { title: "健身" },
        { title: "洗鞋神器" },
        { title: "上衣" },
        { title: "裤装" },
        { title: "包包" },
        { title: "配件" },
      ],
    };
  },
  methods: {
    change() {
      console.log(1);
      this.aStyle.selected = true;
      console.log(this.selected);
    },
  },
  components: {},
};
</script>

<style>
</style>