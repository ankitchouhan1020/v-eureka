<template>
  <v-app id="inspire" dark class="accent">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      clipped-left
      app
      class="secondary"
    >
      <v-list app>
        <v-list-tile @click="" v-for="item in menuItems" :key="item.title" router :to="item.path" class="text--darken-4">
          <v-list-tile-action >
            <v-icon >{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="tile-title">{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left :clipped-left="$vuetify.breakpoint.lgAndUp" class="secondary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="tool-title">Eureka - {{getUsername}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="primary" v-if="getUsername" @click="$store.state.username = ''">Logout</v-btn>
    </v-toolbar>

    <main>
      <v-slide-y-reverse-transition>
        <router-view></router-view>
      </v-slide-y-reverse-transition>
    </main>

    <v-footer class="success" app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: function () {
      return {
        drawer: true,
        menuItems: [
          {title: 'Home', icon: 'home', path: 'home'},
          {title: 'Dashboard', icon: 'dashboard', path: 'dashboard'},
          {title: 'Hall Of Fame', icon: 'person_pin', path: 'rank'},
          {title: 'Rules', icon: 'layers', path: 'rules'},
          {title: 'Forum', icon: 'forum', path: 'forum'},
          {title: 'Sign Up', icon: 'face', path: 'signup'},
          {title: 'Sign in', icon: 'lock_open', path: 'signin'},
        ]
      }
    },
    computed:{
      getUsername: function(){
        return this.$store.state.username;
      },
    }
  }
</script>
<style>
  .tile-title {
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
  }
  .tool-title{
    font-family: 'Eczar', serif;
    font-size: 20px;
    margin: -5px;
  }

</style>
