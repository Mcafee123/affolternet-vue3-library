<template lang="pug">
.an-overlay(v-if="showOverlay" v-show="loaderVisible" :style="overlayStyle")
.an-slider(:style="sliderstyle")
  .an-line(:style="linestyle")
  .an-subline.an-inc(:style="linestyle")
  .an-subline.an-dec(:style="linestyle")
</template>

<script lang="ts" setup>

import { computed, defineProps, PropType, ref } from 'vue'
import { eventService } from '../services/EventService';

const props = defineProps({
  color: {
    type: String,
    default: '#4a8df8'
  },
  height: {
    type: Number,
    default: 2
  },
  showOverlay: {
    type: Boolean,
    default: true
  },
  overlayOpacity: {
    type: Number,
    default: 0.4
  }
})
const loaderVisible = ref<Boolean>(false);
const sliderstyle = computed(() => `height:${props.height}px;visibility:${loaderVisible.value ? 'visible' : 'hidden'}`)
const linestyle = computed(() =>`background: ${props.color}; height: ${props.height}px;`)
const overlayStyle = computed(() => `background-color: rgba(0, 0, 0, ${props.overlayOpacity});`)

let loadersRunning = 0;
const showLoader = (): void => {
  loadersRunning += 1
  if (loadersRunning === 1) {
    loaderVisible.value = true
  }
}
const hideLoader = (): void => {
  if (loadersRunning > 0) {
    loadersRunning -= 1
  }
  if (loadersRunning === 0) {
    loaderVisible.value = false
  }
}

eventService.on(eventService.showLoaderKey, showLoader)
eventService.on(eventService.hideLoaderKey, hideLoader)

</script>

<style lang="scss">

.an-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.an-slider{
  // position:absolute;
  width:100%;
  overflow-x: hidden;
}

.an-line{
  position:absolute;
  opacity: 0.4;
  background:#4a8df8;
  width:150%;
}

.an-subline{
  position:absolute;
  background:#4a8df8;
}
.an-inc{
  animation: increase 2s infinite;
}
.an-dec{
  animation: decrease 2s 0.5s infinite;
}

@keyframes increase {
   from { left: -5%; width: 5%; }
   to { left: 130%; width: 100%;}
}
@keyframes decrease {
   from { left: -80%; width: 80%; }
   to { left: 110%; width: 10%;}
}

</style>
