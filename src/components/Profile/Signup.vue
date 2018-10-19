<template>
  <v-content>
    <v-container>
      <v-layout row wrap >
        <v-flex xs12 sm6 offset-sm3>
          <h3 class="tool-title text-xs-center ma-4">JOIN THE HUNT</h3>
          <v-form ref="form" v-model="valid" lazy-validation class="tile-title">
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
              v-model="password"
              label="Password"
              hint="At least 8 characters"
              value="12345678"
              required
              class="input-group--focused"
              @click:append="show = !show"
            ></v-text-field>
            <!--<v-select-->
              <!--v-model="select"-->
              <!--:items="braches"-->
              <!--:rules="[v => !!v || 'Branch is required']"-->
              <!--label="Branch"-->
              <!--required-->
            <!--&gt;</v-select>-->
            <!--<v-checkbox-->
              <!--v-model="checkbox"-->
              <!--label="Do you want to receive emails about our future events?"-->
            <!--&gt;</v-checkbox>-->
            <v-flex sm6 offset-sm3>
              <v-btn class="primary" @click="onSignUp" :loading="loading" :disabled="loading">
                Register
                <span slot="loader" class="custom-loader">
                   <v-icon light>cached</v-icon>
                </span>
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
      braches: ['CSE','ECE','Electrical','Civil','Royal Mech','MSME'],
      checkbox: false,
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
    },
    methods: {
      onSignUp () {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('signUserUp', {
            email: this.email, password: this.password,
            branch: this.select, fullName: this.name, newsletter: this.checkbox
          });
          this.$store.dispatch('stopLoading');
          this.$store.dispatch('clearUser');
          this.$router.push('/signin');
        }
      },
      clear () {
          this.$refs.form.reset();
        }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          console.log('Logout ho gya ,wapas se login kr ab !!');
          this.clearUser();
          this.$router.push('/signin');
        }
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
