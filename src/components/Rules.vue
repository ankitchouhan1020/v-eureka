<template>
  <v-container>
    <v-content>
      <h1 class="tool-title text-xs-center">Contact Us</h1>
      <v-subheader class="justify-center">We are always ready to help you</v-subheader>
        <v-container
          fluid
          grid-list-md text-xs-center
        >
          <v-layout align-space-between justify-center column fill-height>
            <v-flex xs4>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline"><i class="fa fa-map-marker"></i> Address</div>
                  <v-divider light></v-divider>
                  <div>
                    Vision Room NTB,Maulana Azad National Institute of technology
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline"><i class="fa fa-envelope"></i> Email</div>
                  <v-divider light></v-divider>
                  <div>
                  <a href="mailto:visionmanit@gmail.com">
                    visionmanit@gmail.com
                  </a>
                  </div>
                 <br><br>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div class="headline"><i class="fa fa-phone"></i> Whatsapp No.</div>

                <v-divider light></v-divider>
                  <div>
                  <a href="tel:+919455525935">+91-9455525935</a> ,
                  <a href="tel:+918989859127">+918989859127</a>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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
