<template>
  <v-content>
    <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h3 class="display-1 text-xs-center ma-4">Win the Battle</h3>
        <v-form ref="form" v-model="valid" lazy-validation>
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

        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
