<template>
  <v-content>
    <v-container>
      <v-layout row wrap >
        <v-flex xs12 sm6 offset-sm3>
          <h3 class="display-1 text-xs-center ma-4">JOIN THE HUNT</h3>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="25"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              hint="At least 8 characters"
              value=''
              class="input-group--focused"
              @click:append="show = !show"
            ></v-text-field>
            <v-select
              v-model="select"
              :items="braches"
              :rules="[v => !!v || 'Branch is required']"
              label="Branch"
              required
            ></v-select>
            <v-checkbox
              v-model="checkbox"
              label="Do you want to receive email about our future events?"
            ></v-checkbox>

            <v-btn
              :disabled="!valid"
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-flex>

      </v-layout>
    </v-container>
  </v-content>


</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Signup',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      braches: [
        'CSE',
        'ECE',
        'Electrical',
        'Civil',
        'Royal Mech',
        'MSME'
      ],
      checkbox: false,
      show : false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
