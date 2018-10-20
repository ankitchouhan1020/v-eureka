<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 style="margin-top: 250px;">
      <v-card style="padding: 30px;">
        <v-card-title primary-title>
          <div class="questionFormat">
            <h3 class="headline mb-0">Day 1</h3>
            <div style="margin-top:10px;">{{ getQuestion }}</div>
          </div>
        </v-card-title>
        <v-text-field wrap
                      type="text"
                      v-model="userAnswer"
                      placeholder="Write your answer here"
        ></v-text-field>
        <v-btn
          color="primary"
          @click="checkAnswer()"
        >
          Submit
        </v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import firebase from 'firebase'
    export default {
      name: "Question",
      data() {
        return {
          QuestionItem: "I'm not a question ?",
          userAnswer: '',
        }
      },
      methods: {
        checkAnswer() {
          let ans = this.userAnswer;
          let tempAns ='';
          let ref = firebase.database().ref('answers/');
          ref.on('value', function (snapshot) {
            tempAns = snapshot.val();
          });
            if (ans == tempAns) {
              this.$store.dispatch('incrementPoint');
            }
            alert('Your answer has been recorded.');
            this.userAnswer = '';
        }
      },
      computed: {
        getQuestion() {
          let tempQuestion='';

          function takeQuestion(){
            return new Promise(resolve => {
            let ref = firebase.database().ref('question/');
            ref.once('value', function (snapshot) {
              let tempQuestion = snapshot.val();

              resolve(tempQuestion);
            });
            });
          }
          async function asyncCall() {
            console.log('updating Question');
            let result = await takeQuestion();
            console.log(result);
            return new Promise( resolve =>{
              resolve(result);
            })
          }
          let ans;
          ans = asyncCall().then(val => Promise.resolve(val));
          return ans;
        }
      }
    }
</script>

<style scoped>
  .questionFormat{
    margin: auto auto;
  }
</style>
