<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 style="margin-top: 150px;">
      <v-card style="padding: 30px;">
        <v-card-title primary-title>
          <div class="questionFormat" style="text-align: center">
            <h3 class="headline mb-0">Day {{ myResolvedDay}}</h3>
            <div style="margin-top:10px;font-size: 24px;">{{ myResolvedValue }}</div>
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
  import AsyncComputed from 'vue-async-computed'
  import firebase from 'firebase'
    export default {
      name: "Question",
      data() {
        return {
          QuestionItem: "",
          userAnswer: '',
        }
      },
      methods: {
        checkAnswer() {
            if (this.userAnswer == this.myResolvedAnswer) {
              this.$store.dispatch('incrementPoint',this.myResolvedDay);
            }
            alert('Your answer has been recorded.');
            this.userAnswer = '';
        },
      },
      asyncComputed:{
        myResolvedValue: {
          get(){
            return new Promise(resolve => {
              let ref1 = firebase.database().ref('question/');
              ref1.once('value', function (snapshot) {
                let tempQuestion = snapshot.val();
                resolve(tempQuestion);
              });
            });
          },
          default: ''
        },
        myResolvedDay: {
          get(){
            return new Promise(resolve => {
              let ref2 = firebase.database().ref('day/');
              ref2.once('value', function (snapshot) {
                let myday = snapshot.val();
                resolve(myday);
              });
            });
          },
          default: ''
        },
        myResolvedAnswer: {
          get(){
            return new Promise(resolve => {
              let ref3 = firebase.database().ref('answers/');
              ref3.once('value', function (snapshot) {
                let myanswers = snapshot.val();
                resolve(myanswers);
              });
            });
          },
          default: ''
        }
      }
    }
</script>

<style scoped>
  .questionFormat{
    margin: auto auto;
  }
</style>
