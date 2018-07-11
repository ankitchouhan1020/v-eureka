<template>
  <v-container>
      <v-content>
        <h1 class="text-xs-center ma-2 tool-title">LEADERBOARD</h1>
        <v-subheader class="justify-center tile-title">Be a part of the hall of fame. Join the hunt.</v-subheader>
        <v-card class="primary--text tile-title">
          <v-card-title>
            Hall Of Fame
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
            ></v-text-field>
          </v-card-title>
          <v-data-table
            class="primary"
            :headers="headers"
            :items="users"
            :search="search"
            :pagination.sync="pagination"
            hide-actions
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            sort-icon="mdi-menu-down"
          >
            <template slot="items" slot-scope="props" class="sm12">
              <td >{{ props.item.rank}}</td>
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.branch }}</td>
              <td class="text-xs-center">{{ props.item.level }}</td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </div>
        </v-card>
      </v-content>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        name:'',
        pagination: {},
        search: '',
        headers: [
          {
            text: 'Rank',
            align: 'left',
            sortable: true,
            value: 'rank',
            class: 'primary secondary--text'
          },
          { text: 'Username',sortable: false,align: 'center', value: 'name' ,class: 'primary secondary--text'},
          { text: 'Branch',sortable: false,align: 'center', value: 'branch',class: 'primary secondary--text' },
          { text: 'Level',align: 'center', value: 'level',class: 'primary secondary--text' },
        ],
        users: [
          {
            value: false,
            name: 'Ankit',
            rank: 1,
            level: 12,
            branch: 'CSE',
          },
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
          {
            value: false,
            name: 'Appu',
            rank: 10,
            level: 2,
            branch: 'ECE'
          },
          {
            value: false,
            name: 'Appu',
            rank: 10,
            level: 2,
            branch: 'ECE'
          },
          {
            value: false,
            name: 'Appu',
            rank: 10,
            level: 2,
            branch: 'ECE'
          },
          {
            value: false,
            name: 'Appu',
            rank: 10,
            level: 2,
            branch: 'ECE'
          },
          {
            value: false,
            name: 'Appu',
            rank: 10,
            level: 2,
            branch: 'ECE'
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
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
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
