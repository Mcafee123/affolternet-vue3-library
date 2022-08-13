<template lang="pug">
an-loader(:height="40" :overlay-opacity="0.4" :show-overlay="overlay")
.home
  button(@click="starten()") starten
  button(@click="overlay = !overlay") Overlay {{ overlay ? 'ausschalten' : 'einschalten' }}
</template>

<script lang="ts" setup>
import 'affolternet-vue3-library/css'
import { ref } from 'vue'
import { eventService } from 'affolternet-vue3-library';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const overlay = ref<boolean>(true)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const starten = () => {
  console.log('emit: showloader')
  eventService.emit('showLoader')
  setTimeout(stoppen, 2000)
}

const stoppen = () => {
  eventService.emit('hideLoader')
}

</script>

<style lang="sass">

</style>
