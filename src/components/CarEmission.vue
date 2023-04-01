<template>
  <div class="content">
    <div class="headerPic">put a gif or something</div>
    <el-row :gutter="0">
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <div class="emission-content">
            put text description and picture here
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-card>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="Car Brand:" :prop="carBrand=selectedBrand">
                <el-select
                  v-model="selectedBrand"
                  filterable
                  placeholder="Select"
                  clearable
                  @change="fetchCarbonData"
                  @clear = "clearBrand"
                >
                  <el-option
                    v-for="brand in brands"
                    :key="brand"
                    :label="brand"
                    :value="brand"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="Distance(KM):" prop="distance">
                <el-input
                  placeholder="Input an number"
                  v-model="ruleForm.distance"
                  clearable
                >
                </el-input>
              </el-form-item>

              <div class="text item"></div>
              <div class="text item">
                <el-button type="success" round @click="submitForm('ruleForm')"
                
                  >check</el-button
                >
                <el-button type="success" round @click="resetForm('ruleForm')">reset</el-button>
              </div>
            </el-form>

            <div v-if="total !== null">
              Your driving raises the global temperature by
              <el-tag type="danger" effect="dark">{{ total }}</el-tag> ℃
            </div>
          </el-card>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    var checkPositive = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('input a number please'));
        }
          if (isNaN(value)) {
            callback(new Error('your input should be a number'));
          } else {
            if (parseFloat(value) < 0) {
              callback(new Error('positive number please'));
            } else {
              callback();
            }
          }
      };
    return {
      brands: [], // brand list
      selectedBrand: null, // brand
      carbonData: null, // carbon emission
    //   distance: "",
      total: "",
      ruleForm: {
        carBrand:'',
        distance:''
        },
     rules:{
        carBrand: [
            { required: true, message: 'select a car brand', trigger: 'blur' },
          ],
        distance: [
            // { required: true, message: 'input a number please', trigger: 'blur' },
            { validator: checkPositive, trigger: 'blur' }
          ],
     }   
    };
  },
  mounted() {
    // get brand list
    this.fetchBrands();
  },
  methods: {
    async fetchBrands() {
      try {
        const response = await this.$http.get("http://localhost:5000/brands");
        this.brands = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    // get CO2 emission
    async fetchCarbonData() {
        if(this.selectedBrand){
            try {
        const response = await this.$http.get(
          `http://localhost:5000/carbon/${this.selectedBrand}`
        );
        this.carbonData = response.data;
      } catch (error) {
        return this.$message.error("can't get emission");
      }
        }else {
            return
        }
      
    },
    calculateTotal() {
      this.total = this.carbonData * this.ruleForm.distance * 0.00005;
    },
    submitForm(formName) {
        if(this.carBrand){
            this.$refs[formName].validate((valid) => {
          if (valid) {
            this.calculateTotal()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }else{
            return this.$message.error("carBrand can't be empty");
        }
        

      },
      clearBrand(){
    this.selectedBrand = ''
  },
  resetForm(formName) {
        this.$refs[formName].resetFields();
        this.selectedBrand = ''
        this.total = ''

      }
    
  },
  
};
</script>

<style scoped>
.content {
  width: 73%;
  margin: 0 auto;
}
.headerPic {
  height: 90px;
  background-color: green;
}
.emission-content {
  background-color: orange;
  height: 600px;
}
.el-row {
  background-color: pink;
  padding: 0 !important;
}
.el-input,
.el-select {
  width: 200px;
}
.el-card {
  /* padding: 30px; */
}
.text {
  margin: 20px;
}
</style>