<script lang="ts" setup>
import './style.scss'
import { baseButton } from '@/shared/ui'
</script>

<template>
  <div class="sidebar">
    <div class="img-wrapper">
      <img
        src="@/shared/ui/images/nicebg.png"
        class="img"
        alt="image"
      />
    </div>
    <article class="sidebar__article">
      <h2 class="h2">QWEr</h2>
      <p class="p">qfasdf sdf sdf sdf sdfsdf sdf</p>
    </article>
    <baseButton btnColor="white">Сбросить инвентарь</baseButton>
  </div>
</template>
