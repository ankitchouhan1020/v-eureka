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
                            type="text"
                            v-model="userAnswer"
                            placeholder="Write your answer here"
              ></v-text-field>
              <v-btn
                color="primary"
                @click="nextStep(n)"
              >
                Submit
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
            Oops !! Wrong Answer.
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
import firebase from 'firebase'
   export default {
     name: "Dashboard",
     data() {
       return {
         e1 : Object.assign(1,this.$store.state.user).onLevel,
         steps: 10,
         win: false,
         userAnswer: '',
         dialog: false,
         //answers: ['123','123','123','123','123','123','123','123','123','123'],
       }
     },
     computed:{
       userLevel(){
         return this.$store.state.user.onLevel;
       }
     },
     watch: {
       steps(val) {
         if (this.e1 > val) {
           this.e1 = val;
           this.$store.dispatch('setLevel',val);
         }
       }
     },
     methods: {
       answers(index){
         var ans = 5;
         let ref = firebase.database().ref('scores/' + 5);
         ref.once('value',(snapshot) => {
          this.ans = snapshot.val();
          console.log(this.ans);
         });
         return ans;
       },
       nextStep(n) {
         console.log((this.answers(n-1)));
         if (this.userAnswer == 1) {
           if (n === this.steps) {
             this.e1 = n + 1;
             this.win = true;
             alert('Hey !! You Won');
           } else {
             this.e1 = n + 1;
           }
           this.$store.dispatch('setLevel',this.e1);
         }
         else{
           this.dialog = true;
         }
         this.userAnswer='';
       },
     }
   }
</script>
