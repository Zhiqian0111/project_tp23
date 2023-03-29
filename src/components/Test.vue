<template>
  <el-dropdown @command = "clickDropdown">
  <span class="el-dropdown-link">
    dropdown<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="op1">op1</el-dropdown-item>
    <el-dropdown-item command="op2">op2</el-dropdown-item>
    <el-dropdown-item command="op3">op3</el-dropdown-item>
    <el-dropdown-item command="op4">op4</el-dropdown-item>
    <el-dropdown-item command="op5">op5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</template>

<script>
export default {
    data(){
        return{
            option:''
        }
    },
    methods:{
        clickDropdown(command){
            alert(command)
        }
    }

}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>