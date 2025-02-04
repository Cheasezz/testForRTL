<script lang="ts" setup>
import './style.scss'
</script>

<template>
  <main class="main">
    <div class="main__sidebar">
      <slot name="sidebar"></slot>
    </div>

    <div class="main__main-content">
      <slot name="mainContent"></slot>
    </div>

    <div class="main__footer">
      <slot name="footer"></slot>
    </div>
  </main>
</template>
