<template>
  <div class="quiz">
    <!-- steps -->
    <el-steps
      :active="parseInt(activeName) - 1"
      align-center
      finish-status="success"
    >
      <el-step title="Question1"></el-step>
      <el-step title="Question2"></el-step>
      <el-step title="Question3"></el-step>
      <el-step title="Question4"></el-step>
    </el-steps>
    <!-- quiz content -->
    <div class="quizContent">
      <el-tabs
        style="height: 200px"
        tab-position="left"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane label="Question1" name="1">
          <p>1. Do you know about "Low Carbon Life"?</p>
          <el-card>
            <el-row
              ><el-radio v-model="radio1" label="1"
                >Never heard of that</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio1" label="2"
                >Ever heard</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio1" label="3"
                >Heard about it but don't care</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio1" label="4"
                >I care a lot about it
              </el-radio></el-row
            >
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Question2" name="2" :disabled="isAvailableQ2">
          <p>
            2. Do you think low-carbon life will have a big impact on you and
            the people around you?
          </p>
          <el-card>
            <el-row
              ><el-radio v-model="radio2" label="1"
                >I don't care</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio2" label="2"
                >No effect at all</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio2" label="3"
                >Yes, but not obviously</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio2" label="4">Very big </el-radio></el-row
            >
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Question3" name="3" :disabled="isAvailableQ3">
          <p>
            Do you choose to walk, cycle, use public transportation, or share
            bikes instead of driving?
          </p>
          <el-card>
            <el-row
              ><el-radio v-model="radio3" label="1"
                >Never choose to walk, cycle, use public transportation, or
                share bikes</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio3" label="2"
                >Rarely choose to walk, cycle, use public transportation, or
                share bikes</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio3" label="3"
                >Occasionally choose to walk, cycle, use public transportation,
                or share bikes</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio3" label="4"
                >Often choose to walk, cycle, use public transportation, or
                share bikes</el-radio
              ></el-row
            >
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Question4" name="4" :disabled="isAvailableQ4">
          <p>
            Do you care about and control the consumption of electricity, water,
            and gas in your home?
          </p>
          <el-card>
            <el-row
              ><el-radio v-model="radio4" label="1"
                >Do not care about and control the consumption of electricity,
                water, and gas in your home</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio4" label="2"
                >Rarely care about and control the consumption of electricity,
                water, and gas in your home</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio4" label="3"
                >Occasionally care about and control the consumption of
                electricity, water, and gas in your home</el-radio
              ></el-row
            >
            <el-row
              ><el-radio v-model="radio4" label="4"
                >Often care about and control the consumption of electricity,
                water, and gas in your home</el-radio
              ></el-row
            >
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Result" name="5" :disabled="isAvailableQ5">
          <div v-if="result > 10">you are good</div>
          <div v-else-if="result < 10 && result > 5">you are normal</div>
          <div v-else>you are bad</div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-button type="success" class="nextButton" @click="handleNext">{{
      Next
    }}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
      radio1: "",
      radio2: "",
      radio3: "",
      radio4: "",
      Next: "Next",
      isAvailableQ2: true,
      isAvailableQ3: true,
      isAvailableQ4: true,
      isAvailableQ5: true,
      radioList: ["radio1", "radio2", "radio3", "radio4"],
      optionList: [1, 2, 3, 4],
      radioObj: {},
      result: 0,
    };
  },
  methods: {
    handleClick(tab) {
    },
    handleNext() {
      let index = parseInt(this.activeName);
      let activeNameCopy = parseInt(this.activeName) + 1;
      this.activeName = activeNameCopy.toString();
      // console.log(this.activeName);
      // console.log(this.radio1);
      if(parseInt(this.activeName)<=5){
        switch (this.activeName) {
        case "2":
          this.isAvailableQ2 = false;
          break;
        case "3":
          this.isAvailableQ3 = false;
          break;
        case "4":
          this.isAvailableQ4 = false;
          // this.Next = "Check";
          break;
        case "5":
          this.isAvailableQ5 = false;
          break;
      }
      }
      else{
        this.activeName ="5"
      }
      

      // let value = "radio"+index
      this.radioObj["radio1"] = this.radio1;
      this.radioObj["radio2"] = this.radio2;
      this.radioObj["radio3"] = this.radio3;
      this.radioObj["radio4"] = this.radio4;

      let r = Object.values(this.radioObj);
      let sum = 0;
      for (const value of r) {
        if (!isNaN(parseInt(value))) {
          // console.log(parseInt(value));
          sum += parseInt(value);
        }
      }
      this.result = sum;
    },
  },
};
</script>

<style scoped>
.quiz {
  /* background-color: orange; */
  width: 65%;
  /* height: 40px; */
  margin: 5% auto;
}
.quizContent {
  margin-top: 25px;
}
.el-row {
  margin-top: 5px;
}
.nextButton {
  margin-top: 20px;
  margin-left: 65%;
}
</style>