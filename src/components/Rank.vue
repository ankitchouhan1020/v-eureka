<template>
  <v-content>
    <v-container>
      <h1 class="display-2 text-xs-center ma-2">LEADERBOARD</h1>
      <v-subheader class="justify-center">Be a part of the hall of fame. Join the hunt.</v-subheader>
        <v-card>
          <v-card-title>
            Eureka
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <td >{{ props.item.rank}}</td>
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.branch }}</td>
              <td class="text-xs-center">{{ props.item.level }}</td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        name:'',
        search: '',
        headers: [
          {
            text: 'Rank',
            align: 'left',
            sortable: true,
            value: 'rank'
          },
          { text: 'Username',sortable: false,align: 'center', value: 'name' },
          { text: 'Branch',sortable: false,align: 'center', value: 'branch' },
          { text: 'Level',align: 'center', value: 'level' },
        ],
        users: [
          {
            value: false,
            name: 'Ankit',
            rank: 1,
            level: 12,
            branch: 'CSE'
          },
          {
            value: false,
            name: 'Anand',
            rank: 4,
            level: 1,
            branch: 'ME'
          },
          {
            value: false,
            name: 'Appu',
            rank: 10,
            level: 2,
            branch: 'ECE'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
