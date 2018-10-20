<template>
  <v-content>
    <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h3 class="tool-title text-xs-center ma-4">Win the Battle</h3>
        <v-layout row v-if="error">
          <v-flex xs12 sm6 offset-sm3>
            <v-alert dismissible @input="onDismissed" :value="true">
              {{ error.message }}
            </v-alert>
          </v-flex>
        </v-layout>
        <v-form ref="form" v-model="valid" lazy-validation class="tile-title">
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
            v-model="password"
            label="Password"
            hint="At least 8 characters"
            value=''
            class="input-group--focused"
            @click:append="show = !show"
          ></v-text-field>
          <v-flex sm>
            <v-btn class="primary" @click="onSignIn" :loading="loading" :disabled="loading">
              Log in
              <span slot="loader" class="custom-loader">
                   <v-icon light>cached</v-icon>
                </span>
            </v-btn>
            <v-btn class="red" @click="onGoogleLogIn" @click.native="loader = 'loading2'" :loading="loading2" :disabled="loading2"><v-icon left>account_box</v-icon>
              Signin with Google
              <span slot="loader">Loading...</span>
            </v-btn>
            <v-btn class="first" @click="clear">clear</v-btn>
          </v-flex>
        </v-form>
      </v-flex>
    </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Signin',
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
    computed:{
      loading() {
        return this.$store.getters.loading;
      },
      loading2() {
        return this.$store.getters.loading2;
      },
      error() {
        return this.$store.getters.error;
      },
      user(){
        return this.$store.getters.user;
      }
    },
    watch: {
      user(value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/Questions')
        }
      },
      loader () {
        const l = this.loader;
        this[l] = !this[l];
        setTimeout(() => (this[l] = false), 3000);
        this.loader = null
      }
    },
    methods: {
      onSignIn () {
            this.$store.dispatch('signUserIn', {email: this.email, password: this.password});
        },
      onGoogleLogIn() {
        this.$store.dispatch('signInWithGoogle');
      },
      clear () {
        this.$refs.form.reset();
      },
      onDismissed () {
        this.$store.dispatch('clearError');
      }
    }
  }
</script>
<style scoped>
  .tool-title{
    font-size: 3em;
    margin-bottom: -10px;
  }
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
