<template>
  <el-card class="searchContent">
    <div class="text item searchHeader">
        <img src="../assets/car.gif" alt="" class="car_gif">
      <h2 class="carHeader">Use our Search Function to Know Your Car !</h2>
      <!-- <div style="clear: both;"></div> -->
    </div>
    <div class="text item tableContent">
        <el-table
    :data="tableData.filter(data => !search || data.Make.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Make"
      prop="Make">
    </el-table-column>
    <el-table-column
      label="Model"
      prop="Model">
    </el-table-column>
    <!-- <el-table-column
      label="Vehicle Class"
      prop="date">
    </el-table-column> -->
    <el-table-column
      label="CO2"
      prop="CO2">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Input the brand"/>
      </template>
      
    </el-table-column>
  </el-table>

    </div>

  </el-card>
</template>

<script>
  export default {
    data() {
      return {
      //   tableData: [{
      //     date: '2016-05-02',
      //     name: 'Ross',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   }, {
      //     date: '2016-05-04',
      //     name: 'Julie',
      //     address: '上海市普陀区金沙江路 1517 弄'
      //   }, {
      //     date: '2016-05-01',
      //     name: 'Gary',
      //     address: '上海市普陀区金沙江路 1519 弄'
      //   }, {
      //     date: '2016-05-03',
      //     name: 'Lily',
      //     address: '上海市普陀区金沙江路 1516 弄'
      //   },
      //   {
      //     date: '2016-05-03',
      //     name: 'Barbara',
      //     address: '上海市普陀区金沙江路 1516 弄'
      //   },
      //   {
      //     date: '2016-05-03',
      //     name: 'Lee',
      //     address: '上海市普陀区金沙江路 1516 弄'
      //   }],
      //   search: ''
      tableData:[{
        Make:'',
        Model:'',
        // vehicle Class:'',
        CO2:''
      }],
      search:''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      async getTableData(){
        try {
        const response = await this.$http.get("http://localhost:5000/mysql");
        
        // this.tableData.Make= JSON.parse(JSON.stringify(response.data)).map(car => car.Make);
        this.tableData= JSON.parse(JSON.stringify(response.data)).map(car => car);

      } catch (error) {
        console.log(error);
      }
      }
    },
    created(){
      this.getTableData();
    }
  }
</script>

<style>
.searchContent{
    background-color: #d2d1ed !important;
}
.searchHeader {
  height: 90px;
  background-color: #8ecd94;
  overflow: hidden;
  /* text-align: center; */

}
.car_gif{
  width: 120px;
   float: left;
   margin-right: 20%;
}
.carHeader{
  color: white;
  transition: transform 0.5s ease;
}
.carHeader:hover {
    transform: scale(1.1); 
    transition: transform 0.5s ease; 
}
</style>