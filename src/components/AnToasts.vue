<template lang="pug">
an-toast(type="error" :classes="props.errorClasses" :icon="props.errorIcon" :close-icon="props.closeIcon")
an-toast(type="warning" :classes="props.warnClasses" :icon="props.warnIcon" :close-icon="props.closeIcon")
an-toast(type="info" :classes="props.infoClasses" :icon="props.infoIcon" :close-icon="props.closeIcon")
an-toast(type="done" :classes="props.doneClasses" :icon="props.doneIcon" :close-icon="props.closeIcon")
</template>

<script lang="ts" setup>

import { defineProps, PropType } from 'vue';
import { AnIcon } from './AnToast.vue';

const props = defineProps({
  closeIcon: {
    required: false,
    type: Object as PropType<AnIcon>
  },
  errorClasses: {
    required: false,
    type: String
  },
  errorIcon: {
    required: false,
    type: Object as PropType<AnIcon>
  },
  warnClasses: {
    required: false,
    type: String
  },
  warnIcon: {
    required: false,
    type: Object as PropType<AnIcon>
  },
  infoClasses: {
    required: false,
    type: String
  },
  infoIcon: {
    required: false,
    type: Object as PropType<AnIcon>
  },
  doneClasses: {
    required: false,
    type: String
  },
  doneIcon: {
    required: false,
    type: Object as PropType<AnIcon>
  }
})

</script>

<style lang="scss">

</style>
