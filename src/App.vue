<template>
  <v-app dark class="accent">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      clipped-left
      app
      class="secondary"
    >
      <v-list app v-if="user">
        <v-list-tile @click="" v-for="item in afterLoginNav" :key="item.title" router :to="item.path" class="text--darken-4">
          <v-list-tile-action >
            <v-icon >{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="tile-title">{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list app v-else>
        <v-list-tile @click="" v-for="item in beforeLoginNav" :key="item.title" router :to="item.path" class="text--darken-4">
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
      <v-toolbar-title class="tool-title">Code Kriegers</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="primary" v-show="user" @click="onLogout"><v-icon left>exit_to_app</v-icon>Logout</v-btn>
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
      }
    },
    computed:{
      user() {
        return this.$store.getters.user;
      },
      beforeLoginNav (){
        return this.$store.getters.beforeLoginNav;
      },
      afterLoginNav (){
        return this.$store.getters.afterLoginNav;
      },

    },
    methods: {
      onLogout(){
        this.$store.dispatch('onLogout');
        this.$router.push('/home');
      }
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
