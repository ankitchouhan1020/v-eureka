<template>
  <v-container>
    <v-content>
      <h1 class="tool-title text-xs-center">Contact Us</h1>
      <v-subheader class="justify-center">We are always ready to help you</v-subheader>

      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline"><i class="fa fa-map-marker"></i> Address</div>
                  <br>
                  <div>
                    Vision Room NTB,Maulana Azad National Institute of technology
                  </div>
                </v-card-title>

              </v-card>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline"><i class="fa fa-envelope"></i> Email</div>
                  <br>
                  <div
                  <a href="mailto:visionmanit@gmail.com">
                    visionmanit@gmail.com
                  </a>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline"><i class="fa fa-phone"></i> Whatsapp No.</div>
                </v-card-title>
                <v-card-action>
                  <div>
                  <a href="tel:+919455525935">+91-9455525935</a> ,
                  <a href="tel:+918989859127">+918989859127</a>
                  </div>
                </v-card-action>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>-->
        </v-container>
      </v-card>

    </v-content>
  </v-container>
</template>

<script>
  export default {
    name: "Rules"
  }
</script>

<style scoped>
  .tool-title {
    font-size: 3em;
    margin-bottom: -10px;
  }
</style>
