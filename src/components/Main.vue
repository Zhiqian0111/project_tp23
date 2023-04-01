<template>
  <div>
    <el-backtop></el-backtop>
    <el-carousel :interval="3000" type="card" height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
          <!-- main function -->
          <el-row class="function-row">
            <el-button type="primary" round class="function1-button" @click="goCarEmission">
                
              <div class="function1-button-content">
                I am function1 but you can see i am very long, you can even put
                picture or something in me if you want.
              </div>
            </el-button>
            <el-button type="success" round class="function2-button">
              <div class="function2-button-content">
                I am function2 but you can see i am very long, you can even put
                picture or something in me if you want.
              </div>
            </el-button>
            <el-button type="danger" round class="function3-button" >
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
    methods:{
        goCarEmission(){
            this.$router.push('/carEmission')
        }
    }

}
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
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
  width: 150px;
  white-space: normal;
  /* word-break: break-all; */
  word-wrap: break-word;
}
</style>