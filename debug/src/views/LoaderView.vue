<template lang="pug">
an-loader(:height="height" :color="color" :overlay-opacity="opac" :show-overlay="overlay")
.home
  button(@click="starten()") starten
  button(@click="overlay = !overlay") Overlay {{ overlay ? 'ausschalten' : 'einschalten' }}
  div Dauer
  input(class="text" type="number" v-model.number="duration")
  div Höhe
  input(class="text" type="number" v-model.number="height")
  div Farbe
  input(class="text" v-model="color")
  div Overlay-Opacity
  input(class="text" type="number" step="0.1" v-model.number="opac")
</template>

<script lang="ts" setup>
import '../../../src/style.css'
import { ref } from 'vue'
import { loaderService } from '../../../src/index';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const overlay = ref<boolean>(true)
const duration = ref<number>(2000)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const height = ref<number>(2)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const color = ref<string>('#ff0000')
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
