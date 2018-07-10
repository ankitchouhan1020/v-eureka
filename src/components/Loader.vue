<template>
  <fingerprint-spinner
    :animation-duration="1500"
    :size="64"
    color="#ff1d5e"
  ></fingerprint-spinner>
</template>

<script>
  import { FingerprintSpinner } from 'epic-spinners'
    export default {
        name: "Loader",
      component:{
        FingerprintSpinner
      }
    }
</script>

<style scoped>

</style>
