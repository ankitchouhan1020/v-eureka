<template>
  <v-container >
    <v-content>
      <h1 class="tool-title text-xs-center">Frequently Asked Questions</h1>
      <v-subheader class="justify-center">Where is the fun without a bit of risk?</v-subheader>
      <v-layout class="tile-title xs12 sm12 justify-left ma-4">
        <template>
          <v-expansion-panel popout focusable light>
            <v-expansion-panel-content
              v-for="(item,index) in faq" :key="index"
            >
              <div slot="header">{{item.question}}</div>
              <v-card>
                <v-card-text>{{item.answer}}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </template>
      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
    export default {
        name: "Forum",
      data(){
          return{
            faq: [
              {question: "Is it compulsory to play online round ?",
                answer:"NO , but , it will be fun and testing yourself for off-line round . Also , winning online round\n" +
                "will get you straight through to the second round."},
              {question: "What will be there in On-line round ?",
                answer:"On-line round will judge your basic coding and problem solving skills ."},
              {question: "What will be the format of On-line round ?",
                answer:"On-line round will be of 5 days and each day will have 1 question whose answer\n" +
                "shall be submitted to us on our website / docs we post . The first question will be posted on 20th\n" +
                "October, i.e this Saturday on our website."},
              {question: "If I am an online round winner, can I still play off-line round 1 ?",
                answer:"YES, you surely can , but playing won&#39;t have any further perks apart from things you\n" +
                "learn from the round and FUN"},
              {question: "Do I have to pay some amount of money for the contest (online/offline)?",
                answer:"It's completely free for everyone (both rounds) ."},
              {question: "Do we have to register ourselves for online rounds?",
                answer:"Yes you'll need to fill the same old doc form."},
              {question: "Is there any time limitation in online round questions ?",
                answer:"Yes, you will have to submit the answer of questions posted\n" +
                "on a particular day before the answer of that question is posted on the next day"},
              {question: "What if I lose in online round, would I still be able to participate in offline round ?",
                answer:"Yes, anyone can participate in the offline round irrespective of his/her participation in online round"},
              {question: "How many rounds will be there ?",
                answer:"In offline round there will be total of three rounds the winners of online round directly get entry\n" +
                "into the second round"},
            ]
          }
      }
    }

</script>

<style scoped>
  .tool-title{
    font-size: 3em;
    margin-bottom: -10px;
  }
</style>
