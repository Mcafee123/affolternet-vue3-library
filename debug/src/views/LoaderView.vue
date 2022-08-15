<template lang="pug">
an-loader(:height="height" :overlay-opacity="opac" :show-overlay="overlay")
.home
  button(@click="starten()") starten
  button(@click="overlay = !overlay") Overlay {{ overlay ? 'ausschalten' : 'einschalten' }}
  div Dauer
  input(class="text" v-model="duration")
  div Höhe
  input(class="text" v-model="height")
  div Overlay-Opacity
  input(class="text" v-model="opac")
</template>

<script lang="ts" setup>
import 'affolternet-vue3-library/css'
import { ref } from 'vue'
import { loaderService } from 'affolternet-vue3-library';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const overlay = ref<boolean>(true)
const duration = ref<number>(2000)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const height = ref<number>(2)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const opac = ref<number>(0.4)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const starten = () => {
  loaderService.showLoader()
  setTimeout(stoppen, duration.value)
}

const stoppen = () => {
  loaderService.hideLoader()
}

</script>

<style lang="sass">

</style>
