<template>
  <v-container>
    <v-content>
      <h2 class="tool-title text-xs-center ">What is Code Kriegers ?</h2>
      <v-subheader class="justify-center">As if you did not know</v-subheader>

      <v-alert
        :value="true"
        :type="success"
      >
        Top three participants will be awarded with certificate by Student Council MANIT Bhopal.
      </v-alert>

      <br>
      <blockquote class="tile-title">
        Coding is not only about making complex codes, rather it's an art. Code Kriegers was started
        in year 2014 to make coding a bit more enjoyable. It is a technical and fun event with 3 offline
        and 1 online round.<span style="color:#1eb980">The participants have to participate in a team of two for offline rounds.</span> The winners of
        online round are given direct entry to the second round of offline event.
        <br><br>
        Here are further details about each round
        <br><br>
        <h4>Online Round:</h4>
        Online round of Code Kriegers 5.0 is organised on this website. <span style="color:#1eb980">Participants have to
        participate individually.</span> Sign up on this website and Solve the question.Questions will be uploaded day wise. You can submit your answer
        as many time as you want.
        <br><br>
        <h4>DAY 1: Round 1</h4>
        The first round of Code Kriegers is an app based code hunt that is the participants have to
        decode the instructions given in C language through the ‘Code Kriegers Android App’. They
        have to complete the hunt and reach the final destination in order to complete the first
        round. Top 30 participants, that is 15 teams are selected for the next round.
        <br><br>
        <h4>DAY 2: Round 2</h4>
        In the second round of Code Kriegers, 18 teams participate, 15 selected from the first round
        and the remaining three are the winners of online round. The second round is a kind of
        rapid fire round where C snippets are displayed and participants have to answer their
        output or find the error within the code in a fixed time period. Ten teams proceed through
        this round.
        <br><br>
        <h4>DAY 3: Round 3</h4>
        In the third round of Code Kriegers, the participants have to solve five coding problems in
        the time duration of 1 hour. The participants are provided with problem statements & coding
        environment. On the basis of number of problems solved, winners are declared.
        <br><br>
      </blockquote>
    </v-content>
  </v-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>
<style scoped>
  .tool-title{
    font-size: 3em;
    margin-bottom: -10px;
  }
</style>
