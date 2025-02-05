<script lang="ts" setup>
import './style.scss'

const props = defineProps({
  randomWidth: {
    type: Boolean,
    default: false,
  },
})
// Случайная ширина в диапозоне от 20% до 100%
const style = props.randomWidth?`width: ${Math.random() * (100 - 20) + 20}%;`:""
</script>

<template>
  <div
    class="skeleton"
    :style="style"
  ></div>
</template>
