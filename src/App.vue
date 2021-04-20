<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// 1 引入
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  //2.注册
  components: {
    Header, //Header : Header
    Footer,
  },
};
</script>
<style>
/* 引入全局样式文件 初始化样式 */
@import "./assets/css/common.css";
</style>
