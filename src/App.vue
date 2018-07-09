<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="" v-for="item in menuItems" :key="item.title" router :to="item.path">
          <v-list-tile-action >
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Eureka</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <main>
        <router-view></router-view>
      </main>
    </v-container>

    <v-footer app fixed>
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
          {title: 'Dashboard', icon: 'dashboard', path: 'dashboard'},
          {title: 'Hall Of Fame', icon: 'person_pin', path: 'rank'},
          {title: 'Rules', icon: 'layers', path: 'rules'},
          {title: 'Forum', icon: 'forum', path: 'forum'},
          {title: 'Sign Up', icon: 'face', path: 'signup'},
          {title: 'Sign in', icon: 'lock_open', path: 'signin'},
        ]
      }
    }
  }
</script>
