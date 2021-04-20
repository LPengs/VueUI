<template>
  <!-- 首页大盒子 -->
  <div class="main">
    <!-- 版心   -->
    <div class="home-index container">
      <!-- 轮播图 -->
      <index-slider />
      <!-- 首页主题内容 -->
      <div class="main">
        <!-- 左侧大盒子 -->
        <container-fl />
        <!-- 右侧大盒子 -->
      </div>
    </div>
  </div>
</template>

<script>
import IndexSlider from "./IndexSlider.vue";
import ContainerFl from "./ContainerFl.vue";
export default {
  components: {
    // 注册子组件轮播图
    IndexSlider,
    ContainerFl,
  },
};
</script>

<style>
@import "../assets/css/index.css";
</style>