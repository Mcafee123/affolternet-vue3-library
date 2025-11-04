<template lang="pug">
link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css")
an-toasts(
  :close-icon="{ class: 'fa-solid fa-xmark' }"
  error-classes="an-toast-default error top" 
  :error-icon="{ class: 'fa-solid fa-triangle-exclamation' }"
  warn-classes="an-toast-default warning top" 
  :warn-icon="{ class: 'fa-solid fa-exclamation' }"
  info-classes="an-toast-default info top" 
  :info-icon="{ class: 'fa-solid fa-info' }"
  done-classes="an-toast-default done bottom" 
  :done-icon="{ class: 'fa-solid fa-check' }"
)
button(@click="err") Error
button(@click="warn") Warning
button(@click="info") Info
button(@click="done") Done
</template>

<script lang="ts" setup>

import { toastService } from '../../../src/index';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const err = () => {
  toastService.showError('Error')
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const warn = () => {
  toastService.showWarning('Warning')
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const info = () => {
  toastService.showInfo('Info')
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const done = () => {
  toastService.showDone('Done')
}

</script>

<style lang="scss">

.error {
  border: 1px solid black;
  background-color: red;
  color: white;
  box-shadow: 10px 5px 5px gray;
  border-radius: 4px;
}

.warning {
  background-color: orange;
  color: black;
  box-shadow: 10px 5px 5px gray;
  border-radius: 4px;
}

.info {
  background-color: blue;
  color: white;
  box-shadow: 10px 5px 5px gray;
  border-radius: 4px;
}

.done {
  background-color: green;
  color: white;
  box-shadow: 10px 5px 5px gray;
  border-radius: 4px;
}

</style>
