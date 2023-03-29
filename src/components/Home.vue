<template>
    
    <el-container class="home-container">
      <!-- back to the top -->
      <el-backtop></el-backtop>
      <!-- header -->
      <el-header>
        <!-- logo -->
        <el-row :gutter="20">
          <el-col :span="2"
            ><div class="grid-content bg-purple">
              <p class="logo">logo</p>
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <p>System name</p>
            </div></el-col
          >
          <el-col :span="18"
            ><div class="grid-content bg-purple">
              <el-menu class="el-menu-nav" 
              mode="horizontal"
              background-color="#b7d07a"
              text-color="#fff"
              router
              >
                <el-menu-item :index="'/'+'test'">Option1</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">Option2</template>
                  <el-menu-item index="2-1">op1</el-menu-item>
                  <el-menu-item index="2-2">op2</el-menu-item>
                  <el-menu-item index="2-3">op3</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">op4</template>
                    <el-menu-item index="2-4-1">op1</el-menu-item>
                    <el-menu-item index="2-4-2">op2</el-menu-item>
                    <el-menu-item index="2-4-3">op3</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3">Option3</el-menu-item>
                <el-menu-item index="4">Option4</el-menu-item>
              </el-menu>
            </div></el-col
          >
        </el-row>

        <!-- navigation -->
      </el-header>
      <!-- body -->
      <el-container>
        <!-- main -->
        <el-main>
          <el-carousel :interval="3000" type="card" height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
          <!-- main function -->
          <el-row class="function-row">
            <el-button type="primary" round class="function1-button">
              <div class="function1-button-content">
                I am function1 but you can see i am very long, you can even put
                picture or something in me if you want.
              </div>
            </el-button>
            <el-button type="success" round class="function2-button">
              <div class="function2-button-content">
                I am function1 but you can see i am very long, you can even put
                picture or something in me if you want.
              </div>
            </el-button>
            <el-button type="danger" round class="function3-button">
              <div class="function3-button-content">
                I am function1 but you can see i am very long, you can even put
                picture or something in me if you want.
              </div>
            </el-button>
          </el-row>
        </el-main>
        <!-- footer -->
        <el-footer>Footer something not important like copyright</el-footer>
      </el-container>
    </el-container>
</template>

<script>
export default {};
</script>

<style>
.home-container {
  height: 100%;
}
.el-header .logo {
  width: 40px;
  height: 40px;
  /* background-color: #b7d07a; */
}
.el-submenu{
  margin: 0;
  padding: 0 !important;
}


.el-header {
  width: 100%;
  background-color: #b7d07a;
}
.el-aside {
  background-color: #333744;
  height: 400px;
}
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
.el-footer{
  height: 10%;
}
</style>