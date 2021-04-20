// 首页轮播图模块
<template>
  <div class="slider">
    <!-- 轮播图主显示 -->
    <div
      class="pika-stage"
      :style="divStyle"
      :class="divClass"
      @mouseenter="stop"
      @mouseleave="start"
    >
      <div class="slider-item" v-for="(item,index) of imgs" :key="index">
        <router-link to="/">
          <img :src="item.src" />
        </router-link>
      </div>
      <div class="slider-item">
        <router-link to="/">
          <img :src="imgs[0].src" />
        </router-link>
      </div>
    </div>
    <!-- 左右箭头 -->
    <a href="javascript:;" class="previous" @click="move(-1)"></a>
    <a href="javascript:;" class="next" @click="move(1)"></a>
    <!-- 缩略图 -->
    <ul id="slider-list">
      <li class="s-slider-banner" v-for="(item,idx) of imgs" :key="idx" @click="moveTo(idx)">
        <div class="clip">
          <img :src="item.src" :class="idx==index?'active':''" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: 1200,
      //当前页
      index: 0,
      //是否可以触发事件
      canClick: true,
      divClass: { hasTrans: true },
      imgs: [
        {
          src: require("../assets/images/cropped_1600.jpg"),
          title: "《Ghost Mane》| STARR J与恶魔一起住在Dark Castle",
          to: "javascript:;",
        },
        {
          src: require("../assets/images/cropped______20210302141237.jpg"),
          title: "《Ghost Mane》| STARR J与恶魔一起住在Dark Castle",
          to: "javascript:;",
        },
        {
          src: require("../assets/images/cropped_1600-560-____.jpg"),
          title: "《Ghost Mane》| STARR J与恶魔一起住在Dark Castle",
          to: "javascript:;",
        },
        {
          src: require("../assets/images/cropped_1600-560-____-1.jpg"),
          title: "《Ghost Mane》| STARR J与恶魔一起住在Dark Castle",
          to: "javascript:;",
        },
        {
          src: require("../assets/images/cropped_1600-5602.jpg"),
          title: "《Ghost Mane》| STARR J与恶魔一起住在Dark Castle",
          to: "javascript:;",
        },
        {
          src: require("../assets/images/cropped_1600x560.jpg"),
          title: "《Ghost Mane》| STARR J与恶魔一起住在Dark Castle",
          to: "javascript:;",
        },
      ],
      timer: null,
    };
  },
  created() {
    this.start();
  },
  methods: {
    stop() {
      clearInterval(this.timer);
    },
    start() {
      this.timer = setInterval(() => {
        this.move(1);
      }, 3000);
    },
    move(i) {
      if (this.canClick) {
        this.canClick = false;
        //先判断点的是否是左箭头-1并且当前页是否是第一页
        if (i == -1 && this.index == 0) {
          //关闭轮播图动画 瞬间切换到最后一张
          this.divClass.hasTrans = false;
          //50ms计算总图片数
          setTimeout(() => {
            //当前页=最后一张图片
            this.index = this.imgs.length;
            setTimeout(() => {
              //再次开启轮播图动画
              this.divClass.hasTrans = true;
              //然后切换轮播图 此时 this.index为最后一张图片下标+1
              this.index += i;
              console.log(this.index);
              setTimeout(() => {
                //开启节流阀
                this.canClick = true;
              }, 200);
            }, 50);
          }, 50);
        } else if (i == 1 && this.index == this.imgs.length - 1) {
          //可以先切换轮播图 因为最后一张多了一个第一张的图片
          this.index += i;
          console.log(this.index);
          setTimeout(() => {
            this.divClass.hasTrans = false;
            setTimeout(() => {
              this.index = 0;
              setTimeout(() => {
                this.divClass.hasTrans = true;
                setTimeout(() => {
                  this.canClick = true;
                });
              }, 50);
            }, 50);
          }, 200);
        } else {
          this.index += i;
          setTimeout(() => {
            this.canClick = true;
          }, 200);
        }
      }
    },
    moveTo(i) {
      if (this.canClick) {
        this.index = i;
        this.canClick = false;
        setTimeout(() => {
          this.canClick = true;
        }, 300);
      }
    },
  },
  computed: {
    divStyle() {
      //动态计算包裹图片的父盒子宽度
      var width = this.innerWidth * (this.imgs.length + 1) + "px";
      //计算出点击下一张图片需要移动多少距离 等于宽度加第几张图片 0*1200 1*1200 2*1200
      var marginLeft = -this.index * this.innerWidth + "px";
      return { width, marginLeft };
    },
  },
};
</script>

<style>
</style>