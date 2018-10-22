<template>
  <v-container>
    <v-content>
      <h2 class="tool-title text-xs-center ">Day {{ myResolvedDay}}</h2>
      <br>
      <blockquote class="tile-title">
        {{ myResolvedValue }}
      </blockquote>
      <br>
      <v-lauout>
        <v-flex style="display:flex;justify-content: center;">
          <img src="..\assets\q1.png" />
        </v-flex>
      </v-lauout>

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
    </v-content>
  </v-container>
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
  .tool-title{
    font-size: 3em;
    margin-bottom: -10px;
  }
</style>
