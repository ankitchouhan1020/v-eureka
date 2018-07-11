<template>
  <v-container>
    <v-content>
      <v-stepper v-model="e1" vertical class="success">
        <template v-for="n in steps">
          <v-stepper-step
            :complete="e1 > n"
            :key="`${n}-step`"
            :step="n"
          >
            Step {{ n }}
          </v-stepper-step>
          <v-divider
            v-if="n !== steps"
            :key="n"
          ></v-divider>
          <v-stepper-items>
            <v-stepper-content

              :key="`${n}-content`"
              :step="n"
            >
              <v-card
                class="mb-5"
                color="grey lighten-1"
                height="200px"
              ></v-card>
              <v-text-field wrap
                            hint="Write your answer here"
                            type="text"
                            v-model="userAnswer"
              ></v-text-field>
              <v-btn
                color="primary"
                @click="nextStep(n)"
              >
                Continue
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </template>
      </v-stepper>
      <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500"

        >
          <v-card>
            <v-card-title
              class="headline grey lighten-2 red--text"
            >
              Wrong Answer
            </v-card-title>
            <v-card-text class="success">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="accent">
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="dialog = false"
              >
                Clear
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-content>
  </v-container>
</template>

<script>

   export default {
     name: "Dashboard",
     data() {
       return {
         e1: 1,
         steps: 10,
         win: false,
         userAnswer:'',
         dialog: false,
         answers: ['123','123','123','123','123','123','123','123','123','123'],
       }
     },
     watch: {
       steps(val) {
         if (this.e1 > val) {
           this.e1 = val
         }
       }
     },
     methods: {
       nextStep(n) {

         if (this.userAnswer === this.answers[n - 1]) {
           if (n === this.steps) {
             this.win = true;
             alert('Hey !! You Won')
           } else {
             this.e1 = n + 1
           }
         }
         else{

           this.dialog = true;
         }
         this.userAnswer='';
       },

     }
   }
</script>

<style scoped>

</style>
