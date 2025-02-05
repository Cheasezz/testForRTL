<script lang="ts" setup>
import { mySkeleton } from '../..'
import './style.scss'

defineProps<{
  strCount: number
}>()
</script>

<template>
  <div class="skeleton-text">
    <mySkeleton
      class="skeleton-text__item"
      v-for="n in strCount"
      :key="n"
      :random-width="true"
    />
  </div>
</template>
