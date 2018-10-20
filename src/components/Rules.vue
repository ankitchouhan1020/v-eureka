<template>
  <v-container >
    <v-content>
      <h1 class="tool-title text-xs-center">Contact Us</h1>
      <v-subheader class="justify-center">We are always ready to help you</v-subheader>
      <v-layout class="tile-title xs12 sm12 justify-center ma-4">
        <div class="row con" style="text-align:center">
        <div class="col s12 m12 l6 contact">
        <h5><i class="fa fa-map-marker"></i> Address: </h5><Address>Vision Room NTB,Maulana Azad National Institute of technology</Address>
        </div>
        <div class="col s12 m12 l6 contact">
          <h5><i class="fa fa-envelope"></i> Email: </h5><address><a href="mailto:visionmanit@gmail.com" style="color:#DC7633;">visionmanit@gmail.com</a></address>
        </div>
        </div>
        <div class="row con" style="text-align:center">
          <div class="col s12 m12 l6 contact">
            <h5><i class="fa fa-phone"></i> Contact: </h5><address><a href="tel:+919455525935" style="color:aqua">+91-9455525935</a>,<a href="tel:+918989859127" style="color:aqua">+91-8989859127</a></address>
          </div>
          <div class="col s12 m12 l6 contact">
            <h5><i class="fa fa-whatsapp"></i> WhatsApp: </h5><address style="color:aquamarine">+91-9455525935,+91-8989859127</address>
          </div>
        </div>
      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
    export default {
        name: "Rules"
    }
</script>

<style scoped>
  .tool-title{
    font-size: 3em;
    margin-bottom: -10px;
  }
</style>
