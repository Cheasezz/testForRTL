<script lang="ts" setup>
import './style.scss'
const inventSize = 25
const sqrtInvntSize = Math.sqrt(inventSize)
const renderRows = Math.ceil(sqrtInvntSize)
const renderColumn = Math.ceil(sqrtInvntSize)

const style = `grid: repeat(${renderRows},1fr) / repeat(${renderColumn},1fr);;`
</script>

<template>
  <div class="inventory" :style="style">
    <slot name="inventoryCells"></slot>
    <slot name="modal"></slot>
  </div>
</template>
