<script lang="ts" setup>
import type { PropType } from 'vue'
import './style.scss'

defineProps({
  btnColor: {
    type: String as PropType<'white'>,
    default: '',
  },
})
</script>

<template>
  <button
    type="button"
    class="button"
    :class="{
      button_white: btnColor === 'white',
    }"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
