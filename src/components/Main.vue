<template>
  <div>
    <el-backtop></el-backtop>

    <el-carousel :interval="3000" type="card" height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>

    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          一致性 Consistency &nbsp;<i class="el-icon-circle-plus-outline"></i>
        </template>
        <div>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        </div>
        <div>
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          一致性 Consistency &nbsp;<i class="el-icon-circle-plus-outline"></i>
        </template>
        <div>
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        </div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          一致性 Consistency &nbsp;<i class="el-icon-circle-plus-outline"></i>
        </template>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
        </div>
        <div>
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          一致性 Consistency &nbsp;<i class="el-icon-circle-plus-outline"></i>
        </template>
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- main function -->
    <el-row class="function-row">
      <el-button
        type="primary"
        round
        class="function1-button"
        @click="goCarEmission"
      >
        <div class="function1-button-content">
          <img src="../assets/function1.png" alt="" class="func1_img" />
          <p class="funcDesc">Carbon dioxide calculator</p>
        </div>
      </el-button>
      <el-button type="success" round class="function2-button"
      @click="goSearch"
      >
        <div class="function2-button-content">
          I am function2 but you can see i am very long, you can even put
          picture or something in me if you want.
        </div>
      </el-button>
      <el-button type="danger" round class="function3-button">
        <div class="function3-button-content">
          I am function3 but you can see i am very long, you can even put
          picture or something in me if you want.
        </div>
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    goCarEmission() {
      this.$router.push("/carEmission");
    },
    goSearch(){
      this.$router.push("/search");
    }
  },
};
</script>

<style>
.el-main {
  /* background-color: orange; */
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(3) {
  background-color: #99a9bf;
  background-image: url("../assets/home-01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.el-carousel__item:nth-child(4) {
  background-color: #99a9bf;
  background-image: url("../assets/home-02.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.el-carousel__item:nth-child(5) {
  background-color: #99a9bf;
  background-image: url("../assets/home-03.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.el-carousel__item:nth-child(6) {
  background-color: #99a9bf;
  background-image: url("../assets/home-04.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.el-collapse{
  width: 80%;
  margin: 0 auto;
}
.el-collapse-item__header{
  background-color:  #b7d07a !important;
  color: white !important;
}
.el-collapse-item__content {
  color:  #b9e8c0; /* 改变折叠状态的背景颜色 */
}
.el-collapse-item__wrap.is-active {
  background-color: #e0e0e0; /* 改变展开状态的背景颜色 */
}

/* .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.function-row {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 15px; */
}
.el-button {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-button:hover {
  transform: translateY(-5px);
}
.function1-button-content,
.function2-button-content,
.function3-button-content {
  width: 250px;
  white-space: normal;
  /* word-break: break-all; */
  word-wrap: break-word;
}
.func1_img {
  width: 250px;
}
.funcDesc {
  font-size: 20px;
}
</style>