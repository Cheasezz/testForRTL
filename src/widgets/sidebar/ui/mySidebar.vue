<script lang="ts" setup>
import { useItemStore } from '@/entities/inventory'
import './style.scss'
import { baseButton, mySkeleton, skeletonText } from '@/shared/ui'

const itemStore = useItemStore()
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
      <h2 class="h2">
        <mySkeleton />
      </h2>
      <p class="p">
        <skeletonText :strCount="6" />
      </p>
    </article>
    <baseButton
      @click="itemStore.$reset"
      btnColor="white"
      >Сбросить инвентарь</baseButton
    >
  </div>
</template>
